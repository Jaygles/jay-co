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

var _SideNav = require('./SideNav');

var _SideNav2 = _interopRequireDefault(_SideNav);

var _Text = require('./Text');

var Text = _interopRequireWildcard(_Text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Nav.js';


var PostPreview = function (_React$Component) {
  (0, _inherits3.default)(PostPreview, _React$Component);

  function PostPreview() {
    (0, _classCallCheck3.default)(this, PostPreview);

    return (0, _possibleConstructorReturn3.default)(this, (PostPreview.__proto__ || (0, _getPrototypeOf2.default)(PostPreview)).apply(this, arguments));
  }

  (0, _createClass3.default)(PostPreview, [{
    key: 'render',
    value: function render() {
      var post = this.props.post;

      return React.createElement(_SideNav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, React.createElement(Text.Anchor, { href: 'about', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'About'));
    }
  }]);

  return PostPreview;
}(React.Component);

exports.default = PostPreview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2lkZU5hdiIsIlRleHQiLCJQb3N0UHJldmlldyIsInBvc3QiLCJwcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU87O0lBQVAsQUFBWSxBQUFVOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7Ozs2QkFDVjtVQUFBLEFBQ0MsT0FBUyxLQURWLEFBQ2UsTUFEZixBQUNDLEFBQ1I7O21CQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsUUFDRyxjQUFELEtBQUEsQUFBTSxVQUFPLE1BQWIsQUFBa0I7b0JBQWxCO3NCQUFBO0FBQUE7U0FGSixBQUNFLEFBQ0UsQUFHTDs7Ozs7RUFSc0MsTUFBTSxBOztrQkFBMUIsQSIsImZpbGUiOiJOYXYuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9