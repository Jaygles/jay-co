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

var _Portfolio = require('./Portfolio');

var _Portfolio2 = _interopRequireDefault(_Portfolio);

var _PortfolioGrid = require('../Grids/PortfolioGrid');

var PortfolioGrid = _interopRequireWildcard(_PortfolioGrid);

var _reactRedux = require('react-redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Portfolios/PortfolioList.js';


var PortfolioList = function (_React$Component) {
  (0, _inherits3.default)(PortfolioList, _React$Component);

  function PortfolioList() {
    (0, _classCallCheck3.default)(this, PortfolioList);

    return (0, _possibleConstructorReturn3.default)(this, (PortfolioList.__proto__ || (0, _getPrototypeOf2.default)(PortfolioList)).apply(this, arguments));
  }

  (0, _createClass3.default)(PortfolioList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var portfolios = this.props.portfolios.map(function (p) {
        return React.createElement(_Portfolio2.default, {
          dispatch: _this2.props.dispatch,
          isAuthenticated: _this2.props.isAuthenticated,
          key: 'portfolio-' + p.id,
          portfolio: p,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        });
      });

      return React.createElement(PortfolioGrid.main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, portfolios);
    }
  }]);

  return PortfolioList;
}(React.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(PortfolioList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9ydGZvbGlvcy9Qb3J0Zm9saW9MaXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUG9ydGZvbGlvIiwiUG9ydGZvbGlvR3JpZCIsImNvbm5lY3QiLCJQb3J0Zm9saW9MaXN0IiwicG9ydGZvbGlvcyIsInByb3BzIiwibWFwIiwicCIsImRpc3BhdGNoIiwiaXNBdXRoZW50aWNhdGVkIiwiaWQiLCJDb21wb25lbnQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU87O0lBQVAsQUFBWSxBQUFtQjs7QUFDL0IsQUFBUzs7Ozs7Ozs7O0lBRUgsQTs7Ozs7Ozs7Ozs7NkJBQ0s7bUJBQ1A7O1VBQU0sa0JBQWEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixJQUFJLFVBQUEsQUFBQyxHQUFEO3FCQUMzQyxBQUFDO29CQUNXLE9BQUEsQUFBSyxNQURqQixBQUN1QixBQUNyQjsyQkFBaUIsT0FBQSxBQUFLLE1BRnhCLEFBRThCLEFBQzVCOzhCQUFrQixFQUhwQixBQUdzQixBQUNwQjtxQkFKRixBQUlhOztzQkFKYjt3QkFEMkMsQUFDM0M7QUFBQTtBQUNFLFNBREY7QUFERixBQUFtQixBQVNuQixPQVRtQjs7bUJBU1gsY0FBRCxjQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQXFCO0FBQXJCO0FBQUEsT0FBQSxFQUFQLEFBQU8sQUFDUjs7Ozs7RUFaeUIsTUFBTSxBQWVsQyxBOzsyQ0FBdUIsVUFBQSxBQUFDLE9BQUQ7U0FBQSxBQUFXO0FBQW5CLENBQUEsRUFBZixBQUFlLEFBQTBCIiwiZmlsZSI6IlBvcnRmb2xpb0xpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9