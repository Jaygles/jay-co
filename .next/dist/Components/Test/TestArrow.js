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

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Test/TestArrow.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  height: 50px;\n  font-size: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-area: arrow;\n'], ['\n  width: 100%;\n  height: 50px;\n  font-size: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-area: arrow;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  cursor: pointer;\n'], ['\n  cursor: pointer;\n']);

var ArrowGrid = (0, _reactEmotion2.default)('div')(_templateObject);

var ArrowWrap = (0, _reactEmotion2.default)('span')(_templateObject2);

var TestArrow = function (_React$Component) {
  (0, _inherits3.default)(TestArrow, _React$Component);

  function TestArrow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TestArrow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TestArrow.__proto__ || (0, _getPrototypeOf2.default)(TestArrow)).call.apply(_ref, [this].concat(args))), _this), _this._handleClick = function () {
      window.scrollTo(0, document.body.scrollHeight);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TestArrow, [{
    key: 'render',
    value: function render() {
      return React.createElement(ArrowGrid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, React.createElement(ArrowWrap, { onClick: this._handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, '\uFE3E'));
    }
  }]);

  return TestArrow;
}(React.Component);

exports.default = TestArrow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvVGVzdC9UZXN0QXJyb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJBcnJvd0dyaWQiLCJBcnJvd1dyYXAiLCJUZXN0QXJyb3ciLCJfaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU87Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNLFlBQVksNEJBQVosQUFBWSxBQUFPLE9BQXpCOztBQVVBLElBQU0sWUFBWSw0QkFBWixBQUFZLEFBQU8sUUFBekI7O0lBSU0sQTs7Ozs7Ozs7Ozs7Ozs7a05BQ0osQSxlQUFlLFlBQU0sQUFDbkI7YUFBQSxBQUFPLFNBQVAsQUFBZ0IsR0FBRyxTQUFBLEFBQVMsS0FBNUIsQUFBaUMsQUFDbEM7QTs7Ozs7NkJBQ1EsQUFDUDttQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLFFBQ0csY0FBRCxhQUFXLFNBQVMsS0FBcEIsQUFBeUI7b0JBQXpCO3NCQUFBO0FBQUE7U0FGSixBQUNFLEFBQ0UsQUFHTDs7Ozs7RUFWcUIsTUFBTSxBLEFBYTlCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRlc3RBcnJvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=