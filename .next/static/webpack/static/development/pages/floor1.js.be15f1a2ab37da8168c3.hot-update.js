webpackHotUpdate("static\\development\\pages\\floor1.js",{

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
 //import "./React360.css";
// You can play with this to adjust the sensitivity
// higher values make mouse less sensitive

var pixelsPerDegree = 3;

var App = function App() {
  var defaultProps = {
    dir: "awair-360",
    numImages: 55
  };
  state = {
    dragging: false,
    imageIndex: 0,
    dragStartIndex: 0
  };

  componentDidMount = function componentDidMount() {
    document.addEventListener("mousemove", _this.handleMouseMove, false);
    document.addEventListener("mouseup", _this.handleMouseUp, false);
  };

  componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener("mousemove", _this.handleMouseMove, false);
    document.removeEventListener("mouseup", _this.handleMouseUp, false);
  };

  var handleMouseDown = function handleMouseDown(e) {
    e.persist();

    _this.setState(function (state) {
      return {
        dragging: true,
        dragStart: e.screenX,
        dragStartIndex: state.imageIndex
      };
    });
  };

  var handleMouseUp = function handleMouseUp() {
    _this.setState({
      dragging: false
    });
  };

  var updateImageIndex = function updateImageIndex(currentPosition) {
    var numImages = _this.props.numImages;
    var pixelsPerImage = pixelsPerDegree * (360 / numImages);
    var _this$state = _this.state,
        dragStart = _this$state.dragStart,
        imageIndex = _this$state.imageIndex,
        dragStartIndex = _this$state.dragStartIndex; // pixels moved

    var dx = (currentPosition - dragStart) / pixelsPerImage;
    var index = Math.floor(dx) % numImages;

    if (index < 0) {
      index = numImages + index - 1;
    }

    index = (index + dragStartIndex) % numImages; // console.log(index, dragStartIndex, numImages)

    if (index !== imageIndex) {
      _this.setState({
        imageIndex: index
      });
    }
  };

  var handleMouseMove = function handleMouseMove(e) {
    if (_this.state.dragging) {
      _this.updateImageIndex(e.screenX);
    }
  };

  var preventDragHandler = function preventDragHandler(e) {
    e.preventDefault();
  };

  var renderImage = function renderImage() {
    var imageIndex = _this.state.imageIndex;
    return __jsx("div", {
      className: "react360",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }
    }, __jsx("img", {
      className: "react-360-img",
      alt: "",
      src: __webpack_require__("./pages/components sync recursive ^\\.\\/.*\\.jpg$")("./".concat(_this.props.dir, "/").concat(imageIndex, ".jpg")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }));
  };

  return __jsx("div", {
    className: "react-360-img",
    onMouseDown: _this.handleMouseDown,
    onDragStart: _this.preventDragHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, _this.renderImage());
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=floor1.js.be15f1a2ab37da8168c3.hot-update.js.map