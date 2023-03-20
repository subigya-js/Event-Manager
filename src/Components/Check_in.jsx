import React from "react";
import "./Check_in.css";

const Check_in = () => {
  return (
    <>
      <div className="check-in">
        <div className="phone-number">
          <label>Phone Number:</label>
          <input type="number" placeholder="Phone Number" />
        </div>
      </div>
    </>
  );
};

export default Check_in;
