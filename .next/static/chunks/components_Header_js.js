/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Header_js"],{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sanjeev_uni_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sanjeev_uni_website_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ \"./components/index.js\");\n/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contents */ \"./contents/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/sanjeev/uni-website/components/Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_sanjeev_uni_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar navs = _contents__WEBPACK_IMPORTED_MODULE_6__.header.navs;\nvar MOBILE_WIDTH = 768;\nvar NavStyle = {\n  transition: 'background-color 300ms ease',\n  willChange: 'backround-color'\n};\n\nvar Header = function Header(_ref) {\n  _s();\n\n  var _ref$bgColor = _ref.bgColor,\n      bgColor = _ref$bgColor === void 0 ? 'black' : _ref$bgColor,\n      _ref$showHeaderAction = _ref.showHeaderActions,\n      showHeaderActions = _ref$showHeaderAction === void 0 ? true : _ref$showHeaderAction;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      addBgColor = _useState[0],\n      setAddBgColor = _useState[1];\n\n  function handleScroll() {\n    var _window = window,\n        scrollY = _window.scrollY,\n        innerHeight = _window.innerHeight;\n\n    if (scrollY > innerHeight * 1.5) {\n      setAddBgColor(true);\n    } else {\n      setAddBgColor(false);\n    }\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (window && window.innerWidth < MOBILE_WIDTH) {\n      window.removeEventListener('scroll', handleScroll);\n    } else {\n      if (showHeaderActions) {\n        window.addEventListener('scroll', handleScroll);\n      }\n    }\n\n    return function () {\n      window.removeEventListener('scroll', handleScroll);\n    };\n  }, [showHeaderActions]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n    as: \"header\",\n    position: \"fixed\",\n    width: \"100%\",\n    justifyContent: \"center\",\n    backgroundColor: bgColor,\n    minH: \"80px\",\n    zIndex: \"15\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n      w: \"100%\",\n      maxW: \"1330px\",\n      padding: ['0 32px', '0 32px', '0 45px'],\n      alignItems: \"center\",\n      justifyContent: \"space-between\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"/\",\n        passHref: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n          width: ['85px', '85px', '85px', '85px', '110px'],\n          style: {\n            cursor: 'pointer'\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_5__.Logo, {\n            isLight: bgColor !== 'white'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), showHeaderActions ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: navs.map(function (_ref2) {\n          var type = _ref2.type,\n              label = _ref2.label,\n              href = _ref2.href,\n              props = (0,_Users_sanjeev_uni_website_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref2, [\"type\", \"label\", \"href\"]);\n\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, _objectSpread(_objectSpread({\n            as: type === 'link' ? 'a' : 'button',\n            borderRadius: \"6px\",\n            backgroundColor: ['#00c9b6', '#00c9b6', \"\".concat(addBgColor ? 'rgb(0, 220, 200)' : '#ffffff')],\n            color: ['#fff', '#fff', '#000'],\n            fontWeight: \"500\",\n            fontSize: ['15px', '15px', '17px'],\n            height: ['40px', '40px', '54px'],\n            width: ['120px', '120px', '160px'],\n            lineHeight: \"1.4\",\n            _hover: {\n              fontWeight: 500\n            },\n            href: href,\n            style: NavStyle\n          }, props), {}, {\n            children: label\n          }), label, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"zOjmJqMSM7tDv/i9p/OOyHm8VOc=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJuYXZzIiwiaGVhZGVyIiwiTU9CSUxFX1dJRFRIIiwiTmF2U3R5bGUiLCJ0cmFuc2l0aW9uIiwid2lsbENoYW5nZSIsIkhlYWRlciIsImJnQ29sb3IiLCJzaG93SGVhZGVyQWN0aW9ucyIsInVzZVN0YXRlIiwiYWRkQmdDb2xvciIsInNldEFkZEJnQ29sb3IiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJ1c2VFZmZlY3QiLCJpbm5lcldpZHRoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJzb3IiLCJtYXAiLCJ0eXBlIiwibGFiZWwiLCJocmVmIiwicHJvcHMiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7SUFFUUEsSSxHQUFTQyxrRDtBQUNqQixJQUFNQyxZQUFZLEdBQUcsR0FBckI7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsWUFBVSxFQUFFLDZCQURHO0FBRWZDLFlBQVUsRUFBRTtBQUZHLENBQWpCOztBQUtBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXFEO0FBQUE7O0FBQUEsMEJBQWxEQyxPQUFrRDtBQUFBLE1BQWxEQSxPQUFrRCw2QkFBeEMsT0FBd0M7QUFBQSxtQ0FBL0JDLGlCQUErQjtBQUFBLE1BQS9CQSxpQkFBK0Isc0NBQVgsSUFBVzs7QUFBQSxrQkFDOUJDLCtDQUFRLENBQUMsS0FBRCxDQURzQjtBQUFBLE1BQzNEQyxVQUQyRDtBQUFBLE1BQy9DQyxhQUQrQzs7QUFHbEUsV0FBU0MsWUFBVCxHQUF3QjtBQUFBLGtCQUNXQyxNQURYO0FBQUEsUUFDZEMsT0FEYyxXQUNkQSxPQURjO0FBQUEsUUFDTEMsV0FESyxXQUNMQSxXQURLOztBQUd0QixRQUFJ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QWxCTjtBQUFBLHNCQW9CR0Y7QUFwQkgsY0FDT0EsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURILHVCQURnQixHQTJCZCxJQTNDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5REQsQ0FwRkQ7O0dBQU1qQixNOztLQUFBQSxNO0FBc0ZOLCtEQUFlQSxNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGbGV4LCBCdXR0b24sIEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IExvZ28gfSBmcm9tICdjb21wb25lbnRzJ1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSAnLi4vY29udGVudHMnXG5cbmNvbnN0IHsgbmF2cyB9ID0gaGVhZGVyXG5jb25zdCBNT0JJTEVfV0lEVEggPSA3NjhcblxuY29uc3QgTmF2U3R5bGUgPSB7XG4gIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2UnLFxuICB3aWxsQ2hhbmdlOiAnYmFja3JvdW5kLWNvbG9yJyxcbn1cblxuY29uc3QgSGVhZGVyID0gKHsgYmdDb2xvciA9ICdibGFjaycsIHNob3dIZWFkZXJBY3Rpb25zID0gdHJ1ZSB9KSA9PiB7XG4gIGNvbnN0IFthZGRCZ0NvbG9yLCBzZXRBZGRCZ0NvbG9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcbiAgICBjb25zdCB7IHNjcm9sbFksIGlubmVySGVpZ2h0IH0gPSB3aW5kb3dcblxuICAgIGlmIChzY3JvbGxZID4gaW5uZXJIZWlnaHQgKiAxLjUpIHtcbiAgICAgIHNldEFkZEJnQ29sb3IodHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QWRkQmdDb2xvcihmYWxzZSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmlubmVyV2lkdGggPCBNT0JJTEVfV0lEVEgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzaG93SGVhZGVyQWN0aW9ucykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuICAgIH1cbiAgfSwgW3Nob3dIZWFkZXJBY3Rpb25zXSlcblxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBhcz1cImhlYWRlclwiXG4gICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JnQ29sb3J9XG4gICAgICBtaW5IPVwiODBweFwiXG4gICAgICB6SW5kZXg9XCIxNVwiXG4gICAgPlxuICAgICAgPEZsZXhcbiAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICBtYXhXPVwiMTMzMHB4XCJcbiAgICAgICAgcGFkZGluZz17WycwIDMycHgnLCAnMCAzMnB4JywgJzAgNDVweCddfVxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICB3aWR0aD17Wyc4NXB4JywgJzg1cHgnLCAnODVweCcsICc4NXB4JywgJzExMHB4J119XG4gICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMb2dvIGlzTGlnaHQ9e2JnQ29sb3IgIT09ICd3aGl0ZSd9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICB7c2hvd0hlYWRlckFjdGlvbnMgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtuYXZzLm1hcCgoeyB0eXBlLCBsYWJlbCwgaHJlZiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtsYWJlbH1cbiAgICAgICAgICAgICAgICBhcz17dHlwZSA9PT0gJ2xpbmsnID8gJ2EnIDogJ2J1dHRvbid9XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNnB4XCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1tcbiAgICAgICAgICAgICAgICAgICcjMDBjOWI2JyxcbiAgICAgICAgICAgICAgICAgICcjMDBjOWI2JyxcbiAgICAgICAgICAgICAgICAgIGAke2FkZEJnQ29sb3IgPyAncmdiKDAsIDIyMCwgMjAwKScgOiAnI2ZmZmZmZid9YCxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtbJyNmZmYnLCAnI2ZmZicsICcjMDAwJ119XG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjUwMFwiXG4gICAgICAgICAgICAgICAgZm9udFNpemU9e1snMTVweCcsICcxNXB4JywgJzE3cHgnXX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e1snNDBweCcsICc0MHB4JywgJzU0cHgnXX1cbiAgICAgICAgICAgICAgICB3aWR0aD17WycxMjBweCcsICcxMjBweCcsICcxNjBweCddfVxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCIxLjRcIlxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBmb250V2VpZ2h0OiA1MDAgfX1cbiAgICAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtOYXZTdHlsZX1cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);