import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriend, updateFriend } from "../../actions";

class EditFriend extends Component {
  state = {
    name: "",
    email: "",
    age: "",
    errors: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getFriend(id);
  }

  componentDidUpdate(props, state, snapshot) {
    if (this.props.friend !== props.friend) {
      this.setState(this.props.friend);
    }
  }

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
    const { id } = this.props.match.params;
    this.props.updateFriend(newFriend, id);

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
        <div className="card-header">edit Contact</div>
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
              value="edit Friend"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  friend: state.friendsReducers.friend
});

export default connect(
  mapStatetoProps,
  { getFriend, updateFriend }
)(EditFriend);
