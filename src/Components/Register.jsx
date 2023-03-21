// import React, { useState } from "react";
import "./Register.css";

// const Register = () => {
//   const [formChange, setFormChange] = useState({
//     Name: "",
//     mobile_no: "",
//     email: "",
//     file: null,
//   });

//   const Name = formChange.Name;
//   const number = formChange.number;
//   const email = formChange.email;

//   const [finalChange, setFinalChange] = useState({
//     finalName: "",
//     finalMobile_no: "",
//     finalEmail: "",
//     finalFile: null,
//   });

//   const change = (event) => {
//     event.preventDefault();
//     const val = event.target.value;
//     const nam = event.target.name;

//     if (nam === "Name") {
//       setFormChange({
//         ...formChange,
//         name: val,
//       });
//     }

//     if (nam === "email") {
//       setFormChange({
//         ...formChange,
//         email: val,
//       });
//     }

//     if (nam === "number") {
//       setFormChange({
//         ...formChange,
//         mobile_no: val,
//       });
//     }

//     if (nam === "photo") {
//       setFormChange({
//         ...formChange,
//         file: val,
//       });
//     }
//   };

//   const formSubmit = (event) => {
//     event.preventDefault();

//     setFinalChange({
//       finalName: formChange.Name,
//       finalMobile_no: formChange.mobile_no,
//       finalEmail: formChange.email,
//     });

//     console.log(finalChange);
//     // console.log(formData);
//   };

//   // const formData = new FormData();
//   // formData.append("name", finalChange.name);
//   // formData.append("mobile_no", finalChange.mobile_no);
//   // formData.append("email", finalChange.email);
//   // formData.append("file", finalChange.file);

//   // fetch(
//   //   "https://faceapi-service.ubsbto1gdi65m.us-west-2.cs.amazonlightsail.com/register",
//   //   {
//   //     method: "POST",
//   //     body: formData,
//   //   }
//   // )
//   //   .then((response) => response.json())
//   //   .then((data) => {
//   //     console.log(data);
//   //   })
//   //   .catch((error) => {
//   //     console.error(error);
//   //   });

//   return (
//     <>
//       <div className="register-form">
//         <form>
//           <p className="form-heading">Register</p>

//           <div className="txt-field">
//             <input
//               value={formChange.name}
//               type="text"
//               placeholder="Name"
//               autoComplete="off"
//               name="Name"
//               onChange={change}
//               // required
//             />
//           </div>

//           <div className="txt-field">
//             <input
//               value={formChange.email}
//               type="email"
//               placeholder="Email Address"
//               autoComplete="off"
//               name="email"
//               onChange={change}
//               // required
//             />
//           </div>

//           <div className="txt-field">
//             <input
//               value={formChange.number}
//               type="number"
//               placeholder="Phone Number"
//               onChange={change}
//               autoComplete="off"
//               name="number"
//               maxLength="10"
//               size="10"
//               // required
//             />
//           </div>

//           <div className="photo-field">
//             <p className="photo-title">Upload your Photo here</p>
//             <input
//               className="photo-input"
//               type="file"
//               accept="image/png, image/jpeg, image/jpg"
//               // placeholder="Photo"
//               autoComplete="off"
//               name="photo"
//               onChange={change}
//               // required
//             />
//           </div>

//           <button type="submit" onClick={formSubmit} className="btn">
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import "./Register.css";

// const Register = () => {
//   const [formChange, setFormChange] = useState({
//     tempname: "",
//     tempemail: "",
//     tempnumber: "",
//     tempfile: "",
//   });

//   const fname = formChange.tempname;
//   const femail = formChange.tempemail;
//   const fnumber = formChange.tempnumber;
//   const ffile = formChange.tempfile;

//   const [finalChange, setFinalChange] = useState({
//     name: "",
//     email: "",
//     number: "",
//     file: "",
//   });

//   const change = (event) => {
//     event.preventDefault();
//     const val = event.target.value;
//     const nam = event.target.name;
//     const fileName = event.target.files[0];

//     if (nam == "Name") {
//       setFormChange({
//         ...formChange,
//         tempname: val,
//       });
//     }

//     if (nam == "email") {
//       setFormChange({
//         ...formChange,
//         tempemail: val,
//       });
//     }

//     if (nam == "number") {
//       setFormChange({
//         ...formChange,
//         tempnumber: val,
//       });
//     }

//     if (nam == "photo") {
//       setFormChange({
//         ...formChange,
//         tempfile: fileName,
//       });
//     }
//   };

//   const formSubmit = (event) => {
//     event.preventDefault();

//     setFinalChange({
//       name: fname,
//       email: femail,
//       number: fnumber,
//       file: ffile,
//     });
//   };

//   console.log(finalChange);

//   return (
//     <>
//       <div className="register-form">
//         <p className="form-heading">Register</p>
//         <form>
//           <div className="txt-field">
//             <input
//               value={formChange.tempname}
//               type="text"
//               placeholder="Name"
//               autoComplete="off"
//               name="Name"
//               onChange={change}
//               // required
//             />
//           </div>

//           <div className="txt-field">
//             <input
//               value={formChange.tempemail}
//               type="email"
//               placeholder="Email Address"
//               autoComplete="off"
//               name="email"
//               onChange={change}
//               // required
//             />
//           </div>

//           <div className="txt-field">
//             <input
//               value={formChange.tempnumber}
//               type="number"
//               placeholder="Phone Number"
//               autoComplete="off"
//               name="number"
//               onChange={change}
//               // required
//             />
//           </div>

//           <div className="photo-field">
//             <p className="photo-title">Upload your Photo here:</p>
//             <input
//               className="photo-input"
//               id="firstimg"
//               type="file"
//               accept="image/png, image/jpeg, image/jpg"
//               // placeholder="Photo"
//               autoComplete="off"
//               name="photo"
//               onChange={change}

//               // required
//             />
//           </div>

//           <button type="submit" onClick={formSubmit} className="btn">
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* <h4>Your details are: </h4>

//       <p>Name: {finalChange.name}</p>
//       <p>Email: {finalChange.email}</p>
//       <p>Number: {finalChange.number}</p>
//       <img src={finalChange.file} /> */}
//     </>
//   );
// };

// export default Register;

import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile_no", mobile);
    formData.append("email", email);
    formData.append("file", photo);

    fetch(
      "https://faceapiv-service.ubsbto1gdi65m.us-west-2.cs.amazonlightsail.com/register",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // handle success response
        alert("User Registered Successfully!");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        className=""
      />

      <label htmlFor="mobile">Mobile:</label>
      <input
        type="text"
        id="mobile"
        name="mobile_no"
        value={mobile}
        onChange={handleMobileChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />

      <label htmlFor="photo">Photo:</label>
      <input
        type="file"
        id="photo"
        name="photo"
        accept="image/*"
        onChange={handlePhotoChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
