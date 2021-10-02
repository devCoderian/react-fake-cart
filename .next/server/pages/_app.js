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
/*! exports provided: ADD_CART, addCartAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART", function() { return ADD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartAction", function() { return addCartAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  id: 1,
  User: {
    id: 1,
    userId: 'ian'
  },
  Products: [{
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  }],
  addedCart: false
};
const ADD_CART = 'ADD_CART'; // export const addCart = (data) => {
//     return{
//         type: ADD_CART,
//         data
//     }
// }

const addCartAction = () => {
  return {
    type: ADD_CART
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
    case ADD_CART:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          Products: [dummyProduct, ...state.Products],
          addedCart: true
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
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
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

  function* addCart(action) {
    try {
      //yield call해서 로그인 api를 실행함
      //const result =  yield call(addCartAPI, action.data);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'ADD_CART_SUCCESS',
        data: result.data
      });
    } catch (err) {
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: 'ADD_CART_FAILURE',
        data: err.response.data
      });
    }
  }

  function* watchAddCart() {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('ADD_CART_REQUEST', addCart);
  }

  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddCart)]);
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
      yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXgtc2FnYS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJpbml0aWFsU3RhdGUiLCJpZCIsIlVzZXIiLCJ1c2VySWQiLCJQcm9kdWN0cyIsInRpdGxlIiwicHJpY2UiLCJpbWFnZSIsImFkZGVkQ2FydCIsIkFERF9DQVJUIiwiYWRkQ2FydEFjdGlvbiIsInR5cGUiLCJkdW1teVByb2R1Y3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ1c2VyIiwiaXNMb2dpbiIsImNhcnQiLCJjYXJ0TGlzdCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJwcm9kdWN0IiwibG9hZFByb2R1Y3RMb2FkaW5nIiwibG9hZFByb2R1Y3REb25lIiwibG9hZFByb2R1Y3RFcnJvciIsIkxPQURfUFJPRFVDVF9SRVFVRVNUIiwiTE9BRF9QUk9EVUNUX1NVQ0NFU1MiLCJMT0FEX1BST0RVQ1RfRkFJTFVSRSIsIkxvYWRQcm9kdWN0QWN0aW9uIiwiZGF0YSIsImxvZ2luTG9hZGluZyIsImxvZ2luRG9uZSIsImxvZ2luRXJyb3IiLCJsb2dvdXRMb2FkaW5nIiwibG9nb3V0RG9uZSIsImxvZ291dEVycm9yIiwibWUiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiY2FydFNhZ2EiLCJhZGRDYXJ0QVBJIiwiYXhpb3MiLCJwb3N0IiwiYWRkQ2FydCIsImRlbGF5IiwicHV0IiwicmVzdWx0IiwiZXJyIiwicmVzcG9uc2UiLCJ3YXRjaEFkZENhcnQiLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiZm9yayIsInJvb3RTYWdhIiwidXNlclNhZ2EiLCJwcm9kdWN0U2FnYSIsImxvYWRQcm9kdWN0QVBJIiwiZ2V0IiwibG9hZFByb2R1Y3QiLCJjYWxsIiwiZXJyb3IiLCJ3YXRjaExvYWRQcm9kdWN0IiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ291dCIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsInByb2Nlc3MiLCJlbnYiLCJOb2RlX0VOViJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FB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QUFtQjlCLDhDQUFuQixDQUFqQjtBQUNBLFNBQU8yQixLQUFQO0FBQ0gsQ0FkRCxDLENBZ0JBOzs7QUFDQSxNQUFNOUYsT0FBTyxHQUFHa0csd0VBQWEsQ0FBQ1osY0FBRCxFQUFnQjtBQUN6Q2EsT0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QjtBQURTLENBQWhCLENBQTdCO0FBSWV0RyxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPiA8dGl0bGU+RmFrZS1zaG9wPC90aXRsZT48L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6ICdpYW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFByb2R1Y3RzOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRmphbGxyYXZlbiAtIEZvbGRzYWNrIE5vLiAxIEJhY2twYWNrLCBGaXRzIDE1IExhcHRvcHNcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiAxMDkuOTUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vaW1nLzgxZlBLZC0yQVlMLl9BQ19TTDE1MDBfLmpwZ1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgYWRkZWRDYXJ0OiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NBUlQgPSAnQUREX0NBUlQnO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZENhcnQgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgIHR5cGU6IEFERF9DQVJULFxyXG4vLyAgICAgICAgIGRhdGFcclxuLy8gICAgIH1cclxuLy8gfVxyXG5leHBvcnQgY29uc3QgYWRkQ2FydEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBBRERfQ0FSVCxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZHVtbXlQcm9kdWN0ID0ge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogXCJNZW5zIENhc3VhbCBQcmVtaXVtIFNsaW0gRml0IFQtU2hpcnRzXCIsXHJcbiAgICBwcmljZTogMjIuMyxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9pbWcvNzEtM0hqR05EVUwuX0FDX1NZODc5Ll9TWC5fVVguX1NZLl9VWV8uanBnXCJcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQUREX0NBUlQ6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIFByb2R1Y3RzOltkdW1teVByb2R1Y3QsIC4uLnN0YXRlLlByb2R1Y3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZGVkQ2FydDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbi8vSFlEUkFURSDslaHshZjsnoQg66as642V7IqkIOyEnOuyhOyCrOydtOuTnCDroIzrjZTrp4HsnYQg7JyE7ZWcXHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXJ0IGZyb20gJy4vY2FydCdcclxuaW1wb3J0IHByb2R1Y3QgZnJvbSAnLi9wcm9kdWN0J1xyXG5cclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdXNlcjp7XHJcbiAgICAgICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICAgICAgdXNlcjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBjYXJ0OntcclxuICAgICAgICBjYXJ0TGlzdDogW10sXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OihzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuICAgIGNhcnQsXHJcbiAgICBwcm9kdWN0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBQcm9kdWN0czpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZqYWxscmF2ZW4gLSBGb2xkc2FjayBOby4gMSBCYWNrcGFjaywgRml0cyAxNSBMYXB0b3BzXCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMTA5Ljk1LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL2ltZy84MWZQS2QtMkFZTC5fQUNfU0wxNTAwXy5qcGdcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRQcm9kdWN0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgbG9hZFByb2R1Y3RFcnJvcjogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9SRVFVRVNUID0gJ0xPQURfUFJPRFVDVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9TVUNDRVNTID0gJ0xPQURfUFJPRFVDVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9GQUlMVVJFID0gJ0xPQURfUFJPRFVDVF9GQUlMVVJFJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTG9hZFByb2R1Y3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9BRF9QUk9EVUNUX1JFUVVFU1QsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGR1bW15UHJvZHVjdCA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiTWVucyBDYXN1YWwgUHJlbWl1bSBTbGltIEZpdCBULVNoaXJ0c1wiLFxyXG4gICAgcHJpY2U6IDIyLjMsXHJcbiAgICBpbWFnZTogXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vaW1nLzcxLTNIakdORFVMLl9BQ19TWTg3OS5fU1guX1VYLl9TWS5fVVlfLmpwZ1wiXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIExPQURfUFJPRFVDVF9SRVFVRVNUOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdERvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX1BST0RVQ1RfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgUHJvZHVjdHM6YWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2R1Y3REb25lOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfUFJPRFVDVF9GQUlMVVJFOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUHJvZHVjdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2R1Y3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ2luTG9hZGluZzogZmFsc2UsIC8v66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9naW5Eb25lOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dpbkVycm9yOiBmYWxzZSxcclxuICAgXHJcbiAgICBsb2dvdXRMb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dvdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ291dEVycm9yOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBtZTogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuLy8gZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCc7XHJcbi8vIGV4cG9ydCBjb25zdCBMT0dfSU4gPSAnTE9HX0lOJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW5Mb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOmFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9naW5Eb25lOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ291dExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ291dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nb3V0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOm51bGxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nb3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dvdXREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIGRlbGF5LCBwdXQgfSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBjYXJ0U2FnYSgpe1xyXG4gICAgXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZENhcnRBUEkoZGF0YSl7XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2FkZENhcnQnLCBkYXRhKVxyXG4gICAgICAgICAgICAvLyAtPiDsi6TsoJwg7ISc67KE7JeQIOyalOyyreydhCDrs7Trg4RcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiogYWRkQ2FydChhY3Rpb24pe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAvL3lpZWxkIGNhbGztlbTshJwg66Gc6re47J24IGFwaeulvCDsi6TtlontlahcclxuICAgICAgICAgICAgICAgIC8vY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwoYWRkQ2FydEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfQ0FSVF9TVUNDRVNTJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQUREX0NBUlRfRkFJTFVSRScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICBmdW5jdGlvbiogd2F0Y2hBZGRDYXJ0KCl7XHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdCgnQUREX0NBUlRfUkVRVUVTVCcsIGFkZENhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENhcnQpXHJcbiAgICBdKTtcclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgZm9yaywgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0LCBkZWxheX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5cclxuaW1wb3J0IGNhcnRTYWdhIGZyb20gJy4vY2FydCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcHJvZHVjdFNhZ2EgZnJvbSAnLi9wcm9kdWN0JztcclxuXHJcbi8v7J2067Kk7Yq4IOumrOyKpOuEiCDqsJnsnYDqsoPrk6QgYWxs66GcIOuTseuhnVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIC8v7KCc64SI66CI7J207YSw64+EIO2VqOyImOydtOuLpC5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayhjYXJ0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICAgICAgZm9yayhwcm9kdWN0U2FnYSksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgZGVsYXksIHB1dCwgY2FsbCB9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHByb2R1Y3RTYWdhKCl7XHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdEFQSSgpe1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0c2ApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uKiBsb2FkUHJvZHVjdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUHJvZHVjdEFQSSk7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9BRF9QUk9EVUNUX1NVQ0NFU1MnLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPQURfUFJPRFVDVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIGZ1bmN0aW9uKiB3YXRjaExvYWRQcm9kdWN0KCl7XHJcbiAgICAgIHlpZWxkIHRha2VMYXRlc3QoJ0xPQURfUFJPRFVDVF9SRVFVRVNUJywgbG9hZFByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQcm9kdWN0KVxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIHB1dCwgZGVsYXl9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcblxyXG4gICAgLy8gY29uc3QgbCA9IGxvZ2luKHt0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLCBkYXRhOiB7aWQ6J2lhbid9fSlcclxuICAgIC8vIGwubmV4dCgpOyAtPiAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9naW5BcGksIGFjdGlvbi5kYXRhKTvsl6zquLDquYzsp4Ag7Iuk7ZaJXHJcbiAgICAvLyBsLm5leHQoKTsgeWllbGQgcHV0IOyLpO2WiVxyXG4gICAgLy8gZ2VuZXJhdGXrpbwg7JOw66m0IO2FjOyKpO2KuO2VmOq4sCDsib3ri6QuIFxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpe1xyXG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSlcclxuICAgICAgICAvLyAtPiDsi6TsoJwg7ISc67KE7JeQIOyalOyyreydhCDrs7Trg4RcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24qIGxvZ0luKGFjdGlvbil7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAvL3lpZWxkIGNhbGztlbTshJwg66Gc6re47J24IGFwaeulvCDsi6TtlontlahcclxuICAgICAgICAgICAgLy95aWVsZCBjYWxsKGxvZ2luQXBpLCBhY3Rpb24uZGF0YSk7ID09PSBsb2dpbkFwaShhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgLy9jb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICB5aWVsZCBkZWxheSgyMDAwKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0dfSU5fU1VDQ0VTUycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdMT0dfSU5fRkFJTFVSRScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9nT3V0QVBJKCl7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxuICAgICAgICAvLyAtPiDsi6TsoJwg7ISc67KE7JeQIOyalOyyreydhCDrs7Trg4RcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24qIGxvZ091dChhY3Rpb24pe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgLy95aWVsZCBjYWxs7ZW07IScIOuhnOq3uOyduCBhcGnrpbwg7Iuk7ZaJ7ZWoXHJcbiAgICAgICAgICAgIC8vY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9nT3V0QVBJKTsgLT4gIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgIHlpZWxkIGRlbGF5KDIwMDApO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0xPR19PVVRfU1VDQ0VTUydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnTE9HX09VVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8v7J2067Kk7Yq4IOumrOyKpOuEiCDqsJnsnYAg7JWg65OkXHJcbiAgICBmdW5jdGlvbiogd2F0Y2hMb2dpbigpe1xyXG4gICAgICAgIC8v67mE64+Z6riwIOyVoeyFmCDtgazrpqzsl5DsnbTthLBcclxuICAgICAgICAvL+uhnOq3uOyduOydtOudvOuKlCDslaHshZjsnbQg65Ok7Ja07Jik66m0IOuhnOq3uOyduCDsoJzrhIjroIjsnbTthLDrpbwg7Iuk7ZaJ7ZWY64+E66GdIOydtOuypO2KuCDrpqzsiqTrhIgg7Jet7ZWg7J2EIO2VnOuLpC5cclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0dfSU5fUkVRVUVTVCcsIGxvZ0luKTtcclxuICAgICAgICAvL+uhnOq3uOyduOq0gOugqCDrjbDsnbTthLDsl5Ag64yA7ZWcIOyVoeyFmOydtCBsb2dJbu2VqOyImOyXkCDrp6TqsJzrs4DsiJjroZwg7KCE64us65Cc64ukLlxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCl7XHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdCgnTE9HX09VVF9SRVFVRVNUJywgbG9nT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ291dClcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlXCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG4vL2xvZ2dlclxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlfSkgPT4gKG5leHQpID0+IChhY3Rpb24pPT57XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufVxyXG5cclxuXHJcbi8vY29uZmlndXJlU3RvcmUgLT4gc3RvcmUg7ISk7KCVXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG5cclxuICAgIC8vcmVkdXgtc2FnYVxyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5cclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIFxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICAvLyBzdG9yZeyXkCBzYWdhVGFzayDrtpnsnbTquLBcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbi8v65GQ67KI7Ke4IOyduOyekCDsmLXshZggZGVidWfrqqjrk5wgdHJ1ZSDstpTsoIHsnbQg7Ims7JuM7KeE64ukLiBcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUse1xyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5vZGVfRU5WID09PSAnIGRldmVsb3BtZW50J1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eC1zYWdhL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=