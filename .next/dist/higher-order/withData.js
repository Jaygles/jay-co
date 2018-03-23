'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _store = require('../common/store');

var _http = require('../common/http');

var HTTP = _interopRequireWildcard(_http);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = '/Users/jay/Desktop/code/portfolio/jay-co/higher-order/withData.js';

var skipMerge = ['initialState', 'initialProps', 'isServer', 'store'];
var storeKey = '__NEXT_REDUX_STORE__';

var getInitialStateData = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
    var usersRequest, users, postsRequest, posts, commentsRequest, comments, post;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return HTTP.getAllUsers();

          case 2:
            usersRequest = _context.sent;
            _context.next = 5;
            return usersRequest.json();

          case 5:
            users = _context.sent;
            _context.next = 8;
            return HTTP.getAllPosts();

          case 8:
            postsRequest = _context.sent;
            _context.next = 11;
            return postsRequest.json();

          case 11:
            posts = _context.sent;
            _context.next = 14;
            return HTTP.getAllComments();

          case 14:
            commentsRequest = _context.sent;
            _context.next = 17;
            return commentsRequest.json();

          case 17:
            comments = _context.sent;
            post = void 0;

            if (ctx.query) {
              post = posts.find(function (p) {
                return '' + p.id === ctx.query.id;
              });
            }

            return _context.abrupt('return', {
              post: post,
              users: users,
              posts: posts,
              comments: comments,
              isAuthenticated: ctx.req.isAuthenticated()
              // viewer: ctx.req.user,
            });

          case 21:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getInitialStateData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var initializeReduxStore = function initializeReduxStore(ctx, initialState) {
  var req = ctx.req;

  if (!process.browser) {
    if (!req._store) {
      req._store = (0, _store.initStore)(initialState);
    }

    return req._store;
  }

  if (!window[storeKey]) {
    window[storeKey] = (0, _store.initStore)(initialState);
  }

  return window[storeKey];
};

