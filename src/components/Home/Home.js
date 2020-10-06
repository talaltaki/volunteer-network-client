import React, { useEffect, useState } from "react";
import Events from "./Events";
import Header from "./Header";
import HomeNavbar from "./HomeNavbar";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-bayou-04057.herokuapp.com/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <>
      <HomeNavbar />
      <Header />
      <div className="row p-5">
        {events.map((event) => (
          <Events key={event._id} event={event} />
        ))}
      </div>
    </>
  );
};

export default Home;
