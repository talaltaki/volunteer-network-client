import React, { useContext } from "react";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";

const RegisteredEventsNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="container d-flex mt-5">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
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

        <button className="btn btn-white btn-lg text-primary ml-4 mb-2">
          {loggedInUser.name}
        </button>
      </div>
    </div>
  );
};

export default RegisteredEventsNavbar;
