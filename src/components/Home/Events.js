import React from "react";

const Events = ({ event }) => {
  return (
    <div className="col-md-3 mb-5 text-decoration-none">
      <a href={`/registration/${event._id}`}>
        <img src={event.banner} className="card-img-top" alt="..." />
        <button className="btn btn-primary btn-lg btn-block">
          {event.title}
        </button>
      </a>
    </div>
  );
};

export default Events;
