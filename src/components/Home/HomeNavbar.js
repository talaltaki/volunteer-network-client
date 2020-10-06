import React from "react";
import logo from "../../images/logos/logo.png";

const HomeNavbar = () => {
  return (
    <div className="container d-flex mt-5">
      <a href="/">
        <img className="logo" src={logo} alt="" />
      </a>

      <div className="my-auto ml-auto">
        <a className="h5 text-dark text-decoration-none" href="/">
          Home
        </a>
        <a className="h5 text-dark text-decoration-none ml-4" href="/">
          Donations
        </a>
        <a className="h5 text-dark text-decoration-none ml-4" href="/">
          Events
        </a>
        <a className="h5 text-dark text-decoration-none ml-4" href="/">
          Blog
        </a>

        <a className="ml-4" href="/registered-events">
          <button className="btn btn-primary btn-lg mb-2">Register</button>
        </a>
        <a className="ml-3" href="/all-registrations">
          <button className="btn btn-secondary btn-lg mb-2">Admin</button>
        </a>
      </div>
    </div>
  );
};

export default HomeNavbar;
