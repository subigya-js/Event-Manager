import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Register from "./Components/Register";
import Check_in from "./Components/Check_In_Components/Check_in";
import Location from "./Components/Check_In_Components/Location";
import Camera from "./Components/Check_In_Components/Camera";
import Qr from "./Components/Check_In_Components/Qr";

const Main = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={LandingPage} />

          <Route exact path="/register" Component={Register} />

          <Route exact path="/check-in" Component={Check_in} />

          <Route exact path="/location" Component={Location} />

          <Route exact path="/camera" Component={Camera} />

          <Route exact path="/qr" Component={Qr} />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
