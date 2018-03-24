'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestSignup = exports.requestLogin = exports.requestLogout = exports.requestSavePortfolio = exports.requestUpdatePortfolio = exports.requestDeletePortfolio = exports.requestSavePost = exports.requestUpdatePost = exports.requestDeletePost = exports.requestDeleteComment = exports.requestUpdateComment = exports.requestSaveReply = exports.requestSaveComment = exports.viewerDelete = exports.viewerLogout = exports.viewerAuthenticated = exports.updateStoreKeys = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _http = require('../common/http');

var HTTP = _interopRequireWildcard(_http);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var exception = function exception(error) {
  throw new Error(error);
};

var redirect = function redirect(route) {
  window.location.href = route;
};

var updateStoreKeys = exports.updateStoreKeys = function updateStoreKeys(data) {
  return {
    type: 'UPDATE_STORE_KEYS',
    data: data
  };
};

var viewerAuthenticated = exports.viewerAuthenticated = function viewerAuthenticated(viewer) {
  return {
    type: 'VIEWER_AUTHENTICATED',
    isAuthenticated: true,
    viewer: viewer
  };
};

var viewerLogout = exports.viewerLogout = function viewerLogout() {
  return {
    type: 'VIEWER_LOGOUT'
  };
};

var viewerDelete = exports.viewerDelete = function viewerDelete() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return HTTP.deleteViewer();

            case 2:
              response = _context.sent;

              if (!(response.status !== 200)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return', exception('error'));

            case 5:
              return _context.abrupt('return', dispatch(requestLogout()));

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var requestSaveComment = exports.requestSaveComment = function requestSaveComment(options) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return HTTP.saveComment(options);

            case 2:
              response = _context2.sent;

              if (!(response.status !== 200)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt('return', exception('error'));

            case 5:

              window.location.reload();

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var requestSaveReply = exports.requestSaveReply = function requestSaveReply(options) {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return HTTP.saveReply(options);

            case 2:
              response = _context3.sent;

              if (!(response.status !== 200)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt('return', exception('error'));

            case 5:

              window.location.reload();

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var requestUpdateComment = exports.requestUpdateComment = function requestUpdateComment(options) {
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return HTTP.updateComment(options);

            case 2:
              response = _context4.sent;

              if (!(response.status !== 200)) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt('return', exception('error'));

            case 5:

              window.location.reload();

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var requestDeleteComment = exports.requestDeleteComment = function requestDeleteComment(options) {
  return function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return HTTP.deleteComment(options);

            case 2:
              response = _context5.sent;

              if (!(response.status !== 200)) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt('return', exception('error'));

            case 5:

              window.location.reload();

            case 6:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var requestDeletePost = exports.requestDeletePost = function requestDeletePost(id) {
  return function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return HTTP.deletePost(id);

            case 2:
              response = _context6.sent;

              if (!(response.status !== 200)) {
                _context6.next = 5;
                break;
              }

              return _context6.abrupt('return', exception('error'));

            case 5:

              window.location.reload();

            case 6:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};

var requestUpdatePost = exports.requestUpdatePost = function requestUpdatePost(data) {
  return function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return HTTP.updatePost(data);

            case 2:
              response = _context7.sent;

              if (!(response.status !== 200)) {
                _context7.next = 5;
                break;
              }

              return _context7.abrupt('return', exception('error'));

            case 5:

              window.location.reload();

            case 6:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
};

var requestSavePost = exports.requestSavePost = function requestSavePost(data) {
  return function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return HTTP.savePost(data);

            case 2:
              response = _context8.sent;

              if (!(response.status === 200)) {
                _context8.next = 5;
                break;
              }

              return _context8.abrupt('return', redirect('/'));

            case 5:
              if (!(response.status === 403)) {
                _context8.next = 7;
                break;
              }

              return _context8.abrupt('return', dispatch(requestLogout()));

            case 7:
              return _context8.abrupt('return', exception('error'));

            case 8:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this);
    }));

    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }();
};

var requestDeletePortfolio = exports.requestDeletePortfolio = function requestDeletePortfolio(id) {
  return function () {
    var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return HTTP.deletePortfolio(id);

            case 2:
              response = _context9.sent;

              if (!(response.status !== 200)) {
                _context9.next = 5;
                break;
              }

              return _context9.abrupt('return', exception('error'));

            case 5:

              window.location.reload();

            case 6:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this);
    }));

    return function (_x9) {
      return _ref9.apply(this, arguments);
    };
  }();
};

var requestUpdatePortfolio = exports.requestUpdatePortfolio = function requestUpdatePortfolio(data) {
  return function () {
    var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return HTTP.updatePortfolio(data);

            case 2:
              response = _context10.sent;

              if (!(response.status !== 200)) {
                _context10.next = 5;
                break;
              }

              return _context10.abrupt('return', exception('error'));

            case 5:

              window.location.reload();

            case 6:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, _this);
    }));

    return function (_x10) {
      return _ref10.apply(this, arguments);
    };
  }();
};

