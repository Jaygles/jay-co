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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _Text = require('../Bits/Text');

var Text = _interopRequireWildcard(_Text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Nav/NavItem.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']);

var NavItemWrap = (0, _reactEmotion2.default)('div')(_templateObject);

var NavItem = function (_React$Component) {
  (0, _inherits3.default)(NavItem, _React$Component);

  function NavItem() {
    (0, _classCallCheck3.default)(this, NavItem);

    return (0, _possibleConstructorReturn3.default)(this, (NavItem.__proto__ || (0, _getPrototypeOf2.default)(NavItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          target = _props.target,
          label = _props.label;

      return React.createElement(NavItemWrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, React.createElement(Text.Anchor, { onClick: function onClick() {
          return _index2.default.push(target);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, label));
    }
  }]);

  return NavItem;
}(React.Component);

exports.default = NavItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvTmF2L05hdkl0ZW0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJzdHlsZWQiLCJUZXh0IiwiTmF2SXRlbVdyYXAiLCJOYXZJdGVtIiwicHJvcHMiLCJ0YXJnZXQiLCJsYWJlbCIsInB1c2giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87O0lBQVAsQUFBWSxBQUFVOzs7Ozs7Ozs7O0FBRXRCLElBQU0sY0FBYyw0QkFBZCxBQUFjLEFBQU8sT0FBM0I7O0lBRU0sQTs7Ozs7Ozs7Ozs7NkJBQ0s7bUJBQ21CLEtBRG5CLEFBQ3dCO1VBRHhCLEFBQ0MsZ0JBREQsQUFDQztVQURELEFBQ1MsZUFEVCxBQUNTLEFBQ2hCOzttQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLFFBQ0csY0FBRCxLQUFBLEFBQU0sVUFBTyxTQUFTLG1CQUFBO2lCQUFNLGdCQUFBLEFBQU8sS0FBYixBQUFNLEFBQVk7QUFBeEM7b0JBQUE7c0JBQUEsQUFBa0Q7QUFBbEQ7U0FGSixBQUNFLEFBQ0UsQUFHTDs7Ozs7RUFSbUIsTUFBTSxBLEFBVzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik5hdkl0ZW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9