// import React, { useState } from "react";
// import "./Check_in.css";
// // import Phone from "./Check_In_Components/Phone";
// import { useNavigate } from "react-router-dom";
// import { GrFormUpload } from "react-icons/gr";

// const Check_in = () => {
//   // const change = (event) => {
//   //   const val = event.target.files[0];
//   // };

//   const [mobile, setMobile] = useState("");
//   const [photo, setPhoto] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("mobile_no", mobile);
//     formData.append("file", photo);

//     fetch(
//       "https://faceapiv-service.ubsbto1gdi65m.us-west-2.cs.amazonlightsail.com/checkin",
//       {
//         method: "POST",
//         body: formData,
//       }
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         // handle success response
//         console.log(response);
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//       });
//   };

//   const handleMobileChange = (event) => {
//     setMobile(event.target.value);
//   };

//   const handlePhotoChange = (event) => {
//     setPhoto(event.target.files[0]);
//   };

//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="phone_number">
//         <div className="check_in">
//           <div className="phone-number">
//             <label>Enter your Phone Number:</label>
//             <input type="text" placeholder="Phone Number" />

//             <div className="photo-field">
//               <p className="photo-title">Upload your Photo here</p>
//               <input
//                 className="photo-input"
//                 id="firstimg"
//                 type="file"
//                 accept="image/png, image/jpeg, image/jpg"
//                 // placeholder="Photo"
//                 autoComplete="off"
//                 name="photo"
//                 onChange={handlePhotoChange}

//                 // required
//               />
//             </div>

//             {/* <div className="below-buttons">
//               <button
//                 className="next"
//                 onClick={() => {
//                   navigate("/location");
//                   // <Location />
//                 }}
//               >
//                 Next
//               </button>
//             </div> */}
//           </div>
//         </div>
//       </div>

//       {/* </div> */}
//       {/* </div> */}
//       <div className="qr"></div>
//     </>
//   );
// };

// export default Check_in;

// import React, { useState } from "react";
// import "./Register.css";

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

// import { resolveComponentProps } from "@mui/base";
// import React, { useState } from "react";
// import { json } from "react-router-dom";
// import "./Check_in.css";

// function Register() {
//   const [mobile, setMobile] = useState("");

//   const [photo, setPhoto] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();

//     formData.append("mobile_no", mobile);

//     formData.append("file", photo);

//     const response = await fetch(
//       "https://faceapiv-service.ubsbto1gdi65m.us-west-2.cs.amazonlightsail.com/check-in",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     if (response.ok) {
//       console.log(response)
//       // const qrCodeBase64 = await response.text();
//       // console.log(qrCodeBase64);
//       // Handle the qr code data here
//     }
//    try {
//      else {
//       setError("Error uploading image");
//     }
//   }
//   catch (error) {
//     console.log(error);
//     setError("Error uploading image");
//   }
// };

//     const handleMobileChange = (event) => {
//       setMobile(event.target.value);
//     };

//     const handlePhotoChange = (event) => {
//       setPhoto(event.target.files[0]);
//     };

//     return (
//       <form onSubmit={handleSubmit} className="register-form">
//         <label htmlFor="mobile">Mobile:</label>
//         <input
//           type="text"
//           id="mobile"
//           name="mobile_no"
//           value={mobile}
//           onChange={handleMobileChange}
//         />

//         <label htmlFor="photo">Photo:</label>
//         <input
//           type="file"
//           id="photo"
//           name="photo"
//           accept="image/*"
//           onChange={handlePhotoChange}
//         />

//         <button type="submit">Check In</button>
//       </form>
//     );
//   };
// }
// export default Register;

// import React, { useState } from "react";
// import "./Check_in.css";

// function Check_in() {
//   const [mobile, setMobile] = useState("");
//   const [photo, setPhoto] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("mobile_no", mobile);
//     formData.append("file", photo);

//     const response = await fetch(
//       "https://faceapiv-service.ubsbto1gdi65m.us-west-2.cs.amazonlightsail.com/check-in",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     if (response.ok) {
//       const qrCodeBase64 = await response.text();
//       console.log(qrCodeBase64);
//       // Handle the qr code data here
//     } else {
//       console.log("Error uploading image");
//     }
//   };

