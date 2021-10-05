webpackHotUpdate_N_E("pages/cart",{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _MenuHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuHeader */ "./components/MenuHeader.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\MenuLayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SubMenu = antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].SubMenu;
var Content = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Content,
    Sider = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Sider;




var MenuLayout = function MenuLayout(_ref) {
  _s();

  var children = _ref.children;

  // const [isLogIn, setIsLogIn] = useState(false);
  // 리덕스로 변경
  //const { loginDone } = useSelector(state => state.user);
  //isLogin이 바뀌면 알아서 useSelector 컴포넌트 리렌더링 된다. 
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      cartNum = _useState[0],
      setCartNum = _useState[1];

  var cal = useMemo(function () {
    var total = Order.map(function (order) {
      var quantity = order.quantity;
      return quantity;
    }).reduce(function (l, r) {
      return l + r;
    }, 0);
    return total;
  }, [Order]);
  console.log(cal);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], {
    ghost: false,
    title: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      size: "large",
      shape: "round",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 20
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/product",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 55
      }
    }, "FAKE-SHOP")),
    subTitle: "by devCoderian",
    extra: me ? __jsx(_MenuHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      cartNum: cartNum,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 23
      }
    }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 58
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 68,
      columnNumber: 13
    }
  }, children))));
};

_s(MenuLayout, "Z+zaAe2hHLqbraBjHln+H1yUgqU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51TGF5b3V0LmpzIl0sIm5hbWVzIjpbIlN1Yk1lbnUiLCJNZW51IiwiQ29udGVudCIsIkxheW91dCIsIlNpZGVyIiwiTWVudUxheW91dCIsImNoaWxkcmVuIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiY2FydE51bSIsInNldENhcnROdW0iLCJjYWwiLCJ1c2VNZW1vIiwidG90YWwiLCJPcmRlciIsIm1hcCIsIm9yZGVyIiwicXVhbnRpdHkiLCJyZWR1Y2UiLCJsIiwiciIsImNvbnNvbGUiLCJsb2ciLCJwYWRkaW5nIiwibWFyZ2luIiwibWluSGVpZ2h0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxJQUFRQSxPQUFSLEdBQW9CQyx5Q0FBcEIsQ0FBUUQsT0FBUjtBQUNBLElBQVFFLE9BQVIsR0FBMkJDLDJDQUEzQixDQUFRRCxPQUFSO0FBQUEsSUFBaUJFLEtBQWpCLEdBQTJCRCwyQ0FBM0IsQ0FBaUJDLEtBQWpCO0FBRUE7QUFDQTtBQUNBOztBQUdBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUExQjtBQUFBLE1BQU9DLEVBQVAsZ0JBQU9BLEVBQVA7O0FBRUEsa0JBQThCQyxzREFBUSxDQUFDLENBQUQsQ0FBdEM7QUFBQSxNQUFPQyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLE1BQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDLFlBQUs7QUFDdkIsUUFBSUMsS0FBSyxHQUFJQyxLQUFLLENBQUNDLEdBQU4sQ0FBVyxVQUFDQyxLQUFELEVBQVU7QUFDOUIsVUFBUUMsUUFBUixHQUFxQkQsS0FBckIsQ0FBUUMsUUFBUjtBQUNBLGFBQU9BLFFBQVA7QUFDSCxLQUhZLEVBR1ZDLE1BSFUsQ0FHSCxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFTRCxDQUFDLEdBQUNDLENBQVg7QUFBQSxLQUhHLEVBR1csQ0FIWCxDQUFiO0FBSUEsV0FBT1AsS0FBUDtBQUVILEdBUG9CLEVBT25CLENBQUNDLEtBQUQsQ0FQbUIsQ0FBbkI7QUFRRk8sU0FBTyxDQUFDQyxHQUFSLENBQVlYLEdBQVo7QUFDRSxTQUNNLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLE1BQUMsK0NBQUQ7QUFDQyxTQUFLLEVBQUUsS0FEUjtBQUVDLFNBQUssRUFBRSxNQUFDLDJDQUFEO0FBQVEsVUFBSSxFQUFDLE9BQWI7QUFBcUIsV0FBSyxFQUFDLE9BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbUMsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRSxVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW5DLENBRlI7QUFHQyxZQUFRLEVBQUMsZ0JBSFY7QUFJQyxTQUFLLEVBQUVKLEVBQUUsR0FBQyxNQUFDLG1EQUFEO0FBQVksYUFBTyxFQUFJRSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUQsR0FBb0MsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSjlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxFQU9BLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTBCRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFDRSxhQUFTLEVBQUMsd0JBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTGMsYUFBTyxFQUFFLEVBREo7QUFFTEMsWUFBTSxFQUFFLENBRkg7QUFHTEMsZUFBUyxFQUFFO0FBSE4sS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUd0QixRQVJILENBREYsQ0ExQkYsQ0FQQSxDQUROO0FBaURELENBbkVEOztHQUFNRCxVO1VBTVdFLHVEOzs7S0FOWEYsVTtBQXFFTkEsVUFBVSxDQUFDd0IsU0FBWCxHQUF1QjtBQUNuQnZCLFVBQVEsRUFBRXdCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETixDQUF2QjtBQUdlM0IseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC5hM2I5ZGU0NmRiYTM3NDc3MmYyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsIHVzZVN0YXRlLGZvcndhcmRSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0LCBNZW51LCBQYWdlSGVhZGVyLCBCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVbm9yZGVyZWRMaXN0T3V0bGluZWQsIEhvbWVPdXRsaW5lZCwgU2hvcHBpbmdDYXJ0T3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5jb25zdCB7IENvbnRlbnQsIFNpZGVyIH0gPSBMYXlvdXQ7XHJcblxyXG5pbXBvcnQgTWVudUhlYWRlciBmcm9tICcuL01lbnVIZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gcm9tIGZyb20gJy4vTG9naW5Gb3JtJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5jb25zdCBNZW51TGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAvLyBjb25zdCBbaXNMb2dJbiwgc2V0SXNMb2dJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8g66as642V7Iqk66GcIOuzgOqyvVxyXG4gIC8vY29uc3QgeyBsb2dpbkRvbmUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gIC8vaXNMb2dpbuydtCDrsJTrgIzrqbQg7JWM7JWE7IScIHVzZVNlbGVjdG9yIOy7tO2PrOuEjO2KuCDrpqzroIzrjZTrp4Eg65Cc64ukLiBcclxuICBjb25zdCB7bWV9ICA9ICB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIFxyXG4gIGNvbnN0IFtjYXJ0TnVtLCBzZXRDYXJ0TnVtXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGNhbCA9IHVzZU1lbW8oKCkgPT57XHJcbiAgICBsZXQgdG90YWwgPSAgT3JkZXIubWFwICgob3JkZXIpID0+e1xyXG4gICAgICAgIGNvbnN0IHsgcXVhbnRpdHkgfSA9IG9yZGVyO1xyXG4gICAgICAgIHJldHVybiBxdWFudGl0eTtcclxuICAgIH0pLnJlZHVjZSgobCwgcik9PiBsK3IsIDApO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG5cclxufSxbT3JkZXJdKTtcclxuY29uc29sZS5sb2coY2FsKVxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgICBnaG9zdD17ZmFsc2V9XHJcbiAgICAgICAgICAgIHRpdGxlPXs8QnV0dG9uIHNpemU9J2xhcmdlJyBzaGFwZT1cInJvdW5kXCI+PExpbmsgaHJlZiA9XCIvcHJvZHVjdFwiPkZBS0UtU0hPUDwvTGluaz48L0J1dHRvbj59IFxyXG4gICAgICAgICAgICBzdWJUaXRsZT1cImJ5IGRldkNvZGVyaWFuXCJcclxuICAgICAgICAgICAgZXh0cmE9e21lPzxNZW51SGVhZGVyIGNhcnROdW0gPSB7Y2FydE51bX0gLz46PExvZ2luRnJvbS8+fVxyXG4gICAgICAgICAgICA+PC9QYWdlSGVhZGVyPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHsvKiA8U2lkZXIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17WydzdWIxJ119XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIGJvcmRlclJpZ2h0OiAwIH19XHJcbiAgICAgICAgICAgICAgc2VsZWN0YWJsZSA9e2ZhbHNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIiBpY29uPXs8SG9tZU91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCIgaWNvbj17PFNob3BwaW5nQ2FydE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9XCIvY2FydFwiPk15IENhcnQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cInN1YjFcIiBpY29uPXs8VW5vcmRlcmVkTGlzdE91dGxpbmVkIC8+fSB0aXRsZT1cIlByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIj48TGluayBocmVmID1cIi9wcm9kdWN0XCI+QWxsPC9MaW5rPjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiPjxMaW5rIGhyZWYgPVwiL3Byb2R1Y3RcIj5NZW5zPC9MaW5rPjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNVwiPjxMaW5rIGhyZWYgPVwiL3Byb2R1Y3RcIj5Xb21lbnM8L0xpbms+PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI2XCI+PExpbmsgaHJlZiA9XCIvcHJvZHVjdC9jYXRlZ29yeS9qZXdlbGVyeVwiPmpld2VsZXJ5PC9MaW5rPjwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiN1wiPjxMaW5rIGhyZWYgPVwiL3Byb2R1Y3RcIj5lbGVjdHJvbmljczwvTGluaz48L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPC9TaWRlcj4gKi99XHJcblxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbnRlbnRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjQsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5NZW51TGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=