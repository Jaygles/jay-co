'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.logout = exports.login = exports.getAllUsers = exports.savePost = exports.updatePost = exports.deletePost = exports.deleteViewer = exports.getPostById = exports.getAllPosts = exports.deleteComment = exports.updateComment = exports.saveReply = exports.saveComment = exports.getAllComments = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

var ENV = process.env.NODE_ENV || 'development';
var SERVER_PATH = ENV === 'development' ? 'http://localhost:8000' : 'https://next-postgres.herokuapp.com';

var getAllComments = exports.getAllComments = function getAllComments() {
  var options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/comments', options);
};

var saveComment = exports.saveComment = function saveComment(_ref) {
  var postId = _ref.postId,
      content = _ref.content;

  var options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: (0, _stringify2.default)({ postId: postId, content: content })
  };

  return fetch(SERVER_PATH + '/api/comments', options);
};

var saveReply = exports.saveReply = function saveReply(_ref2) {
  var postId = _ref2.postId,
      commentId = _ref2.commentId,
      content = _ref2.content;

  var options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: (0, _stringify2.default)({ postId: postId, commentId: commentId, content: content })
  };

  return fetch(SERVER_PATH + '/api/comments', options);
};

var updateComment = exports.updateComment = function updateComment(_ref3) {
  var postId = _ref3.postId,
      commentId = _ref3.commentId,
      content = _ref3.content;

  var options = {
    method: 'PUT',
    headers: requestHeaders,
    credentials: 'include',
    body: (0, _stringify2.default)({ commentId: commentId, content: content })
  };

  return fetch(SERVER_PATH + '/api/posts/' + postId + '/comments/' + commentId, options);
};

var deleteComment = exports.deleteComment = function deleteComment(_ref4) {
  var postId = _ref4.postId,
      commentId = _ref4.commentId;

  var options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/posts/' + postId + '/comments/' + commentId, options);
};

