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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/product */ "./reducers/product.js");
/* harmony import */ var _reducers_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/cart */ "./reducers/cart.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\ProductList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Search = antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search;
var SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;

var ProductList = function ProductList() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.product;
  }),
      Products = _useSelector.Products,
      loadProductLoading = _useSelector.loadProductLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var LoadProduct = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["LoadProductAction"])(''));
  }, []);
  var sortProduct = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (val) {
    var check = "category/".concat(val);
    dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["LoadProductAction"])(category));
  }, []);
  var onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (e.target.value !== '') {
      dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["searchProductAction"])(e.target.value));
    } else {
      dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["LoadProductAction"])());
    }
  }, [Products]);
  var addCart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (item) {
    dispatch(Object(_reducers_cart__WEBPACK_IMPORTED_MODULE_5__["addCartAction"])(item));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    LoadProduct();
  }, []);

  var IconText = function IconText(_ref) {
    var icon = _ref.icon,
        text = _ref.text;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(icon), text);
  }; //   useEffect(() => {
  //     let row= [];
  //     Order.forEach((data)=>{
  //         if(data.title.toLocaleUpperCase().includes(search.toLocaleUpperCase())){
  //             row.push(data); 
  //             setProducts(row);
  //         }else{
  //             return;
  //         }
  //         //배열에 추가
  //     });
  //     if(search === ""){
  //         productService.getProducts().then(data => setProducts(data));
  //     }
  //     row= [];
  //     console.log(row);
  // }, [search]);


  var style = {
    background: '#fff',
    padding: '8px 20px',
    marginBottom: '60px'
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [48, 48],
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    defaultOpenKeys: ['sub1'],
    style: {
      borderRight: 0
    },
    selectable: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(Search, {
    placeholder: "input search text",
    onChange: function onChange(e) {
      return onSearch(e);
    },
    onClick: function onClick(e) {
      return onSearch(e);
    },
    enterButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  })), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UnorderedListOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 41
      }
    }),
    title: "Product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, "All"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    onClick: sortProduct("men's clothing"),
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, "Mens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    onClick: sortProduct("women's clothing"),
    key: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Womens"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    onClick: sortProduct('jewelery'),
    key: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, "jewelery"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    onClick: sortProduct('electronics'),
    key: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, "electronics")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
    loading: loadProductLoading,
    dataSource: Products,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        key: item.id,
        actions: [__jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DollarCircleOutlined"],
          text: item.price,
          key: "list-vertical-star-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 21
          }
        }), me && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 40
            }
          }),
          onClick: function onClick() {
            return addCart(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 26
          }
        })],
        extra: __jsx("img", {
          width: 150,
          height: 200,
          alt: "logo",
          src: item.image,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }))));
};

