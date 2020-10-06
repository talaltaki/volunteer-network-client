import React from "react";
import AllRegistrations from "./AllRegistrations";
import Sidebar from "./Sidebar";

const VolunteerList = () => {
  return (
    <div>
      <div className="mt-5 ml-5 d-flex">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 ml-5">
          <h4 className="ml-5 mb-5 pb-4 mr-auto">Volunteer Register List</h4>
          <AllRegistrations />
        </div>
      </div>
    </div>
  );
};

export default VolunteerList;
