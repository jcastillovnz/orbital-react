webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/View360/Preload.tsx":
/*!**********************************************!*\
  !*** ./pages/components/View360/Preload.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preloadImages; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

function preloadImages(srcs) {
  var loadImage, promises;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function preloadImages$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          loadImage = function _loadImage(src) {
            return new Promise(function (resolve, reject) {
              var img = new Image();

              img.onload = function () {
                resolve(img);
              };

              img.onerror = img.onabort = function () {
                reject(src);
              };

              img.src = src;
            });
          };

          console.log("preload entrie", srcs);
          promises = srcs.map(function (image, index) {
            return loadImage(srcs[index]);
          });
          console.log("");
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(promises));

        case 6:
          return _context.abrupt("return", _context.sent);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

/***/ })

})
//# sourceMappingURL=index.js.6b4462716f16a52529ae.hot-update.js.map