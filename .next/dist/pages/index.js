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

var _Document = require('../Components/Document');

var _Document2 = _interopRequireDefault(_Document);

var _LogoutButton = require('../Components/Auth/LogoutButton');

var _LogoutButton2 = _interopRequireDefault(_LogoutButton);

var _PostForm = require('../Components/Posts/PostForm');

var _PostForm2 = _interopRequireDefault(_PostForm);

var _SignupForm = require('../Components/Auth/SignupForm');

var _SignupForm2 = _interopRequireDefault(_SignupForm);

var _Button = require('../Components/Bits/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PostList = require('../Components/Posts/PostList');

var _PostList2 = _interopRequireDefault(_PostList);

var _Header = require('../Components/Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Nav = require('../Components/Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _MainGrid = require('../Components/Grids/MainGrid');

var _MainGrid2 = _interopRequireDefault(_MainGrid);

var _actions = require('../common/actions');

var Actions = _interopRequireWildcard(_actions);

var _withData = require('../higher-order/withData');

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.renderLoggedIn = function () {
      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, React.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), React.createElement(_MainGrid2.default, { key: 'layout', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, React.createElement(_Nav2.default, { isAuthenticated: _this.props.isAuthenticated, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), React.createElement(_PostList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })));
    }, _this.renderLoggedOut = function () {
      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, React.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), React.createElement(_MainGrid2.default, { key: 'layout', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, React.createElement(_Nav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), React.createElement(_PostList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var subview = !this.props.isAuthenticated ? this.renderLoggedOut() : this.renderLoggedIn();

      return React.createElement(_Document2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, subview);
    }
  }]);

  return Index;
}(React.Component);

exports.default = (0, _withData2.default)({}, function (state) {
  return state;
})(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRG9jdW1lbnQiLCJMb2dvdXRCdXR0b24iLCJQb3N0Rm9ybSIsIlNpZ25VcEZvcm0iLCJCdXR0b24iLCJQb3N0TGlzdCIsIkhlYWRlciIsIk5hdiIsIk1haW5HcmlkIiwiQWN0aW9ucyIsIndpdGhEYXRhIiwiSW5kZXgiLCJyZW5kZXJMb2dnZWRJbiIsInByb3BzIiwiaXNBdXRoZW50aWNhdGVkIiwicmVuZGVyTG9nZ2VkT3V0Iiwic3VidmlldyIsIkNvbXBvbmVudCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU87O0lBQVAsQUFBWSxBQUFhOztBQUN6QixBQUFPLEFBQWM7Ozs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7ME0sQUFDSixpQkFBaUIsWUFBTSxBQUNyQjttQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLFFBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxnQkFDQSxBQUFDLG9DQUFTLEtBQVYsQUFBYztvQkFBZDtzQkFBQSxBQUNFO0FBREY7ZUFDRSxBQUFDLCtCQUFJLGlCQUFpQixNQUFBLEFBQUssTUFBM0IsQUFBaUM7b0JBQWpDO3NCQURGLEFBQ0UsQUFDQTtBQURBO2dCQUNBLEFBQUM7O29CQUFEO3NCQUxOLEFBQ0UsQUFFRSxBQUVFLEFBSVA7QUFKTztBQUFBO0EsYUFNUixBLGtCQUFrQixZQUFNLEFBQ3RCO21CQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsUUFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLGdCQUNBLEFBQUMsb0NBQVMsS0FBVixBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjtlQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsZ0JBQ0EsQUFBQzs7b0JBQUQ7c0JBTE4sQUFDRSxBQUVFLEFBRUUsQUFJUDtBQUpPO0FBQUE7QTs7Ozs7NkJBTUMsQUFDUDtVQUFJLFVBQVUsQ0FBQyxLQUFBLEFBQUssTUFBTixBQUFZLGtCQUN0QixLQURVLEFBQ1YsQUFBSyxvQkFDTCxLQUZKLEFBRUksQUFBSyxBQUVUOzttQkFBTyxBQUFDOztvQkFBRDtzQkFBQSxBQUFXO0FBQVg7QUFBQSxPQUFBLEVBQVAsQUFBTyxBQUNSOzs7OztFQS9CaUIsTUFBTSxBLEFBa0MxQjs7MENBQWUsQUFBUyxJQUFJLFVBQUEsQUFBQyxPQUFEO1NBQUEsQUFBVztBQUF4QixDQUFBLEVBQWYsQUFBZSxBQUErQiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=