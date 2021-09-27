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
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./components/Login.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\MenuHeader.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var MenuHeader = function MenuHeader() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoggedIn = _useState[0],
      setIsLoggedIn = _useState[1];

  var isLogin = function isLogin() {
    var headerContents = [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      count: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "2",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 31
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/cart",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, " Cart"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 29
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, "\uC720\uC800\uBA85")];
    !isLoggedIn && __jsx(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 20
      }
    });
    return headerContents;
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], {
    ghost: false,
    title: "FAKE-SHOP",
    subTitle: "by devCoderian",
    extra: isLogin(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  });
};

_s(MenuHeader, "g0MSgNVZk+vKiEFnDJ9VPEfswFA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51SGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1lbnVIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwiaXNMb2dpbiIsImhlYWRlckNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUV2QixrQkFBb0NDLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBSztBQUNuQixRQUFJQyxjQUFjLEdBQUcsQ0FDbkIsTUFBQywwQ0FBRDtBQUFPLFdBQUssRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJDQUFEO0FBQVEsU0FBRyxFQUFDLEdBQVo7QUFBZ0IsVUFBSSxFQUFFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQURGLENBRG1CLEVBTW5CLE1BQUMsMkNBQUQ7QUFBUSxTQUFHLEVBQUMsR0FBWjtBQUFnQixVQUFJLEVBQUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTm1CLENBQXJCO0FBV0EsS0FBQ0gsVUFBRCxJQUFlLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFmO0FBRUEsV0FBT0csY0FBUDtBQUNELEdBZkQ7O0FBZ0JFLFNBQ0UsTUFBQywrQ0FBRDtBQUNBLFNBQUssRUFBRSxLQURQO0FBRUEsU0FBSyxFQUFDLFdBRk47QUFHQSxZQUFRLEVBQUMsZ0JBSFQ7QUFJQSxTQUFLLEVBQUVELE9BQU8sRUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFRSCxDQTNCRDs7R0FBTUosVTs7S0FBQUEsVTtBQTZCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC4zNzdiMWY0M2Q3NTBkZGMzZGIyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBQYWdlSGVhZGVyLCBCdXR0b24sIEJhZGdlfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkLCBTaG9wcGluZ0NhcnRPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBNZW51SGVhZGVyID0gKCkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpc0xvZ2luID0gKCkgPT57XHJcbiAgICBsZXQgaGVhZGVyQ29udGVudHMgPSBbXHJcbiAgICAgIDxCYWRnZSBjb3VudD17MX0+XHJcbiAgICAgICAgPEJ1dHRvbiBrZXk9XCIyXCIgaWNvbj17PFNob3BwaW5nQ2FydE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWYgPVwiL2NhcnRcIj4gQ2FydDwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9CYWRnZT4sXHJcbiAgICAgIDxCdXR0b24ga2V5PVwiMVwiIGljb249ezxVc2VyT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAg7Jyg7KCA66qFXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgXVxyXG4gICAgXHJcbiAgICAhaXNMb2dnZWRJbiAmJiA8TG9naW4gLz47XHJcbiAgICBcclxuICAgIHJldHVybiBoZWFkZXJDb250ZW50c1xyXG4gIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgIGdob3N0PXtmYWxzZX1cclxuICAgICAgdGl0bGU9XCJGQUtFLVNIT1BcIlxyXG4gICAgICBzdWJUaXRsZT1cImJ5IGRldkNvZGVyaWFuXCJcclxuICAgICAgZXh0cmE9e2lzTG9naW4oKX1cclxuICAgID48L1BhZ2VIZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==