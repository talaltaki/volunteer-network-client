import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className="text-center mt-5 pt-4 font-weight-bolder">
        I GROW BY HELPING PEOPLE IN NEED
      </h1>

      <div className="input-group input-group-lg w-25 mt-4 mx-auto">
        <input
          type="text"
          className="form-control rounded-left"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Search..."
        />
        <div className="input-group-prepend">
          <button
            type="button"
            className="input-group-text btn btn-primary active rounded-right"
            id="inputGroup-sizing-lg"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
