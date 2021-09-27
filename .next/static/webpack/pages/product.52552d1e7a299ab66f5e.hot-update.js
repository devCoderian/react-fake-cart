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
    setUserId(e.target.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwic2V0SXNMb2dJbiIsInVzZVN0YXRlIiwidXNlcklkIiwic2V0VXNlcklkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlSWQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUHdkIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ2aXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7O0FBQ2hDLGtCQUE0QkMsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPRyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCLGlCQUZnQyxDQUloQzs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFFQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBSztBQUMvQkwsYUFBUyxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0gsR0FGNEIsRUFFM0IsRUFGMkIsQ0FBN0I7QUFHQSxNQUFNQyxXQUFXLEdBQUdKLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFNO0FBQ2xDSCxlQUFXLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDSCxHQUY4QixFQUU3QixFQUY2QixDQUEvQjtBQUdBLE1BQU1FLFFBQVEsR0FBR0wseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU07QUFDL0JBLEtBQUMsQ0FBQ0ssY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWIsTUFBWixFQUFvQkUsUUFBcEI7QUFDQUosY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNILEdBSjJCLEVBSTFCLENBQUNFLE1BQUQsRUFBU0UsUUFBVCxDQUowQixDQUE1QjtBQU1BLFNBQ0ksTUFBQywwQ0FBRDtBQUFPLGFBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwQ0FBRDtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBSUYsTUFBNUI7QUFBb0MsWUFBUSxFQUFFSSxVQUE5QztBQUEwRCxlQUFXLEVBQUMsZ0JBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsMENBQUQsQ0FBTyxRQUFQO0FBQ0EsU0FBSyxFQUFJRixRQURUO0FBRUEsWUFBUSxFQUFFTyxXQUZWO0FBR0EsZUFBVyxFQUFDLGdCQUhaO0FBSUEsY0FBVSxFQUFFLG9CQUFBSyxPQUFPO0FBQUEsYUFBS0EsT0FBTyxHQUFHLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFILEdBQW9CLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFoQztBQUFBLEtBSm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVFLLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixZQUFRLEVBQUMsUUFBaEM7QUFBeUMsV0FBTyxFQUFFSixRQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkwsQ0FESjtBQWNILENBL0JEOztHQUFNYixTOztLQUFBQSxTO0FBaUNTQSx3RUFBZixFLENBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0LjUyNTUyZDFlN2EyOTlhYjY2ZjVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0LCBTcGFjZSwgQnV0dG9uLCBGb3JtfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRXllSW52aXNpYmxlT3V0bGluZWQsIEV5ZVR3b1RvbmUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoe3NldElzTG9nSW59KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgLy/su7Ttj6zrhIztirjsnZggcHJvcHProZwg64SY6rKo7KO864qUIO2VqOyImOuKlCB1c2VDYWxsYmFjayDsgqzsmqlcclxuICAgIGNvbnN0IG9uQ2hhbmdlSWQgPXVzZUNhbGxiYWNrKChlKT0+e1xyXG4gICAgICAgIHNldFVzZXJJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LFtdKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlUHdkID0gdXNlQ2FsbGJhY2soKGUpID0+e1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sW10pO1xyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZCwgcGFzc3dvcmQpXHJcbiAgICAgICAgc2V0SXNMb2dJbih0cnVlKTtcclxuICAgIH0sW3VzZXJJZCwgcGFzc3dvcmRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlID0ge3VzZXJJZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9IHBsYWNlaG9sZGVyPVwiaW5wdXQgdXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgdmFsdWUgPSB7cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQd2R9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaW5wdXQgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpY29uUmVuZGVyPXt2aXNpYmxlID0+ICh2aXNpYmxlID8gPEV5ZVR3b1RvbmUgLz4gOiA8RXllSW52aXNpYmxlT3V0bGluZWQgLz4pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgb25DbGljaz17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L1NwYWNlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbi8vcmVhY3QsIHR5cGVzY3JpcHQgKyBncmFwaHFsXHJcbi8vaHR0cHM6Ly93d3cuam9ia29yZWEuY28ua3IvUmVjcnVpdC9HSV9SZWFkLzM1Nzg1ODI2P09lbV9Db2RlPUMxJmxvZ3BhdGg9MSJdLCJzb3VyY2VSb290IjoiIn0=