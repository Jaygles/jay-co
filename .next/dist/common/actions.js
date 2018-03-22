"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestSignup = exports.requestLogin = exports.requestSavePost = exports.viewerAuthenticated = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _http = require("./http");

var HTTP = _interopRequireWildcard(_http);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var exception = function exception(error) {
  throw new Error(error);
};

var redirect = function redirect(route) {
  window.location.href = route;
};

var viewerAuthenticated = exports.viewerAuthenticated = function viewerAuthenticated(viewer) {
  return {
    type: "VIEWER_AUTHENTICATED",
    isAuthenticated: true,
    viewer: viewer
  };
};

var requestSavePost = exports.requestSavePost = function requestSavePost(data) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return HTTP.savePost(data);

            case 2:
              response = _context.sent;

              if (!(response.status === 200)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", redirect("/"));

            case 5:
              if (!(response.status === 403)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", dispatch(requestLogout()));

            case 7:
              return _context.abrupt("return", exception("error"));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var requestLogin = exports.requestLogin = function requestLogin(data) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return HTTP.login(data);

            case 2:
              response = _context2.sent;

              if (!(response.status !== 200)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", exception("error"));

            case 5:
              return _context2.abrupt("return", redirect("/"));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var requestSignup = exports.requestSignup = function requestSignup(data) {
  console.log(HTTP);
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return HTTP.signup(data);

            case 2:
              response = _context3.sent;

              if (!(response.status !== 200)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", exception("error"));

            case 5:
              return _context3.abrupt("return", redirect("/"));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkhUVFAiLCJleGNlcHRpb24iLCJFcnJvciIsImVycm9yIiwicmVkaXJlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyb3V0ZSIsInZpZXdlckF1dGhlbnRpY2F0ZWQiLCJ0eXBlIiwiaXNBdXRoZW50aWNhdGVkIiwidmlld2VyIiwicmVxdWVzdFNhdmVQb3N0IiwiZGlzcGF0Y2giLCJzYXZlUG9zdCIsImRhdGEiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlcXVlc3RMb2dvdXQiLCJyZXF1ZXN0TG9naW4iLCJsb2dpbiIsInJlcXVlc3RTaWdudXAiLCJjb25zb2xlIiwibG9nIiwic2lnbnVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVksQUFBVTs7Ozs7Ozs7QUFFdEIsSUFBTSxZQUFZLFNBQVosQUFBWSxpQkFBUyxBQUN6QjtRQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNqQjtBQUZEOztBQUlBLElBQU0sV0FBVyxTQUFYLEFBQVcsZ0JBQVMsQUFDeEI7U0FBQSxBQUFPLFNBQVAsQUFBZ0IsT0FBaEIsQUFBdUIsQUFDeEI7QUFGRCxBQUlBOztBQUFPLElBQU0sb0RBQXNCLFNBQXRCLEFBQXNCLDRCQUFVLEFBQzNDOztVQUFPLEFBQ0MsQUFDTjtxQkFGSyxBQUVZLEFBQ2pCO1lBSEYsQUFBTyxBQUtSO0FBTFEsQUFDTDtBQUZHLEFBUVA7O0FBQU8sSUFBTSw0Q0FBa0IsU0FBbEIsQUFBa0Isc0JBQVEsQUFDckM7cUJBQUE7d0ZBQU8saUJBQUEsQUFBTSxVQUFOO1VBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7cUJBQ2tCLEtBQUEsQUFBSyxTQUR2QixBQUNrQixBQUFjOztpQkFBL0I7QUFERCxrQ0FBQTs7b0JBR0QsU0FBQSxBQUFTLFdBSFIsQUFHbUIsTUFIbkI7Z0NBQUE7QUFBQTtBQUFBOzsrQ0FJSSxTQUpKLEFBSUksQUFBUzs7aUJBSmI7b0JBT0QsU0FBQSxBQUFTLFdBUFIsQUFPbUIsTUFQbkI7Z0NBQUE7QUFBQTtBQUFBOzsrQ0FRSSxTQVJKLEFBUUksQUFBUzs7aUJBUmI7K0NBV0UsVUFYRixBQVdFLEFBQVU7O2lCQVhaO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0FBQVA7O3lCQUFBOzhCQUFBO0FBQUE7QUFhRDtBQWRNLEFBZ0JQOztBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLG1CQUFRLEFBQ2xDO3FCQUFBO3lGQUFPLGtCQUFBLEFBQU0sVUFBTjtVQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUFBO3FCQUNrQixLQUFBLEFBQUssTUFEdkIsQUFDa0IsQUFBVzs7aUJBQTVCO0FBREQsbUNBQUE7O29CQUdELFNBQUEsQUFBUyxXQUhSLEFBR21CLE1BSG5CO2lDQUFBO0FBQUE7QUFBQTs7Z0RBSUksVUFKSixBQUlJLEFBQVU7O2lCQUpkO2dEQU9FLFNBUEYsQUFPRSxBQUFTOztpQkFQWDtpQkFBQTsrQkFBQTs7QUFBQTttQkFBQTtBQUFQOzswQkFBQTsrQkFBQTtBQUFBO0FBU0Q7QUFWTSxBQVlQOztBQUFPLElBQU0sd0NBQWdCLFNBQWhCLEFBQWdCLG9CQUFRLEFBQ25DO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtxQkFBQTt5RkFBTyxrQkFBQSxBQUFNLFVBQU47VUFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDa0IsS0FBQSxBQUFLLE9BRHZCLEFBQ2tCLEFBQVk7O2lCQUE3QjtBQURELG1DQUFBOztvQkFHRCxTQUFBLEFBQVMsV0FIUixBQUdtQixNQUhuQjtpQ0FBQTtBQUFBO0FBQUE7O2dEQUlJLFVBSkosQUFJSSxBQUFVOztpQkFKZDtnREFPRSxTQVBGLEFBT0UsQUFBUzs7aUJBUFg7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QUFBUDs7MEJBQUE7K0JBQUE7QUFBQTtBQVNEO0FBWE0iLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=