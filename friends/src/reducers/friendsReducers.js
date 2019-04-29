import {
  FETCHING,
  SUCCESS,
  FAILURE,
  FETCHING_FRIENDS,
  SUCCESS_FRIENDS,
  FAILURE_GETTING_FRIENDS,
  ADD_FRIEND,
  DELETE_FRIEND,
  UPDATE_FRIEND,
  GET_FRIEND
} from "../actions";

const intitalState = {
  friends: [],
  friend: {},
  deletingFriend: false,
  fetchingFriend: false,
  fetchedFriends: false,
  updatingFriend: false,
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
        error: action.payload
      };
    case FETCHING_FRIENDS:
      return {
        fetchingFriend: true,
        error: ""
      };
    case SUCCESS_FRIENDS:
      return {
        friends: action.payload,
        error: "",
        fetchingFriend: false,
        isLoggedIn: true,
        fetchedFriends: true
      };
    case FAILURE_GETTING_FRIENDS:
      return {
        error: action.payload,
        fetchingFriend: false
      };
    case GET_FRIEND:
      return {
        ...state,
        friend: action.payload
      };
    case ADD_FRIEND:
      return {
        ...state,
        friends: [action.payload, ...state.friends]
      };
    case DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.payload)
      };
    case UPDATE_FRIEND:
      return {
        ...state,
        friends: state.friends.map(friend =>
          friend.id === action.payload.id ? (friend = action.payload) : friend
        )
      };
    default:
      return state;
  }
};
