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

  var IconText = function IconText(_ref) {
    var icon = _ref.icon,
        text = _ref.text;
    return __jsx(Space, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(icon), text);
  };

  return __jsx(_components_MenuLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
        lineNumber: 43,
        columnNumber: 21
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
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
            lineNumber: 51,
            columnNumber: 25
          }
        }), __jsx(IconText, {
          icon: LikeOutlined,
          text: "156",
          key: "list-vertical-like-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }
        }), __jsx(IconText, {
          icon: MessageOutlined,
          text: "2",
          key: "list-vertical-message",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
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
            lineNumber: 56,
            columnNumber: 25
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
        avatar: __jsx(Avatar, {
          src: item.avatar,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 33
          }
        }),
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 32
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsImNhcnQiLCJsaXN0RGF0YSIsImkiLCJwdXNoIiwiaHJlZiIsInRpdGxlIiwiYXZhdGFyIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiSWNvblRleHQiLCJpY29uIiwidGV4dCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlIiwicGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlU2l6ZSIsIml0ZW0iLCJTdGFyT3V0bGluZWQiLCJMaWtlT3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsSUFBUixHQUFpQkMseUNBQWpCLENBQVFELElBQVI7O0FBRUEsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUViLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0JELFlBQVEsQ0FBQ0UsSUFBVCxDQUFjO0FBQ1pDLFVBQUksRUFBRSxvQkFETTtBQUVaQyxXQUFLLDRCQUFxQkgsQ0FBckIsQ0FGTztBQUdaSSxZQUFNLEVBQUUsa0VBSEk7QUFJWkMsaUJBQVcsRUFDVCx3RkFMVTtBQU1aQyxhQUFPLEVBQ0w7QUFQVSxLQUFkO0FBU0Q7O0FBQ0QsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFFBQVNBLElBQVQ7QUFBQSxXQUNmLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JILElBQXBCLENBREgsRUFFR0MsSUFGSCxDQURlO0FBQUEsR0FBakI7O0FBT0YsU0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFHSSxNQUFDLHlDQUFEO0FBQ1EsY0FBVSxFQUFDLFVBRG5CO0FBRVEsUUFBSSxFQUFDLE9BRmI7QUFHUSxjQUFVLEVBQUU7QUFDWkcsY0FBUSxFQUFFLGtCQUFBQyxJQUFJLEVBQUk7QUFDZEMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDSCxPQUhXO0FBSVpHLGNBQVEsRUFBRTtBQUpFLEtBSHBCO0FBU1EsY0FBVSxFQUFFakIsUUFUcEI7QUFVUSxVQUFNLEVBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosaUJBWFI7QUFlUSxjQUFVLEVBQUUsb0JBQUFrQixJQUFJO0FBQUEsYUFDaEIsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDSSxXQUFHLEVBQUVBLElBQUksQ0FBQ2QsS0FEZDtBQUVJLGVBQU8sRUFBRSxDQUNULE1BQUMsUUFBRDtBQUFVLGNBQUksRUFBRWUsWUFBaEI7QUFBOEIsY0FBSSxFQUFDLEtBQW5DO0FBQXlDLGFBQUcsRUFBQyxzQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURTLEVBRVQsTUFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFQyxZQUFoQjtBQUE4QixjQUFJLEVBQUMsS0FBbkM7QUFBeUMsYUFBRyxFQUFDLHNCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRlMsRUFHVCxNQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUVDLGVBQWhCO0FBQWlDLGNBQUksRUFBQyxHQUF0QztBQUEwQyxhQUFHLEVBQUMsdUJBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFIUyxDQUZiO0FBT0ksYUFBSyxFQUNMO0FBQ0ksZUFBSyxFQUFFLEdBRFg7QUFFSSxhQUFHLEVBQUMsTUFGUjtBQUdJLGFBQUcsRUFBQyxxRUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWVJLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtBQUNBLGNBQU0sRUFBRSxNQUFDLE1BQUQ7QUFBUSxhQUFHLEVBQUVILElBQUksQ0FBQ2IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBRUEsYUFBSyxFQUFFO0FBQUcsY0FBSSxFQUFFYSxJQUFJLENBQUNmLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxQmUsSUFBSSxDQUFDZCxLQUExQixDQUZQO0FBR0EsbUJBQVcsRUFBRWMsSUFBSSxDQUFDWixXQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZkosRUFvQktZLElBQUksQ0FBQ1gsT0FwQlYsQ0FEZ0I7QUFBQSxLQWZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESjtBQWdESCxDQXJFRDs7QUF1RWVSLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuZjkyMDY4ODc5NTI3ZjUwMmJkZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZW51TGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudUxheW91dCdcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBDYXJkLExpc3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRWRpdE91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuXHJcbmNvbnN0IGNhcnQgPSAoKSA9PiB7XHJcbiAgIFxyXG4gICAgICBjb25zdCBsaXN0RGF0YSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIzOyBpKyspIHtcclxuICAgICAgICBsaXN0RGF0YS5wdXNoKHtcclxuICAgICAgICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgICAgICAgdGl0bGU6IGBhbnQgZGVzaWduIHBhcnQgJHtpfWAsXHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4nLFxyXG4gICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSksIHRvIGhlbHAgcGVvcGxlIGNyZWF0ZSB0aGVpciBwcm9kdWN0IHByb3RvdHlwZXMgYmVhdXRpZnVsbHkgYW5kIGVmZmljaWVudGx5LicsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgSWNvblRleHQgPSAoeyBpY29uLCB0ZXh0IH0pID0+IChcclxuICAgICAgICA8U3BhY2U+XHJcbiAgICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChpY29uKX1cclxuICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICk7XHJcbiAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudUxheW91dD5cclxuICAgICAgICAgICAgY2FydFxyXG4gICAgICAgICAgICB7LyogPFJvdyBndXR0ZXIgPSB7NH0+ICovfVxyXG4gICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17bGlzdERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5hbnQgZGVzaWduPC9iPiBmb290ZXIgcGFydFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17U3Rhck91dGxpbmVkfSB0ZXh0PVwiMTU2XCIga2V5PVwibGlzdC12ZXJ0aWNhbC1zdGFyLW9cIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e0xpa2VPdXRsaW5lZH0gdGV4dD1cIjE1NlwiIGtleT1cImxpc3QtdmVydGljYWwtbGlrZS1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtNZXNzYWdlT3V0bGluZWR9IHRleHQ9XCIyXCIga2V5PVwibGlzdC12ZXJ0aWNhbC1tZXNzYWdlXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI3Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL21xYVFzd2N5RExjWHlES25aZkVTLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtpdGVtLmF2YXRhcn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIDwvUm93PiAqL31cclxuICAgICAgICA8L01lbnVMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcnRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==