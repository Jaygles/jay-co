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
      }, portfolio.description), React.createElement(_Link2.default, { style: { 'align-self': 'end' }, href: 'https://www.google.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, React.createElement(_Img2.default, { src: portfolio.img, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })));
    }, _this.renderLoggedIn = function () {
      var portfolio = _this.props.portfolio;
      var isEditing = _this.state.isEditing;

      return React.createElement(PortfolioGrid.single, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, !isEditing ? React.createElement(_Button2.default, { onClick: _this._handleEdit, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Edit Portfolio Item') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleCancel, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Cancel') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'Save') : undefined, React.createElement(_Button2.default, { onClick: _this._handleDelete, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
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
          lineNumber: 95
        }
      }) : React.createElement(Text.Heading1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
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
          lineNumber: 109
        }
      }) : React.createElement(Text.PortfolioBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, portfolio.description ? portfolio.description : null), React.createElement(_Link2.default, { href: 'https://www.google.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, React.createElement(_Img2.default, { src: portfolio.img, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9ydGZvbGlvcy9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0IiwiU3RyaW5ncyIsIkFjdGlvbnMiLCJCdXR0b24iLCJUZXh0YXJlYSIsIkxpbmsiLCJJbWciLCJQb3J0Zm9saW9HcmlkIiwiUG9ydGZvbGlvIiwic3RhdGUiLCJpc0VkaXRpbmciLCJkZXNjcmlwdGlvbiIsInByb3BzIiwicG9ydGZvbGlvIiwidW5kZWZpbmVkIiwidGl0bGUiLCJfaGFuZGxlRWRpdCIsInNldFN0YXRlIiwiX2hhbmRsZUNhbmNlbCIsIl9oYW5kbGVUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9oYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsIl9oYW5kbGVTYXZlIiwiZGlzcGF0Y2giLCJyZXF1ZXN0VXBkYXRlUG9ydGZvbGlvIiwicG9ydGZvbGlvSWQiLCJpZCIsIl9oYW5kbGVEZWxldGUiLCJyZXF1ZXN0RGVsZXRlUG9ydGZvbGlvIiwicmVuZGVyTG9nZ2VkT3V0IiwiaW1nIiwicmVuZGVyTG9nZ2VkSW4iLCJzdWJ2aWV3IiwiaXNBdXRoZW50aWNhdGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPOztJQUFQLEFBQVksQUFBVTs7QUFDdEIsQUFBTzs7SUFBUCxBQUFZLEFBQWE7O0FBQ3pCLEFBQU87O0lBQVAsQUFBWSxBQUFhOztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7SUFBUCxBQUFZLEFBQW1COzs7Ozs7Ozs7SSxBQUVWOzs7Ozs7Ozs7Ozs7OztrTixBQUNuQjtpQkFBUSxBQUNLLEFBQ1g7bUJBQWEsTUFBQSxBQUFLLE1BQUwsQUFBVyxZQUNwQixNQUFBLEFBQUssTUFBTCxBQUFXLFVBREYs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QSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7cUJBRkYsQUFFYyxBQUNaO29CQUhGLEFBR2MsQUFDWjtvQkFKRixBQUlhLEFBQ1g7a0JBTEYsQUFLVyxBQUNUO2tCQUFVLE1BTlosQUFNaUI7O29CQU5qQjtzQkFERCxBQUNDO0FBQUE7QUFDRSxPQURGLFVBU0MsY0FBRCxLQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsWUFDRyxBQUFVLFFBQVEsVUFBbEIsQUFBNEIsUUE5Qm5DLEFBNkJJLEFBQ3VDLEFBR3hDLHlCQUNDLEFBQUM7ZUFDUSxNQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtxQkFGRixBQUVjLEFBQ1o7b0JBSEYsQUFHYyxBQUNaO29CQUpGLEFBSWEsQUFDWDtrQkFMRixBQUtXLEFBQ1Q7a0JBQVUsTUFOWixBQU1pQjs7b0JBTmpCO3NCQURELEFBQ0M7QUFBQTtBQUNFLE9BREYsVUFTQyxjQUFELEtBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxZQUNHLEFBQVUsY0FBYyxVQUF4QixBQUFrQyxjQTVDekMsQUEyQ0ksQUFDbUQsQUFHckQsYUFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7ZUFDRSxBQUFDLCtCQUFJLEtBQUssVUFBVixBQUFvQjtvQkFBcEI7c0JBakROLEFBQ0UsQUErQ0UsQUFDRSxBQUlQO0FBSk87O0E7Ozs7OzZCQU1DLEFBQ1A7VUFBSSxVQUFVLENBQUMsS0FBQSxBQUFLLE1BQU4sQUFBWSxrQkFDdEIsS0FEVSxBQUNWLEFBQUssb0JBQ0wsS0FGSixBQUVJLEFBQUssQUFFVDs7YUFBQSxBQUFPLEFBQ1I7Ozs7O0VBNUhvQyxNQUFNLEE7O2tCQUF4QixBIiwiZmlsZSI6IlBvcnRmb2xpby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=