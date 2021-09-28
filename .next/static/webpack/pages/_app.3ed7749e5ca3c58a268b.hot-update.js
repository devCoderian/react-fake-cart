webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/cart.js":
/*!**************************!*\
  !*** ./reducers/cart.js ***!
  \**************************/
/*! exports provided: ADD_CART, addCart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART", function() { return ADD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCart", function() { return addCart; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  cartList: {
    id: 1,
    User: {
      id: 1,
      userId: 'ian'
    },
    Products: [{
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    }]
  },
  addedCart: false
};
var ADD_CART = 'ADD_CART';
var addCart = function addCart(data) {
  return {
    type: ADD_CART,
    data: data
  };
};
var dummyProduct = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts",
  price: 22.3,
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_CART:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          Products: [dummyProduct].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Products)),
          addedCart: true
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2FydC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjYXJ0TGlzdCIsImlkIiwiVXNlciIsInVzZXJJZCIsIlByb2R1Y3RzIiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwiYWRkZWRDYXJ0IiwiQUREX0NBUlQiLCJhZGRDYXJ0IiwiZGF0YSIsInR5cGUiLCJkdW1teVByb2R1Y3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLFVBQVEsRUFBQztBQUNEQyxNQUFFLEVBQUMsQ0FERjtBQUVEQyxRQUFJLEVBQUM7QUFDREQsUUFBRSxFQUFFLENBREg7QUFFREUsWUFBTSxFQUFFO0FBRlAsS0FGSjtBQU1EQyxZQUFRLEVBQUMsQ0FBQztBQUNOSCxRQUFFLEVBQUUsQ0FERTtBQUVOSSxXQUFLLEVBQUUsdURBRkQ7QUFHTkMsV0FBSyxFQUFFLE1BSEQ7QUFJTkMsV0FBSyxFQUFFO0FBSkQsS0FBRDtBQU5SLEdBRFE7QUFjakJDLFdBQVMsRUFBRTtBQWRNLENBQXJCO0FBaUJPLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBVTtBQUM3QixTQUFNO0FBQ0ZDLFFBQUksRUFBRUgsUUFESjtBQUVGRSxRQUFJLEVBQUpBO0FBRkUsR0FBTjtBQUlILENBTE07QUFPUCxJQUFNRSxZQUFZLEdBQUc7QUFDakJaLElBQUUsRUFBRSxDQURhO0FBRWpCSSxPQUFLLEVBQUUsdUNBRlU7QUFHakJDLE9BQUssRUFBRSxJQUhVO0FBSWpCQyxPQUFLLEVBQUU7QUFKVSxDQUFyQjs7QUFPQSxJQUFNTyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJoQixZQUF5QjtBQUFBLE1BQVhpQixNQUFXOztBQUM5QyxVQUFPQSxNQUFNLENBQUNKLElBQWQ7QUFDSSxTQUFLSCxRQUFMO0FBQWM7QUFDViwrQ0FDT00sS0FEUDtBQUVJWCxrQkFBUSxHQUFFUyxZQUFGLHNHQUFtQkUsS0FBSyxDQUFDWCxRQUF6QixFQUZaO0FBR0lJLG1CQUFTLEVBQUU7QUFIZjtBQUtIOztBQUNEO0FBQ0ksYUFBT08sS0FBUDtBQVRSO0FBV0gsQ0FaRDs7QUFjZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zZWQ3NzQ5ZTVjYTNjNThhMjY4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY2FydExpc3Q6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiAnaWFuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBQcm9kdWN0czpbe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJGamFsbHJhdmVuIC0gRm9sZHNhY2sgTm8uIDEgQmFja3BhY2ssIEZpdHMgMTUgTGFwdG9wc1wiLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDEwOS45NSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9pbWcvODFmUEtkLTJBWUwuX0FDX1NMMTUwMF8uanBnXCJcclxuICAgICAgICAgICAgfV1cclxuICAgIH0sXHJcbiAgICBhZGRlZENhcnQ6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ0FSVCA9ICdBRERfQ0FSVCc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2FydCA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogQUREX0NBUlQsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkdW1teVByb2R1Y3QgPSB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiBcIk1lbnMgQ2FzdWFsIFByZW1pdW0gU2xpbSBGaXQgVC1TaGlydHNcIixcclxuICAgIHByaWNlOiAyMi4zLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL2ltZy83MS0zSGpHTkRVTC5fQUNfU1k4NzkuX1NYLl9VWC5fU1kuX1VZXy5qcGdcIlxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfQ0FSVDp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgUHJvZHVjdHM6W2R1bW15UHJvZHVjdCwgLi4uc3RhdGUuUHJvZHVjdHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRDYXJ0OiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9