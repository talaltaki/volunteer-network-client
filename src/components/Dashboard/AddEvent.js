import React from "react";
import AddEventForm from "./AddEventForm";
import Sidebar from "./Sidebar";

const AddEvent = () => {
  return (
    <div className="mt-5 ml-5 d-flex">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-9 ml-5">
        <h4 className="ml-5 mb-5 pb-4">Add Event</h4>
        <AddEventForm />
      </div>
    </div>
  );
};

export default AddEvent;
