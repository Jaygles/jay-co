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

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

var _PostGrid = require('../Grids/PostGrid');

var _PostGrid2 = _interopRequireDefault(_PostGrid);

var _reactRedux = require('react-redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Posts/PostList.js';


var PostList = function (_React$Component) {
  (0, _inherits3.default)(PostList, _React$Component);

  function PostList() {
    (0, _classCallCheck3.default)(this, PostList);

    return (0, _possibleConstructorReturn3.default)(this, (PostList.__proto__ || (0, _getPrototypeOf2.default)(PostList)).apply(this, arguments));
  }

  (0, _createClass3.default)(PostList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var posts = this.props.posts.map(function (p) {
        return React.createElement(_Post2.default, {
          dispatch: _this2.props.dispatch,
          isAuthenticated: _this2.props.isAuthenticated,
          key: 'post-' + p.id,
          post: p,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        });
      });

      return React.createElement(_PostGrid2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, posts);
    }
  }]);

  return PostList;
}(React.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(PostList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9zdHMvUG9zdExpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQb3N0IiwiUG9zdEdyaWQiLCJjb25uZWN0IiwiUG9zdExpc3QiLCJwb3N0cyIsInByb3BzIiwibWFwIiwicCIsImRpc3BhdGNoIiwiaXNBdXRoZW50aWNhdGVkIiwiaWQiLCJDb21wb25lbnQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTOzs7Ozs7Ozs7SSxBQUVIOzs7Ozs7Ozs7Ozs2QkFDSzttQkFDUDs7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsSUFBSSxVQUFBLEFBQUMsR0FBRDtxQkFDakMsQUFBQztvQkFDVyxPQUFBLEFBQUssTUFEakIsQUFDdUIsQUFDckI7MkJBQWlCLE9BQUEsQUFBSyxNQUZ4QixBQUU4QixBQUM1Qjt5QkFBYSxFQUhmLEFBR2lCLEFBQ2Y7Z0JBSkYsQUFJUTs7c0JBSlI7d0JBRGlDLEFBQ2pDO0FBQUE7QUFDRSxTQURGO0FBREYsQUFBYyxBQVNkLE9BVGM7O21CQVNQLEFBQUM7O29CQUFEO3NCQUFBLEFBQVc7QUFBWDtBQUFBLE9BQUEsRUFBUCxBQUFPLEFBQ1I7Ozs7O0VBWm9CLE1BQU0sQSxBQWU3Qjs7MkNBQXVCLFVBQUEsQUFBQyxPQUFEO1NBQUEsQUFBVztBQUFuQixDQUFBLEVBQWYsQUFBZSxBQUEwQiIsImZpbGUiOiJQb3N0TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=