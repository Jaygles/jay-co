"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = require("../Components/Label");

var _Label2 = _interopRequireDefault(_Label);

var _reactEmotion = require("react-emotion");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jay/Desktop/code/portfolio/jay-co/Components/Input.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  position: relative;\n"], ["\n  position: relative;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  font-family: Courier, monospace;\n  outline: 0;\n  border: 0;\n  border-bottom: 1px dashed #ececec;\n  padding: 40px 0 16px 0;\n  &:focus {\n    border: 0;\n    border-bottom: 1px dashed #0000ff;\n  }\n"], ["\n  width: 100%;\n  font-family: Courier, monospace;\n  outline: 0;\n  border: 0;\n  border-bottom: 1px dashed #ececec;\n  padding: 40px 0 16px 0;\n  &:focus {\n    border: 0;\n    border-bottom: 1px dashed #0000ff;\n  }\n"]);

var baseStyles = (0, _reactEmotion.css)(_templateObject);

var inputStyles = (0, _reactEmotion.css)(_templateObject2);

var Input = function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call.apply(_ref, [this].concat(args))), _this), _this._handleKeyUp = function (e) {
      if (e.which === 13) {
        _this.props.onSubmit(e);
        return;
      }

      _this.props.onKeyUp(e);
    }, _this.componentDidMount = function () {
      if (_this.props.autoFocus) {
        _this.refs.input.focus();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Input, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { className: baseStyles, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, this.props.label ? React.createElement(_Label2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.props.label) : undefined, React.createElement("input", {
        ref: "input",
        autoComplete: "off",
        className: inputStyles,
        onChange: this.props.onChange,
        onKeyUp: this._handleKeyUp,
        placeholder: this.props.placeholder,
        value: this.props.value,
        name: this.props.name,
        type: this.props.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }));
    }
  }]);

  return Input;
}(React.Component);

Input.propTypes = {
  onChange: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string,
  type: _propTypes2.default.string
};
Input.defaultProps = {
  onChange: function onChange() {},
  onSubmit: function onSubmit() {},
  onKeyUp: function onKeyUp() {}
};
exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvSW5wdXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJMYWJlbCIsImNzcyIsImJhc2VTdHlsZXMiLCJpbnB1dFN0eWxlcyIsIklucHV0IiwiX2hhbmRsZUtleVVwIiwiZSIsIndoaWNoIiwicHJvcHMiLCJvblN1Ym1pdCIsIm9uS2V5VXAiLCJjb21wb25lbnREaWRNb3VudCIsImF1dG9Gb2N1cyIsInJlZnMiLCJpbnB1dCIsImZvY3VzIiwibGFiZWwiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJuYW1lIiwidHlwZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVM7Ozs7Ozs7Ozs7O0FBRVQsSUFBTSxhQUFBLEFBQWEsdUJBQW5COztBQUlBLElBQU0sY0FBQSxBQUFjLHVCQUFwQjs7SUFhcUIsQTs7Ozs7Ozs7Ozs7Ozs7ME1Ba0JuQixBLGVBQWUsYUFBSyxBQUNsQjtVQUFJLEVBQUEsQUFBRSxVQUFOLEFBQWdCLElBQUksQUFDbEI7Y0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLEFBQ3BCO0FBQ0Q7QUFFRDs7WUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEFBQ3BCO0EsYUFFRCxBLG9CQUFvQixZQUFNLEFBQ3hCO1VBQUksTUFBQSxBQUFLLE1BQVQsQUFBZSxXQUFXLEFBQ3hCO2NBQUEsQUFBSyxLQUFMLEFBQVUsTUFBVixBQUFnQixBQUNqQjtBQUNGO0E7Ozs7OzZCQUVRLEFBQ1A7bUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0c7QUFESDtPQUFBLE9BQ0csQUFBSyxNQUFMLEFBQVcsY0FBUSxBQUFDOztvQkFBRDtzQkFBQSxBQUFRO0FBQVI7QUFBQSxPQUFBLE9BQVEsQUFBSyxNQUFoQyxBQUFtQixBQUFtQixTQUR6QyxBQUMwRCxBQUN4RDthQUFBLEFBQ00sQUFDSjtzQkFGRixBQUVlLEFBQ2I7bUJBSEYsQUFHYSxBQUNYO2tCQUFVLEtBQUEsQUFBSyxNQUpqQixBQUl1QixBQUNyQjtpQkFBUyxLQUxYLEFBS2dCLEFBQ2Q7cUJBQWEsS0FBQSxBQUFLLE1BTnBCLEFBTTBCLEFBQ3hCO2VBQU8sS0FBQSxBQUFLLE1BUGQsQUFPb0IsQUFDbEI7Y0FBTSxLQUFBLEFBQUssTUFSYixBQVFtQixBQUNqQjtjQUFNLEtBQUEsQUFBSyxNQVRiLEFBU21COztvQkFUbkI7c0JBSEosQUFDRSxBQUVFLEFBYUw7QUFiSztBQUNFOzs7OztFQXRDeUIsTUFBTSxBOztBLEFBQXBCLE1BQ1osQTtZQUNLLG9CQURPLEFBQ0csQUFDcEI7WUFBVSxvQkFGTyxBQUVHLEFBQ3BCO1dBQVMsb0JBSFEsQUFHRSxBQUNuQjtlQUFhLG9CQUpJLEFBSU0sQUFDdkI7U0FBTyxvQkFMVSxBQUtBLEFBQ2pCO1NBQU8sb0JBTlUsQUFNQSxBQUNqQjtRQUFNLG9CQVBXLEFBT0QsQUFDaEI7UUFBTSxvQkFBVSxBLEFBUkM7QUFBQSxBQUNqQjtBLEFBRmlCLE1BWVosQTtZQUNLLG9CQUFNLEFBQUUsQ0FERSxBQUVwQjtZQUFVLG9CQUFNLEFBQUUsQ0FGRSxBQUdwQjtXQUFTLG1CQUFNLEFBQUUsQ0FIRyxBO0FBQUEsQUFDcEI7a0JBYmlCLEEiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9