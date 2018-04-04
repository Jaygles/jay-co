'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactEmotion = require('react-emotion');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/higher-order/withEmotion.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n  }\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  html, body {\n    height: 100vh;\n    background-color: #83D18F;\n    color: rgb(56, 56, 60);\n    font-family: \'IBM Plex Serif\', serif;\n    font-size: 12px;\n  }\n'], ['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n  }\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  html, body {\n    height: 100vh;\n    background-color: #83D18F;\n    color: rgb(56, 56, 60);\n    font-family: \'IBM Plex Serif\', serif;\n    font-size: 12px;\n  }\n']);

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
              lineNumber: 50
            }
          }));
        }
      }]);

      return withEmotion;
    }(React.Component);

    return withEmotion;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hlci1vcmRlci93aXRoRW1vdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImh5ZHJhdGUiLCJpbmplY3RHbG9iYWwiLCJpbmplY3RHbG9iYWxTdHlsZXMiLCJDb21wb3NlZENvbXBvbmVudCIsIndpdGhFbW90aW9uIiwid2luZG93IiwiX19ORVhUX0RBVEFfXyIsImlkcyIsInByb3BzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQVMsQUFBUzs7Ozs7Ozs7OztBQUVsQixJQUFNLHFCQUFxQixTQUFyQixBQUFxQixxQkFBQTtTQUFBLEFBQU0sZ0NBQU47QUFBM0IsQUFpQ0E7O2tCQUFlLFlBQUE7U0FBTSxVQUFBLEFBQUMsbUJBQXNCO1FBQUEsQUFDcEMsMENBRG9DOzJDQUV4Qzs7NkJBQWM7NENBQUE7OzhJQUdaOztZQUFJLE9BQUEsQUFBTyxXQUFYLEFBQXNCLGFBQWEsQUFDakM7cUNBQVEsT0FBQSxBQUFPLGNBQWYsQUFBNkIsQUFDOUI7QUFMVztlQU1iO0FBUnVDOzs7YUFBQTtpQ0FVL0IsQUFDUDtBQUVBOztxQ0FBTyxBQUFDLDhDQUFzQixLQUF2QixBQUE0Qjs7d0JBQTVCOzBCQUFQLEFBQU8sQUFDUjtBQURRO0FBQUEsWUFBQTtBQWIrQjtBQUFBOzthQUFBO01BQ2hCLE1BRGdCLEFBQ1YsQUFnQmhDOztXQUFBLEFBQU8sQUFDUjtBQWxCYztBQUFmIiwiZmlsZSI6IndpdGhFbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==