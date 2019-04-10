import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/logins/Login";
import PrivateRoute from "./components/private/PrivateRoute";
import FriendsList from "./components/friends/FriendsList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/login">login in</Link>
          </li>
        </ul>
        <div className="App">
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friendslist" component={FriendsList} />
        </div>
      </Router>
    );
  }
}

export default App;
