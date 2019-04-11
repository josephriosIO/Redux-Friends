import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const SUCCESS_FRIENDS = "SUCCESS_FRIENDS";
export const FAILURE_GETTING_FRIENDS = "FAILURE_GETTING_FRIENDS";
export const GET_FRIEND = "GET_FRIEND";
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
      payload: "ooppps wrong password or username who knows ¯\\_(ツ)_/¯"
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
      type: FAILURE_GETTING_FRIENDS,
      payload: "OOPPPSSS"
    });
  }
};

export const getFriend = id => async dispatch => {
  const res = await axios.get(`http://localhost:5000/api/friends/${id}`, {
    headers: { authorization: localStorage.getItem("token") }
  });
  dispatch({
    type: GET_FRIEND,
    payload: res.data
  });
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

export const deleteFriend = id => async dispatch => {
  const res = await axios.delete(`http://localhost:5000/api/friends/${id}`, {
    headers: { authorization: localStorage.getItem("token") }
  });
  dispatch({
    type: DELETE_FRIEND,
    payload: res.data
  });
};

export const updateFriend = (friend, id) => async dispatch => {
  console.log(friend);
  const res = await axios.put(
    `http://localhost:5000/api/friends/${id}`,
    friend,
    {
      headers: { authorization: localStorage.getItem("token") }
    }
  );
  console.log(res);
  dispatch({
    type: UPDATE_FRIEND,
    payload: res.data
  });
};
