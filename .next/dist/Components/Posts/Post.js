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

var _PostLockup = require('./PostLockup');

var _PostLockup2 = _interopRequireDefault(_PostLockup);

var _Text = require('../Text');

var Text = _interopRequireWildcard(_Text);

var _strings = require('../../common/strings');

var Strings = _interopRequireWildcard(_strings);

var _actions = require('../../common/actions');

var Actions = _interopRequireWildcard(_actions);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Textarea = require('../Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Posts/Post.js';


var Post = function (_React$Component) {
  (0, _inherits3.default)(Post, _React$Component);

  function Post() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Post);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isEditing: false,
      content: _this.props.post ? _this.props.post.content : undefined,
      title: _this.props.post ? _this.props.post.title : undefined
    }, _this._handleEdit = function () {
      _this.setState({ isEditing: true });
    }, _this._handleCancel = function () {
      _this.setState({
        isEditing: false,
        content: _this.props.post.content,
        title: _this.props.post.title
      });
    }, _this._handleTitleChange = function (e) {
      _this.setState({ title: e.target.value });
    }, _this._handleContentChange = function (e) {
      _this.setState({ content: e.target.value });
    }, _this._handleSave = function () {
      _this.props.dispatch(Actions.requestUpdatePost({
        postId: _this.props.post.id,
        content: _this.state.content,
        title: _this.state.title
      }));
    }, _this._handleDelete = function () {
      _this.props.dispatch(Actions.requestDeletePost(_this.props.post.id));
    }, _this.renderLoggedOut = function () {
      var post = _this.props.post;

      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, React.createElement(Text.Heading1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, post.title ? post.title : 'untitled'), React.createElement(_PostLockup2.default, {
        commentLength: post.comments.length,
        createdAt: post.createdAt,
        username: post.user.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), React.createElement(Text.PostBody, { style: { marginTop: 24 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, post.content, React.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), React.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })));
    }, _this.renderLoggedIn = function () {
      var post = _this.props.post;
      var isEditing = _this.state.isEditing;

      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, !isEditing ? React.createElement(_Button2.default, { onClick: _this._handleEdit, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Edit Post') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleCancel, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'Cancel') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Save') : undefined, React.createElement(_Button2.default, { onClick: _this._handleDelete, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Delete')), isEditing ? React.createElement(_Textarea2.default, {
        value: _this.state.title,
        placeholder: 'Optional title',
        fontWeight: 600,
        lineHeight: '2.8rem',
        fontSize: '2.618rem',
        onChange: _this._handleTitleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }) : React.createElement(Text.Heading1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _this.state.title), React.createElement(_PostLockup2.default, {
        commentLength: post.comments.length,
        createdAt: post.createdAt,
        username: post.user.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), isEditing ? React.createElement(_Textarea2.default, {
        value: _this.state.content,
        placeholder: 'Start writing...',
        onChange: _this._handleContentChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }) : undefined, !isEditing ? React.createElement(Text.PostBody, { style: { margin: '16px 0 88px 0' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _this.state.content) : undefined);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Post, [{
    key: 'render',
    value: function render() {
      var subview = !this.props.isAuthenticated ? this.renderLoggedOut() : this.renderLoggedIn();

      return subview;
    }
  }]);

  return Post;
}(React.Component);

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9zdHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvc3RMb2NrdXAiLCJUZXh0IiwiU3RyaW5ncyIsIkFjdGlvbnMiLCJCdXR0b24iLCJUZXh0YXJlYSIsIlBvc3QiLCJzdGF0ZSIsImlzRWRpdGluZyIsImNvbnRlbnQiLCJwcm9wcyIsInBvc3QiLCJ1bmRlZmluZWQiLCJ0aXRsZSIsIl9oYW5kbGVFZGl0Iiwic2V0U3RhdGUiLCJfaGFuZGxlQ2FuY2VsIiwiX2hhbmRsZVRpdGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiX2hhbmRsZUNvbnRlbnRDaGFuZ2UiLCJfaGFuZGxlU2F2ZSIsImRpc3BhdGNoIiwicmVxdWVzdFVwZGF0ZVBvc3QiLCJwb3N0SWQiLCJpZCIsIl9oYW5kbGVEZWxldGUiLCJyZXF1ZXN0RGVsZXRlUG9zdCIsInJlbmRlckxvZ2dlZE91dCIsImNvbW1lbnRzIiwibGVuZ3RoIiwiY3JlYXRlZEF0IiwidXNlciIsInVzZXJuYW1lIiwibWFyZ2luVG9wIiwicmVuZGVyTG9nZ2VkSW4iLCJtYXJnaW4iLCJzdWJ2aWV3IiwiaXNBdXRoZW50aWNhdGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU87O0lBQVAsQUFBWSxBQUFVOztBQUN0QixBQUFPOztJQUFQLEFBQVksQUFBYTs7QUFDekIsQUFBTzs7SUFBUCxBQUFZLEFBQWE7O0FBQ3pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7Ozs7Ozs7O0ksQUFFQTs7Ozs7Ozs7Ozs7Ozs7d00sQUFDbkI7aUJBQVEsQUFDSyxBQUNYO2VBQVMsTUFBQSxBQUFLLE1BQUwsQUFBVyxPQUFPLE1BQUEsQUFBSyxNQUFMLEFBQVcsS0FBN0IsQUFBa0MsVUFGckMsQUFFK0MsQUFDckQ7YUFBTyxNQUFBLEFBQUssTUFB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QUM7ZUFDUSxNQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtxQkFGRixBQUVjLEFBQ1o7b0JBSEYsQUFHYyxBQUNaO29CQUpGLEFBSWEsQUFDWDtrQkFMRixBQUtXLEFBQ1Q7a0JBQVUsTUFOWixBQU1pQjs7b0JBTmpCO3NCQURELEFBQ0M7QUFBQTtBQUNFLE9BREYsVUFTQyxjQUFELEtBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFBZ0I7QUFBaEI7QUFBQSxPQUFBLFFBQWdCLEFBQUssTUE3QnpCLEFBNkJJLEFBQTJCLEFBRTdCLGNBQUEsQUFBQzt1QkFDZ0IsS0FBQSxBQUFLLFNBRHRCLEFBQytCLEFBQzdCO21CQUFXLEtBRmIsQUFFa0IsQUFDaEI7a0JBQVUsS0FBQSxBQUFLLEtBSGpCLEFBR3NCOztvQkFIdEI7c0JBL0JGLEFBK0JFLEFBS0M7QUFMRDtBQUNFLDRCQUtBLEFBQUM7ZUFDUSxNQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtxQkFGRixBQUVjLEFBQ1o7a0JBQVUsTUFIWixBQUdpQjs7b0JBSGpCO3NCQURELEFBQ0M7QUFBQTtBQUNFLE9BREYsSUFyQ0osQUEyQ0ksQUFFRCxZQUFBLEFBQUMsa0JBQ0MsY0FBRCxLQUFBLEFBQU0sWUFBUyxPQUFPLEVBQUUsUUFBeEIsQUFBc0IsQUFBVTtvQkFBaEM7c0JBQUEsQUFDRztBQURIO09BQUEsUUFDRyxBQUFLLE1BRlQsQUFDQyxBQUNjLFdBaERwQixBQUNFLEFBa0RJLEFBSVA7QTs7Ozs7NkJBRVEsQUFDUDtVQUFJLFVBQVUsQ0FBQyxLQUFBLEFBQUssTUFBTixBQUFZLGtCQUN0QixLQURVLEFBQ1YsQUFBSyxvQkFDTCxLQUZKLEFBRUksQUFBSyxBQUVUOzthQUFBLEFBQU8sQUFDUjs7Ozs7RUE5SCtCLE1BQU0sQTs7a0JBQW5CLEEiLCJmaWxlIjoiUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=