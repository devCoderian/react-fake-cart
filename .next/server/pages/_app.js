module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const App = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, " ", __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }
  }, "Fake-shop")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(App));

/***/ }),

/***/ "./reducers/cart.js":
/*!**************************!*\
  !*** ./reducers/cart.js ***!
  \**************************/
/*! exports provided: ADD_CART_REQUEST, ADD_CART_SUCCEESS, ADD_CART_FAILURE, REMOVE_CART_REQUEST, REMOVE_CART_SUCCEESS, REMOVE_CART_FAILURE, REMOVE_ALL_CART_REQUEST, REMOVE_ALL_CART_SUCCEESS, REMOVE_ALL_CART_FAILURE, addCartAction, removeCartAction, removeAllCartAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_REQUEST", function() { return ADD_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_SUCCEESS", function() { return ADD_CART_SUCCEESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_FAILURE", function() { return ADD_CART_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CART_REQUEST", function() { return REMOVE_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CART_SUCCEESS", function() { return REMOVE_CART_SUCCEESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CART_FAILURE", function() { return REMOVE_CART_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_CART_REQUEST", function() { return REMOVE_ALL_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_CART_SUCCEESS", function() { return REMOVE_ALL_CART_SUCCEESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_CART_FAILURE", function() { return REMOVE_ALL_CART_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartAction", function() { return addCartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartAction", function() { return removeCartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllCartAction", function() { return removeAllCartAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  id: 1,
  User: {
    id: 1,
    userId: 'ian'
  },
  Order: [//     {
    //     id: null,
    //     title: null,
    //     price: null,
    //     quantity: 0
    // }
  ],
  LoadOrderLoading: false,
  LoadOrdertDone: false,
  LoadOrderError: null
};
const ADD_CART_REQUEST = 'ADD_CART_REQUEST';
const ADD_CART_SUCCEESS = 'ADD_CART_SUCCEESS';
const ADD_CART_FAILURE = 'ADD_CART_FAILURE';
const REMOVE_CART_REQUEST = 'REMOVE_CART_REQUEST';
const REMOVE_CART_SUCCEESS = 'REMOVE_CART_SUCCEESS';
const REMOVE_CART_FAILURE = 'REMOVE_CART_FAILURE';
const REMOVE_ALL_CART_REQUEST = 'REMOVE_ALL_CART_REQUEST';
const REMOVE_ALL_CART_SUCCEESS = 'REMOVE_ALL_CART_SUCCEESS';
const REMOVE_ALL_CART_FAILURE = 'REMOVE_ALL_CART_FAILURE'; // export const addCart = (data) => {
//     return{
//         type: ADD_CART,
//         data
//     }
// }

const addCartAction = data => {
  return {
    type: ADD_CART_REQUEST,
    data
  };
};
const removeCartAction = data => {
  return {
    type: REMOVE_CART_REQUEST,
    data
  };
};
const removeAllCartAction = () => {
  return {
    type: REMOVE_ALL_CART_REQUEST
  };
}; // const dummyProduct = {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts",
//     price: 22.3,
//     image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
// }
// const remove = useCallback(
//     (id) => {
//         setOrders(orders => {
//             return orders.filter(order => order.id !== id)
//         })
//     },
//     [],
// )
// const removeAll = useCallback(() => {
//     setOrders([]);
// },[]);
//Order = Order.filter(order => order.id !== action.data.id)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          LoadOrderLoading: true,
          LoadOrdertDone: false
        });
      }

    case ADD_CART_SUCCEESS:
      {
        console.log(action.data.id);
        console.log(...state.Order, action.data.id);
        let Order = [...state.Order];
        const check = Order.find(order => order.id === action.data.id);

        if (check === undefined) {
          console.log(check, 'check');
          action.data.quantity = 1;
          return _objectSpread(_objectSpread({}, state), {}, {
            Order: [action.data, ...state.Order],
            LoadOrderLoading: false,
            LoadOrdertDone: true
          });
        } else {
          Order.map(order => {
            console.log(order, 'order');

            if (order.id === action.data.id) {
              console.log('중복'); //   order.quantity = order.quantity+1;

              action.data.quantity = order.quantity + 1;
              return _objectSpread(_objectSpread({}, state), {}, {
                Order: [action.data, ...state.Order],
                LoadOrderLoading: false,
                LoadOrdertDone: true
              });
            }
          });
        }
      }

    case REMOVE_CART_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case REMOVE_CART_SUCCEESS:
      {
        let Order = [...state.Order];
        Order.filter(order => order.id !== action.data);
        console.log('remove', Order);
        return _objectSpread(_objectSpread({}, state), {}, {
          Order: Order.filter(order => order.id !== action.data)
        });
      }

    case REMOVE_ALL_CART_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case REMOVE_ALL_CART_SUCCEESS:
      {
        console.log('removeALLALL', ...state.Order.splice(0));
        return _objectSpread(_objectSpread({}, state), {}, {
          Order: []
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ "./reducers/cart.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product */ "./reducers/product.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //HYDRATE 액션임 리덕스 서버사이드 렌더링을 위한





