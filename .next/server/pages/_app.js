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
var _jsxFileName = "C:\\Users\\goman\\Desktop\\react-fake-cart\\pages\\_app.js";

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
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
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
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
  cart: _cart__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN, LOG_OUT, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN", function() { return LOG_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isLogin: false,
  user: null
};
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const loginAction = data => {
  return {
    type: LOG_IN,
    data
  };
};
const logoutAction = () => {
  return {
    type: LOG_OUT
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogin: true,
        user: action.data
      });

    case LOG_OUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogin: false,
        user: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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



 //configureStore -> store 설정

const configureStore = () => {
  const middlewares = [];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwiaW5pdGlhbFN0YXRlIiwiaWQiLCJVc2VyIiwidXNlcklkIiwiUHJvZHVjdHMiLCJ0aXRsZSIsInByaWNlIiwiaW1hZ2UiLCJhZGRlZENhcnQiLCJBRERfQ0FSVCIsImFkZENhcnRBY3Rpb24iLCJ0eXBlIiwiZHVtbXlQcm9kdWN0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidXNlciIsImlzTG9naW4iLCJjYXJ0IiwiY2FydExpc3QiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiTE9HX0lOIiwiTE9HX09VVCIsImxvZ2luQWN0aW9uIiwiZGF0YSIsImxvZ291dEFjdGlvbiIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsInByb2Nlc3MiLCJlbnYiLCJOb2RlX0VOViJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFFM0IsU0FDRyxtRUFDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQLENBREQsRUFFSyxNQUFD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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPiA8dGl0bGU+RmFrZS1zaG9wPC90aXRsZT48L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6ICdpYW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFByb2R1Y3RzOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRmphbGxyYXZlbiAtIEZvbGRzYWNrIE5vLiAxIEJhY2twYWNrLCBGaXRzIDE1IExhcHRvcHNcIixcclxuICAgICAgICAgICAgICAgIHByaWNlOiAxMDkuOTUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vaW1nLzgxZlBLZC0yQVlMLl9BQ19TTDE1MDBfLmpwZ1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgYWRkZWRDYXJ0OiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NBUlQgPSAnQUREX0NBUlQnO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZENhcnQgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgIHR5cGU6IEFERF9DQVJULFxyXG4vLyAgICAgICAgIGRhdGFcclxuLy8gICAgIH1cclxuLy8gfVxyXG5leHBvcnQgY29uc3QgYWRkQ2FydEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBBRERfQ0FSVCxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZHVtbXlQcm9kdWN0ID0ge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogXCJNZW5zIENhc3VhbCBQcmVtaXVtIFNsaW0gRml0IFQtU2hpcnRzXCIsXHJcbiAgICBwcmljZTogMjIuMyxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9pbWcvNzEtM0hqR05EVUwuX0FDX1NZODc5Ll9TWC5fVVguX1NZLl9VWV8uanBnXCJcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQUREX0NBUlQ6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIFByb2R1Y3RzOltkdW1teVByb2R1Y3QsIC4uLnN0YXRlLlByb2R1Y3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZGVkQ2FydDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbi8vSFlEUkFURSDslaHshZjsnoQg66as642V7IqkIOyEnOuyhOyCrOydtOuTnCDroIzrjZTrp4HsnYQg7JyE7ZWcXHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXJ0IGZyb20gJy4vY2FydCdcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXI6e1xyXG4gICAgICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgY2FydDp7XHJcbiAgICAgICAgY2FydExpc3Q6IFtdLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleDooc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBjYXJ0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICB1c2VyOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOID0gJ0xPR19JTic7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0dfSU4sXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9HX09VVFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBMT0dfSU46XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6YWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVQ6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VyOm51bGxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5cclxuLy9jb25maWd1cmVTdG9yZSAtPiBzdG9yZSDshKTsoJVcclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIFxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG4vL+uRkOuyiOynuCDsnbjsnpAg7Ji17IWYIGRlYnVn66qo65OcIHRydWUg7LaU7KCB7J20IOyJrOybjOynhOuLpC4gXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5Ob2RlX0VOViA9PT0gJyBkZXZlbG9wbWVudCdcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=