var getAllPosts = exports.getAllPosts = function getAllPosts() {
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

var deleteViewer = exports.deleteViewer = function deleteViewer() {
  var options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/viewer/delete', options);
};

var deletePost = exports.deletePost = function deletePost(id) {
  var options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/posts/' + id, options);
};

var updatePost = exports.updatePost = function updatePost(_ref5) {
  var content = _ref5.content,
      title = _ref5.title,
      postId = _ref5.postId;

  var options = {
    method: 'PUT',
    credentials: 'include',
    headers: requestHeaders,
    body: (0, _stringify2.default)({ content: content, title: title })
  };

  return fetch(SERVER_PATH + '/api/posts/' + postId, options);
};

var savePost = exports.savePost = function savePost(_ref6) {
  var content = _ref6.content,
      title = _ref6.title;

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

var login = exports.login = function login(_ref7) {
  var username = _ref7.username,
      password = _ref7.password;

  var options = {
    method: 'POST',
    headers: requestHeaders,
    credentials: 'include',
    body: (0, _stringify2.default)({ username: username.toLowerCase(), password: password })
  };

  return fetch(SERVER_PATH + '/api/login', options);
};

var logout = exports.logout = function logout() {
  var options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders
  };

  return fetch(SERVER_PATH + '/api/logout', options);
};

var signup = exports.signup = function signup(_ref8) {
  var username = _ref8.username,
      password = _ref8.password,
      verify = _ref8.verify;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9odHRwLmpzIl0sIm5hbWVzIjpbInJlcXVlc3RIZWFkZXJzIiwiQWNjZXB0IiwiRU5WIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiU0VSVkVSX1BBVEgiLCJnZXRBbGxDb21tZW50cyIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJmZXRjaCIsInNhdmVDb21tZW50IiwicG9zdElkIiwiY29udGVudCIsImJvZHkiLCJzYXZlUmVwbHkiLCJjb21tZW50SWQiLCJ1cGRhdGVDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImdldEFsbFBvc3RzIiwiZ2V0UG9zdEJ5SWQiLCJpZCIsImRlbGV0ZVZpZXdlciIsImRlbGV0ZVBvc3QiLCJ1cGRhdGVQb3N0IiwidGl0bGUiLCJzYXZlUG9zdCIsImdldEFsbFVzZXJzIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidG9Mb3dlckNhc2UiLCJsb2dvdXQiLCJzaWdudXAiLCJ2ZXJpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNO1VBQWlCLEFBQ2IsQUFDUjtrQkFGRixBQUF1QixBQUVMO0FBRkssQUFDckI7O0FBSUYsSUFBTSxNQUFNLFFBQUEsQUFBUSxJQUFSLEFBQVksWUFBeEIsQUFBb0M7QUFDcEMsSUFBTSxjQUNKLFFBQUEsQUFBUSxnQkFBUixBQUNJLDBCQUZOLEFBR00sQUFFTjs7QUFBTyxJQUFNLDBDQUFpQixTQUFqQixBQUFpQixpQkFBTSxBQUNsQztNQUFNO1lBQVUsQUFDTixBQUNSO2FBRmMsQUFFTCxBQUNUO2lCQUhGLEFBQWdCLEFBR0QsQUFHZjtBQU5nQixBQUNkOztTQUtLLE1BQUEsQUFBUywrQkFBaEIsQUFBTyxBQUFxQyxBQUM3QztBQVJNLEFBVVA7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsa0JBQXlCO01BQXRCLEFBQXNCLGNBQXRCLEFBQXNCO01BQWQsQUFBYyxlQUFkLEFBQWMsQUFDbEQ7O01B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QUhjLEFBR0wsQUFDVDtVQUFNLHlCQUFlLEVBQUUsU0FBRixTQUFXLE9BSmxDLEFBQWdCLEFBSVIsQUFBZSxBQUd2QjtBQVBnQixBQUNkOztTQU1LLE1BQUEsQUFBUyw4QkFBVCxBQUFrQyxRQUF6QyxBQUFPLEFBQTRDLEFBQ3BEO0FBVE0sQUFXUDs7QUFBTyxJQUFNLDhCQUFXLFNBQVgsQUFBVyxnQkFBd0I7TUFBckIsQUFBcUIsZ0JBQXJCLEFBQXFCO01BQVosQUFBWSxjQUFaLEFBQVksQUFDOUM7O01BQU07WUFBVSxBQUNOLEFBQ1I7aUJBRmMsQUFFRCxBQUNiO2FBSGMsQUFHTCxBQUNUO1VBQU0seUJBQWUsRUFBRSxTQUFGLFNBQVcsT0FKbEMsQUFBZ0IsQUFJUixBQUFlLEFBR3ZCO0FBUGdCLEFBQ2Q7O1NBTUssTUFBQSxBQUFTLDRCQUFoQixBQUFPLEFBQWtDLEFBQzFDO0FBVE0sQUFXUDs7QUFBTyxJQUFNLG9DQUFjLFNBQWQsQUFBYyxjQUFNLEFBQy9CO01BQU07WUFBVSxBQUNOLEFBQ1I7YUFGYyxBQUVMLEFBQ1Q7aUJBSEYsQUFBZ0IsQUFHRCxBQUdmO0FBTmdCLEFBQ2Q7O1NBS0ssTUFBQSxBQUFTLDRCQUFoQixBQUFPLEFBQWtDLEFBQzFDO0FBUk0sQUFVUDs7QUFBTyxJQUFNLHdCQUFRLFNBQVIsQUFBUSxhQUE0QjtNQUF6QixBQUF5QixpQkFBekIsQUFBeUI7TUFBZixBQUFlLGlCQUFmLEFBQWUsQUFDL0M7O01BQU07WUFBVSxBQUNOLEFBQ1I7YUFGYyxBQUVMLEFBQ1Q7aUJBSGMsQUFHRCxBQUNiO1VBQU0seUJBQWUsRUFBRSxVQUFVLFNBQVosQUFBWSxBQUFTLGVBQWUsVUFKM0QsQUFBZ0IsQUFJUixBQUFlLEFBR3ZCO0FBUGdCLEFBQ2Q7O1NBTUssTUFBQSxBQUFTLDRCQUFoQixBQUFPLEFBQWtDLEFBQzFDO0FBVE0sQUFXUDs7QUFBTyxJQUFNLDBCQUFTLFNBQVQsQUFBUyxTQUFNLEFBQzFCO01BQU07WUFBVSxBQUNOLEFBQ1I7aUJBRmMsQUFFRCxBQUNiO2FBSEYsQUFBZ0IsQUFHTCxBQUdYO0FBTmdCLEFBQ2Q7O1NBS0ssTUFBQSxBQUFTLDZCQUFoQixBQUFPLEFBQW1DLEFBQzNDO0FBUk0sQUFVUDs7QUFBTyxJQUFNLDBCQUFTLFNBQVQsQUFBUyxjQUFvQztNQUFqQyxBQUFpQyxpQkFBakMsQUFBaUM7TUFBdkIsQUFBdUIsaUJBQXZCLEFBQXVCO01BQWIsQUFBYSxlQUFiLEFBQWEsQUFDeEQ7O01BQU07WUFBVSxBQUNOLEFBQ1I7YUFGYyxBQUVMLEFBQ1Q7aUJBSGMsQUFHRCxBQUNiOztnQkFDWSxTQURTLEFBQ1QsQUFBUyxBQUNuQjtnQkFGbUIsQUFHbkI7Y0FQSixBQUFnQixBQUlSLEFBQWUsQUFPdkI7QUFQdUIsQUFDbkIsS0FESTtBQUpRLEFBQ2Q7O1NBVUssTUFBQSxBQUFTLDZCQUFoQixBQUFPLEFBQW1DLEFBQzNDO0FBYk0iLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=