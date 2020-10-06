import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home";
import RegisteredEvents from "./components/RegisteredEvents/RegisteredEvents";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddEvent from "./components/Dashboard/AddEvent";
import VolunteerList from "./components/Dashboard/VolunteerList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/registration/:id">
            <Registration />
          </PrivateRoute>
          <PrivateRoute path="/registered-events">
            <RegisteredEvents />
          </PrivateRoute>
          <Route path="/add-event">
            <AddEvent />
          </Route>
          <Route path="/all-registrations">
            <VolunteerList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
