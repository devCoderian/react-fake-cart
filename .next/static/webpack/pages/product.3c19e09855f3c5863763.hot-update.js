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

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.cart;
  }),
      Order = _useSelector2.Order;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
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
  }, []); // const addCart = useCallback((item) =>{
  //   dispatch(addCartAction(item));
  // },[]);

  var addCart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (item) {
    console.log(item.id, Order);
    var check = Order.find(function (order) {
      return order.id === item.id;
    });

    if (check === undefined) {
      item.quantity = 1;
      console.log('first');
      dispatch(Object(_reducers_cart__WEBPACK_IMPORTED_MODULE_5__["addCartAction"])(item)); // return {item, quantity: 1};
    } else {
      Order.map(function (order) {
        if (order.id === item.id) {
          console.log('중복');
          order.quantity = order.quantity + 1;
          dispatch(Object(_reducers_cart__WEBPACK_IMPORTED_MODULE_5__["addCartAction"])(order));
        }
      });
    }
  }, [Order]); //useSelector

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

_s(ProductList, "LGePpKgLLkRzq1efyCINa/DmSmQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwcm9kdWN0IiwiUHJvZHVjdHMiLCJsb2FkUHJvZHVjdExvYWRpbmciLCJjYXJ0IiwiT3JkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsIkxvYWRQcm9kdWN0IiwidXNlQ2FsbGJhY2siLCJMb2FkUHJvZHVjdEFjdGlvbiIsImFkZENhcnQiLCJpdGVtIiwiaWQiLCJjaGVjayIsImZpbmQiLCJvcmRlciIsInVuZGVmaW5lZCIsInF1YW50aXR5IiwiYWRkQ2FydEFjdGlvbiIsIm1hcCIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsIm9uVG9nZ2xlIiwicHJldiIsInVzZUVmZmVjdCIsImxpc3REYXRhIiwiaSIsInB1c2giLCJocmVmIiwidGl0bGUiLCJhdmF0YXIiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJwcmljZSIsIkljb25UZXh0IiwiaWNvbiIsInRleHQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwib25DaGFuZ2UiLCJwYWdlIiwicGFnZVNpemUiLCJEb2xsYXJDaXJjbGVPdXRsaW5lZCIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFHeEIscUJBQTBDQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLE9BQVY7QUFBQSxHQUFOLENBQXJEO0FBQUEsTUFBUUMsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxrQkFBbEIsZ0JBQWtCQSxrQkFBbEI7O0FBRUEsc0JBQWtCSiwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNJLElBQVY7QUFBQSxHQUFOLENBQTdCO0FBQUEsTUFBUUMsS0FBUixpQkFBUUEsS0FBUjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBb0JKLEtBQXBCLEVBUHdCLENBUXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBLE1BQU1LLFdBQVcsR0FBR0MseURBQVcsQ0FBQyxZQUFLO0FBQ25DTCxZQUFRLENBQUNNLDJFQUFpQixFQUFsQixDQUFSO0FBQ0QsR0FGOEIsRUFFN0IsRUFGNkIsQ0FBL0IsQ0FyQndCLENBMEJ4QjtBQUVBO0FBQ0E7O0FBRUEsTUFBTUMsT0FBTyxHQUFHRix5REFBVyxDQUFDLFVBQUNHLElBQUQsRUFBVTtBQUM5Qk4sV0FBTyxDQUFDQyxHQUFSLENBQVlLLElBQUksQ0FBQ0MsRUFBakIsRUFBcUJWLEtBQXJCO0FBQ0UsUUFBTVcsS0FBSyxHQUFHWCxLQUFLLENBQUNZLElBQU4sQ0FBVyxVQUFBQyxLQUFLO0FBQUEsYUFBR0EsS0FBSyxDQUFDSCxFQUFOLEtBQWFELElBQUksQ0FBQ0MsRUFBckI7QUFBQSxLQUFoQixDQUFkOztBQUNBLFFBQUdDLEtBQUssS0FBS0csU0FBYixFQUF1QjtBQUNyQkwsVUFBSSxDQUFDTSxRQUFMLEdBQWdCLENBQWhCO0FBQ0FaLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUgsY0FBUSxDQUFDZSxvRUFBYSxDQUFDUCxJQUFELENBQWQsQ0FBUixDQUhxQixDQUlyQjtBQUNELEtBTEQsTUFLSztBQUNEVCxXQUFLLENBQUNpQixHQUFOLENBQVUsVUFBQ0osS0FBRCxFQUFTO0FBQ2YsWUFBR0EsS0FBSyxDQUFDSCxFQUFOLEtBQWFELElBQUksQ0FBQ0MsRUFBckIsRUFBd0I7QUFDdEJQLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0FTLGVBQUssQ0FBQ0UsUUFBTixHQUFpQkYsS0FBSyxDQUFDRSxRQUFOLEdBQWUsQ0FBaEM7QUFDQWQsa0JBQVEsQ0FBQ2Usb0VBQWEsQ0FBQ0gsS0FBRCxDQUFkLENBQVI7QUFDRDtBQUNGLE9BTkg7QUFPSDtBQUNaLEdBakI0QixFQWlCM0IsQ0FBQ2IsS0FBRCxDQWpCMkIsQ0FBM0IsQ0EvQndCLENBbUQxQjs7QUFFRSxrQkFBMEJrQixzREFBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxNQUFNQyxRQUFRLEdBQUdmLHlEQUFXLENBQUMsWUFBSztBQUNoQ2MsWUFBUSxDQUFDLFVBQUNFLElBQUQ7QUFBQSxhQUFVLENBQUVBLElBQVo7QUFBQSxLQUFELENBQVI7QUFDRCxHQUYyQixFQUUxQixFQUYwQixDQUE1QjtBQUlBQyx5REFBUyxDQUFDLFlBQU07QUFDZGxCLGVBQVc7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0UsTUFBTW1CLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0JELFlBQVEsQ0FBQ0UsSUFBVCxDQUFjO0FBQ1poQixRQUFFLEVBQUM7QUFBQ2UsU0FBQyxFQUFEQTtBQUFELE9BRFM7QUFFWkUsVUFBSSxFQUFFLG9CQUZNO0FBR1pDLFdBQUssNEJBQXFCSCxDQUFyQixDQUhPO0FBSVpJLFlBQU0sRUFBRSxrRUFKSTtBQUtaQyxpQkFBVyxFQUNULHdGQU5VO0FBT1pDLGFBQU8sRUFDTCwrTEFSVTtBQVNWQyxXQUFLLFlBQUtQLENBQUw7QUFUSyxLQUFkO0FBV0Q7O0FBQ0QsTUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFFBQVNBLElBQVQ7QUFBQSxXQUNmLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkgsSUFBcEIsQ0FESCxFQUVHQyxJQUZILENBRGU7QUFBQSxHQUFqQjs7QUFNQSxNQUFNRyxLQUFLLEdBQUc7QUFBRUMsY0FBVSxFQUFFLE1BQWQ7QUFBc0JDLFdBQU8sRUFBRSxVQUEvQjtBQUEwQ0MsZ0JBQVksRUFBRTtBQUF4RCxHQUFkO0FBQ0EsU0FDSSxNQUFDLHdDQUFEO0FBQU0sVUFBTSxFQUFFLEVBQWQ7QUFBa0IsV0FBTyxFQUFDLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFJLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMseUNBQUQ7QUFBUSxTQUFLLEVBQUVILEtBQWY7QUFDUSxjQUFVLEVBQUMsVUFEbkI7QUFFUSxRQUFJLEVBQUMsT0FGYjtBQUdRLGNBQVUsRUFBRTtBQUNaSSxjQUFRLEVBQUUsa0JBQUFDLElBQUksRUFBSTtBQUNkeEMsZUFBTyxDQUFDQyxHQUFSLENBQVl1QyxJQUFaO0FBQ0gsT0FIVztBQUlaQyxjQUFRLEVBQUU7QUFKRSxLQUhwQjtBQVNRLFdBQU8sRUFBSTlDLGtCQVRuQjtBQVVRLGNBQVUsRUFBRUQsUUFWcEI7QUFXUSxjQUFVLEVBQUUsb0JBQUFZLElBQUk7QUFBQSxhQUNoQixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUVJLFdBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUZkO0FBR0ksZUFBTyxFQUFFLENBQ1QsTUFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFbUMsc0VBQWhCO0FBQXNDLGNBQUksRUFBRXBDLElBQUksQ0FBQ3VCLEtBQWpEO0FBQXdELGFBQUcsRUFBQyxzQkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURTLEVBRVRiLEtBQUssR0FBQyxNQUFDLDhEQUFEO0FBQWUsYUFBRyxFQUFHVixJQUFJLENBQUNDLEVBQTFCO0FBQThCLHNCQUFZLEVBQUcsS0FBN0M7QUFBbUQsaUJBQU8sRUFBRVcsUUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFELEdBQXlFLE1BQUMsK0RBQUQ7QUFBZSxpQkFBTyxFQUFFQSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRnJFLEVBR1QsTUFBQywyQ0FBRDtBQUFRLGNBQUksRUFBRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBZDtBQUF3QyxpQkFBTyxFQUFFO0FBQUEsbUJBQUtiLE9BQU8sQ0FBQ0MsSUFBRCxDQUFaO0FBQUEsV0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhTLENBSGI7QUFTSSxhQUFLLEVBQ0w7QUFDSSxlQUFLLEVBQUUsR0FEWDtBQUVJLGdCQUFNLEVBQUcsR0FGYjtBQUdJLGFBQUcsRUFBQyxNQUhSO0FBSUksYUFBRyxFQUFFQSxJQUFJLENBQUNxQyxLQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBa0JJLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtBQUNBLGFBQUssRUFBRTtBQUFHLGNBQUksRUFBRXJDLElBQUksQ0FBQ2tCLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxQmxCLElBQUksQ0FBQ21CLEtBQTFCLENBRFA7QUFFQSxtQkFBVyxFQUFFbkIsSUFBSSxDQUFDcUIsV0FGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWxCSixFQXNCS3JCLElBQUksQ0FBQ3NCLE9BdEJWLENBRGdCO0FBQUEsS0FYeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREEsQ0FESjtBQTRDSCxDQTlIRDs7R0FBTXRDLFc7VUFHc0NDLHVELEVBRXhCQSx1RCxFQUNEUSx1RDs7O0tBTmJULFc7QUErSFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuM2MxOWUwOTg1NWYzYzU4NjM3NjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgTGlzdCwgQnV0dG9uLCBTcGFjZSxDYXJkfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRG9sbGFyQ2lyY2xlT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgU2hvcHBpbmdDYXJ0T3V0bGluZWQsIFN0YXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCwgc2hhbGxvd0VxdWFsfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExvYWRQcm9kdWN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvcHJvZHVjdCc7XHJcbmltcG9ydCB7IGFkZENhcnRBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9jYXJ0JztcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0ID0gKCkgPT4ge1xyXG4gIFxyXG5cclxuICBjb25zdCB7IFByb2R1Y3RzLCBsb2FkUHJvZHVjdExvYWRpbmcgfSAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0KTtcclxuXHJcbiAgY29uc3QgeyBPcmRlcn0gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY2FydCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnNvbGUubG9nKCdPcmRlcicsT3JkZXIpXHJcbiAgLy8gY29uc3QgeyBPcmRlciwgZGlmZiB9ICA9IHVzZVNlbGVjdG9yKFxyXG4gIC8vICAgc3RhdGUgPT4gKHtcclxuICAvLyAgICAgT3JkZXI6IHN0YXRlLmNhcnQuT3JkZXIsXHJcbiAgLy8gICAgIGRpZmY6IHN0YXRlLmNhcnQuZGlmZlxyXG4gIC8vICAgfSksXHJcbiAgLy8gICBzaGFsbG93RXF1YWwgXHJcbiAgLy8gICApO1xyXG5cclxuXHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKSAgICAgICAgICAgLy8g7JeF642w7J207Yq4IVxyXG4gIC8vIH0sW09yZGVyXSk7XHJcblxyXG4gIGNvbnN0IExvYWRQcm9kdWN0ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICBkaXNwYXRjaChMb2FkUHJvZHVjdEFjdGlvbigpKTtcclxuICB9LFtdKTtcclxuXHJcblxyXG4gIC8vIGNvbnN0IGFkZENhcnQgPSB1c2VDYWxsYmFjaygoaXRlbSkgPT57XHJcbiAgXHJcbiAgLy8gICBkaXNwYXRjaChhZGRDYXJ0QWN0aW9uKGl0ZW0pKTtcclxuICAvLyB9LFtdKTtcclxuXHJcbiAgY29uc3QgYWRkQ2FydCA9IHVzZUNhbGxiYWNrKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmlkLCBPcmRlcilcclxuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSBPcmRlci5maW5kKG9yZGVyID0+b3JkZXIuaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICBpZihjaGVjayA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICBpdGVtLnF1YW50aXR5ID0gMTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlyc3QnKVxyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKGFkZENhcnRBY3Rpb24oaXRlbSkpOyAgXHJcbiAgICAgICAgICAgICAgLy8gcmV0dXJuIHtpdGVtLCBxdWFudGl0eTogMX07XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgT3JkZXIubWFwKChvcmRlcik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihvcmRlci5pZCA9PT0gaXRlbS5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7KSR67O1JylcclxuICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLnF1YW50aXR5ID0gb3JkZXIucXVhbnRpdHkrMTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFkZENhcnRBY3Rpb24ob3JkZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxufSxbT3JkZXJdKTtcclxuXHJcblxyXG4vL3VzZVNlbGVjdG9yXHJcblxyXG4gIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uVG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICBzZXRMaWtlZCgocHJldikgPT4gIShwcmV2KSk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBMb2FkUHJvZHVjdCgpO1xyXG4gIH0sIFtdKTtcclxuICAgIGNvbnN0IGxpc3REYXRhID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIzOyBpKyspIHtcclxuICAgICAgbGlzdERhdGEucHVzaCh7XHJcbiAgICAgICAgaWQ6e2l9LFxyXG4gICAgICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgICAgIHRpdGxlOiBgYW50IGRlc2lnbiBwYXJ0ICR7aX1gLFxyXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uJyxcclxuICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSksIHRvIGhlbHAgcGVvcGxlIGNyZWF0ZSB0aGVpciBwcm9kdWN0IHByb3RvdHlwZXMgYmVhdXRpZnVsbHkgYW5kIGVmZmljaWVudGx5LicsXHJcbiAgICAgICAgICBwcmljZTogYCR7aX1gXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBJY29uVGV4dCA9ICh7IGljb24sIHRleHQgfSkgPT4gKFxyXG4gICAgICA8U3BhY2U+XHJcbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoaWNvbil9XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvU3BhY2U+XHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7IGJhY2tncm91bmQ6ICcjZmZmJywgcGFkZGluZzogJzhweCAyMHB4JyxtYXJnaW5Cb3R0b206ICc2MHB4J307XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3cgIGd1dHRlcj17MTZ9IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICA8Q29sIHNwYW4gPSB7MTh9PlxyXG4gICAgICAgIDxMaXN0ICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogcGFnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IHtsb2FkUHJvZHVjdExvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtQcm9kdWN0c31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17RG9sbGFyQ2lyY2xlT3V0bGluZWR9IHRleHQ9e2l0ZW0ucHJpY2V9IGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZWQ/PEhlYXJ0VHdvVG9uZSAga2V5ID17aXRlbS5pZH0gdHdvVG9uZUNvbG9yID0gXCJyZWRcIiBvbkNsaWNrPXtvblRvZ2dsZX0vPjo8SGVhcnRPdXRsaW5lZCBvbkNsaWNrPXtvblRvZ2dsZX0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8U2hvcHBpbmdDYXJ0T3V0bGluZWQgLz59IG9uQ2xpY2s9eygpID0+YWRkQ2FydChpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=