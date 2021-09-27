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
    align: "middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["StarOutlined"],
          text: price,
          key: "list-vertical-star-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }
        }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 35
            }
          }),
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
            lineNumber: 52,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlByb2R1Y3RMaXN0IiwibGlzdERhdGEiLCJpIiwicHVzaCIsImhyZWYiLCJ0aXRsZSIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsInByaWNlIiwiSWNvblRleHQiLCJpY29uIiwidGV4dCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJvbkNoYW5nZSIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicGFnZVNpemUiLCJpdGVtIiwiU3Rhck91dGxpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFRQSxJQUFSLEdBQWlCQyx5Q0FBakIsQ0FBUUQsSUFBUjs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0JELFlBQVEsQ0FBQ0UsSUFBVCxDQUFjO0FBQ1pDLFVBQUksRUFBRSxvQkFETTtBQUVaQyxXQUFLLDRCQUFxQkgsQ0FBckIsQ0FGTztBQUdaSSxZQUFNLEVBQUUsa0VBSEk7QUFJWkMsaUJBQVcsRUFDVCx3RkFMVTtBQU1aQyxhQUFPLEVBQ0wsK0xBUFU7QUFRVkMsV0FBSyxZQUFLUCxDQUFMO0FBUkssS0FBZDtBQVVEOztBQUNELE1BQU1RLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsV0FDZixNQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ0dDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JILElBQXBCLENBREgsRUFFR0MsSUFGSCxDQURlO0FBQUEsR0FBakI7O0FBTUEsTUFBTUcsS0FBSyxHQUFHO0FBQUVDLGNBQVUsRUFBRSxNQUFkO0FBQXNCQyxXQUFPLEVBQUUsVUFBL0I7QUFBMENDLGdCQUFZLEVBQUU7QUFBeEQsR0FBZDtBQUNBLFNBQ0ksTUFBQyx3Q0FBRDtBQUFNLFVBQU0sRUFBRSxFQUFkO0FBQWtCLFNBQUssRUFBQyxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBSSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUdBLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUksRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx5Q0FBRDtBQUFRLFNBQUssRUFBRUgsS0FBZjtBQUNRLGNBQVUsRUFBQyxVQURuQjtBQUVRLFFBQUksRUFBQyxPQUZiO0FBR1EsY0FBVSxFQUFFO0FBQ1pJLGNBQVEsRUFBRSxrQkFBQUMsSUFBSSxFQUFJO0FBQ2RDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0gsT0FIVztBQUlaRyxjQUFRLEVBQUU7QUFKRSxLQUhwQjtBQVNRLGNBQVUsRUFBRXRCLFFBVHBCO0FBVVEsY0FBVSxFQUFFLG9CQUFBdUIsSUFBSTtBQUFBLGFBQ2hCLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksV0FBRyxFQUFFQSxJQUFJLENBQUNuQixLQURkO0FBRUksZUFBTyxFQUFFLENBQ1QsTUFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFb0IsOERBQWhCO0FBQThCLGNBQUksRUFBRWhCLEtBQXBDO0FBQTJDLGFBQUcsRUFBQyxzQkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURTLEVBRVQsTUFBQywyQ0FBRDtBQUFRLGNBQUksRUFBRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRlMsQ0FGYjtBQU9JLGFBQUssRUFDTDtBQUNJLGVBQUssRUFBRSxHQURYO0FBRUksYUFBRyxFQUFDLE1BRlI7QUFHSSxhQUFHLEVBQUMscUVBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FlSSxNQUFDLHlDQUFELENBQU0sSUFBTixDQUFXLElBQVg7QUFDQSxhQUFLLEVBQUU7QUFBRyxjQUFJLEVBQUVlLElBQUksQ0FBQ3BCLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxQm9CLElBQUksQ0FBQ25CLEtBQTFCLENBRFA7QUFFQSxtQkFBVyxFQUFFbUIsSUFBSSxDQUFDakIsV0FGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWZKLEVBbUJLaUIsSUFBSSxDQUFDaEIsT0FuQlYsQ0FEZ0I7QUFBQSxLQVZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FIQSxFQXVDRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFJLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDRixDQURKO0FBNENILENBakVEOztLQUFNUixXO0FBbUVTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0LjFhM2QxNzM5ZDI5N2NlNWVhZjAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgTGlzdCwgQnV0dG9uLCBTcGFjZSxDYXJkfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgTWVzc2FnZU91dGxpbmVkLCBTaG9wcGluZ0NhcnRPdXRsaW5lZCwgU3Rhck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpc3REYXRhID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIzOyBpKyspIHtcclxuICAgICAgbGlzdERhdGEucHVzaCh7XHJcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICAgICAgdGl0bGU6IGBhbnQgZGVzaWduIHBhcnQgJHtpfWAsXHJcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4nLFxyXG4gICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAnV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ24gcmVzb3VyY2VzIChTa2V0Y2ggYW5kIEF4dXJlKSwgdG8gaGVscCBwZW9wbGUgY3JlYXRlIHRoZWlyIHByb2R1Y3QgcHJvdG90eXBlcyBiZWF1dGlmdWxseSBhbmQgZWZmaWNpZW50bHkuJyxcclxuICAgICAgICAgIHByaWNlOiBgJHtpfWBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IEljb25UZXh0ID0gKHsgaWNvbiwgdGV4dCB9KSA9PiAoXHJcbiAgICAgIDxTcGFjZT5cclxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChpY29uKX1cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9TcGFjZT5cclxuICAgICk7XHJcbiAgICBjb25zdCBzdHlsZSA9IHsgYmFja2dyb3VuZDogJyNmZmYnLCBwYWRkaW5nOiAnOHB4IDIwcHgnLG1hcmdpbkJvdHRvbTogJzYwcHgnfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdyAgZ3V0dGVyPXsxNn0gYWxpZ249XCJtaWRkbGVcIj5cclxuICAgICAgICA8Q29sIHNwYW4gPSB7M30+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzcGFuID0gezE4fT5cclxuICAgICAgICA8TGlzdCAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2xpc3REYXRhfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17U3Rhck91dGxpbmVkfSB0ZXh0PXtwcmljZX0ga2V5PVwibGlzdC12ZXJ0aWNhbC1zdGFyLW9cIiAvPixcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxTaG9wcGluZ0NhcnRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI3Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9tcWFRc3djeURMY1h5REtuWmZFUy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBzcGFuID0gezN9PlxyXG4gICAgICAgICAgICAgIDwvQ29sPiAgXHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=