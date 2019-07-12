webpackHotUpdate("static/development/pages/property.js",{

/***/ "./components/Inputs/GeneralInput.jsx":
/*!********************************************!*\
  !*** ./components/Inputs/GeneralInput.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/johnsposato/Desktop/work-projects/hgm-admin-dashboard/src/components/Inputs/GeneralInput.jsx";


/* harmony default export */ __webpack_exports__["default"] = (function ({
  value,
  name,
  required,
  changeHandler,
  propertyName,
  disabled
}) {
  const [val, setVal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const update = evt => {
    setVal(evt.target.value);
    changeHandler(evt);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setVal(value);
  }, [value]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "GeneralInput form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: name,
    "aria-describedby": "emailHelp",
    onChange: update,
    value: val,
    disabled: disabled || false,
    "data-target": propertyName,
    required: required || false,
    placeholder: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=property.js.2308bd10c3d994d71982.hot-update.js.map