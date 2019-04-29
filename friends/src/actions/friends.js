import axiosWithAuth from "../utils/axiosAuth";

//getting your friends
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const SUCCESS_FRIENDS = "SUCCESS_FRIENDS";
export const FAILURE_GETTING_FRIENDS = "FAILURE_GETTING_FRIENDS";

// function stuff
export const GET_FRIEND = "GET_FRIEND";
export const ADD_FRIEND = "ADD_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";

export const getFriends = () => async dispatch => {
  dispatch({
    type: FETCHING_FRIENDS
  });
  try {
    const res = await axiosWithAuth().get("http://localhost:5000/api/friends");
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
  const res = await axiosWithAuth().get(
    `http://localhost:5000/api/friends/${id}`
  );
  dispatch({
    type: GET_FRIEND,
    payload: res.data
  });
};

export const addFriend = friend => async dispatch => {
  const res = await axiosWithAuth().post(
    "http://localhost:5000/api/friends",
    friend
  );
  dispatch({
    type: ADD_FRIEND,
    payload: res.data
  });
};

export const deleteFriend = id => async dispatch => {
  const res = await axiosWithAuth().delete(
    `http://localhost:5000/api/friends/${id}`
  );
  dispatch({
    type: DELETE_FRIEND,
    payload: res.data
  });
};

export const updateFriend = (friend, id) => async dispatch => {
  console.log(friend);
  const res = await axiosWithAuth().put(
    `http://localhost:5000/api/friends/${id}`,
    friend
  );
  console.log(res);
  dispatch({
    type: UPDATE_FRIEND,
    payload: res.data
  });
};
