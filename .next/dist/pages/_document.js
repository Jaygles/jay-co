'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _emotionServer = require('emotion-server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  (0, _createClass3.default)(MyDocument, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var page = renderPage();
      var styles = (0, _emotionServer.extractCritical)(page.html);
      return (0, _extends3.default)({}, page, styles);
    }
  }]);

  function MyDocument(props) {
    (0, _classCallCheck3.default)(this, MyDocument);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).call(this, props));

    var __NEXT_DATA__ = props.__NEXT_DATA__,
        ids = props.ids;

    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
    return _this;
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Jay\'s Blog'), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.css }, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImV4dHJhY3RDcml0aWNhbCIsIk15RG9jdW1lbnQiLCJyZW5kZXJQYWdlIiwicGFnZSIsInN0eWxlcyIsImh0bWwiLCJwcm9wcyIsIl9fTkVYVF9EQVRBX18iLCJpZHMiLCJfX2h0bWwiLCJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVksQUFBTSxBQUFNOzs7O0FBQy9CLEFBQVM7Ozs7Ozs7SSxBQUVZOzs7OzswQ0FDb0I7VUFBZCxBQUFjLGtCQUFkLEFBQWMsQUFDckM7O1VBQU0sT0FBTixBQUFhLEFBQ2I7VUFBTSxTQUFTLG9DQUFnQixLQUEvQixBQUFlLEFBQXFCLEFBQ3BDO3dDQUFBLEFBQVksTUFBWixBQUFxQixBQUN0QjtBQUVEOzs7c0JBQUEsQUFBWSxPQUFPO3dDQUFBOzs4SUFBQSxBQUNYOztRQURXLEFBRVQsZ0JBRlMsQUFFYyxNQUZkLEFBRVQ7UUFGUyxBQUVNLE1BRk4sQUFFYyxNQUZkLEFBRU0sQUFDdkI7O1FBQUEsQUFBSSxLQUFLLEFBQ1A7b0JBQUEsQUFBYyxNQUFkLEFBQW9CLEFBQ3JCO0FBTGdCO1dBTWxCOzs7Ozs2QkFFUSxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlEQUFPLHlCQUF5QixFQUFFLFFBQVEsS0FBQSxBQUFLLE1BQS9DLEFBQWdDLEFBQXFCO29CQUFyRDtzQkFISixBQUNFLEFBRUUsQUFFRjtBQUZFOzJCQUVGLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBUk4sQUFDRSxBQUtFLEFBRUUsQUFJUDtBQUpPO0FBQUE7Ozs7O0FBeEI4QixBOztrQkFBbkIsQSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9