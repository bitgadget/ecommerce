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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/CartContext.tsx":
/*!*************************************!*\
  !*** ./src/context/CartContext.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst CartProvider = ({ children })=>{\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (product)=>{\n        setCart((prev)=>prev.some((item)=>item.id === product.id) ? prev.map((item)=>item.id === product.id ? {\n                    ...item,\n                    quantity: item.quantity + 1\n                } : item) : [\n                ...prev,\n                {\n                    ...product,\n                    quantity: 1\n                }\n            ]);\n    };\n    const removeFromCart = (id)=>{\n        setCart((prev)=>prev.filter((item)=>item.id !== id));\n    };\n    const clearCart = ()=>setCart([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addToCart,\n            removeFromCart,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/workspaces/ecommerce/src/context/CartContext.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCart = ()=>{\n    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!ctx) throw new Error(\"useCart must be used within a CartProvider\");\n    return ctx;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DYXJ0Q29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRTtBQVluRSxNQUFNSSw0QkFBY0gsb0RBQWFBLENBQThCSTtBQUV4RCxNQUFNQyxlQUF3RCxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUNoRixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQWEsRUFBRTtJQUUvQyxNQUFNTyxZQUFZLENBQUNDO1FBQ2pCRixRQUFRRyxDQUFBQSxPQUNOQSxLQUFLQyxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEVBQUUsS0FBS0osUUFBUUksRUFBRSxJQUNwQ0gsS0FBS0ksR0FBRyxDQUFDRixDQUFBQSxPQUNQQSxLQUFLQyxFQUFFLEtBQUtKLFFBQVFJLEVBQUUsR0FBRztvQkFBRSxHQUFHRCxJQUFJO29CQUFFRyxVQUFVSCxLQUFLRyxRQUFRLEdBQUc7Z0JBQUUsSUFBSUgsUUFFdEU7bUJBQUlGO2dCQUFNO29CQUFFLEdBQUdELE9BQU87b0JBQUVNLFVBQVU7Z0JBQUU7YUFBRTtJQUU5QztJQUVBLE1BQU1DLGlCQUFpQixDQUFDSDtRQUN0Qk4sUUFBUUcsQ0FBQUEsT0FBUUEsS0FBS08sTUFBTSxDQUFDTCxDQUFBQSxPQUFRQSxLQUFLQyxFQUFFLEtBQUtBO0lBQ2xEO0lBRUEsTUFBTUssWUFBWSxJQUFNWCxRQUFRLEVBQUU7SUFFbEMscUJBQ0UsOERBQUNMLFlBQVlpQixRQUFRO1FBQUNDLE9BQU87WUFBRWQ7WUFBTUU7WUFBV1E7WUFBZ0JFO1FBQVU7a0JBQ3ZFYjs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU1nQixVQUFVO0lBQ3JCLE1BQU1DLE1BQU10QixpREFBVUEsQ0FBQ0U7SUFDdkIsSUFBSSxDQUFDb0IsS0FBSyxNQUFNLElBQUlDLE1BQU07SUFDMUIsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYml0Y29pbi1lY29tbWVyY2UvLi9zcmMvY29udGV4dC9DYXJ0Q29udGV4dC50c3g/YmVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiQC9kYXRhL3Byb2R1Y3RzXCI7XG5cbnR5cGUgQ2FydEl0ZW0gPSBQcm9kdWN0ICYgeyBxdWFudGl0eTogbnVtYmVyIH07XG5cbmludGVyZmFjZSBDYXJ0Q29udGV4dFR5cGUge1xuICBjYXJ0OiBDYXJ0SXRlbVtdO1xuICBhZGRUb0NhcnQ6IChwcm9kdWN0OiBQcm9kdWN0KSA9PiB2b2lkO1xuICByZW1vdmVGcm9tQ2FydDogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNsZWFyQ2FydDogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENhcnRDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZTxDYXJ0SXRlbVtdPihbXSk7XG5cbiAgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICBzZXRDYXJ0KHByZXYgPT5cbiAgICAgIHByZXYuc29tZShpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpXG4gICAgICAgID8gcHJldi5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCA/IHsgLi4uaXRlbSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH0gOiBpdGVtXG4gICAgICAgICAgKVxuICAgICAgICA6IFsuLi5wcmV2LCB7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiAxIH1dXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0Q2FydChwcmV2ID0+IHByZXYuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiBzZXRDYXJ0KFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjYXJ0LCBhZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0LCBjbGVhckNhcnQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4ge1xuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcbiAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcihcInVzZUNhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENhcnRQcm92aWRlclwiKTtcbiAgcmV0dXJuIGN0eDtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwidW5kZWZpbmVkIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0Iiwic2V0Q2FydCIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJwcmV2Iiwic29tZSIsIml0ZW0iLCJpZCIsIm1hcCIsInF1YW50aXR5IiwicmVtb3ZlRnJvbUNhcnQiLCJmaWx0ZXIiLCJjbGVhckNhcnQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2FydCIsImN0eCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/CartContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-inter\"}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/pages/_app.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"variable\\\":\\\"--font-inter\\\"}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Space_Grotesk_arguments_subsets_latin_variable_font_space_grotesk_weight_400_700_variableName_spaceGrotesk___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"Space_Grotesk\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-space-grotesk\",\"weight\":[\"400\",\"700\"]}],\"variableName\":\"spaceGrotesk\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/pages/_app.tsx\\\",\\\"import\\\":\\\"Space_Grotesk\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"variable\\\":\\\"--font-space-grotesk\\\",\\\"weight\\\":[\\\"400\\\",\\\"700\\\"]}],\\\"variableName\\\":\\\"spaceGrotesk\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Space_Grotesk_arguments_subsets_latin_variable_font_space_grotesk_weight_400_700_variableName_spaceGrotesk___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_tsx_import_Space_Grotesk_arguments_subsets_latin_variable_font_space_grotesk_weight_400_700_variableName_spaceGrotesk___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_swiper_custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/swiper-custom.css */ \"./src/styles/swiper-custom.css\");\n/* harmony import */ var _styles_swiper_custom_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_swiper_custom_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/CartContext */ \"./src/context/CartContext.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// src/pages/_app.tsx\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: `${(next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default().variable)} ${(next_font_google_target_css_path_src_pages_app_tsx_import_Space_Grotesk_arguments_subsets_latin_variable_font_space_grotesk_weight_400_700_variableName_spaceGrotesk___WEBPACK_IMPORTED_MODULE_6___default().variable)}`,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {\n                    position: \"top-right\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/ecommerce/src/pages/_app.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/workspaces/ecommerce/src/pages/_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/ecommerce/src/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/ecommerce/src/pages/_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFxQjs7QUFRZkE7QUFDQUM7QUFSdUI7QUFHTztBQUNpQjtBQUNYO0FBSzFDLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNKLDhEQUFZQTtrQkFDWCw0RUFBQ0s7WUFBS0MsV0FBVyxDQUFDLEVBQUVSLGlMQUFjLENBQUMsQ0FBQyxFQUFFQyx1TkFBcUIsQ0FBQyxDQUFDOzs4QkFDM0QsOERBQUNFLG9EQUFPQTtvQkFBQ08sVUFBUzs7Ozs7OzhCQUNsQiw4REFBQ0w7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFDQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpdGNvaW4tZWNvbW1lcmNlLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3BhZ2VzL19hcHAudHN4XG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgSW50ZXIsIFNwYWNlX0dyb3Rlc2sgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IFwiQC9zdHlsZXMvc3dpcGVyLWN1c3RvbS5jc3NcIjtcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvQ2FydENvbnRleHRcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSwgdmFyaWFibGU6IFwiLS1mb250LWludGVyXCIgfSk7XG5jb25zdCBzcGFjZUdyb3Rlc2sgPSBTcGFjZV9Hcm90ZXNrKHsgc3Vic2V0czogW1wibGF0aW5cIl0sIHZhcmlhYmxlOiBcIi0tZm9udC1zcGFjZS1ncm90ZXNrXCIsIHdlaWdodDogW1wiNDAwXCIsIFwiNzAwXCJdIH0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENhcnRQcm92aWRlcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YCR7aW50ZXIudmFyaWFibGV9ICR7c3BhY2VHcm90ZXNrLnZhcmlhYmxlfWB9PlxuICAgICAgICA8VG9hc3RlciBwb3NpdGlvbj1cInRvcC1yaWdodFwiIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0NhcnRQcm92aWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJpbnRlciIsInNwYWNlR3JvdGVzayIsIkNhcnRQcm92aWRlciIsIlRvYXN0ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1haW4iLCJjbGFzc05hbWUiLCJ2YXJpYWJsZSIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/swiper-custom.css":
/*!**************************************!*\
  !*** ./src/styles/swiper-custom.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();