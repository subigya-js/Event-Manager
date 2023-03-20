import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Register from "./Components/Register";
import Check_in from "./Components/Check_in";
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";
import Camera from "./Components/Camera";

const Main = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={LandingPage} />

          <Route exact path="/register" Component={Register} />

          <Route exact path="/check-in" Component={Check_in} />

          <Route exact path="/camera" Component={Camera} /> 

          <Route exact path="/admin-login" Component={AdminLogin} /> 


          <Route exact path="/admin-dashboard" Component={AdminDashboard} />
        </Routes>
      </Router>
      {/* <LandingPage /> */}
    </>
  );
};

export default Main;
