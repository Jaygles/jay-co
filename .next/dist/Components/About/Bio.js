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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _AboutGrid = require('../Grids/AboutGrid');

var _AboutGrid2 = _interopRequireDefault(_AboutGrid);

var _Text = require('../Bits/Text');

var Text = _interopRequireWildcard(_Text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/About/Bio.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  border-radius: 25%;\n'], ['\n  width: 100%;\n  border-radius: 25%;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 80%;\n  margin-bottom: 20px;\n  text-align: justify;\n  justify-self: center;\n  align-self: stretch;\n  font-size: 28px;\n'], ['\n  width: 80%;\n  margin-bottom: 20px;\n  text-align: justify;\n  justify-self: center;\n  align-self: stretch;\n  font-size: 28px;\n']);

var BioImg = (0, _reactEmotion2.default)('img')(_templateObject);

var BioText = (0, _reactEmotion2.default)('p')(_templateObject2);

var Bio = function (_React$Component) {
  (0, _inherits3.default)(Bio, _React$Component);

  function Bio() {
    (0, _classCallCheck3.default)(this, Bio);

    return (0, _possibleConstructorReturn3.default)(this, (Bio.__proto__ || (0, _getPrototypeOf2.default)(Bio)).apply(this, arguments));
  }

  (0, _createClass3.default)(Bio, [{
    key: 'render',
    value: function render() {
      return React.createElement(_AboutGrid2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, React.createElement(BioImg, { src: '/static/mesil.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), React.createElement(BioText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Jacob Sullivan(me) is a Kansas City based web developer. He holds a Bachelors of Science in Environmental Studies as well as a certification for full stack web development from the University of Kansas. All things nerdy has been his passion from the start. His first exposure to programming was a text based adventure game he wrote in Qbasic for his third grade teacher. He does not have a background in design but enjoys spending time stretching the imagination to present his work well in the browser window.'));
    }
  }]);

  return Bio;
}(React.Component);

exports.default = Bio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvQWJvdXQvQmlvLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQWJvdXRHcmlkIiwiVGV4dCIsIkJpb0ltZyIsIkJpb1RleHQiLCJCaW8iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU87O0lBQVAsQUFBWSxBQUFVOzs7Ozs7Ozs7OztBQUV0QixJQUFNLFNBQVMsNEJBQVQsQUFBUyxBQUFPLE9BQXRCOztBQUtBLElBQU0sVUFBVSw0QkFBVixBQUFVLEFBQU8sS0FBdkI7O0lBU3FCLEE7Ozs7Ozs7Ozs7OzZCQUNWLEFBQ1A7bUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxzQkFDRSxBQUFDLFVBQU8sS0FBUixBQUFZO29CQUFaO3NCQURGLEFBQ0UsQUFDQTtBQURBO2dCQUNDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhKLEFBQ0UsQUFFRSxBQVlMOzs7OztFQWpCOEIsTUFBTSxBOztrQkFBbEIsQSIsImZpbGUiOiJCaW8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9