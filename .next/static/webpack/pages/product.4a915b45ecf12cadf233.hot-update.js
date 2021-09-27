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
    !isLogIn && __jsx(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51SGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1lbnVIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwiaXNMb2dpbiIsImhlYWRlckNvbnRlbnRzIiwiaXNMb2dJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFFdkIsa0JBQW9DQyxzREFBUSxDQUFDLEtBQUQsQ0FBNUM7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQUs7QUFDbkIsUUFBSUMsY0FBYyxHQUFHLENBQ25CLE1BQUMsMENBQUQ7QUFBTyxXQUFLLEVBQUUsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyQ0FBRDtBQUFRLFNBQUcsRUFBQyxHQUFaO0FBQWdCLFVBQUksRUFBRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixDQURtQixFQU1uQixNQUFDLDJDQUFEO0FBQVEsU0FBRyxFQUFDLEdBQVo7QUFBZ0IsVUFBSSxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQU5tQixDQUFyQjtBQVdBLEtBQUNDLE9BQUQsSUFBWSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBWjtBQUVBLFdBQU9ELGNBQVA7QUFDRCxHQWZEOztBQWdCRSxTQUNFLE1BQUMsK0NBQUQ7QUFDQSxTQUFLLEVBQUUsS0FEUDtBQUVBLFNBQUssRUFBQyxXQUZOO0FBR0EsWUFBUSxFQUFDLGdCQUhUO0FBSUEsU0FBSyxFQUFFRCxPQUFPLEVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBUUgsQ0EzQkQ7O0dBQU1KLFU7O0tBQUFBLFU7QUE2QlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuNGE5MTViNDVlY2YxMmNhZGYyMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgUGFnZUhlYWRlciwgQnV0dG9uLCBCYWRnZX0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgU2hvcHBpbmdDYXJ0T3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTWVudUhlYWRlciA9ICgpID0+IHtcclxuICBcclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaXNMb2dpbiA9ICgpID0+e1xyXG4gICAgbGV0IGhlYWRlckNvbnRlbnRzID0gW1xyXG4gICAgICA8QmFkZ2UgY291bnQ9ezF9PlxyXG4gICAgICAgIDxCdXR0b24ga2V5PVwiMlwiIGljb249ezxTaG9wcGluZ0NhcnRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICA8TGluayBocmVmID1cIi9jYXJ0XCI+IENhcnQ8L0xpbms+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQmFkZ2U+LFxyXG4gICAgICA8QnV0dG9uIGtleT1cIjFcIiBpY29uPXs8VXNlck91dGxpbmVkIC8+fT5cclxuICAgICAgICAgIOycoOyggOuqhVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIF1cclxuICAgIFxyXG4gICAgIWlzTG9nSW4gJiYgPExvZ2luIC8+O1xyXG4gICAgXHJcbiAgICByZXR1cm4gaGVhZGVyQ29udGVudHNcclxuICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UGFnZUhlYWRlclxyXG4gICAgICBnaG9zdD17ZmFsc2V9XHJcbiAgICAgIHRpdGxlPVwiRkFLRS1TSE9QXCJcclxuICAgICAgc3ViVGl0bGU9XCJieSBkZXZDb2RlcmlhblwiXHJcbiAgICAgIGV4dHJhPXtpc0xvZ2luKCl9XHJcbiAgICA+PC9QYWdlSGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51SGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=