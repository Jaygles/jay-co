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

var _Textarea = require('../Bits/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Button = require('../Bits/Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('../../common/actions');

var Actions = _interopRequireWildcard(_actions);

var _reactRedux = require('react-redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Posts/PostForm.js';


var PostForm = function (_React$Component) {
  (0, _inherits3.default)(PostForm, _React$Component);

  function PostForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PostForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostForm.__proto__ || (0, _getPrototypeOf2.default)(PostForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      content: '',
      title: ''
    }, _this._handleTitleChange = function (e) {
      _this.setState({ title: e.target.value });
    }, _this._handleContentChange = function (e) {
      _this.setState({ content: e.target.value });
    }, _this._handleSave = function () {
      console.log(_this.state);
      _this.props.dispatch(Actions.requestSavePost({
        content: _this.state.content,
        title: _this.state.title
      }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PostForm, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { style: this.props.style, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, React.createElement(_Textarea2.default, {
        onChange: this._handleTitleChange,
        value: this.state.title,
        placeholder: 'Title',
        fontWeight: 600,
        lineHeight: '40px',
        fontSize: '48px',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), React.createElement(_Textarea2.default, {
        onChange: this._handleContentChange,
        placeholder: 'Content',
        fontSize: '16px',
        lineHeight: '24px',
        value: this.state.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), React.createElement(_Button2.default, { onClick: this._handleSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Save'));
    }
  }]);

  return PostForm;
}(React.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(PostForm);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9zdHMvUG9zdEZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsIkFjdGlvbnMiLCJjb25uZWN0IiwiUG9zdEZvcm0iLCJzdGF0ZSIsImNvbnRlbnQiLCJ0aXRsZSIsIl9oYW5kbGVUaXRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiX2hhbmRsZUNvbnRlbnRDaGFuZ2UiLCJfaGFuZGxlU2F2ZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImRpc3BhdGNoIiwicmVxdWVzdFNhdmVQb3N0Iiwic3R5bGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7SUFBUCxBQUFZLEFBQWE7O0FBQ3pCLEFBQVM7Ozs7Ozs7OztJLEFBRUg7Ozs7Ozs7Ozs7Ozs7O2dOQUNKLEE7ZUFBUSxBQUNHLEFBQ1Q7YUFGTSxBLEFBRUM7QUFGRCxBQUNOLGFBSUYsQSxxQkFBcUIsVUFBQSxBQUFDLEdBQU0sQUFDMUI7WUFBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUEsQUFBRSxPQUF6QixBQUFjLEFBQWtCLEFBQ2pDO0EsYUFFRCxBLHVCQUF1QixVQUFBLEFBQUMsR0FBTSxBQUM1QjtZQUFBLEFBQUssU0FBUyxFQUFFLFNBQVMsRUFBQSxBQUFFLE9BQTNCLEFBQWMsQUFBb0IsQUFDbkM7QSxhLEFBRUQsY0FBYyxZQUFNLEFBQ2xCO2NBQUEsQUFBUSxJQUFJLE1BQVosQUFBaUIsQUFDakI7WUFBQSxBQUFLLE1BQUwsQUFBVyxpQkFDVCxBQUFRO2lCQUNHLE1BQUEsQUFBSyxNQURRLEFBQ0YsQUFDcEI7ZUFBTyxNQUFBLEFBQUssTUFIaEIsQUFDRSxBQUF3QixBQUVKLEFBR3ZCO0FBTDJCLEFBQ3RCLE9BREY7QTs7Ozs7NkJBT0ssQUFDUDttQkFDRSxjQUFBLFNBQUssT0FBTyxLQUFBLEFBQUssTUFBakIsQUFBdUI7b0JBQXZCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLFFBQ0UsQUFBQztrQkFDVyxLQURaLEFBQ2lCLEFBQ2Y7ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtxQkFIRixBQUdjLEFBQ1o7b0JBSkYsQUFJYyxBQUNaO29CQUxGLEFBS2EsQUFDWDtrQkFORixBQU1XOztvQkFOWDtzQkFERixBQUNFLEFBUUE7QUFSQTtBQUNFLGdCQU9GLEFBQUM7a0JBQ1csS0FEWixBQUNpQixBQUNmO3FCQUZGLEFBRWMsQUFDWjtrQkFIRixBQUdXLEFBQ1Q7b0JBSkYsQUFJYSxBQUNYO2VBQU8sS0FBQSxBQUFLLE1BTGQsQUFLb0I7O29CQUxwQjtzQkFURixBQVNFLEFBT0E7QUFQQTtBQUNFLGdCQU1GLEFBQUMsa0NBQU8sU0FBUyxLQUFqQixBQUFzQjtvQkFBdEI7c0JBQUE7QUFBQTtTQWpCSixBQUNFLEFBZ0JFLEFBR0w7Ozs7O0VBN0NvQixNQUFNLEEsQUFnRDdCOzsyQ0FBdUIsVUFBQSxBQUFDLE9BQUQ7U0FBQSxBQUFXO0FBQW5CLENBQUEsRUFBZixBQUFlLEFBQTBCIiwiZmlsZSI6IlBvc3RGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==