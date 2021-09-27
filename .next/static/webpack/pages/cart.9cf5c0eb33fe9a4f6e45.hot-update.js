webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/MenuHeader.js":
/*!**********************************!*\
  !*** ./components/MenuHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login */ "./components/Login.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\MenuHeader.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var MenuHeader = function MenuHeader() {
  _s();

  var _useState = useState('false'),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isLogIn = _useState2[0],
      setIsLogin = _useState2[1];

  var isLogin = function isLogin() {
    var headerContents = [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
      count: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "2",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartOutlined"], {
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
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/cart",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, " Cart"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
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
    }, "\uC720\uC800\uBA85"), __jsx(_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    })];
    return headerContents;
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["PageHeader"], {
    ghost: false,
    title: "FAKE-SHOP",
    subTitle: "by devCoderian",
    extra: isLogin(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  });
};

_s(MenuHeader, "MfzvsCMYErK79XNyjxj57y/wZ5s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51SGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1lbnVIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzTG9nSW4iLCJzZXRJc0xvZ2luIiwiaXNMb2dpbiIsImhlYWRlckNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUV2QixrQkFBOEJDLFFBQVEsQ0FBQyxPQUFELENBQXRDO0FBQUE7QUFBQSxNQUFPQyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQUs7QUFDbkIsUUFBSUMsY0FBYyxHQUFHLENBQ25CLE1BQUMsMENBQUQ7QUFBTyxXQUFLLEVBQUUsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyQ0FBRDtBQUFRLFNBQUcsRUFBQyxHQUFaO0FBQWdCLFVBQUksRUFBRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixDQURtQixFQU1uQixNQUFDLDJDQUFEO0FBQVEsU0FBRyxFQUFDLEdBQVo7QUFBZ0IsVUFBSSxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQU5tQixFQVNuQixNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFUbUIsQ0FBckI7QUFZQSxXQUFPQSxjQUFQO0FBQ0QsR0FkRDs7QUFlRSxTQUNFLE1BQUMsK0NBQUQ7QUFDQSxTQUFLLEVBQUUsS0FEUDtBQUVBLFNBQUssRUFBQyxXQUZOO0FBR0EsWUFBUSxFQUFDLGdCQUhUO0FBSUEsU0FBSyxFQUFFRCxPQUFPLEVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBUUgsQ0ExQkQ7O0dBQU1KLFU7O0tBQUFBLFU7QUE0QlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuOWNmNWMwZWIzM2ZlOWE0ZjZlNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IFBhZ2VIZWFkZXIsIEJ1dHRvbiwgQmFkZ2V9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIFNob3BwaW5nQ2FydE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IE1lbnVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgW2lzTG9nSW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUoJ2ZhbHNlJyk7XHJcbiAgY29uc3QgaXNMb2dpbiA9ICgpID0+e1xyXG4gICAgbGV0IGhlYWRlckNvbnRlbnRzID0gW1xyXG4gICAgICA8QmFkZ2UgY291bnQ9ezF9PlxyXG4gICAgICAgIDxCdXR0b24ga2V5PVwiMlwiIGljb249ezxTaG9wcGluZ0NhcnRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICA8TGluayBocmVmID1cIi9jYXJ0XCI+IENhcnQ8L0xpbms+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQmFkZ2U+LFxyXG4gICAgICA8QnV0dG9uIGtleT1cIjFcIiBpY29uPXs8VXNlck91dGxpbmVkIC8+fT5cclxuICAgICAgICAgIOycoOyggOuqhVxyXG4gICAgICA8L0J1dHRvbj4sXHJcbiAgICAgIDxMb2dpbiAvPlxyXG4gICAgIFxyXG4gICAgXVxyXG4gICAgcmV0dXJuIGhlYWRlckNvbnRlbnRzXHJcbiAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgZ2hvc3Q9e2ZhbHNlfVxyXG4gICAgICB0aXRsZT1cIkZBS0UtU0hPUFwiXHJcbiAgICAgIHN1YlRpdGxlPVwiYnkgZGV2Q29kZXJpYW5cIlxyXG4gICAgICBleHRyYT17aXNMb2dpbigpfVxyXG4gICAgPjwvUGFnZUhlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9