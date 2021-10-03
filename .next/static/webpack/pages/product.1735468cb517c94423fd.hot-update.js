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
    _jsxFileName = "C:\\Users\\goman\\Desktop\\react-fake-cart\\components\\ProductList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var ProductList = function ProductList() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.product;
  }),
      Products = _useSelector.Products,
      loadProductLoading = _useSelector.loadProductLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.cart;
  }),
      Order = _useSelector2.Order;

  console.log('Order', Order); // const { Order, diff }  = useSelector(
  //   state => ({
  //     Order: state.cart.Order,
  //     diff: state.cart.diff
  //   }),
  //   shallowEqual 
  //   );
  //   useEffect(() => {
  //     console.log(message)           // 업데이트!
  // },[Order]);

  var LoadProduct = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_product__WEBPACK_IMPORTED_MODULE_4__["LoadProductAction"])());
  }, []);
  var addCart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (item) {
    console.log('item', item);
    dispatch(Object(_reducers_cart__WEBPACK_IMPORTED_MODULE_5__["addCartAction"])(item));
  }, []); //   const addCart = useCallback((item) => {
  //           console.log(item.id, Order)
  //             const check = Order.find(order =>order.id === item.id);
  //             if(check === undefined){
  //               item.quantity = 1;
  //               console.log('first')
  //               dispatch(addCartAction(item));  
  //               // return {item, quantity: 1};
  //             }else{
  //                 Order.map((order)=>{
  //                     if(order.id === item.id){
  //                       console.log('중복')
  //                       order.quantity = order.quantity+1;
  //                       dispatch(addCartAction(order));
  //                     }
  //                   })
  //             }
  // },[Order]);
  //useSelector

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var onToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    LoadProduct();
  }, []);
  var listData = [];

  for (var i = 0; i < 23; i++) {
    listData.push({
      id: {
        i: i
      },
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
        lineNumber: 86,
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
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
            lineNumber: 111,
            columnNumber: 21
          }
        }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
          key: item.id,
          twoToneColor: "red",
          onClick: onToggle,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 27
          }
        }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
          onClick: onToggle,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 99
          }
        }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 35
            }
          }),
          onClick: function onClick() {
            return addCart(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
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
            lineNumber: 117,
            columnNumber: 21
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 28
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  })));
};

