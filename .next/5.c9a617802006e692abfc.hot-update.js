webpackHotUpdate(5,{

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(34);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(35);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(36);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var React = _interopRequireWildcard(_react);

var _PostLockup = __webpack_require__(528);

var _PostLockup2 = _interopRequireDefault(_PostLockup);

var _Text = __webpack_require__(446);

var Text = _interopRequireWildcard(_Text);

var _strings = __webpack_require__(447);

var Strings = _interopRequireWildcard(_strings);

var _actions = __webpack_require__(445);

var Actions = _interopRequireWildcard(_actions);

var _Button = __webpack_require__(444);

var _Button2 = _interopRequireDefault(_Button);

var _Textarea = __webpack_require__(470);

var _Textarea2 = _interopRequireDefault(_Textarea);

var _SinglePostWrap = __webpack_require__(540);

var _SinglePostWrap2 = _interopRequireDefault(_SinglePostWrap);

var _sanitizeHtml = __webpack_require__(575);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jay/Desktop/code/portfolio/jay-co/Components/Posts/Post.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jay/Desktop/code/portfolio/jay-co/Components/Posts/Post.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jOWE2MTc4MDIwMDZlNjkyYWJmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9Qb3N0cy9Qb3N0LmpzP2YzNDg2NDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvc3RMb2NrdXAgZnJvbSAnLi9Qb3N0TG9ja3VwJztcbmltcG9ydCAqIGFzIFRleHQgZnJvbSAnLi4vVGV4dCc7XG5pbXBvcnQgKiBhcyBTdHJpbmdzIGZyb20gJy4uLy4uL2NvbW1vbi9zdHJpbmdzJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vLi4vY29tbW9uL2FjdGlvbnMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4uL1RleHRhcmVhJztcbmltcG9ydCBTaW5nbGVQb3N0V3JhcCBmcm9tICcuL1NpbmdsZVBvc3RXcmFwJztcbmltcG9ydCBzYW5pdGl6ZUh0bWwgZnJvbSAnc2FuaXRpemUtaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBpc0VkaXRpbmc6IGZhbHNlLFxuICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMucG9zdCA/IHRoaXMucHJvcHMucG9zdC5jb250ZW50IDogdW5kZWZpbmVkLFxuICAgIHRpdGxlOiB0aGlzLnByb3BzLnBvc3QgPyB0aGlzLnByb3BzLnBvc3QudGl0bGUgOiB1bmRlZmluZWQsXG4gIH07XG5cbiAgX2hhbmRsZUVkaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogdHJ1ZSB9KTtcbiAgfTtcblxuICBfaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMucG9zdC5jb250ZW50LFxuICAgICAgdGl0bGU6IHRoaXMucHJvcHMucG9zdC50aXRsZSxcbiAgICB9KTtcbiAgfTtcblxuICBfaGFuZGxlVGl0bGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgX2hhbmRsZUNvbnRlbnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250ZW50OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBfaGFuZGxlU2F2ZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgQWN0aW9ucy5yZXF1ZXN0VXBkYXRlUG9zdCh7XG4gICAgICAgIHBvc3RJZDogdGhpcy5wcm9wcy5wb3N0LmlkLFxuICAgICAgICBjb250ZW50OiB0aGlzLnN0YXRlLmNvbnRlbnQsXG4gICAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLnRpdGxlLFxuICAgICAgfSksXG4gICAgKTtcbiAgfTtcblxuICBfaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goQWN0aW9ucy5yZXF1ZXN0RGVsZXRlUG9zdCh0aGlzLnByb3BzLnBvc3QuaWQpKTtcbiAgfTtcblxuICByZW5kZXJMb2dnZWRPdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwb3N0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNhbml0aXplZFBvc3QgPSBzYW5pdGl6ZUh0bWwocG9zdC5jb250ZW50LCB7XG4gICAgICBhbGxvd2VkVGFnczogc2FuaXRpemVIdG1sLmRlZmF1bHRzLmFsbG93ZWRUYWdzLmNvbmNhdChbJ2gyJ10pLFxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8U2luZ2xlUG9zdFdyYXA+XG4gICAgICAgIDxUZXh0LkhlYWRpbmcxPntwb3N0LnRpdGxlID8gcG9zdC50aXRsZSA6ICd1bnRpdGxlZCd9PC9UZXh0LkhlYWRpbmcxPlxuICAgICAgICA8UG9zdExvY2t1cFxuICAgICAgICAgIGNvbW1lbnRMZW5ndGg9e3Bvc3QuY29tbWVudHMubGVuZ3RofVxuICAgICAgICAgIGNyZWF0ZWRBdD17cG9zdC5jcmVhdGVkQXR9XG4gICAgICAgICAgdXNlcm5hbWU9e3Bvc3QudXNlci51c2VybmFtZX1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQuUG9zdEJvZHkgc3R5bGU9e3sgbWFyZ2luVG9wOiAyNCB9fT5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2FuaXRpemVkUG9zdCB9fSAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L1RleHQuUG9zdEJvZHk+XG4gICAgICA8L1NpbmdsZVBvc3RXcmFwPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyTG9nZ2VkSW4gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwb3N0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNFZGl0aW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNhbml0aXplZFBvc3QgPSBzYW5pdGl6ZUh0bWwocG9zdC5jb250ZW50LCB7XG4gICAgICBhbGxvd2VkVGFnczogc2FuaXRpemVIdG1sLmRlZmF1bHRzLmFsbG93ZWRUYWdzLmNvbmNhdChbJ2gyJ10pLFxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8U2luZ2xlUG9zdFdyYXA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgeyFpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUVkaXR9PkVkaXQgUG9zdDwvQnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICApfVxuICAgICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUNhbmNlbH0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICl9XG4gICAgICAgICAge2lzRWRpdGluZyA/IChcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5faGFuZGxlU2F2ZX0+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICApfVxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5faGFuZGxlRGVsZXRlfT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3B0aW9uYWwgdGl0bGVcIlxuICAgICAgICAgICAgZm9udFdlaWdodD17NjAwfVxuICAgICAgICAgICAgbGluZUhlaWdodD1cIjIuOHJlbVwiXG4gICAgICAgICAgICBmb250U2l6ZT1cIjIuNjE4cmVtXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVUaXRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0LkhlYWRpbmcxPnt0aGlzLnN0YXRlLnRpdGxlfTwvVGV4dC5IZWFkaW5nMT5cbiAgICAgICAgKX1cbiAgICAgICAgPFBvc3RMb2NrdXBcbiAgICAgICAgICBjb21tZW50TGVuZ3RoPXtwb3N0LmNvbW1lbnRzLmxlbmd0aH1cbiAgICAgICAgICBjcmVhdGVkQXQ9e3Bvc3QuY3JlYXRlZEF0fVxuICAgICAgICAgIHVzZXJuYW1lPXtwb3N0LnVzZXIudXNlcm5hbWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydCB3cml0aW5nLi4uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVDb250ZW50Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICl9XG4gICAgICAgIHshaXNFZGl0aW5nID8gKFxuICAgICAgICAgIDxUZXh0LlBvc3RCb2R5IHN0eWxlPXt7IG1hcmdpbjogJzE2cHggMCA4OHB4IDAnIH19PlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNhbml0aXplZFBvc3QgfX0gLz5cbiAgICAgICAgICA8L1RleHQuUG9zdEJvZHk+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICl9XG4gICAgICA8L1NpbmdsZVBvc3RXcmFwPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzdWJ2aWV3ID0gIXRoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkXG4gICAgICA/IHRoaXMucmVuZGVyTG9nZ2VkT3V0KClcbiAgICAgIDogdGhpcy5yZW5kZXJMb2dnZWRJbigpO1xuXG4gICAgcmV0dXJuIHN1YnZpZXc7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvUG9zdHMvUG9zdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFGQTtBQU1BO0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFJQTtBQUpBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBTkE7QUFBQTtBQUFBO0FBQ0E7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU9BOzs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFJQTs7Ozs7QUFwSUE7QUFDQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==