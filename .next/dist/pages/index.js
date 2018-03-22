'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var React = _interopRequireWildcard(_react);

var _Document = require('../Components/Document');

var _Document2 = _interopRequireDefault(_Document);

var _LoginForm = require('../Components/LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _SignupForm = require('../Components/SignupForm');

var _SignupForm2 = _interopRequireDefault(_SignupForm);

var _withData = require('./withData');

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.renderLoggedIn = function () {
      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, React.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, 'logged in'));
    }, _this.renderLoggedOut = function () {
      return [React.createElement(_LoginForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), React.createElement(_SignupForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })];
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var subview = !this.props.isAuthenticated ? this.renderLoggedOut() : this.renderLoggedIn();

      return React.createElement(_Document2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, subview);
    }
  }]);

  return Index;
}(React.Component);

exports.default = (0, _withData2.default)({}, function (state) {
  return state;
})(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRG9jdW1lbnQiLCJMb2dpbkZvcm0iLCJTaWdudXBGb3JtIiwid2l0aERhdGEiLCJJbmRleCIsInJlbmRlckxvZ2dlZEluIiwicmVuZGVyTG9nZ2VkT3V0Iiwic3VidmlldyIsInByb3BzIiwiaXNBdXRoZW50aWNhdGVkIiwiQ29tcG9uZW50Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWM7Ozs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7ME0sQUFDSixpQkFBaUIsWUFBTSxBQUNyQjttQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLFFBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkosQUFDRSxBQUNFLEFBR0w7QSxhQUVELEEsa0JBQWtCLFlBQU0sQUFDdEI7b0JBQVEsQUFBQzs7b0JBQUQ7c0JBQUQsQUFBQztBQUFBO0FBQUEsT0FBQSxDQUFELFFBQWdCLEFBQUM7O29CQUFEO3NCQUF2QixBQUFPLEFBQWdCLEFBQ3hCO0FBRHdCO0FBQUEsT0FBQTtBOzs7Ozs2QkFHaEIsQUFDUDtVQUFJLFVBQVUsQ0FBQyxLQUFBLEFBQUssTUFBTixBQUFZLGtCQUN0QixLQURVLEFBQ1YsQUFBSyxvQkFDTCxLQUZKLEFBRUksQUFBSyxBQUVUOzttQkFBTyxBQUFDOztvQkFBRDtzQkFBQSxBQUFXO0FBQVg7QUFBQSxPQUFBLEVBQVAsQUFBTyxBQUNSOzs7OztFQW5CaUIsTSxBQUFNLEFBc0IxQjs7MENBQWUsQUFBUyxJQUFJLFVBQUEsQUFBQyxPQUFEO1NBQUEsQUFBVztBQUF4QixDQUFBLEVBQWYsQUFBZSxBQUErQiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=