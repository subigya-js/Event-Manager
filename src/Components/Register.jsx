import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formChange, setFormChange] = useState({
    name: "",
    email: "",
    number: "",
    photo: null,
  });

  const name = formChange.name;
  const email = formChange.email;
  const number = formChange.number;

  const [finalChange, setFinalChange] = useState({
    finalName: "",
    finalEmail: "",
    finalNumber: "",
    photo: null,
  });

  const change = (event) => {
    event.preventDefault();
    const val = event.target.value;
    const nam = event.target.name;

    if (nam == "Name") {
      setFormChange({
        ...formChange,
        name: val,
      });
    }

    if (nam == "email") {
      setFormChange({
        ...formChange,
        email: val,
      });
    }

    if (nam == "number") {
      setFormChange({
        ...formChange,
        number: val,
      });
    }

    if (nam == "photo") {
      setFormChange({
        ...formChange,
        photo: val,
      });
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();

    setFinalChange({
      finalName: name,
      finalEmail: email,
      finalNumber: number,
    });
  };

  return (
    <>
      <div className="register-form">
        <form>
          <p className="form-heading">Register</p>

          <div className="txt-field">
            <input
              value={formChange.name}
              type="text"
              placeholder="Name"
              autoComplete="off"
              name="Name"
              onChange={change}
              // required
            />
          </div>

          <div className="txt-field">
            <input
              value={formChange.email}
              type="email"
              placeholder="Email Address"
              autoComplete="off"
              name="email"
              onChange={change}
              // required
            />
          </div>

          <div className="txt-field">
            <input
              value={formChange.number}
              type="number"
              placeholder="Phone Number"
              onChange={change}
              autoComplete="off"
              name="number"
              maxLength="10"
              size="10"
              // required
            />
          </div>

          <div className="photo-field">
            <p className="photo-title">Upload your Photo here</p>
            <input
              className="photo-input"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              // placeholder="Photo"
              autoComplete="off"
              name="photo"
              onChange={change}
              // required
            />
          </div>

          <button type="submit" onClick={formSubmit} className="btn">
            Submit
          </button>
        </form>
      </div>

      {/* <h4>Your details are: </h4>

      <p>Name: {finalChange.finalName}</p>
      <p>Email: {finalChange.finalEmail}</p>
      <p>Number: {finalChange.finalNumber}</p> */}
      {/* <img src={finalChange.photo}></img> */}
      {/* <p>{finalChange.photo}</p> */}
    </>
  );
};

export default Register;
