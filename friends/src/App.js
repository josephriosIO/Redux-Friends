import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/logins/Login";
import PrivateRoute from "./components/private/PrivateRoute";
import Protected from "./components/private/Protected";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
