webpackHotUpdate_N_E("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MenuLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MenuLayout */ "./components/MenuLayout.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\pages\\cart.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Meta = antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta;

var cart = function cart() {
  var data = [{
    href: 'https://ant.design',
    title: "ant design part",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)'
  }, {
    href: 'https://ant.design',
    title: "ant design part",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)'
  }, {
    href: 'https://ant.design',
    title: "ant design part",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)'
  }, {
    href: 'https://ant.design',
    title: "ant design part",
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)'
  }];
  return __jsx(_components_MenuLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "cart", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    grid: {
      gutter: 16,
      column: 4
    },
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        style: {
          width: 300
        },
        cover: __jsx("img", {
          alt: "example",
          src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 29
          }
        }),
        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SettingOutlined"], {
          key: "setting",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }
        }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
          key: "edit",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }
        }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
          key: "ellipsis",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }
        })],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }
      }, __jsx(Meta, {
        title: "Europe Street beat",
        description: "www.instagram.com",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 30
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (cart);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsImNhcnQiLCJkYXRhIiwiaHJlZiIsInRpdGxlIiwiYXZhdGFyIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiZ3V0dGVyIiwiY29sdW1uIiwiaXRlbSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLElBQVIsR0FBaUJDLHlDQUFqQixDQUFRRCxJQUFSOztBQUVBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFFZixNQUFNQyxJQUFJLEdBQUcsQ0FDVDtBQUNJQyxRQUFJLEVBQUUsb0JBRFY7QUFFSUMsU0FBSyxtQkFGVDtBQUdJQyxVQUFNLEVBQUUsa0VBSFo7QUFJSUMsZUFBVyxFQUNULHdGQUxOO0FBTUlDLFdBQU8sRUFDTDtBQVBOLEdBRFMsRUFVVDtBQUNJSixRQUFJLEVBQUUsb0JBRFY7QUFFSUMsU0FBSyxtQkFGVDtBQUdJQyxVQUFNLEVBQUUsa0VBSFo7QUFJSUMsZUFBVyxFQUNULHdGQUxOO0FBTUlDLFdBQU8sRUFDTDtBQVBOLEdBVlMsRUFtQlQ7QUFDSUosUUFBSSxFQUFFLG9CQURWO0FBRUlDLFNBQUssbUJBRlQ7QUFHSUMsVUFBTSxFQUFFLGtFQUhaO0FBSUlDLGVBQVcsRUFDVCx3RkFMTjtBQU1JQyxXQUFPLEVBQ0w7QUFQTixHQW5CUyxFQTRCVDtBQUNJSixRQUFJLEVBQUUsb0JBRFY7QUFFSUMsU0FBSyxtQkFGVDtBQUdJQyxVQUFNLEVBQUUsa0VBSFo7QUFJSUMsZUFBVyxFQUNULHdGQUxOO0FBTUlDLFdBQU8sRUFDTDtBQVBOLEdBNUJTLENBQWI7QUF3Q0EsU0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFSSxNQUFDLHlDQUFEO0FBQ0ksUUFBSSxFQUFFO0FBQUVDLFlBQU0sRUFBRSxFQUFWO0FBQWNDLFlBQU0sRUFBRTtBQUF0QixLQURWO0FBRUksY0FBVSxFQUFFUCxJQUZoQjtBQUdJLGNBQVUsRUFBRSxvQkFBQ1EsSUFBRDtBQUFBLGFBQ1osTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMseUNBQUQ7QUFDSSxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FEWDtBQUVRLGFBQUssRUFDTDtBQUNJLGFBQUcsRUFBQyxTQURSO0FBRUksYUFBRyxFQUFDLHFFQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFIUjtBQVFJLGVBQU8sRUFBRSxDQUNULE1BQUMsaUVBQUQ7QUFBaUIsYUFBRyxFQUFDLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUyxFQUVULE1BQUMsOERBQUQ7QUFBYyxhQUFHLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZTLEVBR1QsTUFBQyxrRUFBRDtBQUFrQixhQUFHLEVBQUMsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhTLENBUmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWNTLE1BQUMsSUFBRDtBQUFNLGFBQUssRUFBQyxvQkFBWjtBQUFpQyxtQkFBVyxFQUFDLG1CQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZFQsQ0FESixDQURZO0FBQUEsS0FIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUErQkgsQ0F6RUQ7O0FBMkVlVixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LmE4YWE0ZTk2OTM1NGI5Yjg4NWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVudUxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL01lbnVMYXlvdXQnXHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgQ2FyZCxMaXN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEVkaXRPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcblxyXG5jb25zdCBjYXJ0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9hbnQuZGVzaWduJyxcclxuICAgICAgICAgICAgdGl0bGU6IGBhbnQgZGVzaWduIHBhcnRgLFxyXG4gICAgICAgICAgICBhdmF0YXI6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uJyxcclxuICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAnV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ24gcmVzb3VyY2VzIChTa2V0Y2ggYW5kIEF4dXJlKSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICAgICAgICAgIHRpdGxlOiBgYW50IGRlc2lnbiBwYXJ0YCxcclxuICAgICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgICAgICAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydGAsXHJcbiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgICAnQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4nLFxyXG4gICAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICAgICdXZSBzdXBwbHkgYSBzZXJpZXMgb2YgZGVzaWduIHByaW5jaXBsZXMsIHByYWN0aWNhbCBwYXR0ZXJucyBhbmQgaGlnaCBxdWFsaXR5IGRlc2lnbiByZXNvdXJjZXMgKFNrZXRjaCBhbmQgQXh1cmUpJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9hbnQuZGVzaWduJyxcclxuICAgICAgICAgICAgdGl0bGU6IGBhbnQgZGVzaWduIHBhcnRgLFxyXG4gICAgICAgICAgICBhdmF0YXI6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uJyxcclxuICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAnV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ24gcmVzb3VyY2VzIChTa2V0Y2ggYW5kIEF4dXJlKSdcclxuICAgICAgICB9LFxyXG4gICAgICBdO1xyXG4gICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudUxheW91dD5cclxuICAgICAgICAgICAgY2FydFxyXG4gICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgZ3JpZD17eyBndXR0ZXI6IDE2LCBjb2x1bW46IDQgfX1cclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Zlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0ppcUdzdEVmb1dBT0hpVHhjbHFpLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdE91dGxpbmVkIGtleT1cImVkaXRcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZWxsaXBzaXNcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPVwiRXVyb3BlIFN0cmVldCBiZWF0XCIgZGVzY3JpcHRpb249XCJ3d3cuaW5zdGFncmFtLmNvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogPC9Sb3c+ICovfVxyXG4gICAgICAgIDwvTWVudUxheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydFxyXG4iXSwic291cmNlUm9vdCI6IiJ9