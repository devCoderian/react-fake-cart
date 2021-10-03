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

        console.log(order.id, item.id);
        Order.map(function (order) {
          if (order.id === item.id) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2FydC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpZCIsIlVzZXIiLCJ1c2VySWQiLCJPcmRlciIsInF1YW50aXR5IiwiTG9hZE9yZGVyTG9hZGluZyIsIkxvYWRPcmRlcnREb25lIiwiTG9hZE9yZGVyRXJyb3IiLCJBRERfQ0FSVF9SRVFVRVNUIiwiQUREX0NBUlRfU1VDQ0VFU1MiLCJBRERfQ0FSVF9GQUlMVVJFIiwiYWRkQ2FydEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsIm9yZGVyIiwiaXRlbSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHO0FBQ1RDLElBQUUsRUFBQyxDQURNO0FBRVRDLE1BQUksRUFBQztBQUNERCxNQUFFLEVBQUUsQ0FESDtBQUVERSxVQUFNLEVBQUU7QUFGUCxHQUZJO0FBTVRDLE9BQUssRUFBQyxDQUFDO0FBQ0hDLFlBQVEsRUFBRTtBQURQLEdBQUQsQ0FHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSTSxHQU5HO0FBZ0JiQyxrQkFBZ0IsRUFBRSxLQWhCTDtBQWlCYkMsZ0JBQWMsRUFBRSxLQWpCSDtBQWtCYkMsZ0JBQWMsRUFBRTtBQWxCSCxDQUFyQjtBQXFCTyxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekIsQyxDQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUNuQyxTQUFNO0FBQ0ZDLFFBQUksRUFBRUwsZ0JBREo7QUFFRkksUUFBSSxFQUFKQTtBQUZFLEdBQU47QUFJSCxDQUxNLEMsQ0FPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCaEIsWUFBeUI7QUFBQSxNQUFYaUIsTUFBVzs7QUFDOUMsVUFBT0EsTUFBTSxDQUFDSCxJQUFkO0FBQ0ksU0FBS0wsZ0JBQUw7QUFBc0I7QUFFbEIsK0NBQ09PLEtBRFA7QUFFSVYsMEJBQWdCLEVBQUUsSUFGdEI7QUFHSUMsd0JBQWMsRUFBRTtBQUhwQjtBQUtIOztBQUNELFNBQUtHLGlCQUFMO0FBQXVCO0FBQ25CLFlBQUlOLEtBQUssR0FBRyw2RkFBSVksS0FBSyxDQUFDWixLQUFiLENBQVQ7O0FBQ0FjLGVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFLLENBQUNuQixFQUFsQixFQUFxQm9CLElBQUksQ0FBQ3BCLEVBQTFCO0FBQ0FHLGFBQUssQ0FBQ2tCLEdBQU4sQ0FBVSxVQUFDRixLQUFELEVBQVM7QUFDZixjQUFHQSxLQUFLLENBQUNuQixFQUFOLEtBQWFvQixJQUFJLENBQUNwQixFQUFyQixFQUF3QjtBQUN0QmlCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0FDLGlCQUFLLENBQUNmLFFBQU4sR0FBaUJlLEtBQUssQ0FBQ2YsUUFBTixHQUFlLENBQWhDO0FBQ0EsbURBQ0tXLEtBREw7QUFFRUksbUJBQUssRUFBQztBQUFDZix3QkFBUSxFQUFDWSxNQUFNLENBQUNKLElBQVAsQ0FBWVI7QUFBdEIsZUFGUjtBQUdFQyw4QkFBZ0IsRUFBRSxLQUhwQjtBQUlFQyw0QkFBYyxFQUFFO0FBSmxCO0FBTUQsV0FURCxNQVNLO0FBQ0QsbURBQ09TLEtBRFA7QUFFSVosbUJBQUssR0FBR2EsTUFBTSxDQUFDSixJQUFWLHNHQUFtQkcsS0FBSyxDQUFDWixLQUF6QixFQUZUO0FBR0lFLDhCQUFnQixFQUFFLEtBSHRCO0FBSUlDLDRCQUFjLEVBQUU7QUFKcEI7QUFNSDtBQUNGLFNBbEJILEVBSG1CLENBd0JuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFDRDtBQUNJLGFBQU9TLEtBQVA7QUF6Q1I7QUEyQ0gsQ0E1Q0Q7O0FBOENlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0LjVkMGE4ZDU3NTRhNmM4Y2ZmNTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6ICdpYW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIE9yZGVyOlt7XHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICAgICAgICAvLyAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgIC8vICAgICBxdWFudGl0eTogMFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBMb2FkT3JkZXJ0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgTG9hZE9yZGVyRXJyb3I6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ0FSVF9SRVFVRVNUID0gJ0FERF9DQVJUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NBUlRfU1VDQ0VFU1MgPSAnQUREX0NBUlRfU1VDQ0VFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NBUlRfRkFJTFVSRSA9ICdBRERfQ0FSVF9GQUlMVVJFJztcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBhZGRDYXJ0ID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybntcclxuLy8gICAgICAgICB0eXBlOiBBRERfQ0FSVCxcclxuLy8gICAgICAgICBkYXRhXHJcbi8vICAgICB9XHJcbi8vIH1cclxuZXhwb3J0IGNvbnN0IGFkZENhcnRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IEFERF9DQVJUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBkdW1teVByb2R1Y3QgPSB7XHJcbi8vICAgICBpZDogMixcclxuLy8gICAgIHRpdGxlOiBcIk1lbnMgQ2FzdWFsIFByZW1pdW0gU2xpbSBGaXQgVC1TaGlydHNcIixcclxuLy8gICAgIHByaWNlOiAyMi4zLFxyXG4vLyAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL2ltZy83MS0zSGpHTkRVTC5fQUNfU1k4NzkuX1NYLl9VWC5fU1kuX1VZXy5qcGdcIlxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBhZGRDYXJ0ID0gdXNlQ2FsbGJhY2soKGl0ZW0pID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0uaWQsIE9yZGVyKVxyXG4vLyAgICAgICBjb25zdCBjaGVjayA9IE9yZGVyLmZpbmQob3JkZXIgPT5vcmRlci5pZCA9PT0gaXRlbS5pZCk7XHJcbi8vICAgICAgIGlmKGNoZWNrID09PSB1bmRlZmluZWQpe1xyXG4vLyAgICAgICAgIGl0ZW0ucXVhbnRpdHkgPSAxO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdmaXJzdCcpXHJcbi8vICAgICAgICAgZGlzcGF0Y2goYWRkQ2FydEFjdGlvbihpdGVtKSk7ICBcclxuLy8gICAgICAgICAvLyByZXR1cm4ge2l0ZW0sIHF1YW50aXR5OiAxfTtcclxuLy8gICAgICAgfWVsc2V7XHJcbi8vICAgICAgICAgICBPcmRlci5tYXAoKG9yZGVyKT0+e1xyXG4vLyAgICAgICAgICAgICAgIGlmKG9yZGVyLmlkID09PSBpdGVtLmlkKXtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfspJHrs7UnKVxyXG4vLyAgICAgICAgICAgICAgICAgb3JkZXIucXVhbnRpdHkgPSBvcmRlci5xdWFudGl0eSsxO1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkQ2FydEFjdGlvbihvcmRlcikpO1xyXG4vLyAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgfVxyXG4vLyB9LFtdKTsgXHJcblxyXG5cclxuLy8gY29uc3QgYWRkQ2FydCA9IHVzZUNhbGxiYWNrKChpdGVtKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhpdGVtLmlkLCBPcmRlcilcclxuLy8gICAgICAgY29uc3QgY2hlY2sgPSBPcmRlci5maW5kKG9yZGVyID0+b3JkZXIuaWQgPT09IGl0ZW0uaWQpO1xyXG4vLyAgICAgICBpZihjaGVjayA9PT0gdW5kZWZpbmVkKXtcclxuLy8gICAgICAgICBpdGVtLnF1YW50aXR5ID0gMTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnZmlyc3QnKVxyXG4vLyAgICAgICAgIGRpc3BhdGNoKGFkZENhcnRBY3Rpb24oaXRlbSkpOyAgXHJcbi8vICAgICAgICAgLy8gcmV0dXJuIHtpdGVtLCBxdWFudGl0eTogMX07XHJcbi8vICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgT3JkZXIubWFwKChvcmRlcik9PntcclxuLy8gICAgICAgICAgICAgICBpZihvcmRlci5pZCA9PT0gaXRlbS5pZCl7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7KSR67O1JylcclxuLy8gICAgICAgICAgICAgICAgIG9yZGVyLnF1YW50aXR5ID0gb3JkZXIucXVhbnRpdHkrMTtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFkZENhcnRBY3Rpb24ob3JkZXIpKTtcclxuLy8gICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgIH1cclxuLy8gfSxbXSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfQ0FSVF9SRVFVRVNUOntcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgTG9hZE9yZGVydERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NBUlRfU1VDQ0VFU1M6e1xyXG4gICAgICAgICAgICBsZXQgT3JkZXIgPSBbLi4uc3RhdGUuT3JkZXJdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcmRlci5pZCxpdGVtLmlkICk7XHJcbiAgICAgICAgICAgIE9yZGVyLm1hcCgob3JkZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZihvcmRlci5pZCA9PT0gaXRlbS5pZCl7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfspJHrs7UnKVxyXG4gICAgICAgICAgICAgICAgICBvcmRlci5xdWFudGl0eSA9IG9yZGVyLnF1YW50aXR5KzE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjp7cXVhbnRpdHk6YWN0aW9uLmRhdGEucXVhbnRpdHl9LFxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRPcmRlcnREb25lOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPcmRlcjogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5PcmRlcl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkT3JkZXJ0RG9uZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyByZXR1cm57XHJcbiAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgLy8gICAgIE9yZGVyOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLk9yZGVyXSxcclxuICAgICAgICAgICAgLy8gICAgIExvYWRPcmRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgTG9hZE9yZGVydERvbmU6IHRydWVcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=