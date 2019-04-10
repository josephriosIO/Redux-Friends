import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
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

export default Login;
