webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/View360.tsx":
/*!**************************************!*\
  !*** ./pages/components/View360.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Jose Castillo\\Desktop\\template\\orbital-react\\pages\\components\\View360.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // You can play with this to adjust the sensitivity
// higher values make mouse less sensitive

var pixelsPerDegree = 3;

var App = function App(props) {
  var dir = props.dir,
      numImages = props.numImages;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      imageIndex = _useState[0],
      changeImageIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      dragging = _useState2[0],
      changeDragging = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      dragStartIndex = _useState3[0],
      changeDragStartIndex = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      dragStart = _useState4[0],
      changeDragStart = _useState4[1];
  /*   const state = {
      dragging: false,
      imageIndex: 0,
      dragStartIndex: 0
    }; */


  var handleMouseMove = function handleMouseMove(e) {
    if (dragging) {
      updateImageIndex(e.screenX);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mouseup", handleMouseUp, false);
    return function () {
      document.removeEventListener("mousemove", handleMouseMove, false);
      document.removeEventListener("mouseup", handleMouseUp, false);
    };
  }, []);

  var handleMouseDown = function handleMouseDown(e) {
    e.persist();
    changeDragging(true);
    changeDragStart(e.screenX);
    changeDragStartIndex(imageIndex);
    /*     this.setState(state => ({
          dragging: true,
          dragStart: e.screenX,
          dragStartIndex: state.imageIndex
        })); */
  };

  var handleMouseUp = function handleMouseUp() {
    //this.setState({ dragging: false });
    changeDragging(true);
  };

  var updateImageIndex = function updateImageIndex(currentPosition) {
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
    var _ref;

    return __jsx("div", {
      style: {
        position: 'absolute',
        width: '80%',
        margin: '0 auto'
      },
      className: "react360",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }
    }, __jsx("img", {
      style: (_ref = {
        position: 'relative',
        width: '100%',
        height: 'auto',
        display: 'flex'
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "height", '500px'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 'justify-content', 'center'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 'align-items', 'center'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 'background-color', 'white'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, '-webkit-user-select', 'none'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, '-khtml-user-select', 'none'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, '-moz-user-select', 'none'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, '-ms-user-select', 'none'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, '-o-user-select', 'none'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 'user-select', 'none'), _ref),
      className: "react-360-img",
      alt: "",
      src: "".concat(dir, "/").concat(imageIndex, ".jpg")
      /*  src={require(`${dir}/${imageIndex}.jpg`)} */
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
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
      lineNumber: 119,
      columnNumber: 7
    }
  }, renderImage());
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.51e0c91a6017f5395bf7.hot-update.js.map