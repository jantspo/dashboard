webpackHotUpdate("static/development/pages/property-list.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ "../node_modules/react-bootstrap/Navbar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ "../node_modules/react-bootstrap/NavDropdown.js");
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Nav */ "../node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./services/auth.service.js");

var _jsxFileName = "/Users/johnsposato/Desktop/work-projects/hgm-admin-dashboard/src/components/Header.js";







const navbarStyle = {
  marginRight: "25px",
  zIndex: 5,
  backgroundColor: "#fff",
  width: "100%",
  position: "fixed",
  boxShadow: "0px 0px 10px #efefef"
};
class Header extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleMenu", status => {
      this.setState({
        menuOpen: status
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleClick", () => {
      this.toggleMenu(!this.state.menuOpen);
      this.props.eventHandler();
    });

    this.state = {
      menuOpen: false,
      user: {
        first_name: '',
        last_name: ''
      }
    };
  }

  componentDidMount() {
    this.setState({
      user: JSON.parse(window.localStorage.getItem('user'))
    });
  }

  render() {
    const {
      menuOpen,
      user
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      expand: "lg",
      style: navbarStyle,
      className: "Header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-3900106225" + " " + "menu-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      onClick: this.handleClick,
      className: "jsx-3900106225" + " " + `menu-button fas fa-2x menu-toggle ${menuOpen ? "fa-times" : "rotate-menu-button fa-bars"} `,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default.a.Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: "../static/logo.jpg",
      width: "70",
      height: "30",
      alt: "",
      className: "jsx-3900106225",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default.a.Toggle, {
      "aria-controls": "basic-navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default.a.Collapse, {
      id: "basic-navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
      className: "jsx-3900106225" + " " + "form-inline my-2 my-lg-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
      type: "search",
      placeholder: "Search",
      "aria-label": "Search",
      className: "jsx-3900106225" + " " + "form-control mr-sm-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      type: "submit",
      className: "jsx-3900106225" + " " + "btn search-button my-2 my-sm-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "jsx-3900106225" + " " + "fas fa-search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "",
      style: {
        padding: "4px 0 0 0"
      },
      className: "jsx-3900106225",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "jsx-3900106225" + " " + "fas fa-plus-circle fa-2x",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
      title: user.first_name + ' ' + user.last_name,
      id: "basic-nav-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5___default.a.Divider, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
      onClick: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["logout"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Logout")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3900106225",
      __self: this
    }, ".search-button.jsx-3900106225{color:#F05F40;background-color:#fff;border-color:#F05F40;}.search-button.jsx-3900106225:hover{color:#fff;background-color:#F05F40;}.menu-toggle.jsx-3900106225{color:#F05F40;}.menu-button.jsx-3900106225{margin-left:15px;margin-right:15px;-webkit-transition-duration:.25s;-moz-transition-duration:.25s;-o-transition-duration:.25s;-webkit-transition-duration:.25s;transition-duration:.25s;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;}.rotate-menu-button.jsx-3900106225{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.menu-wrapper.jsx-3900106225{width:60px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2huc3Bvc2F0by9EZXNrdG9wL3dvcmstcHJvamVjdHMvaGdtLWFkbWluLWRhc2hib2FyZC9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0ZxQixBQUd1QyxBQU1ILEFBTUksQUFJRSxBQWN0QixBQUdnQixXQTFCYyxBQTRCOUIsR0FsQzJCLEFBWTFCLEdBSXNCLFNBa0J0QixTQWpCcUMsQ0FmdEMsQUFNQyxxQkFOQSxXQWdCa0MsbUJBV2xDLFdBVmdDLDRCQUNILDBEQUNxQiw4Q0FDTix3Q0FDSixvQ0FDTixrSEFDbEMiLCJmaWxlIjoiL1VzZXJzL2pvaG5zcG9zYXRvL0Rlc2t0b3Avd29yay1wcm9qZWN0cy9oZ20tYWRtaW4tZGFzaGJvYXJkL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duJztcbmltcG9ydCBOYXYgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIjtcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5cbmNvbnN0IG5hdmJhclN0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiBcIjI1cHhcIixcbiAgICB6SW5kZXg6IDUsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAxMHB4ICNlZmVmZWZcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWVudU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VyOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKX0pXG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudU9wZW46IHN0YXR1c30pXG4gICAgfTtcblxuICAgIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoIXRoaXMuc3RhdGUubWVudU9wZW4pO1xuICAgICAgICB0aGlzLnByb3BzLmV2ZW50SGFuZGxlcigpO1xuICAgIH07XG5cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7bWVudU9wZW4sIHVzZXJ9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPE5hdmJhciBleHBhbmQ9XCJsZ1wiIHN0eWxlPXtuYXZiYXJTdHlsZX0gY2xhc3NOYW1lPVwiSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXsgYG1lbnUtYnV0dG9uIGZhcyBmYS0yeCBtZW51LXRvZ2dsZSAkeyBtZW51T3BlbiA/IFwiZmEtdGltZXNcIjogXCJyb3RhdGUtbWVudS1idXR0b24gZmEtYmFyc1wifSBgfVxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YT5IR008L2E+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9sb2dvLmpwZ1wiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCIzMFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBteS0yIG15LWxnLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1yLXNtLTJcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBzZWFyY2gtYnV0dG9uIG15LTIgbXktc20tMFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHN0eWxlPXt7cGFkZGluZzogXCI0cHggMCAwIDBcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBmYS0yeFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9eyB1c2VyLmZpcnN0X25hbWUgKyAnICcgKyB1c2VyLmxhc3RfbmFtZX0gaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIj5BY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGMDVGNDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjA1RjQwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjA1RjQwO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5tZW51LXRvZ2dsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0YwNUY0MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm1lbnUtYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4yNXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IC4yNXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMjVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjI1cztcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6IC1tb3otdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW8tdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAucm90YXRlLW1lbnUtYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubWVudS13cmFwcGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICApXG4gICAgfVxuXG59Il19 */\n/*@ sourceURL=/Users/johnsposato/Desktop/work-projects/hgm-admin-dashboard/src/components/Header.js */"));
  }

}

/***/ })

})
//# sourceMappingURL=property-list.js.1012e9a8c46b038f4327.hot-update.js.map