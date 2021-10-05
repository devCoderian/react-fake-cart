webpackHotUpdate_N_E("pages/product",{

/***/ "./components/MenuHeader.js":
/*!**********************************!*\
  !*** ./components/MenuHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _OrderList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OrderList */ "./components/OrderList.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\MenuHeader.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var MenuHeader = function MenuHeader() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var logout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["logoutRequestAction"])()); //Home으로 이동시키기
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      logoutLoading = _useSelector.logoutLoading;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return {
      Order: state.cart.Order,
      diff: state.cart.diff
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]),
      Order = _useSelector2.Order,
      diff = _useSelector2.diff; // const { Order }  = useSelector(state => state.cart);


  var cal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var total = Order.map(function (order) {
      var quantity = order.quantity;
      return quantity;
    }).reduce(function (l, r) {
      return l + r;
    }, 0);
    return total;
  }, [Order, diff]);
  var total = Order.map(function (order) {
    var quantity = order.quantity;
    return quantity;
  }).reduce(function (l, r) {
    return l + r;
  }, 0);
  console.log(total, '확인');
  var cartNum = Order ? Order.length : 0;
  var content = Order.length > 0 ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, Order.map(function (item) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 16
      }
    }, item.title, " X", item.quantity);
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 16
    }
  }, " \uC7A5\uBC14\uAD6C\uB2C8 \uAC00\uAE30 "), " ")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 12
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5C8\uC2B5\uB2C8\uB2E4."));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    count: total,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    placement: "bottomLeft",
    title: "\uC7A5\uBC14\uAD6C\uB2C8",
    content: content,
    trigger: "click",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "Cart"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: logoutLoading,
    key: "1",
    onClick: logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, "Logout"));
};

_s(MenuHeader, "GP6f6cwMwzcIJOtuIvj//hy6rwc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = MenuHeader;
/* harmony default export */ __webpack_exports__["default"] = (MenuHeader);

var _c;

$RefreshReg$(_c, "MenuHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51SGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1lbnVIZWFkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9nb3V0IiwidXNlQ2FsbGJhY2siLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dvdXRMb2FkaW5nIiwiT3JkZXIiLCJjYXJ0IiwiZGlmZiIsInNoYWxsb3dFcXVhbCIsImNhbCIsInVzZU1lbW8iLCJ0b3RhbCIsIm1hcCIsIm9yZGVyIiwicXVhbnRpdHkiLCJyZWR1Y2UiLCJsIiwiciIsImNvbnNvbGUiLCJsb2ciLCJjYXJ0TnVtIiwibGVuZ3RoIiwiY29udGVudCIsIml0ZW0iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU87QUFBQTs7QUFDeEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFLO0FBQzVCSCxZQUFRLENBQUNJLDBFQUFtQixFQUFwQixDQUFSLENBRDRCLENBRTlCO0FBQ0QsR0FIeUIsRUFHeEIsRUFId0IsQ0FBMUI7O0FBSUEscUJBQTBCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUFyQztBQUFBLE1BQVFDLGFBQVIsZ0JBQVFBLGFBQVI7O0FBQ0Esc0JBQXlCSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBVztBQUM5QyxXQUFNO0FBQ05HLFdBQUssRUFBQ0gsS0FBSyxDQUFDSSxJQUFOLENBQVdELEtBRFg7QUFFTkUsVUFBSSxFQUFFTCxLQUFLLENBQUNJLElBQU4sQ0FBV0M7QUFGWCxLQUFOO0FBSUQsR0FMbUMs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dGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC5kNGM0NTgzNTJjZmM5OWJhYjQ0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIEJhZGdlLCBQb3BvdmVyfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgU2hvcHBpbmdDYXJ0T3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IsIHNoYWxsb3dFcXVhbH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dvdXRSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBPcmRlckxpc3QgZnJvbSAnLi9PcmRlckxpc3QnO1xyXG5cclxuY29uc3QgTWVudUhlYWRlciA9ICgpID0+ICB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gXHJcbiAgY29uc3QgbG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICAvL0hvbWXsnLzroZwg7J2064+Z7Iuc7YKk6riwXHJcbiAgfSxbXSk7XHJcbiAgY29uc3QgeyBsb2dvdXRMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpXHJcbiAgY29uc3QgeyBPcmRlciwgZGlmZiB9ICA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgT3JkZXI6c3RhdGUuY2FydC5PcmRlcixcclxuICAgIGRpZmY6IHN0YXRlLmNhcnQuZGlmZlxyXG4gICAgfVxyXG4gIH0sIHNoYWxsb3dFcXVhbCk7XHJcbiAgLy8gY29uc3QgeyBPcmRlciB9ICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcnQpO1xyXG4gIGNvbnN0IGNhbCA9IHVzZU1lbW8oKCkgPT57XHJcbiAgICBsZXQgdG90YWwgPSAgT3JkZXIubWFwICgob3JkZXIpID0+e1xyXG4gICAgICAgIGNvbnN0IHsgcXVhbnRpdHkgfSA9IG9yZGVyO1xyXG4gICAgICAgIHJldHVybiBxdWFudGl0eTtcclxuICAgIH0pLnJlZHVjZSgobCwgcik9PiBsK3IsIDApO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG59LFtPcmRlciwgZGlmZl0pO1xyXG4gIGxldCB0b3RhbCA9ICBPcmRlci5tYXAgKChvcmRlcikgPT57XHJcbiAgICAgIGNvbnN0IHsgcXVhbnRpdHkgfSA9IG9yZGVyO1xyXG4gICAgICByZXR1cm4gcXVhbnRpdHk7XHJcbiAgfSkucmVkdWNlKChsLCByKT0+IGwrciwgMCk7XHJcblxyXG5jb25zb2xlLmxvZyh0b3RhbCwn7ZmV7J24JylcclxuICBjb25zdCBjYXJ0TnVtID0gT3JkZXI/IE9yZGVyLmxlbmd0aDogMDtcclxuICBjb25zdCBjb250ZW50ID0gKFxyXG4gICAgT3JkZXIubGVuZ3RoPiAwP1xyXG4gICAgPGRpdj5cclxuICAgICAgIHtPcmRlci5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgcmV0dXJuIDxwPntpdGVtLnRpdGxlfSBYe2l0ZW0ucXVhbnRpdHl9PC9wPlxyXG4gICAgICB9KX1cclxuICAgICAgPEJ1dHRvbj4gPExpbmsgaHJlZiA9XCIvY2FydFwiPiDsnqXrsJTqtazri4gg6rCA6riwIDwvTGluaz4gPC9CdXR0b24+XHJcbiAgICA8L2Rpdj46PGRpdj48cD7snqXrsJTqtazri4jqsIAg67mE7JeI7Iq164uI64ukLjwvcD48L2Rpdj5cclxuICApO1xyXG4gIFxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgPEJhZGdlIGNvdW50PXt0b3RhbH0+XHJcbiAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCIgdGl0bGU9J+yepeuwlOq1rOuLiCcgY29udGVudD17Y29udGVudH0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgIDxCdXR0b24ga2V5PVwiMlwiIGljb249ezxTaG9wcGluZ0NhcnRPdXRsaW5lZCAvPn0+XHJcbiAgICAgIHsvKiA8TGluayBocmVmID1cIi9jYXJ0XCI+ICovfVxyXG4gICAgICAgIENhcnRcclxuICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICAgPC9CYWRnZT5cclxuICAgIFxyXG4gICAgPEJ1dHRvbiBsb2FkaW5nID0ge2xvZ291dExvYWRpbmd9IGtleT1cIjFcIiBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICBMb2dvdXRcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51SGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=