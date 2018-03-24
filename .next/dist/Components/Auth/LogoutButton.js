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

var _Link = require('../Bits/Link');

var _Link2 = _interopRequireDefault(_Link);

var _actions = require('../../common/actions');

var Actions = _interopRequireWildcard(_actions);

var _reactRedux = require('react-redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Auth/LogoutButton.js';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvQXV0aC9Mb2dvdXRCdXR0b24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQWN0aW9ucyIsImNvbm5lY3QiLCJMb2dvdXRCdXR0b24iLCJfaGFuZGxlTG9nb3V0IiwicHJvcHMiLCJkaXNwYXRjaCIsInJlcXVlc3RMb2dvdXQiLCJDb21wb25lbnQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87O0lBQVAsQUFBWSxBQUFhOztBQUN6QixBQUFTOzs7Ozs7Ozs7SUFFSCxBOzs7Ozs7Ozs7Ozs7Ozt3TixBQUNKLGdCQUFnQixZQUFNLEFBQ3BCO1lBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxRQUFwQixBQUFvQixBQUFRLEFBQzdCO0E7Ozs7OzZCQUVRLEFBQ1A7bUJBQU8sQUFBQyxnQ0FBSyxTQUFTLEtBQWYsQUFBb0I7b0JBQXBCO3NCQUFBO0FBQUE7T0FBQSxFQUFQLEFBQU8sQUFDUjs7Ozs7RUFQd0IsTSxBQUFNLEFBVWpDOzsyQ0FBdUIsVUFBQSxBQUFDLE9BQUQ7U0FBQSxBQUFXO0FBQW5CLENBQUEsRUFBZixBQUFlLEFBQTBCIiwiZmlsZSI6IkxvZ291dEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamF5L0Rlc2t0b3AvY29kZS9wb3J0Zm9saW8vamF5LWNvIn0=