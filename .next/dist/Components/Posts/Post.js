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

var _SinglePostWrap = require('./SinglePostWrap');

var _SinglePostWrap2 = _interopRequireDefault(_SinglePostWrap);

var _sanitizeHtml = require('sanitize-html');

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

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

      var sanitizedPost = (0, _sanitizeHtml2.default)(post.content, {
        allowedTags: ['h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'img'],
        allowedAttributes: {
          a: ['href', 'name', 'target'],
          img: ['src']
        },
        selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
        allowedSchemes: ['http', 'https', 'ftp', 'mailto'],
        allowedSchemesByTag: {}
      });
      return React.createElement(_SinglePostWrap2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, React.createElement(Text.Heading1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, post.title ? post.title : 'untitled'), React.createElement(_PostLockup2.default, {
        commentLength: post.comments.length,
        createdAt: post.createdAt,
        username: post.user.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), React.createElement(Text.PostBody, { style: { marginTop: 24 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, React.createElement('div', { dangerouslySetInnerHTML: { __html: sanitizedPost }, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), React.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), React.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })));
    }, _this.renderLoggedIn = function () {
      var post = _this.props.post;
      var isEditing = _this.state.isEditing;

      var sanitizedPost = (0, _sanitizeHtml2.default)(post.content, {
        allowedTags: ['h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'img'],
        allowedAttributes: {
          a: ['href', 'name', 'target'],
          img: ['src']
        },
        selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
        allowedSchemes: ['http', 'https', 'ftp', 'mailto'],
        allowedSchemesByTag: {}
      });
      return React.createElement(_SinglePostWrap2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, !isEditing ? React.createElement(_Button2.default, { onClick: _this._handleEdit, __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, 'Edit Post') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleCancel, __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, 'Cancel') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, 'Save') : undefined, React.createElement(_Button2.default, { onClick: _this._handleDelete, __source: {
          fileName: _jsxFileName,
          lineNumber: 194
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
          lineNumber: 197
        }
      }) : React.createElement(Text.Heading1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, _this.state.title), React.createElement(_PostLockup2.default, {
        commentLength: post.comments.length,
        createdAt: post.createdAt,
        username: post.user.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), isEditing ? React.createElement(_Textarea2.default, {
        value: _this.state.content,
        placeholder: 'Start writing...',
        onChange: _this._handleContentChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }) : undefined, !isEditing ? React.createElement(Text.PostBody, { style: { margin: '16px 0 88px 0' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, React.createElement('div', { dangerouslySetInnerHTML: { __html: sanitizedPost }, __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      })) : undefined);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9zdHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvc3RMb2NrdXAiLCJUZXh0IiwiU3RyaW5ncyIsIkFjdGlvbnMiLCJCdXR0b24iLCJUZXh0YXJlYSIsIlNpbmdsZVBvc3RXcmFwIiwic2FuaXRpemVIdG1sIiwiUG9zdCIsInN0YXRlIiwiaXNFZGl0aW5nIiwiY29udGVudCIsInByb3BzIiwicG9zdCIsInVuZGVmaW5lZCIsInRpdGxlIiwiX2hhbmRsZUVkaXQiLCJzZXRTdGF0ZSIsIl9oYW5kbGVDYW5jZWwiLCJfaGFuZGxlVGl0bGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJfaGFuZGxlQ29udGVudENoYW5nZSIsIl9oYW5kbGVTYXZlIiwiZGlzcGF0Y2giLCJyZXF1ZXN0VXBkYXRlUG9zdCIsInBvc3RJZCIsImlkIiwiX2hhbmRsZURlbGV0ZSIsInJlcXVlc3REZWxldGVQb3N0IiwicmVuZGVyTG9nZ2VkT3V0Iiwic2FuaXRpemVkUG9zdCIsImFsbG93ZWRUYWdzIiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJhIiwiaW1nIiwic2VsZkNsb3NpbmciLCJhbGxvd2VkU2NoZW1lcyIsImFsbG93ZWRTY2hlbWVzQnlUYWciLCJjb21tZW50cyIsImxlbmd0aCIsImNyZWF0ZWRBdCIsInVzZXIiLCJ1c2VybmFtZSIsIm1hcmdpblRvcCIsIl9faHRtbCIsInJlbmRlckxvZ2dlZEluIiwibWFyZ2luIiwic3VidmlldyIsImlzQXV0aGVudGljYXRlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPOztJQUFQLEFBQVksQUFBVTs7QUFDdEIsQUFBTzs7SUFBUCxBQUFZLEFBQWE7O0FBQ3pCLEFBQU87O0lBQVAsQUFBWSxBQUFhOztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFj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QSxBQUFnQjtBQUFoQjtBQUFBLE9BQUEsUUFBZ0IsQUFBSyxNQTdCekIsQUE2QkksQUFBMkIsQUFFN0IsY0FBQSxBQUFDO3VCQUNnQixLQUFBLEFBQUssU0FEdEIsQUFDK0IsQUFDN0I7bUJBQVcsS0FGYixBQUVrQixBQUNoQjtrQkFBVSxLQUFBLEFBQUssS0FIakIsQUFHc0I7O29CQUh0QjtzQkEvQkYsQUErQkUsQUFLQztBQUxEO0FBQ0UsNEJBS0EsQUFBQztlQUNRLE1BQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO3FCQUZGLEFBRWMsQUFDWjtrQkFBVSxNQUhaLEFBR2lCOztvQkFIakI7c0JBREQsQUFDQztBQUFBO0FBQ0UsT0FERixJQXJDSixBQTJDSSxBQUVELFlBQUEsQUFBQyxrQkFDQyxjQUFELEtBQUEsQUFBTSxZQUFTLE9BQU8sRUFBRSxRQUF4QixBQUFzQixBQUFVO29CQUFoQztzQkFBQSxBQUNFO0FBREY7T0FBQSwrQkFDTyx5QkFBeUIsRUFBRSxRQUFoQyxBQUE4QixBQUFVO29CQUF4QztzQkFGSCxBQUNDLEFBQ0U7QUFBQTtZQWhEUixBQUNFLEFBa0RJLEFBSVA7QTs7Ozs7NkJBRVEsQUFDUDtVQUFJLFVBQVUsQ0FBQyxLQUFBLEFBQUssTUFBTixBQUFZLGtCQUN0QixLQURVLEFBQ1YsQUFBSyxvQkFDTCxLQUZKLEFBRUksQUFBSyxBQUVUOzthQUFBLEFBQU8sQUFDUjs7Ozs7RUFwTytCLE1BQU0sQTs7a0JBQW5CLEEiLCJmaWxlIjoiUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=