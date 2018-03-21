"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

require("isomorphic-fetch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

var ENV = process.env.NODE_ENV || "development";
var SERVER_PATH = ENV === "development" ? "http://localhost:8000" : "https://next-postgres.herokuapp.com";

var signup = exports.signup = function signup(_ref) {
  var username = _ref.username,
      password = _ref.password,
      verify = _ref.verify;

  var options = {
    method: "POST",
    headers: requestHeaders,
    credentials: "include",
    body: (0, _stringify2.default)({
      username: username.toLowerCase(),
      password: password,
      verify: verify
    })
  };

  return fetch(SERVER_PATH + "/api/signup", options);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9odHRwLmpzIl0sIm5hbWVzIjpbInJlcXVlc3RIZWFkZXJzIiwiQWNjZXB0IiwiRU5WIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiU0VSVkVSX1BBVEgiLCJzaWdudXAiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidmVyaWZ5Iiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsImJvZHkiLCJ0b0xvd2VyQ2FzZSIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTTtVQUFpQixBQUNiLEFBQ1I7a0JBRkYsQUFBdUIsQUFFTDtBQUZLLEFBQ3JCOztBQUlGLElBQU0sTUFBTSxRQUFBLEFBQVEsSUFBUixBQUFZLFlBQXhCLEFBQW9DO0FBQ3BDLElBQU0sY0FDSixRQUFBLEFBQVEsZ0JBQVIsQUFDSSwwQkFGTixBQUdNLEFBRU47O0FBQU8sSUFBTSwwQkFBUyxTQUFULEFBQVMsYUFBb0M7TUFBakMsQUFBaUMsZ0JBQWpDLEFBQWlDO01BQXZCLEFBQXVCLGdCQUF2QixBQUF1QjtNQUFiLEFBQWEsY0FBYixBQUFhLEFBQ3hEOztNQUFNO1lBQVUsQUFDTixBQUNSO2FBRmMsQUFFTCxBQUNUO2lCQUhjLEFBR0QsQUFDYjs7Z0JBQ1ksU0FEUyxBQUNULEFBQVMsQUFDbkI7Z0JBRm1CLEFBR25CO2NBUEosQUFBZ0IsQUFJUixBQUFlLEFBT3ZCO0FBUHVCLEFBQ25CLEtBREk7QUFKUSxBQUNkOztTQVVLLE1BQUEsQUFBUyw2QkFBaEIsQUFBTyxBQUFtQyxBQUMzQztBQWJNIiwiZmlsZSI6Imh0dHAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9