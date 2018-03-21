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

var _react2 = _interopRequireDefault(_react);

var _actions = require("../common/actions");

var Actions = _interopRequireWildcard(_actions);

var _reactRedux = require("react-redux");

var _Input = require("../Components/Input");

var _Input2 = _interopRequireDefault(_Input);

var _Button = require("../Components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Border = require("../Components/Border");

var _Border2 = _interopRequireDefault(_Border);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jay/Desktop/code/portfolio/jay-co/Components/LoginForm.js";


var LoginForm = function (_Component) {
  (0, _inherits3.default)(LoginForm, _Component);

  function LoginForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LoginForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LoginForm.__proto__ || (0, _getPrototypeOf2.default)(LoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      username: "",
      password: "",
      verify: ""
    }, _this._handleChange = function (e) {
      _this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    }, _this._handleSubmit = function (e) {
      console.log("Submit clicked");
      _this.props.dispatch(Actions.requestSignup(_this.state));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LoginForm, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { style: this.props.style, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_Input2.default, {
        label: "Username",
        value: this.state.username,
        name: "username",
        onChange: this._handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(_Border2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_Input2.default, {
        label: "Password",
        value: this.state.password,
        name: "password",
        type: "password",
        onChange: this._handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement(_Border2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement(_Input2.default, {
        label: "Verify your password",
        value: this.state.verify,
        name: "verify",
        type: "password",
        onChange: this._handleChange,
        onSubmit: this._handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement(_Border2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this._handleSubmit, style: { marginTop: 16 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Sign up"));
    }
  }]);

  return LoginForm;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(LoginForm);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvTG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQWN0aW9ucyIsImNvbm5lY3QiLCJJbnB1dCIsIkJ1dHRvbiIsIkJvcmRlciIsIkxvZ2luRm9ybSIsInN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInZlcmlmeSIsIl9oYW5kbGVDaGFuZ2UiLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJfaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiZGlzcGF0Y2giLCJyZXF1ZXN0U2lnbnVwIiwic3R5bGUiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOztJQUFQLEFBQVksQUFBYTs7QUFDekIsQUFBUzs7QUFDVCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7Ozs7OztrTkFDSixBO2dCQUFRLEFBQ0ksQUFDVjtnQkFGTSxBQUVJLEFBQ1Y7Y0FITSxBQUdFLEE7QUFIRixBQUNOLGEsQUFLRixnQkFBZ0IsYUFBSyxBQUNuQjtZQUFBLEFBQUssMkNBQVksRUFBQSxBQUFFLE9BQW5CLEFBQTBCLE1BQU8sRUFBQSxBQUFFLE9BQW5DLEFBQTBDLEFBQzNDO0EsYSxBQUVELGdCQUFnQixhQUFLLEFBQ25CO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtZQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsUUFBQSxBQUFRLGNBQWMsTUFBMUMsQUFBb0IsQUFBMkIsQUFDaEQ7QTs7Ozs7NkJBQ1EsQUFDUDs2QkFDRSxjQUFBLFNBQUssT0FBTyxLQUFBLEFBQUssTUFBakIsQUFBdUI7b0JBQXZCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7ZUFBRCxBQUNRLEFBQ047ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtjQUhGLEFBR08sQUFDTDtrQkFBVSxLQUpaLEFBSWlCOztvQkFKakI7c0JBREYsQUFDRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixBQUFDOztvQkFBRDtzQkFQRixBQU9FLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7ZUFBRCxBQUNRLEFBQ047ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtjQUhGLEFBR08sQUFDTDtjQUpGLEFBSU8sQUFDTDtrQkFBVSxLQUxaLEFBS2lCOztvQkFMakI7c0JBUkYsQUFRRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixBQUFDOztvQkFBRDtzQkFmRixBQWVFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7ZUFBRCxBQUNRLEFBQ047ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtjQUhGLEFBR08sQUFDTDtjQUpGLEFBSU8sQUFDTDtrQkFBVSxLQUxaLEFBS2lCLEFBQ2Y7a0JBQVUsS0FOWixBQU1pQjs7b0JBTmpCO3NCQWhCRixBQWdCRSxBQVFBO0FBUkE7QUFDRSwwQkFPRixBQUFDOztvQkFBRDtzQkF4QkYsQUF3QkUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyxrQ0FBTyxTQUFTLEtBQWpCLEFBQXNCLGVBQWUsT0FBTyxFQUFFLFdBQTlDLEFBQTRDLEFBQWE7b0JBQXpEO3NCQUFBO0FBQUE7U0ExQkosQUFDRSxBQXlCRSxBQUtMOzs7OztBQS9DcUIsQSxBQWtEeEI7OzJDQUF1QixpQkFBQTtTQUFBLEFBQVM7QUFBakIsQ0FBQSxFQUFmLEFBQWUsQUFBd0IiLCJmaWxlIjoiTG9naW5Gb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==