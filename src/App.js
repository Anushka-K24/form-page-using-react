// import React from "react";
import React, { useState } from "react";
import "./index.css";
import FooterSection from "./Navbar/footer";
import HowItWorks from "./Navbar/how_it_works";
import Navbar from "./Navbar/Navbar";

export default function App() {
  // decalring statesand hooks
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  const [submit, setSubmit] = useState(false);

  const [valid, setValid] = useState(false)

  // declaring fucntions for onChange or event handlers

  const handleFirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastName = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleAge = (event) => {
    setValues({ ...values, age: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <>
      {/* <Navbar/ > */}
      <div className="navbar">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      {/* form start  */}
      <div class="form-container">
        <h2>Register for Covid-19 Vaccine</h2>
        <form class="register-form" onSubmit={handleSubmit}>
          {submit && !valid ? (
            <div class="success-message">
              Success! Thank you for registering
            </div>
          ) : null}
          <input
            value={values.firstName}
            id="first-name"
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleFirstName}
          />
          {submit && !values.firstName ? (
            <span>Please enter a first name</span>
          ) : null}
          
          <input
            value={values.lastName}
            id="last-name"
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleLastName}
          />
          {submit && !values.lastName ? (
            <span>Please enter a last name</span>
          ) : null}
          
          <input
            value={values.email}
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleEmail}
          />
          {submit && !values.email ? (
            <span>Please enter your email address</span>
          ) : null}
          <input
            value={values.age}
            id="age"
            class="form-field"
            type="text"
            placeholder="Enter your birth year"
            name="age"
            onChange={handleAge}
          />
          {submit && !values.age ? (
            <span>Please enter your birth year (YYYY)</span>
          ) : null}
          <button class="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
      <HowItWorks />
      <br>
      </br>
      <FooterSection />
    </>
  );
}
