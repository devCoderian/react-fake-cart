webpackHotUpdate_N_E("pages/product",{

/***/ "./reducers/cart.js":
/*!**************************!*\
  !*** ./reducers/cart.js ***!
  \**************************/
/*! exports provided: ADD_CART_REQUEST, ADD_CART_SUCCEESS, ADD_CART_FAILURE, addCartAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_REQUEST", function() { return ADD_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_SUCCEESS", function() { return ADD_CART_SUCCEESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_FAILURE", function() { return ADD_CART_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartAction", function() { return addCartAction; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  id: 1,
  User: {
    id: 1,
    userId: 'ian'
  },
  Order: [{} //     {
  //     id: null,
  //     title: null,
  //     price: null,
  //     quantity: 0
  // }
  ],
  LoadOrderLoading: false,
  LoadOrdertDone: false,
  LoadOrderError: null
};
var ADD_CART_REQUEST = 'ADD_CART_REQUEST';
var ADD_CART_SUCCEESS = 'ADD_CART_SUCCEESS';
var ADD_CART_FAILURE = 'ADD_CART_FAILURE'; // export const addCart = (data) => {
//     return{
//         type: ADD_CART,
//         data
//     }
// }

var addCartAction = function addCartAction(data) {
  return {
    type: ADD_CART_REQUEST,
    data: data
  };
}; // const dummyProduct = {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts",
//     price: 22.3,
//     image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
// }
// const addCart = useCallback((item) => {
//     console.log(item.id, Order)
//       const check = Order.find(order =>order.id === item.id);
//       if(check === undefined){
//         item.quantity = 1;
//         console.log('first')
//         dispatch(addCartAction(item));  
//         // return {item, quantity: 1};
//       }else{
//           Order.map((order)=>{
//               if(order.id === item.id){
//                 console.log('중복')
//                 order.quantity = order.quantity+1;
//                 dispatch(addCartAction(order));
//               }
//             })
//       }
// },[]); 
// const addCart = useCallback((item) => {
//     console.log(item.id, Order)
//       const check = Order.find(order =>order.id === item.id);
//       if(check === undefined){
//         item.quantity = 1;
//         console.log('first')
//         dispatch(addCartAction(item));  
//         // return {item, quantity: 1};
//       }else{
//           Order.map((order)=>{
//               if(order.id === item.id){
//                 console.log('중복')
//                 order.quantity = order.quantity+1;
//                 dispatch(addCartAction(order));
//               }
//             })
//       }
// },[]);

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_CART_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          LoadOrderLoading: true,
          LoadOrdertDone: false
        });
      }

    case ADD_CART_SUCCEESS:
      {
        var Order = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Order);

        console.log(Order);
        Order.map(function (order) {
          if (order.id === action.data.id) {
            action.data.quantity = action.data.quantity + 1;
            console.log('first');
          } else {
            console.log('wndqhe');
            action.data.quantity = 1;
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          Order: [action.data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Order)),
          LoadOrderLoading: false,
          LoadOrdertDone: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2FydC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpZCIsIlVzZXIiLCJ1c2VySWQiLCJPcmRlciIsIkxvYWRPcmRlckxvYWRpbmciLCJMb2FkT3JkZXJ0RG9uZSIsIkxvYWRPcmRlckVycm9yIiwiQUREX0NBUlRfUkVRVUVTVCIsIkFERF9DQVJUX1NVQ0NFRVNTIiwiQUREX0NBUlRfRkFJTFVSRSIsImFkZENhcnRBY3Rpb24iLCJkYXRhIiwidHlwZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJvcmRlciIsInF1YW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFDVEMsSUFBRSxFQUFDLENBRE07QUFFVEMsTUFBSSxFQUFDO0FBQ0RELE1BQUUsRUFBRSxDQURIO0FBRURFLFVBQU0sRUFBRTtBQUZQLEdBRkk7QUFNVEMsT0FBSyxFQUFDLENBQUMsRUFBRCxDQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5NLEdBTkc7QUFjYkMsa0JBQWdCLEVBQUUsS0FkTDtBQWViQyxnQkFBYyxFQUFFLEtBZkg7QUFnQmJDLGdCQUFjLEVBQUU7QUFoQkgsQ0FBckI7QUFtQk8sSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCLEMsQ0FFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQVU7QUFDbkMsU0FBTTtBQUNGQyxRQUFJLEVBQUVMLGdCQURKO0FBRUZJLFFBQUksRUFBSkE7QUFGRSxHQUFOO0FBSUgsQ0FMTSxDLENBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QmYsWUFBeUI7QUFBQSxNQUFYZ0IsTUFBVzs7QUFDOUMsVUFBT0EsTUFBTSxDQUFDSCxJQUFkO0FBQ0ksU0FBS0wsZ0JBQUw7QUFBc0I7QUFFbEIsK0NBQ09PLEtBRFA7QUFFSVYsMEJBQWdCLEVBQUUsSUFGdEI7QUFHSUMsd0JBQWMsRUFBRTtBQUhwQjtBQUtIOztBQUNELFNBQUtHLGlCQUFMO0FBQXVCO0FBQ25CLFlBQUlMLEtBQUssR0FBRyw2RkFBSVcsS0FBSyxDQUFDWCxLQUFiLENBQVQ7O0FBQ0FhLGVBQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFaO0FBQ0FBLGFBQUssQ0FBQ2UsR0FBTixDQUFVLFVBQUNDLEtBQUQsRUFBVztBQUNqQixjQUFHQSxLQUFLLENBQUNuQixFQUFOLEtBQWFlLE1BQU0sQ0FBQ0osSUFBUCxDQUFZWCxFQUE1QixFQUErQjtBQUMzQmUsa0JBQU0sQ0FBQ0osSUFBUCxDQUFZUyxRQUFaLEdBQXVCTCxNQUFNLENBQUNKLElBQVAsQ0FBWVMsUUFBWixHQUFxQixDQUE1QztBQUNBSixtQkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNILFdBSEQsTUFHSztBQUNERCxtQkFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBRixrQkFBTSxDQUFDSixJQUFQLENBQVlTLFFBQVosR0FBdUIsQ0FBdkI7QUFDSDtBQUNKLFNBUkQ7QUFTQSwrQ0FDT04sS0FEUDtBQUVJWCxlQUFLLEdBQUVZLE1BQU0sQ0FBQ0osSUFBVCxzR0FBa0JHLEtBQUssQ0FBQ1gsS0FBeEIsRUFGVDtBQUdJQywwQkFBZ0IsRUFBRSxLQUh0QjtBQUlJQyx3QkFBYyxFQUFFO0FBSnBCO0FBTUg7O0FBQ0Q7QUFDSSxhQUFPUyxLQUFQO0FBN0JSO0FBK0JILENBaENEOztBQWtDZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5mZjVhNTUwMmIzM2Y1NDYyNTU4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiAnaWFuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBPcmRlcjpbe31cclxuICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgLy8gICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgICAgIC8vICAgICBwcmljZTogbnVsbCxcclxuICAgICAgICAgICAgLy8gICAgIHF1YW50aXR5OiAwXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIExvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIExvYWRPcmRlcnREb25lOiBmYWxzZSxcclxuICAgICAgICBMb2FkT3JkZXJFcnJvcjogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DQVJUX1JFUVVFU1QgPSAnQUREX0NBUlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0FSVF9TVUNDRUVTUyA9ICdBRERfQ0FSVF9TVUNDRUVTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0FSVF9GQUlMVVJFID0gJ0FERF9DQVJUX0ZBSUxVUkUnO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZENhcnQgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgIHR5cGU6IEFERF9DQVJULFxyXG4vLyAgICAgICAgIGRhdGFcclxuLy8gICAgIH1cclxuLy8gfVxyXG5leHBvcnQgY29uc3QgYWRkQ2FydEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogQUREX0NBUlRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IGR1bW15UHJvZHVjdCA9IHtcclxuLy8gICAgIGlkOiAyLFxyXG4vLyAgICAgdGl0bGU6IFwiTWVucyBDYXN1YWwgUHJlbWl1bSBTbGltIEZpdCBULVNoaXJ0c1wiLFxyXG4vLyAgICAgcHJpY2U6IDIyLjMsXHJcbi8vICAgICBpbWFnZTogXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vaW1nLzcxLTNIakdORFVMLl9BQ19TWTg3OS5fU1guX1VYLl9TWS5fVVlfLmpwZ1wiXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGFkZENhcnQgPSB1c2VDYWxsYmFjaygoaXRlbSkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coaXRlbS5pZCwgT3JkZXIpXHJcbi8vICAgICAgIGNvbnN0IGNoZWNrID0gT3JkZXIuZmluZChvcmRlciA9Pm9yZGVyLmlkID09PSBpdGVtLmlkKTtcclxuLy8gICAgICAgaWYoY2hlY2sgPT09IHVuZGVmaW5lZCl7XHJcbi8vICAgICAgICAgaXRlbS5xdWFudGl0eSA9IDE7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2ZpcnN0JylcclxuLy8gICAgICAgICBkaXNwYXRjaChhZGRDYXJ0QWN0aW9uKGl0ZW0pKTsgIFxyXG4vLyAgICAgICAgIC8vIHJldHVybiB7aXRlbSwgcXVhbnRpdHk6IDF9O1xyXG4vLyAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgICAgIE9yZGVyLm1hcCgob3JkZXIpPT57XHJcbi8vICAgICAgICAgICAgICAgaWYob3JkZXIuaWQgPT09IGl0ZW0uaWQpe1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ykkeuztScpXHJcbi8vICAgICAgICAgICAgICAgICBvcmRlci5xdWFudGl0eSA9IG9yZGVyLnF1YW50aXR5KzE7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwYXRjaChhZGRDYXJ0QWN0aW9uKG9yZGVyKSk7XHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICB9XHJcbi8vIH0sW10pOyBcclxuXHJcblxyXG4vLyBjb25zdCBhZGRDYXJ0ID0gdXNlQ2FsbGJhY2soKGl0ZW0pID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0uaWQsIE9yZGVyKVxyXG4vLyAgICAgICBjb25zdCBjaGVjayA9IE9yZGVyLmZpbmQob3JkZXIgPT5vcmRlci5pZCA9PT0gaXRlbS5pZCk7XHJcbi8vICAgICAgIGlmKGNoZWNrID09PSB1bmRlZmluZWQpe1xyXG4vLyAgICAgICAgIGl0ZW0ucXVhbnRpdHkgPSAxO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdmaXJzdCcpXHJcbi8vICAgICAgICAgZGlzcGF0Y2goYWRkQ2FydEFjdGlvbihpdGVtKSk7ICBcclxuLy8gICAgICAgICAvLyByZXR1cm4ge2l0ZW0sIHF1YW50aXR5OiAxfTtcclxuLy8gICAgICAgfWVsc2V7XHJcbi8vICAgICAgICAgICBPcmRlci5tYXAoKG9yZGVyKT0+e1xyXG4vLyAgICAgICAgICAgICAgIGlmKG9yZGVyLmlkID09PSBpdGVtLmlkKXtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfspJHrs7UnKVxyXG4vLyAgICAgICAgICAgICAgICAgb3JkZXIucXVhbnRpdHkgPSBvcmRlci5xdWFudGl0eSsxO1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkQ2FydEFjdGlvbihvcmRlcikpO1xyXG4vLyAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgfVxyXG4vLyB9LFtdKTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFERF9DQVJUX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIExvYWRPcmRlckxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBMb2FkT3JkZXJ0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ0FSVF9TVUNDRUVTUzp7XHJcbiAgICAgICAgICAgIGxldCBPcmRlciA9IFsuLi5zdGF0ZS5PcmRlcl07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKE9yZGVyKVxyXG4gICAgICAgICAgICBPcmRlci5tYXAoKG9yZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihvcmRlci5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLnF1YW50aXR5ID0gYWN0aW9uLmRhdGEucXVhbnRpdHkrMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlyc3QnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3duZHFoZScpXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmRhdGEucXVhbnRpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBPcmRlcjpbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLk9yZGVyXSxcclxuICAgICAgICAgICAgICAgIExvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgTG9hZE9yZGVydERvbmU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=