'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../common/actions');

var Actions = _interopRequireWildcard(_actions);

var _reactRedux = require('react-redux');

var _Input = require('../Components/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('../Components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Border = require('../Components/Border');

var _Border2 = _interopRequireDefault(_Border);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/SignupForm.js';


var SignupForm = function (_Component) {
  (0, _inherits3.default)(SignupForm, _Component);

  function SignupForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SignupForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SignupForm.__proto__ || (0, _getPrototypeOf2.default)(SignupForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      username: '',
      password: '',
      verify: ''
    }, _this._handleChange = function (e) {
      _this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    }, _this._handleSubmit = function (e) {
      _this.props.dispatch(Actions.requestSignup(_this.state));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SignupForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: this.props.style, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_Input2.default, {
        label: 'Username',
        value: this.state.username,
        name: 'username',
        onChange: this._handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement(_Border2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_Input2.default, {
        label: 'Password',
        value: this.state.password,
        name: 'password',
        type: 'password',
        onChange: this._handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_Border2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_Input2.default, {
        label: 'Verify your password',
        value: this.state.verify,
        name: 'verify',
        type: 'password',
        onChange: this._handleChange,
        onSubmit: this._handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement(_Border2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this._handleSubmit, style: { marginTop: 16 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Sign up'));
    }
  }]);

  return SignupForm;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(SignupForm);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvU2lnbnVwRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkFjdGlvbnMiLCJjb25uZWN0IiwiSW5wdXQiLCJCdXR0b24iLCJCb3JkZXIiLCJTaWdudXBGb3JtIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidmVyaWZ5IiwiX2hhbmRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIl9oYW5kbGVTdWJtaXQiLCJwcm9wcyIsImRpc3BhdGNoIiwicmVxdWVzdFNpZ251cCIsInN0eWxlIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7SUFBUCxBQUFZLEFBQWE7O0FBQ3pCLEFBQVM7O0FBQ1QsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7Ozs7O0lBRWIsQTs7Ozs7Ozs7Ozs7Ozs7b05BQ0osQTtnQkFBUSxBQUNJLEFBQ1Y7Z0JBRk0sQUFFSSxBQUNWO2NBSE0sQUFHRSxBO0FBSEYsQUFDTixhLEFBS0YsZ0JBQWdCLFVBQUEsQUFBQyxHQUFNLEFBQ3JCO1lBQUEsQUFBSywyQ0FBWSxFQUFBLEFBQUUsT0FBbkIsQUFBMEIsTUFBTyxFQUFBLEFBQUUsT0FBbkMsQUFBMEMsQUFDM0M7QSxhQUVELEEsZ0JBQWdCLFVBQUEsQUFBQyxHQUFNLEFBQ3JCO1lBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxRQUFBLEFBQVEsY0FBYyxNQUExQyxBQUFvQixBQUEyQixBQUNoRDtBOzs7Ozs2QkFDUSxBQUNQOzZCQUNFLGNBQUEsU0FBSyxPQUFPLEtBQUEsQUFBSyxNQUFqQixBQUF1QjtvQkFBdkI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQztlQUFELEFBQ1EsQUFDTjtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2NBSEYsQUFHTyxBQUNMO2tCQUFVLEtBSlosQUFJaUI7O29CQUpqQjtzQkFERixBQUNFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUM7O29CQUFEO3NCQVBGLEFBT0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQztlQUFELEFBQ1EsQUFDTjtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2NBSEYsQUFHTyxBQUNMO2NBSkYsQUFJTyxBQUNMO2tCQUFVLEtBTFosQUFLaUI7O29CQUxqQjtzQkFSRixBQVFFLEFBT0E7QUFQQTtBQUNFLDBCQU1GLEFBQUM7O29CQUFEO3NCQWZGLEFBZUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQztlQUFELEFBQ1EsQUFDTjtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2NBSEYsQUFHTyxBQUNMO2NBSkYsQUFJTyxBQUNMO2tCQUFVLEtBTFosQUFLaUIsQUFDZjtrQkFBVSxLQU5aLEFBTWlCOztvQkFOakI7c0JBaEJGLEFBZ0JFLEFBUUE7QUFSQTtBQUNFLDBCQU9GLEFBQUM7O29CQUFEO3NCQXhCRixBQXdCRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDLGtDQUFPLFNBQVMsS0FBakIsQUFBc0IsZUFBZSxPQUFPLEVBQUUsV0FBOUMsQUFBNEMsQUFBYTtvQkFBekQ7c0JBQUE7QUFBQTtTQTFCSixBQUNFLEFBeUJFLEFBS0w7Ozs7O0FBOUNzQixBQWlEekIsQTs7MkNBQXVCLFVBQUEsQUFBQyxPQUFEO1NBQUEsQUFBVztBQUFuQixDQUFBLEVBQWYsQUFBZSxBQUEwQiIsImZpbGUiOiJTaWdudXBGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==