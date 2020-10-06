import React, { useEffect, useState } from "react";

const AllRegistrations = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-bayou-04057.herokuapp.com/all-registered")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://fathomless-bayou-04057.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="row">
      <div className="d-flex ml-5">
        <h6 className="ml-5 mr-5">Name</h6>
        <h6 className="ml-5 pl-5 mr-5">Email ID</h6>
        <h6 className="ml-5 pl-5 mr-5">Date</h6>
        <h6 className="ml-5 pl-5 mr-5">Event List</h6>
        <h6 className="ml-5 pl-5 mr-5">Action</h6>
      </div>

      {events.map((event) => (
        <div className="d-flex ml-5 mt-3">
          <h6 className="ml-2 mr-5">{event.name}</h6>
          <h6 className="ml-5 mr-5">{event.email}</h6>
          <h6 className="ml-2 mr-5">{event.date}</h6>
          <h6 className="ml-3 mr-5">{event.title}</h6>
          <button
            className="btn btn-danger btn-sm ml-2"
            onClick={() => handleDelete(event._id)}
          >
            Delete Event
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllRegistrations;
