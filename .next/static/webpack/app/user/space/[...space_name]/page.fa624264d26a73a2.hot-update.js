"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/user/space/[...space_name]/page",{

/***/ "(app-pages-browser)/./app/components/code_snipet.tsx":
/*!****************************************!*\
  !*** ./app/components/code_snipet.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Integrate: function() { return /* binding */ Integrate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/core */ \"(app-pages-browser)/./node_modules/highlight.js/es/core.js\");\n/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ \"(app-pages-browser)/./node_modules/highlight.js/es/languages/typescript.js\");\n/* harmony import */ var highlight_js_styles_atom_one_dark_reasonable_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/styles/atom-one-dark-reasonable.css */ \"(app-pages-browser)/./node_modules/highlight.js/styles/atom-one-dark-reasonable.css\");\n\n\n\n\nhighlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__[\"default\"].registerLanguage(\"typescript\", highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nfunction Integrate(param) {\n    let { classname } = param;\n    const code = 'async function fetchReviews(): Promise<any[]> {\\n    try {\\n        const res = await axios.post(\"http://localhost:3000/api/reviews\", {\\n            name: \"youtube-yalear\"\\n        });\\n        return res.data.review_data;\\n    } catch (error) {\\n        console.error(\"Error fetching reviews:\", error);\\n        return []; // Return an empty array or handle the error as needed\\n    }\\n}\\n    ';\n    const highlightedCode = highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__[\"default\"].highlight(code, {\n        language: \"typescript\"\n    }).value;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classname,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-2 flex justify-between items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" font-medium text-gray-900 dark:text-white\",\n                        children: \"Card example with CTA button:\"\n                    }, void 0, false, {\n                        fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" bg-gray-50 rounded-lg dark:bg-gray-700 p-4 \",\n                    style: {\n                        backgroundColor: \"#282C34\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: highlightedCode\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_c = Integrate;\nvar _c;\n$RefreshReg$(_c, \"Integrate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NvZGVfc25pcGV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDc0I7QUFDTDtBQUUxREEsNkRBQUlBLENBQUNFLGdCQUFnQixDQUFDLGNBQWNELDZFQUFVQTtBQVF2QyxTQUFTRSxVQUFVLEtBQTZCO1FBQTdCLEVBQUVDLFNBQVMsRUFBa0IsR0FBN0I7SUFDdEIsTUFBTUMsT0FBUTtJQVlkLE1BQU1DLGtCQUEwQk4sNkRBQUlBLENBQUNPLFNBQVMsQ0FBQ0YsTUFBTTtRQUFFRyxVQUFVO0lBQWEsR0FBR0MsS0FBSztJQUV0RixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV1A7a0JBQ1osNEVBQUNNO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQUVELFdBQVU7a0NBQTZDOzs7Ozs7Ozs7Ozs4QkFFOUQsOERBQUNEO29CQUFJQyxXQUFVO29CQUErQ0UsT0FBTzt3QkFBRUMsaUJBQWlCO29CQUFVOzhCQUM5Riw0RUFBQ0o7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNJO3NDQUVHLDRFQUFDVjtnQ0FBTVcseUJBQXlCO29DQUFFQyxRQUFRWDtnQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RGO0tBaENnQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvY29kZV9zbmlwZXQudHN4P2IwOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9jb3JlJztcbmltcG9ydCB0eXBlc2NyaXB0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHQnO1xuaW1wb3J0ICdoaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWRhcmstcmVhc29uYWJsZS5jc3MnO1xuXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ3R5cGVzY3JpcHQnLCB0eXBlc2NyaXB0KTtcblxudHlwZSBJbnRlZ3JhdGVQcm9wcyA9IHtcbiAgICBjbGFzc25hbWU/OiBzdHJpbmc7XG59O1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIEludGVncmF0ZSh7IGNsYXNzbmFtZSB9OiBJbnRlZ3JhdGVQcm9wcykge1xuICAgIGNvbnN0IGNvZGUgPSBgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZXZpZXdzKCk6IFByb21pc2U8YW55W10+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9yZXZpZXdzXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwieW91dHViZS15YWxlYXJcIlxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhLnJldmlld19kYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZXZpZXdzOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IG9yIGhhbmRsZSB0aGUgZXJyb3IgYXMgbmVlZGVkXG4gICAgfVxufVxuICAgIGA7XG4gICAgY29uc3QgaGlnaGxpZ2h0ZWRDb2RlOiBzdHJpbmcgPSBobGpzLmhpZ2hsaWdodChjb2RlLCB7IGxhbmd1YWdlOiAndHlwZXNjcmlwdCcgfSkudmFsdWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5DYXJkIGV4YW1wbGUgd2l0aCBDVEEgYnV0dG9uOjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgZGFyazpiZy1ncmF5LTcwMCBwLTQgXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzI4MkMzNCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHByZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGhpZ2hsaWdodGVkQ29kZSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiaGxqcyIsInR5cGVzY3JpcHQiLCJyZWdpc3Rlckxhbmd1YWdlIiwiSW50ZWdyYXRlIiwiY2xhc3NuYW1lIiwiY29kZSIsImhpZ2hsaWdodGVkQ29kZSIsImhpZ2hsaWdodCIsImxhbmd1YWdlIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/code_snipet.tsx\n"));

/***/ })

});