"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Leaderboard_tsx",{

/***/ "./src/components/Leaderboard.tsx":
/*!****************************************!*\
  !*** ./src/components/Leaderboard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Leaderboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/lucasuema/Desktop/lc/leaderboard-challenge/src/components/Leaderboard.tsx\";\n\n\nfunction Leaderboard(_ref) {\n  var _this = this;\n\n  var account = _ref.account;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3963011400\" + \" \" + \"wrapper\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-3963011400\" + \" \" + \"tokens\",\n        children: account.tokens.map(function (token) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jsx-3963011400\" + \" \" + \"token\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"jsx-3963011400\" + \" \" + \"balance\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"jsx-3963011400\" + \" \" + \"result\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-3963011400\" + \" \" + \"result\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: \"jsx-3963011400\",\n                  children: [token.balance < 50 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"jsx-3963011400\",\n                    children: [\"\\uD83E\\uDD7A You need 50 $LC, get more with\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                      target: \"_blank\",\n                      href: \"https://www.notion.so/latecheckout/LC-Marketplace-de7296f792dc42caa987c94973a0424f\",\n                      className: \"jsx-3963011400\",\n                      children: \"campaigns\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 23,\n                      columnNumber: 23\n                    }, _this), \" \", \"or ask a friend to give you some.\"]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 21,\n                    columnNumber: 21\n                  }, _this), token.userBalances.map(function (u, key) {\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"jsx-3963011400\" + \" \" + \"result\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"jsx-3963011400\",\n                        children: [key <= 2 && \"👑\", \" \", u.name, \": \", u.balance, \" \", '(' + '$' + Math.trunc(u.balance * 0.1) + ')']\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 35,\n                        columnNumber: 31\n                      }, _this)\n                    }, key, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 34,\n                      columnNumber: 29\n                    }, _this);\n                  })]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 19,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 18,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 17\n            }, _this)]\n          }, token.token, true, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"3963011400\",\n      children: \".account.jsx-3963011400{border-radius:borderRadius;}.wrapper.jsx-3963011400{background:#FBFAF6;border:1px solid #000000;box-sizing:border-box;border-radius:10px;width:400px;margin:0px auto 40px;padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:\\\"Recoleta Regular DEMO\\\";}label.jsx-3963011400{font-weight:bold;}.balance.jsx-3963011400{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.result.jsx-3963011400{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:0px;font-size:20px;font-family:\\\"Recoleta Regular DEMO\\\";}.balance-value.jsx-3963011400{margin-left:15px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc3VlbWEvRGVza3RvcC9sYy9sZWFkZXJib2FyZC1jaGFsbGVuZ2Uvc3JjL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEa0IsQUFHc0MsQUFHUixBQWNGLEFBR0osQUFHQSxBQVFJLGlCQWJuQixBQWNBLEVBNUIyQixRQUgzQixpQkFJd0Isc0JBQ0gsUUFlckIsQUFHcUIsV0FqQlAsWUFDUyxxQkFDUixhQUNBLG9DQWVVLHNDQWRKLDZEQWVKLGVBQ0EsZUFDcUIsRUFoQmIsa0NBaUJ6QixpRUFoQndCLDhFQUNjLG9DQUN0QyIsImZpbGUiOiIvVXNlcnMvbHVjYXN1ZW1hL0Rlc2t0b3AvbGMvbGVhZGVyYm9hcmQtY2hhbGxlbmdlL3NyYy9jb21wb25lbnRzL0xlYWRlcmJvYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFjY291bnRUeXBlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxudHlwZSBQcm9wVHlwZXMgPSB7XG4gIGFjY291bnQ6IEFjY291bnRUeXBlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhZGVyYm9hcmQoeyBhY2NvdW50IH06IFByb3BUeXBlcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbnNcIj5cbiAgICAgICAgICB7YWNjb3VudC50b2tlbnMubWFwKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlblwiIGtleT17dG9rZW4udG9rZW59PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4uYmFsYW5jZSA8IDUwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIPCfpbogWW91IG5lZWQgNTAgJExDLCBnZXQgbW9yZSB3aXRoe1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm5vdGlvbi5zby9sYXRlY2hlY2tvdXQvTEMtTWFya2V0cGxhY2UtZGU3Mjk2Zjc5MmRjNDJjYWE5ODdjOTQ5NzNhMDQyNGZcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbXBhaWduc1xuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgb3IgYXNrIGEgZnJpZW5kIHRvIGdpdmUgeW91IHNvbWUuXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICApfVxue3Rva2VuLnVzZXJCYWxhbmNlcy5tYXAoKHUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2tleSA8PSAyICYmIFwi8J+RkVwifSB7dS5uYW1lfToge3UuYmFsYW5jZX0geycoJysnJCcrTWF0aC50cnVuYygodS5iYWxhbmNlKSowLjEpKycpJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hY2NvdW50IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiBib3JkZXJSYWRpdXM7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGQkZBRjY7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gNDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJlY29sZXRhIFJlZ3VsYXIgREVNT1wiO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuYmFsYW5jZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAucmVzdWx0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSZWNvbGV0YSBSZWd1bGFyIERFTU9cIjtcbiAgICAgICAgfVxuICAgICAgICAuYmFsYW5jZS12YWx1ZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/lucasuema/Desktop/lc/leaderboard-challenge/src/components/Leaderboard.tsx */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true);\n}\n_c = Leaderboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Leaderboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MZWFkZXJib2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPZSxTQUFTQyxXQUFULE9BQTZDO0FBQUE7O0FBQUEsTUFBdEJDLE9BQXNCLFFBQXRCQSxPQUFzQjtBQUMxRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsMENBQWUsU0FBZjtBQUFBLDZCQUNFO0FBQUEsNENBQWUsUUFBZjtBQUFBLGtCQUNHQSxPQUFPLENBQUNDLE1BQVIsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxLQUFELEVBQVc7QUFDN0IsOEJBQ0U7QUFBQSxnREFBZSxPQUFmO0FBQUEsb0NBQ0U7QUFBQSxrREFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLGtEQUFlLFFBQWY7QUFBQSxxQ0FDSTtBQUFBLG9EQUFlLFFBQWY7QUFBQSx1Q0FDRTtBQUFBO0FBQUEsNkJBQ0NBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixFQUFoQixpQkFDSDtBQUFBO0FBQUEsOEVBQ29DLEdBRHBDLGVBRUU7QUFDRSw0QkFBTSxFQUFDLFFBRFQ7QUFFRSwwQkFBSSxFQUFDLG9GQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkYsRUFPTyxHQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRSxFQWFyQkQsS0FBSyxDQUFDRSxZQUFOLENBQW1CSCxHQUFuQixDQUF1QixVQUFDSSxDQUFELEVBQUlDLEdBQUosRUFBWTtBQUNWLHdDQUNFO0FBQUEsMERBQXlCLFFBQXpCO0FBQUEsNkNBQ0U7QUFBQTtBQUFBLG1DQUNDQSxHQUFHLElBQUksQ0FBUCxJQUFZLElBRGIsT0FDb0JELENBQUMsQ0FBQ0UsSUFEdEIsUUFDOEJGLENBQUMsQ0FBQ0YsT0FEaEMsT0FDMEMsTUFBSSxHQUFKLEdBQVFLLElBQUksQ0FBQ0MsS0FBTCxDQUFZSixDQUFDLENBQUNGLE9BQUgsR0FBWSxHQUF2QixDQUFSLEdBQW9DLEdBRDlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHVCQUFVRyxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREY7QUFPRCxtQkFSeEIsQ0FicUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQSxhQUE0QkosS0FBSyxDQUFDQSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBZ0NELFNBakNBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBOEVEO0tBL0V1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQudHN4PzY2MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG50eXBlIFByb3BUeXBlcyA9IHtcbiAgYWNjb3VudDogQWNjb3VudFR5cGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFkZXJib2FyZCh7IGFjY291bnQgfTogUHJvcFR5cGVzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2Vuc1wiPlxuICAgICAgICAgIHthY2NvdW50LnRva2Vucy5tYXAoKHRva2VuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuXCIga2V5PXt0b2tlbi50b2tlbn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWxhbmNlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5iYWxhbmNlIDwgNTAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAg8J+luiBZb3UgbmVlZCA1MCAkTEMsIGdldCBtb3JlIHdpdGh7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubm90aW9uLnNvL2xhdGVjaGVja291dC9MQy1NYXJrZXRwbGFjZS1kZTcyOTZmNzkyZGM0MmNhYTk4N2M5NDk3M2EwNDI0ZlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FtcGFpZ25zXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICBvciBhc2sgYSBmcmllbmQgdG8gZ2l2ZSB5b3Ugc29tZS5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICl9XG57dG9rZW4udXNlckJhbGFuY2VzLm1hcCgodSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7a2V5IDw9IDIgJiYgXCLwn5GRXCJ9IHt1Lm5hbWV9OiB7dS5iYWxhbmNlfSB7JygnKyckJytNYXRoLnRydW5jKCh1LmJhbGFuY2UpKjAuMSkrJyknfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmFjY291bnQge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGJvcmRlclJhZGl1cztcbiAgICAgICAgfVxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZCRkFGNjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0byA0MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmVjb2xldGEgUmVndWxhciBERU1PXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxhbmNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5yZXN1bHQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJlY29sZXRhIFJlZ3VsYXIgREVNT1wiO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxhbmNlLXZhbHVlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGVhZGVyYm9hcmQiLCJhY2NvdW50IiwidG9rZW5zIiwibWFwIiwidG9rZW4iLCJiYWxhbmNlIiwidXNlckJhbGFuY2VzIiwidSIsImtleSIsIm5hbWUiLCJNYXRoIiwidHJ1bmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Leaderboard.tsx\n");

/***/ })

});