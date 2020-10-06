import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import RegisteredEventsNavbar from "./RegisteredEventsNavbar";

const RegisteredEvents = () => {
  const [registered, setRegistered] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://fathomless-bayou-04057.herokuapp.com/registered-events?email=" +
        loggedInUser.email
    )
      .then((response) => response.json())
      .then((data) => setRegistered(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://fathomless-bayou-04057.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  return (
    <>
      <RegisteredEventsNavbar />

      <div className="row mt-5 p-5 w-50 mx-auto">
        {registered.map((reg) => (
          <div className="card col-md-6 mb-5 border-0">
            <img src={reg.banner} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{reg.title}</h5>
              <h6 className="card-title">{reg.date}</h6>
            </div>
            <button
              className="btn btn-danger btn-block"
              onClick={() => handleDelete(reg._id)}
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default RegisteredEvents;
