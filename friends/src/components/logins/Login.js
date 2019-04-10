import React, { Component } from "react";
import { connect } from "react-redux";

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
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
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
          <button value="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Login);
