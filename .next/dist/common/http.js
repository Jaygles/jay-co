'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.login = exports.getAllUsers = exports.savePost = exports.getPostById = exports.getAllPosts = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

var ENV = process.env.NODE_ENV || 'development';
var SERVER_PATH = ENV === 'development' ? 'http://localhost:8000' : '';

var getAllPosts = exports.getAllPosts = function getAllPosts() {
  console.log('posts');
  var options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/posts', options);
};

var getPostById = exports.getPostById = function getPostById(id) {
  var options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/posts/' + id, options);
};

var savePost = exports.savePost = function savePost(_ref) {
  var content = _ref.content,
      title = _ref.title;

  var options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
    body: (0, _stringify2.default)({ content: content, title: title })
  };

  return fetch(SERVER_PATH + '/api/posts', options);
};

var getAllUsers = exports.getAllUsers = function getAllUsers() {
  var options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/users', options);
};

var login = exports.login = function login(_ref2) {
  var username = _ref2.username,
      password = _ref2.password;

  var options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: (0, _stringify2.default)({ username: username.toLowerCase(), password: password })
  };

  return fetch(SERVER_PATH + '/api/login', options);
};

var signup = exports.signup = function signup(_ref3) {
  var username = _ref3.username,
      password = _ref3.password,
      verify = _ref3.verify;

  var options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: (0, _stringify2.default)({
      username: username.toLowerCase(),
      password: password,
      verify: verify
    })
  };

  return fetch(SERVER_PATH + '/api/signup', options);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9odHRwLmpzIl0sIm5hbWVzIjpbInJlcXVlc3RIZWFkZXJzIiwiQWNjZXB0IiwiRU5WIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiU0VSVkVSX1BBVEgiLCJnZXRBbGxQb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwiZmV0Y2giLCJnZXRQb3N0QnlJZCIsImlkIiwic2F2ZVBvc3QiLCJjb250ZW50IiwidGl0bGUiLCJib2R5IiwiZ2V0QWxsVXNlcnMiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0b0xvd2VyQ2FzZSIsInNpZ251cCIsInZlcmlmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQU07VUFBaUIsQUFDYixBQUNSO2tCQUZGLEFBQXVCLEFBRUw7QUFGSyxBQUNyQjs7QUFJRixJQUFNLE1BQU0sUUFBQSxBQUFRLElBQVIsQUFBWSxZQUF4QixBQUFvQztBQUNwQyxJQUFNLGNBQWMsUUFBQSxBQUFRLGdCQUFSLEFBQXdCLDBCQUE1QyxBQUFzRSxBQUV0RTs7QUFBTyxJQUFNLG9DQUFjLFNBQWQsQUFBYyxjQUFNLEFBQy9CO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtNQUFNO1lBQVUsQUFDTixBQUNSO2FBRmMsQUFFTCxBQUNUO2lCQUhGLEFBQWdCLEFBR0QsQUFHZjtBQU5nQixBQUNkOztTQUtLLE1BQUEsQUFBUyw0QkFBaEIsQUFBTyxBQUFrQyxBQUMxQztBQVRNLEFBV1A7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsZ0JBQU0sQUFDL0I7TUFBTTtZQUFVLEFBQ04sQUFDUjthQUZjLEFBRUwsQUFDVDtpQkFIRixBQUFnQixBQUdELEFBR2Y7QUFOZ0IsQUFDZDs7U0FLSyxNQUFBLEFBQVMsOEJBQVQsQUFBa0MsSUFBekMsQUFBTyxBQUF3QyxBQUNoRDtBQVJNLEFBVVA7O0FBQU8sSUFBTSw4QkFBVyxTQUFYLEFBQVcsZUFBd0I7TUFBckIsQUFBcUIsZUFBckIsQUFBcUI7TUFBWixBQUFZLGFBQVosQUFBWSxBQUM5Qzs7TUFBTTtZQUFVLEFBQ04sQUFDUjtpQkFGYyxBQUVELEFBQ2I7YUFIYyxBQUdMLEFBQ1Q7VUFBTSx5QkFBZSxFQUFFLFNBQUYsU0FBVyxPQUpsQyxBQUFnQixBQUlSLEFBQWUsQUFHdkI7QUFQZ0IsQUFDZDs7U0FNSyxNQUFBLEFBQVMsNEJBQWhCLEFBQU8sQUFBa0MsQUFDMUM7QUFUTSxBQVdQOztBQUFPLElBQU0sb0NBQWMsU0FBZCxBQUFjLGNBQU0sQUFDL0I7TUFBTTtZQUFVLEFBQ04sQUFDUjthQUZjLEFBRUwsQUFDVDtpQkFIRixBQUFnQixBQUdELEFBR2Y7QUFOZ0IsQUFDZDs7U0FLSyxNQUFBLEFBQVMsNEJBQWhCLEFBQU8sQUFBa0MsQUFDMUM7QUFSTSxBQVVQOztBQUFPLElBQU0sd0JBQVEsU0FBUixBQUFRLGFBQTRCO01BQXpCLEFBQXlCLGlCQUF6QixBQUF5QjtNQUFmLEFBQWUsaUJBQWYsQUFBZSxBQUMvQzs7TUFBTTtZQUFVLEFBQ04sQUFDUjthQUZjLEFBRUwsQUFDVDtpQkFIYyxBQUdELEFBQ2I7VUFBTSx5QkFBZSxFQUFFLFVBQVUsU0FBWixBQUFZLEFBQVMsZUFBZSxVQUozRCxBQUFnQixBQUlSLEFBQWUsQUFHdkI7QUFQZ0IsQUFDZDs7U0FNSyxNQUFBLEFBQVMsNEJBQWhCLEFBQU8sQUFBa0MsQUFDMUM7QUFUTSxBQVdQOztBQUFPLElBQU0sMEJBQVMsU0FBVCxBQUFTLGNBQW9DO01BQWpDLEFBQWlDLGlCQUFqQyxBQUFpQztNQUF2QixBQUF1QixpQkFBdkIsQUFBdUI7TUFBYixBQUFhLGVBQWIsQUFBYSxBQUN4RDs7TUFBTTtZQUFVLEFBQ04sQUFDUjthQUZjLEFBRUwsQUFDVDtpQkFIYyxBQUdELEFBQ2I7O2dCQUNZLFNBRFMsQUFDVCxBQUFTLEFBQ25CO2dCQUZtQixBQUduQjtjQVBKLEFBQWdCLEFBSVIsQUFBZSxBQU92QjtBQVB1QixBQUNuQixLQURJO0FBSlEsQUFDZDs7U0FVSyxNQUFBLEFBQVMsNkJBQWhCLEFBQU8sQUFBbUMsQUFDM0M7QUFiTSIsImZpbGUiOiJodHRwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==