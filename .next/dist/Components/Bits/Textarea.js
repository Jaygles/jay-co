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

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _reactEmotion = require('react-emotion');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Bits/Textarea.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvQml0cy9UZXh0YXJlYS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkxhYmVsIiwiY3NzIiwidGV4dGFyZWFTdHlsZXMiLCJUZXh0YXJlYSIsIl90ZXh0YXJlYSIsInVuZGVmaW5lZCIsInN0YXRlIiwiaGVpZ2h0IiwicHJvcHMiLCJfaGFuZGxlQ2hhbmdlIiwiZSIsInNjcm9sbEhlaWdodCIsInNldFN0YXRlIiwib25DaGFuZ2UiLCJhdXRvRm9jdXMiLCJmb2N1cyIsInN0eWxlIiwibWluSGVpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImMiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwibmFtZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwic3RyaW5nIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTzs7OztBQUNQLEFBQU8sQUFBVzs7OztBQUNsQixBQUFTOzs7Ozs7Ozs7O0FBRVQsSUFBTSxpQkFBQSxBQUFpQix1QkFBdkI7O0ksQUFXcUI7Ozs7Ozs7Ozs7Ozs7O2dOQW9CbkIsQSxZQUFZLEEsaUJBRVosQTtjQUNVLE1BQUEsQUFBSyxNQURQLEEsQUFDYTtBQURiLEFBQ04sYSxBQWVGLGdCQUFnQixVQUFBLEFBQUMsR0FBTTtVQUFBLEFBQ2IsZUFBaUIsTUFESixBQUNTLFVBRFQsQUFDYixBQUNSOztVQUFJLGVBQWUsTUFBQSxBQUFLLE1BQXBCLEFBQTBCLFNBQTlCLEFBQXVDLElBQUksQUFDekM7Y0FBQSxBQUFLO2tCQUVELGVBQWUsTUFBQSxBQUFLLE1BQXBCLEFBQTBCLFNBQTFCLEFBQW1DLGVBQWUsTUFBQSxBQUFLLE1BRjNELEFBQWMsQUFFbUQsQUFFbEU7QUFKZSxBQUNaO0FBSUo7WUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLEFBQ3JCO0E7Ozs7O3dDQXJCbUI7VUFBQSxBQUNWLGVBQWlCLEtBRFAsQUFDWSxVQURaLEFBQ1YsQUFDUjs7V0FBQSxBQUFLO2dCQUVELGVBQWUsS0FBQSxBQUFLLE1BQXBCLEFBQTBCLFNBQTFCLEFBQW1DLGVBQWUsS0FBQSxBQUFLLE1BRjNELEFBQWMsQUFFbUQsQUFHakU7QUFMYyxBQUNaOztVQUlFLEtBQUEsQUFBSyxNQUFULEFBQWUsV0FBVyxBQUN4QjthQUFBLEFBQUssVUFBTCxBQUFlLEFBQ2hCO0FBQ0Y7Ozs7NkJBYVE7bUJBQ1A7O1VBQU07bUJBQ08sS0FBQSxBQUFLLE1BREosQUFDVSxBQUN0QjtrQkFBVSxLQUFBLEFBQUssTUFGSCxBQUVTLEFBQ3JCO29CQUFZLEtBQUEsQUFBSyxNQUhMLEFBR1csQUFDdkI7b0JBQVksS0FBQSxBQUFLLE1BSm5CLEFBQWMsQUFJVyxBQUd6QjtBQVBjLEFBQ1o7OztlQU9BLEFBQ1MsQUFDUDthQUFLLGFBQUEsQUFBQyxHQUFEO2lCQUFRLE9BQUEsQUFBSyxZQUFiLEFBQXlCO0FBRmhDLEFBR0U7c0JBSEYsQUFHZSxBQUNiO21CQUpGLEFBSWEsQUFDWDtxQkFBYSxLQUFBLEFBQUssTUFMcEIsQUFLMEIsQUFDeEI7a0JBQVUsS0FOWixBQU1pQixBQUNmO2VBQU8sS0FBQSxBQUFLLE1BUGQsQUFPb0IsQUFDbEI7Y0FBTSxLQUFBLEFBQUssTUFSYixBQVFtQjs7b0JBUm5CO3NCQURGLEFBQ0UsQUFXSDtBQVhHO0FBQ0UsT0FERjs7Ozs7RUExRGdDLE1BQU0sQTs7QSxBQUF2QixTQUNaLEE7YUFDTSxvQkFETSxBQUNJLEFBQ3JCO1lBQVUsb0JBRk8sQUFFRyxBQUNwQjtRQUFNLG9CQUhXLEFBR0QsQUFDaEI7U0FBTyxvQkFKVSxBQUlBLEFBQ2pCO1lBQVUsb0JBTE8sQUFLRyxBQUNwQjtVQUFRLG9CQU5TLEFBTUMsQUFDbEI7Y0FBWSxvQkFQSyxBQU9LLEE7QUFQTCxBQUNqQjtBQUZpQixBLFMsQUFXWjthQUFlLEFBQ1QsQUFDWDtZQUFVLG9CQUFNLEFBQUUsQ0FGRSxBQUdwQjtZQUhvQixBQUdWLEFBQ1Y7Y0FKb0IsQUFJUixBQUNaO2NBTG9CLEFBS1IsQUFDWjtVQU5vQixBQU1aLEE7QUFOWSxBQUNwQjtrQkFaaUIsQSIsImZpbGUiOiJUZXh0YXJlYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=