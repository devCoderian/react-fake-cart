webpackHotUpdate_N_E("pages/product",{

/***/ "./components/MenuHeader.js":
/*!**********************************!*\
  !*** ./components/MenuHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _OrderList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OrderList */ "./components/OrderList.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\MenuHeader.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var MenuHeader = function MenuHeader() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var logout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["logoutRequestAction"])()); //Home으로 이동시키기
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      logoutLoading = _useSelector.logoutLoading; // const { Order, diff }  = useSelector((state) => {
  //   return{
  //   Order:state.cart.Order,
  //   diff: state.cart.diff
  //   }
  // }, shallowEqual);


  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.cart;
  }),
      Order = _useSelector2.Order; //   const cal = useMemo(() =>{
  //     let total =  Order.map ((order) =>{
  //         const { quantity } = order;
  //         return quantity;
  //     }).reduce((l, r)=> l+r, 0);
  //     return total;
  // },[Order]);


  var cal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var total = Order.map(function (order) {
      return order.quantity;
    }).reduce(function (l, r) {
      return l + r;
    }, 0);
    return total;
  }, [Order]);
  var content = Order.length > 0 ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, Order.map(function (item) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 16
      }
    }, item.title, " X", item.quantity);
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 16
    }
  }, " \uC7A5\uBC14\uAD6C\uB2C8 \uAC00\uAE30 "), " ")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 12
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5C8\uC2B5\uB2C8\uB2E4."));

  var reducer = function reducer(previousValue, currentValue) {
    return previousValue + currentValue;
  };

  var cartNum = Order.length > 0 ? Order.map(function (item) {
    return item.quantity;
  }).reduce(function (l, r) {
    return l + r;
  }, 0) : 0;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    count: cartNum,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    placement: "bottomLeft",
    title: "\uC7A5\uBC14\uAD6C\uB2C8",
    content: content,
    trigger: "click",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "Cart"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: logoutLoading,
    key: "1",
    onClick: logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "Logout"));
};

