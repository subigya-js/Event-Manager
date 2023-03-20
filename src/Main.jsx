import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Register from "./Components/Register";
import Check_in from "./Components/Check_in";

const Main = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={LandingPage} />

          <Route exact path="/register" Component={Register} />

          <Route exact path="/check-in" Component={Check_in} />
        </Routes>
      </Router>
      {/* <LandingPage /> */}
    </>
  );
};

export default Main;
