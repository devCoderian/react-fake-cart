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
  var cartNum = Order ? Order.length : 0;
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

  var val = Order.map(function (item) {
    return item.quantity;
  }).reduce(reducer);
  console.log(val);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    count: val,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51SGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1lbnVIZWFkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9nb3V0IiwidXNlQ2FsbGJhY2siLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dvdXRMb2FkaW5nIiwiY2FydCIsIk9yZGVyIiwiY2FsIiwidXNlTWVtbyIsInRvdGFsIiwibWFwIiwib3JkZXIiLCJxdWFudGl0eSIsInJlZHVjZSIsImwiLCJyIiwiY2FydE51bSIsImxlbmd0aCIsImNvbnRlbnQiLCJpdGVtIiwidGl0bGUiLCJyZWR1Y2VyIiwicHJldmlvdXNWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsInZhbCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFPO0FBQUE7O0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBSztBQUM1QkgsWUFBUSxDQUFDSSwwRUFBbUIsRUFBcEIsQ0FBUixDQUQ0QixDQUU5QjtBQUNELEdBSHlCLEVBR3hCLEVBSHdCLENBQTFCOztBQUlBLHFCQUEwQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBckM7QUFBQSxNQUFRQyxhQUFSLGdCQUFRQSxhQUFSLENBUHdCLENBUXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0Esc0JBQW1CSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNHLElBQVY7QUFBQSxHQUFOLENBQTlCO0FBQUEsTUFBUUMsS0FBUixpQkFBUUEsS0FBUixDQWR3QixDQWUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUMsR0FBRyxHQUFHQyxxREFBTyxDQUFDLFlBQUs7QUFDdkIsUUFBSUMsS0FBSyxHQUFJSCxLQUFLLENBQUNJLEdBQU4sQ0FBVyxVQUFDQyxLQUFELEVBQVU7QUFDOUIsYUFBT0EsS0FBSyxDQUFDQyxRQUFiO0FBQ0gsS0FGWSxFQUVWQyxNQUZVLENBRUgsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBU0QsQ0FBQyxHQUFDQyxDQUFYO0FBQUEsS0FGRyxFQUVXLENBRlgsQ0FBYjtBQUdBLFdBQU9OLEtBQVA7QUFDRCxHQUxrQixFQUtqQixDQUFDSCxLQUFELENBTGlCLENBQW5CO0FBT0UsTUFBTVUsT0FBTyxHQUFHVixLQUFLLEdBQUVBLEtBQUssQ0FBQ1csTUFBUixHQUFnQixDQUFyQztBQUNBLE1BQU1DLE9BQU8sR0FDWFosS0FBSyxDQUFDVyxNQUFOLEdBQWMsQ0FBZCxHQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSVgsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ1MsSUFBRCxFQUFRO0FBQ2xCLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJQSxJQUFJLENBQUNDLEtBQVQsUUFBa0JELElBQUksQ0FBQ1AsUUFBdkIsQ0FBUDtBQUNELEdBRkMsQ0FESixFQUlFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFTLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUFULE1BSkYsQ0FEQSxHQU1PO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNFQUFMLENBUFQ7O0FBVUEsTUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsYUFBRCxFQUFnQkMsWUFBaEI7QUFBQSxXQUFpQ0QsYUFBYSxHQUFHQyxZQUFqRDtBQUFBLEdBQWhCOztBQUNBLE1BQUlDLEdBQUcsR0FBR2xCLEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNTLElBQUQ7QUFBQSxXQUFRQSxJQUFJLENBQUNQLFFBQWI7QUFBQSxHQUFWLEVBQWlDQyxNQUFqQyxDQUF3Q1EsT0FBeEMsQ0FBVjtBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFNBQ0UsbUVBQ0EsTUFBQywwQ0FBRDtBQUFPLFNBQUssRUFBRUEsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw0Q0FBRDtBQUFTLGFBQVMsRUFBQyxZQUFuQjtBQUFnQyxTQUFLLEVBQUMsMEJBQXRDO0FBQTZDLFdBQU8sRUFBRU4sT0FBdEQ7QUFBK0QsV0FBTyxFQUFDLE9BQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsT0FBRyxFQUFDLEdBQVo7QUFBZ0IsUUFBSSxFQUFFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FEQSxDQURBLEVBV0EsTUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBSWQsYUFBbkI7QUFBa0MsT0FBRyxFQUFDLEdBQXRDO0FBQTBDLFdBQU8sRUFBRU4sTUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhBLENBREY7QUFpQkQsQ0E3REQ7O0dBQU1ILFU7VUFDYUUsdUQsRUFNU0ksdUQsRUFPUEEsdUQ7OztLQWRmTixVO0FBK0RTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LmM2OWRiMTgwYWE5MTEzZGYxMzA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNhbGxiYWNrLCB1c2VNZW1vfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgQmFkZ2UsIFBvcG92ZXJ9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBTaG9wcGluZ0NhcnRPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3Rvciwgc2hhbGxvd0VxdWFsfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IE9yZGVyTGlzdCBmcm9tICcuL09yZGVyTGlzdCc7XHJcblxyXG5jb25zdCBNZW51SGVhZGVyID0gKCkgPT4gIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiBcclxuICBjb25zdCBsb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICAgIC8vSG9tZeycvOuhnCDsnbTrj5nsi5ztgqTquLBcclxuICB9LFtdKTtcclxuICBjb25zdCB7IGxvZ291dExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcclxuICAvLyBjb25zdCB7IE9yZGVyLCBkaWZmIH0gID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiB7XHJcbiAgLy8gICByZXR1cm57XHJcbiAgLy8gICBPcmRlcjpzdGF0ZS5jYXJ0Lk9yZGVyLFxyXG4gIC8vICAgZGlmZjogc3RhdGUuY2FydC5kaWZmXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgc2hhbGxvd0VxdWFsKTtcclxuICBjb25zdCB7IE9yZGVyIH0gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FydCk7XHJcbi8vICAgY29uc3QgY2FsID0gdXNlTWVtbygoKSA9PntcclxuLy8gICAgIGxldCB0b3RhbCA9ICBPcmRlci5tYXAgKChvcmRlcikgPT57XHJcbi8vICAgICAgICAgY29uc3QgeyBxdWFudGl0eSB9ID0gb3JkZXI7XHJcbi8vICAgICAgICAgcmV0dXJuIHF1YW50aXR5O1xyXG4vLyAgICAgfSkucmVkdWNlKChsLCByKT0+IGwrciwgMCk7XHJcbi8vICAgICByZXR1cm4gdG90YWw7XHJcbi8vIH0sW09yZGVyXSk7XHJcblxyXG5jb25zdCBjYWwgPSB1c2VNZW1vKCgpID0+e1xyXG4gIGxldCB0b3RhbCA9ICBPcmRlci5tYXAgKChvcmRlcikgPT57XHJcbiAgICAgIHJldHVybiBvcmRlci5xdWFudGl0eTtcclxuICB9KS5yZWR1Y2UoKGwsIHIpPT4gbCtyLCAwKTtcclxuICByZXR1cm4gdG90YWw7XHJcbn0sW09yZGVyXSk7XHJcblxyXG4gIGNvbnN0IGNhcnROdW0gPSBPcmRlcj8gT3JkZXIubGVuZ3RoOiAwO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICBPcmRlci5sZW5ndGg+IDA/XHJcbiAgICA8ZGl2PlxyXG4gICAgICAge09yZGVyLm1hcCgoaXRlbSk9PntcclxuICAgICAgICByZXR1cm4gPHA+e2l0ZW0udGl0bGV9IFh7aXRlbS5xdWFudGl0eX08L3A+XHJcbiAgICAgIH0pfVxyXG4gICAgICA8QnV0dG9uPiA8TGluayBocmVmID1cIi9jYXJ0XCI+IOyepeuwlOq1rOuLiCDqsIDquLAgPC9MaW5rPiA8L0J1dHRvbj5cclxuICAgIDwvZGl2Pjo8ZGl2PjxwPuyepeuwlOq1rOuLiOqwgCDruYTsl4jsirXri4jri6QuPC9wPjwvZGl2PlxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgcmVkdWNlciA9IChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUgKyBjdXJyZW50VmFsdWU7XHJcbiAgbGV0IHZhbCA9IE9yZGVyLm1hcCgoaXRlbSk9Pml0ZW0ucXVhbnRpdHkpLnJlZHVjZShyZWR1Y2VyKTtcclxuICBjb25zb2xlLmxvZyh2YWwpO1xyXG4gIHJldHVybihcclxuICAgIDw+XHJcbiAgICA8QmFkZ2UgY291bnQ9e3ZhbH0+XHJcbiAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCIgdGl0bGU9J+yepeuwlOq1rOuLiCcgY29udGVudD17Y29udGVudH0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgIDxCdXR0b24ga2V5PVwiMlwiIGljb249ezxTaG9wcGluZ0NhcnRPdXRsaW5lZCAvPn0+XHJcbiAgICAgIHsvKiA8TGluayBocmVmID1cIi9jYXJ0XCI+ICovfVxyXG4gICAgICAgIENhcnRcclxuICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICAgPC9CYWRnZT5cclxuICAgIFxyXG4gICAgPEJ1dHRvbiBsb2FkaW5nID0ge2xvZ291dExvYWRpbmd9IGtleT1cIjFcIiBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICBMb2dvdXRcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51SGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=