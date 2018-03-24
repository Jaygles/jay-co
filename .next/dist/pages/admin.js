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

var _PostForm = require('../Components/Posts/PostForm');

var _PostForm2 = _interopRequireDefault(_PostForm);

var _Button = require('../Components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PostList = require('../Components/Posts/PostList');

var _PostList2 = _interopRequireDefault(_PostList);

var _actions = require('../common/actions');

var Actions = _interopRequireWildcard(_actions);

var _withData = require('../higher-order/withData');

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/pages/admin.js?entry';


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
      }, 'Publish'), React.createElement(_PostList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }));
    }, _this.renderLoggedOut = function () {
      return [React.createElement(_LoginForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
          lineNumber: 54
        }
      }, subview);
    }
  }]);

  return Index;
}(React.Component);

exports.default = (0, _withData2.default)({}, function (state) {
  return state;
})(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRG9jdW1lbnQiLCJMb2dpbkZvcm0iLCJMb2dvdXRCdXR0b24iLCJQb3N0Rm9ybSIsIkJ1dHRvbiIsIlBvc3RMaXN0IiwiQWN0aW9ucyIsIndpdGhEYXRhIiwiSW5kZXgiLCJzdGF0ZSIsInRpdGxlIiwiY29udGVudCIsIl9oYW5kbGVDaGFuZ2VUaXRsZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiX2hhbmRsZUNoYW5nZUNvbnRlbnQiLCJfaGFuZGxlU2F2ZSIsInByb3BzIiwiZGlzcGF0Y2giLCJyZXF1ZXN0U2F2ZVBvc3QiLCJyZW5kZXJMb2dnZWRJbiIsInJlbmRlckxvZ2dlZE91dCIsInN1YnZpZXciLCJpc0F1dGhlbnRpY2F0ZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPOztJQUFQLEFBQVksQUFBYTs7QUFDekIsQUFBTyxBQUFjOzs7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7OzBNQUNKLEE7YUFBUSxBQUNDLEFBQ1A7ZUFGTSxBLEFBRUc7QUFGSCxBQUNOLGFBSUYsQSxxQkFBcUIsVUFBQSxBQUFDLEdBQU0sQUFDMUI7WUFBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUEsQUFBRSxPQUF6QixBQUFjLEFBQWtCLEFBQ2pDO0EsYSxBQUVELHVCQUF1QixVQUFBLEFBQUMsR0FBTSxBQUM1QjtZQUFBLEFBQUssU0FBUyxFQUFFLFNBQVMsRUFBQSxBQUFFLE9BQTNCLEFBQWMsQUFBb0IsQUFDbkM7QSxhQUVELEEsY0FBYyxZQUFNLEFBQ2xCO1lBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxRQUFBLEFBQVEsZ0JBQWdCLE1BQTVDLEFBQW9CLEFBQTZCLEFBQ2xEO0EsYUFDRCxBLGlCQUFpQixZQUFNLEFBQ3JCO21CQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsUUFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esb0JBQUEsQUFBQzs7b0JBQUQ7c0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSxnQkFDQSxBQUFDO2VBQ1EsTUFBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7aUJBQVMsTUFBQSxBQUFLLE1BRmhCLEFBRXNCLEFBQ3BCO3VCQUFlLE1BSGpCLEFBR3NCLEFBQ3BCO3lCQUFpQixNQUpuQixBQUl3Qjs7b0JBSnhCO3NCQUhGLEFBR0UsQUFNQTtBQU5BO0FBQ0UsZ0JBS0YsQUFBQyxrQ0FBTyxTQUFTLE1BQWpCLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBVEYsQUFTRSxBQUNBLGtCQUFBLEFBQUM7O29CQUFEO3NCQVhKLEFBQ0UsQUFVRSxBQUdMO0FBSEs7QUFBQTtBLGFBS04sQSxrQkFBa0IsWUFBTSxBQUN0QjtvQkFBUSxBQUFDOztvQkFBRDtzQkFBUixBQUFPLEFBQUMsQUFDVDtBQURTO0FBQUEsT0FBQSxDQUFEO0E7Ozs7OzZCQUdBLEFBQ1A7VUFBSSxVQUFVLENBQUMsS0FBQSxBQUFLLE1BQU4sQUFBWSxrQkFDdEIsS0FEVSxBQUNWLEFBQUssb0JBQ0wsS0FGSixBQUVJLEFBQUssQUFFVDs7bUJBQU8sQUFBQzs7b0JBQUQ7c0JBQUEsQUFBVztBQUFYO0FBQUEsT0FBQSxFQUFQLEFBQU8sQUFDUjs7Ozs7RUE1Q2lCLE0sQUFBTSxBQStDMUI7OzBDQUFlLEFBQVMsSUFBSSxVQUFBLEFBQUMsT0FBRDtTQUFBLEFBQVc7QUFBeEIsQ0FBQSxFQUFmLEFBQWUsQUFBK0IiLCJmaWxlIjoiYWRtaW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9