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
      logoutLoading = _useSelector.logoutLoading;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.cart;
  }),
      Order = _useSelector2.Order;

  var cal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var total = Order.map(function (order) {
      var quantity = order.quantity;
      return quantity;
    }).reduce(function (l, r) {
      return l + r;
    }, 0);
    return total;
  }, [Order]);
  console.log(cal, '확인');
  var cartNum = Order ? Order.length : 0;
  var content = Order.length > 0 ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, Order.map(function (item) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 16
      }
    }, item.title, " X", item.quantity);
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 16
    }
  }, " \uC7A5\uBC14\uAD6C\uB2C8 \uAC00\uAE30 "), " ")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5C8\uC2B5\uB2C8\uB2E4.")); // const content = () => {
  //   Order.length> 0?
  //   <div>
  //     {Order.map((item)=>{
  //      return <p>{item.title} X{item.quantity}</p>
  //     })} </div>
  //   :<div><p>장바구니가 비었습니다.</p></div>
  //   };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    placement: "bottomLeft",
    title: "\uC7A5\uBC14\uAD6C\uB2C8",
    content: content,
    trigger: "click",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 29
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "Cart")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: logoutLoading,
    key: "1",
    onClick: logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51SGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1lbnVIZWFkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9nb3V0IiwidXNlQ2FsbGJhY2siLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dvdXRMb2FkaW5nIiwiY2FydCIsIk9yZGVyIiwiY2FsIiwidXNlTWVtbyIsInRvdGFsIiwibWFwIiwib3JkZXIiLCJxdWFudGl0eSIsInJlZHVjZSIsImwiLCJyIiwiY29uc29sZSIsImxvZyIsImNhcnROdW0iLCJsZW5ndGgiLCJjb250ZW50IiwiaXRlbSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTztBQUFBOztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQUs7QUFDNUJILFlBQVEsQ0FBQ0ksMEVBQW1CLEVBQXBCLENBQVIsQ0FENEIsQ0FFOUI7QUFDRCxHQUh5QixFQUd4QixFQUh3QixDQUExQjs7QUFJQSxxQkFBMEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXJDO0FBQUEsTUFBUUMsYUFBUixnQkFBUUEsYUFBUjs7QUFDQSxzQkFBbUJILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBQU4sQ0FBOUI7QUFBQSxNQUFRQyxLQUFSLGlCQUFRQSxLQUFSOztBQUVBLE1BQU1DLEdBQUcsR0FBR0MscURBQU8sQ0FBQyxZQUFLO0FBQ3ZCLFFBQUlDLEtBQUssR0FBSUgsS0FBSyxDQUFDSSxHQUFOLENBQVcsVUFBQ0MsS0FBRCxFQUFVO0FBQzlCLFVBQVFDLFFBQVIsR0FBcUJELEtBQXJCLENBQVFDLFFBQVI7QUFDQSxhQUFPQSxRQUFQO0FBQ0gsS0FIWSxFQUdWQyxNQUhVLENBR0gsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBU0QsQ0FBQyxHQUFDQyxDQUFYO0FBQUEsS0FIRyxFQUdXLENBSFgsQ0FBYjtBQUlBLFdBQU9OLEtBQVA7QUFDSCxHQU5vQixFQU1uQixDQUFDSCxLQUFELENBTm1CLENBQW5CO0FBU0ZVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixHQUFaLEVBQWdCLElBQWhCO0FBQ0UsTUFBTVcsT0FBTyxHQUFHWixLQUFLLEdBQUVBLEtBQUssQ0FBQ2EsTUFBUixHQUFnQixDQUFyQztBQUNBLE1BQU1DLE9BQU8sR0FDWGQsS0FBSyxDQUFDYSxNQUFOLEdBQWMsQ0FBZCxHQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSWIsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ1csSUFBRCxFQUFRO0FBQ2xCLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJQSxJQUFJLENBQUNDLEtBQVQsUUFBa0JELElBQUksQ0FBQ1QsUUFBdkIsQ0FBUDtBQUNELEdBRkMsQ0FESixFQUlFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFTLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUFULE1BSkYsQ0FEQSxHQU1PO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNFQUFMLENBUFQsQ0FyQndCLENBOEJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQ0UsbUVBRUEsTUFBQyw0Q0FBRDtBQUFTLGFBQVMsRUFBQyxZQUFuQjtBQUFnQyxTQUFLLEVBQUMsMEJBQXRDO0FBQTZDLFdBQU8sRUFBRVEsT0FBdEQ7QUFBK0QsV0FBTyxFQUFDLE9BQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsT0FBRyxFQUFDLEdBQVo7QUFBZ0IsUUFBSSxFQUFFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FGQSxFQVdBLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUloQixhQUFuQjtBQUFrQyxPQUFHLEVBQUMsR0FBdEM7QUFBMEMsV0FBTyxFQUFFTixNQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEEsQ0FERjtBQWlCRCxDQXhERDs7R0FBTUgsVTtVQUNhRSx1RCxFQU1TSSx1RCxFQUNQQSx1RDs7O0tBUmZOLFU7QUEwRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuMTViMjMzZWVjZmM4ZTE4MzAxOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ2FsbGJhY2ssIHVzZU1lbW99IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBCYWRnZSwgUG9wb3Zlcn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFNob3BwaW5nQ2FydE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IE9yZGVyTGlzdCBmcm9tICcuL09yZGVyTGlzdCc7XHJcblxyXG5jb25zdCBNZW51SGVhZGVyID0gKCkgPT4gIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiBcclxuICBjb25zdCBsb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICAgIC8vSG9tZeycvOuhnCDsnbTrj5nsi5ztgqTquLBcclxuICB9LFtdKTtcclxuICBjb25zdCB7IGxvZ291dExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcclxuICBjb25zdCB7IE9yZGVyIH0gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FydCk7XHJcbiAgXHJcbiAgY29uc3QgY2FsID0gdXNlTWVtbygoKSA9PntcclxuICAgIGxldCB0b3RhbCA9ICBPcmRlci5tYXAgKChvcmRlcikgPT57XHJcbiAgICAgICAgY29uc3QgeyBxdWFudGl0eSB9ID0gb3JkZXI7XHJcbiAgICAgICAgcmV0dXJuIHF1YW50aXR5O1xyXG4gICAgfSkucmVkdWNlKChsLCByKT0+IGwrciwgMCk7XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbn0sW09yZGVyXSk7XHJcblxyXG5cclxuY29uc29sZS5sb2coY2FsLCftmZXsnbgnKVxyXG4gIGNvbnN0IGNhcnROdW0gPSBPcmRlcj8gT3JkZXIubGVuZ3RoOiAwO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICBPcmRlci5sZW5ndGg+IDA/XHJcbiAgICA8ZGl2PlxyXG4gICAgICAge09yZGVyLm1hcCgoaXRlbSk9PntcclxuICAgICAgICByZXR1cm4gPHA+e2l0ZW0udGl0bGV9IFh7aXRlbS5xdWFudGl0eX08L3A+XHJcbiAgICAgIH0pfVxyXG4gICAgICA8QnV0dG9uPiA8TGluayBocmVmID1cIi9jYXJ0XCI+IOyepeuwlOq1rOuLiCDqsIDquLAgPC9MaW5rPiA8L0J1dHRvbj5cclxuICAgIDwvZGl2Pjo8ZGl2PjxwPuyepeuwlOq1rOuLiOqwgCDruYTsl4jsirXri4jri6QuPC9wPjwvZGl2PlxyXG4gICk7XHJcbiAgLy8gY29uc3QgY29udGVudCA9ICgpID0+IHtcclxuICAvLyAgIE9yZGVyLmxlbmd0aD4gMD9cclxuICAvLyAgIDxkaXY+XHJcbiAgLy8gICAgIHtPcmRlci5tYXAoKGl0ZW0pPT57XHJcbiAgLy8gICAgICByZXR1cm4gPHA+e2l0ZW0udGl0bGV9IFh7aXRlbS5xdWFudGl0eX08L3A+XHJcbiAgLy8gICAgIH0pfSA8L2Rpdj5cclxuICAvLyAgIDo8ZGl2PjxwPuyepeuwlOq1rOuLiOqwgCDruYTsl4jsirXri4jri6QuPC9wPjwvZGl2PlxyXG4gIC8vICAgfTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgIHsvKiA8QmFkZ2UgY291bnQ9e2NhbH0+ICovfVxyXG4gICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tTGVmdFwiIHRpdGxlPSfsnqXrsJTqtazri4gnIGNvbnRlbnQ9e2NvbnRlbnR9IHRyaWdnZXI9XCJjbGlja1wiPlxyXG4gICAgICA8QnV0dG9uIGtleT1cIjJcIiBpY29uPXs8U2hvcHBpbmdDYXJ0T3V0bGluZWQgLz59PlxyXG4gICAgICB7LyogPExpbmsgaHJlZiA9XCIvY2FydFwiPiAqL31cclxuICAgICAgICBDYXJ0XHJcbiAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvUG9wb3Zlcj5cclxuICAgIHsvKiA8L0JhZGdlPiAqL31cclxuICAgIFxyXG4gICAgPEJ1dHRvbiBsb2FkaW5nID0ge2xvZ291dExvYWRpbmd9IGtleT1cIjFcIiBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICBMb2dvdXRcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51SGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=