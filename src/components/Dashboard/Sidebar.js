import React from "react";
import logo from "../../images/logos/logo.png";

const Sidebar = (props) => {
  return (
    <div>
      <a href="/">
        <img className="logo mb-5" src={logo} alt="" />
      </a>

      <a href="/all-registrations">
        <button className="btn btn-outline-primary mb-4">
          Volunteer register list
        </button>
      </a>
      <a href="/add-event">
        <button className="btn btn-outline-primary">Add event</button>
      </a>
    </div>
  );
};

export default Sidebar;