var requestSavePortfolio = exports.requestSavePortfolio = function requestSavePortfolio(data) {
  return function () {
    var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return HTTP.savePortfolio(data);

            case 2:
              response = _context11.sent;

              if (!(response.status === 200)) {
                _context11.next = 5;
                break;
              }

              return _context11.abrupt('return', redirect('/'));

            case 5:
              if (!(response.status === 403)) {
                _context11.next = 7;
                break;
              }

              return _context11.abrupt('return', dispatch(requestLogout()));

            case 7:
              return _context11.abrupt('return', exception('error'));

            case 8:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, _this);
    }));

    return function (_x11) {
      return _ref11.apply(this, arguments);
    };
  }();
};

var requestLogout = exports.requestLogout = function requestLogout() {
  return function () {
    var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return HTTP.logout();

            case 2:
              response = _context12.sent;

              if (!(response.status === 200)) {
                _context12.next = 5;
                break;
              }

              return _context12.abrupt('return', redirect('/'));

            case 5:
              if (!(response.status === 403)) {
                _context12.next = 7;
                break;
              }

              return _context12.abrupt('return', redirect('/'));

            case 7:
              return _context12.abrupt('return', exception('error'));

            case 8:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, _this);
    }));

    return function (_x12) {
      return _ref12.apply(this, arguments);
    };
  }();
};

var requestLogin = exports.requestLogin = function requestLogin(data) {
  return function () {
    var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return HTTP.login(data);

            case 2:
              response = _context13.sent;

              if (!(response.status !== 200)) {
                _context13.next = 5;
                break;
              }

              return _context13.abrupt('return', exception('error'));

            case 5:
              return _context13.abrupt('return', redirect('/'));

            case 6:
            case 'end':
              return _context13.stop();
          }
        }
      }, _callee13, _this);
    }));

    return function (_x13) {
      return _ref13.apply(this, arguments);
    };
  }();
};

var requestSignup = exports.requestSignup = function requestSignup(data) {
  return function () {
    var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(dispatch) {
      var response;
      return _regenerator2.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return HTTP.signup(data);

            case 2:
              response = _context14.sent;

              if (!(response.status !== 200)) {
                _context14.next = 5;
                break;
              }

              return _context14.abrupt('return', exception('error'));

            case 5:
              return _context14.abrupt('return', redirect('/'));

            case 6:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, _this);
    }));

    return function (_x14) {
      return _ref14.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkhUVFAiLCJleGNlcHRpb24iLCJlcnJvciIsIkVycm9yIiwicmVkaXJlY3QiLCJyb3V0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVwZGF0ZVN0b3JlS2V5cyIsImRhdGEiLCJ0eXBlIiwidmlld2VyQXV0aGVudGljYXRlZCIsInZpZXdlciIsImlzQXV0aGVudGljYXRlZCIsInZpZXdlckxvZ291dCIsInZpZXdlckRlbGV0ZSIsImRpc3BhdGNoIiwiZGVsZXRlVmlld2VyIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZXF1ZXN0TG9nb3V0IiwicmVxdWVzdFNhdmVDb21tZW50Iiwib3B0aW9ucyIsInNhdmVDb21tZW50IiwicmVsb2FkIiwicmVxdWVzdFNhdmVSZXBseSIsInNhdmVSZXBseSIsInJlcXVlc3RVcGRhdGVDb21tZW50IiwidXBkYXRlQ29tbWVudCIsInJlcXVlc3REZWxldGVDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsInJlcXVlc3REZWxldGVQb3N0IiwiaWQiLCJkZWxldGVQb3N0IiwicmVxdWVzdFVwZGF0ZVBvc3QiLCJ1cGRhdGVQb3N0IiwicmVxdWVzdFNhdmVQb3N0Iiwic2F2ZVBvc3QiLCJyZXF1ZXN0RGVsZXRlUG9ydGZvbGlvIiwiZGVsZXRlUG9ydGZvbGlvIiwicmVxdWVzdFVwZGF0ZVBvcnRmb2xpbyIsInVwZGF0ZVBvcnRmb2xpbyIsInJlcXVlc3RTYXZlUG9ydGZvbGlvIiwic2F2ZVBvcnRmb2xpbyIsImxvZ291dCIsInJlcXVlc3RMb2dpbiIsImxvZ2luIiwicmVxdWVzdFNpZ251cCIsInNpZ251cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZLEFBQVU7Ozs7Ozs7O0FBRXRCLElBQU0sWUFBWSxTQUFaLEFBQVksVUFBQSxBQUFDLE9BQVUsQUFDM0I7UUFBTSxJQUFBLEFBQUksTUFBVixBQUFNLEFBQVUsQUFDakI7QUFG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