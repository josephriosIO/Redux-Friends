import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFriend } from "../../actions";

class AddFriend extends Component {
  state = {
    name: "",
    email: "",
    age: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, age } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (age === "") {
      this.setState({ errors: { age: "Phone is required" } });
      return;
    }

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
      age: "",
      errors: {}
    });

    this.props.history.push("/friendslist");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, age, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <input
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <input
              label="age"
              name="age"
              placeholder="Enter age"
              value={age}
              onChange={this.onChange}
              error={errors.age}
            />
            <input
              type="submit"
              value="Add Friend"
              className="btn btn-light btn-block"
            />
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
