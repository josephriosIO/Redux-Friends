import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const SUCCESS_FRIENDS = "SUCCESS_FRIENDS";
export const FAILURE_GETTING_FRIENDS = "FAILURE_GETTING_FRIENDS";
export const ADD_FRIEND = "ADD_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";

export const logginIn = creds => async dispatch => {
  dispatch({
    type: FETCHING
  });
  try {
    const res = await axios.post("http://localhost:5000/api/login", creds);
    localStorage.setItem("token", res.data.payload);
    dispatch({
      type: SUCCESS,
      payload: res.data.payload
    });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err
    });
  }
};

export const getFriends = () => async dispatch => {
  dispatch({
    type: FETCHING_FRIENDS
  });
  try {
    const res = await axios.get("http://localhost:5000/api/friends", {
      headers: { authorization: localStorage.getItem("token") }
    });
    console.log(res);
    dispatch({
      type: SUCCESS_FRIENDS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FAILURE_GETTING_FRIENDS
    });
  }
};

export const addFriend = friend => async dispatch => {
  const res = await axios.post("http://localhost:5000/api/friends", friend, {
    headers: { authorization: localStorage.getItem("token") }
  });
  dispatch({
    type: ADD_FRIEND,
    payload: res.data
  });
};
