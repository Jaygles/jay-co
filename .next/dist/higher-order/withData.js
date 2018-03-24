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
    var usersRequest, users, postsRequest, posts, commentsRequest, comments, portfoliosRequest, portfolios, post;
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
            _context.next = 20;
            return HTTP.getAllPortfolios();

          case 20:
            portfoliosRequest = _context.sent;
            _context.next = 23;
            return portfoliosRequest.json();

          case 23:
            portfolios = _context.sent;
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
              portfolios: portfolios,
              isAuthenticated: ctx.req.isAuthenticated()
              // viewer: ctx.req.user,
            });

          case 27:
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
              lineNumber: 105
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hlci1vcmRlci93aXRoRGF0YS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3ZpZGVyIiwiY29ubmVjdCIsImluaXRTdG9yZSIsIkhUVFAiLCJza2lwTWVyZ2UiLCJzdG9yZUtleSIsImdldEluaXRpYWxTdGF0ZURhdGEiLCJjdHgiLCJnZXRBbGxVc2VycyIsInVzZXJzUmVxdWVzdCIsImpzb24iLCJ1c2VycyIsImdldEFsbFBvc3RzIiwicG9zdHNSZXF1ZXN0IiwicG9zdHMiLCJnZXRBbGxDb21tZW50cyIsImNvbW1lbnRzUmVxdWVzdCIsImNvbW1lbnRzIiwiZ2V0QWxsUG9ydGZvbGlvcyIsInBvcnRmb2xpb3NSZXF1ZXN0IiwicG9ydGZvbGlvcyIsInBvc3QiLCJxdWVyeSIsImZpbmQiLCJwIiwiaWQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJyZXEiLCJpbml0aWFsaXplUmVkdXhTdG9yZSIsImluaXRpYWxTdGF0ZSIsInByb2Nlc3MiLCJicm93c2VyIiwiX3N0b3JlIiwid2luZG93IiwiY29tcG9zZUNvbXBvbmVudFdpdGhEYXRhIiwib3B0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsIkNvbXBvc2VkQ29tcG9uZW50IiwiY29ubmVjdGVkQ29tcG9uZW50IiwiYXBwbHkiLCJwcm9wcyIsImluaXRpYWxQcm9wcyIsInN0b3JlIiwiaGFzU3RvcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwicHJvdmlkZXJTdG9yZSIsIm1lcmdlZFByb3BzIiwiZm9yRWFjaCIsImluZGV4T2YiLCJjcmVhdGVFbGVtZW50Iiwic3RhdGUiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJ3aXRoRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQVMsQUFBVTs7QUFDbkIsQUFBUyxBQUFpQjs7QUFDMUIsQUFBTzs7SUFBUCxBQUFZLEFBQVU7Ozs7Ozs7OztB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