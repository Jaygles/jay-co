"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _Input = require("../Components/Input");

var _Input2 = _interopRequireDefault(_Input);

var _Button = require("../Components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Border = require("../Components/Border");

var _Border2 = _interopRequireDefault(_Border);

var _actions = require("../common/actions");

var Actions = _interopRequireWildcard(_actions);

var _strings = require("../common/strings");

var Strings = _interopRequireWildcard(_strings);

var _reactRedux = require("react-redux");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jay/Desktop/code/portfolio/jay-co/Components/LoginForm.js";


var AuthLoginForm = function (_React$Component) {
  (0, _inherits3.default)(AuthLoginForm, _React$Component);

  function AuthLoginForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AuthLoginForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AuthLoginForm.__proto__ || (0, _getPrototypeOf2.default)(AuthLoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      username: "",
      password: ""
    }, _this._handleChange = function (e) {
      _this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    }, _this._handleSubmit = function (e) {
      _this.props.dispatch(Actions.requestLogin(_this.state));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AuthLoginForm, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { style: this.props.style, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, React.createElement(_Input2.default, {
        label: "Username",
        autoFocus: true,
        value: this.state.username,
        name: "username",
        onChange: this._handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), React.createElement(_Border2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), React.createElement(_Input2.default, {
        label: "Password",
        value: this.state.password,
        type: "password",
        name: "password",
        onChange: this._handleChange,
        onSubmit: this._handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), React.createElement(_Border2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), React.createElement(_Button2.default, { onClick: this._handleSubmit, style: { marginTop: 16 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "Log in"));
    }
  }]);

  return AuthLoginForm;
}(React.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(AuthLoginForm);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvTG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW5wdXQiLCJCdXR0b24iLCJCb3JkZXIiLCJBY3Rpb25zIiwiU3RyaW5ncyIsImNvbm5lY3QiLCJBdXRoTG9naW5Gb3JtIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiX2hhbmRsZUNoYW5nZSIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIl9oYW5kbGVTdWJtaXQiLCJwcm9wcyIsImRpc3BhdGNoIiwicmVxdWVzdExvZ2luIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOztJQUFQLEFBQVksQUFBYTs7QUFDekIsQUFBTzs7SUFBUCxBQUFZLEFBQWE7O0FBQ3pCLEFBQVM7Ozs7Ozs7OztJLEFBRUg7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ0o7Z0JBQVEsQUFDSSxBQUNWO2dCQUZNLEFBRUksQTtBQUZKLEFBQ04sYUFJRixBLGdCQUFnQixhQUFLLEFBQ25CO1lBQUEsQUFBSywyQ0FBWSxFQUFBLEFBQUUsT0FBbkIsQUFBMEIsTUFBTyxFQUFBLEFBQUUsT0FBbkMsQUFBMEMsQUFDM0M7QSxhQUVELEEsZ0JBQWdCLGFBQUssQUFDbkI7WUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLFFBQUEsQUFBUSxhQUFhLE1BQXpDLEFBQW9CLEFBQTBCLEFBQy9DO0E7Ozs7OzZCQUVRLEFBQ1A7bUJBQ0UsY0FBQSxTQUFLLE9BQU8sS0FBQSxBQUFLLE1BQWpCLEFBQXVCO29CQUF2QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxRQUNFLEFBQUM7ZUFBRCxBQUNRLEFBQ047bUJBRkYsQUFHRTtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2NBSkYsQUFJTyxBQUNMO2tCQUFVLEtBTFosQUFLaUI7O29CQUxqQjtzQkFERixBQUNFLEFBT0E7QUFQQTtBQUNFLGdCQU1GLEFBQUM7O29CQUFEO3NCQVJGLEFBUUUsQUFDQTtBQURBO0FBQUEsZ0JBQ0EsQUFBQztlQUFELEFBQ1EsQUFDTjtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2NBSEYsQUFHTyxBQUNMO2NBSkYsQUFJTyxBQUNMO2tCQUFVLEtBTFosQUFLaUIsQUFDZjtrQkFBVSxLQU5aLEFBTWlCOztvQkFOakI7c0JBVEYsQUFTRSxBQVFBO0FBUkE7QUFDRSxnQkFPRixBQUFDOztvQkFBRDtzQkFqQkYsQUFpQkUsQUFDQTtBQURBO0FBQUEsZ0JBQ0EsQUFBQyxrQ0FBTyxTQUFTLEtBQWpCLEFBQXNCLGVBQWUsT0FBTyxFQUFFLFdBQTlDLEFBQTRDLEFBQWE7b0JBQXpEO3NCQUFBO0FBQUE7U0FuQkosQUFDRSxBQWtCRSxBQUtMOzs7OztFQXZDeUIsTSxBQUFNLEFBMENsQzs7MkNBQXVCLGlCQUFBO1NBQUEsQUFBUztBQUFqQixDQUFBLEVBQWYsQUFBZSxBQUF3QiIsImZpbGUiOiJMb2dpbkZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9