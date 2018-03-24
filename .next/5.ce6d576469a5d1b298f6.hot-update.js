webpackHotUpdate(5,{

/***/ 524:
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

var _Text = __webpack_require__(444);

var Text = _interopRequireWildcard(_Text);

var _strings = __webpack_require__(525);

var Strings = _interopRequireWildcard(_strings);

var _actions = __webpack_require__(448);

var Actions = _interopRequireWildcard(_actions);

var _Button = __webpack_require__(464);

var _Button2 = _interopRequireDefault(_Button);

var _Textarea = __webpack_require__(465);

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Link = __webpack_require__(447);

var _Link2 = _interopRequireDefault(_Link);

var _PortfolioGrid = __webpack_require__(467);

var PortfolioGrid = _interopRequireWildcard(_PortfolioGrid);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Portfolios/Portfolio.js';


var Portfolio = function (_React$Component) {
  (0, _inherits3.default)(Portfolio, _React$Component);

  function Portfolio() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Portfolio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Portfolio.__proto__ || (0, _getPrototypeOf2.default)(Portfolio)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isEditing: false,
      description: _this.props.portfolio ? _this.props.portfolio.description : undefined,
      title: _this.props.portfolio ? _this.props.portfolio.title : undefined
    }, _this._handleEdit = function () {
      _this.setState({ isEditing: true });
    }, _this._handleCancel = function () {
      _this.setState({
        isEditing: false,
        description: _this.props.portfolio.description,
        title: _this.props.portfolio.title
      });
    }, _this._handleTitleChange = function (e) {
      _this.setState({ title: e.target.value });
    }, _this._handleDescriptionChange = function (e) {
      _this.setState({ description: e.target.value });
    }, _this._handleSave = function () {
      _this.props.dispatch(Actions.requestUpdatePortfolio({
        portfolioId: _this.props.portfolio.id,
        description: _this.state.description,
        title: _this.state.title
      }));
    }, _this._handleDelete = function () {
      _this.props.dispatch(Actions.requestDeletePortfolio(_this.props.portfolio.id));
    }, _this.renderLoggedOut = function () {
      var portfolio = _this.props.portfolio;

      return React.createElement(PortfolioGrid.single, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, React.createElement(Text.Heading2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, portfolio.title ? portfolio.title : null), React.createElement(Text.PostBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, portfolio.description), React.createElement(_Link2.default, { href: 'https://www.google.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, React.createElement('img', { src: portfolio.img, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })));
    }, _this.renderLoggedIn = function () {
      var portfolio = _this.props.portfolio;
      var isEditing = _this.state.isEditing;

      return React.createElement(PortfolioGrid.single, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, !isEditing ? React.createElement(_Button2.default, { onClick: _this._handleEdit, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Edit Portfolio Item') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleCancel, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'Cancel') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Save') : undefined, React.createElement(_Button2.default, { onClick: _this._handleDelete, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
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
          lineNumber: 94
        }
      }) : React.createElement(Text.Heading1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, portfolio.title ? portfolio.title : null), isEditing ? React.createElement(_Textarea2.default, {
        value: _this.state.description,
        placeholder: 'Optional title',
        fontWeight: 600,
        lineHeight: '2.8rem',
        fontSize: '2.618rem',
        onChange: _this._handleDescriptionChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }) : React.createElement(Text.PostBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, portfolio.description ? portfolio.description : null), React.createElement(_Link2.default, { href: 'https://www.google.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, React.createElement('img', { src: 'http://via.placeholder.com/250x150', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      })));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Portfolio, [{
    key: 'render',
    value: function render() {
      var subview = !this.props.isAuthenticated ? this.renderLoggedOut() : this.renderLoggedIn();

      return subview;
    }
  }]);

  return Portfolio;
}(React.Component);

exports.default = Portfolio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9ydGZvbGlvcy9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0IiwiU3RyaW5ncyIsIkFjdGlvbnMiLCJCdXR0b24iLCJUZXh0YXJlYSIsIkxpbmsiLCJQb3J0Zm9saW9HcmlkIiwiUG9ydGZvbGlvIiwic3RhdGUiLCJpc0VkaXRpbmciLCJkZXNjcmlwdGlvbiIsInByb3BzIiwicG9ydGZvbGlvIiwidW5kZWZpbmVkIiwidGl0bGUiLCJfaGFuZGxlRWRpdCIsInNldFN0YXRlIiwiX2hhbmRsZUNhbmNlbCIsIl9oYW5kbGVUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9oYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsIl9oYW5kbGVTYXZlIiwiZGlzcGF0Y2giLCJyZXF1ZXN0VXBkYXRlUG9ydGZvbGlvIiwicG9ydGZvbGlvSWQiLCJpZCIsIl9oYW5kbGVEZWxldGUiLCJyZXF1ZXN0RGVsZXRlUG9ydGZvbGlvIiwicmVuZGVyTG9nZ2VkT3V0IiwiaW1nIiwicmVuZGVyTG9nZ2VkSW4iLCJzdWJ2aWV3IiwiaXNBdXRoZW50aWNhdGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPOztJQUFQLEFBQVksQUFBVTs7QUFDdEIsQUFBTzs7SUFBUCxBQUFZLEFBQWE7O0FBQ3pCLEFBQU87O0lBQVAsQUFBWSxBQUFhOztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOztJQUFQLEFBQVksQUFBbUI7Ozs7Ozs7OztJLEFBRVY7Ozs7Ozs7Ozs7Ozs7O2tOLEFBQ25CO2lCQUFRLEFBQ0ssQUFDWDttQkFBYSxNQUFBLEFBQUssTUFBTCxBQUFXLFlBQ3BCLE1BQUEsQUFBSyxNQUFMLEFBQVcsVUFERixBQUNZLGNBSG5CLEFBSUYsQUFDSjthQUFP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Q1g7a0JBTEYsQUFLVyxBQUNUO2tCQUFVLE1BTlosQUFNaUI7O29CQU5qQjtzQkFERCxBQUNDO0FBQUE7QUFDRSxPQURGLFVBU0MsY0FBRCxLQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsWUFDRyxBQUFVLFFBQVEsVUFBbEIsQUFBNEIsUUE5Qm5DLEFBNkJJLEFBQ3VDLEFBR3hDLHlCQUNDLEFBQUM7ZUFDUSxNQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtxQkFGRixBQUVjLEFBQ1o7b0JBSEYsQUFHYyxBQUNaO29CQUpGLEFBSWEsQUFDWDtrQkFMRixBQUtXLEFBQ1Q7a0JBQVUsTUFOWixBQU1pQjs7b0JBTmpCO3NCQURELEFBQ0M7QUFBQTtBQUNFLE9BREYsVUFTQyxjQUFELEtBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxZQUNHLEFBQVUsY0FBYyxVQUF4QixBQUFrQyxjQTVDekMsQUEyQ0ksQUFDbUQsQUFHckQsYUFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7c0NBQ08sS0FBTCxBQUFTO29CQUFUO3NCQWpETixBQUNFLEFBK0NFLEFBQ0UsQUFJUDtBQUpPOztBOzs7Ozs2QkFNQyxBQUNQO1VBQUksVUFBVSxDQUFDLEtBQUEsQUFBSyxNQUFOLEFBQVksa0JBQ3RCLEtBRFUsQUFDVixBQUFLLG9CQUNMLEtBRkosQUFFSSxBQUFLLEFBRVQ7O2FBQUEsQUFBTyxBQUNSOzs7OztFQTVIb0MsTUFBTSxBOztrQkFBeEIsQSIsImZpbGUiOiJQb3J0Zm9saW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jay/Desktop/code/portfolio/jay-co/Components/Portfolios/Portfolio.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jay/Desktop/code/portfolio/jay-co/Components/Portfolios/Portfolio.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZTZkNTc2NDY5YTVkMWIyOThmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9Qb3J0Zm9saW9zL1BvcnRmb2xpby5qcz9lOWUwN2I2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFRleHQgZnJvbSAnLi4vQml0cy9UZXh0JztcbmltcG9ydCAqIGFzIFN0cmluZ3MgZnJvbSAnLi4vLi4vY29tbW9uL3N0cmluZ3MnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi8uLi9jb21tb24vYWN0aW9ucyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0JpdHMvQnV0dG9uJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuLi9CaXRzL1RleHRhcmVhJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0JpdHMvTGluayc7XG5pbXBvcnQgKiBhcyBQb3J0Zm9saW9HcmlkIGZyb20gJy4uL0dyaWRzL1BvcnRmb2xpb0dyaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3J0Zm9saW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBpc0VkaXRpbmc6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLnBvcnRmb2xpb1xuICAgICAgPyB0aGlzLnByb3BzLnBvcnRmb2xpby5kZXNjcmlwdGlvblxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgdGl0bGU6IHRoaXMucHJvcHMucG9ydGZvbGlvID8gdGhpcy5wcm9wcy5wb3J0Zm9saW8udGl0bGUgOiB1bmRlZmluZWQsXG4gIH07XG5cbiAgX2hhbmRsZUVkaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogdHJ1ZSB9KTtcbiAgfTtcblxuICBfaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLnBvcnRmb2xpby5kZXNjcmlwdGlvbixcbiAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnBvcnRmb2xpby50aXRsZSxcbiAgICB9KTtcbiAgfTtcblxuICBfaGFuZGxlVGl0bGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgX2hhbmRsZURlc2NyaXB0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIF9oYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICBBY3Rpb25zLnJlcXVlc3RVcGRhdGVQb3J0Zm9saW8oe1xuICAgICAgICBwb3J0Zm9saW9JZDogdGhpcy5wcm9wcy5wb3J0Zm9saW8uaWQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uLFxuICAgICAgICB0aXRsZTogdGhpcy5zdGF0ZS50aXRsZSxcbiAgICAgIH0pLFxuICAgICk7XG4gIH07XG5cbiAgX2hhbmRsZURlbGV0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgQWN0aW9ucy5yZXF1ZXN0RGVsZXRlUG9ydGZvbGlvKHRoaXMucHJvcHMucG9ydGZvbGlvLmlkKSxcbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckxvZ2dlZE91dCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBvcnRmb2xpbyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRmb2xpb0dyaWQuc2luZ2xlPlxuICAgICAgICA8VGV4dC5IZWFkaW5nMj5cbiAgICAgICAgICB7cG9ydGZvbGlvLnRpdGxlID8gcG9ydGZvbGlvLnRpdGxlIDogbnVsbH1cbiAgICAgICAgPC9UZXh0LkhlYWRpbmcyPlxuICAgICAgICA8VGV4dC5Qb3N0Qm9keT57cG9ydGZvbGlvLmRlc2NyaXB0aW9ufTwvVGV4dC5Qb3N0Qm9keT5cbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb21cIj5cbiAgICAgICAgICA8aW1nIHNyYz17cG9ydGZvbGlvLmltZ30gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Qb3J0Zm9saW9HcmlkLnNpbmdsZT5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckxvZ2dlZEluID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcG9ydGZvbGlvIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNFZGl0aW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGZvbGlvR3JpZC5zaW5nbGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgeyFpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUVkaXR9PkVkaXQgUG9ydGZvbGlvIEl0ZW08L0J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7aXNFZGl0aW5nID8gKFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9oYW5kbGVDYW5jZWx9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICApfVxuICAgICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZVNhdmV9PlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZURlbGV0ZX0+RGVsZXRlPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7aXNFZGl0aW5nID8gKFxuICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wdGlvbmFsIHRpdGxlXCJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezYwMH1cbiAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCIyLjhyZW1cIlxuICAgICAgICAgICAgZm9udFNpemU9XCIyLjYxOHJlbVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlVGl0bGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dC5IZWFkaW5nMT5cbiAgICAgICAgICAgIHtwb3J0Zm9saW8udGl0bGUgPyBwb3J0Zm9saW8udGl0bGUgOiBudWxsfVxuICAgICAgICAgIDwvVGV4dC5IZWFkaW5nMT5cbiAgICAgICAgKX1cbiAgICAgICAge2lzRWRpdGluZyA/IChcbiAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcHRpb25hbCB0aXRsZVwiXG4gICAgICAgICAgICBmb250V2VpZ2h0PXs2MDB9XG4gICAgICAgICAgICBsaW5lSGVpZ2h0PVwiMi44cmVtXCJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMi42MThyZW1cIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZURlc2NyaXB0aW9uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHQuUG9zdEJvZHk+XG4gICAgICAgICAgICB7cG9ydGZvbGlvLmRlc2NyaXB0aW9uID8gcG9ydGZvbGlvLmRlc2NyaXB0aW9uIDogbnVsbH1cbiAgICAgICAgICA8L1RleHQuUG9zdEJvZHk+XG4gICAgICAgICl9XG4gICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MTUwXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Qb3J0Zm9saW9HcmlkLnNpbmdsZT5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3VidmlldyA9ICF0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZFxuICAgICAgPyB0aGlzLnJlbmRlckxvZ2dlZE91dCgpXG4gICAgICA6IHRoaXMucmVuZGVyTG9nZ2VkSW4oKTtcblxuICAgIHJldHVybiBzdWJ2aWV3O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL1BvcnRmb2xpb3MvUG9ydGZvbGlvLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFBQTtBQUdBO0FBSkE7QUFRQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQU5BO0FBQUE7QUFBQTtBQUNBOztBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQU5BO0FBQUE7QUFBQTtBQUNBOztBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7Ozs7Ozs7QUFPQTtBQUFBO0FBQ0E7QUFJQTs7Ozs7QUE1SEE7QUFDQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==