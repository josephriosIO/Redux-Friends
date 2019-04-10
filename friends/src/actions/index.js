import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const logginIn = () => async dispatch => {
  dispatch({
    type: FETCHING
  });
};
