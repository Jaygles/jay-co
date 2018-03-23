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

var _Textarea = require('../Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = require('react-redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Posts/PostForm.js';


var PostForm = function (_React$Component) {
  (0, _inherits3.default)(PostForm, _React$Component);

  function PostForm() {
    (0, _classCallCheck3.default)(this, PostForm);

    return (0, _possibleConstructorReturn3.default)(this, (PostForm.__proto__ || (0, _getPrototypeOf2.default)(PostForm)).apply(this, arguments));
  }

  (0, _createClass3.default)(PostForm, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { style: this.props.style, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, React.createElement(_Textarea2.default, {
        onChange: this.props.onTitleChange,
        value: this.props.title,
        placeholder: 'Optional title',
        fontWeight: 600,
        lineHeight: '40px',
        fontSize: '48px',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), React.createElement(_Textarea2.default, {
        onChange: this.props.onContentChange,
        placeholder: 'Start writing...',
        fontSize: '16px',
        lineHeight: '24px',
        value: this.props.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }));
    }
  }]);

  return PostForm;
}(React.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(PostForm);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9zdHMvUG9zdEZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsImNvbm5lY3QiLCJQb3N0Rm9ybSIsInByb3BzIiwic3R5bGUiLCJvblRpdGxlQ2hhbmdlIiwidGl0bGUiLCJvbkNvbnRlbnRDaGFuZ2UiLCJ2YWx1ZSIsIkNvbXBvbmVudCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVM7Ozs7Ozs7OztJLEFBRUg7Ozs7Ozs7Ozs7OzZCQUNLLEFBQ1A7bUJBQ0UsY0FBQSxTQUFLLE9BQU8sS0FBQSxBQUFLLE1BQWpCLEFBQXVCO29CQUF2QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxRQUNFLEFBQUM7a0JBQ1csS0FBQSxBQUFLLE1BRGpCLEFBQ3VCLEFBQ3JCO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7cUJBSEYsQUFHYyxBQUNaO29CQUpGLEFBSWMsQUFDWjtvQkFMRixBQUthLEFBQ1g7a0JBTkYsQUFNVzs7b0JBTlg7c0JBREYsQUFDRSxBQVFBO0FBUkE7QUFDRSxnQkFPRixBQUFDO2tCQUNXLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNyQjtxQkFGRixBQUVjLEFBQ1o7a0JBSEYsQUFHVyxBQUNUO29CQUpGLEFBSWEsQUFDWDtlQUFPLEtBQUEsQUFBSyxNQUxkLEFBS29COztvQkFMcEI7c0JBVkosQUFDRSxBQVNFLEFBU0w7QUFUSztBQUNFOzs7OztFQWJhLE0sQUFBTSxBQXdCN0I7OzJDQUF1QixVQUFBLEFBQUMsT0FBRDtTQUFBLEFBQVc7QUFBbkIsQ0FBQSxFQUFmLEFBQWUsQUFBMEIiLCJmaWxlIjoiUG9zdEZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9