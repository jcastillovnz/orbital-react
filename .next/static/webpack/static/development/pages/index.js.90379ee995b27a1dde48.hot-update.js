webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/View360.tsx":
/*!**************************************!*\
  !*** ./pages/components/View360.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Jose Castillo\\Desktop\\template\\orbital-react\\pages\\components\\View360.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // You can play with this to adjust the sensitivity
// higher values make mouse less sensitive

var pixelsPerDegree = 3;

var App = function App(props) {
  var dir = props.dir,
      numImages = props.numImages;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      imageIndex = _useState[0],
      changeImageIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      dragging = _useState2[0],
      changeDragging = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      dragStartIndex = _useState3[0],
      changeDragStartIndex = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      dragStart = _useState4[0],
      changeDragStart = _useState4[1];
  /*   const state = {
      dragging: false,
      imageIndex: 0,
      dragStartIndex: 0
    }; */


  var handleMouseMove = function handleMouseMove(e) {
    console.log("handle mouse move, draggin: ", dragging);
    alert("is not dragging");

    if (dragging) {
      updateImageIndex(e.screenX);
      alert("is dragging");
      console.log("image index", imageIndex);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("se monta");
    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mouseup", handleMouseUp, false); // returned function will be called on component unmount 

    return function () {
      console.log("se desmonta");
      document.removeEventListener('mousemove', handleMouseMove, false);
      document.removeEventListener("mouseup", handleMouseUp, false);
    };
  }, []);

  var ChangeStatusDraggin = function ChangeStatusDraggin() {
    changeDragging(!dragging); //true
  };

  var handleMouseDown = function handleMouseDown(e) {
    e.persist();
    console.log("mouse move down", e); // ChangeStatusDraggin()

    changeDragging(true); //true

    changeDragStart(e.screenX);
    changeDragStartIndex(imageIndex); //alert( dragging)

    /*     this.setState(state => ({
          dragging: true,
          dragStart: e.screenX,
          dragStartIndex: state.imageIndex
        })); */
  };

  var handleMouseUp = function handleMouseUp() {
    console.log("mouse move up");
    changeDragging(false); // false
    //ChangeStatusDraggin()
  };

  var updateImageIndex = function updateImageIndex(currentPosition) {
    console.log("updateImageIndex", currentPosition);
    var pixelsPerImage = pixelsPerDegree * (360 / numImages); // pixels moved

    var dx = (currentPosition - dragStart) / pixelsPerImage;
    var index = Math.floor(dx) % numImages;

    if (index < 0) {
      index = numImages + index - 1;
    }

    index = (index + dragStartIndex) % numImages; // console.log(index, dragStartIndex, numImages)

    if (index !== imageIndex) {
      //this.setState({ imageIndex: index });
      changeImageIndex(index);
    }
  };

  var preventDragHandler = function preventDragHandler(e) {
    e.preventDefault();
  };

  var renderImage = function renderImage() {
    return __jsx("div", {
      style: {
        position: 'absolute',
        width: 'auto',
        display: 'block',
        margin: '0 auto',
        'text-align': 'left'
      },
      className: "react360",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }
    }, __jsx("img", {
      style: {
        margin: 'auto',
        position: 'relative',
        height: '95vh',
        width: 'auto',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'background-color': 'white',
        '-webkit-user-select': 'none',
        '-khtml-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        '-o-user-select': 'none',
        'user-select': 'none',
        left: '82%',
        bottom: '150%',
        top: '-25%',
        'transform': 'translate(-50%, 0)',
        '-ms-transform': 'translate(-50%, 0)',
        '-webkit-transform': 'translate(-50%, 0)',
        'z-index': 0
      },
      className: "react-360-img",
      src: "".concat(dir, "/").concat(imageIndex, ".jpg")
      /*  src={require(`${dir}/${imageIndex}.jpg`)} */
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }
    }));
  };

  return __jsx("div", {
    className: "react-360-img",
    onMouseDown: handleMouseDown,
    onDragStart: preventDragHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      position: 'fixed'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, "Metrics:", __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 1
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 1
    }
  }, "Num images: ", numImages), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 1
    }
  }, "Image index: ", imageIndex), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 3
    }
  }, "Dragging:", dragging ? 'Is dragging' : 'No draggin'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 3
    }
  }, "DragStart:", dragStart), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 3
    }
  }, "DragStartIndex: ", dragStartIndex))), renderImage());
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layout */ "./pages/components/Layout.tsx");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Loader */ "./pages/components/Loader.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.tsx");
/* harmony import */ var _components_View360__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/View360 */ "./pages/components/View360.tsx");
var _jsxFileName = "C:\\Users\\Jose Castillo\\Desktop\\template\\orbital-react\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Index() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx(_components_View360__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dir: "https://raw.githubusercontent.com/jcastillovnz/Carque-360/master/iframes/r1/img/r1/renders",
    numImages: 31,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.90379ee995b27a1dde48.hot-update.js.map