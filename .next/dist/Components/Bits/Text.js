'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Anchor = exports.PageTitle = exports.Paragraph = exports.Heading4 = exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.PostBody = exports.PortfolioBody = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Bits/Text.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin: 20px 20px 20px 0;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  color: rgba(0, 0, 20, 1);\n'], ['\n  margin: 20px 20px 20px 0;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  color: rgba(0, 0, 20, 1);\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  color: rgba(0, 0, 20, 1);\n'], ['\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  color: rgba(0, 0, 20, 1);\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 20px;\n  font-size: 40px;\n  line-height: 48px;\n  font-weight: 600;\n  color: rgba(0, 0, 20, 1);\n'], ['\n  margin-top: 20px;\n  font-size: 40px;\n  line-height: 48px;\n  font-weight: 600;\n  color: rgba(0, 0, 20, 1);\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: 400;\n  color: rgba(0, 0, 20, 1);\n  line-height: 20px;\n  font-size: 12px;\n'], ['\n  font-weight: 400;\n  color: rgba(0, 0, 20, 1);\n  line-height: 20px;\n  font-size: 12px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  color: rgba(0, 0, 20, 1);\n  font-weight: 600;\n  line-height: 20px;\n  font-size: 12px;\n'], ['\n  color: rgba(0, 0, 20, 1);\n  font-weight: 600;\n  line-height: 20px;\n  font-size: 12px;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n    text-decoration: none;\n    font-size: 24px;\n    font-weight: 400;\n    color: #0000ff;\n    &:visited {\n      color: #00008b;\n    }\n    &:hover {\n      color: #0000ff;\n    }\n  '], ['\n    text-decoration: none;\n    font-size: 24px;\n    font-weight: 400;\n    color: #0000ff;\n    &:visited {\n      color: #00008b;\n    }\n    &:hover {\n      color: #0000ff;\n    }\n  ']);

var PortfolioBody = exports.PortfolioBody = (0, _reactEmotion2.default)('div')(_templateObject);

var PostBody = exports.PostBody = (0, _reactEmotion2.default)('div')(_templateObject2);

var Heading1 = exports.Heading1 = (0, _reactEmotion2.default)('h1')(_templateObject3);

var Heading2 = exports.Heading2 = (0, _reactEmotion2.default)('h1')(_templateObject4);

var Heading3 = exports.Heading3 = (0, _reactEmotion2.default)('h1')(_templateObject4);

var Heading4 = exports.Heading4 = (0, _reactEmotion2.default)('h1')(_templateObject4);

var Paragraph = exports.Paragraph = (0, _reactEmotion2.default)('p')(_templateObject4);

var PageTitle = exports.PageTitle = (0, _reactEmotion2.default)('h1')(_templateObject5);

var Anchor = exports.Anchor = function Anchor(props) {
  var basicStyles = (0, _reactEmotion.css)(_templateObject6);

  return _react2.default.createElement(_Link2.default, (0, _extends3.default)({}, props, { className: basicStyles, __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvQml0cy9UZXh0LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsIkxpbmsiLCJQb3J0Zm9saW9Cb2R5IiwiUG9zdEJvZHkiLCJIZWFkaW5nMSIsIkhlYWRpbmcyIiwiSGVhZGluZzMiLCJIZWFkaW5nNCIsIlBhcmFncmFwaCIsIlBhZ2VUaXRsZSIsIkFuY2hvciIsInByb3BzIiwiYmFzaWNTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNLHdDQUFnQiw0QkFBaEIsQUFBZ0IsQUFBTyxPQUE3QixBQVFQOztBQUFPLElBQU0sOEJBQVcsNEJBQVgsQUFBVyxBQUFPLE9BQXhCLEFBT1A7O0FBQU8sSUFBTSw4QkFBVyw0QkFBWCxBQUFXLEFBQU8sTUFBeEIsQUFRUDs7QUFBTyxJQUFNLDhCQUFXLDRCQUFYLEFBQVcsQUFBTyxNQUF4QixBQU9QOztBQUFPLElBQU0sOEJBQVcsNEJBQVgsQUFBVyxBQUFPLE1BQXhCLEFBT1A7O0FBQU8sSUFBTSw4QkFBVyw0QkFBWCxBQUFXLEFBQU8sTUFBeEIsQUFPUDs7QUFBTyxJQUFNLGdDQUFZLDRCQUFaLEFBQVksQUFBTyxLQUF6QixBQU9QOztBQUFPLElBQU0sZ0NBQVksNEJBQVosQUFBWSxBQUFPLE1BQXpCLEFBT1A7O0FBQU8sSUFBTSwwQkFBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQVUsQUFDL0I7TUFBTSxjQUFBLEFBQWMsdUJBQXBCLEFBYUE7O3lCQUFPLEFBQUMseURBQUQsQUFBVSxTQUFPLFdBQWpCLEFBQTRCO2dCQUE1QjtrQkFBUCxBQUFPLEFBQ1I7QUFEUTtJQUFBO0FBZEYiLCJmaWxlIjoiVGV4dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=