_s(MenuHeader, "s7FXvPXPgOz71duGrjcR4DKudTE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = MenuHeader;
/* harmony default export */ __webpack_exports__["default"] = (MenuHeader);

var _c;

$RefreshReg$(_c, "MenuHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51SGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1lbnVIZWFkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9nb3V0IiwidXNlQ2FsbGJhY2siLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dvdXRMb2FkaW5nIiwiY2FydCIsIk9yZGVyIiwiY2FsIiwidXNlTWVtbyIsInRvdGFsIiwibWFwIiwib3JkZXIiLCJxdWFudGl0eSIsInJlZHVjZSIsImwiLCJyIiwiY29udGVudCIsImxlbmd0aCIsIml0ZW0iLCJ0aXRsZSIsInJlZHVjZXIiLCJwcmV2aW91c1ZhbHVlIiwiY3VycmVudFZhbHVlIiwiY2FydE51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU87QUFBQTs7QUFDeEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFLO0FBQzVCSCxZQUFRLENBQUNJLDBFQUFtQixFQUFwQixDQUFSLENBRDRCLENBRTlCO0FBQ0QsR0FIeUIsRUFHeEIsRUFId0IsQ0FBMUI7O0FBSUEscUJBQTBCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUFyQztBQUFBLE1BQVFDLGFBQVIsZ0JBQVFBLGFBQVIsQ0FQd0IsQ0FReEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxzQkFBbUJILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBQU4sQ0FBOUI7QUFBQSxNQUFRQyxLQUFSLGlCQUFRQSxLQUFSLENBZHdCLENBZTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxHQUFHLEdBQUdDLHFEQUFPLENBQUMsWUFBSztBQUN2QixRQUFJQyxLQUFLLEdBQUlILEtBQUssQ0FBQ0ksR0FBTixDQUFXLFVBQUNDLEtBQUQsRUFBVTtBQUM5QixhQUFPQSxLQUFLLENBQUNDLFFBQWI7QUFDSCxLQUZZLEVBRVZDLE1BRlUsQ0FFSCxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFTRCxDQUFDLEdBQUNDLENBQVg7QUFBQSxLQUZHLEVBRVcsQ0FGWCxDQUFiO0FBR0EsV0FBT04sS0FBUDtBQUNELEdBTGtCLEVBS2pCLENBQUNILEtBQUQsQ0FMaUIsQ0FBbkI7QUFRRSxNQUFNVSxPQUFPLEdBQ1hWLEtBQUssQ0FBQ1csTUFBTixHQUFjLENBQWQsR0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lYLEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNRLElBQUQsRUFBUTtBQUNsQixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUEsSUFBSSxDQUFDQyxLQUFULFFBQWtCRCxJQUFJLENBQUNOLFFBQXZCLENBQVA7QUFDRCxHQUZDLENBREosRUFJRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FBVCxNQUpGLENBREEsR0FNTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzRUFBTCxDQVBUOztBQVVBLE1BQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLGFBQUQsRUFBZ0JDLFlBQWhCO0FBQUEsV0FBaUNELGFBQWEsR0FBR0MsWUFBakQ7QUFBQSxHQUFoQjs7QUFDQSxNQUFJQyxPQUFPLEdBQUdqQixLQUFLLENBQUNXLE1BQU4sR0FBYSxDQUFiLEdBQWVYLEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNRLElBQUQ7QUFBQSxXQUFRQSxJQUFJLENBQUNOLFFBQWI7QUFBQSxHQUFWLEVBQWlDQyxNQUFqQyxDQUF3QyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFRRCxDQUFDLEdBQUNDLENBQVY7QUFBQSxHQUF4QyxFQUFxRCxDQUFyRCxDQUFmLEdBQXVFLENBQXJGO0FBRUEsU0FDRSxtRUFDQSxNQUFDLDBDQUFEO0FBQU8sU0FBSyxFQUFFUSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDRDQUFEO0FBQVMsYUFBUyxFQUFDLFlBQW5CO0FBQWdDLFNBQUssRUFBQywwQkFBdEM7QUFBNkMsV0FBTyxFQUFFUCxPQUF0RDtBQUErRCxXQUFPLEVBQUMsT0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxPQUFHLEVBQUMsR0FBWjtBQUFnQixRQUFJLEVBQUUsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURBLENBREEsRUFXQSxNQUFDLDJDQUFEO0FBQVEsV0FBTyxFQUFJWixhQUFuQjtBQUFrQyxPQUFHLEVBQUMsR0FBdEM7QUFBMEMsV0FBTyxFQUFFTixNQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEEsQ0FERjtBQWlCRCxDQTdERDs7R0FBTUgsVTtVQUNhRSx1RCxFQU1TSSx1RCxFQU9QQSx1RDs7O0tBZGZOLFU7QUErRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuNDZlN2EwYzFjYzdlNDhmNWU2ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ2FsbGJhY2ssIHVzZU1lbW99IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBCYWRnZSwgUG9wb3Zlcn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFNob3BwaW5nQ2FydE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yLCBzaGFsbG93RXF1YWx9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nb3V0UmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgT3JkZXJMaXN0IGZyb20gJy4vT3JkZXJMaXN0JztcclxuXHJcbmNvbnN0IE1lbnVIZWFkZXIgPSAoKSA9PiAge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuIFxyXG4gIGNvbnN0IGxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgLy9Ib21l7Jy866GcIOydtOuPmeyLnO2CpOq4sFxyXG4gIH0sW10pO1xyXG4gIGNvbnN0IHsgbG9nb3V0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG4gIC8vIGNvbnN0IHsgT3JkZXIsIGRpZmYgfSAgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHtcclxuICAvLyAgIHJldHVybntcclxuICAvLyAgIE9yZGVyOnN0YXRlLmNhcnQuT3JkZXIsXHJcbiAgLy8gICBkaWZmOiBzdGF0ZS5jYXJ0LmRpZmZcclxuICAvLyAgIH1cclxuICAvLyB9LCBzaGFsbG93RXF1YWwpO1xyXG4gIGNvbnN0IHsgT3JkZXIgfSAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJ0KTtcclxuLy8gICBjb25zdCBjYWwgPSB1c2VNZW1vKCgpID0+e1xyXG4vLyAgICAgbGV0IHRvdGFsID0gIE9yZGVyLm1hcCAoKG9yZGVyKSA9PntcclxuLy8gICAgICAgICBjb25zdCB7IHF1YW50aXR5IH0gPSBvcmRlcjtcclxuLy8gICAgICAgICByZXR1cm4gcXVhbnRpdHk7XHJcbi8vICAgICB9KS5yZWR1Y2UoKGwsIHIpPT4gbCtyLCAwKTtcclxuLy8gICAgIHJldHVybiB0b3RhbDtcclxuLy8gfSxbT3JkZXJdKTtcclxuXHJcbmNvbnN0IGNhbCA9IHVzZU1lbW8oKCkgPT57XHJcbiAgbGV0IHRvdGFsID0gIE9yZGVyLm1hcCAoKG9yZGVyKSA9PntcclxuICAgICAgcmV0dXJuIG9yZGVyLnF1YW50aXR5O1xyXG4gIH0pLnJlZHVjZSgobCwgcik9PiBsK3IsIDApO1xyXG4gIHJldHVybiB0b3RhbDtcclxufSxbT3JkZXJdKTtcclxuXHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICBPcmRlci5sZW5ndGg+IDA/XHJcbiAgICA8ZGl2PlxyXG4gICAgICAge09yZGVyLm1hcCgoaXRlbSk9PntcclxuICAgICAgICByZXR1cm4gPHA+e2l0ZW0udGl0bGV9IFh7aXRlbS5xdWFudGl0eX08L3A+XHJcbiAgICAgIH0pfVxyXG4gICAgICA8QnV0dG9uPiA8TGluayBocmVmID1cIi9jYXJ0XCI+IOyepeuwlOq1rOuLiCDqsIDquLAgPC9MaW5rPiA8L0J1dHRvbj5cclxuICAgIDwvZGl2Pjo8ZGl2PjxwPuyepeuwlOq1rOuLiOqwgCDruYTsl4jsirXri4jri6QuPC9wPjwvZGl2PlxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgcmVkdWNlciA9IChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUgKyBjdXJyZW50VmFsdWU7XHJcbiAgbGV0IGNhcnROdW0gPSBPcmRlci5sZW5ndGg+MD9PcmRlci5tYXAoKGl0ZW0pPT5pdGVtLnF1YW50aXR5KS5yZWR1Y2UoKGwsIHIpPT5sK3IsIDApOjA7XHJcblxyXG4gIHJldHVybihcclxuICAgIDw+XHJcbiAgICA8QmFkZ2UgY291bnQ9e2NhcnROdW19PlxyXG4gICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tTGVmdFwiIHRpdGxlPSfsnqXrsJTqtazri4gnIGNvbnRlbnQ9e2NvbnRlbnR9IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICA8QnV0dG9uIGtleT1cIjJcIiBpY29uPXs8U2hvcHBpbmdDYXJ0T3V0bGluZWQgLz59PlxyXG4gICAgICB7LyogPExpbmsgaHJlZiA9XCIvY2FydFwiPiAqL31cclxuICAgICAgICBDYXJ0XHJcbiAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvUG9wb3Zlcj5cclxuICAgIDwvQmFkZ2U+XHJcbiAgICBcclxuICAgIDxCdXR0b24gbG9hZGluZyA9IHtsb2dvdXRMb2FkaW5nfSBrZXk9XCIxXCIgb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgTG9nb3V0XHJcbiAgICA8L0J1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9