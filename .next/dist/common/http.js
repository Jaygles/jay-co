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
      portfolioId = _ref7.portfolioId;

  var options = {
    method: 'PUT',
    credentials: 'include',
    headers: requestHeaders,
    body: (0, _stringify2.default)({ description: description, title: title })
  };

  return fetch(SERVER_PATH + '/api/portfolios/' + portfolioId, options);
};

var savePortfolio = exports.savePortfolio = function savePortfolio(_ref8) {
  var description = _ref8.description,
      title = _ref8.title,
      img = _ref8.img;

  var options = {
    method: 'POST',
    credentials: 'include',
    headers: requestHeaders,
    body: (0, _stringify2.default)({ description: description, title: title, img: img })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9odHRwLmpzIl0sIm5hbWVzIjpbInJlcXVlc3RIZWFkZXJzIiwiQWNjZXB0IiwiRU5WIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiU0VSVkVSX1BBVEgiLCJnZXRBbGxDb21tZW50cyIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJmZXRjaCIsInNhdmVDb21tZW50IiwicG9zdElkIiwiY29udGVudCIsImJvZHkiLCJzYXZlUmVwbHkiLCJjb21tZW50SWQiLCJ1cGRhdGVDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImdldEFsbFBvc3RzIiwiZ2V0UG9zdEJ5SWQiLCJpZCIsImRlbGV0ZVBvc3QiLCJ1cGRhdGVQb3N0IiwidGl0bGUiLCJzYXZlUG9zdCIsImdldEFsbFBvcnRmb2xpb3MiLCJnZXRQb3J0Zm9saW9CeUlkIiwiZGVsZXRlUG9ydGZvbGlvIiwidXBkYXRlUG9ydGZvbGlvIiwiZGVzY3JpcHRpb24iLCJwb3J0Zm9saW9JZCIsInNhdmVQb3J0Zm9saW8iLCJpbWciLCJkZWxldGVWaWV3ZXIiLCJnZXRBbGxVc2VycyIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInRvTG93ZXJDYXNlIiwibG9nb3V0Iiwic2lnbnVwIiwidmVyaWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTTtVQUFpQixBQUNiLEFBQ1I7a0JBRkYsQUFBdUIsQUFFTDtBQUZLLEFBQ3JCOztBQUlGLElBQU0sTUFBTSxRQUFBLEFBQVEsSUFBUixBQUFZLFlBQXhCLEFBQW9DO0FBQ3BDLElBQU0sY0FDSixRQUFBLEFBQVEsZ0JBQVIsQUFDSSwwQkFGTixBQUdNLEFBRU47O0FBQU8sSUFBTSwwQ0FBaUIsU0FBakIsQUFBaUIsaUJBQU0sQUFDbEM7TUFBTTtZQUFVLEFBQ04sQUFDUjthQUZjLEFBRUwsQUFDVDtpQkFIRixBQUFnQixBQUdELEFBR2Y7QUFOZ0IsQUFDZDs7U0FLSyxNQUFBLEFB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LEFBQVEsYUFBNEI7TUFBekIsQUFBeUIsaUJBQXpCLEFBQXlCO01BQWYsQUFBZSxpQkFBZixBQUFlLEFBQy9DOztNQUFNO1lBQVUsQUFDTixBQUNSO2FBRmMsQUFFTCxBQUNUO2lCQUhjLEFBR0QsQUFDYjtVQUFNLHlCQUFlLEVBQUUsVUFBVSxTQUFaLEFBQVksQUFBUyxlQUFlLFVBSjNELEFBQWdCLEFBSVIsQUFBZSxBQUd2QjtBQVBnQixBQUNkOztTQU1LLE1BQUEsQUFBUyw0QkFBaEIsQUFBTyxBQUFrQyxBQUMxQztBQVRNLEFBV1A7O0FBQU8sSUFBTSwwQkFBUyxTQUFULEFBQVMsU0FBTSxBQUMxQjtNQUFNO1lBQVUsQUFDTixBQUNSO2lCQUZjLEFBRUQsQUFDYjthQUhGLEFBQWdCLEFBR0wsQUFHWDtBQU5nQixBQUNkOztTQUtLLE1BQUEsQUFBUyw2QkFBaEIsQUFBTyxBQUFtQyxBQUMzQztBQVJNLEFBVVA7O0FBQU8sSUFBTSwwQkFBUyxTQUFULEFBQVMsZUFBb0M7TUFBakMsQUFBaUMsa0JBQWpDLEFBQWlDO01BQXZCLEFBQXVCLGtCQUF2QixBQUF1QjtNQUFiLEFBQWEsZ0JBQWIsQUFBYSxBQUN4RDs7TUFBTTtZQUFVLEFBQ04sQUFDUjthQUZjLEFBRUwsQUFDVDtpQkFIYyxBQUdELEFBQ2I7O2dCQUNZLFNBRFMsQUFDVCxBQUFTLEFBQ25CO2dCQUZtQixBQUduQjtjQVBKLEFBQWdCLEFBSVIsQUFBZSxBQU92QjtBQVB1QixBQUNuQixLQURJO0FBSlEsQUFDZDs7U0FVSyxNQUFBLEFBQVMsNkJBQWhCLEFBQU8sQUFBbUMsQUFDM0M7QUFiTSIsImZpbGUiOiJodHRwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==