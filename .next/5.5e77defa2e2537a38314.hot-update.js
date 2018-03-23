webpackHotUpdate(5,{

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.logout = exports.login = exports.getAllUsers = exports.savePost = exports.updatePost = exports.deletePost = exports.deleteViewer = exports.getPostById = exports.getAllPosts = exports.deleteComment = exports.updateComment = exports.saveReply = exports.saveComment = exports.getAllComments = undefined;

var _stringify = __webpack_require__(455);

var _stringify2 = _interopRequireDefault(_stringify);

__webpack_require__(483);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

var ENV = "development" || 'development';
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jay/Desktop/code/portfolio/jay-co/common/http.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jay/Desktop/code/portfolio/jay-co/common/http.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41ZTc3ZGVmYTJlMjUzN2EzODMxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tbW9uL2h0dHAuanM/N2M2ZDMzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jb25zdCByZXF1ZXN0SGVhZGVycyA9IHtcbiAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG59O1xuXG5jb25zdCBFTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgU0VSVkVSX1BBVEggPVxuICBFTlYgPT09ICdkZXZlbG9wbWVudCdcbiAgICA/ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnXG4gICAgOiAnaHR0cHM6Ly9qYXktY28uaGVyb2t1YXBwLmNvbSc7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxDb21tZW50cyA9ICgpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHJlcXVlc3RIZWFkZXJzLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gIH07XG5cbiAgcmV0dXJuIGZldGNoKGAke1NFUlZFUl9QQVRIfS9hcGkvY29tbWVudHNgLCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzYXZlQ29tbWVudCA9ICh7IHBvc3RJZCwgY29udGVudCB9KSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogcmVxdWVzdEhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBvc3RJZCwgY29udGVudCB9KSxcbiAgfTtcblxuICByZXR1cm4gZmV0Y2goYCR7U0VSVkVSX1BBVEh9L2FwaS9jb21tZW50c2AsIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVSZXBseSA9ICh7IHBvc3RJZCwgY29tbWVudElkLCBjb250ZW50IH0pID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcG9zdElkLCBjb21tZW50SWQsIGNvbnRlbnQgfSksXG4gIH07XG5cbiAgcmV0dXJuIGZldGNoKGAke1NFUlZFUl9QQVRIfS9hcGkvY29tbWVudHNgLCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDb21tZW50ID0gKHsgcG9zdElkLCBjb21tZW50SWQsIGNvbnRlbnQgfSkgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczogcmVxdWVzdEhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbW1lbnRJZCwgY29udGVudCB9KSxcbiAgfTtcblxuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7U0VSVkVSX1BBVEh9L2FwaS9wb3N0cy8ke3Bvc3RJZH0vY29tbWVudHMvJHtjb21tZW50SWR9YCxcbiAgICBvcHRpb25zLFxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSAoeyBwb3N0SWQsIGNvbW1lbnRJZCB9KSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICB9O1xuXG4gIHJldHVybiBmZXRjaChcbiAgICBgJHtTRVJWRVJfUEFUSH0vYXBpL3Bvc3RzLyR7cG9zdElkfS9jb21tZW50cy8ke2NvbW1lbnRJZH1gLFxuICAgIG9wdGlvbnMsXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsUG9zdHMgPSAoKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICB9O1xuXG4gIHJldHVybiBmZXRjaChgJHtTRVJWRVJfUEFUSH0vYXBpL3Bvc3RzYCwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5SWQgPSAoaWQpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHJlcXVlc3RIZWFkZXJzLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gIH07XG5cbiAgcmV0dXJuIGZldGNoKGAke1NFUlZFUl9QQVRIfS9hcGkvcG9zdHMvJHtpZH1gLCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVWaWV3ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICB9O1xuXG4gIHJldHVybiBmZXRjaChgJHtTRVJWRVJfUEFUSH0vYXBpL3ZpZXdlci9kZWxldGVgLCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0ID0gKGlkKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICB9O1xuXG4gIHJldHVybiBmZXRjaChgJHtTRVJWRVJfUEFUSH0vYXBpL3Bvc3RzLyR7aWR9YCwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUG9zdCA9ICh7IGNvbnRlbnQsIHRpdGxlLCBwb3N0SWQgfSkgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbnRlbnQsIHRpdGxlIH0pLFxuICB9O1xuXG4gIHJldHVybiBmZXRjaChgJHtTRVJWRVJfUEFUSH0vYXBpL3Bvc3RzLyR7cG9zdElkfWAsIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVQb3N0ID0gKHsgY29udGVudCwgdGl0bGUgfSkgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgaGVhZGVyczogcmVxdWVzdEhlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb250ZW50LCB0aXRsZSB9KSxcbiAgfTtcblxuICByZXR1cm4gZmV0Y2goYCR7U0VSVkVSX1BBVEh9L2FwaS9wb3N0c2AsIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFVzZXJzID0gKCkgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczogcmVxdWVzdEhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgfTtcblxuICByZXR1cm4gZmV0Y2goYCR7U0VSVkVSX1BBVEh9L2FwaS91c2Vyc2AsIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IHVzZXJuYW1lLnRvTG93ZXJDYXNlKCksIHBhc3N3b3JkIH0pLFxuICB9O1xuXG4gIHJldHVybiBmZXRjaChgJHtTRVJWRVJfUEFUSH0vYXBpL2xvZ2luYCwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgaGVhZGVyczogcmVxdWVzdEhlYWRlcnMsXG4gIH07XG5cbiAgcmV0dXJuIGZldGNoKGAke1NFUlZFUl9QQVRIfS9hcGkvbG9nb3V0YCwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gKHsgdXNlcm5hbWUsIHBhc3N3b3JkLCB2ZXJpZnkgfSkgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHJlcXVlc3RIZWFkZXJzLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHZlcmlmeSxcbiAgICB9KSxcbiAgfTtcblxuICByZXR1cm4gZmV0Y2goYCR7U0VSVkVSX1BBVEh9L2FwaS9zaWdudXBgLCBvcHRpb25zKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vaHR0cC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBSUE7QUFOQTtBQUpBO0FBQ0E7QUFTQTtBQVpBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=