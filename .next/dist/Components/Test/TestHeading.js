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

var React = _interopRequireWildcard(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Test/TestHeading.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  grid-area: heading;\n'], ['\n  display: flex;\n  flex-direction: column;\n  grid-area: heading;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 10px;\n  margin-left: 70px;\n  font-family: IBM Plex Sans;\n  color: #c74e44;\n  font-size: calc(50px + 14vw);\n  line-height: 70%;\n  &:first-of-type {\n    color: #ef7c73;\n    margin-left: 30px;\n  }\n  &:last-of-type {\n    color: #ffc8c4;\n    margin-left: 40px;\n  }\n'], ['\n  margin-top: 10px;\n  margin-left: 70px;\n  font-family: IBM Plex Sans;\n  color: #c74e44;\n  font-size: calc(50px + 14vw);\n  line-height: 70%;\n  &:first-of-type {\n    color: #ef7c73;\n    margin-left: 30px;\n  }\n  &:last-of-type {\n    color: #ffc8c4;\n    margin-left: 40px;\n  }\n']);

var HeadingWrap = (0, _reactEmotion2.default)('div')(_templateObject);

var HeadingSpan = (0, _reactEmotion2.default)('span')(_templateObject2);

var TestHeading = function (_React$Component) {
  (0, _inherits3.default)(TestHeading, _React$Component);

  function TestHeading() {
    (0, _classCallCheck3.default)(this, TestHeading);

    return (0, _possibleConstructorReturn3.default)(this, (TestHeading.__proto__ || (0, _getPrototypeOf2.default)(TestHeading)).apply(this, arguments));
  }

  (0, _createClass3.default)(TestHeading, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          target = _props.target,
          label = _props.label;

      return React.createElement(HeadingWrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, React.createElement(HeadingSpan, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'J'), React.createElement(HeadingSpan, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'A'), React.createElement(HeadingSpan, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Y'));
    }
  }]);

  return TestHeading;
}(React.Component);

exports.default = TestHeading;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvVGVzdC9UZXN0SGVhZGluZy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkhlYWRpbmdXcmFwIiwiSGVhZGluZ1NwYW4iLCJUZXN0SGVhZGluZyIsInByb3BzIiwidGFyZ2V0IiwibGFiZWwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPOzs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTSxjQUFjLDRCQUFkLEFBQWMsQUFBTyxPQUEzQjs7QUFNQSxJQUFNLGNBQWMsNEJBQWQsQUFBYyxBQUFPLFFBQTNCOztJQWlCTSxBOzs7Ozs7Ozs7Ozs2QkFDSzttQkFDbUIsS0FEbkIsQUFDd0I7VUFEeEIsQUFDQyxnQkFERCxBQUNDO1VBREQsQUFDUyxlQURULEFBQ1MsQUFDaEI7O21CQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsUUFDRyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsWUFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsWUFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKSixBQUNFLEFBR0UsQUFHTDs7Ozs7RUFWdUIsTUFBTSxBLEFBYWhDOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRlc3RIZWFkaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==