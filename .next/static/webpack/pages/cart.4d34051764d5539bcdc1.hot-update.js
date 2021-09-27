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
      span: 6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0TGlzdC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiQ2FydExpc3QiLCJvcmRlckxpc3RGb290ZXIiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1QsNENBRFMsRUFFVCxvQ0FGUyxFQUdULDZDQUhTLEVBSVQsd0NBSlMsRUFLVCxxQ0FMUyxDQUFiOztBQVFBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFLO0FBQ3pCLFdBQ0ksbUVBQ0EsTUFBQyx3Q0FBRDtBQUFLLGFBQU8sRUFBQyxlQUFiO0FBQTZCLFdBQUssRUFBQyxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ssTUFBQyx3Q0FBRDtBQUFLLFVBQUksRUFBRSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREwsRUFJSSxNQUFDLHdDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBSkosQ0FEQSxDQURKO0FBWUgsR0FiRDs7QUFjQSxTQUNJLG1FQUNBLE1BQUMsNENBQUQ7QUFBUyxlQUFXLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxFQUVBLE1BQUMsd0NBQUQ7QUFBSyxXQUFPLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBSSxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlDQUFEO0FBQ0EsVUFBTSxFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRFI7QUFFQSxVQUFNLEVBQUVBLGVBQWUsRUFGdkI7QUFHQSxZQUFRLE1BSFI7QUFJQSxjQUFVLEVBQUVGLElBSlo7QUFLQSxjQUFVLEVBQUUsb0JBQUFHLElBQUk7QUFBQSxhQUNaLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLCtDQUFELENBQVksSUFBWjtBQUFpQixZQUFJLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsT0FDZ0RBLElBRGhELENBRFk7QUFBQSxLQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQUZBLENBREo7QUFvQkgsQ0FuQ0Q7O0tBQU1GLFE7QUFxQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuNGQzNDA1MTc2NGQ1NTM5YmNkYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGlzdCwgVHlwb2dyYXBoeSwgRGl2aWRlciwgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgICAnUmFjaW5nIGNhciBzcHJheXMgYnVybmluZyBmdWVsIGludG8gY3Jvd2QuJyxcclxuICAgICdKYXBhbmVzZSBwcmluY2VzcyB0byB3ZWQgY29tbW9uZXIuJyxcclxuICAgICdBdXN0cmFsaWFuIHdhbGtzIDEwMGttIGFmdGVyIG91dGJhY2sgY3Jhc2guJyxcclxuICAgICdNYW4gY2hhcmdlZCBvdmVyIG1pc3Npbmcgd2VkZGluZyBnaXJsLicsXHJcbiAgICAnTG9zIEFuZ2VsZXMgYmF0dGxlcyBodWdlIHdpbGRmaXJlcy4nLFxyXG4gIF07XHJcbiAgXHJcbmNvbnN0IENhcnRMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgb3JkZXJMaXN0Rm9vdGVyID0gKCkgPT57XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ249XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezZ9PlxyXG4gICAgICAgICAgICAgICAgIOy0nSDquIjslaFcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIOyjvOusuOuyhO2KvFxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+RGVmYXVsdCBTaXplPC9EaXZpZGVyPlxyXG4gICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Q29sIHNwYW4gPSB7MTR9ID5cclxuICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9ezxkaXY+7KO866y47IScPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtvcmRlckxpc3RGb290ZXIoKX1cclxuICAgICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeS5UZXh0IG1hcms+W0lURU1dPC9UeXBvZ3JhcGh5LlRleHQ+IHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0TGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9