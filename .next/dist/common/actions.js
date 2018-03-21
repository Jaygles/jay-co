"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestSignup = undefined;

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

var requestSignup = exports.requestSignup = function requestSignup(data) {
  console.log(HTTP);
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return HTTP.signup(data);

            case 2:
              response = _context.sent;

              if (!(response.status !== 200)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", exception("error"));

            case 5:
              return _context.abrupt("return", redirect("/"));

            case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkhUVFAiLCJleGNlcHRpb24iLCJFcnJvciIsImVycm9yIiwicmVkaXJlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyb3V0ZSIsInJlcXVlc3RTaWdudXAiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJzaWdudXAiLCJkYXRhIiwicmVzcG9uc2UiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQUssQUFBWixBQUFzQixBQUF0Qjs7Ozs7Ozs7QUFFQSxJQUFNLFlBQVksU0FBWixBQUFZLGlCQUFTLEFBQ3pCO1FBQU0sSUFBSSxBQUFKLE1BQVUsQUFBVixBQUFOLEFBQ0Q7QUFGRDs7QUFJQSxJQUFNLFdBQVcsU0FBWCxBQUFXLGdCQUFTLEFBQ3hCO1NBQU8sQUFBUCxTQUFnQixBQUFoQixPQUF1QixBQUF2QixBQUNEO0FBRkQsQUFJQTs7QUFBTyxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixvQkFBUSxBQUNuQztVQUFRLEFBQVIsSUFBWSxBQUFaLEFBQ0E7cUJBQUE7d0ZBQU8saUJBQU0sQUFBTixVQUFBO1VBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7cUJBQ2tCLEtBQUssQUFBTCxPQUFZLEFBQVosQUFEbEI7O2lCQUNDO0FBREQsa0NBQUE7O29CQUdELFNBQVMsQUFBVCxXQUFvQixBQUhuQixNQUFBO2dDQUFBO0FBQUE7QUFBQTs7K0NBSUksVUFBVSxBQUFWLEFBSko7O2lCQUFBOytDQU9FLFNBQVMsQUFBVCxBQVBGOztpQkFBQTtpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBQUFQOzt5QkFBQTs4QkFBQTtBQUFBO0FBU0Q7QUFYTSIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==