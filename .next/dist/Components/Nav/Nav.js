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

var _NavGrid = require('../Grids/NavGrid');

var _NavGrid2 = _interopRequireDefault(_NavGrid);

var _Text = require('../Bits/Text');

var Text = _interopRequireWildcard(_Text);

var _LogoutButton = require('../Auth/LogoutButton');

var _LogoutButton2 = _interopRequireDefault(_LogoutButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Nav/Nav.js';


var PostPreview = function (_React$Component) {
  (0, _inherits3.default)(PostPreview, _React$Component);

  function PostPreview() {
    (0, _classCallCheck3.default)(this, PostPreview);

    return (0, _possibleConstructorReturn3.default)(this, (PostPreview.__proto__ || (0, _getPrototypeOf2.default)(PostPreview)).apply(this, arguments));
  }

  (0, _createClass3.default)(PostPreview, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          post = _props.post,
          isAuthenticated = _props.isAuthenticated;

      return React.createElement(_NavGrid2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, React.createElement(Text.Anchor, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, 'Home'), React.createElement(Text.Anchor, { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, 'About'), React.createElement(Text.Anchor, { href: '/portfolio', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Portfolio'), isAuthenticated ? React.createElement(_LogoutButton2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }) : null);
    }
  }]);

  return PostPreview;
}(React.Component);

exports.default = PostPreview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvTmF2L05hdi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdkdyaWQiLCJUZXh0IiwiTG9nb3V0QnV0dG9uIiwiUG9zdFByZXZpZXciLCJwcm9wcyIsInBvc3QiLCJpc0F1dGhlbnRpY2F0ZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPOztJQUFQLEFBQVksQUFBVTs7QUFDdEIsQUFBTyxBQUFrQjs7Ozs7Ozs7Ozs7SUFFSixBOzs7Ozs7Ozs7Ozs2QkFDVjttQkFDMkIsS0FEM0IsQUFDZ0M7VUFEaEMsQUFDQyxjQURELEFBQ0M7VUFERCxBQUNPLHlCQURQLEFBQ08sQUFDZDs7bUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxRQUNHLGNBQUQsS0FBQSxBQUFNLFVBQU8sTUFBYixBQUFrQjtvQkFBbEI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSxlQUFDLGNBQUQsS0FBQSxBQUFNLFVBQU8sTUFBYixBQUFrQjtvQkFBbEI7c0JBQUE7QUFBQTtTQUZGLEFBRUUsQUFDQSxnQkFBQyxjQUFELEtBQUEsQUFBTSxVQUFPLE1BQWIsQUFBa0I7b0JBQWxCO3NCQUFBO0FBQUE7U0FIRixBQUdFLEFBQ0Msc0NBQWtCLEFBQUM7O29CQUFEO3NCQUFsQixBQUFrQjtBQUFBO0FBQUEsT0FBQSxJQUx2QixBQUNFLEFBSXdDLEFBRzNDOzs7OztFQVhzQyxNQUFNLEE7O2tCQUExQixBIiwiZmlsZSI6Ik5hdi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=