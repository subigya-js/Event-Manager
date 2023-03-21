from flask import Flask, request
from flask import jsonify
import cv2
import mediapipe as mp
import numpy as np
import json
from scipy.spatial import procrustes
import pymongo
import qrcode
from io import BytesIO
import base64
import os
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
client = pymongo.MongoClient("mongodb+srv://ethicalbyte:Ethicalbyte@cluster0.bxhz060.mongodb.net/ethicalbyte?retryWrites=true&w=majority")
db = client["jaipurhackathon"]
users_collection = db["users"]

def img_to_landmark(img_path):
    img = cv2.imread(img_path)
    mp_face_mesh = mp.solutions.face_mesh
    face_mesh = mp_face_mesh.FaceMesh()
    results = face_mesh.process(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
    landmarks = np.array([[landmark.x, landmark.y,landmark.z] for landmark in results.multi_face_landmarks[0].landmark])
    return landmarks

def image_to_landmark(img_path):
    # Initialize MediaPipe Face Mesh model
    mp_face_mesh = mp.solutions.face_mesh
    face_mesh = mp_face_mesh.FaceMesh(static_image_mode=True, max_num_faces=1, min_detection_confidence=0.5)

    # Read input image
    image = cv2.imread(img_path)

    # Convert image to RGB format
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    # Get facial landmarks
    results = face_mesh.process(image_rgb)
    landmark_dict = {}
    if results.multi_face_landmarks:
        landmarks = results.multi_face_landmarks[0]
        for i, landmark in enumerate(landmarks.landmark):
            landmark_dict[f"point_{i}"] = {"x": landmark.x, "y": landmark.y, "z": landmark.z}
    return landmark_dict

def compare_images_distance(landmarks1,landmarks2):
    points1 = []
    points2 = []
    for i in range(68):
        point1 = landmarks1[f"point_{i}"]
        point2 = landmarks2[f"point_{i}"]
        points1.append([point1["x"], point1["y"],point1["z"]])
        points2.append([point2["x"], point2["y"],point2["z"]])
    mean1 = np.mean(points1, axis=0)
    std1 = np.std(points1)
    points1_norm = (points1 - mean1) / std1
    mean2 = np.mean(points2, axis=0)
    std2 = np.std(points2)
    points2_norm = (points2 - mean2) / std2

    # Find the optimal rotation and translation
    mtx1, mtx2, disparity = procrustes(points1_norm, points2_norm)

    # Compute the Procrustes distance
    procrustes_distance = np.sum(np.square(mtx1 - mtx2))
    return procrustes_distance

def data_json(name,mobile_no,email,landmark,checked_in):
    json_data = {
        "name": name,
        "mobile_no": mobile_no,
        "email": email,
        "landmark": landmark,
        "checked_in": checked_in
    }
    if users_collection.find_one({"name": name,
        "mobile_no": mobile_no,
        "email": email}) is not None:
        return True
    else:
        users_collection.insert_one(json_data)
        return False

@app.route('/register', methods=['POST'])
@cross_origin()
def register():
    name = request.form.get('name')
    mobile_no = request.form.get('mobile_no')
    email = request.form.get('email')
    img_file = request.files['file']
    checked_in = "False"
    img_path = img_file.filename
    img_file.save(img_path)

    # Get facial landmarks from the input image
    landmarks = image_to_landmark(img_path)
    os.remove(img_path)
    # Save user data and landmarks to MongoDB
    duplicate = data_json(name, mobile_no, email, landmarks,checked_in)
    if duplicate:
        return jsonify({"message":"User with above credentials already exists!"})

    return jsonify({"message": "User registered successfully."})


@app.route('/checkin', methods=['POST'])
@cross_origin()
def checkin():
    mobile_no = request.form.get('mobile_no')
    img_file = request.files['file']
    print(type(img_file))
    img_path =  img_file.filename
    img_file.save(img_path)

    # Retrieve user's data from MongoDB
    user = users_collection.find_one({"mobile_no": mobile_no})
    #print(user)
    if user is None:
        return jsonify({"message": "User not found."}), 404

    # Extract landmarks from the uploaded image
    new_landmarks = image_to_landmark(img_path)

    # Compare the new landmarks with the stored landmarks
    stored_landmarks = user['landmark']
    distance = compare_images_distance(stored_landmarks, new_landmarks)
    os.remove(img_path)
    # If the distance is less than 0.1, then the user is verified
    if distance < 0.01:
        #generate qr code after confirming the user with the user details and confirmed equals to true
        users_collection.update_one({"mobile_no": mobile_no},{"$set": {"checked_in": "True"}})
        curr_user = users_collection.find_one({"mobile_no": mobile_no})
        #get the user details
        details_str = "Name:{0} \nMobile No.:{1} \nEmail:{2} \n CheckIn Status:{3}".format(
            curr_user['name'],
            curr_user['mobile_no'],
            curr_user['email'],
            curr_user['checked_in']
        )
        
        # Generate the QR code
        qr = qrcode.QRCode(version=1, box_size=10, border=5)
        qr.add_data(details_str)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        img_io = BytesIO()
        img.save(img_io, 'PNG')
        img_io.seek(0)
        base64_img = base64.b64encode(img_io.getvalue()).decode('ascii')
        return jsonify({'qr_code': base64_img}) 
    else:
        return jsonify({"message": "User verification failed."}), 401
    
@app.route('/admin', methods=['GET'])
@cross_origin()
def detail_for_admin():
    registered_no = users_collection.count_documents({})
    checked_in_no = len(list(users_collection.find({"checked_in":"True"})))
    return jsonify({"registered_user":registered_no,"checkedin_user":checked_in_no})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
