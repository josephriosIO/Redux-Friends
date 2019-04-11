import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/logins/Login";
import PrivateRoute from "./components/private/PrivateRoute";
import FriendsList from "./components/friends/FriendsList";
import AddFriend from "./components/friends/AddFriend";
import EditFriend from "./components/friends/EditFriend";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/login">login in</Link>
          </li>
          {this.props.logginIn ? (
            <li>
              <Link to="/friends/add">add friend</Link>
            </li>
          ) : null}
          {this.props.logginIn ? (
            <li>
              <Link to="/friends/edit/:id">edit friend</Link>
            </li>
          ) : null}
        </ul>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/friendslist" component={FriendsList} />
          <Route exact path="/friends/add" component={AddFriend} />
          <Route path="/friends/edit/:id" component={EditFriend} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  logginIn: state.friendsReducers.isLoggedIn
});

export default connect(
  mapStateToProps,
  {}
)(App);
