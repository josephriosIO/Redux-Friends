import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../../actions";
import Friend from "./Friend";

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
            <Friend friend={friend} />
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
