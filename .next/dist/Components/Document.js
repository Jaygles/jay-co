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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _withEmotion = require('../higher-order/withEmotion');

var _withEmotion2 = _interopRequireDefault(_withEmotion);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Document.js';


var Document = function (_React$Component) {
  (0, _inherits3.default)(Document, _React$Component);

  function Document() {
    (0, _classCallCheck3.default)(this, Document);

    return (0, _possibleConstructorReturn3.default)(this, (Document.__proto__ || (0, _getPrototypeOf2.default)(Document)).apply(this, arguments));
  }

  (0, _createClass3.default)(Document, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, React.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, React.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, this.props.title), React.createElement('meta', { name: 'description', content: this.props.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), React.createElement('meta', { charSet: 'UTF-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), React.createElement('meta', { name: 'sourceApp', content: 'mobileWeb', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), React.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), React.createElement('meta', { property: 'og:locale', content: 'en_US', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), React.createElement('meta', { property: 'og:type', content: 'website', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })), this.props.children);
    }
  }]);

  return Document;
}(React.Component);

Document.defaultProps = {
  title: "Jay's Blog",
  description: "Kansas City Web Developer Jay Sullivan's blog. It is built with NextJS, Postgres with Sequelize, and React with Redux"
};

exports.default = (0, _withEmotion2.default)()(Document);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvRG9jdW1lbnQuanMiXSwibmFtZXMiOlsiSGVhZCIsIlJlYWN0Iiwid2l0aEVtb3Rpb24iLCJEb2N1bWVudCIsInByb3BzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFpQjs7Ozs7Ozs7Ozs7SUFFbEIsQTs7Ozs7Ozs7Ozs7NkJBT0ssQUFDUDttQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLFFBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsZUFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFRO0FBQVI7QUFBQSxjQUFRLEFBQUssTUFEZixBQUNFLEFBQW1CLEFBQ25CLHNDQUFNLE1BQU4sQUFBVyxlQUFjLFNBQVMsS0FBQSxBQUFLLE1BQXZDLEFBQTZDO29CQUE3QztzQkFGRixBQUVFLEFBQ0E7QUFEQTt3Q0FDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBSEYsQUFHRSxBQUNBO0FBREE7d0NBQ00sU0FBTixBQUFjO29CQUFkO3NCQUpGLEFBSUUsQUFDQTtBQURBO3dDQUNNLE1BQU4sQUFBVyxhQUFZLFNBQXZCLEFBQStCO29CQUEvQjtzQkFMRixBQUtFLEFBQ0E7QUFEQTt3Q0FDTSxXQUFOLEFBQWdCLG1CQUFrQixTQUFsQyxBQUEwQztvQkFBMUM7c0JBTkYsQUFNRSxBQUNBO0FBREE7d0NBQ00sVUFBTixBQUFlLGFBQVksU0FBM0IsQUFBbUM7b0JBQW5DO3NCQVBGLEFBT0UsQUFDQTtBQURBO3dDQUNNLFVBQU4sQUFBZSxXQUFVLFNBQXpCLEFBQWlDO29CQUFqQztzQkFUSixBQUNFLEFBUUUsQUFFRDtBQUZDO2dCQUVELEFBQUssTUFaVixBQUNFLEFBV2MsQUFHakI7Ozs7O0VBdkJvQixNQUFNLEE7O0FBQXZCLEEsU0FDRyxBO1NBQWUsQUFDYixBQUNQO2UsQUFGb0IsQUFHbEIsQUFzQk47QUF6QndCLEFBQ3BCOztrQkF3QlcsNkJBQWYsQUFBZSxBQUFjIiwiZmlsZSI6IkRvY3VtZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==