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
    }, _this._handleContentChange = function (e) {
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
          lineNumber: 58
        }
      }, React.createElement(Text.Heading2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, portfolio.title ? portfolio.title : null), React.createElement(_Link2.default, { href: 'https://www.google.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, React.createElement('img', { src: 'http://via.placeholder.com/250x150', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })));
    }, _this.renderLoggedIn = function () {
      var portfolio = _this.props.portfolio;
      var isEditing = _this.state.isEditing;

      return React.createElement(PortfolioGrid.single, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, !isEditing ? React.createElement(_Button2.default, { onClick: _this._handleEdit, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Edit Portfolio Item') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleCancel, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'Cancel') : undefined, isEditing ? React.createElement(_Button2.default, { onClick: _this._handleSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Save') : undefined, React.createElement(_Button2.default, { onClick: _this._handleDelete, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
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
          lineNumber: 93
        }
      }) : React.createElement(Text.Heading1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, portfolio.title ? portfolio.title : null), React.createElement(_Link2.default, { href: 'https://www.google.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, React.createElement('img', { src: 'http://via.placeholder.com/250x150', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9ydGZvbGlvcy9Qb3J0Zm9saW8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0IiwiU3RyaW5ncyIsIkFjdGlvbnMiLCJCdXR0b24iLCJUZXh0YXJlYSIsIkxpbmsiLCJQb3J0Zm9saW9HcmlkIiwiUG9ydGZvbGlvIiwic3RhdGUiLCJpc0VkaXRpbmciLCJkZXNjcmlwdGlvbiIsInByb3BzIiwicG9ydGZvbGlvIiwidW5kZWZpbmVkIiwidGl0bGUiLCJfaGFuZGxlRWRpdCIsInNldFN0YXRlIiwiX2hhbmRsZUNhbmNlbCIsIl9oYW5kbGVUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9oYW5kbGVDb250ZW50Q2hhbmdlIiwiX2hhbmRsZVNhdmUiLCJkaXNwYXRjaCIsInJlcXVlc3RVcGRhdGVQb3J0Zm9saW8iLCJwb3J0Zm9saW9JZCIsImlkIiwiX2hhbmRsZURlbGV0ZSIsInJlcXVlc3REZWxldGVQb3J0Zm9saW8iLCJyZW5kZXJMb2dnZWRPdXQiLCJyZW5kZXJMb2dnZWRJbiIsInN1YnZpZXciLCJpc0F1dGhlbnRpY2F0ZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU87O0lBQVAsQUFBWSxBQUFVOztBQUN0QixBQUFPOztJQUFQLEFBQVksQUFBYTs7QUFDekIsQUFBTzs7SUFBUCxBQUFZLEFBQWE7O0FBQ3pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87O0lBQVAsQUFBWSxBQUFtQjs7Ozs7Ozs7O0ksQUFFVjs7Ozs7Ozs7Ozs7Ozs7a04sQUFDbkI7aUJBQVEsQUFDSyxBQUNYO21CQUFhLE1BQUEsQUFBSyxNQUFMLEFBQVcsWUFDcEIsTUFBQSxBQUFLLE1BQUwsQUFBVyxVQURGLEFBQ1ksY0FIbkIsQUFJRixBQUNKO2FBQU8sTUFBQSxBQUFLLE1BQUwsQUFBVyxZQUFZLE1BQUEsQUFBSyxNQUFMLEFBQVcsVUFBbEMsQUFBNEMsUUFMN0MsQUFLcUQsQTtBQUxyRCxBQUNOLGFBT0YsQSxjQUFjLFlBQU0sQUFDbEI7WUFBQSxBQUFLLFNBQVMsRUFBRSxXQUFoQixBQUFjLEFBQWEsQUFDNUI7QSxhQUVELEEsZ0JBQWdCLFlBQU0sQUFDcEI7WUFBQSxBQUFLO21CQUFTLEFBQ0QsQUFDWDtxQkFBYSxNQUFBLEFBQUssTUFBTCxBQUFXLFVBRlosQUFFc0IsQUFDbEM7ZUFBTyxNQUFBLEFBQUssTUFBTCxBQUFXLFVBSHBCLEFBQWMsQUFHZ0IsQUFFL0I7QUFMZSxBQUNaO0EsYUFNSixBLHFCQUFxQixVQUFBLEFBQUMsR0FBTSxBQUMxQjtZQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sRUFBQSxBQUFFLE9BQXpCLEFBQWMsQUFBa0IsQUFDakM7QSxhQUVELEEsdUJBQXVCLFVBQUEsQUFBQyxHQUFNLEFBQzVCO1lBQUEsQUFBSyxTQUFTLEVBQUUsYUFBYSxFQUFBLEFBQUUsT0FBL0IsQUFBYyxBQUF3QixBQUN2QztBLGEsQUFFRCxjQUFjLFlBQU0sQUFDbEI7WUFBQSxBQUFLLE1BQUwsQUFBVyxpQkFDVCxBQUFRO3FCQUNPLE1BQUEsQUFBSyxNQUFMLEFBQVcsVUFESyxBQUNLLEFBQ2xDO3FCQUFhLE1BQUEsQUFBSyxNQUZXLEFBRUwsQUFDeEI7ZUFBTyxNQUFBLEFBQUssTUFKaEIsQUFDRSxBQUErQixBQUdYLEFBR3ZCO0FBTmtDLEFBQzdCLE9BREY7QSxhLEFBUUosZ0JBQWdCLFlBQU0sQUFDcEI7WUFBQSxBQUFLLE1BQUwsQUFBVyxTQUNULFFBQUEsQUFBUSx1QkFBdUIsTUFBQSxBQUFLLE1BQUwsQUFBVyxVQUQ1QyxBQUNFLEFBQW9ELEFBRXZEO0EsYUFFRCxBLGtCQUFrQixZQUFNO1VBQUEsQUFDZCxZQUFjLE1BREEsQUFDSyxNQURMLEFBQ2QsQUFDUjs7bUJBQ0csY0FBRCxjQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsUUFDRyxjQUFELEtBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRztBQURIO0FBQUEsbUJBQ0csQUFBVSxRQUFRLFVBQWxCLEFBQTRCLFFBRmpDLEFBQ0UsQUFDdUMsQUFFdkMsYUFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7c0NBQ08sS0FBTCxBQUFTO29CQUFUO3NCQU5OLEFBQ0UsQUFJRSxBQUNFLEFBSVA7QUFKTzs7QSxhLEFBTVIsaUJBQWlCLFlBQU07VUFBQSxBQUNiLFlBQWMsTUFERCxBQUNNLE1BRE4sQUFDYjtVQURhLEFBRWIsWUFBYyxNQUZELEFBRU0sTUFGTixBQUViLEFBQ1I7O21CQUNHLGNBQUQsY0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLFFBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsVUFDRyxBQUFDLGtCQUNBLEFBQUMsa0NBQU8sU0FBUyxNQUFqQixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtPQUFBLEVBREQsQUFDQyx5QkFGSixBQUlJLEFBRUQsNkJBQ0MsQUFBQyxrQ0FBTyxTQUFTLE1BQWpCLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO09BQUEsRUFERCxBQUNDLFlBUEosQUFTSSxBQUVELDZCQUNDLEFBQUMsa0NBQU8sU0FBUyxNQUFqQixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtPQUFBLEVBREQsQUFDQyxVQVpKLEFBY0ksQUFFRixpQkFBQSxBQUFDLGtDQUFPLFNBQVMsTUFBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FqQkosQUFDRSxBQWdCRSxBQUVELDhCQUNDLEFBQUM7ZUFDUSxNQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtxQkFGRixBQUVjLEFBQ1o7b0JBSEYsQUFHYyxBQUNaO29CQUpGLEFBSWEsQUFDWDtrQkFMRixBQUtXLEFBQ1Q7a0JBQVUsTUFOWixBQU1pQjs7b0JBTmpCO3NCQURELEFBQ0M7QUFBQTtBQUNFLE9BREYsVUFTQyxjQUFELEtBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxZQUNHLEFBQVUsUUFBUSxVQUFsQixBQUE0QixRQTlCbkMsQUE2QkksQUFDdUMsQUFHekMsYUFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7c0NBQ08sS0FBTCxBQUFTO29CQUFUO3NCQW5DTixBQUNFLEFBaUNFLEFBQ0UsQUFJUDtBQUpPOztBOzs7Ozs2QkFNQyxBQUNQO1VBQUksVUFBVSxDQUFDLEtBQUEsQUFBSyxNQUFOLEFBQVksa0JBQ3RCLEtBRFUsQUFDVixBQUFLLG9CQUNMLEtBRkosQUFFSSxBQUFLLEFBRVQ7O2FBQUEsQUFBTyxBQUNSOzs7OztFQTdHb0MsTUFBTSxBOztrQkFBeEIsQSIsImZpbGUiOiJQb3J0Zm9saW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9