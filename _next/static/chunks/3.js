(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./components/bill/TableNum.js":
/*!*************************************!*\
  !*** ./components/bill/TableNum.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Sunday\\Documents\\Web Develop\\luckey-number\\components\\bill\\TableNum.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var TableNum = function TableNum(props) {
  var data = props.data,
      tablePerAll = props.tablePerAll;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("table", {
    className: "ui celled very compact table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("th", {
    className: "A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "\u0E25\u0E33\u0E14\u0E31\u0E1A"), __jsx("th", {
    className: "B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u0E40\u0E25\u0E02"), __jsx("th", {
    className: "C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u0E1A\u0E19"), __jsx("th", {
    className: "C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\u0E25\u0E48\u0E32\u0E07"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, data ? data.map(function (i, k) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, tablePerAll(k) ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, i.pass_up === 0 || i.pass_down === 0 ? __jsx("tr", {
      key: k,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("span", {
      className: "c-gray",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, " ", k + 1)), __jsx("td", {
      className: "".concat(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(i.reward) == 1 ? 'c-green' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, i.num), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, i.up === undefined ? '-' : __jsx("span", {
      className: "c-blue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, i.up)), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, i.down === undefined ? '-' : __jsx("span", {
      className: "c-blue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, i.down))) : __jsx("tr", {
      key: k,
      className: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, " ", k + 1)), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("span", {
      className: "c-red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("del", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, i.num))), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, i.up === undefined ? '-' : __jsx("span", {
      className: "c-red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("del", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, i.up))), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, i.down === undefined ? '-' : __jsx("span", {
      className: "c-red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("del", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, i.down))))) : '');
  }) : '')));
};

/* harmony default export */ __webpack_exports__["default"] = (TableNum);

/***/ })

}]);
//# sourceMappingURL=3.js.map