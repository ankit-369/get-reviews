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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Integrate: function() { return /* binding */ Integrate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/core */ \"(app-pages-browser)/./node_modules/highlight.js/es/core.js\");\n/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ \"(app-pages-browser)/./node_modules/highlight.js/es/languages/typescript.js\");\n/* harmony import */ var highlight_js_styles_atom_one_dark_reasonable_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/styles/atom-one-dark-reasonable.css */ \"(app-pages-browser)/./node_modules/highlight.js/styles/atom-one-dark-reasonable.css\");\n\n\n\n\nhighlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__[\"default\"].registerLanguage(\"typescript\", highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nfunction Integrate(param) {\n    let { classname } = param;\n    const code = 'async function fetchReviews(): Promise<any[]> {\\n    try {\\n        const res = await axios.post(\"http://localhost:3000/api/reviews\", {\\n            name: \"youtube-yalear\"\\n        });\\n        return res.data.review_data;\\n    } catch (error) {\\n        console.error(\"Error fetching reviews:\", error);\\n        return []; // Return an empty array or handle the error as needed\\n    }\\n}\\n    ';\n    const highlightedCode = highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__[\"default\"].highlight(code, {\n        language: \"typescript\"\n    }).value;\n    const copylink = ()=>{\n        navigator.clipboard.writeText(code);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classname,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-2 flex justify-between items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-medium text-gray-900 dark:text-white\",\n                        children: \"Card example with CTA button:\"\n                    }, void 0, false, {\n                        fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4\",\n                    style: {\n                        backgroundColor: \"#282C34\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                    dangerouslySetInnerHTML: {\n                                        __html: highlightedCode\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-2 right-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: copylink,\n                                \"data-copy-to-clipboard-target\": \"code-block\",\n                                \"data-copy-to-clipboard-content-type\": \"innerHTML\",\n                                \"data-copy-to-clipboard-html-entities\": \"true\",\n                                className: \"text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        id: \"default-message\",\n                                        className: \"inline-flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-3 h-3 me-1.5\",\n                                                \"aria-hidden\": \"true\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                fill: \"currentColor\",\n                                                viewBox: \"0 0 18 20\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-xs font-semibold\",\n                                                children: \"Copy code\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        id: \"success-message\",\n                                        className: \"hidden inline-flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5\",\n                                                \"aria-hidden\": \"true\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                fill: \"none\",\n                                                viewBox: \"0 0 16 12\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    stroke: \"currentColor\",\n                                                    \"stroke-linecap\": \"round\",\n                                                    \"stroke-linejoin\": \"round\",\n                                                    \"stroke-width\": \"2\",\n                                                    d: \"M1 5.917 5.724 10.5 15 1.5\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-xs font-semibold text-blue-700 dark:text-blue-500\",\n                                                children: \"Copied\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ankit/Desktop/testimonial/app/components/code_snipet.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_c = Integrate;\nvar _c;\n$RefreshReg$(_c, \"Integrate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NvZGVfc25pcGV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDc0I7QUFDTDtBQUUxREEsNkRBQUlBLENBQUNFLGdCQUFnQixDQUFDLGNBQWNELDZFQUFVQTtBQVF2QyxTQUFTRSxVQUFVLEtBQTZCO1FBQTdCLEVBQUVDLFNBQVMsRUFBa0IsR0FBN0I7SUFDdEIsTUFBTUMsT0FBUTtJQVlkLE1BQU1DLGtCQUEwQk4sNkRBQUlBLENBQUNPLFNBQVMsQ0FBQ0YsTUFBTTtRQUFFRyxVQUFVO0lBQWEsR0FBR0MsS0FBSztJQUN0RixNQUFNQyxXQUFXO1FBQ2JDLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDUjtJQUNsQztJQUNBLHFCQUNJLDhEQUFDUztRQUFJQyxXQUFXWDtrQkFDWiw0RUFBQ1U7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDQzt3QkFBRUQsV0FBVTtrQ0FBNEM7Ozs7Ozs7Ozs7OzhCQUU3RCw4REFBQ0Q7b0JBQUlDLFdBQVU7b0JBQXNERSxPQUFPO3dCQUFFQyxpQkFBaUI7b0JBQVU7O3NDQUNyRyw4REFBQ0o7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNJOzBDQUNHLDRFQUFDZDtvQ0FBS2UseUJBQXlCO3dDQUFFQyxRQUFRZjtvQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSWpFLDhEQUFDUTs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ087Z0NBQU9DLFNBQVNiO2dDQUFVYyxpQ0FBOEI7Z0NBQWFDLHVDQUFvQztnQ0FBWUMsd0NBQXFDO2dDQUFPWCxXQUFVOztrREFDeEssOERBQUNZO3dDQUFLQyxJQUFHO3dDQUFrQmIsV0FBVTs7MERBQ2pDLDhEQUFDYztnREFBSWQsV0FBVTtnREFBaUJlLGVBQVk7Z0RBQU9DLE9BQU07Z0RBQTZCQyxNQUFLO2dEQUFlQyxTQUFROzBEQUM5Ryw0RUFBQ0M7b0RBQUtDLEdBQUU7Ozs7Ozs7Ozs7OzBEQUVaLDhEQUFDUjtnREFBS1osV0FBVTswREFBd0I7Ozs7Ozs7Ozs7OztrREFFNUMsOERBQUNZO3dDQUFLQyxJQUFHO3dDQUFrQmIsV0FBVTs7MERBQ2pDLDhEQUFDYztnREFBSWQsV0FBVTtnREFBa0RlLGVBQVk7Z0RBQU9DLE9BQU07Z0RBQTZCQyxNQUFLO2dEQUFPQyxTQUFROzBEQUN2SSw0RUFBQ0M7b0RBQUtFLFFBQU87b0RBQWVDLGtCQUFlO29EQUFRQyxtQkFBZ0I7b0RBQVFDLGdCQUFhO29EQUFJSixHQUFFOzs7Ozs7Ozs7OzswREFFbEcsOERBQUNSO2dEQUFLWixXQUFVOzBEQUF5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN6RztLQW5EZ0JaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2NvZGVfc25pcGV0LnRzeD9iMDhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvY29yZSc7XG5pbXBvcnQgdHlwZXNjcmlwdCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy90eXBlc2NyaXB0JztcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLXJlYXNvbmFibGUuY3NzJztcblxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCd0eXBlc2NyaXB0JywgdHlwZXNjcmlwdCk7XG5cbnR5cGUgSW50ZWdyYXRlUHJvcHMgPSB7XG4gICAgY2xhc3NuYW1lPzogc3RyaW5nO1xufTtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBJbnRlZ3JhdGUoeyBjbGFzc25hbWUgfTogSW50ZWdyYXRlUHJvcHMpIHtcbiAgICBjb25zdCBjb2RlID0gYGFzeW5jIGZ1bmN0aW9uIGZldGNoUmV2aWV3cygpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcmV2aWV3c1wiLCB7XG4gICAgICAgICAgICBuYW1lOiBcInlvdXR1YmUteWFsZWFyXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXMuZGF0YS5yZXZpZXdfZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcmV2aWV3czpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBvciBoYW5kbGUgdGhlIGVycm9yIGFzIG5lZWRlZFxuICAgIH1cbn1cbiAgICBgO1xuICAgIGNvbnN0IGhpZ2hsaWdodGVkQ29kZTogc3RyaW5nID0gaGxqcy5oaWdobGlnaHQoY29kZSwgeyBsYW5ndWFnZTogJ3R5cGVzY3JpcHQnIH0pLnZhbHVlO1xuICAgIGNvbnN0IGNvcHlsaW5rID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2RlKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPkNhcmQgZXhhbXBsZSB3aXRoIENUQSBidXR0b246PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctZ3JheS01MCByb3VuZGVkLWxnIGRhcms6YmctZ3JheS03MDAgcC00XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzI4MkMzNCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaGlnaGxpZ2h0ZWRDb2RlIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlsaW5rfSBkYXRhLWNvcHktdG8tY2xpcGJvYXJkLXRhcmdldD1cImNvZGUtYmxvY2tcIiBkYXRhLWNvcHktdG8tY2xpcGJvYXJkLWNvbnRlbnQtdHlwZT1cImlubmVySFRNTFwiIGRhdGEtY29weS10by1jbGlwYm9hcmQtaHRtbC1lbnRpdGllcz1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTQwMCBtLTAuNSBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgcm91bmRlZC1sZyBweS0yIHB4LTIuNSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctd2hpdGUgYm9yZGVyLWdyYXktMjAwIGJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiZGVmYXVsdC1tZXNzYWdlXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0zIGgtMyBtZS0xLjVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMTggMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYgMWgtMy4yNzhBMS45OTIgMS45OTIgMCAwIDAgMTEgMEg3YTEuOTkzIDEuOTkzIDAgMCAwLTEuNzIyIDFIMmEyIDIgMCAwIDAtMiAydjE1YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMlYzYTIgMiAwIDAgMC0yLTJabS0zIDE0SDVhMSAxIDAgMCAxIDAtMmg4YTEgMSAwIDAgMSAwIDJabTAtNEg1YTEgMSAwIDAgMSAwLTJoOGExIDEgMCAxIDEgMCAyWm0wLTVINWExIDEgMCAwIDEgMC0yaDJWMmg0djJoMmExIDEgMCAxIDEgMCAyWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGRcIj5Db3B5IGNvZGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwic3VjY2Vzcy1tZXNzYWdlXCIgY2xhc3NOYW1lPVwiaGlkZGVuIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1ibHVlLTcwMCBkYXJrOnRleHQtYmx1ZS01MDAgbWUtMS41XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAxNiAxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMSA1LjkxNyA1LjcyNCAxMC41IDE1IDEuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ibHVlLTcwMCBkYXJrOnRleHQtYmx1ZS01MDBcIj5Db3BpZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKTtcbn1cblxuXG4iXSwibmFtZXMiOlsiaGxqcyIsInR5cGVzY3JpcHQiLCJyZWdpc3Rlckxhbmd1YWdlIiwiSW50ZWdyYXRlIiwiY2xhc3NuYW1lIiwiY29kZSIsImhpZ2hsaWdodGVkQ29kZSIsImhpZ2hsaWdodCIsImxhbmd1YWdlIiwidmFsdWUiLCJjb3B5bGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInByZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYnV0dG9uIiwib25DbGljayIsImRhdGEtY29weS10by1jbGlwYm9hcmQtdGFyZ2V0IiwiZGF0YS1jb3B5LXRvLWNsaXBib2FyZC1jb250ZW50LXR5cGUiLCJkYXRhLWNvcHktdG8tY2xpcGJvYXJkLWh0bWwtZW50aXRpZXMiLCJzcGFuIiwiaWQiLCJzdmciLCJhcmlhLWhpZGRlbiIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJwYXRoIiwiZCIsInN0cm9rZSIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwic3Ryb2tlLXdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/code_snipet.tsx\n"));

/***/ })

});