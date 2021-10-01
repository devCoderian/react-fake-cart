webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");


var _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);


function userSaga() {
  var _marked, _marked2, _marked3, _marked4, logInAPI, logIn, logOutAPI, logOut, watchLogin, watchLogout;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          watchLogout = function _watchLogout() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogout$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('LOG_OUT_REQUEST', logOut);

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _marked4);
          };

          watchLogin = function _watchLogin() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('LOG_IN_REQUEST', logIn);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _marked3);
          };

          logOut = function _logOut(action) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

                  case 3:
                    _context2.next = 5;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'LOG_OUT_SUCCESS'
                    });

                  case 5:
                    _context2.next = 11;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](0);
                    _context2.next = 11;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'LOG_OUT_FAILURE',
                      data: _context2.t0.response.data
                    });

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _marked2, null, [[0, 7]]);
          };

          logOutAPI = function _logOutAPI() {
            return axios.post('/api/logout'); // -> 실제 서버에 요청을 보냄
          };

          logIn = function _logIn(action) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

                  case 3:
                    _context.next = 5;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'LOG_IN_SUCCESS',
                      data: action.data
                    });

                  case 5:
                    _context.next = 11;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    _context.next = 11;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'LOG_IN_FAILURE',
                      data: _context.t0.response.data
                    });

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _marked, null, [[0, 7]]);
          };

          logInAPI = function _logInAPI(data) {
            return axios.post('/api/login', data); // -> 실제 서버에 요청을 보냄
          };

          _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn), _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut), _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin), _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogout);
          _context5.next = 9;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogout)]);

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJ1c2VyU2FnYSIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dvdXQiLCJ0YWtlTGF0ZXN0IiwiYWN0aW9uIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiZGF0YSIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7bUdBQ3lCQSxROztBQUR6QjtBQUNlLFNBQVVBLFFBQVY7QUFBQSw2Q0FPRkMsUUFQRSxFQWFEQyxLQWJDLEVBK0JGQyxTQS9CRSxFQXFDREMsTUFyQ0MsRUF1RERDLFVBdkRDLEVBNkREQyxXQTdEQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZEREEscUJBN0RDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThEUCwyQkFBTUMsMkVBQVUsQ0FBQyxpQkFBRCxFQUFvQkgsTUFBcEIsQ0FBaEI7O0FBOURPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVEREMsb0JBdkRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBEUCwyQkFBTUUsMkVBQVUsQ0FBQyxnQkFBRCxFQUFtQkwsS0FBbkIsQ0FBaEI7O0FBMURPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFDREUsZ0JBckNDLG9CQXFDTUksTUFyQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5Q0gsMkJBQU1DLHNFQUFLLENBQUMsSUFBRCxDQUFYOztBQXpDRztBQUFBO0FBMENILDJCQUFNQyxvRUFBRyxDQUFDO0FBQ05DLDBCQUFJLEVBQUU7QUFEQSxxQkFBRCxDQUFUOztBQTFDRztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4Q0gsMkJBQU1ELG9FQUFHLENBQUM7QUFDTkMsMEJBQUksRUFBRSxpQkFEQTtBQUVOQywwQkFBSSxFQUFDLGFBQUlDLFFBQUosQ0FBYUQ7QUFGWixxQkFBRCxDQUFUOztBQTlDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUErQkZULG1CQS9CRSx5QkErQlM7QUFDaEIsbUJBQU9XLEtBQUssQ0FBQ0MsSUFBTixDQUFXLGFBQVgsQ0FBUCxDQURnQixDQUVoQjtBQUVILFdBbkNVOztBQWFEYixlQWJDLG1CQWFLTSxNQWJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JILDJCQUFNQyxzRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFsQkc7QUFBQTtBQW1CSCwyQkFBTUMsb0VBQUcsQ0FBQztBQUNOQywwQkFBSSxFQUFFLGdCQURBO0FBRU5DLDBCQUFJLEVBQUVKLE1BQU0sQ0FBQ0k7QUFGUCxxQkFBRCxDQUFUOztBQW5CRztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3QkgsMkJBQU1GLG9FQUFHLENBQUM7QUFDTkMsMEJBQUksRUFBRSxnQkFEQTtBQUVOQywwQkFBSSxFQUFDLFlBQUlDLFFBQUosQ0FBYUQ7QUFGWixxQkFBRCxDQUFUOztBQXhCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPRlgsa0JBUEUsc0JBT09XLElBUFAsRUFPWTtBQUNuQixtQkFBT0UsS0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUF5QkgsSUFBekIsQ0FBUCxDQURtQixDQUVuQjtBQUVILFdBWFU7O0FBQUEsd0dBYURWLEtBYkMsa0dBcUNERSxNQXJDQyxrR0F1RERDLFVBdkRDLGtHQTZEREMsV0E3REM7QUFBQTtBQWlFWCxpQkFBTVUsb0VBQUcsQ0FBQyxDQUNOQyxxRUFBSSxDQUFDWixVQUFELENBREUsRUFFTlkscUVBQUksQ0FBQ1gsV0FBRCxDQUZFLENBQUQsQ0FBVDs7QUFqRVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yN2U3YjczOTViYTkyYmIwZWJlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBwdXQsIGRlbGF5fSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpe1xyXG5cclxuICAgIC8vIGNvbnN0IGwgPSBsb2dpbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOidpYW4nfX0pXHJcbiAgICAvLyBsLm5leHQoKTsgLT4gIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGxvZ2luQXBpLCBhY3Rpb24uZGF0YSk77Jes6riw6rmM7KeAIOyLpO2WiVxyXG4gICAgLy8gbC5uZXh0KCk7IHlpZWxkIHB1dCDsi6TtlolcclxuICAgIC8vIGdlbmVyYXRl66W8IOyTsOuptCDthYzsiqTtirjtlZjquLAg7Im964ukLiBcclxuXHJcbiAgICBmdW5jdGlvbiBsb2dJbkFQSShkYXRhKXtcclxuICAgICAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpXHJcbiAgICAgICAgLy8gLT4g7Iuk7KCcIOyEnOuyhOyXkCDsmpTssq3snYQg67O064OEXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgLy95aWVsZCBjYWxs7ZW07IScIOuhnOq3uOyduCBhcGnrpbwg7Iuk7ZaJ7ZWoXHJcbiAgICAgICAgICAgIC8veWllbGQgY2FsbChsb2dpbkFwaSwgYWN0aW9uLmRhdGEpOyA9PT0gbG9naW5BcGkoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgIC8vY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnTE9HX0lOX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnTE9HX0lOX0ZBSUxVUkUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ091dEFQSSgpe1xyXG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXHJcbiAgICAgICAgLy8gLT4g7Iuk7KCcIOyEnOuyhOyXkCDsmpTssq3snYQg67O064OEXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKXtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIC8veWllbGQgY2FsbO2VtOyEnCDroZzqt7jsnbggYXBp66W8IOyLpO2Wie2VqFxyXG4gICAgICAgICAgICAvL2NvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7IC0+ICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0dfT1VUX1NVQ0NFU1MnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xPR19PVVRfRkFJTFVSRScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvL+ydtOuypO2KuCDrpqzsiqTrhIgg6rCZ7J2AIOyVoOuTpFxyXG4gICAgZnVuY3Rpb24qIHdhdGNoTG9naW4oKXtcclxuICAgICAgICAvL+u5hOuPmeq4sCDslaHshZgg7YGs66as7JeQ7J207YSwXHJcbiAgICAgICAgLy/roZzqt7jsnbjsnbTrnbzripQg7JWh7IWY7J20IOuTpOyWtOyYpOuptCDroZzqt7jsnbgg7KCc64SI66CI7J207YSw66W8IOyLpO2Wie2VmOuPhOuhnSDsnbTrsqTtirgg66as7Iqk64SIIOyXre2VoOydhCDtlZzri6QuXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdCgnTE9HX0lOX1JFUVVFU1QnLCBsb2dJbik7XHJcbiAgICAgICAgLy/roZzqt7jsnbjqtIDroKgg642w7J207YSw7JeQIOuMgO2VnCDslaHshZjsnbQgbG9nSW7tlajsiJjsl5Ag66ek6rCc67OA7IiY66GcIOyghOuLrOuQnOuLpC5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uKiB3YXRjaExvZ291dCgpe1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ091dCk7XHJcbiAgICB9XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9naW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dvdXQpXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=