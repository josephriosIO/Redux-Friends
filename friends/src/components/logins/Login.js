import React, { Component } from "react";
import { connect } from "react-redux";
import { logginIn } from "../../actions";
import Loader from "react-loader-spinner";

class Login extends Component {
  state = {
    auth: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      auth: {
        ...this.state.auth,
        [e.target.name]: e.target.value
      }
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.logginIn(this.state.auth);

    this.setState({
      auth: {
        username: "",
        password: ""
      }
    });
  };

  render() {
    if (this.props.logged) {
      this.props.history.push("/friendslist");
    }
    return (
      <div>
        <h1>Login</h1>

        {this.props.error && <p className="error">{this.props.error}</p>}
        <form onSubmit={this.submitForm}>
          <input
            onChange={this.handleChanges}
            type="text"
            value={this.state.username}
            name="username"
            placeholder="enter username here..."
          />
          <input
            onChange={this.handleChanges}
            type="password"
            value={this.state.password}
            name="password"
            placeholder="enter password here..."
          />
          <button value="submit">
            {this.props.isFetching ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "log in"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logged: state.friendsReducers.isLoggedIn,
  error: state.friendsReducers.error,
  isFetching: state.friendsReducers.isFetching
});

export default connect(
  mapStateToProps,
  { logginIn }
)(Login);
