import React from "react";
import "./Registration.css";
import logo from "../../images/logos/logo.png";

const Registration = () => {
  return (
    <>
      <img className="logo mx-auto d-block mt-5" src={logo} alt="logo" />

      <div className="card mx-auto d-block mt-5 mb-5 w-50">
        <div className="card-body p-5">
          <h4 className="card-title font-weight-bolder">
            Register as a Volunteer
          </h4>
          <form>
            <div className="input-group input-group-lg mt-4">
              <input
                className="form-control border-top-0 border-right-0 border-left-0 border-bottom border-dark rounded-0"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="input-group input-group-lg mt-3">
              <input
                className="form-control border-top-0 border-right-0 border-left-0 border-bottom border-dark rounded-0"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                type="text"
                placeholder="Username or Email"
              />
            </div>
            <div className="input-group input-group-lg mt-3">
              <input
                className="form-control border-top-0 border-right-0 border-left-0 border-bottom border-dark rounded-0"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                type="text"
                placeholder="Date"
              />
            </div>
            <div className="input-group input-group-lg mt-3">
              <input
                className="form-control border-top-0 border-right-0 border-left-0 border-bottom border-dark rounded-0"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                type="text"
                placeholder="Description"
              />
            </div>
            <div className="input-group input-group-lg mt-3">
              <input
                className="form-control border-top-0 border-right-0 border-left-0 border-bottom border-dark rounded-0"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                type="text"
                placeholder="Organize books at the library"
              />
            </div>
            <button
              className="btn btn-primary btn-lg btn-block mt-4 rounded-0"
              type="submit"
            >
              Registration
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
