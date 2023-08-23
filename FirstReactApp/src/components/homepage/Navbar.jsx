// import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="contents">
          <a href="#">
            <img className="logo" src="./public/Tribus1.png" alt="Logo" />
          </a>
          <a href="#">Home</a>
          <a href="#">New Jobs</a>
          <a href="#">Old JObs</a>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
