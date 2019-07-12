webpackHotUpdate("static/development/pages/property-list.js",{

/***/ "./pages/property-list.js":
/*!********************************!*\
  !*** ./pages/property-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PropertyList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.js");
/* harmony import */ var _components_PropertyList_Properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PropertyList/Properties */ "./components/PropertyList/Properties.js");
/* harmony import */ var _components_PropertyList_PropertyListOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PropertyList/PropertyListOptions */ "./components/PropertyList/PropertyListOptions.jsx");
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoadingSpinner */ "./components/LoadingSpinner.js");
/* harmony import */ var _components_PropertyList_ListProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PropertyList/ListProperty */ "./components/PropertyList/ListProperty.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Card */ "../node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Paginator */ "./components/Paginator.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/http.service */ "./services/http.service.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_pagination_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/pagination.helper */ "./services/pagination.helper.js");



var _jsxFileName = "/Users/johnsposato/Desktop/work-projects/hgm-admin-dashboard/src/pages/property-list.js";











const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "property-list__CardWrapper",
  componentId: "wqmrnv-0"
})([".card{margin-bottom:15px;}.card-body{padding:0;}.card-header{display:flex;direction:row;justify-content:space-between}i{color:#548DD4;cursor:pointer}i:hover{color:#0056b3;}"]);
class PropertyList extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  static async getInitialProps({
    query
  }) {
    try {
      const res = await Object(_services_http_service__WEBPACK_IMPORTED_MODULE_11__["default"])('api/notes');
      const properties = await res.json();
      return {
        properties
      };
    } catch (err) {
      console.log(err);
    }
  }

  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "updateDisplayedProperties", page => {
      const index = Object(_services_pagination_helper__WEBPACK_IMPORTED_MODULE_13__["getIndex"])(page, this.state.displayTotal);
      const dispProps = Object(_services_pagination_helper__WEBPACK_IMPORTED_MODULE_13__["getDisplayedItems"])(index, this.props.properties, this.state.displayTotal);
      this.setState({
        displayedProperties: dispProps,
        currentPage: page
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "updateDisplayTotal", total => {
      const pages = Object(_services_pagination_helper__WEBPACK_IMPORTED_MODULE_13__["getTotalPages"])(this.props.properties.length, this.state.displayTotal);
      this.setState(st => {
        return {
          displayTotal: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(total),
          displayedProperties: Object(_services_pagination_helper__WEBPACK_IMPORTED_MODULE_13__["getDisplayedItems"])(Object(_services_pagination_helper__WEBPACK_IMPORTED_MODULE_13__["getIndex"])(this.state.currentPage, this.state.displayTotal), this.props.properties, this.state.displayTotal),
          totalPages: pages
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "openFilterOptions", () => {
      this.setState({
        filterOptionsOpen: !this.state.filterOptionsOpen
      });
    });

    this.state = {
      loading: true,
      displayTotal: 25,
      currentPage: 1,
      displayedProperties: [],
      totalPages: 1,
      filterOptionsOpen: false
    };
  }

  componentDidMount() {
    const pages = Object(_services_pagination_helper__WEBPACK_IMPORTED_MODULE_13__["getTotalPages"])(this.props.properties.length, this.state.displayTotal);
    this.setState(st => {
      return {
        loading: false,
        displayedProperties: this.props.properties.slice(0, 25),
        totalPages: pages
      };
    });
  }

  render() {
    const {
      displayedProperties,
      loading,
      totalPages,
      displayTotal,
      currentPage,
      filterOptionsOpen
    } = this.state;
    const properties = displayedProperties.map(property => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PropertyList_ListProperty__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, property, {
      key: property.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    })));
    const content = loading ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9___default.a.Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Properties", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "fas fa-filter",
      onClick: this.openFilterOptions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "fas fa-plus",
      onClick: this.openFilterOptions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9___default.a.Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, filterOptionsOpen && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PropertyList_PropertyListOptions__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PropertyList_Properties__WEBPACK_IMPORTED_MODULE_5__["default"], {
      properties: properties,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, properties), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Paginator__WEBPACK_IMPORTED_MODULE_10__["default"], {
      pages: totalPages,
      displayTotal: displayTotal,
      activePage: currentPage,
      updateDisplayTotal: this.updateDisplayTotal,
      updatePropList: this.updateDisplayedProperties,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    })));
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_layouts_Main__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: this.props.user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, content));
  }

}

/***/ })

})
//# sourceMappingURL=property-list.js.e34c270eaf7dd511c916.hot-update.js.map