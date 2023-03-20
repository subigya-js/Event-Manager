import React from "react";
import Check_in from "../Check_in";
import { useNavigate } from "react-router-dom";

const Phone = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="phone-number">
        <div className="check-in">
          <div className="phone-number">
            <label>Phone Number:</label>
            <input type="number" placeholder="Phone Number" />

            <div className="below-buttons">
              <button
                className="next"
                onClick={() => {
                  navigate("/location");
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phone;
