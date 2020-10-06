import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";

const RegistrationForm = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();

  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({});

  useEffect(() => {
    fetch("https://fathomless-bayou-04057.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        const myEvent = data.find((e) => e._id === id);
        setEvent(myEvent);
      });
  }, []);

  const { id } = useParams();

  const handleRegister = (e) => {
    const newRegistration = {
      ...loggedInUser,
      title: event.title,
      banner: event.banner,
      date: "20 October 2020",
    };

    fetch("https://fathomless-bayou-04057.herokuapp.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRegistration),
    })
      .then((res) => res.json())
      .then((data) => {
        history.replace("/registered-events");
      });
    e.preventDefault();
  };

  return (
    <form>
      <div className="input-group input-group-lg mt-4">
        <input
          className="form-control border-top-0 border-right-0 border-left-0 border-bottom border-dark rounded-0 bg-transparent font-weight-light"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          type="text"
          value={loggedInUser.name}
          disabled
        />
      </div>
      <div className="input-group input-group-lg mt-3">
        <input
          className="form-control border-top-0 border-right-0 border-left-0 border-bottom border-dark rounded-0 bg-transparent font-weight-light"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          type="text"
          value={loggedInUser.email}
          disabled
        />
      </div>
      <div className="input-group input-group-lg mt-3">
        <input
          className="form-control border-top-0 border-right-0 border-left-0 border-bottom border-dark rounded-0 bg-transparent font-weight-light"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          type="text"
          name="date"
          value="20 October 2020"
        />
      </div>
      <div className="input-group input-group-lg mt-3">
        <input
          className="form-control border-top-0 border-right-0 border-left-0 border-bottom border-dark rounded-0 bg-transparent font-weight-light"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          type="text"
          name="description"
          placeholder="Enter Description"
        />
      </div>
      <div className="input-group input-group-lg mt-3">
        <input
          className="form-control border-top-0 border-right-0 border-left-0 border-bottom border-dark rounded-0 bg-transparent font-weight-light"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          type="text"
          name="title"
          value={event.title}
          disabled
        />
      </div>

      <button
        className="btn btn-primary btn-lg btn-block mt-4 rounded-0"
        type="submit"
        onClick={handleRegister}
      >
        Registration
      </button>
    </form>
  );
};

export default RegistrationForm;
