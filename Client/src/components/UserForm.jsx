import React from "react";
import { useState } from "react";
import "../styles/userform.css";
import axios from "axios";

const UserForm = () => {
  // User Form Component
  const [formdata, setFormdata] = useState({});
  const handleChange = (e) => {
    // Function to handle User Inputs
    setFormdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // Function to handle post user data into mangoDB database
    e.preventDefault();
    axios
      .post("/users", formdata)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit}>
        <div className="register-form">
          <div className="register-form-cell">
            <label className="form-label" htmlFor="formField">
              Name:
            </label>
            <input
              className="register-input"
              id="name"
              type="text"
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-form-cell">
            <label className="form-label" htmlFor="formField">
              E-mail:
            </label>
            <input
              className="register-input"
              id="email"
              type="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="dropdown-container">
            <div>
              <label className="form-label" htmlFor="formField">
                Where do you want to go?
              </label>
            </div>
            <div>
              <select
                id="country"
                onChange={handleChange}
                className="dropdown"
                aria-label="Default select example"
              >
                <option defaultValue>Choose</option>
                <option value="India">India</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
              </select>
            </div>
          </div>
          <div className="register-form-cell">
            <label className="form-label" htmlFor="formField">
              No. of Travellers:
            </label>
            <input
              className="register-input"
              id="travellers"
              type="number"
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-form-cell">
            <label className="form-label" htmlFor="formField">
              Budget in dollors ($):
            </label>
            <input
              className="register-input"
              id="budget"
              type="number"
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit-button">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
