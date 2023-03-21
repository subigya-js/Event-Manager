# Team DRSSS
# Project Title
### Description
This application helps to manage the registration process andd the checkin process for an event by eliminating the most tough part i.e standing in long queues.This application collects user information at registration and automatically validates user credentials during check-in, removing the tiresome aspect of standing in lengthy lines. When the image is shot at various angles and tilts that might happen while taking the picture, this application also provides improved accuracy and better outcomes.
The application will generate a QR code when the check-in is successful, which may be scanned to get access to the venue's numerous amenities.

### Objectives
* FaceRecognition in Real Time.
* Enhanced speed of Frames.
* Detect People with masks and other occlusions.
* Able to analyze 3D Images.

The user details and the image should be uploaded by the user manually at the initial stage ie the registration process.

For the purpose of facial recognition, a python library called face_recognition, dlib, mediapipe and opencv_python are used.

Backend of the app is build by using Flask and MongoDB for the Database.

For the Frontend part of the application HTML,CSS,JavaScript and React Frameworks are used.

For the deployment purpose Amazon Web Services (AWS).

## User Journey:
This application is to ease the process of registering in an particular event and for the organisers to effectievely manage the smoothflow of the event.

Initially when an user wants to attend an event they have to register for the event and for the registration process they have to give some of the details and they are:
* Name
* Contact Number
* E-mail ID
* Photograph

Here the name,contact number and the email is neede to be tyed and fill in the registration form and the Photograph is needed to be uploaded to the form in (jpg,jpeg or img) format.

After the registration process is done the user needs to checkin for the event on the event day at the event.

Checkin process also has fileds needed to be verified they are;
- Contact Number
- Location 
-  Real-Time Verification

Contact number asked so that based on that othe details can be acessed out of the Database through it and Location is acessed to get to know that weather the person is at the event Location or not. 

If the perosn is in the desired range of Location (i.e in the area of given radius) then only the person will be able to checkin for the event. In this particular application we have set the radius of 150m it can be adjusted by the admin of the event.

The last phase, real-time verification, determines if the user is genuinely logging in or whether a forger is utilising the user's identity.

#### Admin
They are generally the ones who are organising the event they have the following controls:
 - Creating Event
 - Changing the Event Date and Timings.
 - Handling participant details from the Database.
 - Other parameters like adjusting the minimum distance for checking in for the event.

## Installation
#### Steps to run this web application on your local system(Windows):
1. Clone github repo to local system : 
   - Open Windows Powershell or Command Prompt or Git Bash CLI.
   - Go to the directory where you want to clone the github repo.
   - Run the command below to clone repo:
    cmd
    git clone https://github.com/
    
2. Use the package manager [pip](https://pip.pypa.io/en/stable/) to install the requirements.
   - Go to the respective directory where the file requirements.txt is present then use the following command on the Command Prompt to download the requirements to run this application.
cmd
pip install -r requirements.txt

3. Then go to the root directory of the Project ie 

cd/event_manager

4. Run the Project on the local host.
