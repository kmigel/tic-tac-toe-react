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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.module.css */ \"./styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nlet isXTurn = true; // Check whose turn is it - true = X's turn, false = O's turn\nfunction Square(param) {\n    let { value, onSquareClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onSquareClick,\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().square),\n        children: value\n    }, void 0, false, {\n        fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = Square;\nfunction Board() {\n    _s();\n    const [squares, setSquares] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(null));\n    function handleClick(i) {\n        const nextSquares = squares.slice();\n        nextSquares[i] = \"X\";\n        setSquares(nextSquares);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().row),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[0],\n                        onSquareClick: ()=>handleClick(0)\n                    }, void 0, false, {\n                        fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[1],\n                        onSquareClick: ()=>handleClick(1)\n                    }, void 0, false, {\n                        fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[2],\n                        onSquareClick: ()=>handleClick(2)\n                    }, void 0, false, {\n                        fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().row),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[3],\n                        onSquareClick: ()=>handleClick(3)\n                    }, void 0, false, {\n                        fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[4],\n                        onSquareClick: ()=>handleClick(4)\n                    }, void 0, false, {\n                        fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[5],\n                        onSquareClick: ()=>handleClick(5)\n                    }, void 0, false, {\n                        fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().row),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[6],\n                        onSquareClick: ()=>handleClick(6)\n                    }, void 0, false, {\n                        fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[7],\n                        onSquareClick: ()=>handleClick(7)\n                    }, void 0, false, {\n                        fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                        value: squares[8],\n                        onSquareClick: ()=>handleClick(8)\n                    }, void 0, false, {\n                        fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kmigel/Projects/tic-tac-toe-react/pages/index.jsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Board, \"OI2riktW80tVaN//212JxRVLLms=\");\n_c1 = Board;\nvar _c, _c1;\n$RefreshReg$(_c, \"Square\");\n$RefreshReg$(_c1, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1Q7QUFFakMsSUFBSUUsVUFBVSxNQUFNLDZEQUE2RDtBQUVqRixTQUFTQyxPQUFPLEtBQXNCO1FBQXRCLEVBQUNDLEtBQUssRUFBRUMsYUFBYSxFQUFDLEdBQXRCO0lBQ1oscUJBQ0ksOERBQUNDO1FBQU9DLFNBQVNGO1FBQWVHLFdBQVdSLGtFQUFhUztrQkFBR0w7Ozs7OztBQUVuRTtLQUpTRDtBQU1NLFNBQVNPOztJQUNwQixNQUFLLENBQUNDLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUNZLE1BQU0sR0FBR0MsS0FBSztJQUVwRCxTQUFTQyxZQUFZQyxDQUFDO1FBQ2xCLE1BQU1DLGNBQWNOLFFBQVFPO1FBQzVCRCxXQUFXLENBQUNELEVBQUUsR0FBRztRQUNqQkosV0FBV0s7SUFDZjtJQUVBLHFCQUNJLDhEQUFDRTtRQUFJWCxXQUFXUixxRUFBZ0JvQjs7MEJBQzVCLDhEQUFDRDtnQkFBSVgsV0FBV1IsK0RBQVVxQjs7a0NBQ3RCLDhEQUFDbEI7d0JBQU9DLE9BQU9PLE9BQU8sQ0FBQyxFQUFFO3dCQUFFTixlQUFlLElBQU1VLFlBQVk7Ozs7OztrQ0FDNUQsOERBQUNaO3dCQUFPQyxPQUFPTyxPQUFPLENBQUMsRUFBRTt3QkFBRU4sZUFBZSxJQUFNVSxZQUFZOzs7Ozs7a0NBQzVELDhEQUFDWjt3QkFBT0MsT0FBT08sT0FBTyxDQUFDLEVBQUU7d0JBQUVOLGVBQWUsSUFBTVUsWUFBWTs7Ozs7Ozs7Ozs7OzBCQUVoRSw4REFBQ0k7Z0JBQUlYLFdBQVdSLCtEQUFVcUI7O2tDQUN0Qiw4REFBQ2xCO3dCQUFPQyxPQUFPTyxPQUFPLENBQUMsRUFBRTt3QkFBRU4sZUFBZSxJQUFNVSxZQUFZOzs7Ozs7a0NBQzVELDhEQUFDWjt3QkFBT0MsT0FBT08sT0FBTyxDQUFDLEVBQUU7d0JBQUVOLGVBQWUsSUFBTVUsWUFBWTs7Ozs7O2tDQUM1RCw4REFBQ1o7d0JBQU9DLE9BQU9PLE9BQU8sQ0FBQyxFQUFFO3dCQUFFTixlQUFlLElBQU1VLFlBQVk7Ozs7Ozs7Ozs7OzswQkFFaEUsOERBQUNJO2dCQUFJWCxXQUFXUiwrREFBVXFCOztrQ0FDdEIsOERBQUNsQjt3QkFBT0MsT0FBT08sT0FBTyxDQUFDLEVBQUU7d0JBQUVOLGVBQWUsSUFBTVUsWUFBWTs7Ozs7O2tDQUM1RCw4REFBQ1o7d0JBQU9DLE9BQU9PLE9BQU8sQ0FBQyxFQUFFO3dCQUFFTixlQUFlLElBQU1VLFlBQVk7Ozs7OztrQ0FDNUQsOERBQUNaO3dCQUFPQyxPQUFPTyxPQUFPLENBQUMsRUFBRTt3QkFBRU4sZUFBZSxJQUFNVSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUU7R0E1QndCTDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5sZXQgaXNYVHVybiA9IHRydWU7IC8vIENoZWNrIHdob3NlIHR1cm4gaXMgaXQgLSB0cnVlID0gWCdzIHR1cm4sIGZhbHNlID0gTydzIHR1cm5cblxuZnVuY3Rpb24gU3F1YXJlKHt2YWx1ZSwgb25TcXVhcmVDbGlja30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3F1YXJlQ2xpY2t9IGNsYXNzTmFtZT17c3R5bGVzLnNxdWFyZX0+e3ZhbHVlfTwvYnV0dG9uPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKCkge1xuICAgIGNvbnN0W3NxdWFyZXMsIHNldFNxdWFyZXNdID0gdXNlU3RhdGUoQXJyYXkoOSkuZmlsbChudWxsKSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhpKSB7XG4gICAgICAgIGNvbnN0IG5leHRTcXVhcmVzID0gc3F1YXJlcy5zbGljZSgpO1xuICAgICAgICBuZXh0U3F1YXJlc1tpXSA9IFwiWFwiO1xuICAgICAgICBzZXRTcXVhcmVzKG5leHRTcXVhcmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAgPFNxdWFyZSB2YWx1ZT17c3F1YXJlc1swXX0gb25TcXVhcmVDbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMCl9Lz5cbiAgICAgICAgICAgICAgICA8U3F1YXJlIHZhbHVlPXtzcXVhcmVzWzFdfSBvblNxdWFyZUNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygxKX0vPlxuICAgICAgICAgICAgICAgIDxTcXVhcmUgdmFsdWU9e3NxdWFyZXNbMl19IG9uU3F1YXJlQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDIpfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgICAgICAgICA8U3F1YXJlIHZhbHVlPXtzcXVhcmVzWzNdfSBvblNxdWFyZUNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygzKX0vPlxuICAgICAgICAgICAgICAgIDxTcXVhcmUgdmFsdWU9e3NxdWFyZXNbNF19IG9uU3F1YXJlQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDQpfS8+XG4gICAgICAgICAgICAgICAgPFNxdWFyZSB2YWx1ZT17c3F1YXJlc1s1XX0gb25TcXVhcmVDbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soNSl9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgICAgICAgIDxTcXVhcmUgdmFsdWU9e3NxdWFyZXNbNl19IG9uU3F1YXJlQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDYpfS8+XG4gICAgICAgICAgICAgICAgPFNxdWFyZSB2YWx1ZT17c3F1YXJlc1s3XX0gb25TcXVhcmVDbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soNyl9Lz5cbiAgICAgICAgICAgICAgICA8U3F1YXJlIHZhbHVlPXtzcXVhcmVzWzhdfSBvblNxdWFyZUNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayg4KX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwiaXNYVHVybiIsIlNxdWFyZSIsInZhbHVlIiwib25TcXVhcmVDbGljayIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzcXVhcmUiLCJCb2FyZCIsInNxdWFyZXMiLCJzZXRTcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwiaGFuZGxlQ2xpY2siLCJpIiwibmV4dFNxdWFyZXMiLCJzbGljZSIsImRpdiIsImNvbnRhaW5lciIsInJvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});