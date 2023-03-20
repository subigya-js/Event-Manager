import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  // const clickBtn = (event) => {
  //   const btnName = event.target.name;

  //   if (btnName == "register") {
  //   }

  //   if (btnName == "check-in") {
  //   }
  // };

  return (
    <>
      <div className="landing-page">
        <h3 className="title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit .
        </h3>

        <div className="buttons">
          <a
            className="register"
            onClick={() => {
              navigate("/register");
            }}
            name="register"
          >
            Register
          </a>

          <a
            className="check-in"
            onClick={() => {
              navigate("/check-in");
            }}
            name="check-in"
          >
            Check-in
          </a>

          <a
            className="admin-login"
            onClick={() => {
              navigate("/admin-login");
            }}
            name="Admin Login"
          >
            Admin Login
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
