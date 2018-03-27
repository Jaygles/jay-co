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

var _Text = require('./Text');

var Text = _interopRequireWildcard(_Text);

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
            lineNumber: 10
          }
        }, this.props.children);
      }

      return React.createElement(_link2.default, { href: this.props.href, as: this.props.as, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, React.createElement('a', {
        target: target,
        className: this.props.className,
        style: this.props.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.props.children));
    }
  }]);

  return CustomLink;
}(React.Component);

exports.default = CustomLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvQml0cy9MaW5rLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGV4dCIsIkxpbmsiLCJDdXN0b21MaW5rIiwidGFyZ2V0IiwicHJvcHMiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjaGlsZHJlbiIsImhyZWYiLCJhcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTzs7SUFBUCxBQUFZLEFBQVU7O0FBQ3RCLEFBQU87Ozs7Ozs7Ozs7O0lBRWMsQTs7Ozs7Ozs7Ozs7NkJBQ1Y7VUFBQSxBQUNDLFNBQVcsS0FEWixBQUNpQixNQURqQixBQUNDLEFBQ1I7O1VBQUksS0FBQSxBQUFLLE1BQVQsQUFBZSxTQUFTLEFBQ3RCO3FCQUNFLGNBQUE7cUJBQ2EsS0FBQSxBQUFLLE1BRGxCLEFBQ3dCLEFBQ3RCO2lCQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO21CQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQjs7c0JBSHRCO3dCQUFBLEFBS0c7QUFMSDtBQUNFLFNBREYsT0FLRyxBQUFLLE1BTlYsQUFDRSxBQUtjLEFBR2pCO0FBRUQ7O21CQUNFLEFBQUMsZ0NBQUssTUFBTSxLQUFBLEFBQUssTUFBakIsQUFBdUIsTUFBTSxJQUFJLEtBQUEsQUFBSyxNQUF0QyxBQUE0QztvQkFBNUM7c0JBQUEsQUFDRTtBQURGO09BQUEsUUFDRSxjQUFBO2dCQUFBLEFBQ1UsQUFDUjttQkFBVyxLQUFBLEFBQUssTUFGbEIsQUFFd0IsQUFDdEI7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQjs7b0JBSHBCO3NCQUFBLEFBS0c7QUFMSDtBQUNFLGNBSUMsQUFBSyxNQVBaLEFBQ0UsQUFDRSxBQUtjLEFBSW5COzs7OztFQTFCcUMsTUFBTSxBOztrQkFBekIsQSIsImZpbGUiOiJMaW5rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==