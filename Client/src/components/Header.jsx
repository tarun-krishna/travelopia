import React from "react";
import car from "../images/car.png";
import "../styles/header.css";
const Header = ({ show, setShow }) => {
  // Header Component
  return (
    <div className="header-container">
      <div className="logo-title-container">
        <img className="car-logo" src={car} alt="car-logo" />
        <span className="header-title">Travelopia</span>
      </div>
      <div>
        <button className="show-user-details" onClick={() => setShow(!show)}>
          {show ? "Show Traveller's Details" : "Add Traveller"}
        </button>
      </div>
    </div>
  );
};

export default Header;
