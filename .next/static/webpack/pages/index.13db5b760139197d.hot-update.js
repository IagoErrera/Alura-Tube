"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Timeline/index.js":
/*!******************************************!*\
  !*** ./src/components/Timeline/index.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Timeline/styles.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Timeline(props) {\n    const playlistNames = Object.keys(props.playlists);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: playlistNames.map((playlistName)=>{\n            const videos = props.playlists[playlistName];\n            return videos.map((video)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: video.url,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: video.thumb\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Note\\\\Desktop\\\\Pastas e RAR\\\\React\\\\Alura-Tube\\\\src\\\\components\\\\Timeline\\\\index.js\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: video.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Note\\\\Desktop\\\\Pastas e RAR\\\\React\\\\Alura-Tube\\\\src\\\\components\\\\Timeline\\\\index.js\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Note\\\\Desktop\\\\Pastas e RAR\\\\React\\\\Alura-Tube\\\\src\\\\components\\\\Timeline\\\\index.js\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Note\\\\Desktop\\\\Pastas e RAR\\\\React\\\\Alura-Tube\\\\src\\\\components\\\\Timeline\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQThCO0FBRTlCLFNBQVNDLFNBQVNDLEtBQUssRUFBQztJQUN0QixNQUFNQyxnQkFBZ0JDLE9BQU9DLElBQUksQ0FBQ0gsTUFBTUksU0FBUztJQUNqRCxxQkFDRSw4REFBQ0M7a0JBQ0VKLGNBQWNLLEdBQUcsQ0FBQyxDQUFDQyxlQUFpQjtZQUNuQyxNQUFNQyxTQUFTUixNQUFNSSxTQUFTLENBQUNHLGFBQWE7WUFDNUMsT0FBT0MsT0FBT0YsR0FBRyxDQUFDLENBQUNHLHNCQUNqQiw4REFBQ0M7b0JBQUVDLE1BQU1GLE1BQU1HLEdBQUc7O3NDQUNoQiw4REFBQ0M7NEJBQUlDLEtBQUtMLE1BQU1NLEtBQUs7Ozs7OztzQ0FDckIsOERBQUNDO3NDQUNFUCxNQUFNUSxLQUFLOzs7Ozs7Ozs7Ozs7UUFJcEI7Ozs7OztBQUdOO0tBakJTbEI7QUFtQlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUvaW5kZXguanM/YzNiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmZ1bmN0aW9uIFRpbWVsaW5lKHByb3BzKXtcclxuICBjb25zdCBwbGF5bGlzdE5hbWVzID0gT2JqZWN0LmtleXMocHJvcHMucGxheWxpc3RzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cGxheWxpc3ROYW1lcy5tYXAoKHBsYXlsaXN0TmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHByb3BzLnBsYXlsaXN0c1twbGF5bGlzdE5hbWVdXHJcbiAgICAgICAgcmV0dXJuIHZpZGVvcy5tYXAoKHZpZGVvKSA9PiAoXHJcbiAgICAgICAgICA8YSBocmVmPXt2aWRlby51cmx9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dmlkZW8udGh1bWJ9IC8+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIHt2aWRlby50aXRsZX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICkpO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lOyJdLCJuYW1lcyI6WyJTIiwiVGltZWxpbmUiLCJwcm9wcyIsInBsYXlsaXN0TmFtZXMiLCJPYmplY3QiLCJrZXlzIiwicGxheWxpc3RzIiwiZGl2IiwibWFwIiwicGxheWxpc3ROYW1lIiwidmlkZW9zIiwidmlkZW8iLCJhIiwiaHJlZiIsInVybCIsImltZyIsInNyYyIsInRodW1iIiwic3BhbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Timeline/index.js\n"));

/***/ })

});