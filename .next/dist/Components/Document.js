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
      }), React.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Serif',
        rel: 'stylesheet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), React.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: 'static/apple-icon-57x57.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), React.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: 'static/apple-icon-60x60.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), React.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: 'static/apple-icon-72x72.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), React.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: 'static/apple-icon-76x76.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), React.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: 'static/apple-icon-114x114.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), React.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: 'static/apple-icon-120x120.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), React.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: 'static/apple-icon-144x144.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), React.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: 'static/apple-icon-152x152.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), React.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'static/apple-icon-180x180.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), React.createElement('link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: 'static/android-icon-192x192.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), React.createElement('link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'static/favicon-32x32.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), React.createElement('link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: 'static/favicon-96x96.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), React.createElement('link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'static/favicon-16x16.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), React.createElement('link', { rel: 'manifest', href: 'static/manifest.json', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), React.createElement('meta', { name: 'msapplication-TileColor', content: '#ffffff', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), React.createElement('meta', {
        name: 'msapplication-TileImage',
        content: 'static/ms-icon-144x144.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), React.createElement('meta', { name: 'theme-color', content: '#ffffff', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvRG9jdW1lbnQuanMiXSwibmFtZXMiOlsiSGVhZCIsIlJlYWN0Iiwid2l0aEVtb3Rpb24iLCJEb2N1bWVudCIsInByb3BzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFpQjs7Ozs7Ozs7Ozs7SSxBQUVsQjs7Ozs7Ozs7Ozs7NkJBT0ssQUFDUDttQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLFFBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsZUFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFRO0FBQVI7QUFBQSxjQUFRLEFBQUssTUFEZixBQUNFLEFBQW1CLEFBQ25CLHNDQUFNLE1BQU4sQUFBVyxlQUFjLFNBQVMsS0FBQSxBQUFLLE1BQXZDLEFBQTZDO29CQUE3QztzQkFGRixBQUVFLEFBQ0E7QUFEQTt3Q0FDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBSEYsQUFHRSxBQUNBO0FBREE7d0NBQ00sU0FBTixBQUFjO29CQUFkO3NCQUpGLEFBSUUsQUFDQTtBQURBO3dDQUNNLE1BQU4sQUFBVyxhQUFZLFNBQXZCLEFBQStCO29CQUEvQjtzQkFMRixBQUtFLEFBQ0E7QUFEQTt3Q0FDTSxXQUFOLEFBQWdCLG1CQUFrQixTQUFsQyxBQUEwQztvQkFBMUM7c0JBTkYsQUFNRSxBQUNBO0FBREE7d0NBQ00sVUFBTixBQUFlLGFBQVksU0FBM0IsQUFBbUM7b0JBQW5DO3NCQVBGLEFBT0UsQUFDQTtBQURBO3dDQUNNLFVBQU4sQUFBZSxXQUFVLFNBQXpCLEFBQWlDO29CQUFqQztzQkFSRixBQVFFLEFBQ0E7QUFEQTs7Y0FDQSxBQUNPLEFBQ0w7YUFGRixBQUVNOztvQkFGTjtzQkFURixBQVNFLEFBSUE7QUFKQTtBQUNFO2FBR0YsQUFDTSxBQUNKO2VBRkYsQUFFUSxBQUNOO2NBSEYsQUFHTzs7b0JBSFA7c0JBYkYsQUFhRSxBQUtBO0FBTEE7QUFDRTthQUlGLEFBQ00sQUFDSjtlQUZGLEFBRVEsQUFDTjtjQUhGLEFBR087O29CQUhQO3NCQWxCRixBQWtCRSxBQUtBO0FBTEE7QUFDRTthQUlGLEFBQ00sQUFDSjtlQUZGLEFBRVEsQUFDTjtjQUhGLEFBR087O29CQUhQO3NCQXZCRixBQXVCRSxBQUtBO0FBTEE7QUFDRTthQUlGLEFBQ00sQUFDSjtlQUZGLEFBRVEsQUFDTjtjQUhGLEFBR087O29CQUhQO3NCQTVCRixBQTRCRSxBQUtBO0FBTEE7QUFDRTthQUlGLEFBQ00sQUFDSjtlQUZGLEFBRVEsQUFDTjtjQUhGLEFBR087O29CQUhQO3NCQWpDRixBQWlDRSxBQUtBO0FBTEE7QUFDRTthQUlGLEFBQ00sQUFDSjtlQUZGLEFBRVEsQUFDTjtjQUhGLEFBR087O29CQUhQO3NCQXRDRixBQXNDRSxBQUtBO0FBTEE7QUFDRTthQUlGLEFBQ00sQUFDSjtlQUZGLEFBRVEsQUFDTjtjQUhGLEFBR087O29CQUhQO3NCQTNDRixBQTJDRSxBQUtBO0FBTEE7QUFDRTthQUlGLEFBQ00sQUFDSjtlQUZGLEFBRVEsQUFDTjtjQUhGLEFBR087O29CQUhQO3NCQWhERixBQWdERSxBQUtBO0FBTEE7QUFDRTthQUlGLEFBQ00sQUFDSjtlQUZGLEFBRVEsQUFDTjtjQUhGLEFBR087O29CQUhQO3NCQXJERixBQXFERSxBQUtBO0FBTEE7QUFDRTthQUlGLEFBQ00sQUFDSjtjQUZGLEFBRU8sQUFDTDtlQUhGLEFBR1EsQUFDTjtjQUpGLEFBSU87O29CQUpQO3NCQTFERixBQTBERSxBQU1BO0FBTkE7QUFDRTthQUtGLEFBQ00sQUFDSjtjQUZGLEFBRU8sQUFDTDtlQUhGLEFBR1EsQUFDTjtjQUpGLEFBSU87O29CQUpQO3NCQWhFRixBQWdFRSxBQU1BO0FBTkE7QUFDRTthQUtGLEFBQ00sQUFDSjtjQUZGLEFBRU8sQUFDTDtlQUhGLEFBR1EsQUFDTjtjQUpGLEFBSU87O29CQUpQO3NCQXRFRixBQXNFRSxBQU1BO0FBTkE7QUFDRTthQUtGLEFBQ00sQUFDSjtjQUZGLEFBRU8sQUFDTDtlQUhGLEFBR1EsQUFDTjtjQUpGLEFBSU87O29CQUpQO3NCQTVFRixBQTRFRSxBQU1BO0FBTkE7QUFDRSx3Q0FLSSxLQUFOLEFBQVUsWUFBVyxNQUFyQixBQUEwQjtvQkFBMUI7c0JBbEZGLEFBa0ZFLEFBQ0E7QUFEQTt3Q0FDTSxNQUFOLEFBQVcsMkJBQTBCLFNBQXJDLEFBQTZDO29CQUE3QztzQkFuRkYsQUFtRkUsQUFDQTtBQURBOztjQUNBLEFBQ08sQUFDTDtpQkFGRixBQUVVOztvQkFGVjtzQkFwRkYsQUFvRkUsQUFJQTtBQUpBO0FBQ0Usd0NBR0ksTUFBTixBQUFXLGVBQWMsU0FBekIsQUFBaUM7b0JBQWpDO3NCQXpGSixBQUNFLEFBd0ZFLEFBRUQ7QUFGQztnQkFFRCxBQUFLLE1BNUZWLEFBQ0UsQUEyRmMsQUFHakI7Ozs7O0VBdkdvQixNQUFNLEE7O0FBQXZCLEEsU0FDRyxBO1NBQWUsQUFDYixBQUNQO2VBRm9CLEFBR2xCLEFBc0dOLEE7QUF6R3dCLEFBQ3BCOztrQkF3R1csNkJBQWYsQUFBZSxBQUFjIiwiZmlsZSI6IkRvY3VtZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==