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

var _Input = require('../Bits/Input');

var _Input2 = _interopRequireDefault(_Input);

var _actions = require('../../common/actions');

var Actions = _interopRequireWildcard(_actions);

var _reactRedux = require('react-redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/Components/Portfolios/PortfolioForm.js';


var PortfolioForm = function (_React$Component) {
  (0, _inherits3.default)(PortfolioForm, _React$Component);

  function PortfolioForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PortfolioForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PortfolioForm.__proto__ || (0, _getPrototypeOf2.default)(PortfolioForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      description: '',
      title: '',
      img: ''
    }, _this._handleTitleChange = function (e) {
      _this.setState({ title: e.target.value });
    }, _this._handleDescriptionChange = function (e) {
      _this.setState({ description: e.target.value });
    }, _this._handleImgChange = function (e) {
      _this.setState({ img: e.target.value });
    }, _this._handleSave = function () {
      console.log(_this.state);
      _this.props.dispatch(Actions.requestSavePortfolio({
        img: _this.state.img,
        description: _this.state.description,
        title: _this.state.title
      }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PortfolioForm, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { style: this.props.style, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
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
          lineNumber: 41
        }
      }), React.createElement(_Textarea2.default, {
        onChange: this._handleDescriptionChange,
        placeholder: 'Description',
        fontSize: '16px',
        lineHeight: '24px',
        value: this.state.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), React.createElement(_Input2.default, {
        onChange: this._handleImgChange,
        value: this.state.img,
        placeholder: 'image src',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), React.createElement(_Button2.default, { onClick: this._handleSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Save'));
    }
  }]);

  return PortfolioForm;
}(React.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(PortfolioForm);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvUG9ydGZvbGlvcy9Qb3J0Zm9saW9Gb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGV4dGFyZWEiLCJCdXR0b24iLCJJbnB1dCIsIkFjdGlvbnMiLCJjb25uZWN0IiwiUG9ydGZvbGlvRm9ybSIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsImltZyIsIl9oYW5kbGVUaXRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiX2hhbmRsZURlc2NyaXB0aW9uQ2hhbmdlIiwiX2hhbmRsZUltZ0NoYW5nZSIsIl9oYW5kbGVTYXZlIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiZGlzcGF0Y2giLCJyZXF1ZXN0U2F2ZVBvcnRmb2xpbyIsInN0eWxlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOztJQUFQLEFBQVksQUFBYTs7QUFDekIsQUFBUzs7Ozs7Ozs7O0ksQUFFSDs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDSjttQkFBUSxBQUNPLEFBQ2I7YUFGTSxBQUVDLEFBQ1A7V0FITSxBLEFBR0Q7QUFIQyxBQUNOLGFBS0YsQSxxQkFBcUIsVUFBQSxBQUFDLEdBQU0sQUFDMUI7WUFBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUEsQUFBRSxPQUF6QixBQUFjLEFBQWtCLEFBQ2pDO0EsYUFFRCxBLDJCQUEyQixVQUFBLEFBQUMsR0FBTSxBQUNoQztZQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsRUFBQSxBQUFFLE9BQS9CLEFBQWMsQUFBd0IsQUFDdkM7QSxhLEFBRUQsbUJBQW1CLFVBQUEsQUFBQyxHQUFNLEFBQ3hCO1lBQUEsQUFBSyxTQUFTLEVBQUUsS0FBSyxFQUFBLEFBQUUsT0FBdkIsQUFBYyxBQUFnQixBQUMvQjtBLGEsQUFFRCxjQUFjLFlBQU0sQUFDbEI7Y0FBQSxBQUFRLElBQUksTUFBWixBQUFpQixBQUNqQjtZQUFBLEFBQUssTUFBTCxBQUFXLGlCQUNULEFBQVE7YUFDRCxNQUFBLEFBQUssTUFEaUIsQUFDWCxBQUNoQjtxQkFBYSxNQUFBLEFBQUssTUFGUyxBQUVILEFBQ3hCO2VBQU8sTUFBQSxBQUFLLE1BSmhCLEFBQ0UsQUFBNkIsQUFHVCxBQUd2QjtBQU5nQyxBQUMzQixPQURGO0E7Ozs7OzZCQVFLLEFBQ1A7bUJBQ0UsY0FBQSxTQUFLLE9BQU8sS0FBQSxBQUFLLE1BQWpCLEFBQXVCO29CQUF2QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxRQUNFLEFBQUM7a0JBQ1csS0FEWixBQUNpQixBQUNmO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7cUJBSEYsQUFHYyxBQUNaO29CQUpGLEFBSWMsQUFDWjtvQkFMRixBQUthLEFBQ1g7a0JBTkYsQUFNVzs7b0JBTlg7c0JBREYsQUFDRSxBQVFBO0FBUkE7QUFDRSxnQkFPRixBQUFDO2tCQUNXLEtBRFosQUFDaUIsQUFDZjtxQkFGRixBQUVjLEFBQ1o7a0JBSEYsQUFHVyxBQUNUO29CQUpGLEFBSWEsQUFDWDtlQUFPLEtBQUEsQUFBSyxNQUxkLEFBS29COztvQkFMcEI7c0JBVEYsQUFTRSxBQU9BO0FBUEE7QUFDRSxnQkFNRixBQUFDO2tCQUNXLEtBRFosQUFDaUIsQUFDZjtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO3FCQUhGLEFBR2M7O29CQUhkO3NCQWhCRixBQWdCRSxBQUtBO0FBTEE7QUFDRSxnQkFJRixBQUFDLGtDQUFPLFNBQVMsS0FBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0F0QkosQUFDRSxBQXFCRSxBQUdMOzs7OztFQXhEeUIsTUFBTSxBLEFBMkRsQzs7MkNBQXVCLFVBQUEsQUFBQyxPQUFEO1NBQUEsQUFBVztBQUFuQixDQUFBLEVBQWYsQUFBZSxBQUEwQiIsImZpbGUiOiJQb3J0Zm9saW9Gb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==