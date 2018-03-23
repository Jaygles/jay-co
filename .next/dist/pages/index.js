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

var _LogoutButton = require('../Components/LogoutButton');

var _LogoutButton2 = _interopRequireDefault(_LogoutButton);

var _SignupForm = require('../Components/SignupForm');

var _SignupForm2 = _interopRequireDefault(_SignupForm);

var _PostForm = require('../Components/PostForm');

var _PostForm2 = _interopRequireDefault(_PostForm);

var _Button = require('../Components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('../common/actions');

var Actions = _interopRequireWildcard(_actions);

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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      title: '',
      content: ''
    }, _this._handleChangeTitle = function (e) {
      _this.setState({ title: e.target.value });
    }, _this._handleChangeContent = function (e) {
      _this.setState({ content: e.target.value });
    }, _this._handleSave = function () {
      _this.props.dispatch(Actions.requestSavePost(_this.state));
    }, _this.renderLoggedIn = function () {
      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, React.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'logged in'), React.createElement(_LogoutButton2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), React.createElement(_PostForm2.default, {
        title: _this.state.title,
        content: _this.state.content,
        onTitleChange: _this._handleChangeTitle,
        onContentChange: _this._handleChangeContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), React.createElement(_Button2.default, { onClick: _this._handleSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Publish'));
    }, _this.renderLoggedOut = function () {
      return [React.createElement(_LoginForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), React.createElement(_SignupForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
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
          lineNumber: 53
        }
      }, subview);
    }
  }]);

  return Index;
}(React.Component);

exports.default = (0, _withData2.default)({}, function (state) {
  return state;
})(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRG9jdW1lbnQiLCJMb2dpbkZvcm0iLCJMb2dvdXRCdXR0b24iLCJTaWdudXBGb3JtIiwiUG9zdEZvcm0iLCJCdXR0b24iLCJBY3Rpb25zIiwid2l0aERhdGEiLCJJbmRleCIsInN0YXRlIiwidGl0bGUiLCJjb250ZW50IiwiX2hhbmRsZUNoYW5nZVRpdGxlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJfaGFuZGxlQ2hhbmdlQ29udGVudCIsIl9oYW5kbGVTYXZlIiwicHJvcHMiLCJkaXNwYXRjaCIsInJlcXVlc3RTYXZlUG9zdCIsInJlbmRlckxvZ2dlZEluIiwicmVuZGVyTG9nZ2VkT3V0Iiwic3VidmlldyIsImlzQXV0aGVudGljYXRlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOztJQUFQLEFBQVksQUFBYTs7QUFDekIsQUFBTyxBQUFjOzs7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7OzBNQUNKLEE7YUFBUSxBQUNDLEFBQ1A7ZUFGTSxBLEFBRUc7QUFGSCxBQUNOLGFBSUYsQSxxQkFBcUIsVUFBQSxBQUFDLEdBQU0sQUFDMUI7WUFBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUEsQUFBRSxPQUF6QixBQUFjLEFBQWtCLEFBQ2pDO0EsYSxBQUVELHVCQUF1QixVQUFBLEFBQUMsR0FBTSxBQUM1QjtZQUFBLEFBQUssU0FBUyxFQUFFLFNBQVMsRUFBQSxBQUFFLE9BQTNCLEFBQWMsQUFBb0IsQUFDbkM7QSxhQUVELEEsY0FBYyxZQUFNLEFBQ2xCO1lBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxRQUFBLEFBQVEsZ0JBQWdCLE1BQTVDLEFBQW9CLEFBQTZCLEFBQ2xEO0EsYUFDRCxBLGlCQUFpQixZQUFNLEFBQ3JCO21CQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsUUFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esb0JBQUEsQUFBQzs7b0JBQUQ7c0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSxnQkFDQSxBQUFDO2VBQ1EsTUFBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7aUJBQVMsTUFBQSxBQUFLLE1BRmhCLEFBRXNCLEFBQ3BCO3VCQUFlLE1BSGpCLEFBR3NCLEFBQ3BCO3lCQUFpQixNQUpuQixBQUl3Qjs7b0JBSnhCO3NCQUhGLEFBR0UsQUFNQTtBQU5BO0FBQ0UsZ0JBS0YsQUFBQyxrQ0FBTyxTQUFTLE1BQWpCLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBVkosQUFDRSxBQVNFLEFBR0w7QSxhQUVELEEsa0JBQWtCLFlBQU0sQUFDdEI7b0JBQVEsQUFBQzs7b0JBQUQ7c0JBQUQsQUFBQztBQUFBO0FBQUEsT0FBQSxDQUFELFFBQWdCLEFBQUM7O29CQUFEO3NCQUF2QixBQUFPLEFBQWdCLEFBQ3hCO0FBRHdCO0FBQUEsT0FBQTtBOzs7Ozs2QkFHaEIsQUFDUDtVQUFJLFVBQVUsQ0FBQyxLQUFBLEFBQUssTUFBTixBQUFZLGtCQUN0QixLQURVLEFBQ1YsQUFBSyxvQkFDTCxLQUZKLEFBRUksQUFBSyxBQUVUOzttQkFBTyxBQUFDOztvQkFBRDtzQkFBQSxBQUFXO0FBQVg7QUFBQSxPQUFBLEVBQVAsQUFBTyxBQUNSOzs7OztFQTNDaUIsTUFBTSxBQThDMUIsQTs7MENBQWUsQUFBUyxJQUFJLFVBQUEsQUFBQyxPQUFEO1NBQUEsQUFBVztBQUF4QixDQUFBLEVBQWYsQUFBZSxBQUErQiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=