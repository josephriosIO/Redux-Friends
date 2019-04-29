import axios from "axios";
//logins
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

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
