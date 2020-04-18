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

    if (dragging) {
      updateImageIndex(e.screenX);
      console.log("image index", imageIndex);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mouseup", handleMouseUp, false);
    return function () {
      document.removeEventListener("mousemove", handleMouseMove, false);
      document.removeEventListener("mouseup", handleMouseUp, false);
    };
  }, []);

  var handleMouseDown = function handleMouseDown(e) {
    e.persist();
    console.log("mouse move down", e);
    changeDragging(!dragging);
    changeDragStart(e.screenX);
    changeDragStartIndex(imageIndex);
    /*     this.setState(state => ({
          dragging: true,
          dragStart: e.screenX,
          dragStartIndex: state.imageIndex
        })); */
  };

  var handleMouseUp = function handleMouseUp() {
    console.log("mouse move up"); //this.setState({ dragging: false });

    changeDragging(!dragging);
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
        lineNumber: 94,
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
        lineNumber: 99,
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
      lineNumber: 133,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      position: 'fixed'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, "Metrics:", __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 1
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 1
    }
  }, "Num images: ", numImages), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 1
    }
  }, "Image index: ", imageIndex), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 3
    }
  }, "Dragging:", dragging ? 'Is dragging' : 'No draggin'), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 3
    }
  }, "DragStart:", dragStart), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 3
    }
  }, "DragStartIndex: ", dragStartIndex))), renderImage());
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.b2d36e16713955298667.hot-update.js.map