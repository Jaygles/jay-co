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
        allowedTags: _sanitizeHtml2.default.defaults.allowedTags.concat(['h2'])
      });
      return React.createElement(_SinglePostWrap2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, React.createElement(Text.Heading1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, post.title ? post.title : 'untitled'), React.createElement(_PostLockup2.default, {
        commentLength: post.comments.length,
        createdAt: post.createdAt,
        username: post.user.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), React.createElement(Text.PostBody, { style: { marginTop: 24 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, React.createElement('div', { dangerouslySetInnerHTML: { __html: sanitizedPost }, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), React.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), React.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })));
    }, _this.renderLoggedIn = function () {
      var post = _this.props.post;
      var isEditing = _this.state.isEditing;

      var sanitizedPost = (0, _sanitizeHtml2.default)(post.content, {
        allowedTags: _sanitizeHtml2.default.defaults.allowedTags.concat(['h2'])
      });
      return React.createElement(_SinglePostWrap2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, !isEditing ? React.createElement(_Button2.default, { onClick: _this._handleEdit, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Edit Post') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleCancel, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'Cancel') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Save') : undefined, React.createElement(_Button2.default, { onClick: _this._handleDelete, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
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
          lineNumber: 101
        }
      }) : React.createElement(Text.Heading1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _this.state.title), React.createElement(_PostLockup2.default, {
        commentLength: post.comments.length,
        createdAt: post.createdAt,
        username: post.user.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), isEditing ? React.createElement(_Textarea2.default, {
        value: _this.state.content,
        placeholder: 'Start writing...',
        onChange: _this._handleContentChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }) : undefined, !isEditing ? React.createElement(Text.PostBody, { style: { margin: '16px 0 88px 0' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, React.createElement('div', { dangerouslySetInnerHTML: { __html: sanitizedPost }, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9zdHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvc3RMb2NrdXAiLCJUZXh0IiwiU3RyaW5ncyIsIkFjdGlvbnMiLCJCdXR0b24iLCJUZXh0YXJlYSIsIlNpbmdsZVBvc3RXcmFwIiwic2FuaXRpemVIdG1sIiwiUG9zdCIsInN0YXRlIiwiaXNFZGl0aW5nIiwiY29udGVudCIsInByb3BzIiwicG9zdCIsInVuZGVmaW5lZCIsInRpdGxlIiwiX2hhbmRsZUVkaXQiLCJzZXRTdGF0ZSIsIl9oYW5kbGVDYW5jZWwiLCJfaGFuZGxlVGl0bGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJfaGFuZGxlQ29udGVudENoYW5nZSIsIl9oYW5kbGVTYXZlIiwiZGlzcGF0Y2giLCJyZXF1ZXN0VXBkYXRlUG9zdCIsInBvc3RJZCIsImlkIiwiX2hhbmRsZURlbGV0ZSIsInJlcXVlc3REZWxldGVQb3N0IiwicmVuZGVyTG9nZ2VkT3V0Iiwic2FuaXRpemVkUG9zdCIsImFsbG93ZWRUYWdzIiwiZGVmYXVsdHMiLCJjb25jYXQiLCJjb21tZW50cyIsImxlbmd0aCIsImNyZWF0ZWRBdCIsInVzZXIiLCJ1c2VybmFtZSIsIm1hcmdpblRvcCIsIl9faHRtbCIsInJlbmRlckxvZ2dlZEluIiwibWFyZ2luIiwic3VidmlldyIsImlzQXV0aGVudGljYXRlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPOztJQUFQLEFBQVksQUFBVTs7QUFDdEIsQUFBTzs7SUFBUCxBQUFZLEFBQWE7O0FBQ3pCLEFBQU87O0lBQVAsQUFBWSxBQUFhOztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTzs7Ozs7Ozs7Ozs7SUFFYyxBOzs7Ozs7Ozs7Ozs7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QUMvQyxPQURvQjttQkFJcEIsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxRQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLFVBQ0csQUFBQyxrQkFDQSxBQUFDLGtDQUFPLFNBQVMsTUFBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7T0FBQSxFQURELEFBQ0MsZUFGSixBQUlJLEFBRUQsNkJBQ0MsQUFBQyxrQ0FBTyxTQUFTLE1BQWpCLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO09BQUEsRUFERCxBQUNDLFlBUEosQUFTSSxBQUVELDZCQUNDLEFBQUMsa0NBQU8sU0FBUyxNQUFqQixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtPQUFBLEVBREQsQUFDQyxVQVpKLEFBY0ksQUFFRixpQkFBQSxBQUFDLGtDQUFPLFNBQVMsTUFBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FqQkosQUFDRSxBQWdCRSxBQUVELDhCQUNDLEFBQUM7ZUFDUSxNQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtxQkFGRixBQUVjLEFBQ1o7b0JBSEYsQUFHYyxBQUNaO29CQUpGLEFBSWEsQUFDWDtrQkFMRixBQUtXLEFBQ1Q7a0JBQVUsTUFOWixBQU1pQjs7b0JBTmpCO3NCQURELEFBQ0M7QUFBQTtBQUNFLE9BREYsVUFTQyxjQUFELEtBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFBZ0I7QUFBaEI7QUFBQSxPQUFBLFFBQWdCLEFBQUssTUE3QnpCLEFBNkJJLEFBQTJCLEFBRTdCLGNBQUEsQUFBQzt1QkFDZ0IsS0FBQSxBQUFLLFNBRHRCLEFBQytCLEFBQzdCO21CQUFXLEtBRmIsQUFFa0IsQUFDaEI7a0JBQVUsS0FBQSxBQUFLLEtBSGpCLEFBR3NCOztvQkFIdEI7c0JBL0JGLEFBK0JFLEFBS0M7QUFMRDtBQUNFLDRCQUtBLEFBQUM7ZUFDUSxNQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtxQkFGRixBQUVjLEFBQ1o7a0JBQVUsTUFIWixBQUdpQjs7b0JBSGpCO3NCQURELEFBQ0M7QUFBQTtBQUNFLE9BREYsSUFyQ0osQUEyQ0ksQUFFRCxZQUFBLEFBQUMsa0JBQ0MsY0FBRCxLQUFBLEFBQU0sWUFBUyxPQUFPLEVBQUUsUUFBeEIsQUFBc0IsQUFBVTtvQkFBaEM7c0JBQUEsQUFDRTtBQURGO09BQUEsK0JBQ08seUJBQXlCLEVBQUUsUUFBaEMsQUFBOEIsQUFBVTtvQkFBeEM7c0JBRkgsQUFDQyxBQUNFO0FBQUE7WUFoRFIsQUFDRSxBQWtESSxBQUlQO0E7Ozs7OzZCQUVRLEFBQ1A7VUFBSSxVQUFVLENBQUMsS0FBQSxBQUFLLE1BQU4sQUFBWSxrQkFDdEIsS0FEVSxBQUNWLEFBQUssb0JBQ0wsS0FGSixBQUVJLEFBQUssQUFFVDs7YUFBQSxBQUFPLEFBQ1I7Ozs7O0VBcEkrQixNQUFNLEE7O2tCQUFuQixBIiwiZmlsZSI6IlBvc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9