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
      logoutLoading = _useSelector.logoutLoading; // const { Order, diff }  = useSelector((state) => {
  //   return{
  //   Order:state.cart.Order,
  //   diff: state.cart.diff
  //   }
  // }, shallowEqual);


  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.cart;
  }),
      Order = _useSelector2.Order; //   const cal = useMemo(() =>{
  //     let total =  Order.map ((order) =>{
  //         const { quantity } = order;
  //         return quantity;
  //     }).reduce((l, r)=> l+r, 0);
  //     return total;
  // },[Order]);


  var cal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var total = Order.map(function (order) {
      return order.quantity;
    }).reduce(function (l, r) {
      return l + r;
    }, 0);
    return total;
  }, [Order]);
  var cartNum = Order ? Order.length : 0;
  var content = Order.length > 0 ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, Order.map(function (item) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 16
      }
    }, item.title, " X", item.quantity);
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 16
    }
  }, " \uC7A5\uBC14\uAD6C\uB2C8 \uAC00\uAE30 "), " ")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 12
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5C8\uC2B5\uB2C8\uB2E4."));

  var reducer = function reducer(previousValue, currentValue) {
    return previousValue + currentValue;
  };

  var check = function check() {
    Order.length > 0 ? Order.map(function (item) {
      return item.quantity;
    }).reduce(reducer) : 0;
  };

  console.log(val);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    count: check,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 29
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Cart"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: logoutLoading,
    key: "1",
    onClick: logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, "Logout"));
};

