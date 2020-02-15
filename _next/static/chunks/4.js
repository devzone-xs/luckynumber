(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./components/bill/TableNumAll.js":
/*!****************************************!*\
  !*** ./components/bill/TableNumAll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Sunday\\Documents\\Web Develop\\luckey-number\\components\\bill\\TableNumAll.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var TableNum = function TableNum(props) {
  var data = props.data,
      tablePerAll = props.tablePerAll,
      category = props.category;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("table", {
    className: "jsx-2208964193" + " " + "ui celled very compact table mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-2208964193",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-2208964193",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-2208964193" + " " + "A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "\u0E25\u0E33\u0E14\u0E31\u0E1A"), category == 1 ? __jsx("th", {
    className: "jsx-2208964193" + " " + "B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u0E40\u0E25\u0E02\u0E1A\u0E19") : '', category == 2 ? __jsx("th", {
    className: "jsx-2208964193" + " " + "B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u0E40\u0E25\u0E02\u0E25\u0E48\u0E32\u0E07") : '', category == 3 ? __jsx("th", {
    className: "jsx-2208964193" + " " + "B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\u0E40\u0E25\u0E02 3 \u0E15\u0E31\u0E27\u0E15\u0E23\u0E07") : '', category == 4 ? __jsx("th", {
    className: "jsx-2208964193" + " " + "B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\u0E40\u0E25\u0E02\u0E42\u0E15\u0E49\u0E14") : '', __jsx("th", {
    className: "jsx-2208964193" + " " + "C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\u0E08\u0E33\u0E19\u0E27\u0E19"))), __jsx("tbody", {
    className: "jsx-2208964193",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, data ? data.map(function (i, k) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, i.pass === 0 ? __jsx("tr", {
      key: k,
      className: "jsx-2208964193",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-2208964193",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2208964193" + " " + "c-gray",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, " ", k + 1)), __jsx("td", {
      className: "jsx-2208964193" + " " + "".concat(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(i.reward) == 1 ? 'c-green' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, i.num), __jsx("td", {
      className: "jsx-2208964193",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2208964193" + " " + "c-blue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, i.price))) : __jsx("tr", {
      key: k,
      className: "jsx-2208964193" + " " + "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-2208964193",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2208964193" + " " + "c-gray",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, " ", k + 1)), __jsx("td", {
      className: "jsx-2208964193" + " " + "c-red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("del", {
      className: "jsx-2208964193",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, i.num)), __jsx("td", {
      className: "jsx-2208964193",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2208964193" + " " + "c-red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("del", {
      className: "jsx-2208964193",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, i.price)))));
  }) : '')), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2208964193",
    __self: this
  }, ".A.jsx-2208964193{width:25%;min-width:25%;}.C.jsx-2208964193{width:30%;min-width:30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU3VuZGF5XFxEb2N1bWVudHNcXFdlYiBEZXZlbG9wXFxsdWNrZXktbnVtYmVyXFxjb21wb25lbnRzXFxiaWxsXFxUYWJsZU51bUFsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3dCLEFBRytCLEFBSUEsVUFISSxBQUlBLGNBSGxCLEFBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxTdW5kYXlcXERvY3VtZW50c1xcV2ViIERldmVsb3BcXGx1Y2tleS1udW1iZXJcXGNvbXBvbmVudHNcXGJpbGxcXFRhYmxlTnVtQWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVGFibGVOdW0gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgdGFibGVQZXJBbGwsIGNhdGVnb3J5IH0gPSBwcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidWkgY2VsbGVkIHZlcnkgY29tcGFjdCB0YWJsZSBtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cIkFcIj7guKXguLPguJTguLHguJo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkgPT0gMSA/IDx0aCBjbGFzc05hbWU9XCJCXCI+4LmA4Lil4LiC4Lia4LiZPC90aD4gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5ID09IDIgPyA8dGggY2xhc3NOYW1lPVwiQlwiPuC5gOC4peC4guC4peC5iOC4suC4hzwvdGg+IDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeSA9PSAzID8gPHRoIGNsYXNzTmFtZT1cIkJcIj7guYDguKXguIIgMyDguJXguLHguKfguJXguKPguIc8L3RoPiA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkgPT0gNCA/IDx0aCBjbGFzc05hbWU9XCJCXCI+4LmA4Lil4LiC4LmC4LiV4LmJ4LiUPC90aD4gOiAnJ31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJDXCI+4LiI4Liz4LiZ4Lin4LiZPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YSA/IGRhdGEubWFwKChpLCBrKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aS5wYXNzID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIGNsYXNzTmFtZT1cImMtZ3JheVwiPiB7ayArIDF9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2Ake3BhcnNlSW50KGkucmV3YXJkKSA9PSAxID8gJ2MtZ3JlZW4nIDogJyd9YH0+e2kubnVtfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzc05hbWU9XCJjLWJsdWVcIj57aS5wcmljZX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtrfSBjbGFzc05hbWU9XCJlcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gY2xhc3NOYW1lPVwiYy1ncmF5XCI+IHtrICsgMX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImMtcmVkXCI+PGRlbD57aS5udW19PC9kZWw+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIGNsYXNzTmFtZT1cImMtcmVkXCI+PGRlbD57aS5wcmljZX08L2RlbD48L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuQSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5DIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAlOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZU51bSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Sunday\\\\Documents\\\\Web Develop\\\\luckey-number\\\\components\\\\bill\\\\TableNumAll.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TableNum);

/***/ })

}]);
//# sourceMappingURL=4.js.map