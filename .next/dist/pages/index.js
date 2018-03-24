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
          lineNumber: 18
        }
      }, React.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), React.createElement(_MainGrid2.default, { key: 'layout', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, React.createElement(_Nav2.default, { isAuthenticated: _this.props.isAuthenticated, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), React.createElement(_PostList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })));
    }, _this.renderLoggedOut = function () {
      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, React.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), React.createElement(_MainGrid2.default, { key: 'layout', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, React.createElement(_Nav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), React.createElement(_PostList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
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
          lineNumber: 45
        }
      }, subview);
    }
  }]);

  return Index;
}(React.Component);

exports.default = (0, _withData2.default)({}, function (state) {
  return state;
})(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRG9jdW1lbnQiLCJMb2dvdXRCdXR0b24iLCJQb3N0Rm9ybSIsIlNpZ25VcEZvcm0iLCJCdXR0b24iLCJQb3N0TGlzdCIsIkhlYWRlciIsIk5hdiIsIk1haW5HcmlkIiwiQWN0aW9ucyIsIndpdGhEYXRhIiwiU2lnbnVwRm9ybSIsIkluZGV4IiwicmVuZGVyTG9nZ2VkSW4iLCJwcm9wcyIsImlzQXV0aGVudGljYXRlZCIsInJlbmRlckxvZ2dlZE91dCIsInN1YnZpZXciLCJDb21wb25lbnQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPOztJQUFQLEFBQVksQUFBYTs7QUFDekIsQUFBTyxBQUFjLEFBQ3JCLEFBQU8sQUFBZ0I7Ozs7Ozs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7OzBNQUNKLEEsaUJBQWlCLFlBQU0sQUFDckI7bUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxRQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsZ0JBQ0EsQUFBQyxvQ0FBUyxLQUFWLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO2VBQ0UsQUFBQywrQkFBSSxpQkFBaUIsTUFBQSxBQUFLLE1BQTNCLEFBQWlDO29CQUFqQztzQkFERixBQUNFLEFBQ0E7QUFEQTtnQkFDQSxBQUFDOztvQkFBRDtzQkFMTixBQUNFLEFBRUUsQUFFRSxBQUlQO0FBSk87QUFBQTtBLGEsQUFNUixrQkFBa0IsWUFBTSxBQUN0QjttQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLFFBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxnQkFDQSxBQUFDLG9DQUFTLEtBQVYsQUFBYztvQkFBZDtzQkFBQSxBQUNFO0FBREY7ZUFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLGdCQUNBLEFBQUM7O29CQUFEO3NCQUxOLEFBQ0UsQUFFRSxBQUVFLEFBSVA7QUFKTztBQUFBO0E7Ozs7OzZCQU1DLEFBQ1A7VUFBSSxVQUFVLENBQUMsS0FBQSxBQUFLLE1BQU4sQUFBWSxrQkFDdEIsS0FEVSxBQUNWLEFBQUssb0JBQ0wsS0FGSixBQUVJLEFBQUssQUFFVDs7bUJBQU8sQUFBQzs7b0JBQUQ7c0JBQUEsQUFBVztBQUFYO0FBQUEsT0FBQSxFQUFQLEFBQU8sQUFDUjs7Ozs7RUEvQmlCLE1BQU0sQSxBQWtDMUI7OzBDQUFlLEFBQVMsSUFBSSxVQUFBLEFBQUMsT0FBRDtTQUFBLEFBQVc7QUFBeEIsQ0FBQSxFQUFmLEFBQWUsQUFBK0IiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9