const initialState = {
  user: {
    isLogin: false,
    user: null
  },
  cart: {
    cartList: []
  }
};
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  cart: _cart__WEBPACK_IMPORTED_MODULE_2__["default"],
  product: _product__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/product.js":
/*!*****************************!*\
  !*** ./reducers/product.js ***!
  \*****************************/
/*! exports provided: LOAD_PRODUCT_REQUEST, LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAILURE, LoadProductAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT_REQUEST", function() { return LOAD_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT_SUCCESS", function() { return LOAD_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCT_FAILURE", function() { return LOAD_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProductAction", function() { return LoadProductAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  Products: [{
    id: null,
    title: null,
    price: null,
    image: null
  }],
  loadProductLoading: false,
  loadProductDone: false,
  loadProductError: null
};
const LOAD_PRODUCT_REQUEST = 'LOAD_PRODUCT_REQUEST';
const LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS';
const LOAD_PRODUCT_FAILURE = 'LOAD_PRODUCT_FAILURE';
const LoadProductAction = () => {
  return {
    type: LOAD_PRODUCT_REQUEST
  };
};
const dummyProduct = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts",
  price: 22.3,
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loadProductLoading: true,
          loadProductDone: false
        });
      }

    case LOAD_PRODUCT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          Products: action.data,
          loadProductLoading: false,
          loadProductDone: true
        });
      }

    case LOAD_PRODUCT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loadProductLoading: false,
          loadProductDone: false
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_SUCCESS, LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_OUT_SUCCESS, LOG_OUT_REQUEST, LOG_OUT_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loginLoading: false,
  //로그인 시도중
  loginDone: false,
  //로그아웃 시도중
  loginError: false,
  logoutLoading: false,
  //로그인 시도중
  logoutDone: false,
  logoutError: false,
  //로그아웃 시도중
  me: null
};
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // export const LOG_OUT = 'LOG_OUT';
// export const LOG_IN = 'LOG_IN';

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: true
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: false,
        loginDone: true,
        me: action.data
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginLoading: false,
        loginDone: false
      });

    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: true
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: false,
        logoutDone: true,
        me: null
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logoutLoading: false,
        logoutDone: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/cart.js":
/*!***********************!*\
  !*** ./sagas/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);

function* cartSaga() {
  function addCartAPI(data) {
    return axios.post('/api/addCart', data); // -> 실제 서버에 요청을 보냄
  }

  function* addCartAction(action) {
    try {
      //yield call해서 로그인 api를 실행함
      //const result =  yield call(addCartAPI, action.data);
      // yield delay(1000);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'ADD_CART_SUCCEESS',
        data: action.data
      });
    } catch (err) {
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'ADD_CART_FAILURE',
        data: err.response.data
      });
    }
  }

  function* removeCartAction(action) {
    try {
      //yield call해서 로그인 api를 실행함
      //const result =  yield call(addCartAPI, action.data);
      // yield delay(1000);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'REMOVE_CART_SUCCEESS',
        data: action.data
      });
    } catch (err) {
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'REMOVE_CART_FAILURE',
        data: err.response.data
      });
    }
  }

  function* removeAllCartAction() {
    try {
      //yield call해서 로그인 api를 실행함
      //const result =  yield call(addCartAPI, action.data);
      // yield delay(1000);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'REMOVE_ALL_CART_SUCCEESS'
      });
    } catch (err) {
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'REMOVE_ALL_CART_FAILURE',
        data: err.response.data
      });
    }
  }

  function* watchAddCart() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('ADD_CART_REQUEST', addCartAction);
  }

  function* watchRemoveCart() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('REMOVE_CART_REQUEST', removeCartAction);
  }

  function* watchRemoveAllCart() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('REMOVE_ALL_CART_REQUEST', removeAllCartAction);
  }

  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddCart), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveCart), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveAllCart)]);
}

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ "./sagas/cart.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product */ "./sagas/product.js");




 //이벤트 리스너 같은것들 all로 등록

