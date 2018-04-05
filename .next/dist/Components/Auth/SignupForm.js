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

var _actions = require('../../common/actions');

var Actions = _interopRequireWildcard(_actions);

var _reactRedux = require('react-redux');

var _Input = require('../Bits/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('../Bits/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Border = require('../Bits/Border');

var _Border2 = _interopRequireDefault(_Border);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Auth/SignupForm.js';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvQXV0aC9TaWdudXBGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQWN0aW9ucyIsImNvbm5lY3QiLCJJbnB1dCIsIkJ1dHRvbiIsIkJvcmRlciIsIlNpZ251cEZvcm0iLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2ZXJpZnkiLCJfaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiX2hhbmRsZVN1Ym1pdCIsInByb3BzIiwiZGlzcGF0Y2giLCJyZXF1ZXN0U2lnbnVwIiwic3R5bGUiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOztJQUFQLEFBQVksQUFBYTs7QUFDekIsQUFBUzs7QUFDVCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7Ozs7OztvTkFDSixBO2dCQUFRLEFBQ0ksQUFDVjtnQkFGTSxBQUVJLEFBQ1Y7Y0FITSxBQUdFLEE7QUFIRixBQUNOLGEsQUFLRixnQkFBZ0IsVUFBQSxBQUFDLEdBQU0sQUFDckI7WUFBQSxBQUFLLDJDQUFZLEVBQUEsQUFBRSxPQUFuQixBQUEwQixNQUFPLEVBQUEsQUFBRSxPQUFuQyxBQUEwQyxBQUMzQztBLGFBRUQsQSxnQkFBZ0IsVUFBQSxBQUFDLEdBQU0sQUFDckI7WUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLFFBQUEsQUFBUSxjQUFjLE1BQTFDLEFBQW9CLEFBQTJCLEFBQ2hEO0E7Ozs7OzZCQUNRLEFBQ1A7NkJBQ0UsY0FBQSxTQUFLLE9BQU8sS0FBQSxBQUFLLE1BQWpCLEFBQXVCO29CQUF2QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDO2VBQUQsQUFDUSxBQUNOO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7Y0FIRixBQUdPLEFBQ0w7a0JBQVUsS0FKWixBQUlpQjs7b0JBSmpCO3NCQURGLEFBQ0UsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsQUFBQzs7b0JBQUQ7c0JBUEYsQUFPRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDO2VBQUQsQUFDUSxBQUNOO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7Y0FIRixBQUdPLEFBQ0w7Y0FKRixBQUlPLEFBQ0w7a0JBQVUsS0FMWixBQUtpQjs7b0JBTGpCO3NCQVJGLEFBUUUsQUFPQTtBQVBBO0FBQ0UsMEJBTUYsQUFBQzs7b0JBQUQ7c0JBZkYsQUFlRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDO2VBQUQsQUFDUSxBQUNOO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7Y0FIRixBQUdPLEFBQ0w7Y0FKRixBQUlPLEFBQ0w7a0JBQVUsS0FMWixBQUtpQixBQUNmO2tCQUFVLEtBTlosQUFNaUI7O29CQU5qQjtzQkFoQkYsQUFnQkUsQUFRQTtBQVJBO0FBQ0UsMEJBT0YsQUFBQzs7b0JBQUQ7c0JBeEJGLEFBd0JFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMsa0NBQU8sU0FBUyxLQUFqQixBQUFzQixlQUFlLE9BQU8sRUFBRSxXQUE5QyxBQUE0QyxBQUFhO29CQUF6RDtzQkFBQTtBQUFBO1NBMUJKLEFBQ0UsQUF5QkUsQUFLTDs7Ozs7QUE5Q3NCLEFBaUR6QixBOzsyQ0FBdUIsVUFBQSxBQUFDLE9BQUQ7U0FBQSxBQUFXO0FBQW5CLENBQUEsRUFBZixBQUFlLEFBQTBCIiwiZmlsZSI6IlNpZ251cEZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9