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
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
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
  }, "cart", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    itemLayout: "vertical",
    size: "large",
    pagination: {
      onChange: function onChange(page) {
        console.log(page);
      },
      pageSize: 6
    },
    dataSource: listData,
    footer: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, "ant design"), " footer part"),
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        key: item.title,
        actions: [__jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StarOutlined"],
          text: "156",
          key: "list-vertical-star-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }
        }), __jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LikeOutlined"],
          text: "156",
          key: "list-vertical-like-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }
        }), __jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"],
          text: "2",
          key: "list-vertical-message",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
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
            lineNumber: 59,
            columnNumber: 25
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 32
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsImNhcnQiLCJsaXN0RGF0YSIsImkiLCJwdXNoIiwiaHJlZiIsInRpdGxlIiwiYXZhdGFyIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiSWNvblRleHQiLCJpY29uIiwidGV4dCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlIiwicGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlU2l6ZSIsIml0ZW0iLCJTdGFyT3V0bGluZWQiLCJMaWtlT3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsSUFBUixHQUFpQkMseUNBQWpCLENBQVFELElBQVI7O0FBRUEsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUViLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0JELFlBQVEsQ0FBQ0UsSUFBVCxDQUFjO0FBQ1pDLFVBQUksRUFBRSxvQkFETTtBQUVaQyxXQUFLLDRCQUFxQkgsQ0FBckIsQ0FGTztBQUdaSSxZQUFNLEVBQUUsa0VBSEk7QUFJWkMsaUJBQVcsRUFDVCx3RkFMVTtBQU1aQyxhQUFPLEVBQ0w7QUFQVSxLQUFkO0FBU0Q7O0FBQ0QsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFFBQVNBLElBQVQ7QUFBQSxXQUNmLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CSCxJQUFwQixDQURILEVBRUdDLElBRkgsQ0FEZTtBQUFBLEdBQWpCOztBQU9GLFNBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUcsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBSSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUdDLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUksRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx5Q0FBRDtBQUNRLGNBQVUsRUFBQyxVQURuQjtBQUVRLFFBQUksRUFBQyxPQUZiO0FBR1EsY0FBVSxFQUFFO0FBQ1pHLGNBQVEsRUFBRSxrQkFBQUMsSUFBSSxFQUFJO0FBQ2RDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0gsT0FIVztBQUlaRyxjQUFRLEVBQUU7QUFKRSxLQUhwQjtBQVNRLGNBQVUsRUFBRWpCLFFBVHBCO0FBVVEsVUFBTSxFQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGlCQVhSO0FBZVEsY0FBVSxFQUFFLG9CQUFBa0IsSUFBSTtBQUFBLGFBQ2hCLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksV0FBRyxFQUFFQSxJQUFJLENBQUNkLEtBRGQ7QUFFSSxlQUFPLEVBQUUsQ0FDVCxNQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUVlLDhEQUFoQjtBQUE4QixjQUFJLEVBQUMsS0FBbkM7QUFBeUMsYUFBRyxFQUFDLHNCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFMsRUFFVCxNQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUVDLDhEQUFoQjtBQUE4QixjQUFJLEVBQUMsS0FBbkM7QUFBeUMsYUFBRyxFQUFDLHNCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRlMsRUFHVCxNQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUVDLGlFQUFoQjtBQUFpQyxjQUFJLEVBQUMsR0FBdEM7QUFBMEMsYUFBRyxFQUFDLHVCQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSFMsQ0FGYjtBQU9JLGFBQUssRUFDTDtBQUNJLGVBQUssRUFBRSxHQURYO0FBRUksYUFBRyxFQUFDLE1BRlI7QUFHSSxhQUFHLEVBQUMscUVBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FlSSxNQUFDLHlDQUFELENBQU0sSUFBTixDQUFXLElBQVg7QUFDQSxhQUFLLEVBQUU7QUFBRyxjQUFJLEVBQUVILElBQUksQ0FBQ2YsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFCZSxJQUFJLENBQUNkLEtBQTFCLENBRFA7QUFFQSxtQkFBVyxFQUFFYyxJQUFJLENBQUNaLFdBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFmSixFQW1CS1ksSUFBSSxDQUFDWCxPQW5CVixDQURnQjtBQUFBLEtBZnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQUhELEVBNENHLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUssQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUNILENBRkgsQ0FESjtBQW9ESCxDQXpFRDs7QUEyRWVSLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuMzM0ZGJmMzg4NjFlOGY2ZmI1ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZW51TGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudUxheW91dCdcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBMaXN0LCBBdmF0YXIsIFNwYWNlLENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgTWVzc2FnZU91dGxpbmVkLCBMaWtlT3V0bGluZWQsIFN0YXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5cclxuY29uc3QgY2FydCA9ICgpID0+IHtcclxuICAgXHJcbiAgICAgIGNvbnN0IGxpc3REYXRhID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjM7IGkrKykge1xyXG4gICAgICAgIGxpc3REYXRhLnB1c2goe1xyXG4gICAgICAgICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICAgICAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydCAke2l9YCxcclxuICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmcnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICAnV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ24gcmVzb3VyY2VzIChTa2V0Y2ggYW5kIEF4dXJlKSwgdG8gaGVscCBwZW9wbGUgY3JlYXRlIHRoZWlyIHByb2R1Y3QgcHJvdG90eXBlcyBiZWF1dGlmdWxseSBhbmQgZWZmaWNpZW50bHkuJyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBJY29uVGV4dCA9ICh7IGljb24sIHRleHQgfSkgPT4gKFxyXG4gICAgICAgIDxTcGFjZT5cclxuICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pfVxyXG4gICAgICAgICAge3RleHR9XHJcbiAgICAgICAgPC9TcGFjZT5cclxuICAgICAgKTtcclxuICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51TGF5b3V0PlxyXG4gICAgICAgICAgICBjYXJ0XHJcbiAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBzcGFuID0gezN9PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzcGFuID0gezE4fT5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogNixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2xpc3REYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+YW50IGRlc2lnbjwvYj4gZm9vdGVyIHBhcnRcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e1N0YXJPdXRsaW5lZH0gdGV4dD1cIjE1NlwiIGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtMaWtlT3V0bGluZWR9IHRleHQ9XCIxNTZcIiBrZXk9XCJsaXN0LXZlcnRpY2FsLWxpa2Utb1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17TWVzc2FnZU91dGxpbmVkfSB0ZXh0PVwiMlwiIGtleT1cImxpc3QtdmVydGljYWwtbWVzc2FnZVwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNzJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9tcWFRc3djeURMY1h5REtuWmZFUy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0udGl0bGV9PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgc3BhbiA9IHsgM30+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPiAgXHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvTWVudUxheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydFxyXG4iXSwic291cmNlUm9vdCI6IiJ9