_s(MenuHeader, "s7FXvPXPgOz71duGrjcR4DKudTE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51SGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1lbnVIZWFkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9nb3V0IiwidXNlQ2FsbGJhY2siLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dvdXRMb2FkaW5nIiwiY2FydCIsIk9yZGVyIiwiY2FsIiwidXNlTWVtbyIsInRvdGFsIiwibWFwIiwib3JkZXIiLCJxdWFudGl0eSIsInJlZHVjZSIsImwiLCJyIiwiY2FydE51bSIsImxlbmd0aCIsImNvbnRlbnQiLCJpdGVtIiwidGl0bGUiLCJyZWR1Y2VyIiwicHJldmlvdXNWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsImNoZWNrIiwiY29uc29sZSIsImxvZyIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU87QUFBQTs7QUFDeEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFLO0FBQzVCSCxZQUFRLENBQUNJLDBFQUFtQixFQUFwQixDQUFSLENBRDRCLENBRTlCO0FBQ0QsR0FIeUIsRUFHeEIsRUFId0IsQ0FBMUI7O0FBSUEscUJBQTBCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUFyQztBQUFBLE1BQVFDLGFBQVIsZ0JBQVFBLGFBQVIsQ0FQd0IsQ0FReEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxzQkFBbUJILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBQU4sQ0FBOUI7QUFBQSxN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dGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC4wODM0ZjBiODViOGFlOTUyNzEwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIEJhZGdlLCBQb3BvdmVyfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgU2hvcHBpbmdDYXJ0T3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IsIHNoYWxsb3dFcXVhbH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dvdXRSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBPcmRlckxpc3QgZnJvbSAnLi9PcmRlckxpc3QnO1xyXG5cclxuY29uc3QgTWVudUhlYWRlciA9ICgpID0+ICB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gXHJcbiAgY29uc3QgbG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICAvL0hvbWXsnLzroZwg7J2064+Z7Iuc7YKk6riwXHJcbiAgfSxbXSk7XHJcbiAgY29uc3QgeyBsb2dvdXRMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpXHJcbiAgLy8gY29uc3QgeyBPcmRlciwgZGlmZiB9ICA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4ge1xyXG4gIC8vICAgcmV0dXJue1xyXG4gIC8vICAgT3JkZXI6c3RhdGUuY2FydC5PcmRlcixcclxuICAvLyAgIGRpZmY6IHN0YXRlLmNhcnQuZGlmZlxyXG4gIC8vICAgfVxyXG4gIC8vIH0sIHNoYWxsb3dFcXVhbCk7XHJcbiAgY29uc3QgeyBPcmRlciB9ICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhcnQpO1xyXG4vLyAgIGNvbnN0IGNhbCA9IHVzZU1lbW8oKCkgPT57XHJcbi8vICAgICBsZXQgdG90YWwgPSAgT3JkZXIubWFwICgob3JkZXIpID0+e1xyXG4vLyAgICAgICAgIGNvbnN0IHsgcXVhbnRpdHkgfSA9IG9yZGVyO1xyXG4vLyAgICAgICAgIHJldHVybiBxdWFudGl0eTtcclxuLy8gICAgIH0pLnJlZHVjZSgobCwgcik9PiBsK3IsIDApO1xyXG4vLyAgICAgcmV0dXJuIHRvdGFsO1xyXG4vLyB9LFtPcmRlcl0pO1xyXG5cclxuY29uc3QgY2FsID0gdXNlTWVtbygoKSA9PntcclxuICBsZXQgdG90YWwgPSAgT3JkZXIubWFwICgob3JkZXIpID0+e1xyXG4gICAgICByZXR1cm4gb3JkZXIucXVhbnRpdHk7XHJcbiAgfSkucmVkdWNlKChsLCByKT0+IGwrciwgMCk7XHJcbiAgcmV0dXJuIHRvdGFsO1xyXG59LFtPcmRlcl0pO1xyXG5cclxuICBjb25zdCBjYXJ0TnVtID0gT3JkZXI/IE9yZGVyLmxlbmd0aDogMDtcclxuICBjb25zdCBjb250ZW50ID0gKFxyXG4gICAgT3JkZXIubGVuZ3RoPiAwP1xyXG4gICAgPGRpdj5cclxuICAgICAgIHtPcmRlci5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgcmV0dXJuIDxwPntpdGVtLnRpdGxlfSBYe2l0ZW0ucXVhbnRpdHl9PC9wPlxyXG4gICAgICB9KX1cclxuICAgICAgPEJ1dHRvbj4gPExpbmsgaHJlZiA9XCIvY2FydFwiPiDsnqXrsJTqtazri4gg6rCA6riwIDwvTGluaz4gPC9CdXR0b24+XHJcbiAgICA8L2Rpdj46PGRpdj48cD7snqXrsJTqtazri4jqsIAg67mE7JeI7Iq164uI64ukLjwvcD48L2Rpdj5cclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IHJlZHVjZXIgPSAocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBwcmV2aW91c1ZhbHVlICsgY3VycmVudFZhbHVlO1xyXG4gIGNvbnN0IGNoZWNrPSAoKSA9PntcclxuICAgIE9yZGVyLmxlbmd0aD4wP09yZGVyLm1hcCgoaXRlbSk9Pml0ZW0ucXVhbnRpdHkpLnJlZHVjZShyZWR1Y2VyKTowO1xyXG4gIH0gXHJcbiAgY29uc29sZS5sb2codmFsKTtcclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgPEJhZGdlIGNvdW50PXtjaGVja30+XHJcbiAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCIgdGl0bGU9J+yepeuwlOq1rOuLiCcgY29udGVudD17Y29udGVudH0gdHJpZ2dlcj1cImNsaWNrXCI+XHJcbiAgICAgIDxCdXR0b24ga2V5PVwiMlwiIGljb249ezxTaG9wcGluZ0NhcnRPdXRsaW5lZCAvPn0+XHJcbiAgICAgIHsvKiA8TGluayBocmVmID1cIi9jYXJ0XCI+ICovfVxyXG4gICAgICAgIENhcnRcclxuICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Qb3BvdmVyPlxyXG4gICAgPC9CYWRnZT5cclxuICAgIFxyXG4gICAgPEJ1dHRvbiBsb2FkaW5nID0ge2xvZ291dExvYWRpbmd9IGtleT1cIjFcIiBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICBMb2dvdXRcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51SGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=