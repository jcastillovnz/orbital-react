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
function preloadImages(srcs) {
  console.log("preload entrie", srcs);

  function loadImage(src) {
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
  }

  var promises = [];

  for (var i = 0; i < srcs.length; i++) {
    promises.push(loadImage(srcs[i]));
  }

  var images = src.map(function (image) {
    ret;
  });
  return Promise.all(promises);
}

/***/ })

})
//# sourceMappingURL=index.js.1b125ef4919f5c294971.hot-update.js.map