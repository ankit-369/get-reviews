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

/***/ "(app-pages-browser)/./app/components/review_card.tsx":
/*!****************************************!*\
  !*** ./app/components/review_card.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Review_card: function() { return /* binding */ Review_card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_handle_like__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/handle_like */ \"(app-pages-browser)/./actions/handle_like.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _toster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toster */ \"(app-pages-browser)/./app/components/toster.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Review_card = (param)=>{\n    let { review, classname } = param;\n    _s();\n    const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(review);\n    const [showToast, setShowToast] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [toastMessage, setToastMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handle_like = async (testimoniala_id, heart)=>{\n        // const [heart_color , set_heart_color]=useState()\n        try {\n            const response = await (0,_actions_handle_like__WEBPACK_IMPORTED_MODULE_1__.add_like)(testimoniala_id, heart);\n            // const { id: updatedTestimonialId, heart: updatedHeart } = response;\n            const updatedTestimonialId = response.heart.id;\n            const updatedHeart = response.heart.heart;\n            console.log(updatedHeart + \"      \" + updatedTestimonialId);\n            // if (updatedHeart) {\n            // Update the reviews state with the new heart value for the specific review\n            setReviews(reviews.map((rev)=>rev.id === updatedTestimonialId ? {\n                    ...rev,\n                    heart: updatedHeart\n                } : rev));\n            // }\n            setToastMessage(response.message);\n            setShowToast(true);\n            // Hide the toast after a few seconds\n            setTimeout(()=>{\n                setShowToast(false);\n            }, 3000);\n            console.log(response);\n        // alert(response);\n        } catch (e) {\n            console.log(\"Error updating like status:\", e);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classname,\n        children: [\n            showToast && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_toster__WEBPACK_IMPORTED_MODULE_3__.ToastSuccess, {\n                message: toastMessage,\n                onClose: ()=>setShowToast(false)\n            }, void 0, false, {\n                fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                lineNumber: 65,\n                columnNumber: 39\n            }, undefined),\n            reviews.map((data)=>{\n                var _data_images;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden max-w-4xl mb-4\",\n                    style: {\n                        backgroundColor: \"#33363A\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between items-start mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800\",\n                                        children: \"Text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handle_like(data.id, data.heart),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            viewBox: \"0 0 24 24\",\n                                            width: \"30\",\n                                            height: \"30\",\n                                            // fill=\"#111827\" \n                                            fill: data.heart === \"true\" ? \"#FACC15\" : \"#111827\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center mb-2\",\n                                children: [\n                                    ...Array(5)\n                                ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-5 h-5 \".concat(index < data.star ? \"text-yellow-400\" : \"text-gray-400\"),\n                                        fill: \"currentColor\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        viewBox: \"0 0 20 20\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M9.049 2.927C9.569 1.688 11.431 1.688 11.951 2.927l1.417 3.252c.211.482.66.82 1.188.9l3.584.52c1.32.191 1.84 1.802.888 2.719l-2.593 2.53c-.37.361-.538.88-.452 1.387l.61 3.558c.22 1.28-1.13 2.26-2.287 1.65l-3.207-1.684a1.007 1.007 0 00-.941 0l-3.207 1.684c-1.156.61-2.507-.37-2.287-1.65l.61-3.558c.086-.507-.082-1.026-.452-1.387l-2.593-2.53c-.952-.917-.432-2.528.888-2.719l3.584-.52c.528-.08.977-.418 1.188-.9l1.417-3.252z\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 33\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white mb-4\",\n                                children: data.review\n                            }, void 0, false, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-4\",\n                                children: (_data_images = data.images) === null || _data_images === void 0 ? void 0 : _data_images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-20 h-20 object-cover rounded-lg mr-4\",\n                                        src: image,\n                                        alt: \"review-\".concat(index)\n                                    }, index, false, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 33\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-10 h-10 rounded-full mr-2 object-cover\",\n                                        src: data.photo ? data.photo : \"/user/default.png\",\n                                        alt: \"user\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                className: \"text-white text-sm font-semibold\",\n                                                children: data.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-400 text-xs\",\n                                                children: \"Name\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-400 text-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: data.email\n                                    }, void 0, false, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-400 text-sm mt-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Submitted At\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: new Date(Number(data.createdAt) * 1000).toLocaleString()\n                                    }, void 0, false, {\n                                        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, undefined)\n                }, data.id, false, {\n                    fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ankit/Desktop/testimonial/app/components/review_card.tsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Review_card, \"PgMC+9BmB9dbelYohjMF3Nhbm5s=\");\n_c = Review_card;\nvar _c;\n$RefreshReg$(_c, \"Review_card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Jldmlld19jYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpRDtBQUVoQjtBQUNPO0FBaUJqQyxNQUFNRyxjQUF5QztRQUFDLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFOztJQUN4RSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQVdHO0lBQ2pELE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNVyxjQUFjLE9BQU9DLGlCQUF5QkM7UUFFaEQsbURBQW1EO1FBQ25ELElBQUk7WUFFQSxNQUFNQyxXQUFXLE1BQU1mLDhEQUFRQSxDQUFDYSxpQkFBaUJDO1lBRWpELHNFQUFzRTtZQUN0RSxNQUFNRSx1QkFBdUJELFNBQVNELEtBQUssQ0FBQ0csRUFBRTtZQUM5QyxNQUFNQyxlQUFlSCxTQUFTRCxLQUFLLENBQUNBLEtBQUs7WUFDekNLLFFBQVFDLEdBQUcsQ0FBQ0YsZUFBZSxXQUFXRjtZQUV0QyxzQkFBc0I7WUFDdEIsNEVBQTRFO1lBQzVFVCxXQUFXRCxRQUFRZSxHQUFHLENBQUMsQ0FBQ0MsTUFDcEJBLElBQUlMLEVBQUUsS0FBS0QsdUJBQXVCO29CQUFFLEdBQUdNLEdBQUc7b0JBQUVSLE9BQU9JO2dCQUFhLElBQUlJO1lBRXhFLElBQUk7WUFDSlgsZ0JBQWdCSSxTQUFTUSxPQUFPO1lBQ2hDZCxhQUFhO1lBRWIscUNBQXFDO1lBQ3JDZSxXQUFXO2dCQUNQZixhQUFhO1lBQ2pCLEdBQUc7WUFFSFUsUUFBUUMsR0FBRyxDQUFDTDtRQUNaLG1CQUFtQjtRQUN2QixFQUFFLE9BQU9VLEdBQUc7WUFDUk4sUUFBUUMsR0FBRyxDQUFDLCtCQUErQks7UUFFL0M7SUFFSjtJQUdBLHFCQUVJLDhEQUFDQztRQUFJQyxXQUFXdEI7O1lBQ0NHLDJCQUFhLDhEQUFDTixpREFBWUE7Z0JBQUNxQixTQUFTYjtnQkFBY2tCLFNBQVMsSUFBTW5CLGFBQWE7Ozs7OztZQUUxRkgsUUFBUWUsR0FBRyxDQUFDLENBQUNRO29CQTRCR0E7cUNBM0JiLDhEQUFDSDtvQkFBa0JDLFdBQVU7b0JBQTJFRyxPQUFPO3dCQUFFQyxpQkFBaUI7b0JBQVU7OEJBQ3hJLDRFQUFDTDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0s7d0NBQUtMLFdBQVU7a0RBQWtHOzs7Ozs7a0RBQ2xILDhEQUFDTTt3Q0FBT0MsU0FBUyxJQUFNdEIsWUFBWWlCLEtBQUtaLEVBQUUsRUFBRVksS0FBS2YsS0FBSztrREFFbEQsNEVBQUNxQjs0Q0FDR0MsT0FBTTs0Q0FDTkMsU0FBUTs0Q0FDUkMsT0FBTTs0Q0FDTkMsUUFBTzs0Q0FDUCxrQkFBa0I7NENBQ2xCQyxNQUFNWCxLQUFLZixLQUFLLEtBQUssU0FBUyxZQUFZO3NEQUUxQyw0RUFBQzJCO2dEQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlwQiw4REFBQ2hCO2dDQUFJQyxXQUFVOzBDQUNWO3VDQUFJZ0IsTUFBTTtpQ0FBRyxDQUFDdEIsR0FBRyxDQUFDLENBQUN1QixHQUFHQyxzQkFDbkIsOERBQUNWO3dDQUFnQlIsV0FBVyxXQUFtRSxPQUF4RGtCLFFBQVFoQixLQUFLaUIsSUFBSSxHQUFHLG9CQUFvQjt3Q0FBbUJOLE1BQUs7d0NBQWVKLE9BQU07d0NBQTZCQyxTQUFRO2tEQUM3Siw0RUFBQ0k7NENBQUtDLEdBQUU7Ozs7Ozt1Q0FERkc7Ozs7Ozs7Ozs7MENBS2xCLDhEQUFDRTtnQ0FBRXBCLFdBQVU7MENBQW1CRSxLQUFLekIsTUFBTTs7Ozs7OzBDQUMzQyw4REFBQ3NCO2dDQUFJQyxXQUFVOzJDQUNWRSxlQUFBQSxLQUFLbUIsTUFBTSxjQUFYbkIsbUNBQUFBLGFBQWFSLEdBQUcsQ0FBQyxDQUFDNEIsT0FBT0osc0JBQ3RCLDhEQUFDSzt3Q0FBZ0J2QixXQUFVO3dDQUF5Q3dCLEtBQUtGO3dDQUFPRyxLQUFLLFVBQWdCLE9BQU5QO3VDQUFyRkE7Ozs7Ozs7Ozs7MENBR2xCLDhEQUFDbkI7Z0NBQUlDLFdBQVU7O2tEQUVYLDhEQUFDdUI7d0NBQUl2QixXQUFVO3dDQUEyQ3dCLEtBQUt0QixLQUFLd0IsS0FBSyxHQUFHeEIsS0FBS3dCLEtBQUssR0FBRzt3Q0FBcUJELEtBQUk7Ozs7OztrREFDbEgsOERBQUMxQjs7MERBQ0csOERBQUM0QjtnREFBRzNCLFdBQVU7MERBQW9DRSxLQUFLMEIsSUFBSTs7Ozs7OzBEQUMzRCw4REFBQ1I7Z0RBQUVwQixXQUFVOzBEQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUc3Qyw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDb0I7a0RBQUU7Ozs7OztrREFDSCw4REFBQ0E7a0RBQUdsQixLQUFLMkIsS0FBSzs7Ozs7Ozs7Ozs7OzBDQUVsQiw4REFBQzlCO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ29CO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNBO2tEQUFHLElBQUlVLEtBQUtDLE9BQU83QixLQUFLOEIsU0FBUyxJQUFJLE1BQU1DLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkE3QzVEL0IsS0FBS1osRUFBRTs7Ozs7Ozs7Ozs7O0FBb0RqQyxFQUFDO0dBbkdZZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9yZXZpZXdfY2FyZC50c3g/MWI1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRfbGlrZSB9IGZyb20gXCJAL2FjdGlvbnMvaGFuZGxlX2xpa2VcIjtcbmltcG9ydCB7IFJldmlldyB9IGZyb20gXCJAL2FjdGlvbnMvdGVzdGltb25pYWxhXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG9hc3RTdWNjZXNzIH0gZnJvbSBcIi4vdG9zdGVyXCI7XG5cbmludGVyZmFjZSBSZXZpZXdDYXJkUHJvcHMge1xuICAgIHJldmlldzogUmV2aWV3W107XG4gICAgY2xhc3NuYW1lOiBzdHJpbmdcbn1cbmludGVyZmFjZSBBZGRMaWtlUmVzcG9uc2Uge1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBlcnJvcj86IGFueS8vIEVuc3VyZSB0aGlzIG1hdGNoZXMgdGhlIGV4cGVjdGVkIHJlc3BvbnNlIHN0cnVjdHVyZVxuICAgIGhlYXJ0OiB7XG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgIGhlYXJ0OiBzdHJpbmc7XG4gICAgfTtcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBSZXZpZXdfY2FyZDogUmVhY3QuRkM8UmV2aWV3Q2FyZFByb3BzPiA9ICh7IHJldmlldywgY2xhc3NuYW1lIH0pID0+IHtcbiAgICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZTxSZXZpZXdbXT4ocmV2aWV3KTtcbiAgICBjb25zdCBbc2hvd1RvYXN0LCBzZXRTaG93VG9hc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0b2FzdE1lc3NhZ2UsIHNldFRvYXN0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBoYW5kbGVfbGlrZSA9IGFzeW5jICh0ZXN0aW1vbmlhbGFfaWQ6IG51bWJlciwgaGVhcnQ6IHN0cmluZykgPT4ge1xuXG4gICAgICAgIC8vIGNvbnN0IFtoZWFydF9jb2xvciAsIHNldF9oZWFydF9jb2xvcl09dXNlU3RhdGUoKVxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFkZF9saWtlKHRlc3RpbW9uaWFsYV9pZCwgaGVhcnQpIGFzIEFkZExpa2VSZXNwb25zZTtcblxuICAgICAgICAgICAgLy8gY29uc3QgeyBpZDogdXBkYXRlZFRlc3RpbW9uaWFsSWQsIGhlYXJ0OiB1cGRhdGVkSGVhcnQgfSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFRlc3RpbW9uaWFsSWQgPSByZXNwb25zZS5oZWFydC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRIZWFydCA9IHJlc3BvbnNlLmhlYXJ0LmhlYXJ0O1xuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlZEhlYXJ0ICsgXCIgICAgICBcIiArIHVwZGF0ZWRUZXN0aW1vbmlhbElkKTtcblxuICAgICAgICAgICAgLy8gaWYgKHVwZGF0ZWRIZWFydCkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSByZXZpZXdzIHN0YXRlIHdpdGggdGhlIG5ldyBoZWFydCB2YWx1ZSBmb3IgdGhlIHNwZWNpZmljIHJldmlld1xuICAgICAgICAgICAgc2V0UmV2aWV3cyhyZXZpZXdzLm1hcCgocmV2KSA9PlxuICAgICAgICAgICAgICAgIHJldi5pZCA9PT0gdXBkYXRlZFRlc3RpbW9uaWFsSWQgPyB7IC4uLnJldiwgaGVhcnQ6IHVwZGF0ZWRIZWFydCB9IDogcmV2XG4gICAgICAgICAgICApKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHNldFRvYXN0TWVzc2FnZShyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIHNldFNob3dUb2FzdCh0cnVlKTtcbiAgICBcbiAgICAgICAgICAgIC8vIEhpZGUgdGhlIHRvYXN0IGFmdGVyIGEgZmV3IHNlY29uZHNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNob3dUb2FzdChmYWxzZSk7XG4gICAgICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgLy8gYWxlcnQocmVzcG9uc2UpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHVwZGF0aW5nIGxpa2Ugc3RhdHVzOlwiLCBlKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1RvYXN0ICYmIDxUb2FzdFN1Y2Nlc3MgbWVzc2FnZT17dG9hc3RNZXNzYWdlfSBvbkNsb3NlPXsoKSA9PiBzZXRTaG93VG9hc3QoZmFsc2UpfSAvPn1cblxuICAgICAgICAgICAge3Jldmlld3MubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEuaWR9IGNsYXNzTmFtZT1cIiBteC1hdXRvIGJnLWdyYXktODAwIHJvdW5kZWQteGwgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBtYXgtdy00eGwgbWItNFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMzMzM2M0EnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0wLjUgcm91bmRlZC1mdWxsIHRleHQtc20gZm9udC1tZWRpdW0gYmctYmx1ZS0xMDAgdGV4dC1ibHVlLTgwMFwiPlRleHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVfbGlrZShkYXRhLmlkLCBkYXRhLmhlYXJ0KX0gPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbGw9XCIjMTExODI3XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXtkYXRhLmhlYXJ0ID09PSBcInRydWVcIiA/IFwiI0ZBQ0MxNVwiIDogXCIjMTExODI3XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheSg1KV0ubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGtleT17aW5kZXh9IGNsYXNzTmFtZT17YHctNSBoLTUgJHtpbmRleCA8IGRhdGEuc3RhciA/ICd0ZXh0LXllbGxvdy00MDAnIDogJ3RleHQtZ3JheS00MDAnfWB9IGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LjA0OSAyLjkyN0M5LjU2OSAxLjY4OCAxMS40MzEgMS42ODggMTEuOTUxIDIuOTI3bDEuNDE3IDMuMjUyYy4yMTEuNDgyLjY2LjgyIDEuMTg4LjlsMy41ODQuNTJjMS4zMi4xOTEgMS44NCAxLjgwMi44ODggMi43MTlsLTIuNTkzIDIuNTNjLS4zNy4zNjEtLjUzOC44OC0uNDUyIDEuMzg3bC42MSAzLjU1OGMuMjIgMS4yOC0xLjEzIDIuMjYtMi4yODcgMS42NWwtMy4yMDctMS42ODRhMS4wMDcgMS4wMDcgMCAwMC0uOTQxIDBsLTMuMjA3IDEuNjg0Yy0xLjE1Ni42MS0yLjUwNy0uMzctMi4yODctMS42NWwuNjEtMy41NThjLjA4Ni0uNTA3LS4wODItMS4wMjYtLjQ1Mi0xLjM4N2wtMi41OTMtMi41M2MtLjk1Mi0uOTE3LS40MzItMi41MjguODg4LTIuNzE5bDMuNTg0LS41MmMuNTI4LS4wOC45NzctLjQxOCAxLjE4OC0uOWwxLjQxNy0zLjI1MnpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi00XCI+e2RhdGEucmV2aWV3fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuaW1hZ2VzPy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInctMjAgaC0yMCBvYmplY3QtY292ZXIgcm91bmRlZC1sZyBtci00XCIgc3JjPXtpbWFnZX0gYWx0PXtgcmV2aWV3LSR7aW5kZXh9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi0yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbXItMiBvYmplY3QtY292ZXJcIiBzcmM9e2RhdGEucGhvdG8gPyBkYXRhLnBob3RvIDogJy91c2VyL2RlZmF1bHQucG5nJ30gYWx0PVwidXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+e2RhdGEubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQteHNcIj5OYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtc20gbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN1Ym1pdHRlZCBBdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bmV3IERhdGUoTnVtYmVyKGRhdGEuY3JlYXRlZEF0KSAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiYWRkX2xpa2UiLCJ1c2VTdGF0ZSIsIlRvYXN0U3VjY2VzcyIsIlJldmlld19jYXJkIiwicmV2aWV3IiwiY2xhc3NuYW1lIiwicmV2aWV3cyIsInNldFJldmlld3MiLCJzaG93VG9hc3QiLCJzZXRTaG93VG9hc3QiLCJ0b2FzdE1lc3NhZ2UiLCJzZXRUb2FzdE1lc3NhZ2UiLCJoYW5kbGVfbGlrZSIsInRlc3RpbW9uaWFsYV9pZCIsImhlYXJ0IiwicmVzcG9uc2UiLCJ1cGRhdGVkVGVzdGltb25pYWxJZCIsImlkIiwidXBkYXRlZEhlYXJ0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInJldiIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwiZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xvc2UiLCJkYXRhIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsInBhdGgiLCJkIiwiQXJyYXkiLCJfIiwiaW5kZXgiLCJzdGFyIiwicCIsImltYWdlcyIsImltYWdlIiwiaW1nIiwic3JjIiwiYWx0IiwicGhvdG8iLCJoNSIsIm5hbWUiLCJlbWFpbCIsIkRhdGUiLCJOdW1iZXIiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/review_card.tsx\n"));

/***/ })

});