_s(ProductList, "PZ00sfIqasZZLVfKiafjOzkfHOs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwcm9kdWN0IiwiUHJvZHVjdHMiLCJsb2FkUHJvZHVjdExvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2FydCIsIk9yZGVyIiwiY29uc29sZSIsImxvZyIsIkxvYWRQcm9kdWN0IiwidXNlQ2FsbGJhY2siLCJMb2FkUHJvZHVjdEFjdGlvbiIsImFkZENhcnQiLCJpdGVtIiwiYWRkQ2FydEFjdGlvbiIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsIm9uVG9nZ2xlIiwicHJldiIsInVzZUVmZmVjdCIsImxpc3REYXRhIiwiaSIsInB1c2giLCJpZCIsImhyZWYiLCJ0aXRsZSIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsInByaWNlIiwiSWNvblRleHQiLCJpY29uIiwidGV4dCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJvbkNoYW5nZSIsInBhZ2UiLCJwYWdlU2l6ZSIsIkRvbGxhckNpcmNsZU91dGxpbmVkIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUd4QixxQkFBMENDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsT0FBVjtBQUFBLEdBQU4sQ0FBckQ7QUFBQSxNQUFRQyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGtCQUFsQixnQkFBa0JBLGtCQUFsQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLHNCQUFrQk4sK0RB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FrQkksTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0EsYUFBSyxFQUFFO0FBQUcsY0FBSSxFQUFFL0IsSUFBSSxDQUFDWSxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBcUJaLElBQUksQ0FBQ2EsS0FBMUIsQ0FEUDtBQUVBLG1CQUFXLEVBQUViLElBQUksQ0FBQ2UsV0FGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWxCSixFQXNCS2YsSUFBSSxDQUFDZ0IsT0F0QlYsQ0FEZ0I7QUFBQSxLQVh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FEQSxDQURKO0FBNENILENBOUhEOztHQUFNaEMsVztVQUdzQ0MsdUQsRUFDekJNLHVELEVBQ0NOLHVEOzs7S0FMZEQsVztBQStIU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC4xNzM1NDY4Y2I1MTdjOTQ0MjNmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBMaXN0LCBCdXR0b24sIFNwYWNlLENhcmR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBEb2xsYXJDaXJjbGVPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLCBTaG9wcGluZ0NhcnRPdXRsaW5lZCwgU3Rhck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoLCBzaGFsbG93RXF1YWx9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTG9hZFByb2R1Y3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9wcm9kdWN0JztcclxuaW1wb3J0IHsgYWRkQ2FydEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL2NhcnQnO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgXHJcblxyXG4gIGNvbnN0IHsgUHJvZHVjdHMsIGxvYWRQcm9kdWN0TG9hZGluZyB9ICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnByb2R1Y3QpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IE9yZGVyfSAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJ0KTtcclxuXHJcbiAgY29uc29sZS5sb2coJ09yZGVyJyxPcmRlcilcclxuICAvLyBjb25zdCB7IE9yZGVyLCBkaWZmIH0gID0gdXNlU2VsZWN0b3IoXHJcbiAgLy8gICBzdGF0ZSA9PiAoe1xyXG4gIC8vICAgICBPcmRlcjogc3RhdGUuY2FydC5PcmRlcixcclxuICAvLyAgICAgZGlmZjogc3RhdGUuY2FydC5kaWZmXHJcbiAgLy8gICB9KSxcclxuICAvLyAgIHNoYWxsb3dFcXVhbCBcclxuICAvLyAgICk7XHJcblxyXG5cclxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpICAgICAgICAgICAvLyDsl4XrjbDsnbTtirghXHJcbiAgLy8gfSxbT3JkZXJdKTtcclxuXHJcbiAgY29uc3QgTG9hZFByb2R1Y3QgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgIGRpc3BhdGNoKExvYWRQcm9kdWN0QWN0aW9uKCkpO1xyXG4gIH0sW10pO1xyXG5cclxuXHJcbiAgY29uc3QgYWRkQ2FydCA9IHVzZUNhbGxiYWNrKChpdGVtKSA9PntcclxuICAgIGNvbnNvbGUubG9nKCdpdGVtJyxpdGVtKVxyXG4gICAgZGlzcGF0Y2goYWRkQ2FydEFjdGlvbihpdGVtKSk7XHJcbiAgfSxbXSk7XHJcblxyXG4vLyAgIGNvbnN0IGFkZENhcnQgPSB1c2VDYWxsYmFjaygoaXRlbSkgPT4ge1xyXG4vLyAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5pZCwgT3JkZXIpXHJcbi8vICAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gT3JkZXIuZmluZChvcmRlciA9Pm9yZGVyLmlkID09PSBpdGVtLmlkKTtcclxuLy8gICAgICAgICAgICAgaWYoY2hlY2sgPT09IHVuZGVmaW5lZCl7XHJcbi8vICAgICAgICAgICAgICAgaXRlbS5xdWFudGl0eSA9IDE7XHJcbi8vICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpcnN0JylcclxuLy8gICAgICAgICAgICAgICBkaXNwYXRjaChhZGRDYXJ0QWN0aW9uKGl0ZW0pKTsgIFxyXG4vLyAgICAgICAgICAgICAgIC8vIHJldHVybiB7aXRlbSwgcXVhbnRpdHk6IDF9O1xyXG4vLyAgICAgICAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgICAgICAgICAgIE9yZGVyLm1hcCgob3JkZXIpPT57XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYob3JkZXIuaWQgPT09IGl0ZW0uaWQpe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ykkeuztScpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5xdWFudGl0eSA9IG9yZGVyLnF1YW50aXR5KzE7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChhZGRDYXJ0QWN0aW9uKG9yZGVyKSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vIH0sW09yZGVyXSk7XHJcblxyXG5cclxuLy91c2VTZWxlY3RvclxyXG5cclxuICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvblRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgc2V0TGlrZWQoKHByZXYpID0+ICEocHJldikpO1xyXG4gIH0sW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgTG9hZFByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcbiAgICBjb25zdCBsaXN0RGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMzsgaSsrKSB7XHJcbiAgICAgIGxpc3REYXRhLnB1c2goe1xyXG4gICAgICAgIGlkOntpfSxcclxuICAgICAgICBocmVmOiAnaHR0cHM6Ly9hbnQuZGVzaWduJyxcclxuICAgICAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydCAke2l9YCxcclxuICAgICAgICBhdmF0YXI6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICdXZSBzdXBwbHkgYSBzZXJpZXMgb2YgZGVzaWduIHByaW5jaXBsZXMsIHByYWN0aWNhbCBwYXR0ZXJucyBhbmQgaGlnaCBxdWFsaXR5IGRlc2lnbiByZXNvdXJjZXMgKFNrZXRjaCBhbmQgQXh1cmUpLCB0byBoZWxwIHBlb3BsZSBjcmVhdGUgdGhlaXIgcHJvZHVjdCBwcm90b3R5cGVzIGJlYXV0aWZ1bGx5IGFuZCBlZmZpY2llbnRseS4nLFxyXG4gICAgICAgICAgcHJpY2U6IGAke2l9YFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgSWNvblRleHQgPSAoeyBpY29uLCB0ZXh0IH0pID0+IChcclxuICAgICAgPFNwYWNlPlxyXG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pfVxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L1NwYWNlPlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHN0eWxlID0geyBiYWNrZ3JvdW5kOiAnI2ZmZicsIHBhZGRpbmc6ICc4cHggMjBweCcsbWFyZ2luQm90dG9tOiAnNjBweCd9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um93ICBndXR0ZXI9ezE2fSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCBzcGFuID0gezE4fT5cclxuICAgICAgICA8TGlzdCAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgPSB7bG9hZFByb2R1Y3RMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17UHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e0RvbGxhckNpcmNsZU91dGxpbmVkfSB0ZXh0PXtpdGVtLnByaWNlfSBrZXk9XCJsaXN0LXZlcnRpY2FsLXN0YXItb1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2VkPzxIZWFydFR3b1RvbmUgIGtleSA9e2l0ZW0uaWR9IHR3b1RvbmVDb2xvciA9IFwicmVkXCIgb25DbGljaz17b25Ub2dnbGV9Lz46PEhlYXJ0T3V0bGluZWQgb25DbGljaz17b25Ub2dnbGV9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFNob3BwaW5nQ2FydE91dGxpbmVkIC8+fSBvbkNsaWNrPXsoKSA9PmFkZENhcnQoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9