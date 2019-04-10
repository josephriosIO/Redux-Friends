import { FETCHING, SUCCESS, FAILURE } from "../actions";

const intitalState = {
  friends: null,
  isFetching: false,
  isLoggedIn: false,
  error: ""
};

export const friendsReducers = (state = intitalState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        isFetching: true,
        isLoggedIn: false,
        error: ""
      };
    case SUCCESS:
      return {
        isFetching: false,
        isLoggedIn: true,
        error: ""
      };
    case FAILURE:
      return {
        isFetching: false,
        isLoggedIn: false,
        err: action.payload
      };
    default:
      return state;
  }
};
