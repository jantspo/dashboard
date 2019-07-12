webpackHotUpdate("static/development/pages/property.js",{

/***/ "./components/Inputs/SelectInput.jsx":
/*!*******************************************!*\
  !*** ./components/Inputs/SelectInput.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/johnsposato/Desktop/work-projects/hgm-admin-dashboard/src/components/Inputs/SelectInput.jsx";


/* harmony default export */ __webpack_exports__["default"] = (function ({
  value,
  name,
  required,
  changeHandler,
  propertyName,
  options,
  field
}) {
  const [val, setVal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value || '');

  const update = evt => {
    setVal(evt.target.value);
    changeHandler(evt);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setVal(value);
  }, [value]);
  const selectOptions = options ? options.map(option => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    key: option[field],
    value: option[field],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, option[field])) : [];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "GeneralInput form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    id: name,
    "data-target": propertyName,
    value: val,
    required: required || false,
    onChange: update,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Select"), selectOptions)));
});

/***/ })

})
//# sourceMappingURL=property.js.5089af4aeaf87401dc40.hot-update.js.map