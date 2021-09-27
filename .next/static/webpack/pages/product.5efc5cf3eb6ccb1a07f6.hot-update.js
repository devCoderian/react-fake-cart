webpackHotUpdate_N_E("pages/product",{

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\ProductList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Meta = antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta;

var ProductList = function ProductList() {
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
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(icon), text);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 16,
    align: "middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    itemLayout: "vertical",
    size: "large",
    pagination: {
      onChange: function onChange(page) {
        console.log(page);
      },
      pageSize: 5
    },
    dataSource: listData,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        key: item.title,
        actions: [__jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["StarOutlined"],
          text: "156",
          key: "list-vertical-star-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }
        }), __jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LikeOutlined"],
          text: "156",
          key: "list-vertical-like-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }
        }), __jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"],
          text: "2",
          key: "list-vertical-message",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }
        })],
        extra: __jsx("img", {
          width: 272,
          alt: "logo",
          src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }));
};

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

$RefreshReg$(_c, "ProductList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlByb2R1Y3RMaXN0IiwibGlzdERhdGEiLCJpIiwicHVzaCIsImhyZWYiLCJ0aXRsZSIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsIkljb25UZXh0IiwiaWNvbiIsInRleHQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoYW5nZSIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicGFnZVNpemUiLCJpdGVtIiwiU3Rhck91dGxpbmVkIiwiTGlrZU91dGxpbmVkIiwiTWVzc2FnZU91dGxpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFRQSxJQUFSLEdBQWlCQyx5Q0FBakIsQ0FBUUQsSUFBUjs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0JELFlBQVEsQ0FBQ0UsSUFBVCxDQUFjO0FBQ1pDLFVBQUksRUFBRSxvQkFETTtBQUVaQyxXQUFLLDRCQUFxQkgsQ0FBckIsQ0FGTztBQUdaSSxZQUFNLEVBQUUsa0VBSEk7QUFJWkMsaUJBQVcsRUFDVCx3RkFMVTtBQU1aQyxhQUFPLEVBQ0w7QUFQVSxLQUFkO0FBU0Q7O0FBQ0QsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFFBQVNBLElBQVQ7QUFBQSxXQUNmLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkgsSUFBcEIsQ0FESCxFQUVHQyxJQUZILENBRGU7QUFBQSxHQUFqQjs7QUFPQSxTQUNJLE1BQUMsd0NBQUQ7QUFBTSxVQUFNLEVBQUUsRUFBZDtBQUFrQixTQUFLLEVBQUMsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUksQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFHQSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFJLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMseUNBQUQ7QUFDUSxjQUFVLEVBQUMsVUFEbkI7QUFFUSxRQUFJLEVBQUMsT0FGYjtBQUdRLGNBQVUsRUFBRTtBQUNaRyxjQUFRLEVBQUUsa0JBQUFDLElBQUksRUFBSTtBQUNkQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNILE9BSFc7QUFJWkcsY0FBUSxFQUFFO0FBSkUsS0FIcEI7QUFTUSxjQUFVLEVBQUVqQixRQVRwQjtBQVVRLGNBQVUsRUFBRSxvQkFBQWtCLElBQUk7QUFBQSxhQUNoQixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNJLFdBQUcsRUFBRUEsSUFBSSxDQUFDZCxLQURkO0FBRUksZUFBTyxFQUFFLENBQ1QsTUFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFZSw4REFBaEI7QUFBOEIsY0FBSSxFQUFDLEtBQW5DO0FBQXlDLGFBQUcsRUFBQyxzQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURTLEVBRVQsTUFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFQyw4REFBaEI7QUFBOEIsY0FBSSxFQUFDLEtBQW5DO0FBQXlDLGFBQUcsRUFBQyxzQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZTLEVBR1QsTUFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFQyxpRUFBaEI7QUFBaUMsY0FBSSxFQUFDLEdBQXRDO0FBQTBDLGFBQUcsRUFBQyx1QkFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhTLENBRmI7QUFPSSxhQUFLLEVBQ0w7QUFDSSxlQUFLLEVBQUUsR0FEWDtBQUVJLGFBQUcsRUFBQyxNQUZSO0FBR0ksYUFBRyxFQUFDLHFFQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZUksTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0EsYUFBSyxFQUFFO0FBQUcsY0FBSSxFQUFFSCxJQUFJLENBQUNmLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxQmUsSUFBSSxDQUFDZCxLQUExQixDQURQO0FBRUEsbUJBQVcsRUFBRWMsSUFBSSxDQUFDWixXQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZkosRUFtQktZLElBQUksQ0FBQ1gsT0FuQlYsQ0FEZ0I7QUFBQSxLQVZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FIQSxFQXVDRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFLLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDRixDQURKO0FBNENILENBaEVEOztLQUFNUixXO0FBa0VTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0LjVlZmM1Y2YzZWI2Y2NiMWEwN2Y2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgTGlzdCwgQXZhdGFyLCBTcGFjZSxDYXJkfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgTWVzc2FnZU91dGxpbmVkLCBMaWtlT3V0bGluZWQsIFN0YXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0RGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMzsgaSsrKSB7XHJcbiAgICAgIGxpc3REYXRhLnB1c2goe1xyXG4gICAgICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgICAgIHRpdGxlOiBgYW50IGRlc2lnbiBwYXJ0ICR7aX1gLFxyXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uJyxcclxuICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSksIHRvIGhlbHAgcGVvcGxlIGNyZWF0ZSB0aGVpciBwcm9kdWN0IHByb3RvdHlwZXMgYmVhdXRpZnVsbHkgYW5kIGVmZmljaWVudGx5LicsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgSWNvblRleHQgPSAoeyBpY29uLCB0ZXh0IH0pID0+IChcclxuICAgICAgPFNwYWNlPlxyXG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pfVxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L1NwYWNlPlxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um93ICBndXR0ZXI9ezE2fSBhbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICAgIDxDb2wgc3BhbiA9IHszfT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW4gPSB7MTh9PlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtsaXN0RGF0YX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e1N0YXJPdXRsaW5lZH0gdGV4dD1cIjE1NlwiIGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e0xpa2VPdXRsaW5lZH0gdGV4dD1cIjE1NlwiIGtleT1cImxpc3QtdmVydGljYWwtbGlrZS1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e01lc3NhZ2VPdXRsaW5lZH0gdGV4dD1cIjJcIiBrZXk9XCJsaXN0LXZlcnRpY2FsLW1lc3NhZ2VcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNzJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvbXFhUXN3Y3lETGNYeURLblpmRVMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc3BhbiA9IHsgM30+XHJcbiAgICAgICAgICAgICAgPC9Db2w+ICBcclxuICAgICAgICA8L1Jvdz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==