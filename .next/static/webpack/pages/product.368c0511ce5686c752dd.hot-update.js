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
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    //antd Form-> e.prevent 적용되어 있음
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
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    value: userId,
    onChange: onChangeId,
    placeholder: "input username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
          lineNumber: 30,
          columnNumber: 47
        }
      }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EyeInvisibleOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 64
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 14
    }
  }, "Login")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwic2V0SXNMb2dJbiIsInVzZVN0YXRlIiwidXNlcklkIiwic2V0VXNlcklkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlSWQiLCJ1c2VDYWxsYmFjayIsImUiLCJzZXRJZCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQd2QiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJ2aXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7O0FBQ2hDLGtCQUE0QkMsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPRyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCLGlCQUZnQyxDQUloQzs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFFQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBSztBQUMvQkMsU0FBSyxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFMO0FBQ0gsR0FGNEIsRUFFM0IsRUFGMkIsQ0FBN0I7QUFHQSxNQUFNQyxXQUFXLEdBQUdMLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFNO0FBQ2xDSCxlQUFXLENBQUNHLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDSCxHQUY4QixFQUU3QixFQUY2QixDQUEvQjtBQUdBLE1BQU1FLFFBQVEsR0FBR04seURBQVcsQ0FBQyxZQUFLO0FBQzlCO0FBQ0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixNQUFaLEVBQW9CRSxRQUFwQjtBQUNBSixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0gsR0FKMkIsRUFJMUIsQ0FBQ0UsTUFBRCxFQUFTRSxRQUFULENBSjBCLENBQTVCO0FBTUEsU0FDSSxNQUFDLDBDQUFEO0FBQU8sYUFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlDQUFEO0FBQU0sWUFBUSxFQUFJUyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQywwQ0FBRDtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBSVgsTUFBNUI7QUFBb0MsWUFBUSxFQUFFSSxVQUE5QztBQUEwRCxlQUFXLEVBQUMsZ0JBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBLE1BQUMsMENBQUQsQ0FBTyxRQUFQO0FBQ0EsU0FBSyxFQUFJRixRQURUO0FBRUEsWUFBUSxFQUFFUSxXQUZWO0FBR0EsZUFBVyxFQUFDLGdCQUhaO0FBSUEsY0FBVSxFQUFFLG9CQUFBSSxPQUFPO0FBQUEsYUFBS0EsT0FBTyxHQUFHLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFILEdBQW9CLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFoQztBQUFBLEtBSm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxFQVFDLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixZQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJELENBREosQ0FESjtBQWdCSCxDQWpDRDs7R0FBTWpCLFM7O0tBQUFBLFM7QUFtQ1NBLHdFQUFmLEUsQ0FDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuMzY4YzA1MTFjZTU2ODZjNzUyZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQsIFNwYWNlLCBCdXR0b24sIEZvcm19IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBFeWVJbnZpc2libGVPdXRsaW5lZCwgRXllVHdvVG9uZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICh7c2V0SXNMb2dJbn0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICAvL+y7tO2PrOuEjO2KuOydmCBwcm9wc+uhnCDrhJjqsqjso7zripQg7ZWo7IiY64qUIHVzZUNhbGxiYWNrIOyCrOyaqVxyXG4gICAgY29uc3Qgb25DaGFuZ2VJZCA9dXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxbXSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVB3ZCA9IHVzZUNhbGxiYWNrKChlKSA9PntcclxuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LFtdKTtcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgLy9hbnRkIEZvcm0tPiBlLnByZXZlbnQg7KCB7Jqp65CY7Ja0IOyeiOydjFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZCwgcGFzc3dvcmQpXHJcbiAgICAgICAgc2V0SXNMb2dJbih0cnVlKTtcclxuICAgIH0sW3VzZXJJZCwgcGFzc3dvcmRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoID0ge29uU3VibWl0fT5cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWUgPSB7dXNlcklkfSBvbkNoYW5nZT17b25DaGFuZ2VJZH0gcGxhY2Vob2xkZXI9XCJpbnB1dCB1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVB3ZH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbnB1dCBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGljb25SZW5kZXI9e3Zpc2libGUgPT4gKHZpc2libGUgPyA8RXllVHdvVG9uZSAvPiA6IDxFeWVJbnZpc2libGVPdXRsaW5lZCAvPil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L1NwYWNlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbi8vcmVhY3QsIHR5cGVzY3JpcHQgKyBncmFwaHFsXHJcbi8vaHR0cHM6Ly93d3cuam9ia29yZWEuY28ua3IvUmVjcnVpdC9HSV9SZWFkLzM1Nzg1ODI2P09lbV9Db2RlPUMxJmxvZ3BhdGg9MSJdLCJzb3VyY2VSb290IjoiIn0=