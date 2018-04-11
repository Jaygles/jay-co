'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _AnimationCSS = require('./AnimationCSS');

var _AnimationCSS2 = _interopRequireDefault(_AnimationCSS);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Animation/AnimationContainer.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n        transform: scale3d(\n          ', ',\n          ', ',\n          ', '\n        );\n      '], ['\n        transform: scale3d(\n          ', ',\n          ', ',\n          ', '\n        );\n      ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n        grid-area: animation;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        ', ';\n      '], ['\n        grid-area: animation;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        ', ';\n      ']);

var scale = void 0;

var AnimationWrap = React.createElement('div', { className: _AnimationCSS2.default, __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
});

var AnimationContainer = function (_React$Component) {
  (0, _inherits3.default)(AnimationContainer, _React$Component);

  function AnimationContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AnimationContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AnimationContainer.__proto__ || (0, _getPrototypeOf2.default)(AnimationContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      width: 1200,
      height: 0
    }, _this.componentWillMount = function () {
      if (typeof window !== 'undefined') {
        _this._updateWindowDimensions();
        scale = function scale(width) {
          return (0, _reactEmotion.css)(_templateObject, window.innerHeight / 1000, window.innerHeight / 1000, window.innerHeight / 1000);
        };
        AnimationWrap = (0, _reactEmotion2.default)('div')(_templateObject2, scale);
      }
    }, _this.componentDidMount = function () {
      _this._updateWindowDimensions();
      _this.forceUpdate();
      console.log('did');
      console.log(typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window));
      window.addEventListener('resize', _this._updateWindowDimensions);
    }, _this.componentWillUnmount = function () {
      window.removeEventListener('resize', _this._updateWindowDimensions);
    }, _this._updateWindowDimensions = function () {
      if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) !== undefined) {
        _this.setState({
          width: window.innerWidth || 1200,
          height: window.innerHeight || 1200
        });
        _this.forceUpdate();
      } else {
        _this.setState({ width: 1200, height: 1000 });
      }
    }, _this.renderLoaded = function () {
      return React.createElement(AnimationWrap, { className: _AnimationCSS2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, React.createElement('section', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, React.createElement('div', { id: 'cube', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, React.createElement('figure', { className: 'front', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), React.createElement('figure', { className: 'back', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), React.createElement('figure', { className: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), React.createElement('figure', { className: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), React.createElement('figure', { className: 'top', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), React.createElement('figure', { className: 'bottom', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, React.createElement('div', { className: 'a', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), React.createElement('div', { className: 'b', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, React.createElement('div', { className: 'ba', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), React.createElement('div', { className: 'bb', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), React.createElement('div', { className: 'bc', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), React.createElement('div', { className: 'bd', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), React.createElement('div', { className: 'be', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), React.createElement('div', { className: 'bf', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), React.createElement('div', { className: 'c', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), React.createElement('div', { className: 'd', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, React.createElement('div', { className: 'da', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), React.createElement('div', { className: 'db', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), React.createElement('div', { className: 'dc', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), React.createElement('div', { className: 'dd', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), React.createElement('div', { className: 'de', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), React.createElement('div', { className: 'df', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), React.createElement('div', { className: 'e', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, React.createElement('div', { className: 'ea', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), React.createElement('div', { className: 'eb', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), React.createElement('div', { className: 'ec', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), React.createElement('div', { className: 'ed', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), React.createElement('div', { className: 'ee', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), React.createElement('div', { className: 'ef', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), React.createElement('div', { className: 'eg', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), React.createElement('div', { className: 'eh', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), React.createElement('div', { className: 'ei', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), React.createElement('div', { className: 'ej', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), React.createElement('div', { className: 'ek', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })), React.createElement('div', { className: 'f', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, React.createElement('div', { className: 'fa', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), React.createElement('div', { className: 'fb', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), React.createElement('div', { className: 'fc', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), React.createElement('div', { className: 'fd', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), React.createElement('div', { className: 'fe', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), React.createElement('div', { className: 'ff', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), React.createElement('div', { className: 'g', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), React.createElement('div', { className: 'h', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, React.createElement('div', { className: 'ha', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), React.createElement('div', { className: 'hb', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), React.createElement('div', { className: 'hc', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), React.createElement('div', { className: 'hd', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), React.createElement('div', { className: 'he', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), React.createElement('div', { className: 'hf', __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })), React.createElement('div', { className: 'i', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }))), React.createElement('div', { className: 'bldg', __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, React.createElement('div', { className: 'bldg-a', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, React.createElement('div', { className: 'bldg-a-wa', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), React.createElement('div', { className: 'bldg-a-wb', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), React.createElement('div', { className: 'bldg-a-wc', __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), React.createElement('div', { className: 'bldg-a-wd', __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), React.createElement('div', { className: 'bldg-a-we', __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), React.createElement('div', { className: 'bldg-a-wf', __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), React.createElement('div', { className: 'bldg-a-wg', __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), React.createElement('div', { className: 'bldg-a-wh', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      })), React.createElement('div', { className: 'bldg-b', __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, React.createElement('div', { className: 'bldg-b-wa', __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), React.createElement('div', { className: 'bldg-b-wb', __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), React.createElement('div', { className: 'bldg-b-wc', __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), React.createElement('div', { className: 'bldg-b-wd', __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), React.createElement('div', { className: 'bldg-b-we', __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), React.createElement('div', { className: 'bldg-b-wf', __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), React.createElement('div', { className: 'bldg-b-wg', __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), React.createElement('div', { className: 'bldg-b-wh', __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })), React.createElement('div', { className: 'bldg-c', __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, React.createElement('div', { className: 'bldg-c-wa', __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), React.createElement('div', { className: 'bldg-c-wb', __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), React.createElement('div', { className: 'bldg-c-wc', __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), React.createElement('div', { className: 'bldg-c-wd', __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), React.createElement('div', { className: 'bldg-c-we', __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), React.createElement('div', { className: 'bldg-c-wf', __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), React.createElement('div', { className: 'bldg-c-d', __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      })), React.createElement('div', { className: 'bldg-d', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, React.createElement('div', { className: 'bldg-d-wa', __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), React.createElement('div', { className: 'bldg-d-wb', __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), React.createElement('div', { className: 'bldg-d-wc', __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), React.createElement('div', { className: 'bldg-d-wd', __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), React.createElement('div', { className: 'bldg-d-we', __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), React.createElement('div', { className: 'bldg-d-wf', __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }), React.createElement('div', { className: 'bldg-d-wg', __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }), React.createElement('div', { className: 'bldg-d-wh', __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      })), React.createElement('div', { className: 'bldg-sign', __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, React.createElement('p', { className: 'bldg-sign-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, 'WESTERN AUTO')), React.createElement('div', { className: 'bldg-sign-pole-a', __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }), React.createElement('div', { className: 'bldg-sign-pole-b', __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      })), React.createElement('div', { className: 'stop-a', __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, React.createElement('div', { className: 'stop-aa', __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }), React.createElement('div', { className: 'stop-ab', __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }), React.createElement('div', { className: 'stop-ac', __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }), React.createElement('div', { className: 'stop-ad', __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }), React.createElement('div', { className: 'stop-a-sign', __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, React.createElement('span', { className: 'stop-a-sign-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, 'STOP'))), React.createElement('div', { className: 'store', __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, React.createElement('div', { className: 'store-a', __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, React.createElement('div', { className: 'store-aa', __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }), React.createElement('div', { className: 'store-ab', __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }), React.createElement('div', { className: 'store-ac', __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }), React.createElement('div', { className: 'store-ad', __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), React.createElement('div', { className: 'store-ae', __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }), React.createElement('div', { className: 'store-af', __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }), React.createElement('div', { className: 'store-ag', __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), React.createElement('div', { className: 'store-ah', __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }), React.createElement('div', { className: 'store-ai', __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), React.createElement('div', { className: 'store-aj', __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }), React.createElement('div', { className: 'store-ak', __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }), React.createElement('div', { className: 'store-al', __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), React.createElement('div', { className: 'store-am', __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }), React.createElement('div', { className: 'store-an', __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }), React.createElement('div', { className: 'store-ao', __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), React.createElement('div', { className: 'store-ap', __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }), React.createElement('div', { className: 'store-aq', __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), React.createElement('div', { className: 'store-ar', __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), React.createElement('div', { className: 'store-as', __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), React.createElement('div', { className: 'store-at', __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }), React.createElement('div', { className: 'store-au', __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }), React.createElement('div', { className: 'store-av', __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), React.createElement('div', { className: 'store-aw', __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }), React.createElement('div', { className: 'store-ax', __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }), React.createElement('div', { className: 'store-ay', __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), React.createElement('div', { className: 'store-az', __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      })), React.createElement('div', { className: 'store-b', __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, React.createElement('div', { className: 'store-b-a', __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), React.createElement('div', { className: 'store-b-b', __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      })), React.createElement('div', { className: 'store-c', __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }), React.createElement('div', { className: 'store-d', __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, React.createElement('div', { className: 'store-d-wa', __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }), React.createElement('div', { className: 'store-d-wb', __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }), React.createElement('div', { className: 'store-d-sign', __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, React.createElement('p', { className: 'store-d-sign-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, 'IT\'S A BEAUTIFUL DAY')), React.createElement('div', { className: 'store-d-d', __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      })), React.createElement('div', { className: 'store-e', __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      })), React.createElement('div', { className: 'tree', __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, React.createElement('div', { className: 'tree-a', __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }), React.createElement('div', { className: 'tree-b', __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }), React.createElement('div', { className: 'tree-c', __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }), React.createElement('div', { className: 'tree-d', __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }), React.createElement('div', { className: 'tree-e', __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }), React.createElement('div', { className: 'tree-f', __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }), React.createElement('div', { className: 'tree-g', __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }), React.createElement('div', { className: 'tree-h', __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }), React.createElement('div', { className: 'tree-i', __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), React.createElement('div', { className: 'tree-j', __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }), React.createElement('div', { className: 'tree-k', __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }), React.createElement('div', { className: 'tree-l', __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }), React.createElement('div', { className: 'tree-m', __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }), React.createElement('div', { className: 'tree-n', __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }), React.createElement('div', { className: 'tree-o', __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }), React.createElement('div', { className: 'tree-p', __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      })), React.createElement('div', { className: 'stop-b', __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, React.createElement('div', { className: 'stop-ba', __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }), React.createElement('div', { className: 'stop-bb', __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }), React.createElement('div', { className: 'stop-bc', __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }), React.createElement('div', { className: 'stop-bd', __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }), React.createElement('div', { className: 'stop-b-sign', __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, React.createElement('span', { className: 'stop-b-sign-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, 'STOP'))), React.createElement('div', { className: 'pole', __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, React.createElement('div', { className: 'pole-a', __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }), React.createElement('div', { className: 'pole-b', __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }), React.createElement('div', { className: 'pole-c', __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }), React.createElement('div', { className: 'pole-d', __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }), React.createElement('div', { className: 'pole-sign', __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, React.createElement('p', { className: 'pole-sign-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, 'BUS')), React.createElement('div', { className: 'pole-sign-back', __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      })), React.createElement('div', { className: 'bus-stop', __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, React.createElement('div', { className: 'bus-stop-a', __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }), React.createElement('div', { className: 'bus-stop-b', __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }), React.createElement('div', { className: 'bus-stop-c', __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }), React.createElement('div', { className: 'bus-stop-d', __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }))));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AnimationContainer, [{
    key: 'render',
    value: function render() {
      var isLoaded = typeof window !== 'undefined' ? this.renderLoaded() : React.createElement('div', { className: _AnimationCSS2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      });

      return isLoaded;
    }
  }]);

  return AnimationContainer;
}(React.Component);

exports.default = AnimationContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvQW5pbWF0aW9uL0FuaW1hdGlvbkNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkFuaW1hdGlvbkNTUyIsInN0eWxlZCIsImNzcyIsInNjYWxlIiwiQW5pbWF0aW9uV3JhcCIsIkFuaW1hdGlvbkNvbnRhaW5lciIsInN0YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJ3aW5kb3ciLCJfdXBkYXRlV2luZG93RGltZW5zaW9ucyIsImlubmVySGVpZ2h0IiwiY29tcG9uZW50RGlkTW91bnQiLCJmb3JjZVVwZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJpbm5lcldpZHRoIiwicmVuZGVyTG9hZGVkIiwiaXNMb2FkZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVU7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBSSxhQUFKOztBQUVBLElBQUksNkNBQWdCLEFBQUssQUFBVztjQUFoQjtnQkFBcEIsQUFBb0I7QUFBQTtDQUFBOztJLEFBRWQ7Ozs7Ozs7Ozs7Ozs7O29PQUNKLEE7YUFBUSxBQUNDLEFBQ1A7YyxBQUZNLEFBRUU7QUFGRixBQUNOLGEsQUFJRixxQkFBcUIsWUFBTSxBQUN6QjtVQUFJLE9BQUEsQUFBTyxXQUFYLEFBQXNCLGFBQWEsQUFDakM7Y0FBQSxBQUFLLEFBQ0w7Z0JBQVEsZUFBQSxBQUFDLE9BQUQ7aUJBQUEsQUFBVyx3Q0FFYixPQUFBLEFBQU8sY0FGTCxBQUVtQixNQUNyQixPQUFBLEFBQU8sY0FITCxBQUdtQixNQUNyQixPQUFBLEFBQU8sY0FKTCxBQUltQjtBQUozQixBQU9B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QUFMLEFBQWU7b0JBQWY7c0JBSEYsQUFHRSxBQUNBO0FBREE7dUNBQ0ssV0FBTCxBQUFlO29CQUFmO3NCQUpGLEFBSUUsQUFDQTtBQURBO2dCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO2VBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBTkosQUFLRSxBQUNFLEFBRUYsc0NBQUssV0FBTCxBQUFlO29CQUFmO3NCQWpNSixBQXlMRSxBQVFFLEFBRUY7QUFGRTtpQkFFRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtzQ0FDTyxXQUFMLEFBQWU7b0JBQWY7c0JBREYsQUFDRSxBQUNBO0FBREE7dUNBQ0ssV0FBTCxBQUFlO29CQUFmO3NCQUZGLEFBRUUsQUFDQTtBQURBO3VDQUNLLFdBQUwsQUFBZTtvQkFBZjtzQkFIRixBQUdFLEFBQ0E7QUFEQTt1Q0FDSyxXQUFMLEFBQWU7b0JBQWY7c0JBek1SLEFBQ0UsQUFDRSxBQW1NRSxBQUlFLEFBS1Q7QUFMUzs7QTs7Ozs7NkJBT0QsQUFDUDtVQUFJLFdBQ0YsT0FBQSxBQUFPLFdBQVAsQUFBa0IsY0FDaEIsS0FERixBQUNFLEFBQUssOENBRUwsQUFBSyxBQUFXO29CQUFoQjtzQkFKSixBQUlJLEFBR0o7QUFISTtPQUFBOzthQUdKLEFBQU8sQUFDUjs7Ozs7RUE1UThCLE1BQU0sQSxBQStRdkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQW5pbWF0aW9uQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==