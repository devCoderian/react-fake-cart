webpackHotUpdate_N_E("pages/_app",{

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
  Order: [{
    quantity: 0
  } //     {
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

        console.log(order.id, action.data.id);
        Order.map(function (order) {
          if (order.id === action.data.id) {
            console.log('중복');
            order.quantity = order.quantity + 1;
            return _objectSpread(_objectSpread({}, state), {}, {
              order: {
                quantity: action.data.quantity
              },
              LoadOrderLoading: false,
              LoadOrdertDone: true
            });
          } else {
            return _objectSpread(_objectSpread({}, state), {}, {
              Order: [action.data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.Order)),
              LoadOrderLoading: false,
              LoadOrdertDone: true
            });
          }
        }); // return{
        //     ...state,
        //     Order: [action.data, ...state.Order],
        //     LoadOrderLoading: false,
        //     LoadOrdertDone: true
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2FydC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpZCIsIlVzZXIiLCJ1c2VySWQiLCJPcmRlciIsInF1YW50aXR5IiwiTG9hZE9yZGVyTG9hZGluZyIsIkxvYWRPcmRlcnREb25lIiwiTG9hZE9yZGVyRXJyb3IiLCJBRERfQ0FSVF9SRVFVRVNUIiwiQUREX0NBUlRfU1VDQ0VFU1MiLCJBRERfQ0FSVF9GQUlMVVJFIiwiYWRkQ2FydEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsIm9yZGVyIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFDVEMsSUFBRSxFQUFDLENBRE07QUFFVEMsTUFBSSxFQUFDO0FBQ0RELE1BQUUsRUFBRSxDQURIO0FBRURFLFVBQU0sRUFBRTtBQUZQLEdBRkk7QUFNVEMsT0FBSyxFQUFDLENBQUM7QUFDSEMsWUFBUSxFQUFFO0FBRFAsR0FBRCxDQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJNLEdBTkc7QUFnQmJDLGtCQUFnQixFQUFFLEtBaEJMO0FBaUJiQyxnQkFBYyxFQUFFLEtBakJIO0FBa0JiQyxnQkFBYyxFQUFFO0FBbEJILENBQXJCO0FBcUJPLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QixDLENBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ25DLFNBQU07QUFDRkMsUUFBSSxFQUFFTCxnQkFESjtBQUVGSSxRQUFJLEVBQUpBO0FBRkUsR0FBTjtBQUlILENBTE0sQyxDQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJoQixZQUF5QjtBQUFBLE1BQVhpQixNQUFXOztBQUM5QyxVQUFPQSxNQUFNLENBQUNILElBQWQ7QUFDSSxTQUFLTCxnQkFBTDtBQUFzQjtBQUVsQiwrQ0FDT08sS0FEUDtBQUVJViwwQkFBZ0IsRUFBRSxJQUZ0QjtBQUdJQyx3QkFBYyxFQUFFO0FBSHBCO0FBS0g7O0FBQ0QsU0FBS0csaUJBQUw7QUFBdUI7QUFDbkIsWUFBSU4sS0FBSyxHQUFHLDZGQUFJWSxLQUFLLENBQUNaLEtBQWIsQ0FBVDs7QUFDQWMsZUFBTyxDQUFDQyxHQUFSLENBQVlDLEtBQUssQ0FBQ25CLEVBQWxCLEVBQXFCZ0IsTUFBTSxDQUFDSixJQUFQLENBQVlaLEVBQWpDO0FBQ0FHLGFBQUssQ0FBQ2lCLEdBQU4sQ0FBVSxVQUFDRCxLQUFELEVBQVM7QUFDZixjQUFHQSxLQUFLLENBQUNuQixFQUFOLEtBQWFnQixNQUFNLENBQUNKLElBQVAsQ0FBWVosRUFBNUIsRUFBK0I7QUFDN0JpQixtQkFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNBQyxpQkFBSyxDQUFDZixRQUFOLEdBQWlCZSxLQUFLLENBQUNmLFFBQU4sR0FBZSxDQUFoQztBQUNBLG1EQUNLVyxLQURMO0FBRUVJLG1CQUFLLEVBQUM7QUFBQ2Ysd0JBQVEsRUFBQ1ksTUFBTSxDQUFDSixJQUFQLENBQVlSO0FBQXRCLGVBRlI7QUFHRUMsOEJBQWdCLEVBQUUsS0FIcEI7QUFJRUMsNEJBQWMsRUFBRTtBQUpsQjtBQU1ELFdBVEQsTUFTSztBQUNELG1EQUNPUyxLQURQO0FBRUlaLG1CQUFLLEdBQUdhLE1BQU0sQ0FBQ0osSUFBVixzR0FBbUJHLEtBQUssQ0FBQ1osS0FBekIsRUFGVDtBQUdJRSw4QkFBZ0IsRUFBRSxLQUh0QjtBQUlJQyw0QkFBYyxFQUFFO0FBSnBCO0FBTUg7QUFDRixTQWxCSCxFQUhtQixDQXdCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBQ0Q7QUFDSSxhQUFPUyxLQUFQO0FBekNSO0FBMkNILENBNUNEOztBQThDZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41YjM4NDM4ZDIyZGQxMWEwMDRkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiAnaWFuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBPcmRlcjpbe1xyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogbnVsbCxcclxuICAgICAgICAgICAgLy8gICAgIHByaWNlOiBudWxsLFxyXG4gICAgICAgICAgICAvLyAgICAgcXVhbnRpdHk6IDBcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgTG9hZE9yZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgTG9hZE9yZGVydERvbmU6IGZhbHNlLFxyXG4gICAgICAgIExvYWRPcmRlckVycm9yOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NBUlRfUkVRVUVTVCA9ICdBRERfQ0FSVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DQVJUX1NVQ0NFRVNTID0gJ0FERF9DQVJUX1NVQ0NFRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DQVJUX0ZBSUxVUkUgPSAnQUREX0NBUlRfRkFJTFVSRSc7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgYWRkQ2FydCA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm57XHJcbi8vICAgICAgICAgdHlwZTogQUREX0NBUlQsXHJcbi8vICAgICAgICAgZGF0YVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbmV4cG9ydCBjb25zdCBhZGRDYXJ0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBBRERfQ0FSVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uc3QgZHVtbXlQcm9kdWN0ID0ge1xyXG4vLyAgICAgaWQ6IDIsXHJcbi8vICAgICB0aXRsZTogXCJNZW5zIENhc3VhbCBQcmVtaXVtIFNsaW0gRml0IFQtU2hpcnRzXCIsXHJcbi8vICAgICBwcmljZTogMjIuMyxcclxuLy8gICAgIGltYWdlOiBcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9pbWcvNzEtM0hqR05EVUwuX0FDX1NZODc5Ll9TWC5fVVguX1NZLl9VWV8uanBnXCJcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgYWRkQ2FydCA9IHVzZUNhbGxiYWNrKChpdGVtKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhpdGVtLmlkLCBPcmRlcilcclxuLy8gICAgICAgY29uc3QgY2hlY2sgPSBPcmRlci5maW5kKG9yZGVyID0+b3JkZXIuaWQgPT09IGl0ZW0uaWQpO1xyXG4vLyAgICAgICBpZihjaGVjayA9PT0gdW5kZWZpbmVkKXtcclxuLy8gICAgICAgICBpdGVtLnF1YW50aXR5ID0gMTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnZmlyc3QnKVxyXG4vLyAgICAgICAgIGRpc3BhdGNoKGFkZENhcnRBY3Rpb24oaXRlbSkpOyAgXHJcbi8vICAgICAgICAgLy8gcmV0dXJuIHtpdGVtLCBxdWFudGl0eTogMX07XHJcbi8vICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgT3JkZXIubWFwKChvcmRlcik9PntcclxuLy8gICAgICAgICAgICAgICBpZihvcmRlci5pZCA9PT0gaXRlbS5pZCl7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7KSR67O1JylcclxuLy8gICAgICAgICAgICAgICAgIG9yZGVyLnF1YW50aXR5ID0gb3JkZXIucXVhbnRpdHkrMTtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFkZENhcnRBY3Rpb24ob3JkZXIpKTtcclxuLy8gICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgIH1cclxuLy8gfSxbXSk7IFxyXG5cclxuXHJcbi8vIGNvbnN0IGFkZENhcnQgPSB1c2VDYWxsYmFjaygoaXRlbSkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coaXRlbS5pZCwgT3JkZXIpXHJcbi8vICAgICAgIGNvbnN0IGNoZWNrID0gT3JkZXIuZmluZChvcmRlciA9Pm9yZGVyLmlkID09PSBpdGVtLmlkKTtcclxuLy8gICAgICAgaWYoY2hlY2sgPT09IHVuZGVmaW5lZCl7XHJcbi8vICAgICAgICAgaXRlbS5xdWFudGl0eSA9IDE7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2ZpcnN0JylcclxuLy8gICAgICAgICBkaXNwYXRjaChhZGRDYXJ0QWN0aW9uKGl0ZW0pKTsgIFxyXG4vLyAgICAgICAgIC8vIHJldHVybiB7aXRlbSwgcXVhbnRpdHk6IDF9O1xyXG4vLyAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgICAgIE9yZGVyLm1hcCgob3JkZXIpPT57XHJcbi8vICAgICAgICAgICAgICAgaWYob3JkZXIuaWQgPT09IGl0ZW0uaWQpe1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ykkeuztScpXHJcbi8vICAgICAgICAgICAgICAgICBvcmRlci5xdWFudGl0eSA9IG9yZGVyLnF1YW50aXR5KzE7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwYXRjaChhZGRDYXJ0QWN0aW9uKG9yZGVyKSk7XHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICB9XHJcbi8vIH0sW10pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQUREX0NBUlRfUkVRVUVTVDp7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgTG9hZE9yZGVyTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIExvYWRPcmRlcnREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DQVJUX1NVQ0NFRVNTOntcclxuICAgICAgICAgICAgbGV0IE9yZGVyID0gWy4uLnN0YXRlLk9yZGVyXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob3JkZXIuaWQsYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICBPcmRlci5tYXAoKG9yZGVyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYob3JkZXIuaWQgPT09IGFjdGlvbi5kYXRhLmlkKXtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ykkeuztScpXHJcbiAgICAgICAgICAgICAgICAgIG9yZGVyLnF1YW50aXR5ID0gb3JkZXIucXVhbnRpdHkrMTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOntxdWFudGl0eTphY3Rpb24uZGF0YS5xdWFudGl0eX0sXHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZE9yZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZE9yZGVydERvbmU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9yZGVyOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLk9yZGVyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZE9yZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRPcmRlcnREb25lOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHJldHVybntcclxuICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgICAgT3JkZXI6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUuT3JkZXJdLFxyXG4gICAgICAgICAgICAvLyAgICAgTG9hZE9yZGVyTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICBMb2FkT3JkZXJ0RG9uZTogdHJ1ZVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==