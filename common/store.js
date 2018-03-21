import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const INITIAL_STATE = {
  users: [],
  posts: [],
  comments: [],
  post: undefined,
  viewer: undefined,
  isAuthenticated: false
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_STORE_KEYS":
      return mergeUpdatedKeys(action.data, state);
    case "VIEWER_AUTHENTICATED":
      return mergeAuthState(action, state);
    case "VIEWER_LOGOUT":
      return mergeLogoutState(state);
    default:
      return state;
  }
};

export const initStore = initialState => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
};
