webpackHotUpdate_N_E("pages/product",{

/***/ "./components/MenuHeader.js":
false,

/***/ "./components/MenuLayout.js":
/*!**********************************!*\
  !*** ./components/MenuLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login */ "./components/Login.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\MenuLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SubMenu = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu;
var Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content,
    Sider = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Sider;



var MenuLayout = function MenuLayout(_ref) {
  var children = _ref.children;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["PageHeader"], {
    ghost: false,
    title: "FAKE-SHOP",
    subTitle: "by devCoderian",
    extra: __jsx(_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 20
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(Sider, {
    width: 200,
    className: "site-layout-background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    mode: "inline",
    defaultOpenKeys: ['sub1'],
    style: {
      height: '100%',
      borderRight: 0
    },
    selectable: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HomeOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 42
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Home")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 42
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "My Cart")), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UnorderedListOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 43
      }
    }),
    title: "Product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 40
    }
  }, "All")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Mens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "Womens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "jewelery"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "electronics")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(Content, {
    className: "site-layout-background",
    style: {
      padding: 24,
      margin: 0,
      minHeight: '100vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, children))));
};

_c = MenuLayout;
MenuLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MenuLayout);

var _c;

$RefreshReg$(_c, "MenuLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51TGF5b3V0LmpzIl0sIm5hbWVzIjpbIlN1Yk1lbnUiLCJNZW51IiwiQ29udGVudCIsIkxheW91dCIsIlNpZGVyIiwiTWVudUxheW91dCIsImNoaWxkcmVuIiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJwYWRkaW5nIiwibWFyZ2luIiwibWluSGVpZ2h0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsSUFBUUEsT0FBUixHQUFvQkMseUNBQXBCLENBQVFELE9BQVI7QUFDQSxJQUFRRSxPQUFSLEdBQTJCQywyQ0FBM0IsQ0FBUUQsT0FBUjtBQUFBLElBQWlCRSxLQUFqQixHQUEyQkQsMkNBQTNCLENBQWlCQyxLQUFqQjtBQUVBO0FBQ0E7O0FBR0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFFakMsU0FDSSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxNQUFDLCtDQUFEO0FBQ0MsU0FBSyxFQUFFLEtBRFI7QUFFQyxTQUFLLEVBQUMsV0FGUDtBQUdDLFlBQVEsRUFBQyxnQkFIVjtBQUlDLFNBQUssRUFBRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREgsRUFPQSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUUsR0FBZDtBQUFtQixhQUFTLEVBQUMsd0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFEO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxtQkFBZSxFQUFFLENBQUMsTUFBRCxDQUZuQjtBQUdFLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUUsTUFBVjtBQUFrQkMsaUJBQVcsRUFBRTtBQUEvQixLQUhUO0FBSUUsY0FBVSxFQUFHLEtBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBbUIsUUFBSSxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxDQU5KLEVBU0ksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFtQixRQUFJLEVBQUUsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLENBVEosRUFZSSxNQUFDLE9BQUQ7QUFBUyxPQUFHLEVBQUMsTUFBYjtBQUFvQixRQUFJLEVBQUUsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTFCO0FBQXFELFNBQUssRUFBQyxTQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsVUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW5CLENBREosRUFFSSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUdJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLEVBSUksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLEVBS0ksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLENBWkosQ0FERixDQURGLEVBd0JFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUNFLGFBQVMsRUFBQyx3QkFEWjtBQUVFLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsRUFESjtBQUVMQyxZQUFNLEVBQUUsQ0FGSDtBQUdMQyxlQUFTLEVBQUU7QUFITixLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRR0wsUUFSSCxDQURGLENBeEJGLENBUEEsQ0FESjtBQStDSCxDQWpERDs7S0FBTUQsVTtBQW1ETkEsVUFBVSxDQUFDTyxTQUFYLEdBQXVCO0FBQ25CTixVQUFRLEVBQUVPLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETixDQUF2QjtBQUdlVix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0LjRhN2YxMTI4MTZkYTg5MGFhMjdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0LCBNZW51LCBQYWdlSGVhZGVyfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVW5vcmRlcmVkTGlzdE91dGxpbmVkLCBIb21lT3V0bGluZWQsIFNob3BwaW5nQ2FydE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuY29uc3QgeyBDb250ZW50LCBTaWRlciB9ID0gTGF5b3V0O1xyXG5cclxuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IE1lbnVMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgICAgIGdob3N0PXtmYWxzZX1cclxuICAgICAgICAgICAgdGl0bGU9XCJGQUtFLVNIT1BcIlxyXG4gICAgICAgICAgICBzdWJUaXRsZT1cImJ5IGRldkNvZGVyaWFuXCJcclxuICAgICAgICAgICAgZXh0cmE9ezxMb2dpbiAvPn1cclxuICAgICAgICAgID48L1BhZ2VIZWFkZXI+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxTaWRlciB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbJ3N1YjEnXX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgYm9yZGVyUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICBzZWxlY3RhYmxlID17ZmFsc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiIGljb249ezxIb21lT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCIgaWNvbj17PFNob3BwaW5nQ2FydE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPVwiL2NhcnRcIj5NeSBDYXJ0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIxXCIgaWNvbj17PFVub3JkZXJlZExpc3RPdXRsaW5lZCAvPn0gdGl0bGU9XCJQcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+PExpbmsgaHJlZiA9XCIvcHJvZHVjdFwiPkFsbDwvTGluaz48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjRcIj5NZW5zPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI1XCI+V29tZW5zPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI2XCI+amV3ZWxlcnk8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjdcIj5lbGVjdHJvbmljczwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L1NpZGVyPlxyXG5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDb250ZW50XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0LFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuTWVudUxheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZW51TGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9