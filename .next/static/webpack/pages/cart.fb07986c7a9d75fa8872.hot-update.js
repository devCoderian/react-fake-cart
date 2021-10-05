webpackHotUpdate_N_E("pages/cart",{

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
      logoutLoading = _useSelector.logoutLoading;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return {
      Order: state.cart.Order,
      diff: state.cart.diff
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]),
      Order = _useSelector2.Order,
      diff = _useSelector2.diff; // const { Order }  = useSelector(state => state.cart);


  var cal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var total = Order.map(function (order) {
      var quantity = order.quantity;
      return quantity;
    }).reduce(function (l, r) {
      return l + r;
    }, 0);
    return total;
  }, [Order, diff]);
  var cartNum = Order ? Order.length : 0;
  var content = Order.length > 0 ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, Order.map(function (item) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 16
      }
    }, item.title, " X", item.quantity);
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 16
    }
  }, " \uC7A5\uBC14\uAD6C\uB2C8 \uAC00\uAE30 "), " ")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 12
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5C8\uC2B5\uB2C8\uB2E4."));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    count: cal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "Cart"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: logoutLoading,
    key: "1",
    onClick: logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, "Logout"));
};

_s(MenuHeader, "GP6f6cwMwzcIJOtuIvj//hy6rwc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51SGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1lbnVIZWFkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9nb3V0IiwidXNlQ2FsbGJhY2siLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dvdXRMb2FkaW5nIiwiT3JkZXIiLCJjYXJ0IiwiZGlmZiIsInNoYWxsb3dFcXVhbCIsImNhbCIsInVzZU1lbW8iLCJ0b3RhbCIsIm1hcCIsIm9yZGVyIiwicXVhbnRpdHkiLCJyZWR1Y2UiLCJsIiwiciIsImNhcnROdW0iLCJsZW5ndGgiLCJjb250ZW50IiwiaXRlbSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTztBQUFBOztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQUs7QUFDNUJILFlBQVEsQ0FBQ0ksMEVBQW1CLEVBQXBCLENBQVIsQ0FENEIsQ0FFOUI7QUFDRCxHQUh5QixFQUd4QixFQUh3QixDQUExQjs7QUFJQSxxQkFBMEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXJDO0FBQUEsTUFBUUMsYUFBUixnQkFBUUEsYUFBUjs7QUFDQSxzQkFBeUJILCtEQUFXLENBQUMsVUFBQ0MsS0FBRCxFQUFXO0FBQzlDLFdBQU07QUFDTkcsV0FBSyxFQUFDSCxLQUFLLENBQUNJLElBQU4sQ0FBV0QsS0FEWDtBQUVORSxVQUFJLEVBQUVMLEtBQUssQ0FBQ0ksSUFBTixDQUFXQztBQUZYLEtBQU47QUFJRCxHQUxtQyxFQUtqQ0Msd0RBTGlDLENBQXBDO0FBQUEsTUFBUUgsS0FBUixpQkFBUUEsS0FBUjtBQUFBLE1BQWVFLElBQWYsaUJBQWVBLElBQWYsQ0FSd0IsQ0FjeEI7OztBQUNBLE1BQU1FLEdBQUcsR0FBR0MscURBQU8sQ0FBQyxZQUFLO0FBQ3ZCLFFBQUlDLEtBQUssR0FBSU4sS0FBSyxDQUFDTyxHQUFOLENBQVcsVUFBQ0MsS0FBRCxFQUFVO0FBQzlCLFVBQVFDLFFBQVIsR0FBcUJELEtBQXJCLENBQVFDLFFBQVI7QUFDQSxhQUFPQSxRQUFQO0FBQ0gsS0FIWSxFQUdWQyxNQUhVLENBR0gsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBU0QsQ0FBQyxHQUFDQyxDQUFYO0FBQUEsS0FIRyxFQUdXLENBSFgsQ0FBYjtBQUlBLFdBQU9OLEtBQVA7QUFDSCxHQU5vQixFQU1uQixDQUFDTixLQUFELEVBQVFFLElBQVIsQ0FObUIsQ0FBbkI7QUFRQSxNQUFNVyxPQUFPLEdBQUdiLEtBQUssR0FBRUEsS0FBSyxDQUFDYyxNQUFSLEdBQWdCLENBQXJDO0FBQ0EsTUFBTUMsT0FBTyxHQUNYZixLQUFLLENBQUNjLE1BQU4sR0FBYyxDQUFkLEdBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJZCxLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFDUyxJQUFELEVBQVE7QUFDbEIsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlBLElBQUksQ0FBQ0MsS0FBVCxRQUFrQkQsSUFBSSxDQUFDUCxRQUF2QixDQUFQO0FBQ0QsR0FGQyxDQURKLEVBSUUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVMsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBQVQsTUFKRixDQURBLEdBTU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0VBQUwsQ0FQVDtBQVdBLFNBQ0UsbUVBQ0EsTUFBQywwQ0FBRDtBQUFPLFNBQUssRUFBRUwsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw0Q0FBRDtBQUFTLGFBQVMsRUFBQyxZQUFuQjtBQUFnQyxTQUFLLEVBQUMsMEJBQXRDO0FBQTZDLFdBQU8sRUFBRVcsT0FBdEQ7QUFBK0QsV0FBTyxFQUFDLE9BQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsT0FBRyxFQUFDLEdBQVo7QUFBZ0IsUUFBSSxFQUFFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FEQSxDQURBLEVBV0EsTUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBSWhCLGFBQW5CO0FBQWtDLE9BQUcsRUFBQyxHQUF0QztBQUEwQyxXQUFPLEVBQUVOLE1BQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYQSxDQURGO0FBaUJELENBcEREOztHQUFNSCxVO1VBQ2FFLHVELEVBTVNJLHVELEVBQ0RBLHVEOzs7S0FSckJOLFU7QUFzRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuZmIwNzk4NmM3YTlkNzVmYTg4NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ2FsbGJhY2ssIHVzZU1lbW99IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBCYWRnZSwgUG9wb3Zlcn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFNob3BwaW5nQ2FydE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yLCBzaGFsbG93RXF1YWx9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nb3V0UmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgT3JkZXJMaXN0IGZyb20gJy4vT3JkZXJMaXN0JztcclxuXHJcbmNvbnN0IE1lbnVIZWFkZXIgPSAoKSA9PiAge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuIFxyXG4gIGNvbnN0IGxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgLy9Ib21l7Jy866GcIOydtOuPmeyLnO2CpOq4sFxyXG4gIH0sW10pO1xyXG4gIGNvbnN0IHsgbG9nb3V0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG4gIGNvbnN0IHsgT3JkZXIsIGRpZmYgfSAgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHtcclxuICAgIHJldHVybntcclxuICAgIE9yZGVyOnN0YXRlLmNhcnQuT3JkZXIsXHJcbiAgICBkaWZmOiBzdGF0ZS5jYXJ0LmRpZmZcclxuICAgIH1cclxuICB9LCBzaGFsbG93RXF1YWwpO1xyXG4gIC8vIGNvbnN0IHsgT3JkZXIgfSAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJ0KTtcclxuICBjb25zdCBjYWwgPSB1c2VNZW1vKCgpID0+e1xyXG4gICAgbGV0IHRvdGFsID0gIE9yZGVyLm1hcCAoKG9yZGVyKSA9PntcclxuICAgICAgICBjb25zdCB7IHF1YW50aXR5IH0gPSBvcmRlcjtcclxuICAgICAgICByZXR1cm4gcXVhbnRpdHk7XHJcbiAgICB9KS5yZWR1Y2UoKGwsIHIpPT4gbCtyLCAwKTtcclxuICAgIHJldHVybiB0b3RhbDtcclxufSxbT3JkZXIsIGRpZmZdKTtcclxuXHJcbiAgY29uc3QgY2FydE51bSA9IE9yZGVyPyBPcmRlci5sZW5ndGg6IDA7XHJcbiAgY29uc3QgY29udGVudCA9IChcclxuICAgIE9yZGVyLmxlbmd0aD4gMD9cclxuICAgIDxkaXY+XHJcbiAgICAgICB7T3JkZXIubWFwKChpdGVtKT0+e1xyXG4gICAgICAgIHJldHVybiA8cD57aXRlbS50aXRsZX0gWHtpdGVtLnF1YW50aXR5fTwvcD5cclxuICAgICAgfSl9XHJcbiAgICAgIDxCdXR0b24+IDxMaW5rIGhyZWYgPVwiL2NhcnRcIj4g7J6l67CU6rWs64uIIOqwgOq4sCA8L0xpbms+IDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+OjxkaXY+PHA+7J6l67CU6rWs64uI6rCAIOu5hOyXiOyKteuLiOuLpC48L3A+PC9kaXY+XHJcbiAgKTtcclxuICBcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgIDxCYWRnZSBjb3VudD17Y2FsfT5cclxuICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbUxlZnRcIiB0aXRsZT0n7J6l67CU6rWs64uIJyBjb250ZW50PXtjb250ZW50fSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgPEJ1dHRvbiBrZXk9XCIyXCIgaWNvbj17PFNob3BwaW5nQ2FydE91dGxpbmVkIC8+fT5cclxuICAgICAgey8qIDxMaW5rIGhyZWYgPVwiL2NhcnRcIj4gKi99XHJcbiAgICAgICAgQ2FydFxyXG4gICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1BvcG92ZXI+XHJcbiAgICA8L0JhZGdlPlxyXG4gICAgXHJcbiAgICA8QnV0dG9uIGxvYWRpbmcgPSB7bG9nb3V0TG9hZGluZ30ga2V5PVwiMVwiIG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgIExvZ291dFxyXG4gICAgPC9CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==