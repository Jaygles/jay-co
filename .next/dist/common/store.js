'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.reducer = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  users: [],
  posts: [],
  comments: [],
  portfolios: [],
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
    case 'UPDATE_STORE_KEYS':
      return mergeUpdatedKeys(action.data, state);
    case 'VIEWER_AUTHENTICATED':
      return mergeAuthState(action, state);
    case 'VIEWER_LOGOUT':
      return mergeLogoutState(state);
    default:
      return state;
  }
};

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9zdG9yZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsIklOSVRJQUxfU1RBVEUiLCJ1c2VycyIsInBvc3RzIiwiY29tbWVudHMiLCJwb3J0Zm9saW9zIiwicG9zdCIsInVuZGVmaW5lZCIsInZpZXdlciIsImlzQXV0aGVudGljYXRlZCIsIm1lcmdlVXBkYXRlZEtleXMiLCJkYXRhIiwic3RhdGUiLCJtZXJnZUF1dGhTdGF0ZSIsIm1lcmdlTG9nb3V0U3RhdGUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWE7O0FBQ3RCLEFBQU87Ozs7OztBQUVQLElBQU07U0FBZ0IsQUFDYixBQUNQO1NBRm9CLEFBRWIsQUFDUDtZQUhvQixBQUdWLEFBQ1Y7Y0FKb0IsQUFJUixBQUNaO1FBTG9CLEFBS2QsQUFDTjtVQU5vQixBQU1aLEFBQ1I7bUJBUEYsQUFBc0IsQUFPSDtBQVBHLEFBQ3BCOztBQVNGLElBQU0sbUJBQW1CLFNBQW5CLEFBQW1CLGlCQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDeEM7b0NBQUEsQUFBWSxPQUFaLEFBQXNCLEFBQ3ZCO0FBRkQ7O0FBSUEsSUFBTSxpQkFBaUIsU0FBakIsQUFBaUIscUJBQUEsQUFBOEIsT0FBVTtNQUFyQyxBQUFxQyx1QkFBckMsQUFBcUM7TUFBcEIsQUFBb0IsY0FBcEIsQUFBb0IsQUFDN0Q7O29DQUFBLEFBQVksU0FBTyxpQkFBbkIsaUJBQW9DLFFBQXBDLEFBQ0Q7QUFGRDs7QUFJQSxJQUFNLG1CQUFtQixTQUFuQixBQUFtQixpQkFBQSxBQUFDLE9BQVUsQUFDbEM7b0NBQUEsQUFBWSxTQUFPLGlCQUFuQixBQUFvQyxPQUFPLFFBQTNDLEFBQW1ELEFBQ3BEO0FBRkQsQUFJQTs7QUFBTyxJQUFNLDRCQUFVLFNBQVYsQUFBVSxVQUFtQztNQUFsQyxBQUFrQyw0RUFBMUIsQUFBMEI7TUFBWCxBQUFXLG1CQUN4RDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFBLEFBQUssQUFDSDthQUFPLGlCQUFpQixPQUFqQixBQUF3QixNQUEvQixBQUFPLEFBQThCLEFBQ3ZDO1NBQUEsQUFBSyxBQUNIO2FBQU8sZUFBQSxBQUFlLFFBQXRCLEFBQU8sQUFBdUIsQUFDaEM7U0FBQSxBQUFLLEFBQ0g7YUFBTyxpQkFBUCxBQUFPLEFBQWlCLEFBQzFCO0FBQ0U7YUFSSixBQVFJLEFBQU8sQUFFWjs7QUFYTSxBQWFQOztBQUFPLElBQU0sZ0NBQVksU0FBWixBQUFZLFVBQUEsQUFBQyxjQUFpQixBQUN6QztTQUFPLHdCQUFBLEFBQVksU0FBWixBQUFxQixjQUE1QixBQUFPLEFBQW1DLEFBQWdCLEFBQzNEO0FBRk0iLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9