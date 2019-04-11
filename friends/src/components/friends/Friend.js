import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteFriend } from "../../actions";
class Friend extends Component {
  onDeleteClick = id => {
    this.props.deleteFriend(id);
  };

  render() {
    const { id, name, email, age } = this.props.friend;
    return (
      <div className="card card-body mb-3">
        <h1>{name}</h1>
        <h3>{age}</h3>
        <p>{email}</p>
        <button>
          <Link to={`friends/edit/${id}`}>edit</Link>
        </button>
        <button onClick={this.onDeleteClick.bind(this, id)}>delete</button>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteFriend }
)(Friend);