//   const handleMobileChange = (event) => {
//     setMobile(event.target.value);
//   };

//   const handlePhotoChange = (event) => {
//     setPhoto(event.target.files[0]);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="register-form">
//       <label htmlFor="mobile">Mobile:</label>
//       <input
//         type="text"
//         id="mobile"
//         name="mobile_no"
//         value={mobile}
//         onChange={handleMobileChange}
//       />

//       <label htmlFor="photo">Photo:</label>
//       <input
//         type="file"
//         id="photo"
//         name="photo"
//         accept="image/*"
//         onChange={handlePhotoChange}
//       />

//       <button type="submit">Check In</button>
//     </form>
//   );
// }

// export default Check_in;

import React, { useState } from "react";
import "./Check_in.css";

function Check_in() {
  const [mobile, setMobile] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    const qrCode = {
      "9353636583": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAH+AQAAAABVFFGIAAAEJElEQVR4nO2dy43cOBCGv1oK6KMEdAATiiaDDclwSM6gFYoDMEAdB5BQe+BDlHsAH4beHrd/HYSmRH0ggUK9WGSb86Fr/+dj34MAAggggAACCCCAAAIIIMAvAIvlCwB7BVim3Vimtmk27aXn1HcEAvzlANzd3W+ju7tvuZl/1VsMDucu5YvHT0GA5wLsWc0tNsAyBTebggPBzV621IUldcm6s+8IBBDg58u+fB8AdoPVzG/pdnkv9/hJpyDAnwYY3nvosOGsFzdGB8YfA7ODzXHvPQIBBDgBgrvH+ng1s9dxw2/rkN6amZl/nYDZ3e8BHx6BAAKQRM9sAMY3Y3nZ8K/TbqkJu/lt3FLXFDq/9h6BAH83oAbL5coxsZdgOYbm2f2l2FmAPoCak9lKM+ZnQHBm30hv55TK2drPJIkC9AI0CUTmpP82gJA8Qb+N7sy1S5XEml58/BQEeApAqxNn30o40sif51BmjuC3qielEwXoCihZnBIiwzrhsA/APjB/u27G6KTbHK8469VZ/o19RiCAAEC1zvFwEY81PrImTGELcCz5VYv9+CkI8BSAxjq3y8sxu4jltmXDzFhTifITBegJKJIISf+Rg5XgqVl9whxFly+kEwXoC6iSGHLusDYP/Zfj6fGw2EeOUZIoQB9A6ydmgcupxGSsqybMsfOYtaOsswB9AU21IYdNbqxzEsfaZfSfYpfHT0GApwC0da8pbCmlsc2tKsvWTstPFKAn4OQnelGMENooJi/5lQQOpbMkUYBugMZPPAQuxSQpRI6hVoCF6kCCrLMAfQGtJKY1vgi0AleVYMy+Y1kalCQK0BFw0okR2tw1oU15z40DqVocAXoDzqt9oRjmeLzItWBtkUSNpyWJAvQCNPtYbP62m8Obedq9sl43GN/MWQds/n5xy87idnz1+CkI8BSAZrWvzeccb+OpXDZdNbMonShAL0CrExl/DA5gc7xusE4Au5VnOMtr2Ix12Kov+fgpCPAUgMYdPGpxcsRcFpqbzLZ7rspRxCJAX8B5R1U2wlkmqcsrdTNBNuBaYxGgN+B0yk2JnUtmsaq+CK2yJMhPFKAzoK2AqGlrz1XZpQynEcxUvS3rLEBvwH3NNuSC2NtRkFh3FOQXip0F6A04V4XVzSyx7F5x95OLCCQTrcy2AF0B75wB0UbMWRLH8qLubZFOFKAv4KTroDHRrU1OZ0DAse4nP1GA3wPIGg6W6XQaSVPHPdZn68V1urEAfQGnc3HGNlg+RSzehDLyEwX4fwDBycfJXvIRx0lPHhU4kaQ7f9cIBBAA0lmJgH050jbrgNnLm5X/KLiUbPcnnYIAfx7g/r8HYluufSQQSxRd1lhknQXoCriLnW+cEjjVReTYUaCzwgToDzD9l6kAAggggAACCCCAAAII8GkB/wG7ZQs/dBQQ2wAAAABJRU5ErkJggg==",
      "9380097084": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAH+AQAAAABVFFGIAAAD1klEQVR4nO2dQY6jMBBFfw2RemluMEdxbjBnmpuRA7Vkli2BahZ22eWQWbVRpzufBUqAPIH0VeX6LhNRfGrbf33u9wABBBBAAAEEEEAAAQQQQMB/N1VV1aV9TQBiAnTBpAAmRUyTquoGIGx2ZVBV1e3rH4GAHwEwJRZdQTVNqgsm7T4BiLqhXOJ/8fWPQMCPAFRdlYBn0XFSxIQcHQFM+bJ2CZVIwFjA5Xho2oB1FiAocJunDcAuCuwPLn6CRyDghwLCBrmGDcAqIlfsIiJvKjJbnDz7Dgh4aYANB4FdgPVNcZunMhxcwocgpl307wwgquoR8Ok7IOClAZZwV3EH9fb7Q/T25z3nZM3H5vd8tlwZBt0BAQQAsIqlbblYbnVymtxJ827axoqFgDGArnYGsvSAoNlKLC5iNXXK1yZgKpGAMYAmqWrMuICXj5WBYXCjQ7o4BAwGdNk5AQAsJsbkdVqc7RwxN8ZEAgYDfHbuamKUMWGaFNEpEbDJPyqRgIEAN3fXHS5Tzm0AmbeoqjbvRyUSMBBgkkqt5QGwxOwnmhEtdprHSCUSMBBQlVhEWBRW828OljVi5iYdq2KoRAKGAXx2jrn5Bl1hklBzcpFj+wWVSMAwgHdxsm2DkqdtB+SuxJhrF7UmHcZEAkYCDjExWzmhdoBZJnb6yxJlTCRgJKCvWMouV8dL6CuWNLnxJGMiAWMBnZ/YeYfdHPN2WFHA1QMEnAJYL0BuCAOgy3qBLrk/TAS3uUhProDpdPQdEPDagPuY6EoUN+9X42QNlszOBIwF9F1hm8u/xVQ0Z7Fl52L0UIkEjAT4VaYxdforHvedlW1NiqydCRgKcHMsWXWl76aqs6XjBKuYE2MiAaMBXoluqX2tSXI93YxGAIyJBJwAcNnZguDDST14o5tdYQScBghqPuEqokvYIFcA2cW5224z7OwzPQIB3xpwP060bhszdZqpXUeH7E8k4ARAn53bAueWji0n1yXRrkmRSiRgFKDr2TY/uziLLTA2Z8deHUZnm4CxgPt1LFrXkbb+2K5Te2OnLAFnAJwSjy9RLH5O6551lzA7EzAU8PgdEEs+VzNxahlb1e2oRAJGAR68U7Y52210CJRRJLMzAecCqoF9mwFgfVNdsIvIvAvqotOyWy923TM9AgHfGvD4nbJR25qB9tKHOpSki0PAcMBRiRYdbUVL87hdTqazTcD5gF1K6g1b7d4G5Ipd9O+8i8h88h0Q8IKA438P9Ls67+L7uEFnm4DRgEPtnD/1wnS+tzN1qEQCBgKE/2VKAAEEEEAAAQQQQAABBDwt4B8aUHHOOCCbTwAAAABJRU5ErkJggg==",
      "8197353553": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAH+AQAAAABVFFGIAAAD5UlEQVR4nO2dQW7jMAxFP0cBsnSAOUCP4t5srmYfqICyDGCDsxApUUlmFWWatl8Lw2rsBxsgKH6KdEXx0Nh/PXY/QAABBBBAAAEEEEAAAQQQ8M+hqqq6tGluZ0kBJMWck6rqBmDa/MpJVVW3z38FAr4VwOwKAMz+5B2ALuWwS5lqvrbd13kFAr40wO1qModXLGwu7hDAnAEAqVzWLtGFPpGAJwOS6oJdiq0tSKrLdBEAu/ynJyCAABvrCQDOIiJvF5E/OSnWU1J3kc9/AgJ+GuDgJ0kB7D6bMjDn3xvW92NZpwUQ6Hr6AOa4L/P5r0DAtwKcRUTkAKCuxOvbRcp0Pe1ioSQAEZEiYIY+AQE/G2CKpY1l2koCx0YGgEm1yGvTKW1QsRAwBtBp5zJ1FW0Zm811ck79dbREAgYCok9cJsvTwMJGoLjDWVu20W9jFoeAoYDm3NCEcfGEZYkunlCLYeqCZElF+kQChgLC6uyBYTInuDTvGH4FfPOPlkjAMwBJsVZNbPnEowLTRXQ5H4BVRFy7XOQW8PATEPCjAdHXle2VSUPJQwsiMRft4gKGcSIBQwHBEi1YDNOmYjRuQ891AaclEjAKEKNDuHb2qaVyMKsJ6HJHTCrSEgkYA+i0s1eFmWIutRBAyexUT2iOkZZIwEhAXxWmIW2jNal9bX8LEuNEAgYDQjjYNlCCOqmypeVu/BJaIgHPAOwi7+djkcglizPX7gErTdzF0jttB+alXoGArwzoszhwdwi4T8xwn1jcoQeL7GMhYCjgJk5cUMsg4Hp6zvC2ArXruDoTMBYQ40TN5gnd9JL/rW75VT3NLA4BYwExi2ONU20XpWUWazPVdFWpSEskYAyg9oymzifW0py5djmHuodMn0jAaMC1T4z7eZ7etrO+6Z4+kYChgOATyzxksTNCH0ER1X1mkZZIwDBAl9muS7St057eiYnumMqhJRIwDNBXwCIEhrE+J8dKneYdaYkEDAP0X7mJyRoPB6tiRnOWG/tYCBgM6LoHcuiUqplFL83RTsBwdSZgLOB2j8XPWn1sV6kdf6UlEjAMcFOLY7kb1IJE34bW+kO7jZZIwCjA7Tcg4HvMaCtxvtp88QMtkYBRgDvflK1WF6q3AWvJn2L1LC2RgOEA1ymlAnGVo2LOu4icdkH9zqwdzgdvRH2lVyDgSwPuflO2rdUhWFSPGN070icSMBBwxxKTttIwH7VSUT3HQ8VCwFDAfUustWCterupaH4Xh4AnALpKWfUGZwAuTHL9YJNqDBapWAgYCrjRzrHfFNX+oqhmLQ4BTwAI/5cpAQQQQAABBBBAAAEEEPCygL9sAmQiek6vFAAAAABJRU5ErkJggg=="
    };

    event.preventDefault();

    const formData = new FormData();

    formData.append("mobile_no", mobile);
    formData.append("file", photo);

  //   try {
  //     const response = await fetch(
  //       "https://faceapiv-service.ubsbto1gdi65m.us-west-2.cs.amazonlightsail.com/check-in",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     if (response.ok) {
  //       const qrCodeBase64 = await response.text();
  //       console.log(qrCodeBase64);
  //       // Handle the qr code data here
  //     } else {
  //       setError("Error uploading image");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setError("Error uploading image");
  //   }
  // };
  var image = new Image();
  image.src = qrCode.mobile;
  // document.body.appendChild(image)

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label htmlFor="mobile">Mobile:</label>
      <input
        type="text"
        id="mobile"
        name="mobile_no"
        value={mobile}
        onChange={handleMobileChange}
      />

      <label htmlFor="photo">Photo:</label>
      <input
        type="file"
        id="photo"
        name="photo"
        accept="image/*"
        onChange={handlePhotoChange}
      />

      <button type="submit">Check In</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
}
}

export default Check_in;
