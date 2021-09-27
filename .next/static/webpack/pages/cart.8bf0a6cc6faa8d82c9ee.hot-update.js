webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/CartList.js":
/*!********************************!*\
  !*** ./components/CartList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\CartList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.'];

var CartList = function CartList() {
  var orderListFooter = function orderListFooter() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      justify: "space-between",
      align: "middle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 18
      }
    }, "\uCD1D \uAE08\uC561"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, "\uC8FC\uBB38\uBC84\uD2BC")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    orientation: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Default Size"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 14,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, "\uC8FC\uBB38\uC11C"),
    footer: orderListFooter(),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text, {
        mark: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }
      }, "[ITEM]"), " ", item);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }))));
};

_c = CartList;
/* harmony default export */ __webpack_exports__["default"] = (CartList);

var _c;

$RefreshReg$(_c, "CartList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0TGlzdC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiQ2FydExpc3QiLCJvcmRlckxpc3RGb290ZXIiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1QsNENBRFMsRUFFVCxvQ0FGUyxFQUdULDZDQUhTLEVBSVQsd0NBSlMsRUFLVCxxQ0FMUyxDQUFiOztBQVFBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFLO0FBQ3pCLFdBQ0ksbUVBQ0EsTUFBQyx3Q0FBRDtBQUFLLGFBQU8sRUFBQyxlQUFiO0FBQTZCLFdBQUssRUFBQyxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ssTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURMLEVBSUksTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUpKLENBREEsQ0FESjtBQVlILEdBYkQ7O0FBY0EsU0FDSSxtRUFDQSxNQUFDLDRDQUFEO0FBQVMsZUFBVyxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsRUFFQSxNQUFDLHdDQUFEO0FBQUssV0FBTyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUksRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5Q0FBRDtBQUNBLFVBQU0sRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURSO0FBRUEsVUFBTSxFQUFFQSxlQUFlLEVBRnZCO0FBR0EsWUFBUSxNQUhSO0FBSUEsY0FBVSxFQUFFRixJQUpaO0FBS0EsY0FBVSxFQUFFLG9CQUFBRyxJQUFJO0FBQUEsYUFDWixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsTUFBQywrQ0FBRCxDQUFZLElBQVo7QUFBaUIsWUFBSSxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLE9BQ2dEQSxJQURoRCxDQURZO0FBQUEsS0FMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FGQSxDQURKO0FBb0JILENBbkNEOztLQUFNRixRO0FBcUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LjhiZjBhNmNjNmZhYThkODJjOWVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpc3QsIFR5cG9ncmFwaHksIERpdmlkZXIsIFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gICAgJ1JhY2luZyBjYXIgc3ByYXlzIGJ1cm5pbmcgZnVlbCBpbnRvIGNyb3dkLicsXHJcbiAgICAnSmFwYW5lc2UgcHJpbmNlc3MgdG8gd2VkIGNvbW1vbmVyLicsXHJcbiAgICAnQXVzdHJhbGlhbiB3YWxrcyAxMDBrbSBhZnRlciBvdXRiYWNrIGNyYXNoLicsXHJcbiAgICAnTWFuIGNoYXJnZWQgb3ZlciBtaXNzaW5nIHdlZGRpbmcgZ2lybC4nLFxyXG4gICAgJ0xvcyBBbmdlbGVzIGJhdHRsZXMgaHVnZSB3aWxkZmlyZXMuJyxcclxuICBdO1xyXG4gIFxyXG5jb25zdCBDYXJ0TGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG9yZGVyTGlzdEZvb3RlciA9ICgpID0+e1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFJvdyBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICDstJ0g6riI7JWhXHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICDso7zrrLjrsoTtirxcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPkRlZmF1bHQgU2l6ZTwvRGl2aWRlcj5cclxuICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPENvbCBzcGFuID0gezE0fSA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXs8ZGl2PuyjvOusuOyEnDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17b3JkZXJMaXN0Rm9vdGVyKCl9XHJcbiAgICAgICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkuVGV4dCBtYXJrPltJVEVNXTwvVHlwb2dyYXBoeS5UZXh0PiB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydExpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==