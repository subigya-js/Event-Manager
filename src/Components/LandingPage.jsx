import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="landing-page">
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
        </div>
      </div>
    </>
  );
};

export default LandingPage;
