import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFriend } from "../../actions";

class AddFriend extends Component {
  state = {
    name: "",
    email: "",
    age: ""
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, age } = this.state;

    const newFriend = {
      name,
      email,
      age
    };

    //// SUBMIT CONTACT ////
    this.props.addFriend(newFriend);

    // Clear State
    this.setState({
      name: "",
      email: "",
      age: ""
    });

    this.props.history.push("/friendslist");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, age, errors } = this.state;

    return (
      <div>
        <div>Add Friend</div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
            />
            <input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
            />
            <input
              label="age"
              name="age"
              placeholder="Enter age"
              value={age}
              onChange={this.onChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

AddFriend.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default connect(
  null,
  { addFriend }
)(AddFriend);
