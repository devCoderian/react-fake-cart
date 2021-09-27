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
      justify: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: {
        span: 5,
        offset: 1
      },
      lg: {
        span: 6,
        offset: 2
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 18
      }
    }, "\uCD1D \uAE08\uC561"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: {
        span: 5,
        offset: 1
      },
      lg: {
        span: 6,
        offset: 2
      },
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
    span: 16,
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
        columnNumber: 19
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
          columnNumber: 13
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text, {
        mark: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }
      }, "[ITEM]"), " ", item);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0TGlzdC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiQ2FydExpc3QiLCJvcmRlckxpc3RGb290ZXIiLCJzcGFuIiwib2Zmc2V0IiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNULDRDQURTLEVBRVQsb0NBRlMsRUFHVCw2Q0FIUyxFQUlULHdDQUpTLEVBS1QscUNBTFMsQ0FBYjs7QUFRQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBSztBQUN6QixXQUNJLG1FQUNBLE1BQUMsd0NBQUQ7QUFBSyxhQUFPLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ssTUFBQyx3Q0FBRDtBQUFLLFFBQUUsRUFBRTtBQUFFQyxZQUFJLEVBQUUsQ0FBUjtBQUFXQyxjQUFNLEVBQUU7QUFBbkIsT0FBVDtBQUFpQyxRQUFFLEVBQUU7QUFBRUQsWUFBSSxFQUFFLENBQVI7QUFBV0MsY0FBTSxFQUFFO0FBQW5CLE9BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREwsRUFJSSxNQUFDLHdDQUFEO0FBQUssUUFBRSxFQUFFO0FBQUVELFlBQUksRUFBRSxDQUFSO0FBQVdDLGNBQU0sRUFBRTtBQUFuQixPQUFUO0FBQWlDLFFBQUUsRUFBRTtBQUFFRCxZQUFJLEVBQUUsQ0FBUjtBQUFXQyxjQUFNLEVBQUU7QUFBbkIsT0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FKSixDQURBLENBREo7QUFZSCxHQWJEOztBQWNBLFNBQ0ksbUVBQ0EsTUFBQyw0Q0FBRDtBQUFTLGVBQVcsRUFBQyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLEVBRUEsTUFBQyx3Q0FBRDtBQUFLLFdBQU8sRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFJLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKLE1BQUMseUNBQUQ7QUFDRSxVQUFNLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFEVjtBQUVFLFVBQU0sRUFBRUYsZUFBZSxFQUZ6QjtBQUdFLFlBQVEsTUFIVjtBQUlFLGNBQVUsRUFBRUYsSUFKZDtBQUtFLGNBQVUsRUFBRSxvQkFBQUssSUFBSTtBQUFBLGFBQ2QsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsK0NBQUQsQ0FBWSxJQUFaO0FBQWlCLFlBQUksTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixPQUNrREEsSUFEbEQsQ0FEYztBQUFBLEtBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESSxDQURKLENBRkEsQ0FESjtBQW9CSCxDQW5DRDs7S0FBTUosUTtBQXFDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC4yYzIyNDVhYzhhYmMwZjdjNmIxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaXN0LCBUeXBvZ3JhcGh5LCBEaXZpZGVyLCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICAgICdSYWNpbmcgY2FyIHNwcmF5cyBidXJuaW5nIGZ1ZWwgaW50byBjcm93ZC4nLFxyXG4gICAgJ0phcGFuZXNlIHByaW5jZXNzIHRvIHdlZCBjb21tb25lci4nLFxyXG4gICAgJ0F1c3RyYWxpYW4gd2Fsa3MgMTAwa20gYWZ0ZXIgb3V0YmFjayBjcmFzaC4nLFxyXG4gICAgJ01hbiBjaGFyZ2VkIG92ZXIgbWlzc2luZyB3ZWRkaW5nIGdpcmwuJyxcclxuICAgICdMb3MgQW5nZWxlcyBiYXR0bGVzIGh1Z2Ugd2lsZGZpcmVzLicsXHJcbiAgXTtcclxuICBcclxuY29uc3QgQ2FydExpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBvcmRlckxpc3RGb290ZXIgPSAoKSA9PntcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgIDxDb2wgeHM9e3sgc3BhbjogNSwgb2Zmc2V0OiAxIH19IGxnPXt7IHNwYW46IDYsIG9mZnNldDogMiB9fT5cclxuICAgICAgICAgICAgICAgICDstJ0g6riI7JWhXHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9e3sgc3BhbjogNSwgb2Zmc2V0OiAxIH19IGxnPXt7IHNwYW46IDYsIG9mZnNldDogMiB9fT5cclxuICAgICAgICAgICAgICAgIOyjvOusuOuyhO2KvFxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+RGVmYXVsdCBTaXplPC9EaXZpZGVyPlxyXG4gICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Q29sIHNwYW4gPSB7MTZ9ID5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgaGVhZGVyPXs8ZGl2PuyjvOusuOyEnDwvZGl2Pn1cclxuICAgICAgICAgIGZvb3Rlcj17b3JkZXJMaXN0Rm9vdGVyKCl9XHJcbiAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5LlRleHQgbWFyaz5bSVRFTV08L1R5cG9ncmFwaHkuVGV4dD4ge2l0ZW19XHJcbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydExpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==