"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_Leaderboard_tsx"],{

/***/ "./src/components/Leaderboard.tsx":
/*!****************************************!*\
  !*** ./src/components/Leaderboard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Account; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/lucasuema/Desktop/lc/leaderboard-challenge/src/components/Leaderboard.tsx\";\n\n\nfunction Account(_ref) {\n  var _this = this;\n\n  var account = _ref.account;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3419028120\" + \" \" + \"account\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-3419028120\" + \" \" + \"tokens\",\n        children: account.tokens.map(function (token) {\n          console.log(token);\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jsx-3419028120\" + \" \" + \"token\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"jsx-3419028120\" + \" \" + \"balance\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"jsx-3419028120\" + \" \" + \"result\",\n              children: [token.balance < 50 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"jsx-3419028120\",\n                children: \"\\uD83E\\uDD7A You need 50 $LC, ask lucas@latecheckout.studio for some.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 20,\n                columnNumber: 21\n              }, _this), token.balance > 50 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-3419028120\" + \" \" + \"result\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: \"jsx-3419028120\",\n                  children: token.userBalances.map(function (u, key) {\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"jsx-3419028120\" + \" \" + \"result\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"jsx-3419028120\",\n                        children: [u.name, \": \", u.balance, \" \", key <= 2 && '👑']\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 31,\n                        columnNumber: 33\n                      }, _this)\n                    }, key, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 30,\n                      columnNumber: 31\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 26,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 17\n            }, _this)]\n          }, token.token, true, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"3419028120\",\n      children: \".account.jsx-3419028120{border-radius:borderRadius;}label.jsx-3419028120{font-weight:bold;}.balance.jsx-3419028120{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.result.jsx-3419028120{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:5px;}.balance-value.jsx-3419028120{margin-left:15px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc3VlbWEvRGVza3RvcC9sYy9sZWFkZXJib2FyZC1jaGFsbGVuZ2Uvc3JjL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDa0IsQUFHc0MsQUFHVixBQUdKLEFBR0EsQUFNSSxpQkFYbkIsQUFZQSxVQWZBLCtDQU1BLEFBR3FCLDZGQUNJLG1HQUNSLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9sdWNhc3VlbWEvRGVza3RvcC9sYy9sZWFkZXJib2FyZC1jaGFsbGVuZ2Uvc3JjL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG50eXBlIFByb3BUeXBlcyA9IHtcbiAgYWNjb3VudDogQWNjb3VudFR5cGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50KHsgYWNjb3VudCB9OiBQcm9wVHlwZXMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW5zXCI+XG4gICAgICAgICAge2FjY291bnQudG9rZW5zLm1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlblwiIGtleT17dG9rZW4udG9rZW59PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICB7dG9rZW4uYmFsYW5jZSA8IDUwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIPCfpbogWW91IG5lZWQgNTAgJExDLCBhc2sgbHVjYXNAbGF0ZWNoZWNrb3V0LnN0dWRpbyBmb3Igc29tZS5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7dG9rZW4uYmFsYW5jZSA+IDUwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi51c2VyQmFsYW5jZXMubWFwKCh1LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3UubmFtZX06IHt1LmJhbGFuY2V9IHtrZXkgPD0yICYmICfwn5GRJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hY2NvdW50IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiBib3JkZXJSYWRpdXM7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxhbmNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5yZXN1bHQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbGFuY2UtdmFsdWUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59Il19 */\\n/*@ sourceURL=/Users/lucasuema/Desktop/lc/leaderboard-challenge/src/components/Leaderboard.tsx */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true);\n}\n_c = Account;\n\nvar _c;\n\n$RefreshReg$(_c, \"Account\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MZWFkZXJib2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPZSxTQUFTQyxPQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBdEJDLE9BQXNCLFFBQXRCQSxPQUFzQjtBQUN0RCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsMENBQWUsU0FBZjtBQUFBLDZCQUNFO0FBQUEsNENBQWUsUUFBZjtBQUFBLGtCQUNHQSxPQUFPLENBQUNDLE1BQVIsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxLQUFELEVBQVc7QUFDN0JDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsOEJBQ0U7QUFBQSxnREFBZSxPQUFmO0FBQUEsb0NBQ0U7QUFBQSxrREFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLGtEQUFlLFFBQWY7QUFBQSx5QkFDR0EsS0FBSyxDQUFDRyxPQUFOLEdBQWdCLEVBQWhCLGlCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosRUFNR0gsS0FBSyxDQUFDRyxPQUFOLEdBQWdCLEVBQWhCLGlCQUNDO0FBQUEsb0RBQWUsUUFBZjtBQUFBLHVDQUNFO0FBQUE7QUFBQSw0QkFFSUgsS0FBSyxDQUFDSSxZQUFOLENBQW1CTCxHQUFuQixDQUF1QixVQUFDTSxDQUFELEVBQUlDLEdBQUosRUFBWTtBQUNqQyx3Q0FDRTtBQUFBLDBEQUF5QixRQUF6QjtBQUFBLDZDQUNFO0FBQUE7QUFBQSxtQ0FDQ0QsQ0FBQyxDQUFDRSxJQURILFFBQ1dGLENBQUMsQ0FBQ0YsT0FEYixPQUN1QkcsR0FBRyxJQUFHLENBQU4sSUFBVyxJQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFBVUEsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGO0FBT0QsbUJBUkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQSxhQUE0Qk4sS0FBSyxDQUFDQSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBNkJELFNBL0JBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBNEREO0tBN0R1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQudHN4PzY2MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG50eXBlIFByb3BUeXBlcyA9IHtcbiAgYWNjb3VudDogQWNjb3VudFR5cGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50KHsgYWNjb3VudCB9OiBQcm9wVHlwZXMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW5zXCI+XG4gICAgICAgICAge2FjY291bnQudG9rZW5zLm1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlblwiIGtleT17dG9rZW4udG9rZW59PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICB7dG9rZW4uYmFsYW5jZSA8IDUwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIPCfpbogWW91IG5lZWQgNTAgJExDLCBhc2sgbHVjYXNAbGF0ZWNoZWNrb3V0LnN0dWRpbyBmb3Igc29tZS5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7dG9rZW4uYmFsYW5jZSA+IDUwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi51c2VyQmFsYW5jZXMubWFwKCh1LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3UubmFtZX06IHt1LmJhbGFuY2V9IHtrZXkgPD0yICYmICfwn5GRJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hY2NvdW50IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiBib3JkZXJSYWRpdXM7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxhbmNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5yZXN1bHQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbGFuY2UtdmFsdWUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQWNjb3VudCIsImFjY291bnQiLCJ0b2tlbnMiLCJtYXAiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJiYWxhbmNlIiwidXNlckJhbGFuY2VzIiwidSIsImtleSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Leaderboard.tsx\n");

/***/ })

}]);