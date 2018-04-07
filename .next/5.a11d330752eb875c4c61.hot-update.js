webpackHotUpdate(5,{

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(92);

var _extends3 = _interopRequireDefault(_extends2);

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

var _taggedTemplateLiteral2 = __webpack_require__(441);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(17);

var React = _interopRequireWildcard(_react);

var _reactEmotion = __webpack_require__(442);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/higher-order/withEmotion.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n  }\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  html, body {\n    width: 100%;\n    background-color: #001b47;\n    color: rgb(220, 220, 220);\n    font-family: \'IBM Plex Serif\', serif;\n    font-size: 12px;\n    scroll-behavior: smooth;\n  }\n  body {\n    border-top: 4px solid #83d18f;\n    border-left: 4px solid #83d18f;\n  }\n'], ['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n  }\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  html, body {\n    width: 100%;\n    background-color: #001b47;\n    color: rgb(220, 220, 220);\n    font-family: \'IBM Plex Serif\', serif;\n    font-size: 12px;\n    scroll-behavior: smooth;\n  }\n  body {\n    border-top: 4px solid #83d18f;\n    border-left: 4px solid #83d18f;\n  }\n']);

var injectGlobalStyles = function injectGlobalStyles() {
  return (0, _reactEmotion.injectGlobal)(_templateObject);
};

exports.default = function () {
  return function (ComposedComponent) {
    var withEmotion = function (_React$Component) {
      (0, _inherits3.default)(withEmotion, _React$Component);

      function withEmotion() {
        (0, _classCallCheck3.default)(this, withEmotion);

        var _this = (0, _possibleConstructorReturn3.default)(this, (withEmotion.__proto__ || (0, _getPrototypeOf2.default)(withEmotion)).call(this));

        if (typeof window !== 'undefined') {
          (0, _reactEmotion.hydrate)(window.__NEXT_DATA__.ids);
        }
        return _this;
      }

      (0, _createClass3.default)(withEmotion, [{
        key: 'render',
        value: function render() {
          injectGlobalStyles();

          return React.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          }));
        }
      }]);

      return withEmotion;
    }(React.Component);

    return withEmotion;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hlci1vcmRlci93aXRoRW1vdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImh5ZHJhdGUiLCJpbmplY3RHbG9iYWwiLCJpbmplY3RHbG9iYWxTdHlsZXMiLCJDb21wb3NlZENvbXBvbmVudCIsIndpdGhFbW90aW9uIiwid2luZG93IiwiX19ORVhUX0RBVEFfXyIsImlkcyIsInByb3BzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQVMsQUFBUzs7Ozs7Ozs7OztBQUVsQixJQUFNLHFCQUFxQixTQUFyQixBQUFxQixxQkFBQTtTQUFBLEFBQU0sZ0NBQU47QUFBM0IsQUFzQ0E7O2tCQUFlLFlBQUE7U0FBTSxVQUFBLEFBQUMsbUJBQXNCO1FBQUEsQUFDcEMsMENBRG9DOzJDQUV4Qzs7NkJBQWM7NENBQUE7OzhJQUdaOztZQUFJLE9BQUEsQUFBTyxXQUFYLEFBQXNCLGFBQWEsQUFDakM7cUNBQVEsT0FBQSxBQUFPLGNBQWYsQUFBNkIsQUFDOUI7QUFMVztlQU1iO0FBUnVDOzs7YUFBQTtpQ0FVL0IsQUFDUDtBQUVBOztxQ0FBTyxBQUFDLDhDQUFzQixLQUF2QixBQUE0Qjs7d0JBQTVCOzBCQUFQLEFBQU8sQUFDUjtBQURRO0FBQUEsWUFBQTtBQWIrQjtBQUFBOzthQUFBO01BQ2hCLE1BRGdCLEFBQ1YsQUFnQmhDOztXQUFBLEFBQU8sQUFDUjtBQWxCYztBQUFmIiwiZmlsZSI6IndpdGhFbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jay/Desktop/code/portfolio/jay-co/higher-order/withEmotion.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jay/Desktop/code/portfolio/jay-co/higher-order/withEmotion.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hMTFkMzMwNzUyZWI4NzVjNGM2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGlnaGVyLW9yZGVyL3dpdGhFbW90aW9uLmpzPzQwODFjNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaHlkcmF0ZSwgaW5qZWN0R2xvYmFsIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5cbmNvbnN0IGluamVjdEdsb2JhbFN0eWxlcyA9ICgpID0+IGluamVjdEdsb2JhbGBcbiAgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG4gIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbiAgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuICBiLCB1LCBpLCBjZW50ZXIsXG4gIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG4gIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxuICB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbiAgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG4gIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbiAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG4gIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG4gIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG4gIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgaHRtbCwgYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWI0NztcbiAgICBjb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xuICAgIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggU2VyaWYnLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIH1cbiAgYm9keSB7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM4M2QxOGY7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjODNkMThmO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoQ29tcG9zZWRDb21wb25lbnQpID0+IHtcbiAgY2xhc3Mgd2l0aEVtb3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGh5ZHJhdGUod2luZG93Ll9fTkVYVF9EQVRBX18uaWRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBpbmplY3RHbG9iYWxTdHlsZXMoKTtcblxuICAgICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdpdGhFbW90aW9uO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2hpZ2hlci1vcmRlci93aXRoRW1vdGlvbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQXNDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBSkE7QUFNQTtBQVJBO0FBQ0E7O0FBREE7QUFXQTtBQUVBO0FBQ0E7QUFEQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWJBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQWdCQTtBQWxCQTtBQUFBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=