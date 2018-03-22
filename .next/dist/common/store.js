"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.reducer = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require("redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  users: [],
  posts: [],
  comments: [],
  post: undefined,
  viewer: undefined,
  isAuthenticated: false
};

var mergeUpdatedKeys = function mergeUpdatedKeys(data, state) {
  return (0, _extends3.default)({}, state, data);
};

var mergeAuthState = function mergeAuthState(_ref, state) {
  var isAuthenticated = _ref.isAuthenticated,
      viewer = _ref.viewer;

  return (0, _extends3.default)({}, state, { isAuthenticated: isAuthenticated, viewer: viewer });
};

var mergeLogoutState = function mergeLogoutState(state) {
  return (0, _extends3.default)({}, state, { isAuthenticated: false, viewer: undefined });
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

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

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9zdG9yZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsIklOSVRJQUxfU1RBVEUiLCJ1c2VycyIsInBvc3RzIiwiY29tbWVudHMiLCJwb3N0IiwidW5kZWZpbmVkIiwidmlld2VyIiwiaXNBdXRoZW50aWNhdGVkIiwibWVyZ2VVcGRhdGVkS2V5cyIsImRhdGEiLCJzdGF0ZSIsIm1lcmdlQXV0aFN0YXRlIiwibWVyZ2VMb2dvdXRTdGF0ZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiaW5pdFN0b3JlIiwiaW5pdGlhbFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBYTs7QUFDdEIsQUFBTzs7Ozs7O0FBRVAsSUFBTTtTQUFnQixBQUNiLEFBQ1A7U0FGb0IsQUFFYixBQUNQO1lBSG9CLEFBR1YsQUFDVjtRQUpvQixBQUlkLEFBQ047VUFMb0IsQUFLWixBQUNSO21CQU5GLEFBQXNCLEFBTUg7QUFORyxBQUNwQjs7QUFRRixJQUFNLG1CQUFtQixTQUFuQixBQUFtQixpQkFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQ3hDO29DQUFBLEFBQVksT0FBWixBQUFzQixBQUN2QjtBQUZEOztBQUlBLElBQU0saUJBQWlCLFNBQWpCLEFBQWlCLHFCQUFBLEFBQThCLE9BQVU7TUFBckMsQUFBcUMsdUJBQXJDLEFBQXFDO01BQXBCLEFBQW9CLGNBQXBCLEFBQW9CLEFBQzdEOztvQ0FBQSxBQUFZLFNBQU8saUJBQW5CLGlCQUFvQyxRQUFwQyxBQUNEO0FBRkQ7O0FBSUEsSUFBTSxtQkFBbUIsU0FBbkIsQUFBbUIsd0JBQVMsQUFDaEM7b0NBQUEsQUFBWSxTQUFPLGlCQUFuQixBQUFvQyxPQUFPLFFBQTNDLEFBQW1ELEFBQ3BEO0FBRkQsQUFJQTs7QUFBTyxJQUFNLDRCQUFVLFNBQVYsQUFBVSxVQUFtQztNQUFsQyxBQUFrQyw0RUFBMUIsQUFBMEI7TUFBWCxBQUFXLG1CQUN4RDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDthQUFPLGlCQUFpQixPQUFqQixBQUF3QixNQUEvQixBQUFPLEFBQThCLEFBQ3ZDO1NBQUEsQUFBSyxBQUNIO2FBQU8sZUFBQSxBQUFlLFFBQXRCLEFBQU8sQUFBdUIsQUFDaEM7U0FBQSxBQUFLLEFBQ0g7YUFBTyxpQkFBUCxBQUFPLEFBQWlCLEFBQzFCO0FBQ0U7YUFSSixBQVFJLEFBQU8sQUFFWjs7QUFYTSxBQWFQOztBQUFPLElBQU0sZ0NBQVksU0FBWixBQUFZLHdCQUFnQixBQUN2QztTQUFPLHdCQUFBLEFBQVksU0FBWixBQUFxQixjQUE1QixBQUFPLEFBQW1DLEFBQWdCLEFBQzNEO0FBRk0iLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9