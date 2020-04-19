module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zUaL");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("movS");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gIO9");
/* harmony import */ var _components_View360__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nlmE");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Index() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_View360__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dir: "https://raw.githubusercontent.com/jcastillovnz/Carque-360/master/iframes/roof/img/roof/renders",
    numImages: 31
  }));
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gIO9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const linkStyle = {
  marginRight: 15
};

const Header = () => __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Orbital - 360"), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width"
})));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "movS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Logo = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setShow(false);
  }, []);
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  if (show === true) {
    return __jsx("div", {
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }
    }, __jsx("img", {
      className: "icon-react360",
      alt: "",
      src: 'https://raw.githubusercontent.com/aldrinc/react-360-image/master/src/360_degrees.png'
    }));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "nlmE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // You can play with this to adjust the sensitivity
// higher values make mouse less sensitive

const pixelsPerDegree = 2;

const App = props => {
  const {
    dir,
    numImages
  } = props;
  const {
    0: imageIndex,
    1: changeImageIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: dragging,
    1: changeDragging
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: dragStartIndex,
    1: changeDragStartIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: dragStart,
    1: changeDragStart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  /*   const state = {
      dragging: false,
      imageIndex: 0,
      dragStartIndex: 0
    }; */

  const handleMouseMove = e => {
    console.log("state on draggin ", dragging);
    console.log("handle mouse move ->>>>, draggin: ", dragging);

    if (dragging === false) {
      //  alert("IS TRUE DRAGGIN IN MOVE")
      updateImageIndex(e.screenX); /// alert("is dragging")

      console.log("image index", imageIndex);
    }
  };

  const handleMouseDown = e => {
    e.persist(); // ChangeStatusDraggin()

    changeDragging(true); //true

    changeDragStart(e.screenX);
    changeDragStartIndex(imageIndex);
    console.log("draggin set in true --->", dragging); //alert( dragging)

    /*     this.setState(state => ({
          dragging: true,
          dragStart: e.screenX,
          dragStartIndex: state.imageIndex
        })); */
  };

  const handleMouseUp = () => {
    changeDragging(false); // false

    console.log("draggin set in false --->", dragging);
  };

  const updateImageIndex = currentPosition => {
    console.log("updateImageIndex", currentPosition);
    const pixelsPerImage = pixelsPerDegree * (360 / numImages); // pixels moved

    let dx = (currentPosition - dragStart) / pixelsPerImage;
    let index = Math.floor(dx) % numImages;

    if (index < 0) {
      index = numImages + index - 1;
    }

    index = (index + dragStartIndex) % numImages; // console.log(index, dragStartIndex, numImages)

    if (index !== imageIndex) {
      //this.setState({ imageIndex: index });
      changeImageIndex(index);
    }
  };

  const preventDragHandler = e => {
    e.preventDefault();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("se monta");
    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mouseup", handleMouseUp, false); // returned function will be called on component unmount 

    return () => {
      console.log("se desmonta");
      document.removeEventListener('mousemove', handleMouseMove, false);
      document.removeEventListener("mouseup", handleMouseUp, false);
    };
  }, []);

  const renderImage = () => {
    return __jsx("div", {
      style: {
        position: 'absolute',
        width: 'auto',
        display: 'block',
        margin: '0 auto',
        'text-align': 'left'
      },
      className: "react360"
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
      src: `${dir}/${imageIndex}.jpg`
      /*  src={require(`${dir}/${imageIndex}.jpg`)} */

    }));
  };

  return __jsx("div", {
    className: "react-360-img",
    onMouseDown: handleMouseDown,
    onDragStart: preventDragHandler
  }, __jsx("div", {
    style: {
      position: 'fixed'
    }
  }, "Metrics:", __jsx("ul", null, __jsx("li", null, "Num images: ", numImages), __jsx("li", null, "Image index: ", imageIndex), __jsx("li", null, "Dragging:", dragging ? 'Is dragging' : 'No draggin'), __jsx("li", null, "DragStart:", dragStart), __jsx("li", null, "DragStartIndex: ", dragStartIndex))), renderImage());
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zUaL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const layoutStyle = {};

const Layout = props => __jsx("div", {
  style: layoutStyle
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

/******/ });