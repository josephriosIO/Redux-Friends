import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriend, updateFriend } from "../../actions";

class EditFriend extends Component {
  state = {
    name: "",
    email: "",
    age: ""
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
      age: ""
    });

    this.props.history.push("/friendslist");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, age, errors } = this.state;

    return (
      <div>
        <div>edit Friend</div>
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
            <input type="submit" value="edit Friend" />
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
