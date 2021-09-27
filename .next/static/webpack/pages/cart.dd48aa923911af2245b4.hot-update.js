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
      gutter: 8,
      column: 5,
      xs: 2,
      md: 3
    },
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
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
            lineNumber: 61,
            columnNumber: 29
          }
        }),
        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SettingOutlined"], {
          key: "setting",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }
        }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
          key: "edit",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }
        }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
          key: "ellipsis",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }
        })],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, __jsx(Meta, {
        title: item.title,
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 30
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsImNhcnQiLCJkYXRhIiwiaHJlZiIsInRpdGxlIiwiYXZhdGFyIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiZ3V0dGVyIiwiY29sdW1uIiwieHMiLCJtZCIsIml0ZW0iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFRQSxJQUFSLEdBQWlCQyx5Q0FBakIsQ0FBUUQsSUFBUjs7QUFFQSxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBRWYsTUFBTUMsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsUUFBSSxFQUFFLG9CQURWO0FBRUlDLFNBQUssbUJBRlQ7QUFHSUMsVUFBTSxFQUFFLGtFQUhaO0FBSUlDLGVBQVcsRUFDVCx3RkFMTjtBQU1JQyxXQUFPLEVBQ0w7QUFQTixHQURTLEVBVVQ7QUFDSUosUUFBSSxFQUFFLG9CQURWO0FBRUlDLFNBQUssbUJBRlQ7QUFHSUMsVUFBTSxFQUFFLGtFQUhaO0FBSUlDLGVBQVcsRUFDVCx3RkFMTjtBQU1JQyxXQUFPLEVBQ0w7QUFQTixHQVZTLEVBbUJUO0FBQ0lKLFFBQUksRUFBRSxvQkFEVjtBQUVJQyxTQUFLLG1CQUZUO0FBR0lDLFVBQU0sRUFBRSxrRUFIWjtBQUlJQyxlQUFXLEVBQ1Qsd0ZBTE47QUFNSUMsV0FBTyxFQUNMO0FBUE4sR0FuQlMsRUE0QlQ7QUFDSUosUUFBSSxFQUFFLG9CQURWO0FBRUlDLFNBQUssbUJBRlQ7QUFHSUMsVUFBTSxFQUFFLGtFQUhaO0FBSUlDLGVBQVcsRUFDVCx3RkFMTjtBQU1JQyxXQUFPLEVBQ0w7QUFQTixHQTVCUyxDQUFiO0FBd0NBLFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBR0ksTUFBQyx5Q0FBRDtBQUNJLFFBQUksRUFBRTtBQUFFQyxZQUFNLEVBQUUsQ0FBVjtBQUFhQyxZQUFNLEVBQUUsQ0FBckI7QUFBeUJDLFFBQUUsRUFBRSxDQUE3QjtBQUFnQ0MsUUFBRSxFQUFFO0FBQXBDLEtBRFY7QUFFSSxjQUFVLEVBQUVULElBRmhCO0FBR0ksY0FBVSxFQUFFLG9CQUFDVSxJQUFEO0FBQUEsYUFDWixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyx5Q0FBRDtBQUNJLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUU7QUFBVCxTQURYO0FBRVEsYUFBSyxFQUNMO0FBQ0ksYUFBRyxFQUFDLFNBRFI7QUFFSSxhQUFHLEVBQUMscUVBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhSO0FBUUksZUFBTyxFQUFFLENBQ1QsTUFBQyxpRUFBRDtBQUFpQixhQUFHLEVBQUMsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURTLEVBRVQsTUFBQyw4REFBRDtBQUFjLGFBQUcsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRlMsRUFHVCxNQUFDLGtFQUFEO0FBQWtCLGFBQUcsRUFBQyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSFMsQ0FSYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBY1MsTUFBQyxJQUFEO0FBQU0sYUFBSyxFQUFFRCxJQUFJLENBQUNSLEtBQWxCO0FBQXlCLG1CQUFXLEVBQUVRLElBQUksQ0FBQ04sV0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWRULENBREosQ0FEWTtBQUFBLEtBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKO0FBZ0NILENBMUVEOztBQTRFZUwsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC5kZDQ4YWE5MjM5MTFhZjIyNDViNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbnVMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51TGF5b3V0J1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IENhcmQsTGlzdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBFZGl0T3V0bGluZWQsIEVsbGlwc2lzT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5cclxuY29uc3QgY2FydCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICAgICAgICAgIHRpdGxlOiBgYW50IGRlc2lnbiBwYXJ0YCxcclxuICAgICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgICAgICAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydGAsXHJcbiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgICAnQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4nLFxyXG4gICAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICAgICdXZSBzdXBwbHkgYSBzZXJpZXMgb2YgZGVzaWduIHByaW5jaXBsZXMsIHByYWN0aWNhbCBwYXR0ZXJucyBhbmQgaGlnaCBxdWFsaXR5IGRlc2lnbiByZXNvdXJjZXMgKFNrZXRjaCBhbmQgQXh1cmUpJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9hbnQuZGVzaWduJyxcclxuICAgICAgICAgICAgdGl0bGU6IGBhbnQgZGVzaWduIHBhcnRgLFxyXG4gICAgICAgICAgICBhdmF0YXI6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uJyxcclxuICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAnV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ24gcmVzb3VyY2VzIChTa2V0Y2ggYW5kIEF4dXJlKSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICAgICAgICAgIHRpdGxlOiBgYW50IGRlc2lnbiBwYXJ0YCxcclxuICAgICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSknXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lbnVMYXlvdXQ+XHJcbiAgICAgICAgICAgIGNhcnRcclxuICAgICAgICAgICAgey8qIDxSb3cgZ3V0dGVyID0gezR9PiAqL31cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGdyaWQ9e3sgZ3V0dGVyOiA4LCBjb2x1bW46IDUgLCB4czogMiwgbWQ6IDN9fVxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvSmlxR3N0RWZvV0FPSGlUeGNscWkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJzZXR0aW5nXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCBrZXk9XCJlbGxpcHNpc1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9e2l0ZW0udGl0bGV9IGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIDwvUm93PiAqL31cclxuICAgICAgICA8L01lbnVMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcnRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==