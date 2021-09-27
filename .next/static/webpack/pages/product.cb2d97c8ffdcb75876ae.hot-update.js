webpackHotUpdate_N_E("pages/product",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ian07\\Desktop\\react-fake-shop\\components\\LoginForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var LoginForm = function LoginForm(_ref) {
  _s();

  var setIsLogIn = _ref.setIsLogIn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      userId = _useState[0],
      setUserId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1]; //컴포넌트의 props로 넘겨주는 함수는 useCallback 사용


  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePwd = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
    console.log(userId, password);
    setIsLogIn(true);
  }, [userId, password]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    direction: "horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    value: userId,
    onChange: onChangeId,
    placeholder: "input username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    value: password,
    onChange: onChangePwd,
    placeholder: "input password",
    iconRender: function iconRender(visible) {
      return visible ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EyeTwoTone"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 47
        }
      }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EyeInvisibleOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 64
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    onClick: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 14
    }
  }, "Login"));
};

_s(LoginForm, "dM6f67MIMkL80lGGY6whmEeFKjY=");

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm); //react, typescript + graphql
//https://www.jobkorea.co.kr/Recruit/GI_Read/35785826?Oem_Code=C1&logpath=1

var _c;

$RefreshReg$(_c, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwic2V0SXNMb2dJbiIsInVzZVN0YXRlIiwidXNlcklkIiwic2V0VXNlcklkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlSWQiLCJ1c2VDYWxsYmFjayIsImUiLCJzZXRJZCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQd2QiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInZpc2libGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7QUFDaEMsa0JBQTRCQyxzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0NGLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakIsaUJBRmdDLENBSWhDOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUVDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFLO0FBQy9CQyxTQUFLLENBQUNELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQUw7QUFDSCxHQUY0QixFQUUzQixFQUYyQixDQUE3QjtBQUdBLE1BQU1DLFdBQVcsR0FBR0wseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU07QUFDbENILGVBQVcsQ0FBQ0csQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNILEdBRjhCLEVBRTdCLEVBRjZCLENBQS9CO0FBR0EsTUFBTUUsUUFBUSxHQUFHTix5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTTtBQUMvQkEsS0FBQyxDQUFDTSxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZCxNQUFaLEVBQW9CRSxRQUFwQjtBQUNBSixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0gsR0FKMkIsRUFJMUIsQ0FBQ0UsTUFBRCxFQUFTRSxRQUFULENBSjBCLENBQTVCO0FBTUEsU0FDSSxNQUFDLDBDQUFEO0FBQU8sYUFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBDQUFEO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFJRixNQUE1QjtBQUFvQyxZQUFRLEVBQUVJLFVBQTlDO0FBQTBELGVBQVcsRUFBQyxnQkFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFDQSxTQUFLLEVBQUlGLFFBRFQ7QUFFQSxZQUFRLEVBQUVRLFdBRlY7QUFHQSxlQUFXLEVBQUMsZ0JBSFo7QUFJQSxjQUFVLEVBQUUsb0JBQUFLLE9BQU87QUFBQSxhQUFLQSxPQUFPLEdBQUcsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUgsR0FBb0IsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQWhDO0FBQUEsS0FKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBUUssTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFlBQVEsRUFBQyxRQUFoQztBQUF5QyxXQUFPLEVBQUVKLFFBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSTCxDQURKO0FBY0gsQ0EvQkQ7O0dBQU1kLFM7O0tBQUFBLFM7QUFpQ1NBLHdFQUFmLEUsQ0FDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuY2IyZDk3YzhmZmRjYjc1ODc2YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQsIFNwYWNlLCBCdXR0b24sIEZvcm19IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBFeWVJbnZpc2libGVPdXRsaW5lZCwgRXllVHdvVG9uZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICh7c2V0SXNMb2dJbn0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICAvL+y7tO2PrOuEjO2KuOydmCBwcm9wc+uhnCDrhJjqsqjso7zripQg7ZWo7IiY64qUIHVzZUNhbGxiYWNrIOyCrOyaqVxyXG4gICAgY29uc3Qgb25DaGFuZ2VJZCA9dXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxbXSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVB3ZCA9IHVzZUNhbGxiYWNrKChlKSA9PntcclxuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LFtdKTtcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQsIHBhc3N3b3JkKVxyXG4gICAgICAgIHNldElzTG9nSW4odHJ1ZSk7XHJcbiAgICB9LFt1c2VySWQsIHBhc3N3b3JkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZSA9IHt1c2VySWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSBwbGFjZWhvbGRlcj1cImlucHV0IHVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHZhbHVlID0ge3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUHdkfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImlucHV0IHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWNvblJlbmRlcj17dmlzaWJsZSA9PiAodmlzaWJsZSA/IDxFeWVUd29Ub25lIC8+IDogPEV5ZUludmlzaWJsZU91dGxpbmVkIC8+KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9TcGFjZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4vL3JlYWN0LCB0eXBlc2NyaXB0ICsgZ3JhcGhxbFxyXG4vL2h0dHBzOi8vd3d3LmpvYmtvcmVhLmNvLmtyL1JlY3J1aXQvR0lfUmVhZC8zNTc4NTgyNj9PZW1fQ29kZT1DMSZsb2dwYXRoPTEiXSwic291cmNlUm9vdCI6IiJ9