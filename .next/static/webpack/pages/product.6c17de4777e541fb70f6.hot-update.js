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
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      price: "".concat(i)
    });
  }

  var IconText = function IconText(_ref) {
    var icon = _ref.icon,
        text = _ref.text;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(icon), text);
  };

  var style = {
    background: '#fff',
    padding: '8px 20px',
    marginBottom: '60px'
  };
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 16,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: style,
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
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DollarCircleOutlined"],
          text: item.price,
          key: "list-vertical-star-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }
        }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 35
            }
          }),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
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
            lineNumber: 50,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlByb2R1Y3RMaXN0IiwibGlzdERhdGEiLCJpIiwicHVzaCIsImhyZWYiLCJ0aXRsZSIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsInByaWNlIiwiSWNvblRleHQiLCJpY29uIiwidGV4dCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJvbkNoYW5nZSIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicGFnZVNpemUiLCJpdGVtIiwiRG9sbGFyQ2lyY2xlT3V0bGluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLElBQVIsR0FBaUJDLHlDQUFqQixDQUFRRCxJQUFSOztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsTUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQkQsWUFBUSxDQUFDRSxJQUFULENBQWM7QUFDWkMsVUFBSSxFQUFFLG9CQURNO0FBRVpDLFdBQUssNEJBQXFCSCxDQUFyQixDQUZPO0FBR1pJLFlBQU0sRUFBRSxrRUFISTtBQUlaQyxpQkFBVyxFQUNULHdGQUxVO0FBTVpDLGFBQU8sRUFDTCwrTEFQVTtBQVFWQyxXQUFLLFlBQUtQLENBQUw7QUFSSyxLQUFkO0FBVUQ7O0FBQ0QsTUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFFBQVNBLElBQVQ7QUFBQSxXQUNmLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkgsSUFBcEIsQ0FESCxFQUVHQyxJQUZILENBRGU7QUFBQSxHQUFqQjs7QUFNQSxNQUFNRyxLQUFLLEdBQUc7QUFBRUMsY0FBVSxFQUFFLE1BQWQ7QUFBc0JDLFdBQU8sRUFBRSxVQUEvQjtBQUEwQ0MsZ0JBQVksRUFBRTtBQUF4RCxHQUFkO0FBQ0EsU0FDSSxNQUFDLHdDQUFEO0FBQU0sVUFBTSxFQUFFLEVBQWQ7QUFBa0IsV0FBTyxFQUFDLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFJLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMseUNBQUQ7QUFBUSxTQUFLLEVBQUVILEtBQWY7QUFDUSxjQUFVLEVBQUMsVUFEbkI7QUFFUSxRQUFJLEVBQUMsT0FGYjtBQUdRLGNBQVUsRUFBRTtBQUNaSSxjQUFRLEVBQUUsa0JBQUFDLElBQUksRUFBSTtBQUNkQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNILE9BSFc7QUFJWkcsY0FBUSxFQUFFO0FBSkUsS0FIcEI7QUFTUSxjQUFVLEVBQUV0QixRQVRwQjtBQVVRLGNBQVUsRUFBRSxvQkFBQXVCLElBQUk7QUFBQSxhQUNoQixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNJLFdBQUcsRUFBRUEsSUFBSSxDQUFDbkIsS0FEZDtBQUVJLGVBQU8sRUFBRSxDQUNULE1BQUMsUUFBRDtBQUFVLGNBQUksRUFBRW9CLHNFQUFoQjtBQUFzQyxjQUFJLEVBQUVELElBQUksQ0FBQ2YsS0FBakQ7QUFBd0QsYUFBRyxFQUFDLHNCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFMsRUFFVCxNQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGUyxDQUZiO0FBT0ksYUFBSyxFQUNMO0FBQ0ksZUFBSyxFQUFFLEdBRFg7QUFFSSxhQUFHLEVBQUMsTUFGUjtBQUdJLGFBQUcsRUFBQyxxRUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWVJLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtBQUNBLGFBQUssRUFBRTtBQUFHLGNBQUksRUFBRWUsSUFBSSxDQUFDcEIsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFCb0IsSUFBSSxDQUFDbkIsS0FBMUIsQ0FEUDtBQUVBLG1CQUFXLEVBQUVtQixJQUFJLENBQUNqQixXQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZkosRUFtQktpQixJQUFJLENBQUNoQixPQW5CVixDQURnQjtBQUFBLEtBVnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQURBLENBREo7QUF3Q0gsQ0E3REQ7O0tBQU1SLFc7QUErRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuNmMxN2RlNDc3N2U1NDFmYjcwZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBMaXN0LCBCdXR0b24sIFNwYWNlLENhcmR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBEb2xsYXJDaXJjbGVPdXRsaW5lZCwgU2hvcHBpbmdDYXJ0T3V0bGluZWQsIFN0YXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0RGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMzsgaSsrKSB7XHJcbiAgICAgIGxpc3REYXRhLnB1c2goe1xyXG4gICAgICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgICAgIHRpdGxlOiBgYW50IGRlc2lnbiBwYXJ0ICR7aX1gLFxyXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uJyxcclxuICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSksIHRvIGhlbHAgcGVvcGxlIGNyZWF0ZSB0aGVpciBwcm9kdWN0IHByb3RvdHlwZXMgYmVhdXRpZnVsbHkgYW5kIGVmZmljaWVudGx5LicsXHJcbiAgICAgICAgICBwcmljZTogYCR7aX1gXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBJY29uVGV4dCA9ICh7IGljb24sIHRleHQgfSkgPT4gKFxyXG4gICAgICA8U3BhY2U+XHJcbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoaWNvbil9XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvU3BhY2U+XHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7IGJhY2tncm91bmQ6ICcjZmZmJywgcGFkZGluZzogJzhweCAyMHB4JyxtYXJnaW5Cb3R0b206ICc2MHB4J307XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3cgIGd1dHRlcj17MTZ9IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICA8Q29sIHNwYW4gPSB7MTh9PlxyXG4gICAgICAgIDxMaXN0ICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogcGFnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17bGlzdERhdGF9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtEb2xsYXJDaXJjbGVPdXRsaW5lZH0gdGV4dD17aXRlbS5wcmljZX0ga2V5PVwibGlzdC12ZXJ0aWNhbC1zdGFyLW9cIiAvPixcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxTaG9wcGluZ0NhcnRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI3Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9tcWFRc3djeURMY1h5REtuWmZFUy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9