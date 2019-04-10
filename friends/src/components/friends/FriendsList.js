import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../../actions";

const FriendsList = props => {
  const getTheFriends = () => {
    props.getFriends();
  };

  console.log(props.friends);
  return (
    <div>
      <button onClick={getTheFriends}>get some friends!</button>
      {props.fetchedFriends &&
        props.friends.map(friend => (
          <div key={friend.id}>
            <h1>{friend.name}</h1>
            <h3>{friend.age}</h3>
            <p>{friend.email}</p>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  friends: state.friendsReducers.friends,
  fetchedFriends: state.friendsReducers.fetchedFriends
});

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);
