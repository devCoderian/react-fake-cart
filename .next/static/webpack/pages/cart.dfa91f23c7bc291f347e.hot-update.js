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

  return __jsx(_components_MenuLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
        lineNumber: 36,
        columnNumber: 21
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
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
            lineNumber: 44,
            columnNumber: 25
          }
        }), __jsx(IconText, {
          icon: LikeOutlined,
          text: "156",
          key: "list-vertical-like-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }
        }), __jsx(IconText, {
          icon: MessageOutlined,
          text: "2",
          key: "list-vertical-message",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
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
            lineNumber: 49,
            columnNumber: 25
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
        avatar: __jsx(Avatar, {
          src: item.avatar,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 33
          }
        }),
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 32
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsImNhcnQiLCJsaXN0RGF0YSIsImkiLCJwdXNoIiwiaHJlZiIsInRpdGxlIiwiYXZhdGFyIiwiZGVzY3JpcHRpb24iLCJjb250ZW50Iiwib25DaGFuZ2UiLCJwYWdlIiwiY29uc29sZSIsImxvZyIsInBhZ2VTaXplIiwiaXRlbSIsIlN0YXJPdXRsaW5lZCIsIkxpa2VPdXRsaW5lZCIsIk1lc3NhZ2VPdXRsaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFRQSxJQUFSLEdBQWlCQyx5Q0FBakIsQ0FBUUQsSUFBUjs7QUFFQSxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBRWIsTUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQkQsWUFBUSxDQUFDRSxJQUFULENBQWM7QUFDWkMsVUFBSSxFQUFFLG9CQURNO0FBRVpDLFdBQUssNEJBQXFCSCxDQUFyQixDQUZPO0FBR1pJLFlBQU0sRUFBRSxrRUFISTtBQUlaQyxpQkFBVyxFQUNULHdGQUxVO0FBTVpDLGFBQU8sRUFDTDtBQVBVLEtBQWQ7QUFTRDs7QUFDSCxTQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUdJLE1BQUMseUNBQUQ7QUFDUSxjQUFVLEVBQUMsVUFEbkI7QUFFUSxRQUFJLEVBQUMsT0FGYjtBQUdRLGNBQVUsRUFBRTtBQUNaQyxjQUFRLEVBQUUsa0JBQUFDLElBQUksRUFBSTtBQUNkQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNILE9BSFc7QUFJWkcsY0FBUSxFQUFFO0FBSkUsS0FIcEI7QUFTUSxjQUFVLEVBQUVaLFFBVHBCO0FBVVEsVUFBTSxFQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGlCQVhSO0FBZVEsY0FBVSxFQUFFLG9CQUFBYSxJQUFJO0FBQUEsYUFDaEIsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDSSxXQUFHLEVBQUVBLElBQUksQ0FBQ1QsS0FEZDtBQUVJLGVBQU8sRUFBRSxDQUNULE1BQUMsUUFBRDtBQUFVLGNBQUksRUFBRVUsWUFBaEI7QUFBOEIsY0FBSSxFQUFDLEtBQW5DO0FBQXlDLGFBQUcsRUFBQyxzQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURTLEVBRVQsTUFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFQyxZQUFoQjtBQUE4QixjQUFJLEVBQUMsS0FBbkM7QUFBeUMsYUFBRyxFQUFDLHNCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRlMsRUFHVCxNQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUVDLGVBQWhCO0FBQWlDLGNBQUksRUFBQyxHQUF0QztBQUEwQyxhQUFHLEVBQUMsdUJBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFIUyxDQUZiO0FBT0ksYUFBSyxFQUNMO0FBQ0ksZUFBSyxFQUFFLEdBRFg7QUFFSSxhQUFHLEVBQUMsTUFGUjtBQUdJLGFBQUcsRUFBQyxxRUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWVJLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtBQUNBLGNBQU0sRUFBRSxNQUFDLE1BQUQ7QUFBUSxhQUFHLEVBQUVILElBQUksQ0FBQ1IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBRUEsYUFBSyxFQUFFO0FBQUcsY0FBSSxFQUFFUSxJQUFJLENBQUNWLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxQlUsSUFBSSxDQUFDVCxLQUExQixDQUZQO0FBR0EsbUJBQVcsRUFBRVMsSUFBSSxDQUFDUCxXQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZkosRUFvQktPLElBQUksQ0FBQ04sT0FwQlYsQ0FEZ0I7QUFBQSxLQWZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESjtBQWdESCxDQTlERDs7QUFnRWVSLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuZGZhOTFmMjNjN2JjMjkxZjM0N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZW51TGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudUxheW91dCdcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBDYXJkLExpc3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRWRpdE91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuXHJcbmNvbnN0IGNhcnQgPSAoKSA9PiB7XHJcbiAgIFxyXG4gICAgICBjb25zdCBsaXN0RGF0YSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIzOyBpKyspIHtcclxuICAgICAgICBsaXN0RGF0YS5wdXNoKHtcclxuICAgICAgICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgICAgICAgdGl0bGU6IGBhbnQgZGVzaWduIHBhcnQgJHtpfWAsXHJcbiAgICAgICAgICBhdmF0YXI6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4nLFxyXG4gICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSksIHRvIGhlbHAgcGVvcGxlIGNyZWF0ZSB0aGVpciBwcm9kdWN0IHByb3RvdHlwZXMgYmVhdXRpZnVsbHkgYW5kIGVmZmljaWVudGx5LicsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lbnVMYXlvdXQ+XHJcbiAgICAgICAgICAgIGNhcnRcclxuICAgICAgICAgICAgey8qIDxSb3cgZ3V0dGVyID0gezR9PiAqL31cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2xpc3REYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+YW50IGRlc2lnbjwvYj4gZm9vdGVyIHBhcnRcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e1N0YXJPdXRsaW5lZH0gdGV4dD1cIjE1NlwiIGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtMaWtlT3V0bGluZWR9IHRleHQ9XCIxNTZcIiBrZXk9XCJsaXN0LXZlcnRpY2FsLWxpa2Utb1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17TWVzc2FnZU91dGxpbmVkfSB0ZXh0PVwiMlwiIGtleT1cImxpc3QtdmVydGljYWwtbWVzc2FnZVwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNzJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9tcWFRc3djeURMY1h5REtuWmZFUy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17aXRlbS5hdmF0YXJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiA8L1Jvdz4gKi99XHJcbiAgICAgICAgPC9NZW51TGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJ0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=