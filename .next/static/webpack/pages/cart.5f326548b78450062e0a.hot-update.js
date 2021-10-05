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

  var content = __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, Order.map(function (item) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 16
      }
    }, item.title, " X", item.quantity);
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 16
    }
  }, " \uC7A5\uBC14\uAD6C\uB2C8 \uAC00\uAE30 "), " ")); // const content = () => {
  //   Order.length> 0?
  //   <div>
  //     {Order.map((item)=>{
  //      return <p>{item.title} X{item.quantity}</p>
  //     })} </div>
  //   :<div><p>장바구니가 비었습니다.</p></div>
  //   };


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    count: cal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "Cart"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: logoutLoading,
    key: "1",
    onClick: logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51SGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1lbnVIZWFkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9nb3V0IiwidXNlQ2FsbGJhY2siLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dvdXRMb2FkaW5nIiwiY2FydCIsIk9yZGVyIiwiY2FsIiwidXNlTWVtbyIsInRvdGFsIiwibWFwIiwib3JkZXIiLCJxdWFudGl0eSIsInJlZHVjZSIsImwiLCJyIiwiY29uc29sZSIsImxvZyIsImNhcnROdW0iLCJsZW5ndGgiLCJjb250ZW50IiwiaXRlbSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTztBQUFBOztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQUs7QUFDNUJILFlBQVEsQ0FBQ0ksMEVBQW1CLEVBQXBCLENBQVIsQ0FENEIsQ0FFOUI7QUFDRCxHQUh5QixFQUd4QixFQUh3QixDQUExQjs7QUFJQSxxQkFBMEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXJDO0FBQUEsTUFBUUMsYUFBUixnQkFBUUEsYUFBUjs7QUFDQSxzQkFBbUJILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBQU4sQ0FBOUI7QUFBQSxNQUFRQyxLQUFSLGlCQUFRQSxLQUFSOztBQUVBLE1BQU1DLEdBQUcsR0FBR0MscURBQU8sQ0FBQyxZQUFLO0FBQ3ZCLFFBQUlDLEtBQUssR0FBSUgsS0FBSyxDQUFDSSxHQUFOLENBQVcsVUFBQ0MsS0FBRCxFQUFVO0FBQzlCLFVBQVFDLFFBQVIsR0FBcUJELEtBQXJCLENBQVFDLFFBQVI7QUFDQSxhQUFPQSxRQUFQO0FBQ0gsS0FIWSxFQUdWQyxNQUhVLENBR0gsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBU0QsQ0FBQyxHQUFDQyxDQUFYO0FBQUEsS0FIRyxFQUdXLENBSFgsQ0FBYjtBQUlBLFdBQU9OLEtBQVA7QUFDSCxHQU5vQixFQU1uQixDQUFDSCxLQUFELENBTm1CLENBQW5CO0FBU0ZVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixHQUFaLEVBQWdCLElBQWhCO0FBQ0UsTUFBTVcsT0FBTyxHQUFHWixLQUFLLEdBQUVBLEtBQUssQ0FBQ2EsTUFBUixHQUFnQixDQUFyQzs7QUFDQSxNQUFNQyxPQUFPLEdBQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJZCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDVyxJQUFELEVBQVE7QUFDbEIsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlBLElBQUksQ0FBQ0MsS0FBVCxRQUFrQkQsSUFBSSxDQUFDVCxRQUF2QixDQUFQO0FBQ0QsR0FGQyxDQURKLEVBSUUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVMsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBQVQsTUFKRixDQURGLENBckJ3QixDQTZCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FDRSxtRUFDQSxNQUFDLDBDQUFEO0FBQU8sU0FBSyxFQUFFTCxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDRDQUFEO0FBQVMsYUFBUyxFQUFDLFlBQW5CO0FBQWdDLFNBQUssRUFBQywwQkFBdEM7QUFBNkMsV0FBTyxFQUFFYSxPQUF0RDtBQUErRCxXQUFPLEVBQUMsT0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxPQUFHLEVBQUMsR0FBWjtBQUFnQixRQUFJLEVBQUUsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURBLENBREEsRUFXQSxNQUFDLDJDQUFEO0FBQVEsV0FBTyxFQUFJaEIsYUFBbkI7QUFBa0MsT0FBRyxFQUFDLEdBQXRDO0FBQTBDLFdBQU8sRUFBRU4sTUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhBLENBREY7QUFpQkQsQ0F2REQ7O0dBQU1ILFU7VUFDYUUsdUQsRUFNU0ksdUQsRUFDUEEsdUQ7OztLQVJmTixVO0FBeURTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LjVmMzI2NTQ4Yjc4NDUwMDYyZTBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNhbGxiYWNrLCB1c2VNZW1vfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgQmFkZ2UsIFBvcG92ZXJ9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBTaG9wcGluZ0NhcnRPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dvdXRSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBNZW51SGVhZGVyID0gKCkgPT4gIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiBcclxuICBjb25zdCBsb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICAgIC8vSG9tZeycvOuhnCDsnbTrj5nsi5ztgqTquLBcclxuICB9LFtdKTtcclxuICBjb25zdCB7IGxvZ291dExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcclxuICBjb25zdCB7IE9yZGVyIH0gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FydCk7XHJcbiAgXHJcbiAgY29uc3QgY2FsID0gdXNlTWVtbygoKSA9PntcclxuICAgIGxldCB0b3RhbCA9ICBPcmRlci5tYXAgKChvcmRlcikgPT57XHJcbiAgICAgICAgY29uc3QgeyBxdWFudGl0eSB9ID0gb3JkZXI7XHJcbiAgICAgICAgcmV0dXJuIHF1YW50aXR5O1xyXG4gICAgfSkucmVkdWNlKChsLCByKT0+IGwrciwgMCk7XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbn0sW09yZGVyXSk7XHJcblxyXG5cclxuY29uc29sZS5sb2coY2FsLCftmZXsnbgnKVxyXG4gIGNvbnN0IGNhcnROdW0gPSBPcmRlcj8gT3JkZXIubGVuZ3RoOiAwO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAge09yZGVyLm1hcCgoaXRlbSk9PntcclxuICAgICAgICByZXR1cm4gPHA+e2l0ZW0udGl0bGV9IFh7aXRlbS5xdWFudGl0eX08L3A+XHJcbiAgICAgIH0pfVxyXG4gICAgICA8QnV0dG9uPiA8TGluayBocmVmID1cIi9jYXJ0XCI+IOyepeuwlOq1rOuLiCDqsIDquLAgPC9MaW5rPiA8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgLy8gY29uc3QgY29udGVudCA9ICgpID0+IHtcclxuICAvLyAgIE9yZGVyLmxlbmd0aD4gMD9cclxuICAvLyAgIDxkaXY+XHJcbiAgLy8gICAgIHtPcmRlci5tYXAoKGl0ZW0pPT57XHJcbiAgLy8gICAgICByZXR1cm4gPHA+e2l0ZW0udGl0bGV9IFh7aXRlbS5xdWFudGl0eX08L3A+XHJcbiAgLy8gICAgIH0pfSA8L2Rpdj5cclxuICAvLyAgIDo8ZGl2PjxwPuyepeuwlOq1rOuLiOqwgCDruYTsl4jsirXri4jri6QuPC9wPjwvZGl2PlxyXG4gIC8vICAgfTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgIDxCYWRnZSBjb3VudD17Y2FsfT5cclxuICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbUxlZnRcIiB0aXRsZT0n7J6l67CU6rWs64uIJyBjb250ZW50PXtjb250ZW50fSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgPEJ1dHRvbiBrZXk9XCIyXCIgaWNvbj17PFNob3BwaW5nQ2FydE91dGxpbmVkIC8+fT5cclxuICAgICAgey8qIDxMaW5rIGhyZWYgPVwiL2NhcnRcIj4gKi99XHJcbiAgICAgICAgQ2FydFxyXG4gICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1BvcG92ZXI+XHJcbiAgICA8L0JhZGdlPlxyXG4gICAgXHJcbiAgICA8QnV0dG9uIGxvYWRpbmcgPSB7bG9nb3V0TG9hZGluZ30ga2V5PVwiMVwiIG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgIExvZ291dFxyXG4gICAgPC9CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==