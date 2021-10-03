webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/cart.js":
/*!***********************!*\
  !*** ./sagas/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");


var _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(cartSaga);


function cartSaga() {
  var _marked, _marked2, _marked3, _marked4, _marked5, _marked6, addCartAPI, addCartAction, removeCartAction, removeAllCartAction, watchAddCart, watchRemoveCart, watchRemoveAllCart;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function cartSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          watchRemoveAllCart = function _watchRemoveAllCart() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemoveAllCart$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('REMOVE_ALL_CART_REQUEST', removeAllCartAction);

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _marked6);
          };

          watchRemoveCart = function _watchRemoveCart() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemoveCart$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('REMOVE_CART_REQUEST', removeCartAction);

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _marked5);
          };

          watchAddCart = function _watchAddCart() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddCart$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('ADD_CART_REQUEST', addCartAction);

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _marked4);
          };

          removeAllCartAction = function _removeAllCartAction() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removeAllCartAction$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'REMOVE_ALL_CART_SUCCEESS'
                    });

                  case 3:
                    _context3.next = 9;
                    break;

                  case 5:
                    _context3.prev = 5;
                    _context3.t0 = _context3["catch"](0);
                    _context3.next = 9;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'REMOVE_ALL_CART_FAILURE',
                      data: _context3.t0.response.data
                    });

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _marked3, null, [[0, 5]]);
          };

          removeCartAction = function _removeCartAction(action) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removeCartAction$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'REMOVE_CART_SUCCEESS',
                      data: action.data
                    });

                  case 3:
                    _context2.next = 9;
                    break;

                  case 5:
                    _context2.prev = 5;
                    _context2.t0 = _context2["catch"](0);
                    _context2.next = 9;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'REMOVE_CART_FAILURE',
                      data: _context2.t0.response.data
                    });

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _marked2, null, [[0, 5]]);
          };

          addCartAction = function _addCartAction(action) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addCartAction$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'ADD_CART_SUCCEESS',
                      data: action.data
                    });

                  case 3:
                    _context.next = 9;
                    break;

                  case 5:
                    _context.prev = 5;
                    _context.t0 = _context["catch"](0);
                    _context.next = 9;
                    return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'ADD_CART_FAILURE',
                      data: _context.t0.response.data
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _marked, null, [[0, 5]]);
          };

          addCartAPI = function _addCartAPI(data) {
            return axios.post('/api/addCart', data); // -> 실제 서버에 요청을 보냄
          };

          _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addCartAction), _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removeCartAction), _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removeAllCartAction), _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddCart), _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemoveCart), _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemoveAllCart);
          _context7.next = 10;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddCart), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveCart), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveAllCart)]);

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvY2FydC5qcyJdLCJuYW1lcyI6WyJjYXJ0U2FnYSIsImFkZENhcnRBUEkiLCJhZGRDYXJ0QWN0aW9uIiwicmVtb3ZlQ2FydEFjdGlvbiIsInJlbW92ZUFsbENhcnRBY3Rpb24iLCJ3YXRjaEFkZENhcnQiLCJ3YXRjaFJlbW92ZUNhcnQiLCJ3YXRjaFJlbW92ZUFsbENhcnQiLCJ0YWtlTGF0ZXN0IiwicHV0IiwidHlwZSIsImRhdGEiLCJyZXNwb25zZSIsImFjdGlvbiIsImF4aW9zIiwicG9zdCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O21HQUN5QkEsUTs7QUFEekI7QUFDZSxTQUFVQSxRQUFWO0FBQUEsaUVBR0VDLFVBSEYsRUFTR0MsYUFUSCxFQXlCR0MsZ0JBekJILEVBMkNHQyxtQkEzQ0gsRUE4RERDLFlBOURDLEVBa0VEQyxlQWxFQyxFQXNFREMsa0JBdEVDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBc0VEQSw0QkF0RUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUVQLDJCQUFNQywyRUFBVSxDQUFDLHlCQUFELEVBQTRCSixtQkFBNUIsQ0FBaEI7O0FBdkVPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtFREUseUJBbEVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1FUCwyQkFBTUUsMkVBQVUsQ0FBQyxxQkFBRCxFQUF3QkwsZ0JBQXhCLENBQWhCOztBQW5FTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUE4RERFLHNCQTlEQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErRFAsMkJBQU1HLDJFQUFVLENBQUMsa0JBQUQsRUFBcUJOLGFBQXJCLENBQWhCOztBQS9ETztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEyQ0dFLDZCQTNDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlEQywyQkFBTUssb0VBQUcsQ0FBQztBQUNOQywwQkFBSSxFQUFFO0FBREEscUJBQUQsQ0FBVDs7QUFqREQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcURDLDJCQUFNRCxvRUFBRyxDQUFDO0FBQ05DLDBCQUFJLEVBQUUseUJBREE7QUFFTkMsMEJBQUksRUFBQyxhQUFJQyxRQUFKLENBQWFEO0FBRloscUJBQUQsQ0FBVDs7QUFyREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBeUJHUiwwQkF6QkgsOEJBeUJvQlUsTUF6QnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEJDLDJCQUFNSixvRUFBRyxDQUFDO0FBQ05DLDBCQUFJLEVBQUUsc0JBREE7QUFFTkMsMEJBQUksRUFBRUUsTUFBTSxDQUFDRjtBQUZQLHFCQUFELENBQVQ7O0FBOUJEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1DQywyQkFBTUYsb0VBQUcsQ0FBQztBQUNOQywwQkFBSSxFQUFFLHFCQURBO0FBRU5DLDBCQUFJLEVBQUMsYUFBSUMsUUFBSixDQUFhRDtBQUZaLHFCQUFELENBQVQ7O0FBbkNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNHVCx1QkFUSCwyQkFTaUJXLE1BVGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0MsMkJBQU1KLG9FQUFHLENBQUM7QUFDTkMsMEJBQUksRUFBRSxtQkFEQTtBQUVOQywwQkFBSSxFQUFFRSxNQUFNLENBQUNGO0FBRlAscUJBQUQsQ0FBVDs7QUFkRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQkMsMkJBQU1GLG9FQUFHLENBQUM7QUFDTkMsMEJBQUksRUFBRSxrQkFEQTtBQUVOQywwQkFBSSxFQUFDLFlBQUlDLFFBQUosQ0FBYUQ7QUFGWixxQkFBRCxDQUFUOztBQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHRVYsb0JBSEYsd0JBR2FVLElBSGIsRUFHa0I7QUFDckIsbUJBQU9HLEtBQUssQ0FBQ0MsSUFBTixDQUFXLGNBQVgsRUFBMkJKLElBQTNCLENBQVAsQ0FEcUIsQ0FFckI7QUFFSCxXQVBNOztBQUFBLHdHQVNHVCxhQVRILGtHQXlCR0MsZ0JBekJILGtHQTJDR0MsbUJBM0NILGtHQThEREMsWUE5REMsa0dBa0VEQyxlQWxFQyxrR0FzRURDLGtCQXRFQztBQUFBO0FBMEVYLGlCQUFNUyxvRUFBRyxDQUFDLENBQ05DLHFFQUFJLENBQUNaLFlBQUQsQ0FERSxFQUVOWSxxRUFBSSxDQUFDWCxlQUFELENBRkUsRUFHTlcscUVBQUksQ0FBQ1Ysa0JBQUQsQ0FIRSxDQUFELENBQVQ7O0FBMUVXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2MzMTU0NWUyMGIxZTk3YmZmNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgZGVsYXksIHB1dH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogY2FydFNhZ2EoKXtcclxuICAgIFxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRDYXJ0QVBJKGRhdGEpe1xyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9hZGRDYXJ0JywgZGF0YSlcclxuICAgICAgICAgICAgLy8gLT4g7Iuk7KCcIOyEnOuyhOyXkCDsmpTssq3snYQg67O064OEXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24qIGFkZENhcnRBY3Rpb24oYWN0aW9uKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgLy95aWVsZCBjYWxs7ZW07IScIOuhnOq3uOyduCBhcGnrpbwg7Iuk7ZaJ7ZWoXHJcbiAgICAgICAgICAgICAgICAvL2NvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGFkZENhcnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQUREX0NBUlRfU1VDQ0VFU1MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfQ0FSVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24qIHJlbW92ZUNhcnRBY3Rpb24oYWN0aW9uKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgLy95aWVsZCBjYWxs7ZW07IScIOuhnOq3uOyduCBhcGnrpbwg7Iuk7ZaJ7ZWoXHJcbiAgICAgICAgICAgICAgICAvL2NvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGFkZENhcnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX0NBUlRfU1VDQ0VFU1MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdSRU1PVkVfQ0FSVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiogcmVtb3ZlQWxsQ2FydEFjdGlvbigpe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAvL3lpZWxkIGNhbGztlbTshJwg66Gc6re47J24IGFwaeulvCDsi6TtlontlahcclxuICAgICAgICAgICAgICAgIC8vY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwoYWRkQ2FydEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX0FMTF9DQVJUX1NVQ0NFRVNTJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1JFTU9WRV9BTExfQ0FSVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uKiB3YXRjaEFkZENhcnQoKXtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdBRERfQ0FSVF9SRVFVRVNUJywgYWRkQ2FydEFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24qIHdhdGNoUmVtb3ZlQ2FydCgpe1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoJ1JFTU9WRV9DQVJUX1JFUVVFU1QnLCByZW1vdmVDYXJ0QWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiogd2F0Y2hSZW1vdmVBbGxDYXJ0KCl7XHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdCgnUkVNT1ZFX0FMTF9DQVJUX1JFUVVFU1QnLCByZW1vdmVBbGxDYXJ0QWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDYXJ0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlQ2FydCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUFsbENhcnQpLFxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9