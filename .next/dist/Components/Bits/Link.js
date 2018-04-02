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

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Bits/Link.js';


var CustomLink = function (_React$Component) {
  (0, _inherits3.default)(CustomLink, _React$Component);

  function CustomLink() {
    (0, _classCallCheck3.default)(this, CustomLink);

    return (0, _possibleConstructorReturn3.default)(this, (CustomLink.__proto__ || (0, _getPrototypeOf2.default)(CustomLink)).apply(this, arguments));
  }

  (0, _createClass3.default)(CustomLink, [{
    key: 'render',
    value: function render() {
      var target = this.props.target;

      if (this.props.onClick) {
        return React.createElement('span', {
          className: this.props.className,
          style: this.props.style,
          onClick: this.props.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }, this.props.children);
      }

      return React.createElement(_link2.default, { href: this.props.href, as: this.props.as, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, React.createElement('a', {
        target: target,
        className: this.props.className,
        style: this.props.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, this.props.children));
    }
  }]);

  return CustomLink;
}(React.Component);

exports.default = CustomLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvQml0cy9MaW5rLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkN1c3RvbUxpbmsiLCJ0YXJnZXQiLCJwcm9wcyIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzdHlsZSIsImNoaWxkcmVuIiwiaHJlZiIsImFzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPOzs7Ozs7Ozs7OztJLEFBRWM7Ozs7Ozs7Ozs7OzZCQUNWO1VBQUEsQUFDQyxTQUFXLEtBRFosQUFDaUIsTUFEakIsQUFDQyxBQUNSOztVQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsU0FBUyxBQUN0QjtxQkFDRSxjQUFBO3FCQUNhLEtBQUEsQUFBSyxNQURsQixBQUN3QixBQUN0QjtpQkFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjttQkFBUyxLQUFBLEFBQUssTUFIaEIsQUFHc0I7O3NCQUh0Qjt3QkFBQSxBQUtHO0FBTEg7QUFDRSxTQURGLE9BS0csQUFBSyxNQU5WLEFBQ0UsQUFLYyxBQUdqQjtBQUVEOzttQkFDRSxBQUFDLGdDQUFLLE1BQU0sS0FBQSxBQUFLLE1BQWpCLEFBQXVCLE1BQU0sSUFBSSxLQUFBLEFBQUssTUFBdEMsQUFBNEM7b0JBQTVDO3NCQUFBLEFBQ0U7QUFERjtPQUFBLFFBQ0UsY0FBQTtnQkFBQSxBQUNVLEFBQ1I7bUJBQVcsS0FBQSxBQUFLLE1BRmxCLEFBRXdCLEFBQ3RCO2VBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0I7O29CQUhwQjtzQkFBQSxBQUtHO0FBTEg7QUFDRSxjQUlDLEFBQUssTUFQWixBQUNFLEFBQ0UsQUFLYyxBQUluQjs7Ozs7RUExQnFDLE1BQU0sQTs7a0JBQXpCLEEiLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=