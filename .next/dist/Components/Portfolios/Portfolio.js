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

var _Text = require('../Bits/Text');

var Text = _interopRequireWildcard(_Text);

var _strings = require('../../common/strings');

var Strings = _interopRequireWildcard(_strings);

var _actions = require('../../common/actions');

var Actions = _interopRequireWildcard(_actions);

var _Button = require('../Bits/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Textarea = require('../Bits/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Link = require('../Bits/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Img = require('../Bits/Img');

var _Img2 = _interopRequireDefault(_Img);

var _PortfolioGrid = require('../Grids/PortfolioGrid');

var PortfolioGrid = _interopRequireWildcard(_PortfolioGrid);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Portfolios/Portfolio.js';


var Portfolio = function (_React$Component) {
  (0, _inherits3.default)(Portfolio, _React$Component);

  function Portfolio() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Portfolio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Portfolio.__proto__ || (0, _getPrototypeOf2.default)(Portfolio)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isEditing: false,
      description: _this.props.portfolio ? _this.props.portfolio.description : undefined,
      title: _this.props.portfolio ? _this.props.portfolio.title : undefined
    }, _this._handleEdit = function () {
      _this.setState({ isEditing: true });
    }, _this._handleCancel = function () {
      _this.setState({
        isEditing: false,
        description: _this.props.portfolio.description,
        title: _this.props.portfolio.title
      });
    }, _this._handleTitleChange = function (e) {
      _this.setState({ title: e.target.value });
    }, _this._handleDescriptionChange = function (e) {
      _this.setState({ description: e.target.value });
    }, _this._handleSave = function () {
      _this.props.dispatch(Actions.requestUpdatePortfolio({
        portfolioId: _this.props.portfolio.id,
        description: _this.state.description,
        title: _this.state.title
      }));
    }, _this._handleDelete = function () {
      _this.props.dispatch(Actions.requestDeletePortfolio(_this.props.portfolio.id));
    }, _this.renderLoggedOut = function () {
      var portfolio = _this.props.portfolio;

      return React.createElement(PortfolioGrid.single, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, React.createElement(Text.Heading1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, portfolio.title ? portfolio.title : null), React.createElement(Text.PortfolioBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, portfolio.description), React.createElement(_Link2.default, {
        target: '_blank',
        style: { 'align-self': 'end' },
        href: portfolio.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, React.createElement(_Img2.default, { src: portfolio.img, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })));
    }, _this.renderLoggedIn = function () {
      var portfolio = _this.props.portfolio;
      var isEditing = _this.state.isEditing;

      return React.createElement(PortfolioGrid.single, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, !isEditing ? React.createElement(_Button2.default, { onClick: _this._handleEdit, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'Edit Portfolio Item') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleCancel, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Cancel') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Save') : undefined, React.createElement(_Button2.default, { onClick: _this._handleDelete, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, 'Delete')), isEditing ? React.createElement(_Textarea2.default, {
        value: _this.state.title,
        placeholder: 'Optional title',
        fontWeight: 600,
        lineHeight: '2.8rem',
        fontSize: '2.618rem',
        onChange: _this._handleTitleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }) : React.createElement(Text.Heading1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, portfolio.title ? portfolio.title : null), isEditing ? React.createElement(_Textarea2.default, {
        value: _this.state.description,
        placeholder: 'Optional title',
        fontWeight: 600,
        lineHeight: '2.8rem',
        fontSize: '2.618rem',
        onChange: _this._handleDescriptionChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }) : React.createElement(Text.PortfolioBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, portfolio.description ? portfolio.description : null), React.createElement(_Link2.default, {
        target: '_blank',
        style: { 'align-self': 'end' },
        href: portfolio.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, React.createElement(_Img2.default, { src: portfolio.img, __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      })));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Portfolio, [{
    key: 'render',
    value: function render() {
      var subview = !this.props.isAuthenticated ? this.renderLoggedOut() : this.renderLoggedIn();

      return subview;
    }
  }]);

  return Portfolio;
}(React.Component);

exports.default = Portfolio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9ydGZvbGlvcy9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0IiwiU3RyaW5ncyIsIkFjdGlvbnMiLCJCdXR0b24iLCJUZXh0YXJlYSIsIkxpbmsiLCJJbWciLCJQb3J0Zm9saW9HcmlkIiwiUG9ydGZvbGlvIiwic3RhdGUiLCJpc0VkaXRpbmciLCJkZXNjcmlwdGlvbiIsInByb3BzIiwicG9ydGZvbGlvIiwidW5kZWZpbmVkIiwidGl0bGUiLCJfaGFuZGxlRWRpdCIsInNldFN0YXRlIiwiX2hhbmRsZUNhbmNlbCIsIl9oYW5kbGVUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9oYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsIl9oYW5kbGVTYXZlIiwiZGlzcGF0Y2giLCJyZXF1ZXN0VXBkYXRlUG9ydGZvbGlvIiwicG9ydGZvbGlvSWQiLCJpZCIsIl9oYW5kbGVEZWxldGUiLCJyZXF1ZXN0RGVsZXRlUG9ydGZvbGlvIiwicmVuZGVyTG9nZ2VkT3V0IiwibGluayIsImltZyIsInJlbmRlckxvZ2dlZEluIiwic3VidmlldyIsImlzQXV0aGVudGljYXRlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTzs7SUFBUCxBQUFZLEFBQVU7O0FBQ3RCLEFBQU87O0lBQVAsQUFBWSxBQUFhOztBQUN6QixBQUFPOztJQUFQLEFBQVksQUFBYTs7QUFDekIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87O0lBQVAsQUFBWSxBQUFtQjs7Ozs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7Ozs7a04sQUFDbkI7aUJBQVEsQUFDSyxBQUNYO21CQUFhLE1BQUEsQUFBSyxNQUFMLEFBQVcsWUFDcEIsTUFBQSxBQUFLLE1BQUwsQUFB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