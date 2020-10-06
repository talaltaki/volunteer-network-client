import React from "react";
import logo from "../../images/logos/logo.png";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  return (
    <>
      <a href="/">
        <img className="logo mx-auto d-block mt-5" src={logo} alt="logo" />
      </a>

      <div className="card mx-auto d-block mt-5 mb-5 w-50">
        <div className="card-body p-5">
          <h4 className="card-title font-weight-bolder">
            Register as a Volunteer
          </h4>

          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

export default Registration;
