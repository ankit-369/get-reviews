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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Integrate: function() { return /* binding */ Integrate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/core */ \"(app-pages-browser)/./node_modules/highlight.js/es/core.js\");\n/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ \"(app-pages-browser)/./node_modules/highlight.js/es/languages/typescript.js\");\n/* harmony import */ var highlight_js_styles_atom_one_dark_reasonable_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/styles/atom-one-dark-reasonable.css */ \"(app-pages-browser)/./node_modules/highlight.js/styles/atom-one-dark-reasonable.css\");\n\n\n\n\nhighlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__[\"default\"].registerLanguage(\"typescript\", highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nfunction Integrate(param) {\n    let { classname } = param;\n    const code = 'async function fetchReviews(): Promise<any[]> {\\n    try {\\n        const res = await axios.post(\"http://localhost:3000/api/reviews\", {\\n            name: \"youtube-yalear\"\\n        });\\n        return res.data.review_data;\\n    } catch (error) {\\n        console.error(\"Error fetching reviews:\", error);\\n        return []; // Return an empty array or handle the error as needed\\n    }\\n}\\n    ';\n    const highlightedCode = highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__[\"default\"].highlight(code, {\n        language: \"typescript\"\n    }).value;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classname,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-2 flex justify-between items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" font-medium text-gray-900 dark:text-white\",\n                        children: \"Card example with CTA button:\"\n                    }, void 0, false, {\n                        fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" bg-gray-50 rounded-lg dark:bg-gray-700 p-4 \",\n                    style: {\n                        backgroundColor: \"#282C34\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                    dangerouslySetInnerHTML: {\n                                        __html: highlightedCode\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-2 end-2 bg-gray-50 dark:bg-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                \"data-copy-to-clipboard-target\": \"code-block\",\n                                \"data-copy-to-clipboard-content-type\": \"innerHTML\",\n                                \"data-copy-to-clipboard-html-entities\": \"true\",\n                                className: \"text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        id: \"default-message\",\n                                        className: \"inline-flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-3 h-3 me-1.5\",\n                                                \"aria-hidden\": \"true\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                fill: \"currentColor\",\n                                                viewBox: \"0 0 18 20\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-xs font-semibold\",\n                                                children: \"Copy code\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        id: \"success-message\",\n                                        className: \"hidden inline-flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5\",\n                                                \"aria-hidden\": \"true\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                fill: \"none\",\n                                                viewBox: \"0 0 16 12\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    stroke: \"currentColor\",\n                                                    \"stroke-linecap\": \"round\",\n                                                    \"stroke-linejoin\": \"round\",\n                                                    \"stroke-width\": \"2\",\n                                                    d: \"M1 5.917 5.724 10.5 15 1.5\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-xs font-semibold text-blue-700 dark:text-blue-500\",\n                                                children: \"Copied\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_c = Integrate;\nvar _c;\n$RefreshReg$(_c, \"Integrate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NvZGVfc25pcGV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDc0I7QUFDTDtBQUUxREEsNkRBQUlBLENBQUNFLGdCQUFnQixDQUFDLGNBQWNELDZFQUFVQTtBQVF2QyxTQUFTRSxVQUFVLEtBQTZCO1FBQTdCLEVBQUVDLFNBQVMsRUFBa0IsR0FBN0I7SUFDdEIsTUFBTUMsT0FBUTtJQVlkLE1BQU1DLGtCQUEwQk4sNkRBQUlBLENBQUNPLFNBQVMsQ0FBQ0YsTUFBTTtRQUFFRyxVQUFVO0lBQWEsR0FBR0MsS0FBSztJQUV0RixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV1A7a0JBQ1osNEVBQUNNO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQUVELFdBQVU7a0NBQTZDOzs7Ozs7Ozs7Ozs4QkFFOUQsOERBQUNEO29CQUFJQyxXQUFVO29CQUErQ0UsT0FBTzt3QkFBRUMsaUJBQWlCO29CQUFVOztzQ0FDOUYsOERBQUNKOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDSTswQ0FFRyw0RUFBQ1Y7b0NBQU1XLHlCQUF5Qjt3Q0FBRUMsUUFBUVg7b0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUdsRSw4REFBQ0k7NEJBQUlDLFdBQVU7c0NBQzNCLDRFQUFDTztnQ0FBT0MsaUNBQThCO2dDQUFhQyx1Q0FBb0M7Z0NBQVlDLHdDQUFxQztnQ0FBT1YsV0FBVTs7a0RBQ3JKLDhEQUFDVzt3Q0FBS0MsSUFBRzt3Q0FBa0JaLFdBQVU7OzBEQUNqQyw4REFBQ2E7Z0RBQUliLFdBQVU7Z0RBQWlCYyxlQUFZO2dEQUFPQyxPQUFNO2dEQUE2QkMsTUFBSztnREFBZUMsU0FBUTswREFDOUcsNEVBQUNDO29EQUFLQyxHQUFFOzs7Ozs7Ozs7OzswREFFWiw4REFBQ1I7Z0RBQUtYLFdBQVU7MERBQXdCOzs7Ozs7Ozs7Ozs7a0RBRTVDLDhEQUFDVzt3Q0FBS0MsSUFBRzt3Q0FBa0JaLFdBQVU7OzBEQUNqQyw4REFBQ2E7Z0RBQUliLFdBQVU7Z0RBQWtEYyxlQUFZO2dEQUFPQyxPQUFNO2dEQUE2QkMsTUFBSztnREFBT0MsU0FBUTswREFDdkksNEVBQUNDO29EQUFLRSxRQUFPO29EQUFlQyxrQkFBZTtvREFBUUMsbUJBQWdCO29EQUFRQyxnQkFBYTtvREFBSUosR0FBRTs7Ozs7Ozs7Ozs7MERBRWxHLDhEQUFDUjtnREFBS1gsV0FBVTswREFBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTekY7S0FqRGdCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9jb2RlX3NuaXBldC50c3g/YjA4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2NvcmUnO1xuaW1wb3J0IHR5cGVzY3JpcHQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHlwZXNjcmlwdCc7XG5pbXBvcnQgJ2hpZ2hsaWdodC5qcy9zdHlsZXMvYXRvbS1vbmUtZGFyay1yZWFzb25hYmxlLmNzcyc7XG5cbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgndHlwZXNjcmlwdCcsIHR5cGVzY3JpcHQpO1xuXG50eXBlIEludGVncmF0ZVByb3BzID0ge1xuICAgIGNsYXNzbmFtZT86IHN0cmluZztcbn07XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gSW50ZWdyYXRlKHsgY2xhc3NuYW1lIH06IEludGVncmF0ZVByb3BzKSB7XG4gICAgY29uc3QgY29kZSA9IGBhc3luYyBmdW5jdGlvbiBmZXRjaFJldmlld3MoKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Jldmlld3NcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJ5b3V0dWJlLXlhbGVhclwiXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzLmRhdGEucmV2aWV3X2RhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJldmlld3M6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgb3IgaGFuZGxlIHRoZSBlcnJvciBhcyBuZWVkZWRcbiAgICB9XG59XG4gICAgYDtcbiAgICBjb25zdCBoaWdobGlnaHRlZENvZGU6IHN0cmluZyA9IGhsanMuaGlnaGxpZ2h0KGNvZGUsIHsgbGFuZ3VhZ2U6ICd0eXBlc2NyaXB0JyB9KS52YWx1ZTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPkNhcmQgZXhhbXBsZSB3aXRoIENUQSBidXR0b246PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLWdyYXktNTAgcm91bmRlZC1sZyBkYXJrOmJnLWdyYXktNzAwIHAtNCBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyQzM0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGUgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaGlnaGxpZ2h0ZWRDb2RlIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgZW5kLTIgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwXCI+XG4gICAgICAgIDxidXR0b24gZGF0YS1jb3B5LXRvLWNsaXBib2FyZC10YXJnZXQ9XCJjb2RlLWJsb2NrXCIgZGF0YS1jb3B5LXRvLWNsaXBib2FyZC1jb250ZW50LXR5cGU9XCJpbm5lckhUTUxcIiBkYXRhLWNvcHktdG8tY2xpcGJvYXJkLWh0bWwtZW50aXRpZXM9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS00MDAgbS0wLjUgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIHJvdW5kZWQtbGcgcHktMiBweC0yLjUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXdoaXRlIGJvcmRlci1ncmF5LTIwMCBib3JkZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwiZGVmYXVsdC1tZXNzYWdlXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMgaC0zIG1lLTEuNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAxOCAyMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDFoLTMuMjc4QTEuOTkyIDEuOTkyIDAgMCAwIDExIDBIN2ExLjk5MyAxLjk5MyAwIDAgMC0xLjcyMiAxSDJhMiAyIDAgMCAwLTIgMnYxNWEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWM2EyIDIgMCAwIDAtMi0yWm0tMyAxNEg1YTEgMSAwIDAgMSAwLTJoOGExIDEgMCAwIDEgMCAyWm0wLTRINWExIDEgMCAwIDEgMC0yaDhhMSAxIDAgMSAxIDAgMlptMC01SDVhMSAxIDAgMCAxIDAtMmgyVjJoNHYyaDJhMSAxIDAgMSAxIDAgMlpcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkXCI+Q29weSBjb2RlPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJzdWNjZXNzLW1lc3NhZ2VcIiBjbGFzc05hbWU9XCJoaWRkZW4gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtYmx1ZS03MDAgZGFyazp0ZXh0LWJsdWUtNTAwIG1lLTEuNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMTYgMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMSA1LjkxNyA1LjcyNCAxMC41IDE1IDEuNVwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ibHVlLTcwMCBkYXJrOnRleHQtYmx1ZS01MDBcIj5Db3BpZWQ8L3NwYW4+ICAgXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJobGpzIiwidHlwZXNjcmlwdCIsInJlZ2lzdGVyTGFuZ3VhZ2UiLCJJbnRlZ3JhdGUiLCJjbGFzc25hbWUiLCJjb2RlIiwiaGlnaGxpZ2h0ZWRDb2RlIiwiaGlnaGxpZ2h0IiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInByZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYnV0dG9uIiwiZGF0YS1jb3B5LXRvLWNsaXBib2FyZC10YXJnZXQiLCJkYXRhLWNvcHktdG8tY2xpcGJvYXJkLWNvbnRlbnQtdHlwZSIsImRhdGEtY29weS10by1jbGlwYm9hcmQtaHRtbC1lbnRpdGllcyIsInNwYW4iLCJpZCIsInN2ZyIsImFyaWEtaGlkZGVuIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInBhdGgiLCJkIiwic3Ryb2tlIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJzdHJva2Utd2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/code_snipet.tsx\n"));

/***/ })

});