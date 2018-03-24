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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = require('../Components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _reactEmotion = require('react-emotion');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Textarea.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  resize: none;\n  outline: 0;\n  border: 0;\n  &:focus {\n    outline: 0;\n    border: 0;\n  }\n'], ['\n  width: 100%;\n  resize: none;\n  outline: 0;\n  border: 0;\n  &:focus {\n    outline: 0;\n    border: 0;\n  }\n']);

var textareaStyles = (0, _reactEmotion.css)(_templateObject);

var Textarea = function (_React$Component) {
  (0, _inherits3.default)(Textarea, _React$Component);

  function Textarea() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Textarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Textarea.__proto__ || (0, _getPrototypeOf2.default)(Textarea)).call.apply(_ref, [this].concat(args))), _this), _this._textarea = undefined, _this.state = {
      height: _this.props.height
    }, _this._handleChange = function (e) {
      var scrollHeight = _this._textarea.scrollHeight;

      if (scrollHeight - _this.state.height > 10) {
        _this.setState({
          height: scrollHeight > _this.state.height ? scrollHeight : _this.state.height
        });
      }
      _this.props.onChange(e);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Textarea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scrollHeight = this._textarea.scrollHeight;

      this.setState({
        height: scrollHeight > this.props.height ? scrollHeight : this.props.height
      });

      if (this.props.autoFocus) {
        this._textarea.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = {
        minHeight: this.state.height,
        fontSize: this.props.fontSize,
        fontWeight: this.props.fontWeight,
        lineHeight: this.props.lineHeight
      };

      return React.createElement('textarea', {
        style: style,
        ref: function ref(c) {
          return _this2._textarea = c;
        },
        autoComplete: 'off',
        className: textareaStyles,
        placeholder: this.props.placeholder,
        onChange: this._handleChange,
        value: this.props.value,
        name: this.props.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      });
    }
  }]);

  return Textarea;
}(React.Component);

Textarea.propTypes = {
  autoFocus: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,
  height: _propTypes2.default.number,
  fontWeight: _propTypes2.default.number
};
Textarea.defaultProps = {
  autoFocus: false,
  onChange: function onChange() {},
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '20px',
  height: 24
};
exports.default = Textarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvVGV4dGFyZWEuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJMYWJlbCIsImNzcyIsInRleHRhcmVhU3R5bGVzIiwiVGV4dGFyZWEiLCJfdGV4dGFyZWEiLCJ1bmRlZmluZWQiLCJzdGF0ZSIsImhlaWdodCIsInByb3BzIiwiX2hhbmRsZUNoYW5nZSIsImUiLCJzY3JvbGxIZWlnaHQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiYXV0b0ZvY3VzIiwiZm9jdXMiLCJzdHlsZSIsIm1pbkhlaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJjIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm5hbWUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsInN0cmluZyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBUzs7Ozs7Ozs7OztBQUVULElBQU0saUJBQUEsQUFBaUIsdUJBQXZCOztJLEFBV3FCOzs7Ozs7Ozs7Ozs7OztnTkFvQm5CLEEsWUFBWSxBLGlCQUVaLEE7Y0FDVSxNQUFBLEFBQUssTUFEUCxBLEFBQ2E7QUFEYixBQUNOLGEsQUFlRixnQkFBZ0IsVUFBQSxBQUFDLEdBQU07VUFBQSxBQUNiLGVBQWlCLE1BREosQUFDUyxVQURULEFBQ2IsQUFDUjs7VUFBSSxlQUFlLE1BQUEsQUFBSyxNQUFwQixBQUEwQixTQUE5QixBQUF1QyxJQUFJLEFBQ3pDO2NBQUEsQUFBSztrQkFFRCxlQUFlLE1BQUEsQUFBSyxNQUFwQixBQUEwQixTQUExQixBQUFtQyxlQUFlLE1BQUEsQUFBSyxNQUYzRCxBQUFjLEFBRW1ELEFBRWxFO0FBSmUsQUFDWjtBQUlKO1lBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixBQUNyQjtBOzs7Ozt3Q0FyQm1CO1VBQUEsQUFDVixlQUFpQixLQURQLEFBQ1ksVUFEWixBQUNWLEFBQ1I7O1dBQUEsQUFBSztnQkFFRCxlQUFlLEtBQUEsQUFBSyxNQUFwQixBQUEwQixTQUExQixBQUFtQyxlQUFlLEtBQUEsQUFBSyxNQUYzRCxBQUFjLEFBRW1ELEFBR2pFO0FBTGMsQUFDWjs7VUFJRSxLQUFBLEFBQUssTUFBVCxBQUFlLFdBQVcsQUFDeEI7YUFBQSxBQUFLLFVBQUwsQUFBZSxBQUNoQjtBQUNGOzs7OzZCQWFRO21CQUNQOztVQUFNO21CQUNPLEtBQUEsQUFBSyxNQURKLEFBQ1UsQUFDdEI7a0JBQVUsS0FBQSxBQUFLLE1BRkgsQUFFUyxBQUNyQjtvQkFBWSxLQUFBLEFBQUssTUFITCxBQUdXLEFBQ3ZCO29CQUFZLEtBQUEsQUFBSyxNQUpuQixBQUFjLEFBSVcsQUFHekI7QUFQYyxBQUNaOzs7ZUFPQSxBQUNTLEFBQ1A7YUFBSyxhQUFBLEFBQUMsR0FBRDtpQkFBUSxPQUFBLEFBQUssWUFBYixBQUF5QjtBQUZoQyxBQUdFO3NCQUhGLEFBR2UsQUFDYjttQkFKRixBQUlhLEFBQ1g7cUJBQWEsS0FBQSxBQUFLLE1BTHBCLEFBSzBCLEFBQ3hCO2tCQUFVLEtBTlosQUFNaUIsQUFDZjtlQUFPLEtBQUEsQUFBSyxNQVBkLEFBT29CLEFBQ2xCO2NBQU0sS0FBQSxBQUFLLE1BUmIsQUFRbUI7O29CQVJuQjtzQkFERixBQUNFLEFBV0g7QUFYRztBQUNFLE9BREY7Ozs7O0VBMURnQyxNQUFNLEE7O0EsQUFBdkIsU0FDWixBO2FBQ00sb0JBRE0sQUFDSSxBQUNyQjtZQUFVLG9CQUZPLEFBRUcsQUFDcEI7UUFBTSxvQkFIVyxBQUdELEFBQ2hCO1NBQU8sb0JBSlUsQUFJQSxBQUNqQjtZQUFVLG9CQUxPLEFBS0csQUFDcEI7VUFBUSxvQkFOUyxBQU1DLEFBQ2xCO2NBQVksb0JBUEssQUFPSyxBO0FBUEwsQUFDakI7QUFGaUIsQSxTLEFBV1o7YUFBZSxBQUNULEFBQ1g7WUFBVSxvQkFBTSxBQUFFLENBRkUsQUFHcEI7WUFIb0IsQUFHVixBQUNWO2NBSm9CLEFBSVIsQUFDWjtjQUxvQixBQUtSLEFBQ1o7VUFOb0IsQUFNWixBO0FBTlksQUFDcEI7a0JBWmlCLEEiLCJmaWxlIjoiVGV4dGFyZWEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9