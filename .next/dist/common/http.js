'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.logout = exports.login = exports.getAllUsers = exports.deleteViewer = exports.savePortfolio = exports.updatePortfolio = exports.deletePortfolio = exports.getPortfolioById = exports.getAllPortfolios = exports.savePost = exports.updatePost = exports.deletePost = exports.getPostById = exports.getAllPosts = exports.deleteComment = exports.updateComment = exports.saveReply = exports.saveComment = exports.getAllComments = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

var ENV = process.env.NODE_ENV || 'development';
var SERVER_PATH = ENV === 'development' ? 'http://localhost:8000' : 'https://jay-co.herokuapp.com';

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

var getAllPortfolios = exports.getAllPortfolios = function getAllPortfolios() {
  var options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/portfolios', options);
};

var getPortfolioById = exports.getPortfolioById = function getPortfolioById(id) {
  var options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/portfolios/' + id, options);
};

var deletePortfolio = exports.deletePortfolio = function deletePortfolio(id) {
  var options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/portfolios/' + id, options);
};

var updatePortfolio = exports.updatePortfolio = function updatePortfolio(_ref7) {
  var description = _ref7.description,
      title = _ref7.title,
      portfolioId = _ref7.portfolioId,
      img = _ref7.img,
      link = _ref7.link;

  var options = {
    method: 'PUT',
    credentials: 'include',
    headers: requestHeaders,
    body: (0, _stringify2.default)({ description: description, title: title, img: img, link: link })
  };

  return fetch(SERVER_PATH + '/api/portfolios/' + portfolioId, options);
};

var savePortfolio = exports.savePortfolio = function savePortfolio(_ref8) {
  var description = _ref8.description,
      title = _ref8.title,
      img = _ref8.img,
      link = _ref8.link;

  var options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
    body: (0, _stringify2.default)({ description: description, title: title, img: img, link: link })
  };

  return fetch(SERVER_PATH + '/api/portfolios', options);
};

var deleteViewer = exports.deleteViewer = function deleteViewer() {
  var options = {
    method: 'DELETE',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/viewer/delete', options);
};

var getAllUsers = exports.getAllUsers = function getAllUsers() {
  var options = {
    method: 'GET',
    headers: requestHeaders,
    credentials: 'include'
  };

  return fetch(SERVER_PATH + '/api/users', options);
};

var login = exports.login = function login(_ref9) {
  var username = _ref9.username,
      password = _ref9.password;

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

var signup = exports.signup = function signup(_ref10) {
  var username = _ref10.username,
      password = _ref10.password,
      verify = _ref10.verify;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9odHRwLmpzIl0sIm5hbWVzIjpbInJlcXVlc3RIZWFkZXJzIiwiQWNjZXB0IiwiRU5WIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiU0VSVkVSX1BBVEgiLCJnZXRBbGxDb21tZW50cyIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJmZXRjaCIsInNhdmVDb21tZW50IiwicG9zdElkIiwiY29udGVudCIsImJvZHkiLCJzYXZlUmVwbHkiLCJjb21tZW50SWQiLCJ1cGRhdGVDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImdldEFsbFBvc3RzIiwiZ2V0UG9zdEJ5SWQiLCJpZCIsImRlbGV0ZVBvc3QiLCJ1cGRhdGVQb3N0IiwidGl0bGUiLCJzYXZlUG9zdCIsImdldEFsbFBvcnRmb2xpb3MiLCJnZXRQb3J0Zm9saW9CeUlkIiwiZGVsZXRlUG9ydGZvbGlvIiwidXBkYXRlUG9ydGZvbGlvIiwiZGVzY3JpcHRpb24iLCJwb3J0Zm9saW9JZCIsImltZyIsImxpbmsiLCJzYXZlUG9ydGZvbGlvIiwiZGVsZXRlVmlld2VyIiwiZ2V0QWxsVXNlcnMiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0b0xvd2VyQ2FzZSIsImxvZ291dCIsInNpZ251cCIsInZlcmlmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQU07VUFBaUIsQUFDYixBQUNSO2tCQUZGLEFBQXVCLEFBRUw7QUFGSyxBQUNyQjs7QUFJRixJQUFNLE1BQU0sUUFBQSxBQUFRLElBQVIsQUFBWSxZQUF4QixBQUFvQztBQUNwQyxJQUFNLGNBQ0osUUFBQSxBQUFRLGdCQUFSLEFBQ0ksMEJBRk4sQUFHTSxBQUVOOztBQUFPLElBQU0sMENBQWlCLFNBQWpCLEFBQWlCLGlCQUFNLEFBQ2xDO01BQU07WUFBVSxBQUNOLEFBQ1I7YUFGYyxBQUVMLEFBQ1Q7aUJBSEYsQUFBZ0IsQUFHRCxBQUdmO0FBTmdCLEFBQ2Q7O1NBS0ss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QixBQUdELEFBR2Y7QUFOZ0IsQUFDZDs7U0FLSyxNQUFBLEFBQVMsNEJBQWhCLEFBQU8sQUFBa0MsQUFDMUM7QUFSTSxBQVVQOztBQUFPLElBQU0sd0JBQVEsU0FBUixBQUFRLGFBQTRCO01BQXpCLEFBQXlCLGlCQUF6QixBQUF5QjtNQUFmLEFBQWUsaUJBQWYsQUFBZSxBQUMvQzs7TUFBTTtZQUFVLEFBQ04sQUFDUjthQUZjLEFBRUwsQUFDVDtpQkFIYyxBQUdELEFBQ2I7VUFBTSx5QkFBZSxFQUFFLFVBQVUsU0FBWixBQUFZLEFBQVMsZUFBZSxVQUozRCxBQUFnQixBQUlSLEFBQWUsQUFHdkI7QUFQZ0IsQUFDZDs7U0FNSyxNQUFBLEFBQVMsNEJBQWhCLEFBQU8sQUFBa0MsQUFDMUM7QUFUTSxBQVdQOztBQUFPLElBQU0sMEJBQVMsU0FBVCxBQUFTLFNBQU0sQUFDMUI7TUFBTTtZQUFVLEFBQ04sQUFDUjtpQkFGYyxBQUVELEFBQ2I7YUFIRixBQUFnQixBQUdMLEFBR1g7QUFOZ0IsQUFDZDs7U0FLSyxNQUFBLEFBQVMsNkJBQWhCLEFBQU8sQUFBbUMsQUFDM0M7QUFSTSxBQVVQOztBQUFPLElBQU0sMEJBQVMsU0FBVCxBQUFTLGVBQW9DO01BQWpDLEFBQWlDLGtCQUFqQyxBQUFpQztNQUF2QixBQUF1QixrQkFBdkIsQUFBdUI7TUFBYixBQUFhLGdCQUFiLEFBQWEsQUFDeEQ7O01BQU07WUFBVSxBQUNOLEFBQ1I7YUFGYyxBQUVMLEFBQ1Q7aUJBSGMsQUFHRCxBQUNiOztnQkFDWSxTQURTLEFBQ1QsQUFBUyxBQUNuQjtnQkFGbUIsQUFHbkI7Y0FQSixBQUFnQixBQUlSLEFBQWUsQUFPdkI7QUFQdUIsQUFDbkIsS0FESTtBQUpRLEFBQ2Q7O1NBVUssTUFBQSxBQUFTLDZCQUFoQixBQUFPLEFBQW1DLEFBQzNDO0FBYk0iLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=