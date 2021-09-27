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
  var listData = [];

  for (var i = 0; i < 23; i++) {
    listData.push({
      href: 'https://ant.design',
      title: "ant design part ".concat(i),
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    });
  }

  return __jsx(_components_MenuLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, "cart", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    itemLayout: "vertical",
    size: "large",
    pagination: {
      onChange: function onChange(page) {
        console.log(page);
      },
      pageSize: 3
    },
    dataSource: listData,
    footer: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }
    }, "ant design"), " footer part"),
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        key: item.title,
        actions: [__jsx(IconText, {
          icon: StarOutlined,
          text: "156",
          key: "list-vertical-star-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }
        }), __jsx(IconText, {
          icon: LikeOutlined,
          text: "156",
          key: "list-vertical-like-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }
        }), __jsx(IconText, {
          icon: MessageOutlined,
          text: "2",
          key: "list-vertical-message",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }
        })],
        extra: __jsx("img", {
          width: 272,
          alt: "logo",
          src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
        avatar: __jsx(Avatar, {
          src: item.avatar,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 33
          }
        }),
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 32
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsImNhcnQiLCJkYXRhIiwiaHJlZiIsInRpdGxlIiwiYXZhdGFyIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwibGlzdERhdGEiLCJpIiwicHVzaCIsIm9uQ2hhbmdlIiwicGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlU2l6ZSIsIml0ZW0iLCJTdGFyT3V0bGluZWQiLCJMaWtlT3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsSUFBUixHQUFpQkMseUNBQWpCLENBQVFELElBQVI7O0FBRUEsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUVmLE1BQU1DLElBQUksR0FBRyxDQUNUO0FBQ0lDLFFBQUksRUFBRSxvQkFEVjtBQUVJQyxTQUFLLG1CQUZUO0FBR0lDLFVBQU0sRUFBRSxrRUFIWjtBQUlJQyxlQUFXLEVBQ1Qsd0ZBTE47QUFNSUMsV0FBTyxFQUNMO0FBUE4sR0FEUyxFQVVUO0FBQ0lKLFFBQUksRUFBRSxvQkFEVjtBQUVJQyxTQUFLLG1CQUZUO0FBR0lDLFVBQU0sRUFBRSxrRUFIWjtBQUlJQyxlQUFXLEVBQ1Qsd0ZBTE47QUFNSUMsV0FBTyxFQUNMO0FBUE4sR0FWUyxFQW1CVDtBQUNJSixRQUFJLEVBQUUsb0JBRFY7QUFFSUMsU0FBSyxtQkFGVDtBQUdJQyxVQUFNLEVBQUUsa0VBSFo7QUFJSUMsZUFBVyxFQUNULHdGQUxOO0FBTUlDLFdBQU8sRUFDTDtBQVBOLEdBbkJTLEVBNEJUO0FBQ0lKLFFBQUksRUFBRSxvQkFEVjtBQUVJQyxTQUFLLG1CQUZUO0FBR0lDLFVBQU0sRUFBRSxrRUFIWjtBQUlJQyxlQUFXLEVBQ1Qsd0ZBTE47QUFNSUMsV0FBTyxFQUNMO0FBUE4sR0E1QlMsQ0FBYjtBQXVDRSxNQUFNQyxRQUFRLEdBQUcsRUFBakI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCRCxZQUFRLENBQUNFLElBQVQsQ0FBYztBQUNaUCxVQUFJLEVBQUUsb0JBRE07QUFFWkMsV0FBSyw0QkFBcUJLLENBQXJCLENBRk87QUFHWkosWUFBTSxFQUFFLGtFQUhJO0FBSVpDLGlCQUFXLEVBQ1Qsd0ZBTFU7QUFNWkMsYUFBTyxFQUNMO0FBUFUsS0FBZDtBQVNEOztBQUNILFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBR0ksTUFBQyx5Q0FBRDtBQUNRLGNBQVUsRUFBQyxVQURuQjtBQUVRLFFBQUksRUFBQyxPQUZiO0FBR1EsY0FBVSxFQUFFO0FBQ1pJLGNBQVEsRUFBRSxrQkFBQUMsSUFBSSxFQUFJO0FBQ2RDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0gsT0FIVztBQUlaRyxjQUFRLEVBQUU7QUFKRSxLQUhwQjtBQVNRLGNBQVUsRUFBRVAsUUFUcEI7QUFVUSxVQUFNLEVBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosaUJBWFI7QUFlUSxjQUFVLEVBQUUsb0JBQUFRLElBQUk7QUFBQSxhQUNoQixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNJLFdBQUcsRUFBRUEsSUFBSSxDQUFDWixLQURkO0FBRUksZUFBTyxFQUFFLENBQ1QsTUFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFYSxZQUFoQjtBQUE4QixjQUFJLEVBQUMsS0FBbkM7QUFBeUMsYUFBRyxFQUFDLHNCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFMsRUFFVCxNQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUVDLFlBQWhCO0FBQThCLGNBQUksRUFBQyxLQUFuQztBQUF5QyxhQUFHLEVBQUMsc0JBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGUyxFQUdULE1BQUMsUUFBRDtBQUFVLGNBQUksRUFBRUMsZUFBaEI7QUFBaUMsY0FBSSxFQUFDLEdBQXRDO0FBQTBDLGFBQUcsRUFBQyx1QkFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhTLENBRmI7QUFPSSxhQUFLLEVBQ0w7QUFDSSxlQUFLLEVBQUUsR0FEWDtBQUVJLGFBQUcsRUFBQyxNQUZSO0FBR0ksYUFBRyxFQUFDLHFFQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZUksTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0EsY0FBTSxFQUFFLE1BQUMsTUFBRDtBQUFRLGFBQUcsRUFBRUgsSUFBSSxDQUFDWCxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFI7QUFFQSxhQUFLLEVBQUU7QUFBRyxjQUFJLEVBQUVXLElBQUksQ0FBQ2IsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFCYSxJQUFJLENBQUNaLEtBQTFCLENBRlA7QUFHQSxtQkFBVyxFQUFFWSxJQUFJLENBQUNWLFdBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFmSixFQW9CS1UsSUFBSSxDQUFDVCxPQXBCVixDQURnQjtBQUFBLEtBZnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKO0FBZ0RILENBckdEOztBQXVHZU4sbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC42ZDRmYzZlZjczNDk2MTVhNmUxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbnVMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51TGF5b3V0J1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IENhcmQsTGlzdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBFZGl0T3V0bGluZWQsIEVsbGlwc2lzT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5cclxuY29uc3QgY2FydCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICAgICAgICAgIHRpdGxlOiBgYW50IGRlc2lnbiBwYXJ0YCxcclxuICAgICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgICAgICAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydGAsXHJcbiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgICAnQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4nLFxyXG4gICAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICAgICdXZSBzdXBwbHkgYSBzZXJpZXMgb2YgZGVzaWduIHByaW5jaXBsZXMsIHByYWN0aWNhbCBwYXR0ZXJucyBhbmQgaGlnaCBxdWFsaXR5IGRlc2lnbiByZXNvdXJjZXMgKFNrZXRjaCBhbmQgQXh1cmUpJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9hbnQuZGVzaWduJyxcclxuICAgICAgICAgICAgdGl0bGU6IGBhbnQgZGVzaWduIHBhcnRgLFxyXG4gICAgICAgICAgICBhdmF0YXI6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uJyxcclxuICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAnV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ24gcmVzb3VyY2VzIChTa2V0Y2ggYW5kIEF4dXJlKSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICAgICAgICAgIHRpdGxlOiBgYW50IGRlc2lnbiBwYXJ0YCxcclxuICAgICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSknXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgXHJcbiAgICAgIGNvbnN0IGxpc3REYXRhID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjM7IGkrKykge1xyXG4gICAgICAgIGxpc3REYXRhLnB1c2goe1xyXG4gICAgICAgICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICAgICAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydCAke2l9YCxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmcnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICAnV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ24gcmVzb3VyY2VzIChTa2V0Y2ggYW5kIEF4dXJlKSwgdG8gaGVscCBwZW9wbGUgY3JlYXRlIHRoZWlyIHByb2R1Y3QgcHJvdG90eXBlcyBiZWF1dGlmdWxseSBhbmQgZWZmaWNpZW50bHkuJyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudUxheW91dD5cclxuICAgICAgICAgICAgY2FydFxyXG4gICAgICAgICAgICB7LyogPFJvdyBndXR0ZXIgPSB7NH0+ICovfVxyXG4gICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17bGlzdERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5hbnQgZGVzaWduPC9iPiBmb290ZXIgcGFydFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17U3Rhck91dGxpbmVkfSB0ZXh0PVwiMTU2XCIga2V5PVwibGlzdC12ZXJ0aWNhbC1zdGFyLW9cIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e0xpa2VPdXRsaW5lZH0gdGV4dD1cIjE1NlwiIGtleT1cImxpc3QtdmVydGljYWwtbGlrZS1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtNZXNzYWdlT3V0bGluZWR9IHRleHQ9XCIyXCIga2V5PVwibGlzdC12ZXJ0aWNhbC1tZXNzYWdlXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI3Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL21xYVFzd2N5RExjWHlES25aZkVTLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtpdGVtLmF2YXRhcn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIDwvUm93PiAqL31cclxuICAgICAgICA8L01lbnVMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcnRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==