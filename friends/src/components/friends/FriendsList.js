import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../../actions";
import Friend from "./Friend";
import Loader from "react-loader-spinner";

const FriendsList = props => {
  const getTheFriends = () => {
    props.getFriends();
  };

  return (
    <div>
      <button onClick={getTheFriends}>get some friends!</button>
      {props.fetchedFriends &&
        props.friends.map(friend => (
          <div key={friend.id}>
            <Friend friend={friend} />
          </div>
        ))}
      {props.fetchingFriends ? (
        <Loader
          type="Bars"
          marginTop="10"
          color="black"
          height="120"
          width="206"
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  fetchingFriends: state.friendsReducers.fetchingFriend,
  friends: state.friendsReducers.friends,
  fetchedFriends: state.friendsReducers.fetchedFriends
});

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);