var composeComponentWithData = function composeComponentWithData(options, mapStateToProps) {
  return function (ComposedComponent) {
    var connectedComponent = _reactRedux.connect.apply(null, [mapStateToProps])(ComposedComponent);

    return function (_React$Component) {
      (0, _inherits3.default)(WithDataHigherOrder, _React$Component);

      function WithDataHigherOrder() {
        (0, _classCallCheck3.default)(this, WithDataHigherOrder);

        return (0, _possibleConstructorReturn3.default)(this, (WithDataHigherOrder.__proto__ || (0, _getPrototypeOf2.default)(WithDataHigherOrder)).apply(this, arguments));
      }

      (0, _createClass3.default)(WithDataHigherOrder, [{
        key: 'render',
        value: function render() {
          var _this3 = this;

          var _props = this.props,
              initialState = _props.initialState,
              initialProps = _props.initialProps,
              store = _props.store;

          var hasStore = store && store.dispatch && store.getState;
          var providerStore = hasStore ? this.props.store : initializeReduxStore({}, initialState);

          var mergedProps = {};

          (0, _keys2.default)(this.props).forEach(function (p) {
            if (!~skipMerge.indexOf(p)) {
              mergedProps[p] = _this3.props[p];
            }
          });

          (0, _keys2.default)(initialProps).forEach(function (p) {
            mergedProps[p] = initialProps[p];
          });

          return React.createElement(_reactRedux.Provider, { store: providerStore, __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          }, React.createElement(connectedComponent, mergedProps));
        }
      }], [{
        key: 'getInitialProps',
        value: function () {
          var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx) {
            var initialState, store;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    initialState = (0, _extends3.default)({}, options.state);

                    if (!ctx.req) {
                      _context2.next = 9;
                      break;
                    }

                    _context2.t0 = _extends3.default;
                    _context2.t1 = {};
                    _context2.t2 = initialState;
                    _context2.next = 7;
                    return getInitialStateData(ctx);

                  case 7:
                    _context2.t3 = _context2.sent;
                    initialState = (0, _context2.t0)(_context2.t1, _context2.t2, _context2.t3);

                  case 9:
                    store = initializeReduxStore(ctx, initialState);
                    _context2.t4 = store;

                    if (!ComposedComponent.getInitialProps) {
                      _context2.next = 17;
                      break;
                    }

                    _context2.next = 14;
                    return ComposedComponent.getInitialProps(ctx);

                  case 14:
                    _context2.t5 = _context2.sent;
                    _context2.next = 18;
                    break;

                  case 17:
                    _context2.t5 = {};

                  case 18:
                    _context2.t6 = _context2.t5;
                    _context2.t7 = initialState;
                    return _context2.abrupt('return', {
                      store: _context2.t4,
                      initialProps: _context2.t6,
                      initialState: _context2.t7
                    });

                  case 21:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function getInitialProps(_x2) {
            return _ref2.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      return WithDataHigherOrder;
    }(React.Component);
  };
};

var withData = function withData() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mapStateToProps = arguments[1];
  return composeComponentWithData(options, mapStateToProps);
};

exports.default = withData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hlci1vcmRlci93aXRoRGF0YS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3ZpZGVyIiwiY29ubmVjdCIsImluaXRTdG9yZSIsIkhUVFAiLCJza2lwTWVyZ2UiLCJzdG9yZUtleSIsImdldEluaXRpYWxTdGF0ZURhdGEiLCJjdHgiLCJnZXRBbGxVc2VycyIsInVzZXJzUmVxdWVzdCIsImpzb24iLCJ1c2VycyIsImdldEFsbFBvc3RzIiwicG9zdHNSZXF1ZXN0IiwicG9zdHMiLCJnZXRBbGxDb21tZW50cyIsImNvbW1lbnRzUmVxdWVzdCIsImNvbW1lbnRzIiwicG9zdCIsInF1ZXJ5IiwiZmluZCIsInAiLCJpZCIsImlzQXV0aGVudGljYXRlZCIsInJlcSIsImluaXRpYWxpemVSZWR1eFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwicHJvY2VzcyIsImJyb3dzZXIiLCJfc3RvcmUiLCJ3aW5kb3ciLCJjb21wb3NlQ29tcG9uZW50V2l0aERhdGEiLCJvcHRpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwiQ29tcG9zZWRDb21wb25lbnQiLCJjb25uZWN0ZWRDb21wb25lbnQiLCJhcHBseSIsInByb3BzIiwiaW5pdGlhbFByb3BzIiwic3RvcmUiLCJoYXNTdG9yZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJwcm92aWRlclN0b3JlIiwibWVyZ2VkUHJvcHMiLCJmb3JFYWNoIiwiaW5kZXhPZiIsImNyZWF0ZUVsZW1lbnQiLCJzdGF0ZSIsImdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsIndpdGhEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBUyxBQUFVOztBQUNuQixBQUFTLEFBQWlCOztBQUMxQixBQUFPOztJQUFQLEFBQVksQUFBVTs7Ozs7Ozs7O0FBRXRCLElBQU0sWUFBWSxDQUFBLEFBQUMsZ0JBQUQsQUFBaUIsZ0JBQWpCLEFBQWlDLFlB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Q0FBUyxPQUFWLEFBQWlCO3dCQUFqQjswQkFBQSxBQUNHO0FBREg7V0FBQSxRQUNHLEFBQU0sY0FBTixBQUFvQixvQkFGekIsQUFDRSxBQUNHLEFBQXdDLEFBRzlDO0FBNUNIO0FBQUE7YUFBQTsyQkFBQTtpSEFBQSxBQUMrQixLQUQvQjs4QkFBQTs0RUFBQTt3QkFBQTttREFBQTt1QkFFUTtBQUZSLDhEQUU0QixRQUY1QixBQUVvQzs7eUJBRTVCLElBSlIsQUFJWSxLQUpaO3VDQUFBO0FBQUE7QUFBQTs7OEJBQUE7bUNBQUE7bUNBQUEsQUFLMEI7cUNBTDFCOzJCQUtrRCxvQkFMbEQsQUFLa0QsQUFBb0I7O3VCQUx0RTs2Q0FLTTtBQUxOLDJGQUFBOzt1QkFRVTtBQVJWLDRCQVFrQixxQkFBQSxBQUFxQixLQVJ2QyxBQVFrQixBQUEwQjttQ0FSNUMsQUFXTTs7eUJBQ2Msa0JBWnBCLEFBWXNDLGlCQVp0Qzt1Q0FBQTtBQUFBO0FBQUE7O3FDQUFBOzJCQWFnQixrQkFBQSxBQUFrQixnQkFibEMsQUFhZ0IsQUFBa0M7O3VCQWJsRDs2Q0FBQTtxQ0FBQTtBQUFBOzt1QkFBQTttQ0FBQSxBQWNVOzt1QkFkVjs2Q0FBQTttQ0FBQSxBQWVNOztBQWZOLHVDQVlNO0FBWk4sOENBZU07QUFmTiw4Q0FBQTtBQVdNOzt1QkFYTjt1QkFBQTtxQ0FBQTs7QUFBQTt5QkFBQTtBQUFBOzt3Q0FBQTtxQ0FBQTtBQUFBOztpQkFBQTtBQUFBO0FBQUE7O2FBQUE7TUFBeUMsTUFBekMsQUFBK0MsQUE4Q2hEO0FBckRnQztBQUFqQzs7QUF1REEsSUFBTSxXQUFXLFNBQVgsQUFBVyxXQUFBO01BQUEsQUFBQyw4RUFBRCxBQUFXO01BQVgsQUFBZSw0QkFBZjtTQUNmLHlCQUFBLEFBQXlCLFNBRFYsQUFDZixBQUFrQztBQURwQyxBQUdBOztrQkFBQSxBQUFlIiwiZmlsZSI6IndpdGhEYXRhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==