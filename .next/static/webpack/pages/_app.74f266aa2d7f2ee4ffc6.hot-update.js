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
          Product: [dummyProduct].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Products)),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2FydC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjYXJ0TGlzdCIsImlkIiwiVXNlciIsInVzZXJJZCIsIlByb2R1Y3RzIiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwiYWRkZWRDYXJ0IiwiQUREX0NBUlQiLCJhZGRDYXJ0IiwiZGF0YSIsInR5cGUiLCJkdW1teVByb2R1Y3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJQcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxVQUFRLEVBQUM7QUFDREMsTUFBRSxFQUFDLENBREY7QUFFREMsUUFBSSxFQUFDO0FBQ0RELFFBQUUsRUFBRSxDQURIO0FBRURFLFlBQU0sRUFBRTtBQUZQLEtBRko7QUFNREMsWUFBUSxFQUFDLENBQUM7QUFDTkgsUUFBRSxFQUFFLENBREU7QUFFTkksV0FBSyxFQUFFLHVEQUZEO0FBR05DLFdBQUssRUFBRSxNQUhEO0FBSU5DLFdBQUssRUFBRTtBQUpELEtBQUQ7QUFOUixHQURRO0FBY2pCQyxXQUFTLEVBQUU7QUFkTSxDQUFyQjtBQWlCTyxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQVU7QUFDN0IsU0FBTTtBQUNGQyxRQUFJLEVBQUVILFFBREo7QUFFRkUsUUFBSSxFQUFKQTtBQUZFLEdBQU47QUFJSCxDQUxNO0FBT1AsSUFBTUUsWUFBWSxHQUFHO0FBQ2pCWixJQUFFLEVBQUUsQ0FEYTtBQUVqQkksT0FBSyxFQUFFLHVDQUZVO0FBR2pCQyxPQUFLLEVBQUUsSUFIVTtBQUlqQkMsT0FBSyxFQUFFO0FBSlUsQ0FBckI7O0FBT0EsSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCaEIsWUFBeUI7QUFBQSxNQUFYaUIsTUFBVzs7QUFDOUMsVUFBT0EsTUFBTSxDQUFDSixJQUFkO0FBQ0ksU0FBS0gsUUFBTDtBQUFjO0FBQ1YsK0NBQ09NLEtBRFA7QUFFSUUsaUJBQU8sR0FBRUosWUFBRixzR0FBbUJFLEtBQUssQ0FBQ1gsUUFBekIsRUFGWDtBQUdJSSxtQkFBUyxFQUFFO0FBSGY7QUFLSDs7QUFDRDtBQUNJLGFBQU9PLEtBQVA7QUFUUjtBQVdILENBWkQ7O0FBY2VELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzRmMjY2YWEyZDdmMmVlNGZmYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNhcnRMaXN0OntcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogJ2lhbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUHJvZHVjdHM6W3tcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRmphbGxyYXZlbiAtIEZvbGRzYWNrIE5vLiAxIEJhY2twYWNrLCBGaXRzIDE1IExhcHRvcHNcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiAxMDkuOTUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vaW1nLzgxZlBLZC0yQVlMLl9BQ19TTDE1MDBfLmpwZ1wiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgYWRkZWRDYXJ0OiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NBUlQgPSAnQUREX0NBUlQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENhcnQgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IEFERF9DQVJULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZHVtbXlQcm9kdWN0ID0ge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogXCJNZW5zIENhc3VhbCBQcmVtaXVtIFNsaW0gRml0IFQtU2hpcnRzXCIsXHJcbiAgICBwcmljZTogMjIuMyxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9pbWcvNzEtM0hqR05EVUwuX0FDX1NZODc5Ll9TWC5fVVguX1NZLl9VWV8uanBnXCJcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQUREX0NBUlQ6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIFByb2R1Y3Q6W2R1bW15UHJvZHVjdCwgLi4uc3RhdGUuUHJvZHVjdHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRDYXJ0OiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9