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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _Text = require('../Bits/Text');

var Text = _interopRequireWildcard(_Text);

var _HeaderBorder = require('../Bits/HeaderBorder');

var _HeaderBorder2 = _interopRequireDefault(_HeaderBorder);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Header/Header.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 100px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n'], ['\n  height: 100px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  min-width: 130px;\n  margin-left: 20px;\n'], ['\n  min-width: 130px;\n  margin-left: 20px;\n']);

var Top = (0, _reactEmotion2.default)('header')(_templateObject);

var title = (0, _reactEmotion.css)(_templateObject2);

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Top, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(Text.Heading1, { className: title, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Jay-Co')), _react2.default.createElement(_HeaderBorder2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(Header);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdHlsZWQiLCJjc3MiLCJUZXh0IiwiSGVhZGVyQm9yZGVyIiwiVG9wIiwidGl0bGUiLCJIZWFkZXIiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87O0lBQVAsQUFBWSxBQUFVOztBQUN0QixBQUFPLEFBQWtCOzs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sTUFBTSw0QkFBTixBQUFNLEFBQU8sVUFBbkI7O0FBUUEsSUFBTSxRQUFBLEFBQVEsdUJBQWQ7O0lBS00sQTs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDs2QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNHLGNBQUQsS0FBQSxBQUFNLFlBQVMsV0FBZixBQUEwQjtvQkFBMUI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUVGLDRCQUFBLEFBQUM7O29CQUFEO3NCQUxKLEFBQ0UsQUFJRSxBQUdMO0FBSEs7QUFBQTs7Ozs7QUFQYSxBLEFBYXJCOzsyQ0FBdUIsVUFBQSxBQUFDLE9BQUQ7U0FBQSxBQUFXO0FBQW5CLENBQUEsRUFBZixBQUFlLEFBQTBCIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=