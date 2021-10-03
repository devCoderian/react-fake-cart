webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/OrderList.js":
/*!*********************************!*\
  !*** ./components/OrderList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/product */ "./reducers/product.js");
/* harmony import */ var _reducers_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/cart */ "./reducers/cart.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\OrderList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var OrderList = function OrderList() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.cart;
  }),
      Order = _useSelector2.Order;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var cal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var total = Order.map(function (order) {
      var id = order.id,
          quantity = order.quantity,
          price = order.price;
      console.log(quantity * order.price);
      return quantity * order.price;
    }).reduce(function (l, r) {
      return l + r;
    }, 0);
    return total.toFixed(2);
  }, [Order]);
  var removeAllCart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
    dispatch(Object(_reducers_cart__WEBPACK_IMPORTED_MODULE_5__["removeAllCartAction"])());
  }, []);
  var removeCart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (item) {
    e.preventDefault();
    dispatch(Object(_reducers_cart__WEBPACK_IMPORTED_MODULE_5__["removeCartAction"])(item));
  }, []);

  var orderListFooter = function orderListFooter() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      justify: "space-between",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: {
        span: 5,
        offset: 1
      },
      lg: {
        span: 6,
        offset: 4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, "\uCD1D \uAE08\uC561: $ ", cal), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: {
        span: 5,
        offset: 1
      },
      lg: {
        span: 6,
        offset: 4
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }, "\uC8FC\uBB38\uD558\uAE30"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: function onClick(e) {
        return removeAllCart(e);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, "\uC804\uCCB4 \uBE44\uC6B0\uAE30"))));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    orientation: "middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "\uC8FC\uBB38\uC11C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, "\uC8FC\uBB38\uC11C"),
    footer: orderListFooter(),
    bordered: true,
    dataSource: Order,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        key: item.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        span: 12,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }
      }, item.title), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }, "X", item.quantity), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }
      }, "$", item.price), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        span: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        shape: "circle",
        icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MinusCircleOutlined"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 50
          }
        }),
        onClick: function onClick() {
          return removeCart(item.id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }))));
};

_s(OrderList, "gjMRshyPSwfqL4K+4ff1ZC48YSE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = OrderList;
/* harmony default export */ __webpack_exports__["default"] = (OrderList);

var _c;

$RefreshReg$(_c, "OrderList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckxpc3QuanMiXSwibmFtZXMiOlsiT3JkZXJMaXN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImNhcnQiLCJPcmRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYWwiLCJ1c2VNZW1vIiwidG90YWwiLCJtYXAiLCJvcmRlciIsImlkIiwicXVhbnRpdHkiLCJwcmljZSIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2UiLCJsIiwiciIsInRvRml4ZWQiLCJyZW1vdmVBbGxDYXJ0IiwidXNlQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVBbGxDYXJ0QWN0aW9uIiwicmVtb3ZlQ2FydCIsIml0ZW0iLCJyZW1vdmVDYXJ0QWN0aW9uIiwib3JkZXJMaXN0Rm9vdGVyIiwic3BhbiIsIm9mZnNldCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLHFCQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUExQjtBQUFBLE1BQVFDLEVBQVIsZ0JBQVFBLEVBQVI7O0FBQ0Esc0JBQW1CSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNHLElBQVY7QUFBQSxHQUFOLENBQTlCO0FBQUEsTUFBUUMsS0FBUixpQkFBUUEsS0FBUjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBR0EsTUFBTUMsR0FBRyxHQUFHQyxxREFBTyxDQUFDLFlBQUs7QUFDckIsUUFBSUMsS0FBSyxHQUFJTCxLQUFLLENBQUNNLEdBQU4sQ0FBVyxVQUFDQyxLQUFELEVBQVU7QUFDOUIsVUFBUUMsRUFBUixHQUEr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Y2E3MGM5MGI1YWVkZGFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpc3QsIFR5cG9ncmFwaHksIERpdmlkZXIsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgTWludXNDaXJjbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHNoYWxsb3dFcXVhbCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExvYWRQcm9kdWN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvcHJvZHVjdCc7XHJcbmltcG9ydCB7IHJlbW92ZUFsbENhcnRBY3Rpb24sIHJlbW92ZUNhcnRBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9jYXJ0JztcclxuY29uc3QgT3JkZXJMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG4gICAgY29uc3QgeyBPcmRlciB9ICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcnQpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGNhbCA9IHVzZU1lbW8oKCkgPT57XHJcbiAgICAgICAgbGV0IHRvdGFsID0gIE9yZGVyLm1hcCAoKG9yZGVyKSA9PntcclxuICAgICAgICAgICAgY29uc3QgeyBpZCwgcXVhbnRpdHkscHJpY2UgfSA9IG9yZGVyO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggcXVhbnRpdHkqb3JkZXIucHJpY2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gcXVhbnRpdHkqb3JkZXIucHJpY2U7XHJcbiAgICAgICAgfSkucmVkdWNlKChsLCByKT0+IGwrciwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsLnRvRml4ZWQoMik7XHJcblxyXG4gICAgfSxbT3JkZXJdKTtcclxuXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQWxsQ2FydCA9IHVzZUNhbGxiYWNrKChlKSA9PnsgICAgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZUFsbENhcnRBY3Rpb24oKSk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVDYXJ0ID0gdXNlQ2FsbGJhY2soKGl0ZW0pID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaXNwYXRjaChyZW1vdmVDYXJ0QWN0aW9uKGl0ZW0pKTtcclxuICAgIH0sW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCBvcmRlckxpc3RGb290ZXIgPSAoKSA9PntcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlcj48L0RpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17eyBzcGFuOiA1LCBvZmZzZXQ6IDEgfX0gbGc9e3sgc3BhbjogNiwgb2Zmc2V0OiA0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIOy0nSDquIjslaE6ICQge2NhbH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7IHNwYW46IDUsIG9mZnNldDogMSB9fSBsZz17eyBzcGFuOiA2LCBvZmZzZXQ6IDR9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyjvOusuO2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljayA9eyhlKSA9PiByZW1vdmVBbGxDYXJ0KGUpfT7soITssrQg67mE7Jqw6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cIm1pZGRsZVwiPuyjvOusuOyEnDwvRGl2aWRlcj5cclxuICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPENvbCBzcGFuID0gezE4fSA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXs8ZGl2PuyjvOusuOyEnDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17b3JkZXJMaXN0Rm9vdGVyKCl9XHJcbiAgICAgICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17T3JkZXJ9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuID0gezEyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuID0gezJ9ID5cclxuICAgICAgICAgICAgICAgICAgICBYe2l0ZW0ucXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuID0gezJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAke2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuID0gezJ9ID5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNoYXBlPVwiY2lyY2xlXCIgaWNvbj17PE1pbnVzQ2lyY2xlT3V0bGluZWQgLz59IG9uQ2xpY2sgPSB7KCkgPT4gcmVtb3ZlQ2FydChpdGVtLmlkKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckxpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==