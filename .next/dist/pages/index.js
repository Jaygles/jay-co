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

var _PostForm = require('../Components/Posts/PostForm');

var _PostForm2 = _interopRequireDefault(_PostForm);

var _Button = require('../Components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PostList = require('../Components/Posts/PostList');

var _PostList2 = _interopRequireDefault(_PostList);

var _Header = require('../Components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Nav = require('../Components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _GridContainer = require('../Components/GridContainer');

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _actions = require('../common/actions');

var Actions = _interopRequireWildcard(_actions);

var _withData = require('../higher-order/withData');

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
          lineNumber: 34
        }
      }, React.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'logged in'), React.createElement(_LogoutButton2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), React.createElement(_PostForm2.default, {
        title: _this.state.title,
        content: _this.state.content,
        onTitleChange: _this._handleChangeTitle,
        onContentChange: _this._handleChangeContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), React.createElement(_Button2.default, { onClick: _this._handleSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Publish'), React.createElement(_PostList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }));
    }, _this.renderLoggedOut = function () {
      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, React.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), React.createElement(_GridContainer2.default, { key: 'layout', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, React.createElement(_Nav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), React.createElement(_PostList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var subview = !this.props.isAuthenticated ? this.renderLoggedOut() : this.renderLoggedIn();

      return React.createElement(_Document2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, subview);
    }
  }]);

  return Index;
}(React.Component);

exports.default = (0, _withData2.default)({}, function (state) {
  return state;
})(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRG9jdW1lbnQiLCJMb2dpbkZvcm0iLCJMb2dvdXRCdXR0b24iLCJTaWdudXBGb3JtIiwiUG9zdEZvcm0iLCJCdXR0b24iLCJQb3N0TGlzdCIsIkhlYWRlciIsIk5hdiIsIkdyaWRDb250YWluZXIiLCJBY3Rpb25zIiwid2l0aERhdGEiLCJJbmRleCIsInN0YXRlIiwidGl0bGUiLCJjb250ZW50IiwiX2hhbmRsZUNoYW5nZVRpdGxlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJfaGFuZGxlQ2hhbmdlQ29udGVudCIsIl9oYW5kbGVTYXZlIiwicHJvcHMiLCJkaXNwYXRjaCIsInJlcXVlc3RTYXZlUG9zdCIsInJlbmRlckxvZ2dlZEluIiwicmVuZGVyTG9nZ2VkT3V0Iiwic3VidmlldyIsImlzQXV0aGVudGljYXRlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU87O0lBQVAsQUFBWSxBQUFhOztBQUN6QixBQUFPLEFBQWM7Ozs7Ozs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7ME1BQ0osQTthQUFRLEFBQ0MsQUFDUDtlQUZNLEFBRUcsQTtBQUZILEFBQ04sYUFJRixBLHFCQUFxQixVQUFBLEFBQUMsR0FBTSxBQUMxQjtZQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sRUFBQSxBQUFFLE9BQXpCLEFBQWMsQUFBa0IsQUFDakM7QSxhQUVELEEsdUJBQXVCLFVBQUEsQUFBQyxHQUFNLEFBQzVCO1lBQUEsQUFBSyxTQUFTLEVBQUUsU0FBUyxFQUFBLEFBQUUsT0FBM0IsQUFBYyxBQUFvQixBQUNuQztBLGFBRUQsQSxjQUFjLFlBQU0sQUFDbEI7WUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLFFBQUEsQUFBUSxnQkFBZ0IsTUFBNUMsQUFBb0IsQUFBNkIsQUFDbEQ7QSxhQUNELEEsaUJBQWlCLFlBQU0sQUFDckI7bUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxRQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxvQkFBQSxBQUFDOztvQkFBRDtzQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLGdCQUNBLEFBQUM7ZUFDUSxNQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtpQkFBUyxNQUFBLEFBQUssTUFGaEIsQUFFc0IsQUFDcEI7dUJBQWUsTUFIakIsQUFHc0IsQUFDcEI7eUJBQWlCLE1BSm5CLEFBSXdCOztvQkFKeEI7c0JBSEYsQUFHRSxBQU1BO0FBTkE7QUFDRSxnQkFLRixBQUFDLGtDQUFPLFNBQVMsTUFBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FURixBQVNFLEFBQ0Esa0JBQUEsQUFBQzs7b0JBQUQ7c0JBWEosQUFDRSxBQVVFLEFBR0w7QUFISztBQUFBO0EsYUFLTixBLGtCQUFrQixZQUFNLEFBQ3RCO21CQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsUUFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLGdCQUNBLEFBQUMseUNBQWMsS0FBZixBQUFtQjtvQkFBbkI7c0JBQUEsQUFDRTtBQURGO2VBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxnQkFDQSxBQUFDOztvQkFBRDtzQkFMTixBQUNFLEFBRUUsQUFFRSxBQUlQO0FBSk87QUFBQTtBOzs7Ozs2QkFNQyxBQUNQO1VBQUksVUFBVSxDQUFDLEtBQUEsQUFBSyxNQUFOLEFBQVksa0JBQ3RCLEtBRFUsQUFDVixBQUFLLG9CQUNMLEtBRkosQUFFSSxBQUFLLEFBRVQ7O21CQUFPLEFBQUM7O29CQUFEO3NCQUFBLEFBQVc7QUFBWDtBQUFBLE9BQUEsRUFBUCxBQUFPLEFBQ1I7Ozs7O0VBcERpQixNQUFNLEFBdUQxQixBOzswQ0FBZSxBQUFTLElBQUksVUFBQSxBQUFDLE9BQUQ7U0FBQSxBQUFXO0FBQXhCLENBQUEsRUFBZixBQUFlLEFBQStCIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==