function* rootSaga() {
  //제너레이터도 함수이다.
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_cart__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_product__WEBPACK_IMPORTED_MODULE_4__["default"])]);
}

/***/ }),

/***/ "./sagas/product.js":
/*!**************************!*\
  !*** ./sagas/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function* productSaga() {
  function loadProductAPI() {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://fakestoreapi.com/products`);
  }

  function* loadProduct() {
    try {
      const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadProductAPI);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOAD_PRODUCT_SUCCESS',
        data: result.data
      });
    } catch (err) {
      console.error(err);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOAD_PRODUCT_FAILURE',
        error: err.response.data
      });
    }
  }

  function* watchLoadProduct() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('LOAD_PRODUCT_REQUEST', loadProduct);
  }

  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadProduct)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);

function* userSaga() {
  // const l = login({type: 'LOG_IN_REQUEST', data: {id:'ian'}})
  // l.next(); ->  const result =  yield call(loginApi, action.data);여기까지 실행
  // l.next(); yield put 실행
  // generate를 쓰면 테스트하기 쉽다. 
  function logInAPI(data) {
    return axios.post('/api/login', data); // -> 실제 서버에 요청을 보냄
  }

  function* logIn(action) {
    try {
      //yield call해서 로그인 api를 실행함
      //yield call(loginApi, action.data); === loginApi(action.data)
      //const result =  yield call(logInAPI, action.data);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOG_IN_SUCCESS',
        data: action.data
      });
    } catch (err) {
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOG_IN_FAILURE',
        data: err.response.data
      });
    }
  }

  function logOutAPI() {
    return axios.post('/api/logout'); // -> 실제 서버에 요청을 보냄
  }

  function* logOut(action) {
    try {
      //yield call해서 로그인 api를 실행함
      //const result =  yield call(logOutAPI); ->  data: result.data
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOG_OUT_SUCCESS'
      });
    } catch (err) {
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'LOG_OUT_FAILURE',
        data: err.response.data
      });
    }
  } //이벤트 리스너 같은 애들


  function* watchLogin() {
    //비동기 액션 크리에이터
    //로그인이라는 액션이 들어오면 로그인 제너레이터를 실행하도록 이벤트 리스너 역할을 한다.
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('LOG_IN_REQUEST', logIn); //로그인관련 데이터에 대한 액션이 logIn함수에 매개변수로 전달된다.
  }

  function* watchLogout() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('LOG_OUT_REQUEST', logOut);
  }

  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");





 //logger

const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
}; //configureStore -> store 설정


const configureStore = () => {
  //redux-saga
  const sagaMiddleware = _redux_saga_core__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer); // store에 sagaTask 붙이기

  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
}; //두번째 인자 옵션 debug모드 true 추적이 쉬워진다. 


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: process.env.Node_ENV === ' development'
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@redux-saga/core":
/*!***********************************!*\
  !*** external "@redux-saga/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "@redux-saga/core/effects":
/*!*******************************************!*\
  !*** external "@redux-saga/core/effects" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXgtc2FnYS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJpbml0aWFsU3RhdGUiLCJpZCIsIlVzZXIiLCJ1c2VySWQiLCJPcmRlciIsIkxvYWRPcmRlckxvYWRpbmciLCJMb2FkT3JkZXJ0RG9uZSIsIkxvYWRPcmRlckVycm9yIiwiQUREX0NBUlRfUkVRVUVTVCIsIkFERF9DQVJUX1NVQ0NFRVNTIiwiQUREX0NBUlRfRkFJTFVSRSIsIlJFTU9WRV9DQVJUX1JFUVVFU1QiLCJSRU1PVkVfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9DQVJUX0ZBSUxVUkUiLCJSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVCIsIlJFTU9WRV9BTExfQ0FSVF9TVUNDRUVTUyIsIlJFTU9WRV9BTExfQ0FSVF9GQUlMVVJFIiwiYWRkQ2FydEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwicmVtb3ZlQ2FydEFjdGlvbiIsInJlbW92ZUFsbENhcnRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiY2hlY2siLCJmaW5kIiwib3JkZXIiLCJ1bmRlZmluZWQiLCJxdWFudGl0eSIsIm1hcCIsImZpbHRlciIsInNwbGljZSIsInVzZXIiLCJpc0xvZ2luIiwiY2FydCIsImNhcnRMaXN0Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsIkhZRFJBVEUiLCJwYXlsb2FkIiwicHJvZHVjdCIsIlByb2R1Y3RzIiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwibG9hZFByb2R1Y3RMb2FkaW5nIiwibG9hZFByb2R1Y3REb25lIiwibG9hZFByb2R1Y3RFcnJvciIsIkxPQURfUFJPRFVDVF9SRVFVRVNUIiwiTE9BRF9QUk9EVUNUX1NVQ0NFU1MiLCJMT0FEX1BST0RVQ1RfRkFJTFVSRSIsIkxvYWRQcm9kdWN0QWN0aW9uIiwiZHVtbXlQcm9kdWN0IiwibG9naW5Mb2FkaW5nIiwibG9naW5Eb25lIiwibG9naW5FcnJvciIsImxvZ291dExvYWRpbmciLCJsb2dvdXREb25lIiwibG9nb3V0RXJyb3IiLCJtZSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJjYXJ0U2FnYSIsImFkZENhcnRBUEkiLCJheGlvcyIsInBvc3QiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsIndhdGNoQWRkQ2FydCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZUNhcnQiLCJ3YXRjaFJlbW92ZUFsbENhcnQiLCJhbGwiLCJmb3JrIiwicm9vdFNhZ2EiLCJ1c2VyU2FnYSIsInByb2R1Y3RTYWdhIiwibG9hZFByb2R1Y3RBUEkiLCJnZXQiLCJsb2FkUHJvZHVjdCIsInJlc3VsdCIsImNhbGwiLCJlcnJvciIsIndhdGNoTG9hZFByb2R1Y3QiLCJsb2dJbkFQSSIsImxvZ0luIiwiZGVsYXkiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dvdXQiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJwcm9jZXNzIiwiZW52IiwiTm9kZV9FTlYiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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aGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPD5cclxuICAgICAgICA8SGVhZD4gPHRpdGxlPkZha2Utc2hvcDwvdGl0bGU+PC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuQXBwLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiAnaWFuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBPcmRlcjpbXHJcbiAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICAgICAgICAvLyAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgIC8vICAgICBxdWFudGl0eTogMFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBMb2FkT3JkZXJ0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgTG9hZE9yZGVyRXJyb3I6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ0FSVF9SRVFVRVNUID0gJ0FERF9DQVJUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NBUlRfU1VDQ0VFU1MgPSAnQUREX0NBUlRfU1VDQ0VFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NBUlRfRkFJTFVSRSA9ICdBRERfQ0FSVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FSVF9SRVFVRVNUID0gJ1JFTU9WRV9DQVJUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlRfU1VDQ0VFU1MgPSAnUkVNT1ZFX0NBUlRfU1VDQ0VFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlRfRkFJTFVSRSA9ICdSRU1PVkVfQ0FSVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVCA9ICdSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQUxMX0NBUlRfU1VDQ0VFU1MgPSAnUkVNT1ZFX0FMTF9DQVJUX1NVQ0NFRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9BTExfQ0FSVF9GQUlMVVJFID0gJ1JFTU9WRV9BTExfQ0FSVF9GQUlMVVJFJztcclxuXHJcblxyXG4vLyBleHBvcnQgY29uc3QgYWRkQ2FydCA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm57XHJcbi8vICAgICAgICAgdHlwZTogQUREX0NBUlQsXHJcbi8vICAgICAgICAgZGF0YVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbmV4cG9ydCBjb25zdCBhZGRDYXJ0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBBRERfQ0FSVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhcnRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IFJFTU9WRV9DQVJUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQWxsQ2FydEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBSRU1PVkVfQUxMX0NBUlRfUkVRVUVTVFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBkdW1teVByb2R1Y3QgPSB7XHJcbi8vICAgICBpZDogMixcclxuLy8gICAgIHRpdGxlOiBcIk1lbnMgQ2FzdWFsIFByZW1pdW0gU2xpbSBGaXQgVC1TaGlydHNcIixcclxuLy8gICAgIHByaWNlOiAyMi4zLFxyXG4vLyAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL2ltZy83MS0zSGpHTkRVTC5fQUNfU1k4NzkuX1NYLl9VWC5fU1kuX1VZXy5qcGdcIlxyXG4vLyB9XHJcbi8vIGNvbnN0IHJlbW92ZSA9IHVzZUNhbGxiYWNrKFxyXG4vLyAgICAgKGlkKSA9PiB7XHJcbi8vICAgICAgICAgc2V0T3JkZXJzKG9yZGVycyA9PiB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBvcmRlcnMuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBpZClcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfSxcclxuLy8gICAgIFtdLFxyXG4vLyApXHJcbi8vIGNvbnN0IHJlbW92ZUFsbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuLy8gICAgIHNldE9yZGVycyhbXSk7XHJcbi8vIH0sW10pO1xyXG5cclxuLy9PcmRlciA9IE9yZGVyLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQUREX0NBUlRfUkVRVUVTVDp7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgTG9hZE9yZGVyTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIExvYWRPcmRlcnREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DQVJUX1NVQ0NFRVNTOntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyguLi5zdGF0ZS5PcmRlcixhY3Rpb24uZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIGxldCBPcmRlciA9IFsuLi5zdGF0ZS5PcmRlcl07XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gT3JkZXIuZmluZChvcmRlciA9Pm9yZGVyLmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZihjaGVjayA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVjaywnY2hlY2snKVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhLnF1YW50aXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmRlcjogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5PcmRlcl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRPcmRlcnREb25lOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgT3JkZXIubWFwKChvcmRlcik9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcmRlciwgJ29yZGVyJylcclxuICAgICAgICAgICAgICAgIGlmKG9yZGVyLmlkID09PSBhY3Rpb24uZGF0YS5pZCl7ICAgIFxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7KSR67O1JylcclxuICAgICAgICAgICAgICAgIC8vICAgb3JkZXIucXVhbnRpdHkgPSBvcmRlci5xdWFudGl0eSsxO1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb24uZGF0YS5xdWFudGl0eSA9IG9yZGVyLnF1YW50aXR5KzFcclxuICAgICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9yZGVyOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLk9yZGVyXSxcclxuICAgICAgICAgICAgICAgICAgICBMb2FkT3JkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBMb2FkT3JkZXJ0RG9uZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0NBUlRfUkVRVUVTVDp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0NBUlRfU1VDQ0VFU1M6e1xyXG4gICAgICAgICAgICBsZXQgT3JkZXIgPSBbLi4uc3RhdGUuT3JkZXJdO1xyXG4gICAgICAgICAgICBPcmRlci5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScsT3JkZXIpO1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIE9yZGVyOk9yZGVyLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0FMTF9DQVJUX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0FMTF9DQVJUX1NVQ0NFRVNTOntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZUFMTEFMTCcsLi4uc3RhdGUuT3JkZXIuc3BsaWNlKDApKTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBPcmRlcjogW10sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuLy9IWURSQVRFIOyVoeyFmOyehCDrpqzrjZXsiqQg7ISc67KE7IKs7J2065OcIOugjOuNlOungeydhCDsnITtlZxcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IGNhcnQgZnJvbSAnLi9jYXJ0J1xyXG5pbXBvcnQgcHJvZHVjdCBmcm9tICcuL3Byb2R1Y3QnXHJcblxyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOntcclxuICAgICAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGNhcnQ6e1xyXG4gICAgICAgIGNhcnRMaXN0OiBbXSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6KHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgY2FydCxcclxuICAgIHByb2R1Y3RcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFByb2R1Y3RzOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxvYWRQcm9kdWN0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbG9hZFByb2R1Y3REb25lOiBmYWxzZSxcclxuICAgICAgICBsb2FkUHJvZHVjdEVycm9yOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1JFUVVFU1QgPSAnTE9BRF9QUk9EVUNUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1NVQ0NFU1MgPSAnTE9BRF9QUk9EVUNUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX0ZBSUxVUkUgPSAnTE9BRF9QUk9EVUNUX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkUHJvZHVjdEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0FEX1BST0RVQ1RfUkVRVUVTVCxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZHVtbXlQcm9kdWN0ID0ge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogXCJNZW5zIENhc3VhbCBQcmVtaXVtIFNsaW0gRml0IFQtU2hpcnRzXCIsXHJcbiAgICBwcmljZTogMjIuMyxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9pbWcvNzEtM0hqR05EVUwuX0FDX1NZODc5Ll9TWC5fVVguX1NZLl9VWV8uanBnXCJcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9BRF9QUk9EVUNUX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0RG9uZTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfUFJPRFVDVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0czphY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9QUk9EVUNUX0ZBSUxVUkU6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9kdWN0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9naW5Mb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dpbkRvbmU6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ2luRXJyb3I6IGZhbHNlLFxyXG4gICBcclxuICAgIGxvZ291dExvYWRpbmc6IGZhbHNlLCAvL+uhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ291dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nb3V0RXJyb3I6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIG1lOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG4vLyBleHBvcnQgY29uc3QgTE9HX09VVCA9ICdMT0dfT1VUJztcclxuLy8gZXhwb3J0IGNvbnN0IExPR19JTiA9ICdMT0dfSU4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbkxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9naW5Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6YWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dpbkRvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nb3V0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nb3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dvdXREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6bnVsbFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dvdXRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ291dERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgZGVsYXksIHB1dH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogY2FydFNhZ2EoKXtcclxuICAgIFxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRDYXJ0QVBJKGRhdGEpe1xyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9hZGRDYXJ0JywgZGF0YSlcclxuICAgICAgICAgICAgLy8gLT4g7Iuk7KCcIOyEnOuyhOyXkCDsmpTssq3snYQg67O064OEXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24qIGFkZENhcnRBY3Rpb24oYWN0aW9uKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgLy95aWVsZCBjYWxs7ZW07IScIOuhnOq3uOyduCBhcGnrpbwg7Iuk7ZaJ7ZWoXHJcbiAgICAgICAgICAgICAgICAvL2NvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGFkZENhcnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQUREX0NBUlRfU1VDQ0VFU1MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfQ0FSVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24qIHJlbW92ZUNhcnRBY3Rpb24oYWN0aW9uKXtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgLy95aWVsZCBjYWxs7ZW07IScIOuhnOq3uOyduCBhcGnrpbwg7Iuk7ZaJ7ZWoXHJcbiAgICAgICAgICAgICAgICAvL2NvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGFkZENhcnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX0NBUlRfU1VDQ0VFU1MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdSRU1PVkVfQ0FSVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiogcmVtb3ZlQWxsQ2FydEFjdGlvbigpe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAvL3lpZWxkIGNhbGztlbTshJwg66Gc6re47J24IGFwaeulvCDsi6TtlontlahcclxuICAgICAgICAgICAgICAgIC8vY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwoYWRkQ2FydEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX0FMTF9DQVJUX1NVQ0NFRVNTJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1JFTU9WRV9BTExfQ0FSVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uKiB3YXRjaEFkZENhcnQoKXtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdBRERfQ0FSVF9SRVFVRVNUJywgYWRkQ2FydEFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24qIHdhdGNoUmVtb3ZlQ2FydCgpe1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoJ1JFTU9WRV9DQVJUX1JFUVVFU1QnLCByZW1vdmVDYXJ0QWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiogd2F0Y2hSZW1vdmVBbGxDYXJ0KCl7XHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdCgnUkVNT1ZFX0FMTF9DQVJUX1JFUVVFU1QnLCByZW1vdmVBbGxDYXJ0QWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDYXJ0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlQ2FydCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUFsbENhcnQpLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwsIGZvcmssIGNhbGwsIHB1dCwgdGFrZUxhdGVzdCwgZGVsYXl9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuXHJcbmltcG9ydCBjYXJ0U2FnYSBmcm9tICcuL2NhcnQnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHByb2R1Y3RTYWdhIGZyb20gJy4vcHJvZHVjdCc7XHJcblxyXG4vL+ydtOuypO2KuCDrpqzsiqTrhIgg6rCZ7J2A6rKD65OkIGFsbOuhnCDrk7HroZ1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCl7XHJcbiAgICAvL+ygnOuEiOugiOydtO2EsOuPhCDtlajsiJjsnbTri6QuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsoY2FydFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgICAgIGZvcmsocHJvZHVjdFNhZ2EpLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIGRlbGF5LCBwdXQsIGNhbGwgfSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwcm9kdWN0U2FnYSgpe1xyXG4gICAgZnVuY3Rpb24gbG9hZFByb2R1Y3RBUEkoKXtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiogbG9hZFByb2R1Y3QoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFByb2R1Y3RBUEkpO1xyXG4gICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURfUFJPRFVDVF9TVUNDRVNTJyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0FEX1BST0RVQ1RfRkFJTFVSRScsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICBmdW5jdGlvbiogd2F0Y2hMb2FkUHJvZHVjdCgpe1xyXG4gICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0FEX1BST0RVQ1RfUkVRVUVTVCcsIGxvYWRQcm9kdWN0KTtcclxuICAgIH1cclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUHJvZHVjdClcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBwdXQsIGRlbGF5fSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpe1xyXG5cclxuICAgIC8vIGNvbnN0IGwgPSBsb2dpbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOidpYW4nfX0pXHJcbiAgICAvLyBsLm5leHQoKTsgLT4gIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGxvZ2luQXBpLCBhY3Rpb24uZGF0YSk77Jes6riw6rmM7KeAIOyLpO2WiVxyXG4gICAgLy8gbC5uZXh0KCk7IHlpZWxkIHB1dCDsi6TtlolcclxuICAgIC8vIGdlbmVyYXRl66W8IOyTsOuptCDthYzsiqTtirjtlZjquLAg7Im964ukLiBcclxuXHJcbiAgICBmdW5jdGlvbiBsb2dJbkFQSShkYXRhKXtcclxuICAgICAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpXHJcbiAgICAgICAgLy8gLT4g7Iuk7KCcIOyEnOuyhOyXkCDsmpTssq3snYQg67O064OEXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgLy95aWVsZCBjYWxs7ZW07IScIOuhnOq3uOyduCBhcGnrpbwg7Iuk7ZaJ7ZWoXHJcbiAgICAgICAgICAgIC8veWllbGQgY2FsbChsb2dpbkFwaSwgYWN0aW9uLmRhdGEpOyA9PT0gbG9naW5BcGkoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgIC8vY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgeWllbGQgZGVsYXkoMjAwMCk7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnTE9HX0lOX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnTE9HX0lOX0ZBSUxVUkUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ091dEFQSSgpe1xyXG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXHJcbiAgICAgICAgLy8gLT4g7Iuk7KCcIOyEnOuyhOyXkCDsmpTssq3snYQg67O064OEXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKXtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIC8veWllbGQgY2FsbO2VtOyEnCDroZzqt7jsnbggYXBp66W8IOyLpO2Wie2VqFxyXG4gICAgICAgICAgICAvL2NvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7IC0+ICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0dfT1VUX1NVQ0NFU1MnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xPR19PVVRfRkFJTFVSRScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvL+ydtOuypO2KuCDrpqzsiqTrhIgg6rCZ7J2AIOyVoOuTpFxyXG4gICAgZnVuY3Rpb24qIHdhdGNoTG9naW4oKXtcclxuICAgICAgICAvL+u5hOuPmeq4sCDslaHshZgg7YGs66as7JeQ7J207YSwXHJcbiAgICAgICAgLy/roZzqt7jsnbjsnbTrnbzripQg7JWh7IWY7J20IOuTpOyWtOyYpOuptCDroZzqt7jsnbgg7KCc64SI66CI7J207YSw66W8IOyLpO2Wie2VmOuPhOuhnSDsnbTrsqTtirgg66as7Iqk64SIIOyXre2VoOydhCDtlZzri6QuXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdCgnTE9HX0lOX1JFUVVFU1QnLCBsb2dJbik7XHJcbiAgICAgICAgLy/roZzqt7jsnbjqtIDroKgg642w7J207YSw7JeQIOuMgO2VnCDslaHshZjsnbQgbG9nSW7tlajsiJjsl5Ag66ek6rCc67OA7IiY66GcIOyghOuLrOuQnOuLpC5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uKiB3YXRjaExvZ291dCgpe1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ091dCk7XHJcbiAgICB9XHJcblxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9naW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dvdXQpXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZVwiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuLy9sb2dnZXJcclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZX0pID0+IChuZXh0KSA9PiAoYWN0aW9uKT0+e1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn1cclxuXHJcblxyXG4vL2NvbmZpZ3VyZVN0b3JlIC0+IHN0b3JlIOyEpOyglVxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuXHJcbiAgICAvL3JlZHV4LXNhZ2FcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuXHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICBcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgLy8gc3RvcmXsl5Agc2FnYVRhc2sg67aZ7J206riwXHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG4vL+uRkOuyiOynuCDsnbjsnpAg7Ji17IWYIGRlYnVn66qo65OcIHRydWUg7LaU7KCB7J20IOyJrOybjOynhOuLpC4gXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5Ob2RlX0VOViA9PT0gJyBkZXZlbG9wbWVudCdcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXgtc2FnYS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9