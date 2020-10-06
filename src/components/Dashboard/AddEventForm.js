import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddEventForm = () => {
  const [event, setEvent] = useState({});
  const history = useHistory();

  const handleInput = (e) => {
    const newEvent = { ...event, title: e.target.value };
    setEvent(newEvent);
  };

  const handleAddEvent = (e) => {
    fetch("https://fathomless-bayou-04057.herokuapp.com/add-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((response) => response.json())
      .then((data) => {
        history.replace("/");
      });

    e.preventDefault();
  };

  return (
    <form action="" className="ml-5">
      <div className="form-row">
        <div className="col">
          <label className="font-weight-bold" htmlFor="">
            Event Title
          </label>
          <input
            type="text"
            className="form-control border"
            placeholder="Event Title"
            name="title"
            onBlur={handleInput}
          />
        </div>
        <div className="col ml-5">
          <label className="font-weight-bold" htmlFor="">
            Event Date
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control border border-right-0"
              aria-label="Text input with dropdown button"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-white border border-left-0 dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
            </div>
          </div>
        </div>
      </div>

      <div className="form-row mt-5">
        <div className="col">
          <label className="font-weight-bold" htmlFor="">
            Description
          </label>
          <textarea
            className="form-control border"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="col ml-5">
          <label className="font-weight-bold" htmlFor="">
            Banner
          </label>
          <br />
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input border"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
            <label className="custom-file-label" for="inputGroupFile01">
              Upload Banner
            </label>
          </div>
        </div>
      </div>

      <button
        className="btn btn-primary mt-4"
        type="submit"
        onClick={handleAddEvent}
      >
        Submit
      </button>
    </form>
  );
};

export default AddEventForm;