_s(ProductList, "iS9imqGzUoyZwSr5uxtyzQgiWfI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJJbnB1dCIsIlN1Yk1lbnUiLCJNZW51IiwiUHJvZHVjdExpc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdCIsIlByb2R1Y3RzIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXIiLCJtZSIsIkxvYWRQcm9kdWN0IiwidXNlQ2FsbGJhY2siLCJMb2FkUHJvZHVjdEFjdGlvbiIsInNvcnRQcm9kdWN0IiwidmFsIiwiY2hlY2siLCJjYXRlZ29yeSIsIm9uU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoUHJvZHVjdEFjdGlvbiIsImFkZENhcnQiLCJpdGVtIiwiYWRkQ2FydEFjdGlvbiIsInVzZUVmZmVjdCIsIkljb25UZXh0IiwiaWNvbiIsInRleHQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyUmlnaHQiLCJvbkNoYW5nZSIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicGFnZVNpemUiLCJpZCIsIkRvbGxhckNpcmNsZU91dGxpbmVkIiwicHJpY2UiLCJpbWFnZSIsImhyZWYiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFRQSxNQUFSLEdBQW1CQywwQ0FBbkIsQ0FBUUQsTUFBUjtBQUNBLElBQVFFLE9BQVIsR0FBb0JDLHlDQUFwQixDQUFRRCxPQUFSOztBQUNBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFeEIscUJBQTBDQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUND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QUdJLGFBQUcsRUFBQyxNQUhSO0FBSUksYUFBRyxFQUFFQSxJQUFJLENBQUNxQixLQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZ0JJLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtBQUNBLGFBQUssRUFBRTtBQUFHLGNBQUksRUFBRXJCLElBQUksQ0FBQ3NCLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxQnRCLElBQUksQ0FBQ3VCLEtBQTFCLENBRFA7QUFFQSxtQkFBVyxFQUFFdkIsSUFBSSxDQUFDd0IsV0FGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhCSixFQW9CS3hCLElBQUksQ0FBQ3lCLE9BcEJWLENBRGdCO0FBQUEsS0FYeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLENBckJBLENBREYsQ0FERjtBQWlFSCxDQTNIRDs7R0FBTWhELFc7VUFFc0NDLHVELEVBQ3pCTSx1RCxFQUNGTix1RDs7O0tBSlhELFc7QUE0SFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuNWUzN2RkNzUxY2ZjM2EzNmQ5NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpc3QsIEJ1dHRvbiwgU3BhY2UsICBSb3csIENvbCwgSW5wdXQsIE1lbnV9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IERvbGxhckNpcmNsZU91dGxpbmVkLCBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIFNob3BwaW5nQ2FydE91dGxpbmVkICwgVW5vcmRlcmVkTGlzdE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoLCBzaGFsbG93RXF1YWx9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTG9hZFByb2R1Y3RBY3Rpb24sIHNlYXJjaFByb2R1Y3RBY3Rpb259IGZyb20gJy4uL3JlZHVjZXJzL3Byb2R1Y3QnO1xyXG5pbXBvcnQgeyBhZGRDYXJ0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvY2FydCc7XHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5jb25zdCBQcm9kdWN0TGlzdCA9ICgpID0+IHtcclxuICBcclxuICBjb25zdCB7IFByb2R1Y3RzLCBsb2FkUHJvZHVjdExvYWRpbmcgfSAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IExvYWRQcm9kdWN0ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICBkaXNwYXRjaChMb2FkUHJvZHVjdEFjdGlvbignJykpO1xyXG4gIH0sW10pO1xyXG5cclxuICBjb25zdCBzb3J0UHJvZHVjdCA9IHVzZUNhbGxiYWNrKCh2YWwpID0+e1xyXG4gICAgY29uc3QgY2hlY2sgPSBgY2F0ZWdvcnkvJHt2YWx9YFxyXG4gICAgZGlzcGF0Y2goTG9hZFByb2R1Y3RBY3Rpb24oY2F0ZWdvcnkpKTtcclxuICB9LFtdKTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoZSkgPT57XHJcbiAgICBpZihlLnRhcmdldC52YWx1ZSAhPT0gJycpe1xyXG4gICAgICBkaXNwYXRjaChzZWFyY2hQcm9kdWN0QWN0aW9uKGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgZGlzcGF0Y2goTG9hZFByb2R1Y3RBY3Rpb24oKSk7XHJcbiAgICB9XHJcbiAgfSxbUHJvZHVjdHNdKTtcclxuXHJcbiAgY29uc3QgYWRkQ2FydCA9IHVzZUNhbGxiYWNrKChpdGVtKSA9PntcclxuICAgIGRpc3BhdGNoKGFkZENhcnRBY3Rpb24oaXRlbSkpO1xyXG4gIH0sW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgTG9hZFByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgSWNvblRleHQgPSAoeyBpY29uLCB0ZXh0IH0pID0+IChcclxuICAgICAgPFNwYWNlPlxyXG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pfVxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L1NwYWNlPlxyXG4gICAgKTtcclxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIGxldCByb3c9IFtdO1xyXG4gIC8vICAgICBPcmRlci5mb3JFYWNoKChkYXRhKT0+e1xyXG4gIC8vICAgICAgICAgaWYoZGF0YS50aXRsZS50b0xvY2FsZVVwcGVyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvY2FsZVVwcGVyQ2FzZSgpKSl7XHJcbiAgLy8gICAgICAgICAgICAgcm93LnB1c2goZGF0YSk7IFxyXG4gIC8vICAgICAgICAgICAgIHNldFByb2R1Y3RzKHJvdyk7XHJcbiAgLy8gICAgICAgICB9ZWxzZXtcclxuICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgICAvL+uwsOyXtOyXkCDstpTqsIBcclxuICAgICAgICAgXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgICBpZihzZWFyY2ggPT09IFwiXCIpe1xyXG4gIC8vICAgICAgICAgcHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKS50aGVuKGRhdGEgPT4gc2V0UHJvZHVjdHMoZGF0YSkpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIHJvdz0gW107XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHJvdyk7XHJcblxyXG4gIC8vIH0sIFtzZWFyY2hdKTtcclxuIFxyXG4gICAgY29uc3Qgc3R5bGUgPSB7IGJhY2tncm91bmQ6ICcjZmZmJywgcGFkZGluZzogJzhweCAyMHB4JyxtYXJnaW5Cb3R0b206ICc2MHB4J307XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyID17WzQ4LCA0OF19IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICA8Q29sIHNwYW4gPSB7Nn0+XHJcbiAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1snc3ViMSddfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJpZ2h0OiAwIH19XHJcbiAgICAgICAgICAgICAgc2VsZWN0YWJsZSA9e2ZhbHNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiICBvbkNoYW5nZT17KGUpID0+IG9uU2VhcmNoKGUpfSBvbkNsaWNrPXsoZSkgPT4gb25TZWFyY2goZSl9IGVudGVyQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIxXCIgaWNvbj17PFVub3JkZXJlZExpc3RPdXRsaW5lZCAvPn0gdGl0bGU9XCJQcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+QWxsPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrID17c29ydFByb2R1Y3QoYG1lbidzIGNsb3RoaW5nYCl9IGtleT1cIjRcIj5NZW5zPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrID17c29ydFByb2R1Y3QoYHdvbWVuJ3MgY2xvdGhpbmdgKX0ga2V5PVwiNVwiPldvbWVuczwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljayA9e3NvcnRQcm9kdWN0KCdqZXdlbGVyeScpfSBrZXk9XCI2XCI+amV3ZWxlcnk8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2sgPXtzb3J0UHJvZHVjdCgnZWxlY3Ryb25pY3MnKX0ga2V5PVwiN1wiPmVsZWN0cm9uaWNzPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvQ29sPiBcclxuICAgICAgIFxyXG4gICAgICAgIDxDb2wgc3BhbiA9IHsxOH0+XHJcbiAgICAgICBcclxuICAgICAgICA8TGlzdCAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgPSB7bG9hZFByb2R1Y3RMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17UHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtEb2xsYXJDaXJjbGVPdXRsaW5lZH0gdGV4dD17aXRlbS5wcmljZX0ga2V5PVwibGlzdC12ZXJ0aWNhbC1zdGFyLW9cIiAvPixcclxuICAgICAgICAgICAgICAgICAgICBtZSYmIDxCdXR0b24gaWNvbj17PFNob3BwaW5nQ2FydE91dGxpbmVkIC8+fSBvbkNsaWNrPXsoKSA9PmFkZENhcnQoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9