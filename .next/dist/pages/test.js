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

var _withData = require('../higher-order/withData');

var _withData2 = _interopRequireDefault(_withData);

var _TestGrid = require('../Components/Test/TestGrid');

var _TestGrid2 = _interopRequireDefault(_TestGrid);

var _TestHeading = require('../Components/Test/TestHeading');

var _TestHeading2 = _interopRequireDefault(_TestHeading);

var _Header = require('../Components/Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Nav = require('../Components/Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _MainGrid = require('../Components/Grids/MainGrid');

var _MainGrid2 = _interopRequireDefault(_MainGrid);

var _PostList = require('../Components/Posts/PostList');

var _PostList2 = _interopRequireDefault(_PostList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/pages/test.js?entry';


var Test = function (_React$Component) {
  (0, _inherits3.default)(Test, _React$Component);

  function Test() {
    (0, _classCallCheck3.default)(this, Test);

    return (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).apply(this, arguments));
  }

  (0, _createClass3.default)(Test, [{
    key: 'render',
    value: function render() {
      var isAuthenticated = this.props.isAuthenticated;

      return React.createElement(_Document2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, React.createElement(_TestGrid2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, React.createElement(_TestHeading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), React.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), React.createElement(_MainGrid2.default, { key: 'layout', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, React.createElement(_Nav2.default, { isAuthenticated: this.props.isAuthenticated, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), React.createElement(_PostList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })));
    }
  }]);

  return Test;
}(React.Component);

exports.default = (0, _withData2.default)({}, function (state) {
  return state;
})(Test);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJEb2N1bWVudCIsIndpdGhEYXRhIiwiVGVzdEdyaWQiLCJUZXN0SGVhZGluZyIsIkhlYWRlciIsIk5hdiIsIk1haW5HcmlkIiwiUG9zdExpc3QiLCJUZXN0IiwiaXNBdXRoZW50aWNhdGVkIiwicHJvcHMiLCJDb21wb25lbnQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWM7Ozs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7NkJBQ0s7VUFBQSxBQUNDLGtCQUFvQixLQURyQixBQUMwQixNQUQxQixBQUNDLEFBQ1I7O21CQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsUUFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxlQUNFLEFBQUM7O29CQUFEO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7QUFBQSxpQkFFRixBQUFDOztvQkFBRDtzQkFKRixBQUlFLEFBQ0E7QUFEQTtBQUFBLGdCQUNBLEFBQUMsb0NBQVMsS0FBVixBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjtlQUNFLEFBQUMsK0JBQUksaUJBQWlCLEtBQUEsQUFBSyxNQUEzQixBQUFpQztvQkFBakM7c0JBREYsQUFDRSxBQUNBO0FBREE7Z0JBQ0EsQUFBQzs7b0JBQUQ7c0JBUk4sQUFDRSxBQUtFLEFBRUUsQUFJUDtBQUpPO0FBQUE7Ozs7O0VBWFMsTUFBTSxBLEFBa0J6Qjs7MENBQWUsQUFBUyxJQUFJLFVBQUEsQUFBQyxPQUFEO1NBQUEsQUFBVztBQUF4QixDQUFBLEVBQWYsQUFBZSxBQUErQiIsImZpbGUiOiJ0ZXN0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==