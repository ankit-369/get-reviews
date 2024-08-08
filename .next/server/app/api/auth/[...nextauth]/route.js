"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fankit%2FDesktop%2Ftestimonial%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fankit%2FDesktop%2Ftestimonial&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fankit%2FDesktop%2Ftestimonial%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fankit%2FDesktop%2Ftestimonial&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_ankit_Desktop_testimonial_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/ankit/Desktop/testimonial/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_ankit_Desktop_testimonial_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGYW5raXQlMkZEZXNrdG9wJTJGdGVzdGltb25pYWwlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZhbmtpdCUyRkRlc2t0b3AlMkZ0ZXN0aW1vbmlhbCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDbUI7QUFDaEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0aW1vbmlhbC8/ZWUwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9hbmtpdC9EZXNrdG9wL3Rlc3RpbW9uaWFsL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL2Fua2l0L0Rlc2t0b3AvdGVzdGltb25pYWwvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fankit%2FDesktop%2Ftestimonial%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fankit%2FDesktop%2Ftestimonial&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _app_lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/auth */ \"(rsc)/./app/lib/auth.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(_app_lib_auth__WEBPACK_IMPORTED_MODULE_0__.Next_Auth);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNYO0FBSWhDLE1BQU1FLFVBQVVELGdEQUFRQSxDQUFDRCxvREFBU0E7QUFFUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RpbW9uaWFsLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0X0F1dGggfSBmcm9tIFwiQC9hcHAvbGliL2F1dGhcIjtcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoTmV4dF9BdXRoKVxuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH0iXSwibmFtZXMiOlsiTmV4dF9BdXRoIiwiTmV4dEF1dGgiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/auth.ts":
/*!*************************!*\
  !*** ./app/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Next_Auth: () => (/* binding */ Next_Auth)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nconst Next_Auth = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                useremail: {\n                    label: \"email\",\n                    type: \"text\",\n                    placeholder: \"xyz@gmail.com\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\",\n                    placeholder: \"Enter password\"\n                }\n            },\n            async authorize (credentials) {\n                const email = credentials.useremail;\n                const password = credentials.password;\n                if (!email || !password) {\n                    throw Error(\"enter all Credentials\");\n                }\n                console.log(email);\n                const user = await prisma.user.findUnique({\n                    where: {\n                        email\n                    }\n                });\n                console.log(\"\\n\\n console of user in auth.ts\" + JSON.stringify(user));\n                if (user && user.password) {\n                    console.log(\"\\n\\nthis is suer \" + password);\n                    console.log(\"\\nthis is hashpasss \" + user.password);\n                    const isvaild = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(password, user.password);\n                    if (!isvaild) {\n                        throw new Error(\"wrong Credentials\");\n                    }\n                    return {\n                        id: user.id.toString(),\n                        email,\n                        name: user.name || undefined,\n                        image: user.image\n                    };\n                } else {\n                    try {\n                        const currentTime = Math.floor(Date.now() / 1000);\n                        const hashedpassword = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().hash(password, 10);\n                        const newuser = await prisma.user.create({\n                            data: {\n                                email,\n                                password: hashedpassword,\n                                createdAt: currentTime\n                            }\n                        });\n                        return {\n                            id: newuser.id.toString(),\n                            email,\n                            name: newuser.name || undefined,\n                            image: newuser.image\n                        };\n                    } catch (e) {\n                        console.log(e);\n                        throw new Error(\"Error creating user\");\n                    }\n                }\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async signIn ({ user, account }) {\n            try {\n                const currentTime = Math.floor(Date.now() / 1000);\n                if (account?.provider === \"google\" && user?.email) {\n                    const existingUser = await prisma.user.findUnique({\n                        where: {\n                            email: user.email\n                        }\n                    });\n                    console.log(\"\\n\\ninside signin \" + JSON.stringify(user));\n                    if (!existingUser) {\n                        await prisma.user.create({\n                            data: {\n                                email: user.email,\n                                name: user.name ?? null,\n                                image: user.image ?? null,\n                                createdAt: currentTime\n                            }\n                        });\n                    }\n                }\n            } catch (error) {\n                console.error(\"Error processing Google sign-in:\", error);\n            }\n            return true;\n        },\n        async session ({ session, token, user }) {\n            // Send properties to the client, like an access_token and user id from a provider.\n            // console.log(\"\\n\\n this is from auth.ts token \"+ JSON.stringify(token));\n            // console.log(\"\\n\\n\\n this is from auth.ts session \"+ JSON.stringify(session));\n            if (session) {\n                const existingUser = await prisma.user.findUnique({\n                    where: {\n                        email: token.email\n                    }\n                });\n                session.user.id = existingUser?.id;\n                token.id = existingUser?.id;\n            }\n            return session;\n        }\n    }\n};\nprocess.on(\"exit\", async ()=>{\n    await prisma.$disconnect();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUUMsR0FBRyxDQUFDLHVCQUF1QkksS0FBS0MsU0FBUyxDQUFDSjtvQkFDMUMsSUFBSSxDQUFDbUMsY0FBYzt3QkFDakIsTUFBTWxELE9BQU9lLElBQUksQ0FBQ21CLE1BQU0sQ0FBQzs0QkFDdkJDLE1BQU07Z0NBQ0p4QixPQUFPSSxLQUFLSixLQUFLO2dDQUNqQlIsTUFBTVksS0FBS1osSUFBSSxJQUFJO2dDQUNuQnNCLE9BQU9WLEtBQUtVLEtBQUssSUFBSTtnQ0FDckJXLFdBQVVWOzRCQUdaO3dCQUNGO29CQUNGO2dCQUNGO1lBQ0YsRUFBQyxPQUFNeUIsT0FBTTtnQkFDWHRDLFFBQVFzQyxLQUFLLENBQUMsb0NBQW9DQTtZQUNwRDtZQUNFLE9BQU87UUFDVDtRQUNGLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFQyxLQUFLLEVBQUV0QyxJQUFJLEVBQVE7WUFFMUMsbUZBQW1GO1lBQ25GLDBFQUEwRTtZQUMxRSxnRkFBZ0Y7WUFFOUUsSUFBR3FDLFNBQVE7Z0JBQ1QsTUFBTUYsZUFBZSxNQUFNbEQsT0FBT2UsSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ2hEQyxPQUFPO3dCQUFFTixPQUFPMEMsTUFBTTFDLEtBQUs7b0JBQUM7Z0JBQzlCO2dCQUNFeUMsUUFBUXJDLElBQUksQ0FBQ08sRUFBRSxHQUFHNEIsY0FBYzVCO2dCQUNoQytCLE1BQU0vQixFQUFFLEdBQUc0QixjQUFjNUI7WUFFN0I7WUFDRixPQUFPOEI7UUFDVDtJQUVGO0FBR04sRUFBQztBQUVEYixRQUFRZSxFQUFFLENBQUMsUUFBUTtJQUNqQixNQUFNdEQsT0FBT3VELFdBQVc7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0aW1vbmlhbC8uL2FwcC9saWIvYXV0aC50cz82YmZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBjb25zdCBOZXh0X0F1dGggPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgICAgIHVzZXJlbWFpbDogeyBsYWJlbDogJ2VtYWlsJywgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjogJ3h5ekBnbWFpbC5jb20nIH0sXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAncGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnLCBwbGFjZWhvbGRlcjogJ0VudGVyIHBhc3N3b3JkJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczogYW55KSB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gY3JlZGVudGlhbHMudXNlcmVtYWlsO1xuICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNyZWRlbnRpYWxzLnBhc3N3b3JkO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYoIWVtYWlsIHx8ICFwYXNzd29yZCl7XG4gICAgICAgICAgICAgICAgdGhyb3cgIEVycm9yIChcImVudGVyIGFsbCBDcmVkZW50aWFsc1wiKTtcblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZW1haWwpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOntlbWFpbH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXG5cXG4gY29uc29sZSBvZiB1c2VyIGluIGF1dGgudHNcIiArIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICAgICAgICAgICAgaWYodXNlciAmJiB1c2VyLnBhc3N3b3JkKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcblxcbnRoaXMgaXMgc3VlciBcIiArIHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcbnRoaXMgaXMgaGFzaHBhc3NzIFwiICsgdXNlci5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgaXN2YWlsZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBpZighaXN2YWlsZCl7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKFwid3JvbmcgQ3JlZGVudGlhbHNcIik7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuICB7IFxuICAgICAgICAgICAgICAgICAgaWQgOiB1c2VyLmlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgIG5hbWUgOiB1c2VyLm5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgaW1hZ2U6dXNlci5pbWFnZVxuICAgICAgICAgICAgICAgIH0gOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfWVsc2V7ICBcbiAgICAgICAgICAgICAgICB0cnl7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgY29uc3QgaGFzaGVkcGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCAsIDEwKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3VzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBoYXNoZWRwYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OmN1cnJlbnRUaW1lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZCA6IG5ld3VzZXIuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lIDogbmV3dXNlci5uYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZTpuZXd1c2VyLmltYWdlICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWNhdGNoKGUpe1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBjcmVhdGluZyB1c2VyXCIpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuXG5cbiAgICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCB8fCBcIlwiLFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCB8fCBcIlwiXG4gICAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICBhc3luYyBzaWduSW4oeyB1c2VyLCBhY2NvdW50IH0gOiBhbnkpIHtcbiAgICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuXG4gICAgICAgICAgICBpZiAoYWNjb3VudD8ucHJvdmlkZXIgPT09IFwiZ29vZ2xlXCIgJiYgdXNlcj8uZW1haWwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgZW1haWw6IHVzZXIuZW1haWwgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgY29uc29sZS5sb2coXCJcXG5cXG5pbnNpZGUgc2lnbmluIFwiICsgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUgPz8gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHVzZXIuaW1hZ2UgPz8gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OmN1cnJlbnRUaW1lXG4gICAgICAgICAgICAgICAgICAgIC8vIGdvb2dsZUlkOiB1c2VyLmlkLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSAnaWQnIGZpZWxkIGhlcmUgYXMgaXQncyB0eXBpY2FsbHkgYXV0by1nZW5lcmF0ZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwcm9jZXNzaW5nIEdvb2dsZSBzaWduLWluOlwiLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gLHVzZXIgfSA6IGFueSkge1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50LCBsaWtlIGFuIGFjY2Vzc190b2tlbiBhbmQgdXNlciBpZCBmcm9tIGEgcHJvdmlkZXIuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJcXG5cXG4gdGhpcyBpcyBmcm9tIGF1dGgudHMgdG9rZW4gXCIrIEpTT04uc3RyaW5naWZ5KHRva2VuKSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJcXG5cXG5cXG4gdGhpcyBpcyBmcm9tIGF1dGgudHMgc2Vzc2lvbiBcIisgSlNPTi5zdHJpbmdpZnkoc2Vzc2lvbikpO1xuXG4gICAgICAgICAgICBpZihzZXNzaW9uKXtcbiAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgZW1haWw6IHRva2VuLmVtYWlsIH0gXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5pZCA9IGV4aXN0aW5nVXNlcj8uaWQ7XG4gICAgICAgICAgICAgICAgdG9rZW4uaWQgPSBleGlzdGluZ1VzZXI/LmlkO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgICAgIH0sXG4gICAgIFxuICAgICAgfVxuXG4gICBcbn1cblxucHJvY2Vzcy5vbignZXhpdCcsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG59KTsiXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiUHJpc21hQ2xpZW50IiwiYmNyeXB0IiwicHJpc21hIiwiTmV4dF9BdXRoIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwidXNlcmVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImVtYWlsIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc3ZhaWxkIiwiY29tcGFyZSIsImlkIiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJpbWFnZSIsImN1cnJlbnRUaW1lIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImhhc2hlZHBhc3N3b3JkIiwiaGFzaCIsIm5ld3VzZXIiLCJjcmVhdGUiLCJkYXRhIiwiY3JlYXRlZEF0IiwiZSIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNpZ25JbiIsImFjY291bnQiLCJwcm92aWRlciIsImV4aXN0aW5nVXNlciIsImVycm9yIiwic2Vzc2lvbiIsInRva2VuIiwib24iLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fankit%2FDesktop%2Ftestimonial%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fankit%2FDesktop%2Ftestimonial&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();