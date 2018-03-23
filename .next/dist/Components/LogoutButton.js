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

var _Link = require('../Components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _actions = require('../common/actions');

var Actions = _interopRequireWildcard(_actions);

var _reactRedux = require('react-redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/LogoutButton.js';


var LogoutButton = function (_React$Component) {
  (0, _inherits3.default)(LogoutButton, _React$Component);

  function LogoutButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LogoutButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LogoutButton.__proto__ || (0, _getPrototypeOf2.default)(LogoutButton)).call.apply(_ref, [this].concat(args))), _this), _this._handleLogout = function () {
      _this.props.dispatch(Actions.requestLogout());
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LogoutButton, [{
    key: 'render',
    value: function render() {
      return React.createElement(_Link2.default, { onClick: this._handleLogout, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, '\xBB Log out');
    }
  }]);

  return LogoutButton;
}(React.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(LogoutButton);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvTG9nb3V0QnV0dG9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkFjdGlvbnMiLCJjb25uZWN0IiwiTG9nb3V0QnV0dG9uIiwiX2hhbmRsZUxvZ291dCIsInByb3BzIiwiZGlzcGF0Y2giLCJyZXF1ZXN0TG9nb3V0IiwiQ29tcG9uZW50Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOztJQUFQLEFBQVksQUFBYTs7QUFDekIsQUFBUzs7Ozs7Ozs7O0lBRUgsQTs7Ozs7Ozs7Ozs7Ozs7d04sQUFDSixnQkFBZ0IsWUFBTSxBQUNwQjtZQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsUUFBcEIsQUFBb0IsQUFBUSxBQUM3QjtBOzs7Ozs2QkFFUSxBQUNQO21CQUFPLEFBQUMsZ0NBQUssU0FBUyxLQUFmLEFBQW9CO29CQUFwQjtzQkFBQTtBQUFBO09BQUEsRUFBUCxBQUFPLEFBQ1I7Ozs7O0VBUHdCLE0sQUFBTSxBQVVqQzs7MkNBQXVCLFVBQUEsQUFBQyxPQUFEO1NBQUEsQUFBVztBQUFuQixDQUFBLEVBQWYsQUFBZSxBQUEwQiIsImZpbGUiOiJMb2dvdXRCdXR0b24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pheS9EZXNrdG9wL2NvZGUvcG9ydGZvbGlvL2pheS1jbyJ9