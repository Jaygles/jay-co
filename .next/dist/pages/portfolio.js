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

var _Header = require('../Components/Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Nav = require('../Components/Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _PortfolioList = require('../Components/Portfolios/PortfolioList');

var _PortfolioList2 = _interopRequireDefault(_PortfolioList);

var _MainGrid = require('../Components/Grids/MainGrid');

var _MainGrid2 = _interopRequireDefault(_MainGrid);

var _withData = require('../higher-order/withData');

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/pages/portfolio.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var isAuthenticated = this.props.isAuthenticated;

      return React.createElement(_Document2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, React.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), React.createElement(_MainGrid2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, React.createElement(_Nav2.default, { isAuthenticated: isAuthenticated, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), React.createElement(_PortfolioList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })));
    }
  }]);

  return Index;
}(React.Component);

exports.default = (0, _withData2.default)({}, function (state) {
  return state;
})(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3BvcnRmb2xpby5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSGVhZGVyIiwiTmF2IiwiUG9ydGZvbGlvTGlzdCIsIk1haW5HcmlkIiwid2l0aERhdGEiLCJJbmRleCIsImlzQXV0aGVudGljYXRlZCIsInByb3BzIiwiQ29tcG9uZW50Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs2QkFDSztVQUFBLEFBQ0Msa0JBQW9CLEtBRHJCLEFBQzBCLE1BRDFCLEFBQ0MsQUFDUjs7bUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxRQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsZ0JBQ0EsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsZUFDRSxBQUFDLCtCQUFJLGlCQUFMLEFBQXNCO29CQUF0QjtzQkFERixBQUNFLEFBQ0E7QUFEQTtnQkFDQSxBQUFDOztvQkFBRDtzQkFMTixBQUNFLEFBRUUsQUFFRSxBQUlQO0FBSk87QUFBQTs7Ozs7RUFSVSxNQUFNLEEsQUFlMUI7OzBDQUFlLEFBQVMsSUFBSSxVQUFBLEFBQUMsT0FBRDtTQUFBLEFBQVc7QUFBeEIsQ0FBQSxFQUFmLEFBQWUsQUFBK0IiLCJmaWxlIjoicG9ydGZvbGlvLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==