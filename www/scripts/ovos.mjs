/******/ var __webpack_modules__ = {
  /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/anchor/anchor.scss':
    /*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/anchor/anchor.scss ***!
  \***********************************************************************************************************************/
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        `[data-an-fixed=true] {
  position: fixed;
}

[data-an-position=top] {
  top: 0;
}

[data-an-position=bottom] {
  bottom: 0;
}`,
        '',
        {
          version: 3,
          sources: ['webpack://./src/interface/anchor/anchor.scss'],
          names: [],
          mappings:
            'AAAA;EACE,eAAA;AACF;;AAEA;EACE,MAAA;AACF;;AAEA;EACE,SAAA;AACF',
          sourcesContent: [
            '[data-an-fixed="true"] {\r\n  position: fixed;\r\n}\r\n\r\n[data-an-position="top"] {\r\n  top: 0;\r\n}\r\n\r\n[data-an-position="bottom"] {\r\n  bottom: 0;\r\n}\r\n',
          ],
          sourceRoot: '',
        },
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___;

      /***/
    },

  /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/carousel/carousel.scss':
    /*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/carousel/carousel.scss ***!
  \***************************************************************************************************************************/
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        `[data-carousel=slider] {
  display: flex;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  position: relative;
}
[data-carousel=slider]::-webkit-scrollbar {
  display: none;
}

[data-carousel=slide] {
  box-sizing: border-box;
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: center;
  scroll-snap-stop: always;
}

[data-carousel=arrow] {
  visibility: hidden;
}
[data-carousel=arrow].is-arrow--loaded {
  visibility: visible;
}

[data-carousel-visible-slides="2"] [data-carousel=slide] {
  width: 50%;
}

[data-carousel-visible-slides="3"] [data-carousel=slide] {
  width: 33.3333333333%;
}

[data-carousel-visible-slides="4"] [data-carousel=slide] {
  width: 25%;
}

[data-carousel-visible-slides="5"] [data-carousel=slide] {
  width: 20%;
}

[data-carousel-visible-slides="6"] [data-carousel=slide] {
  width: 16.6666666667%;
}`,
        '',
        {
          version: 3,
          sources: ['webpack://./src/interface/carousel/carousel.scss'],
          names: [],
          mappings:
            'AAAA;EACE,aAAA;EACA,WAAA;EACA,gBAAA;EACA,6BAAA;EACA,uBAAA;EACA,qBAAA;EACA,kBAAA;AACF;AACE;EACE,aAAA;AACJ;;AAGA;EACE,sBAAA;EACA,WAAA;EACA,cAAA;EACA,yBAAA;EACA,wBAAA;AAAF;;AAGA;EACE,kBAAA;AAAF;AAEE;EACE,mBAAA;AAAJ;;AAKE;EACE,UAAA;AAFJ;;AAOE;EACE,qBAAA;AAJJ;;AASE;EACE,UAAA;AANJ;;AAWE;EACE,UAAA;AARJ;;AAaE;EACE,qBAAA;AAVJ',
          sourcesContent: [
            "[data-carousel='slider'] {\r\n  display: flex;\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  scroll-snap-type: x mandatory;\r\n  scroll-behavior: smooth;\r\n  scrollbar-width: none;\r\n  position: relative;\r\n\r\n  &::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n}\r\n\r\n[data-carousel='slide'] {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  flex-shrink: 0;\r\n  scroll-snap-align: center;\r\n  scroll-snap-stop: always;\r\n}\r\n\r\n[data-carousel='arrow'] {\r\n  visibility: hidden;\r\n\r\n  &.is-arrow--loaded {\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n[data-carousel-visible-slides='2'] {\r\n  [data-carousel='slide'] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n[data-carousel-visible-slides='3'] {\r\n  [data-carousel='slide'] {\r\n    width: calc(100% / 3);\r\n  }\r\n}\r\n\r\n[data-carousel-visible-slides='4'] {\r\n  [data-carousel='slide'] {\r\n    width: 25%;\r\n  }\r\n}\r\n\r\n[data-carousel-visible-slides='5'] {\r\n  [data-carousel='slide'] {\r\n    width: 20%;\r\n  }\r\n}\r\n\r\n[data-carousel-visible-slides='6'] {\r\n  [data-carousel='slide'] {\r\n    width: calc(100% / 6);\r\n  }\r\n}\r\n",
          ],
          sourceRoot: '',
        },
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___;

      /***/
    },

  /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/parallax/parallax.scss':
    /*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/parallax/parallax.scss ***!
  \***************************************************************************************************************************/
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        `[data-ovo-parallax] {
  overflow: hidden;
}`,
        '',
        {
          version: 3,
          sources: ['webpack://./src/interface/parallax/parallax.scss'],
          names: [],
          mappings: 'AAAA;EACE,gBAAA;AACF',
          sourcesContent: [
            '[data-ovo-parallax] {\r\n  overflow: hidden;\r\n}\r\n',
          ],
          sourceRoot: '',
        },
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___;

      /***/
    },

  /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/scrollable-sticky/scrollable-sticky.scss':
    /*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/scrollable-sticky/scrollable-sticky.scss ***!
  \*********************************************************************************************************************************************/
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        `[ovo-scrollable-sticky] {
  display: flex;
  min-height: 100vh;
  position: relative;
}
[ovo-scrollable-sticky][data-ovo_scrollable_sticky_pinned=bottom] [ovo-scrollable-sticky_content] {
  align-self: flex-end;
}
[ovo-scrollable-sticky][data-ovo_scrollable_sticky_fixed=true] [ovo-scrollable-sticky_content] {
  position: fixed;
  top: 0;
}`,
        '',
        {
          version: 3,
          sources: [
            'webpack://./src/interface/scrollable-sticky/scrollable-sticky.scss',
          ],
          names: [],
          mappings:
            'AAAA;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;AACF;AAEI;EACE,oBAAA;AAAN;AAKI;EACE,eAAA;EACA,MAAA;AAHN',
          sourcesContent: [
            "[ovo-scrollable-sticky] {\r\n  display: flex;\r\n  min-height: 100vh;\r\n  position: relative;\r\n\r\n  &[data-ovo_scrollable_sticky_pinned='bottom'] {\r\n    [ovo-scrollable-sticky_content] {\r\n      align-self: flex-end;\r\n    }\r\n  }\r\n\r\n  &[data-ovo_scrollable_sticky_fixed='true'] {\r\n    [ovo-scrollable-sticky_content] {\r\n      position: fixed;\r\n      top: 0;\r\n    }\r\n  }\r\n}\r\n",
          ],
          sourceRoot: '',
        },
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___;

      /***/
    },

  /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/scrollable-tabs/scrollable-tabs.scss':
    /*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/scrollable-tabs/scrollable-tabs.scss ***!
  \*****************************************************************************************************************************************/
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        `[data-ovo-scrollable-tabs] {
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
}
[data-ovo-scrollable-tabs] > * {
  flex-shrink: 0;
}`,
        '',
        {
          version: 3,
          sources: [
            'webpack://./src/interface/scrollable-tabs/scrollable-tabs.scss',
          ],
          names: [],
          mappings:
            'AAAA;EACE,aAAA;EACA,kBAAA;EACA,uBAAA;AACF;AACE;EACE,cAAA;AACJ',
          sourcesContent: [
            '[data-ovo-scrollable-tabs] {\r\n  display: flex;\r\n  overflow-x: scroll;\r\n  scroll-behavior: smooth;\r\n\r\n  > * {\r\n    flex-shrink: 0;\r\n  }\r\n}',
          ],
          sourceRoot: '',
        },
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___;

      /***/
    },

  /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/spin-images/spin-images.scss':
    /*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/spin-images/spin-images.scss ***!
  \*********************************************************************************************************************************/
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        `[data-ovo-spin-images] {
  position: relative;
  overflow: hidden;
  cursor: grab;
}
[data-ovo-spin-images] img {
  width: 100%;
  pointer-events: none;
  user-select: none;
}
[data-ovo-spin-images]::before {
  content: "360";
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  color: white;
  transition: opacity 0.4s;
  opacity: 0;
}
[data-ovo-spin-images].is-loaded::before {
  opacity: 1;
}
[data-ovo-spin-images].is-loaded.ovo-active {
  cursor: grabbing;
}
[data-ovo-spin-images].is-loaded.ovo-active::before {
  opacity: 0;
}

[data-ovo-spin-images=sprite] {
  transition: opacity 0.3s;
  display: flex;
}
[data-ovo-spin-images=sprite] > * {
  flex: 1;
}`,
        '',
        {
          version: 3,
          sources: ['webpack://./src/interface/spin-images/spin-images.scss'],
          names: [],
          mappings:
            'AAAA;EACE,kBAAA;EACA,gBAAA;EACA,YAAA;AACF;AACE;EACE,WAAA;EACA,oBAAA;EACA,iBAAA;AACJ;AAEE;EACE,cAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oCAAA;EACA,UAAA;EACA,YAAA;EACA,wBAAA;EACA,UAAA;AAAJ;AAII;EACE,UAAA;AAFN;AAKI;EACE,gBAAA;AAHN;AAKM;EACE,UAAA;AAHR;;AASA;EACE,wBAAA;EACA,aAAA;AANF;AAQE;EACE,OAAA;AANJ',
          sourcesContent: [
            "[data-ovo-spin-images] {\r\n  position: relative;\r\n  overflow: hidden;\r\n  cursor: grab;\r\n\r\n  img {\r\n    width: 100%;\r\n    pointer-events: none;\r\n    user-select: none;\r\n  }\r\n\r\n  &::before {\r\n    content: '360';\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 1;\r\n    color: white;\r\n    transition: opacity .4s;\r\n    opacity: 0;\r\n  }\r\n\r\n  &.is-loaded {\r\n    &::before {\r\n      opacity: 1;\r\n    }\r\n\r\n    &.ovo-active {\r\n      cursor: grabbing;\r\n\r\n      &::before {\r\n        opacity: 0;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n[data-ovo-spin-images='sprite'] {\r\n  transition: opacity 0.3s;\r\n  display: flex;\r\n\r\n  > * {\r\n    flex: 1;\r\n  }\r\n}\r\n",
          ],
          sourceRoot: '',
        },
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___;

      /***/
    },

  /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/sticky-header/sticky-header.scss':
    /*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/sticky-header/sticky-header.scss ***!
  \*************************************************************************************************************************************/
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        `body {
  position: relative;
}

[data-ovo-sticky-header] {
  position: sticky;
  top: 0;
}`,
        '',
        {
          version: 3,
          sources: [
            'webpack://./src/interface/sticky-header/sticky-header.scss',
          ],
          names: [],
          mappings: 'AAAA;EACE,kBAAA;AACF;;AAEA;EACE,gBAAA;EACA,MAAA;AACF',
          sourcesContent: [
            'body {\r\n  position: relative;\r\n}\r\n\r\n[data-ovo-sticky-header] {\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n',
          ],
          sourceRoot: '',
        },
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___;

      /***/
    },

  /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/utilities/element/element.scss':
    /*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/utilities/element/element.scss ***!
  \*************************************************************************************************************************/
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
        );
      /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
        );
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        `[data-ovo-non-scrollable=true] {
  overflow: hidden;
}`,
        '',
        {
          version: 3,
          sources: ['webpack://./src/utilities/element/element.scss'],
          names: [],
          mappings: 'AAAA;EACE,gBAAA;AACF',
          sourcesContent: [
            '[data-ovo-non-scrollable="true"] {\r\n  overflow: hidden;\r\n}\r\n\r\n// body,\r\n// html {\r\n//   &[data-ovo-non-scrollable="true"] {\r\n//     height: 100%;\r\n//     position: fixed;\r\n//     width: 100%;\r\n//   }\r\n// }\r\n',
          ],
          sourceRoot: '',
        },
      ]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___;

      /***/
    },

  /***/ './node_modules/css-loader/dist/runtime/api.js':
    /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
    /***/ (module) => {
      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      module.exports = function (cssWithMappingToString) {
        var list = [];

        // return the list of modules as css string
        list.toString = function toString() {
          return this.map(function (item) {
            var content = '';
            var needLayer = typeof item[5] !== 'undefined';
            if (item[4]) {
              content += '@supports ('.concat(item[4], ') {');
            }
            if (item[2]) {
              content += '@media '.concat(item[2], ' {');
            }
            if (needLayer) {
              content += '@layer'.concat(
                item[5].length > 0 ? ' '.concat(item[5]) : '',
                ' {',
              );
            }
            content += cssWithMappingToString(item);
            if (needLayer) {
              content += '}';
            }
            if (item[2]) {
              content += '}';
            }
            if (item[4]) {
              content += '}';
            }
            return content;
          }).join('');
        };

        // import a list of modules into the list
        list.i = function i(modules, media, dedupe, supports, layer) {
          if (typeof modules === 'string') {
            modules = [[null, modules, undefined]];
          }
          var alreadyImportedModules = {};
          if (dedupe) {
            for (var k = 0; k < this.length; k++) {
              var id = this[k][0];
              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }
          for (var _k = 0; _k < modules.length; _k++) {
            var item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) {
              continue;
            }
            if (typeof layer !== 'undefined') {
              if (typeof item[5] === 'undefined') {
                item[5] = layer;
              } else {
                item[1] = '@layer'
                  .concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {')
                  .concat(item[1], '}');
                item[5] = layer;
              }
            }
            if (media) {
              if (!item[2]) {
                item[2] = media;
              } else {
                item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}');
                item[2] = media;
              }
            }
            if (supports) {
              if (!item[4]) {
                item[4] = ''.concat(supports);
              } else {
                item[1] = '@supports ('
                  .concat(item[4], ') {')
                  .concat(item[1], '}');
                item[4] = supports;
              }
            }
            list.push(item);
          }
        };
        return list;
      };

      /***/
    },

  /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
    /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
    /***/ (module) => {
      module.exports = function (item) {
        var content = item[1];
        var cssMapping = item[3];
        if (!cssMapping) {
          return content;
        }
        if (typeof btoa === 'function') {
          var base64 = btoa(
            unescape(encodeURIComponent(JSON.stringify(cssMapping))),
          );
          var data =
            'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
              base64,
            );
          var sourceMapping = '/*# '.concat(data, ' */');
          return [content].concat([sourceMapping]).join('\n');
        }
        return [content].join('\n');
      };

      /***/
    },

  /***/ './node_modules/lodash/_Hash.js':
    /*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var hashClear = __webpack_require__(
          /*! ./_hashClear */ './node_modules/lodash/_hashClear.js',
        ),
        hashDelete = __webpack_require__(
          /*! ./_hashDelete */ './node_modules/lodash/_hashDelete.js',
        ),
        hashGet = __webpack_require__(
          /*! ./_hashGet */ './node_modules/lodash/_hashGet.js',
        ),
        hashHas = __webpack_require__(
          /*! ./_hashHas */ './node_modules/lodash/_hashHas.js',
        ),
        hashSet = __webpack_require__(
          /*! ./_hashSet */ './node_modules/lodash/_hashSet.js',
        );

      /**
       * Creates a hash object.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */
      function Hash(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;

        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }

      // Add methods to `Hash`.
      Hash.prototype.clear = hashClear;
      Hash.prototype['delete'] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;

      module.exports = Hash;

      /***/
    },

  /***/ './node_modules/lodash/_ListCache.js':
    /*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var listCacheClear = __webpack_require__(
          /*! ./_listCacheClear */ './node_modules/lodash/_listCacheClear.js',
        ),
        listCacheDelete = __webpack_require__(
          /*! ./_listCacheDelete */ './node_modules/lodash/_listCacheDelete.js',
        ),
        listCacheGet = __webpack_require__(
          /*! ./_listCacheGet */ './node_modules/lodash/_listCacheGet.js',
        ),
        listCacheHas = __webpack_require__(
          /*! ./_listCacheHas */ './node_modules/lodash/_listCacheHas.js',
        ),
        listCacheSet = __webpack_require__(
          /*! ./_listCacheSet */ './node_modules/lodash/_listCacheSet.js',
        );

      /**
       * Creates an list cache object.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */
      function ListCache(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;

        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }

      // Add methods to `ListCache`.
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype['delete'] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;

      module.exports = ListCache;

      /***/
    },

  /***/ './node_modules/lodash/_Map.js':
    /*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var getNative = __webpack_require__(
          /*! ./_getNative */ './node_modules/lodash/_getNative.js',
        ),
        root = __webpack_require__(
          /*! ./_root */ './node_modules/lodash/_root.js',
        );

      /* Built-in method references that are verified to be native. */
      var Map = getNative(root, 'Map');

      module.exports = Map;

      /***/
    },

  /***/ './node_modules/lodash/_MapCache.js':
    /*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var mapCacheClear = __webpack_require__(
          /*! ./_mapCacheClear */ './node_modules/lodash/_mapCacheClear.js',
        ),
        mapCacheDelete = __webpack_require__(
          /*! ./_mapCacheDelete */ './node_modules/lodash/_mapCacheDelete.js',
        ),
        mapCacheGet = __webpack_require__(
          /*! ./_mapCacheGet */ './node_modules/lodash/_mapCacheGet.js',
        ),
        mapCacheHas = __webpack_require__(
          /*! ./_mapCacheHas */ './node_modules/lodash/_mapCacheHas.js',
        ),
        mapCacheSet = __webpack_require__(
          /*! ./_mapCacheSet */ './node_modules/lodash/_mapCacheSet.js',
        );

      /**
       * Creates a map cache object to store key-value pairs.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */
      function MapCache(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;

        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }

      // Add methods to `MapCache`.
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype['delete'] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;

      module.exports = MapCache;

      /***/
    },

  /***/ './node_modules/lodash/_SetCache.js':
    /*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var MapCache = __webpack_require__(
          /*! ./_MapCache */ './node_modules/lodash/_MapCache.js',
        ),
        setCacheAdd = __webpack_require__(
          /*! ./_setCacheAdd */ './node_modules/lodash/_setCacheAdd.js',
        ),
        setCacheHas = __webpack_require__(
          /*! ./_setCacheHas */ './node_modules/lodash/_setCacheHas.js',
        );

      /**
       *
       * Creates an array cache object to store unique values.
       *
       * @private
       * @constructor
       * @param {Array} [values] The values to cache.
       */
      function SetCache(values) {
        var index = -1,
          length = values == null ? 0 : values.length;

        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }

      // Add methods to `SetCache`.
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;

      module.exports = SetCache;

      /***/
    },

  /***/ './node_modules/lodash/_Symbol.js':
    /*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var root = __webpack_require__(
        /*! ./_root */ './node_modules/lodash/_root.js',
      );

      /** Built-in value references. */
      var Symbol = root.Symbol;

      module.exports = Symbol;

      /***/
    },

  /***/ './node_modules/lodash/_apply.js':
    /*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
    /***/ (module) => {
      /**
       * A faster alternative to `Function#apply`, this function invokes `func`
       * with the `this` binding of `thisArg` and the arguments of `args`.
       *
       * @private
       * @param {Function} func The function to invoke.
       * @param {*} thisArg The `this` binding of `func`.
       * @param {Array} args The arguments to invoke `func` with.
       * @returns {*} Returns the result of `func`.
       */
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }

      module.exports = apply;

      /***/
    },

  /***/ './node_modules/lodash/_arrayIncludes.js':
    /*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var baseIndexOf = __webpack_require__(
        /*! ./_baseIndexOf */ './node_modules/lodash/_baseIndexOf.js',
      );

      /**
       * A specialized version of `_.includes` for arrays without support for
       * specifying an index to search from.
       *
       * @private
       * @param {Array} [array] The array to inspect.
       * @param {*} target The value to search for.
       * @returns {boolean} Returns `true` if `target` is found, else `false`.
       */
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }

      module.exports = arrayIncludes;

      /***/
    },

  /***/ './node_modules/lodash/_arrayIncludesWith.js':
    /*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
    /***/ (module) => {
      /**
       * This function is like `arrayIncludes` except that it accepts a comparator.
       *
       * @private
       * @param {Array} [array] The array to inspect.
       * @param {*} target The value to search for.
       * @param {Function} comparator The comparator invoked per element.
       * @returns {boolean} Returns `true` if `target` is found, else `false`.
       */
      function arrayIncludesWith(array, value, comparator) {
        var index = -1,
          length = array == null ? 0 : array.length;

        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }

      module.exports = arrayIncludesWith;

      /***/
    },

  /***/ './node_modules/lodash/_arrayMap.js':
    /*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
    /***/ (module) => {
      /**
       * A specialized version of `_.map` for arrays without support for iteratee
       * shorthands.
       *
       * @private
       * @param {Array} [array] The array to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns the new mapped array.
       */
      function arrayMap(array, iteratee) {
        var index = -1,
          length = array == null ? 0 : array.length,
          result = Array(length);

        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }

      module.exports = arrayMap;

      /***/
    },

  /***/ './node_modules/lodash/_assocIndexOf.js':
    /*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var eq = __webpack_require__(/*! ./eq */ './node_modules/lodash/eq.js');

      /**
       * Gets the index at which the `key` is found in `array` of key-value pairs.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {*} key The key to search for.
       * @returns {number} Returns the index of the matched value, else `-1`.
       */
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }

      module.exports = assocIndexOf;

      /***/
    },

  /***/ './node_modules/lodash/_baseFindIndex.js':
    /*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
    /***/ (module) => {
      /**
       * The base implementation of `_.findIndex` and `_.findLastIndex` without
       * support for iteratee shorthands.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {Function} predicate The function invoked per iteration.
       * @param {number} fromIndex The index to search from.
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {number} Returns the index of the matched value, else `-1`.
       */
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length,
          index = fromIndex + (fromRight ? 1 : -1);

        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }

      module.exports = baseFindIndex;

      /***/
    },

  /***/ './node_modules/lodash/_baseGetTag.js':
    /*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var Symbol = __webpack_require__(
          /*! ./_Symbol */ './node_modules/lodash/_Symbol.js',
        ),
        getRawTag = __webpack_require__(
          /*! ./_getRawTag */ './node_modules/lodash/_getRawTag.js',
        ),
        objectToString = __webpack_require__(
          /*! ./_objectToString */ './node_modules/lodash/_objectToString.js',
        );

      /** `Object#toString` result references. */
      var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';

      /** Built-in value references. */
      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      /**
       * The base implementation of `getTag` without fallbacks for buggy environments.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the `toStringTag`.
       */
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value)
          ? getRawTag(value)
          : objectToString(value);
      }

      module.exports = baseGetTag;

      /***/
    },

  /***/ './node_modules/lodash/_baseIndexOf.js':
    /*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var baseFindIndex = __webpack_require__(
          /*! ./_baseFindIndex */ './node_modules/lodash/_baseFindIndex.js',
        ),
        baseIsNaN = __webpack_require__(
          /*! ./_baseIsNaN */ './node_modules/lodash/_baseIsNaN.js',
        ),
        strictIndexOf = __webpack_require__(
          /*! ./_strictIndexOf */ './node_modules/lodash/_strictIndexOf.js',
        );

      /**
       * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {*} value The value to search for.
       * @param {number} fromIndex The index to search from.
       * @returns {number} Returns the index of the matched value, else `-1`.
       */
      function baseIndexOf(array, value, fromIndex) {
        return value === value
          ? strictIndexOf(array, value, fromIndex)
          : baseFindIndex(array, baseIsNaN, fromIndex);
      }

      module.exports = baseIndexOf;

      /***/
    },

  /***/ './node_modules/lodash/_baseIntersection.js':
    /*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIntersection.js ***!
  \**************************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var SetCache = __webpack_require__(
          /*! ./_SetCache */ './node_modules/lodash/_SetCache.js',
        ),
        arrayIncludes = __webpack_require__(
          /*! ./_arrayIncludes */ './node_modules/lodash/_arrayIncludes.js',
        ),
        arrayIncludesWith = __webpack_require__(
          /*! ./_arrayIncludesWith */ './node_modules/lodash/_arrayIncludesWith.js',
        ),
        arrayMap = __webpack_require__(
          /*! ./_arrayMap */ './node_modules/lodash/_arrayMap.js',
        ),
        baseUnary = __webpack_require__(
          /*! ./_baseUnary */ './node_modules/lodash/_baseUnary.js',
        ),
        cacheHas = __webpack_require__(
          /*! ./_cacheHas */ './node_modules/lodash/_cacheHas.js',
        );

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeMin = Math.min;

      /**
       * The base implementation of methods like `_.intersection`, without support
       * for iteratee shorthands, that accepts an array of arrays to inspect.
       *
       * @private
       * @param {Array} arrays The arrays to inspect.
       * @param {Function} [iteratee] The iteratee invoked per element.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of shared values.
       */
      function baseIntersection(arrays, iteratee, comparator) {
        var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee) {
            array = arrayMap(array, baseUnary(iteratee));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] =
            !comparator && (iteratee || (length >= 120 && array.length >= 120))
              ? new SetCache(othIndex && array)
              : undefined;
        }
        array = arrays[0];

        var index = -1,
          seen = caches[0];

        outer: while (++index < length && result.length < maxLength) {
          var value = array[index],
            computed = iteratee ? iteratee(value) : value;

          value = comparator || value !== 0 ? value : 0;
          if (
            !(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator))
          ) {
            othIndex = othLength;
            while (--othIndex) {
              var cache = caches[othIndex];
              if (
                !(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
              ) {
                continue outer;
              }
            }
            if (seen) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
        return result;
      }

      module.exports = baseIntersection;

      /***/
    },

  /***/ './node_modules/lodash/_baseIsNaN.js':
    /*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
    /***/ (module) => {
      /**
       * The base implementation of `_.isNaN` without support for number objects.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
       */
      function baseIsNaN(value) {
        return value !== value;
      }

      module.exports = baseIsNaN;

      /***/
    },

  /***/ './node_modules/lodash/_baseIsNative.js':
    /*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var isFunction = __webpack_require__(
          /*! ./isFunction */ './node_modules/lodash/isFunction.js',
        ),
        isMasked = __webpack_require__(
          /*! ./_isMasked */ './node_modules/lodash/_isMasked.js',
        ),
        isObject = __webpack_require__(
          /*! ./isObject */ './node_modules/lodash/isObject.js',
        ),
        toSource = __webpack_require__(
          /*! ./_toSource */ './node_modules/lodash/_toSource.js',
        );

      /**
       * Used to match `RegExp`
       * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
       */
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

      /** Used to detect host constructors (Safari). */
      var reIsHostCtor = /^\[object .+?Constructor\]$/;

      /** Used for built-in method references. */
      var funcProto = Function.prototype,
        objectProto = Object.prototype;

      /** Used to resolve the decompiled source of functions. */
      var funcToString = funcProto.toString;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /** Used to detect if a method is native. */
      var reIsNative = RegExp(
        '^' +
          funcToString
            .call(hasOwnProperty)
            .replace(reRegExpChar, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?',
            ) +
          '$',
      );

      /**
       * The base implementation of `_.isNative` without bad shim checks.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a native function,
       *  else `false`.
       */
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }

      module.exports = baseIsNative;

      /***/
    },

  /***/ './node_modules/lodash/_baseRest.js':
    /*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var identity = __webpack_require__(
          /*! ./identity */ './node_modules/lodash/identity.js',
        ),
        overRest = __webpack_require__(
          /*! ./_overRest */ './node_modules/lodash/_overRest.js',
        ),
        setToString = __webpack_require__(
          /*! ./_setToString */ './node_modules/lodash/_setToString.js',
        );

      /**
       * The base implementation of `_.rest` which doesn't validate or coerce arguments.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @returns {Function} Returns the new function.
       */
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + '');
      }

      module.exports = baseRest;

      /***/
    },

  /***/ './node_modules/lodash/_baseSetToString.js':
    /*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var constant = __webpack_require__(
          /*! ./constant */ './node_modules/lodash/constant.js',
        ),
        defineProperty = __webpack_require__(
          /*! ./_defineProperty */ './node_modules/lodash/_defineProperty.js',
        ),
        identity = __webpack_require__(
          /*! ./identity */ './node_modules/lodash/identity.js',
        );

      /**
       * The base implementation of `setToString` without support for hot loop shorting.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */
      var baseSetToString = !defineProperty
        ? identity
        : function (func, string) {
            return defineProperty(func, 'toString', {
              configurable: true,
              enumerable: false,
              value: constant(string),
              writable: true,
            });
          };

      module.exports = baseSetToString;

      /***/
    },

  /***/ './node_modules/lodash/_baseUnary.js':
    /*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
    /***/ (module) => {
      /**
       * The base implementation of `_.unary` without support for storing metadata.
       *
       * @private
       * @param {Function} func The function to cap arguments for.
       * @returns {Function} Returns the new capped function.
       */
      function baseUnary(func) {
        return function (value) {
          return func(value);
        };
      }

      module.exports = baseUnary;

      /***/
    },

  /***/ './node_modules/lodash/_cacheHas.js':
    /*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
    /***/ (module) => {
      /**
       * Checks if a `cache` value for `key` exists.
       *
       * @private
       * @param {Object} cache The cache to query.
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      function cacheHas(cache, key) {
        return cache.has(key);
      }

      module.exports = cacheHas;

      /***/
    },

  /***/ './node_modules/lodash/_castArrayLikeObject.js':
    /*!*****************************************************!*\
  !*** ./node_modules/lodash/_castArrayLikeObject.js ***!
  \*****************************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var isArrayLikeObject = __webpack_require__(
        /*! ./isArrayLikeObject */ './node_modules/lodash/isArrayLikeObject.js',
      );

      /**
       * Casts `value` to an empty array if it's not an array like object.
       *
       * @private
       * @param {*} value The value to inspect.
       * @returns {Array|Object} Returns the cast array-like object.
       */
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }

      module.exports = castArrayLikeObject;

      /***/
    },

  /***/ './node_modules/lodash/_coreJsData.js':
    /*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var root = __webpack_require__(
        /*! ./_root */ './node_modules/lodash/_root.js',
      );

      /** Used to detect overreaching core-js shims. */
      var coreJsData = root['__core-js_shared__'];

      module.exports = coreJsData;

      /***/
    },

  /***/ './node_modules/lodash/_defineProperty.js':
    /*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var getNative = __webpack_require__(
        /*! ./_getNative */ './node_modules/lodash/_getNative.js',
      );

      var defineProperty = (function () {
        try {
          var func = getNative(Object, 'defineProperty');
          func({}, '', {});
          return func;
        } catch (e) {}
      })();

      module.exports = defineProperty;

      /***/
    },

  /***/ './node_modules/lodash/_freeGlobal.js':
    /*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      /** Detect free variable `global` from Node.js. */
      var freeGlobal =
        typeof __webpack_require__.g == 'object' &&
        __webpack_require__.g &&
        __webpack_require__.g.Object === Object &&
        __webpack_require__.g;

      module.exports = freeGlobal;

      /***/
    },

  /***/ './node_modules/lodash/_getMapData.js':
    /*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var isKeyable = __webpack_require__(
        /*! ./_isKeyable */ './node_modules/lodash/_isKeyable.js',
      );

      /**
       * Gets the data for `map`.
       *
       * @private
       * @param {Object} map The map to query.
       * @param {string} key The reference key.
       * @returns {*} Returns the map data.
       */
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key)
          ? data[typeof key == 'string' ? 'string' : 'hash']
          : data.map;
      }

      module.exports = getMapData;

      /***/
    },

  /***/ './node_modules/lodash/_getNative.js':
    /*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var baseIsNative = __webpack_require__(
          /*! ./_baseIsNative */ './node_modules/lodash/_baseIsNative.js',
        ),
        getValue = __webpack_require__(
          /*! ./_getValue */ './node_modules/lodash/_getValue.js',
        );

      /**
       * Gets the native function at `key` of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {string} key The key of the method to get.
       * @returns {*} Returns the function if it's native, else `undefined`.
       */
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined;
      }

      module.exports = getNative;

      /***/
    },

  /***/ './node_modules/lodash/_getRawTag.js':
    /*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var Symbol = __webpack_require__(
        /*! ./_Symbol */ './node_modules/lodash/_Symbol.js',
      );

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */
      var nativeObjectToString = objectProto.toString;

      /** Built-in value references. */
      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      /**
       * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the raw `toStringTag`.
       */
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) {}

        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }

      module.exports = getRawTag;

      /***/
    },

  /***/ './node_modules/lodash/_getValue.js':
    /*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
    /***/ (module) => {
      /**
       * Gets the value at `key` of `object`.
       *
       * @private
       * @param {Object} [object] The object to query.
       * @param {string} key The key of the property to get.
       * @returns {*} Returns the property value.
       */
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }

      module.exports = getValue;

      /***/
    },

  /***/ './node_modules/lodash/_hashClear.js':
    /*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var nativeCreate = __webpack_require__(
        /*! ./_nativeCreate */ './node_modules/lodash/_nativeCreate.js',
      );

      /**
       * Removes all key-value entries from the hash.
       *
       * @private
       * @name clear
       * @memberOf Hash
       */
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }

      module.exports = hashClear;

      /***/
    },

  /***/ './node_modules/lodash/_hashDelete.js':
    /*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
    /***/ (module) => {
      /**
       * Removes `key` and its value from the hash.
       *
       * @private
       * @name delete
       * @memberOf Hash
       * @param {Object} hash The hash to modify.
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }

      module.exports = hashDelete;

      /***/
    },

  /***/ './node_modules/lodash/_hashGet.js':
    /*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var nativeCreate = __webpack_require__(
        /*! ./_nativeCreate */ './node_modules/lodash/_nativeCreate.js',
      );

      /** Used to stand-in for `undefined` hash values. */
      var HASH_UNDEFINED = '__lodash_hash_undefined__';

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * Gets the hash value for `key`.
       *
       * @private
       * @name get
       * @memberOf Hash
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? undefined : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined;
      }

      module.exports = hashGet;

      /***/
    },

  /***/ './node_modules/lodash/_hashHas.js':
    /*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var nativeCreate = __webpack_require__(
        /*! ./_nativeCreate */ './node_modules/lodash/_nativeCreate.js',
      );

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * Checks if a hash value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf Hash
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate
          ? data[key] !== undefined
          : hasOwnProperty.call(data, key);
      }

      module.exports = hashHas;

      /***/
    },

  /***/ './node_modules/lodash/_hashSet.js':
    /*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var nativeCreate = __webpack_require__(
        /*! ./_nativeCreate */ './node_modules/lodash/_nativeCreate.js',
      );

      /** Used to stand-in for `undefined` hash values. */
      var HASH_UNDEFINED = '__lodash_hash_undefined__';

      /**
       * Sets the hash `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf Hash
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the hash instance.
       */
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] =
          nativeCreate && value === undefined ? HASH_UNDEFINED : value;
        return this;
      }

      module.exports = hashSet;

      /***/
    },

  /***/ './node_modules/lodash/_isKeyable.js':
    /*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
    /***/ (module) => {
      /**
       * Checks if `value` is suitable for use as unique object key.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
       */
      function isKeyable(value) {
        var type = typeof value;
        return type == 'string' ||
          type == 'number' ||
          type == 'symbol' ||
          type == 'boolean'
          ? value !== '__proto__'
          : value === null;
      }

      module.exports = isKeyable;

      /***/
    },

  /***/ './node_modules/lodash/_isMasked.js':
    /*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var coreJsData = __webpack_require__(
        /*! ./_coreJsData */ './node_modules/lodash/_coreJsData.js',
      );

      /** Used to detect methods masquerading as native. */
      var maskSrcKey = (function () {
        var uid = /[^.]+$/.exec(
          (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '',
        );
        return uid ? 'Symbol(src)_1.' + uid : '';
      })();

      /**
       * Checks if `func` has its source masked.
       *
       * @private
       * @param {Function} func The function to check.
       * @returns {boolean} Returns `true` if `func` is masked, else `false`.
       */
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }

      module.exports = isMasked;

      /***/
    },

  /***/ './node_modules/lodash/_listCacheClear.js':
    /*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
    /***/ (module) => {
      /**
       * Removes all key-value entries from the list cache.
       *
       * @private
       * @name clear
       * @memberOf ListCache
       */
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }

      module.exports = listCacheClear;

      /***/
    },

  /***/ './node_modules/lodash/_listCacheDelete.js':
    /*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var assocIndexOf = __webpack_require__(
        /*! ./_assocIndexOf */ './node_modules/lodash/_assocIndexOf.js',
      );

      /** Used for built-in method references. */
      var arrayProto = Array.prototype;

      /** Built-in value references. */
      var splice = arrayProto.splice;

      /**
       * Removes `key` and its value from the list cache.
       *
       * @private
       * @name delete
       * @memberOf ListCache
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      function listCacheDelete(key) {
        var data = this.__data__,
          index = assocIndexOf(data, key);

        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }

      module.exports = listCacheDelete;

      /***/
    },

  /***/ './node_modules/lodash/_listCacheGet.js':
    /*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var assocIndexOf = __webpack_require__(
        /*! ./_assocIndexOf */ './node_modules/lodash/_assocIndexOf.js',
      );

      /**
       * Gets the list cache value for `key`.
       *
       * @private
       * @name get
       * @memberOf ListCache
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      function listCacheGet(key) {
        var data = this.__data__,
          index = assocIndexOf(data, key);

        return index < 0 ? undefined : data[index][1];
      }

      module.exports = listCacheGet;

      /***/
    },

  /***/ './node_modules/lodash/_listCacheHas.js':
    /*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var assocIndexOf = __webpack_require__(
        /*! ./_assocIndexOf */ './node_modules/lodash/_assocIndexOf.js',
      );

      /**
       * Checks if a list cache value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf ListCache
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }

      module.exports = listCacheHas;

      /***/
    },

  /***/ './node_modules/lodash/_listCacheSet.js':
    /*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var assocIndexOf = __webpack_require__(
        /*! ./_assocIndexOf */ './node_modules/lodash/_assocIndexOf.js',
      );

      /**
       * Sets the list cache `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf ListCache
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the list cache instance.
       */
      function listCacheSet(key, value) {
        var data = this.__data__,
          index = assocIndexOf(data, key);

        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }

      module.exports = listCacheSet;

      /***/
    },

  /***/ './node_modules/lodash/_mapCacheClear.js':
    /*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var Hash = __webpack_require__(
          /*! ./_Hash */ './node_modules/lodash/_Hash.js',
        ),
        ListCache = __webpack_require__(
          /*! ./_ListCache */ './node_modules/lodash/_ListCache.js',
        ),
        Map = __webpack_require__(
          /*! ./_Map */ './node_modules/lodash/_Map.js',
        );

      /**
       * Removes all key-value entries from the map.
       *
       * @private
       * @name clear
       * @memberOf MapCache
       */
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          hash: new Hash(),
          map: new (Map || ListCache)(),
          string: new Hash(),
        };
      }

      module.exports = mapCacheClear;

      /***/
    },

  /***/ './node_modules/lodash/_mapCacheDelete.js':
    /*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var getMapData = __webpack_require__(
        /*! ./_getMapData */ './node_modules/lodash/_getMapData.js',
      );

      /**
       * Removes `key` and its value from the map.
       *
       * @private
       * @name delete
       * @memberOf MapCache
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      function mapCacheDelete(key) {
        var result = getMapData(this, key)['delete'](key);
        this.size -= result ? 1 : 0;
        return result;
      }

      module.exports = mapCacheDelete;

      /***/
    },

  /***/ './node_modules/lodash/_mapCacheGet.js':
    /*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var getMapData = __webpack_require__(
        /*! ./_getMapData */ './node_modules/lodash/_getMapData.js',
      );

      /**
       * Gets the map value for `key`.
       *
       * @private
       * @name get
       * @memberOf MapCache
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }

      module.exports = mapCacheGet;

      /***/
    },

  /***/ './node_modules/lodash/_mapCacheHas.js':
    /*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var getMapData = __webpack_require__(
        /*! ./_getMapData */ './node_modules/lodash/_getMapData.js',
      );

      /**
       * Checks if a map value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf MapCache
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }

      module.exports = mapCacheHas;

      /***/
    },

  /***/ './node_modules/lodash/_mapCacheSet.js':
    /*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var getMapData = __webpack_require__(
        /*! ./_getMapData */ './node_modules/lodash/_getMapData.js',
      );

      /**
       * Sets the map `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf MapCache
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the map cache instance.
       */
      function mapCacheSet(key, value) {
        var data = getMapData(this, key),
          size = data.size;

        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }

      module.exports = mapCacheSet;

      /***/
    },

  /***/ './node_modules/lodash/_nativeCreate.js':
    /*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var getNative = __webpack_require__(
        /*! ./_getNative */ './node_modules/lodash/_getNative.js',
      );

      /* Built-in method references that are verified to be native. */
      var nativeCreate = getNative(Object, 'create');

      module.exports = nativeCreate;

      /***/
    },

  /***/ './node_modules/lodash/_objectToString.js':
    /*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
    /***/ (module) => {
      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */
      var nativeObjectToString = objectProto.toString;

      /**
       * Converts `value` to a string using `Object.prototype.toString`.
       *
       * @private
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       */
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }

      module.exports = objectToString;

      /***/
    },

  /***/ './node_modules/lodash/_overRest.js':
    /*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var apply = __webpack_require__(
        /*! ./_apply */ './node_modules/lodash/_apply.js',
      );

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeMax = Math.max;

      /**
       * A specialized version of `baseRest` which transforms the rest array.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @param {Function} transform The rest array transform.
       * @returns {Function} Returns the new function.
       */
      function overRest(func, start, transform) {
        start = nativeMax(start === undefined ? func.length - 1 : start, 0);
        return function () {
          var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }

      module.exports = overRest;

      /***/
    },

  /***/ './node_modules/lodash/_root.js':
    /*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var freeGlobal = __webpack_require__(
        /*! ./_freeGlobal */ './node_modules/lodash/_freeGlobal.js',
      );

      /** Detect free variable `self`. */
      var freeSelf =
        typeof self == 'object' && self && self.Object === Object && self;

      /** Used as a reference to the global object. */
      var root = freeGlobal || freeSelf || Function('return this')();

      module.exports = root;

      /***/
    },

  /***/ './node_modules/lodash/_setCacheAdd.js':
    /*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
    /***/ (module) => {
      /** Used to stand-in for `undefined` hash values. */
      var HASH_UNDEFINED = '__lodash_hash_undefined__';

      /**
       * Adds `value` to the array cache.
       *
       * @private
       * @name add
       * @memberOf SetCache
       * @alias push
       * @param {*} value The value to cache.
       * @returns {Object} Returns the cache instance.
       */
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }

      module.exports = setCacheAdd;

      /***/
    },

  /***/ './node_modules/lodash/_setCacheHas.js':
    /*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
    /***/ (module) => {
      /**
       * Checks if `value` is in the array cache.
       *
       * @private
       * @name has
       * @memberOf SetCache
       * @param {*} value The value to search for.
       * @returns {number} Returns `true` if `value` is found, else `false`.
       */
      function setCacheHas(value) {
        return this.__data__.has(value);
      }

      module.exports = setCacheHas;

      /***/
    },

  /***/ './node_modules/lodash/_setToString.js':
    /*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var baseSetToString = __webpack_require__(
          /*! ./_baseSetToString */ './node_modules/lodash/_baseSetToString.js',
        ),
        shortOut = __webpack_require__(
          /*! ./_shortOut */ './node_modules/lodash/_shortOut.js',
        );

      /**
       * Sets the `toString` method of `func` to return `string`.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */
      var setToString = shortOut(baseSetToString);

      module.exports = setToString;

      /***/
    },

  /***/ './node_modules/lodash/_shortOut.js':
    /*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
    /***/ (module) => {
      /** Used to detect hot functions by number of calls within a span of milliseconds. */
      var HOT_COUNT = 800,
        HOT_SPAN = 16;

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeNow = Date.now;

      /**
       * Creates a function that'll short out and invoke `identity` instead
       * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
       * milliseconds.
       *
       * @private
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new shortable function.
       */
      function shortOut(func) {
        var count = 0,
          lastCalled = 0;

        return function () {
          var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined, arguments);
        };
      }

      module.exports = shortOut;

      /***/
    },

  /***/ './node_modules/lodash/_strictIndexOf.js':
    /*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
    /***/ (module) => {
      /**
       * A specialized version of `_.indexOf` which performs strict equality
       * comparisons of values, i.e. `===`.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {*} value The value to search for.
       * @param {number} fromIndex The index to search from.
       * @returns {number} Returns the index of the matched value, else `-1`.
       */
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1,
          length = array.length;

        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }

      module.exports = strictIndexOf;

      /***/
    },

  /***/ './node_modules/lodash/_toSource.js':
    /*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
    /***/ (module) => {
      /** Used for built-in method references. */
      var funcProto = Function.prototype;

      /** Used to resolve the decompiled source of functions. */
      var funcToString = funcProto.toString;

      /**
       * Converts `func` to its source code.
       *
       * @private
       * @param {Function} func The function to convert.
       * @returns {string} Returns the source code.
       */
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {}
          try {
            return func + '';
          } catch (e) {}
        }
        return '';
      }

      module.exports = toSource;

      /***/
    },

  /***/ './node_modules/lodash/constant.js':
    /*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
    /***/ (module) => {
      /**
       * Creates a function that returns `value`.
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Util
       * @param {*} value The value to return from the new function.
       * @returns {Function} Returns the new constant function.
       * @example
       *
       * var objects = _.times(2, _.constant({ 'a': 1 }));
       *
       * console.log(objects);
       * // => [{ 'a': 1 }, { 'a': 1 }]
       *
       * console.log(objects[0] === objects[1]);
       * // => true
       */
      function constant(value) {
        return function () {
          return value;
        };
      }

      module.exports = constant;

      /***/
    },

  /***/ './node_modules/lodash/eq.js':
    /*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
    /***/ (module) => {
      /**
       * Performs a
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * comparison between two values to determine if they are equivalent.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       * @example
       *
       * var object = { 'a': 1 };
       * var other = { 'a': 1 };
       *
       * _.eq(object, object);
       * // => true
       *
       * _.eq(object, other);
       * // => false
       *
       * _.eq('a', 'a');
       * // => true
       *
       * _.eq('a', Object('a'));
       * // => false
       *
       * _.eq(NaN, NaN);
       * // => true
       */
      function eq(value, other) {
        return value === other || (value !== value && other !== other);
      }

      module.exports = eq;

      /***/
    },

  /***/ './node_modules/lodash/identity.js':
    /*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
    /***/ (module) => {
      /**
       * This method returns the first argument it receives.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {*} value Any value.
       * @returns {*} Returns `value`.
       * @example
       *
       * var object = { 'a': 1 };
       *
       * console.log(_.identity(object) === object);
       * // => true
       */
      function identity(value) {
        return value;
      }

      module.exports = identity;

      /***/
    },

  /***/ './node_modules/lodash/intersection.js':
    /*!*********************************************!*\
  !*** ./node_modules/lodash/intersection.js ***!
  \*********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var arrayMap = __webpack_require__(
          /*! ./_arrayMap */ './node_modules/lodash/_arrayMap.js',
        ),
        baseIntersection = __webpack_require__(
          /*! ./_baseIntersection */ './node_modules/lodash/_baseIntersection.js',
        ),
        baseRest = __webpack_require__(
          /*! ./_baseRest */ './node_modules/lodash/_baseRest.js',
        ),
        castArrayLikeObject = __webpack_require__(
          /*! ./_castArrayLikeObject */ './node_modules/lodash/_castArrayLikeObject.js',
        );

      /**
       * Creates an array of unique values that are included in all given arrays
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons. The order and references of result values are
       * determined by the first array.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @returns {Array} Returns the new array of intersecting values.
       * @example
       *
       * _.intersection([2, 1], [2, 3]);
       * // => [2]
       */
      var intersection = baseRest(function (arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0]
          ? baseIntersection(mapped)
          : [];
      });

      module.exports = intersection;

      /***/
    },

  /***/ './node_modules/lodash/isArrayLike.js':
    /*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var isFunction = __webpack_require__(
          /*! ./isFunction */ './node_modules/lodash/isFunction.js',
        ),
        isLength = __webpack_require__(
          /*! ./isLength */ './node_modules/lodash/isLength.js',
        );

      /**
       * Checks if `value` is array-like. A value is considered array-like if it's
       * not a function and has a `value.length` that's an integer greater than or
       * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
       * @example
       *
       * _.isArrayLike([1, 2, 3]);
       * // => true
       *
       * _.isArrayLike(document.body.children);
       * // => true
       *
       * _.isArrayLike('abc');
       * // => true
       *
       * _.isArrayLike(_.noop);
       * // => false
       */
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }

      module.exports = isArrayLike;

      /***/
    },

  /***/ './node_modules/lodash/isArrayLikeObject.js':
    /*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var isArrayLike = __webpack_require__(
          /*! ./isArrayLike */ './node_modules/lodash/isArrayLike.js',
        ),
        isObjectLike = __webpack_require__(
          /*! ./isObjectLike */ './node_modules/lodash/isObjectLike.js',
        );

      /**
       * This method is like `_.isArrayLike` except that it also checks if `value`
       * is an object.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array-like object,
       *  else `false`.
       * @example
       *
       * _.isArrayLikeObject([1, 2, 3]);
       * // => true
       *
       * _.isArrayLikeObject(document.body.children);
       * // => true
       *
       * _.isArrayLikeObject('abc');
       * // => false
       *
       * _.isArrayLikeObject(_.noop);
       * // => false
       */
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }

      module.exports = isArrayLikeObject;

      /***/
    },

  /***/ './node_modules/lodash/isFunction.js':
    /*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var baseGetTag = __webpack_require__(
          /*! ./_baseGetTag */ './node_modules/lodash/_baseGetTag.js',
        ),
        isObject = __webpack_require__(
          /*! ./isObject */ './node_modules/lodash/isObject.js',
        );

      /** `Object#toString` result references. */
      var asyncTag = '[object AsyncFunction]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        proxyTag = '[object Proxy]';

      /**
       * Checks if `value` is classified as a `Function` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a function, else `false`.
       * @example
       *
       * _.isFunction(_);
       * // => true
       *
       * _.isFunction(/abc/);
       * // => false
       */
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.
        var tag = baseGetTag(value);
        return (
          tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
        );
      }

      module.exports = isFunction;

      /***/
    },

  /***/ './node_modules/lodash/isLength.js':
    /*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
    /***/ (module) => {
      /** Used as references for various `Number` constants. */
      var MAX_SAFE_INTEGER = 9007199254740991;

      /**
       * Checks if `value` is a valid array-like length.
       *
       * **Note:** This method is loosely based on
       * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
       * @example
       *
       * _.isLength(3);
       * // => true
       *
       * _.isLength(Number.MIN_VALUE);
       * // => false
       *
       * _.isLength(Infinity);
       * // => false
       *
       * _.isLength('3');
       * // => false
       */
      function isLength(value) {
        return (
          typeof value == 'number' &&
          value > -1 &&
          value % 1 == 0 &&
          value <= MAX_SAFE_INTEGER
        );
      }

      module.exports = isLength;

      /***/
    },

  /***/ './node_modules/lodash/isNil.js':
    /*!**************************************!*\
  !*** ./node_modules/lodash/isNil.js ***!
  \**************************************/
    /***/ (module) => {
      /**
       * Checks if `value` is `null` or `undefined`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
       * @example
       *
       * _.isNil(null);
       * // => true
       *
       * _.isNil(void 0);
       * // => true
       *
       * _.isNil(NaN);
       * // => false
       */
      function isNil(value) {
        return value == null;
      }

      module.exports = isNil;

      /***/
    },

  /***/ './node_modules/lodash/isNumber.js':
    /*!*****************************************!*\
  !*** ./node_modules/lodash/isNumber.js ***!
  \*****************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      var baseGetTag = __webpack_require__(
          /*! ./_baseGetTag */ './node_modules/lodash/_baseGetTag.js',
        ),
        isObjectLike = __webpack_require__(
          /*! ./isObjectLike */ './node_modules/lodash/isObjectLike.js',
        );

      /** `Object#toString` result references. */
      var numberTag = '[object Number]';

      /**
       * Checks if `value` is classified as a `Number` primitive or object.
       *
       * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
       * classified as numbers, use the `_.isFinite` method.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a number, else `false`.
       * @example
       *
       * _.isNumber(3);
       * // => true
       *
       * _.isNumber(Number.MIN_VALUE);
       * // => true
       *
       * _.isNumber(Infinity);
       * // => true
       *
       * _.isNumber('3');
       * // => false
       */
      function isNumber(value) {
        return (
          typeof value == 'number' ||
          (isObjectLike(value) && baseGetTag(value) == numberTag)
        );
      }

      module.exports = isNumber;

      /***/
    },

  /***/ './node_modules/lodash/isObject.js':
    /*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
    /***/ (module) => {
      /**
       * Checks if `value` is the
       * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
       * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an object, else `false`.
       * @example
       *
       * _.isObject({});
       * // => true
       *
       * _.isObject([1, 2, 3]);
       * // => true
       *
       * _.isObject(_.noop);
       * // => true
       *
       * _.isObject(null);
       * // => false
       */
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
      }

      module.exports = isObject;

      /***/
    },

  /***/ './node_modules/lodash/isObjectLike.js':
    /*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
    /***/ (module) => {
      /**
       * Checks if `value` is object-like. A value is object-like if it's not `null`
       * and has a `typeof` result of "object".
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
       * @example
       *
       * _.isObjectLike({});
       * // => true
       *
       * _.isObjectLike([1, 2, 3]);
       * // => true
       *
       * _.isObjectLike(_.noop);
       * // => false
       *
       * _.isObjectLike(null);
       * // => false
       */
      function isObjectLike(value) {
        return value != null && typeof value == 'object';
      }

      module.exports = isObjectLike;

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/NotificationFactories.js':
    /*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js ***!
  \***********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ COMPLETE_NOTIFICATION: () =>
          /* binding */ COMPLETE_NOTIFICATION,
        /* harmony export */ createNotification: () =>
          /* binding */ createNotification,
        /* harmony export */ errorNotification: () =>
          /* binding */ errorNotification,
        /* harmony export */ nextNotification: () =>
          /* binding */ nextNotification,
        /* harmony export */
      });
      var COMPLETE_NOTIFICATION = (function () {
        return createNotification('C', undefined, undefined);
      })();
      function errorNotification(error) {
        return createNotification('E', undefined, error);
      }
      function nextNotification(value) {
        return createNotification('N', value, undefined);
      }
      function createNotification(kind, value, error) {
        return {
          kind: kind,
          value: value,
          error: error,
        };
      }
      //# sourceMappingURL=NotificationFactories.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/Observable.js':
    /*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Observable.js ***!
  \************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Observable: () => /* binding */ Observable,
        /* harmony export */
      });
      /* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./Subscriber */ './node_modules/rxjs/dist/esm5/internal/Subscriber.js',
        );
      /* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! ./Subscription */ './node_modules/rxjs/dist/esm5/internal/Subscription.js',
        );
      /* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./symbol/observable */ './node_modules/rxjs/dist/esm5/internal/symbol/observable.js',
        );
      /* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ./util/pipe */ './node_modules/rxjs/dist/esm5/internal/util/pipe.js',
        );
      /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ./config */ './node_modules/rxjs/dist/esm5/internal/config.js',
        );
      /* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! ./util/isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );
      /* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./util/errorContext */ './node_modules/rxjs/dist/esm5/internal/util/errorContext.js',
        );

      var Observable = (function () {
        function Observable(subscribe) {
          if (subscribe) {
            this._subscribe = subscribe;
          }
        }
        Observable.prototype.lift = function (operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
        };
        Observable.prototype.subscribe = function (
          observerOrNext,
          error,
          complete,
        ) {
          var _this = this;
          var subscriber = isSubscriber(observerOrNext)
            ? observerOrNext
            : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(
                observerOrNext,
                error,
                complete,
              );
          (0, _util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(
            function () {
              var _a = _this,
                operator = _a.operator,
                source = _a.source;
              subscriber.add(
                operator
                  ? operator.call(subscriber, source)
                  : source
                    ? _this._subscribe(subscriber)
                    : _this._trySubscribe(subscriber),
              );
            },
          );
          return subscriber;
        };
        Observable.prototype._trySubscribe = function (sink) {
          try {
            return this._subscribe(sink);
          } catch (err) {
            sink.error(err);
          }
        };
        Observable.prototype.forEach = function (next, promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var subscriber =
              new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
                next: function (value) {
                  try {
                    next(value);
                  } catch (err) {
                    reject(err);
                    subscriber.unsubscribe();
                  }
                },
                error: reject,
                complete: resolve,
              });
            _this.subscribe(subscriber);
          });
        };
        Observable.prototype._subscribe = function (subscriber) {
          var _a;
          return (_a = this.source) === null || _a === void 0
            ? void 0
            : _a.subscribe(subscriber);
        };
        Observable.prototype[
          _symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable
        ] = function () {
          return this;
        };
        Observable.prototype.pipe = function () {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
          }
          return (0, _util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(
            operations,
          )(this);
        };
        Observable.prototype.toPromise = function (promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(
              function (x) {
                return (value = x);
              },
              function (err) {
                return reject(err);
              },
              function () {
                return resolve(value);
              },
            );
          });
        };
        Observable.create = function (subscribe) {
          return new Observable(subscribe);
        };
        return Observable;
      })();

      function getPromiseCtor(promiseCtor) {
        var _a;
        return (_a =
          promiseCtor !== null && promiseCtor !== void 0
            ? promiseCtor
            : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null &&
          _a !== void 0
          ? _a
          : Promise;
      }
      function isObserver(value) {
        return (
          value &&
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(
            value.next,
          ) &&
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(
            value.error,
          ) &&
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(
            value.complete,
          )
        );
      }
      function isSubscriber(value) {
        return (
          (value &&
            value instanceof
              _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) ||
          (isObserver(value) &&
            (0, _Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(
              value,
            ))
        );
      }
      //# sourceMappingURL=Observable.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/Scheduler.js':
    /*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Scheduler.js ***!
  \***********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Scheduler: () => /* binding */ Scheduler,
        /* harmony export */
      });
      /* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./scheduler/dateTimestampProvider */ './node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js',
        );

      var Scheduler = (function () {
        function Scheduler(schedulerActionCtor, now) {
          if (now === void 0) {
            now = Scheduler.now;
          }
          this.schedulerActionCtor = schedulerActionCtor;
          this.now = now;
        }
        Scheduler.prototype.schedule = function (work, delay, state) {
          if (delay === void 0) {
            delay = 0;
          }
          return new this.schedulerActionCtor(this, work).schedule(
            state,
            delay,
          );
        };
        Scheduler.now =
          _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;
        return Scheduler;
      })();

      //# sourceMappingURL=Scheduler.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/Subject.js':
    /*!*********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subject.js ***!
  \*********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ AnonymousSubject: () =>
          /* binding */ AnonymousSubject,
        /* harmony export */ Subject: () => /* binding */ Subject,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');
      /* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! ./Observable */ './node_modules/rxjs/dist/esm5/internal/Observable.js',
        );
      /* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ./Subscription */ './node_modules/rxjs/dist/esm5/internal/Subscription.js',
        );
      /* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./util/ObjectUnsubscribedError */ './node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js',
        );
      /* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ./util/arrRemove */ './node_modules/rxjs/dist/esm5/internal/util/arrRemove.js',
        );
      /* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./util/errorContext */ './node_modules/rxjs/dist/esm5/internal/util/errorContext.js',
        );

      var Subject = (function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subject, _super);
        function Subject() {
          var _this = _super.call(this) || this;
          _this.closed = false;
          _this.currentObservers = null;
          _this.observers = [];
          _this.isStopped = false;
          _this.hasError = false;
          _this.thrownError = null;
          return _this;
        }
        Subject.prototype.lift = function (operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
        };
        Subject.prototype._throwIfClosed = function () {
          if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
          }
        };
        Subject.prototype.next = function (value) {
          var _this = this;
          (0, _util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(
            function () {
              var e_1, _a;
              _this._throwIfClosed();
              if (!_this.isStopped) {
                if (!_this.currentObservers) {
                  _this.currentObservers = Array.from(_this.observers);
                }
                try {
                  for (
                    var _b = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(
                        _this.currentObservers,
                      ),
                      _c = _b.next();
                    !_c.done;
                    _c = _b.next()
                  ) {
                    var observer = _c.value;
                    observer.next(value);
                  }
                } catch (e_1_1) {
                  e_1 = { error: e_1_1 };
                } finally {
                  try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                  } finally {
                    if (e_1) throw e_1.error;
                  }
                }
              }
            },
          );
        };
        Subject.prototype.error = function (err) {
          var _this = this;
          (0, _util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(
            function () {
              _this._throwIfClosed();
              if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                  observers.shift().error(err);
                }
              }
            },
          );
        };
        Subject.prototype.complete = function () {
          var _this = this;
          (0, _util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(
            function () {
              _this._throwIfClosed();
              if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                  observers.shift().complete();
                }
              }
            },
          );
        };
        Subject.prototype.unsubscribe = function () {
          this.isStopped = this.closed = true;
          this.observers = this.currentObservers = null;
        };
        Object.defineProperty(Subject.prototype, 'observed', {
          get: function () {
            var _a;
            return (
              ((_a = this.observers) === null || _a === void 0
                ? void 0
                : _a.length) > 0
            );
          },
          enumerable: false,
          configurable: true,
        });
        Subject.prototype._trySubscribe = function (subscriber) {
          this._throwIfClosed();
          return _super.prototype._trySubscribe.call(this, subscriber);
        };
        Subject.prototype._subscribe = function (subscriber) {
          this._throwIfClosed();
          this._checkFinalizedStatuses(subscriber);
          return this._innerSubscribe(subscriber);
        };
        Subject.prototype._innerSubscribe = function (subscriber) {
          var _this = this;
          var _a = this,
            hasError = _a.hasError,
            isStopped = _a.isStopped,
            observers = _a.observers;
          if (hasError || isStopped) {
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
          }
          this.currentObservers = null;
          observers.push(subscriber);
          return new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(
            function () {
              _this.currentObservers = null;
              (0, _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__.arrRemove)(
                observers,
                subscriber,
              );
            },
          );
        };
        Subject.prototype._checkFinalizedStatuses = function (subscriber) {
          var _a = this,
            hasError = _a.hasError,
            thrownError = _a.thrownError,
            isStopped = _a.isStopped;
          if (hasError) {
            subscriber.error(thrownError);
          } else if (isStopped) {
            subscriber.complete();
          }
        };
        Subject.prototype.asObservable = function () {
          var observable =
            new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable();
          observable.source = this;
          return observable;
        };
        Subject.create = function (destination, source) {
          return new AnonymousSubject(destination, source);
        };
        return Subject;
      })(_Observable__WEBPACK_IMPORTED_MODULE_5__.Observable);

      var AnonymousSubject = (function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(
          AnonymousSubject,
          _super,
        );
        function AnonymousSubject(destination, source) {
          var _this = _super.call(this) || this;
          _this.destination = destination;
          _this.source = source;
          return _this;
        }
        AnonymousSubject.prototype.next = function (value) {
          var _a, _b;
          (_b =
            (_a = this.destination) === null || _a === void 0
              ? void 0
              : _a.next) === null || _b === void 0
            ? void 0
            : _b.call(_a, value);
        };
        AnonymousSubject.prototype.error = function (err) {
          var _a, _b;
          (_b =
            (_a = this.destination) === null || _a === void 0
              ? void 0
              : _a.error) === null || _b === void 0
            ? void 0
            : _b.call(_a, err);
        };
        AnonymousSubject.prototype.complete = function () {
          var _a, _b;
          (_b =
            (_a = this.destination) === null || _a === void 0
              ? void 0
              : _a.complete) === null || _b === void 0
            ? void 0
            : _b.call(_a);
        };
        AnonymousSubject.prototype._subscribe = function (subscriber) {
          var _a, _b;
          return (_b =
            (_a = this.source) === null || _a === void 0
              ? void 0
              : _a.subscribe(subscriber)) !== null && _b !== void 0
            ? _b
            : _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
        };
        return AnonymousSubject;
      })(Subject);

      //# sourceMappingURL=Subject.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/Subscriber.js':
    /*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscriber.js ***!
  \************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ EMPTY_OBSERVER: () => /* binding */ EMPTY_OBSERVER,
        /* harmony export */ SafeSubscriber: () => /* binding */ SafeSubscriber,
        /* harmony export */ Subscriber: () => /* binding */ Subscriber,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');
      /* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ./util/isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );
      /* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./Subscription */ './node_modules/rxjs/dist/esm5/internal/Subscription.js',
        );
      /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ./config */ './node_modules/rxjs/dist/esm5/internal/config.js',
        );
      /* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! ./util/reportUnhandledError */ './node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js',
        );
      /* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_8__ =
        __webpack_require__(
          /*! ./util/noop */ './node_modules/rxjs/dist/esm5/internal/util/noop.js',
        );
      /* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./NotificationFactories */ './node_modules/rxjs/dist/esm5/internal/NotificationFactories.js',
        );
      /* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(
          /*! ./scheduler/timeoutProvider */ './node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js',
        );
      /* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! ./util/errorContext */ './node_modules/rxjs/dist/esm5/internal/util/errorContext.js',
        );

      var Subscriber = (function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subscriber, _super);
        function Subscriber(destination) {
          var _this = _super.call(this) || this;
          _this.isStopped = false;
          if (destination) {
            _this.destination = destination;
            if (
              (0, _Subscription__WEBPACK_IMPORTED_MODULE_1__.isSubscription)(
                destination,
              )
            ) {
              destination.add(_this);
            }
          } else {
            _this.destination = EMPTY_OBSERVER;
          }
          return _this;
        }
        Subscriber.create = function (next, error, complete) {
          return new SafeSubscriber(next, error, complete);
        };
        Subscriber.prototype.next = function (value) {
          if (this.isStopped) {
            handleStoppedNotification(
              (0,
              _NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.nextNotification)(
                value,
              ),
              this,
            );
          } else {
            this._next(value);
          }
        };
        Subscriber.prototype.error = function (err) {
          if (this.isStopped) {
            handleStoppedNotification(
              (0,
              _NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.errorNotification)(
                err,
              ),
              this,
            );
          } else {
            this.isStopped = true;
            this._error(err);
          }
        };
        Subscriber.prototype.complete = function () {
          if (this.isStopped) {
            handleStoppedNotification(
              _NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.COMPLETE_NOTIFICATION,
              this,
            );
          } else {
            this.isStopped = true;
            this._complete();
          }
        };
        Subscriber.prototype.unsubscribe = function () {
          if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
          }
        };
        Subscriber.prototype._next = function (value) {
          this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
          try {
            this.destination.error(err);
          } finally {
            this.unsubscribe();
          }
        };
        Subscriber.prototype._complete = function () {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        };
        return Subscriber;
      })(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription);

      var _bind = Function.prototype.bind;
      function bind(fn, thisArg) {
        return _bind.call(fn, thisArg);
      }
      var ConsumerObserver = (function () {
        function ConsumerObserver(partialObserver) {
          this.partialObserver = partialObserver;
        }
        ConsumerObserver.prototype.next = function (value) {
          var partialObserver = this.partialObserver;
          if (partialObserver.next) {
            try {
              partialObserver.next(value);
            } catch (error) {
              handleUnhandledError(error);
            }
          }
        };
        ConsumerObserver.prototype.error = function (err) {
          var partialObserver = this.partialObserver;
          if (partialObserver.error) {
            try {
              partialObserver.error(err);
            } catch (error) {
              handleUnhandledError(error);
            }
          } else {
            handleUnhandledError(err);
          }
        };
        ConsumerObserver.prototype.complete = function () {
          var partialObserver = this.partialObserver;
          if (partialObserver.complete) {
            try {
              partialObserver.complete();
            } catch (error) {
              handleUnhandledError(error);
            }
          }
        };
        return ConsumerObserver;
      })();
      var SafeSubscriber = (function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(
          SafeSubscriber,
          _super,
        );
        function SafeSubscriber(observerOrNext, error, complete) {
          var _this = _super.call(this) || this;
          var partialObserver;
          if (
            (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(
              observerOrNext,
            ) ||
            !observerOrNext
          ) {
            partialObserver = {
              next:
                observerOrNext !== null && observerOrNext !== void 0
                  ? observerOrNext
                  : undefined,
              error: error !== null && error !== void 0 ? error : undefined,
              complete:
                complete !== null && complete !== void 0 ? complete : undefined,
            };
          } else {
            var context_1;
            if (
              _this &&
              _config__WEBPACK_IMPORTED_MODULE_4__.config
                .useDeprecatedNextContext
            ) {
              context_1 = Object.create(observerOrNext);
              context_1.unsubscribe = function () {
                return _this.unsubscribe();
              };
              partialObserver = {
                next:
                  observerOrNext.next && bind(observerOrNext.next, context_1),
                error:
                  observerOrNext.error && bind(observerOrNext.error, context_1),
                complete:
                  observerOrNext.complete &&
                  bind(observerOrNext.complete, context_1),
              };
            } else {
              partialObserver = observerOrNext;
            }
          }
          _this.destination = new ConsumerObserver(partialObserver);
          return _this;
        }
        return SafeSubscriber;
      })(Subscriber);

      function handleUnhandledError(error) {
        if (
          _config__WEBPACK_IMPORTED_MODULE_4__.config
            .useDeprecatedSynchronousErrorHandling
        ) {
          (0, _util_errorContext__WEBPACK_IMPORTED_MODULE_5__.captureError)(
            error,
          );
        } else {
          (0,
          _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__.reportUnhandledError)(
            error,
          );
        }
      }
      function defaultErrorHandler(err) {
        throw err;
      }
      function handleStoppedNotification(notification, subscriber) {
        var onStoppedNotification =
          _config__WEBPACK_IMPORTED_MODULE_4__.config.onStoppedNotification;
        onStoppedNotification &&
          _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__.timeoutProvider.setTimeout(
            function () {
              return onStoppedNotification(notification, subscriber);
            },
          );
      }
      var EMPTY_OBSERVER = {
        closed: true,
        next: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,
        error: defaultErrorHandler,
        complete: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,
      };
      //# sourceMappingURL=Subscriber.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/Subscription.js':
    /*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscription.js ***!
  \**************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ EMPTY_SUBSCRIPTION: () =>
          /* binding */ EMPTY_SUBSCRIPTION,
        /* harmony export */ Subscription: () => /* binding */ Subscription,
        /* harmony export */ isSubscription: () => /* binding */ isSubscription,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');
      /* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./util/isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );
      /* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./util/UnsubscriptionError */ './node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js',
        );
      /* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ./util/arrRemove */ './node_modules/rxjs/dist/esm5/internal/util/arrRemove.js',
        );

      var Subscription = (function () {
        function Subscription(initialTeardown) {
          this.initialTeardown = initialTeardown;
          this.closed = false;
          this._parentage = null;
          this._finalizers = null;
        }
        Subscription.prototype.unsubscribe = function () {
          var e_1, _a, e_2, _b;
          var errors;
          if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
              this._parentage = null;
              if (Array.isArray(_parentage)) {
                try {
                  for (
                    var _parentage_1 = (0,
                      tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_parentage),
                      _parentage_1_1 = _parentage_1.next();
                    !_parentage_1_1.done;
                    _parentage_1_1 = _parentage_1.next()
                  ) {
                    var parent_1 = _parentage_1_1.value;
                    parent_1.remove(this);
                  }
                } catch (e_1_1) {
                  e_1 = { error: e_1_1 };
                } finally {
                  try {
                    if (
                      _parentage_1_1 &&
                      !_parentage_1_1.done &&
                      (_a = _parentage_1.return)
                    )
                      _a.call(_parentage_1);
                  } finally {
                    if (e_1) throw e_1.error;
                  }
                }
              } else {
                _parentage.remove(this);
              }
            }
            var initialFinalizer = this.initialTeardown;
            if (
              (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(
                initialFinalizer,
              )
            ) {
              try {
                initialFinalizer();
              } catch (e) {
                errors =
                  e instanceof
                  _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError
                    ? e.errors
                    : [e];
              }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
              this._finalizers = null;
              try {
                for (
                  var _finalizers_1 = (0,
                    tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_finalizers),
                    _finalizers_1_1 = _finalizers_1.next();
                  !_finalizers_1_1.done;
                  _finalizers_1_1 = _finalizers_1.next()
                ) {
                  var finalizer = _finalizers_1_1.value;
                  try {
                    execFinalizer(finalizer);
                  } catch (err) {
                    errors = errors !== null && errors !== void 0 ? errors : [];
                    if (
                      err instanceof
                      _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError
                    ) {
                      errors = (0,
                      tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)(
                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)(
                          [],
                          (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(
                            errors,
                          ),
                        ),
                        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(
                          err.errors,
                        ),
                      );
                    } else {
                      errors.push(err);
                    }
                  }
                }
              } catch (e_2_1) {
                e_2 = { error: e_2_1 };
              } finally {
                try {
                  if (
                    _finalizers_1_1 &&
                    !_finalizers_1_1.done &&
                    (_b = _finalizers_1.return)
                  )
                    _b.call(_finalizers_1);
                } finally {
                  if (e_2) throw e_2.error;
                }
              }
            }
            if (errors) {
              throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError(
                errors,
              );
            }
          }
        };
        Subscription.prototype.add = function (teardown) {
          var _a;
          if (teardown && teardown !== this) {
            if (this.closed) {
              execFinalizer(teardown);
            } else {
              if (teardown instanceof Subscription) {
                if (teardown.closed || teardown._hasParent(this)) {
                  return;
                }
                teardown._addParent(this);
              }
              (this._finalizers =
                (_a = this._finalizers) !== null && _a !== void 0
                  ? _a
                  : []).push(teardown);
            }
          }
        };
        Subscription.prototype._hasParent = function (parent) {
          var _parentage = this._parentage;
          return (
            _parentage === parent ||
            (Array.isArray(_parentage) && _parentage.includes(parent))
          );
        };
        Subscription.prototype._addParent = function (parent) {
          var _parentage = this._parentage;
          this._parentage = Array.isArray(_parentage)
            ? (_parentage.push(parent), _parentage)
            : _parentage
              ? [_parentage, parent]
              : parent;
        };
        Subscription.prototype._removeParent = function (parent) {
          var _parentage = this._parentage;
          if (_parentage === parent) {
            this._parentage = null;
          } else if (Array.isArray(_parentage)) {
            (0, _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(
              _parentage,
              parent,
            );
          }
        };
        Subscription.prototype.remove = function (teardown) {
          var _finalizers = this._finalizers;
          _finalizers &&
            (0, _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(
              _finalizers,
              teardown,
            );
          if (teardown instanceof Subscription) {
            teardown._removeParent(this);
          }
        };
        Subscription.EMPTY = (function () {
          var empty = new Subscription();
          empty.closed = true;
          return empty;
        })();
        return Subscription;
      })();

      var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
      function isSubscription(value) {
        return (
          value instanceof Subscription ||
          (value &&
            'closed' in value &&
            (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(
              value.remove,
            ) &&
            (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(
              value.add,
            ) &&
            (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(
              value.unsubscribe,
            ))
        );
      }
      function execFinalizer(finalizer) {
        if (
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(
            finalizer,
          )
        ) {
          finalizer();
        } else {
          finalizer.unsubscribe();
        }
      }
      //# sourceMappingURL=Subscription.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/config.js':
    /*!********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/config.js ***!
  \********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ config: () => /* binding */ config,
        /* harmony export */
      });
      var config = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: undefined,
        useDeprecatedSynchronousErrorHandling: false,
        useDeprecatedNextContext: false,
      };
      //# sourceMappingURL=config.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/observable/empty.js':
    /*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/empty.js ***!
  \******************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ EMPTY: () => /* binding */ EMPTY,
        /* harmony export */ empty: () => /* binding */ empty,
        /* harmony export */
      });
      /* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../Observable */ './node_modules/rxjs/dist/esm5/internal/Observable.js',
        );

      var EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(
        function (subscriber) {
          return subscriber.complete();
        },
      );
      function empty(scheduler) {
        return scheduler ? emptyScheduled(scheduler) : EMPTY;
      }
      function emptyScheduled(scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(
          function (subscriber) {
            return scheduler.schedule(function () {
              return subscriber.complete();
            });
          },
        );
      }
      //# sourceMappingURL=empty.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/observable/from.js':
    /*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/from.js ***!
  \*****************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ from: () => /* binding */ from,
        /* harmony export */
      });
      /* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../scheduled/scheduled */ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js',
        );
      /* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./innerFrom */ './node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js',
        );

      function from(input, scheduler) {
        return scheduler
          ? (0, _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__.scheduled)(
              input,
              scheduler,
            )
          : (0, _innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(input);
      }
      //# sourceMappingURL=from.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js':
    /*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js ***!
  \**********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ fromEvent: () => /* binding */ fromEvent,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');
      /* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! ../observable/innerFrom */ './node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js',
        );
      /* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! ../Observable */ './node_modules/rxjs/dist/esm5/internal/Observable.js',
        );
      /* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ../operators/mergeMap */ './node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js',
        );
      /* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ../util/isArrayLike */ './node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js',
        );
      /* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );
      /* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../util/mapOneOrManyArgs */ './node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js',
        );

      var nodeEventEmitterMethods = ['addListener', 'removeListener'];
      var eventTargetMethods = ['addEventListener', 'removeEventListener'];
      var jqueryMethods = ['on', 'off'];
      function fromEvent(target, eventName, options, resultSelector) {
        if (
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)
        ) {
          resultSelector = options;
          options = undefined;
        }
        if (resultSelector) {
          return fromEvent(target, eventName, options).pipe(
            (0,
            _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(
              resultSelector,
            ),
          );
        }
        var _a = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(
            isEventTarget(target)
              ? eventTargetMethods.map(function (methodName) {
                  return function (handler) {
                    return target[methodName](eventName, handler, options);
                  };
                })
              : isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(
                    toCommonHandlerRegistry(target, eventName),
                  )
                : isJQueryStyleEventEmitter(target)
                  ? jqueryMethods.map(
                      toCommonHandlerRegistry(target, eventName),
                    )
                  : [],
            2,
          ),
          add = _a[0],
          remove = _a[1];
        if (!add) {
          if (
            (0, _util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__.isArrayLike)(
              target,
            )
          ) {
            return (0,
            _operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(
              function (subTarget) {
                return fromEvent(subTarget, eventName, options);
              },
            )(
              (0, _observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.innerFrom)(
                target,
              ),
            );
          }
        }
        if (!add) {
          throw new TypeError('Invalid event target');
        }
        return new _Observable__WEBPACK_IMPORTED_MODULE_6__.Observable(
          function (subscriber) {
            var handler = function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              return subscriber.next(1 < args.length ? args : args[0]);
            };
            add(handler);
            return function () {
              return remove(handler);
            };
          },
        );
      }
      function toCommonHandlerRegistry(target, eventName) {
        return function (methodName) {
          return function (handler) {
            return target[methodName](eventName, handler);
          };
        };
      }
      function isNodeStyleEventEmitter(target) {
        return (
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
            target.addListener,
          ) &&
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
            target.removeListener,
          )
        );
      }
      function isJQueryStyleEventEmitter(target) {
        return (
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
            target.on,
          ) &&
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
            target.off,
          )
        );
      }
      function isEventTarget(target) {
        return (
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
            target.addEventListener,
          ) &&
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
            target.removeEventListener,
          )
        );
      }
      //# sourceMappingURL=fromEvent.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js':
    /*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js ***!
  \**********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ fromArrayLike: () => /* binding */ fromArrayLike,
        /* harmony export */ fromAsyncIterable: () =>
          /* binding */ fromAsyncIterable,
        /* harmony export */ fromInteropObservable: () =>
          /* binding */ fromInteropObservable,
        /* harmony export */ fromIterable: () => /* binding */ fromIterable,
        /* harmony export */ fromPromise: () => /* binding */ fromPromise,
        /* harmony export */ fromReadableStreamLike: () =>
          /* binding */ fromReadableStreamLike,
        /* harmony export */ innerFrom: () => /* binding */ innerFrom,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');
      /* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../util/isArrayLike */ './node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js',
        );
      /* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ../util/isPromise */ './node_modules/rxjs/dist/esm5/internal/util/isPromise.js',
        );
      /* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../Observable */ './node_modules/rxjs/dist/esm5/internal/Observable.js',
        );
      /* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../util/isInteropObservable */ './node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js',
        );
      /* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ../util/isAsyncIterable */ './node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js',
        );
      /* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(
          /*! ../util/throwUnobservableError */ './node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js',
        );
      /* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! ../util/isIterable */ './node_modules/rxjs/dist/esm5/internal/util/isIterable.js',
        );
      /* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! ../util/isReadableStreamLike */ './node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js',
        );
      /* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ =
        __webpack_require__(
          /*! ../util/isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );
      /* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ =
        __webpack_require__(
          /*! ../util/reportUnhandledError */ './node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js',
        );
      /* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ =
        __webpack_require__(
          /*! ../symbol/observable */ './node_modules/rxjs/dist/esm5/internal/symbol/observable.js',
        );

      function innerFrom(input) {
        if (
          input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable
        ) {
          return input;
        }
        if (input != null) {
          if (
            (0,
            _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__.isInteropObservable)(
              input,
            )
          ) {
            return fromInteropObservable(input);
          }
          if (
            (0, _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(
              input,
            )
          ) {
            return fromArrayLike(input);
          }
          if (
            (0, _util_isPromise__WEBPACK_IMPORTED_MODULE_3__.isPromise)(input)
          ) {
            return fromPromise(input);
          }
          if (
            (0,
            _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__.isAsyncIterable)(
              input,
            )
          ) {
            return fromAsyncIterable(input);
          }
          if (
            (0, _util_isIterable__WEBPACK_IMPORTED_MODULE_5__.isIterable)(input)
          ) {
            return fromIterable(input);
          }
          if (
            (0,
            _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.isReadableStreamLike)(
              input,
            )
          ) {
            return fromReadableStreamLike(input);
          }
        }
        throw (0,
        _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__.createInvalidObservableTypeError)(
          input,
        );
      }
      function fromInteropObservable(obj) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(
          function (subscriber) {
            var obs =
              obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__.observable]();
            if (
              (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_9__.isFunction)(
                obs.subscribe,
              )
            ) {
              return obs.subscribe(subscriber);
            }
            throw new TypeError(
              'Provided object does not correctly implement Symbol.observable',
            );
          },
        );
      }
      function fromArrayLike(array) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(
          function (subscriber) {
            for (var i = 0; i < array.length && !subscriber.closed; i++) {
              subscriber.next(array[i]);
            }
            subscriber.complete();
          },
        );
      }
      function fromPromise(promise) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(
          function (subscriber) {
            promise
              .then(
                function (value) {
                  if (!subscriber.closed) {
                    subscriber.next(value);
                    subscriber.complete();
                  }
                },
                function (err) {
                  return subscriber.error(err);
                },
              )
              .then(
                null,
                _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError,
              );
          },
        );
      }
      function fromIterable(iterable) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(
          function (subscriber) {
            var e_1, _a;
            try {
              for (
                var iterable_1 = (0,
                  tslib__WEBPACK_IMPORTED_MODULE_11__.__values)(iterable),
                  iterable_1_1 = iterable_1.next();
                !iterable_1_1.done;
                iterable_1_1 = iterable_1.next()
              ) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                  return;
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (
                  iterable_1_1 &&
                  !iterable_1_1.done &&
                  (_a = iterable_1.return)
                )
                  _a.call(iterable_1);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
            subscriber.complete();
          },
        );
      }
      function fromAsyncIterable(asyncIterable) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(
          function (subscriber) {
            process(asyncIterable, subscriber).catch(function (err) {
              return subscriber.error(err);
            });
          },
        );
      }
      function fromReadableStreamLike(readableStream) {
        return fromAsyncIterable(
          (0,
          _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.readableStreamLikeToAsyncGenerator)(
            readableStream,
          ),
        );
      }
      function process(asyncIterable, subscriber) {
        var asyncIterable_1, asyncIterable_1_1;
        var e_2, _a;
        return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(
          this,
          void 0,
          void 0,
          function () {
            var value, e_2_1;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__generator)(
              this,
              function (_b) {
                switch (_b.label) {
                  case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = (0,
                    tslib__WEBPACK_IMPORTED_MODULE_11__.__asyncValues)(
                      asyncIterable,
                    );
                    _b.label = 1;
                  case 1:
                    return [4, asyncIterable_1.next()];
                  case 2:
                    if (
                      !((asyncIterable_1_1 = _b.sent()),
                      !asyncIterable_1_1.done)
                    )
                      return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                      return [2];
                    }
                    _b.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [3, 11];
                  case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                  case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (
                      !(
                        asyncIterable_1_1 &&
                        !asyncIterable_1_1.done &&
                        (_a = asyncIterable_1.return)
                      )
                    )
                      return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                  case 7:
                    _b.sent();
                    _b.label = 8;
                  case 8:
                    return [3, 10];
                  case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                  case 10:
                    return [7];
                  case 11:
                    subscriber.complete();
                    return [2];
                }
              },
            );
          },
        );
      }
      //# sourceMappingURL=innerFrom.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/observable/merge.js':
    /*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/merge.js ***!
  \******************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ merge: () => /* binding */ merge,
        /* harmony export */
      });
      /* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ../operators/mergeAll */ './node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js',
        );
      /* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./innerFrom */ './node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js',
        );
      /* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./empty */ './node_modules/rxjs/dist/esm5/internal/observable/empty.js',
        );
      /* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/args */ './node_modules/rxjs/dist/esm5/internal/util/args.js',
        );
      /* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ./from */ './node_modules/rxjs/dist/esm5/internal/observable/from.js',
        );

      function merge() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var scheduler = (0,
        _util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
        var concurrent = (0, _util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(
          args,
          Infinity,
        );
        var sources = args;
        return !sources.length
          ? _empty__WEBPACK_IMPORTED_MODULE_1__.EMPTY
          : sources.length === 1
            ? (0, _innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[0])
            : (0, _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(
                concurrent,
              )(
                (0, _from__WEBPACK_IMPORTED_MODULE_4__.from)(
                  sources,
                  scheduler,
                ),
              );
      }
      //# sourceMappingURL=merge.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js':
    /*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js ***!
  \******************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ OperatorSubscriber: () =>
          /* binding */ OperatorSubscriber,
        /* harmony export */ createOperatorSubscriber: () =>
          /* binding */ createOperatorSubscriber,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');
      /* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../Subscriber */ './node_modules/rxjs/dist/esm5/internal/Subscriber.js',
        );

      function createOperatorSubscriber(
        destination,
        onNext,
        onComplete,
        onError,
        onFinalize,
      ) {
        return new OperatorSubscriber(
          destination,
          onNext,
          onComplete,
          onError,
          onFinalize,
        );
      }
      var OperatorSubscriber = (function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(
          OperatorSubscriber,
          _super,
        );
        function OperatorSubscriber(
          destination,
          onNext,
          onComplete,
          onError,
          onFinalize,
          shouldUnsubscribe,
        ) {
          var _this = _super.call(this, destination) || this;
          _this.onFinalize = onFinalize;
          _this.shouldUnsubscribe = shouldUnsubscribe;
          _this._next = onNext
            ? function (value) {
                try {
                  onNext(value);
                } catch (err) {
                  destination.error(err);
                }
              }
            : _super.prototype._next;
          _this._error = onError
            ? function (err) {
                try {
                  onError(err);
                } catch (err) {
                  destination.error(err);
                } finally {
                  this.unsubscribe();
                }
              }
            : _super.prototype._error;
          _this._complete = onComplete
            ? function () {
                try {
                  onComplete();
                } catch (err) {
                  destination.error(err);
                } finally {
                  this.unsubscribe();
                }
              }
            : _super.prototype._complete;
          return _this;
        }
        OperatorSubscriber.prototype.unsubscribe = function () {
          var _a;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 &&
              ((_a = this.onFinalize) === null || _a === void 0
                ? void 0
                : _a.call(this));
          }
        };
        return OperatorSubscriber;
      })(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber);

      //# sourceMappingURL=OperatorSubscriber.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js':
    /*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js ***!
  \************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ debounceTime: () => /* binding */ debounceTime,
        /* harmony export */
      });
      /* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../scheduler/async */ './node_modules/rxjs/dist/esm5/internal/scheduler/async.js',
        );
      /* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../util/lift */ './node_modules/rxjs/dist/esm5/internal/util/lift.js',
        );
      /* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./OperatorSubscriber */ './node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js',
        );

      function debounceTime(dueTime, scheduler) {
        if (scheduler === void 0) {
          scheduler =
            _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler;
        }
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)(
          function (source, subscriber) {
            var activeTask = null;
            var lastValue = null;
            var lastTime = null;
            var emit = function () {
              if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
              }
            };
            function emitWhenIdle() {
              var targetTime = lastTime + dueTime;
              var now = scheduler.now();
              if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                subscriber.add(activeTask);
                return;
              }
              emit();
            }
            source.subscribe(
              (0,
              _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(
                subscriber,
                function (value) {
                  lastValue = value;
                  lastTime = scheduler.now();
                  if (!activeTask) {
                    activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                    subscriber.add(activeTask);
                  }
                },
                function () {
                  emit();
                  subscriber.complete();
                },
                undefined,
                function () {
                  lastValue = activeTask = null;
                },
              ),
            );
          },
        );
      }
      //# sourceMappingURL=debounceTime.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/filter.js':
    /*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/filter.js ***!
  \******************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ filter: () => /* binding */ filter,
        /* harmony export */
      });
      /* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/lift */ './node_modules/rxjs/dist/esm5/internal/util/lift.js',
        );
      /* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./OperatorSubscriber */ './node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js',
        );

      function filter(predicate, thisArg) {
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(
          function (source, subscriber) {
            var index = 0;
            source.subscribe(
              (0,
              _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(
                subscriber,
                function (value) {
                  return (
                    predicate.call(thisArg, value, index++) &&
                    subscriber.next(value)
                  );
                },
              ),
            );
          },
        );
      }
      //# sourceMappingURL=filter.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/map.js':
    /*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/map.js ***!
  \***************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ map: () => /* binding */ map,
        /* harmony export */
      });
      /* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/lift */ './node_modules/rxjs/dist/esm5/internal/util/lift.js',
        );
      /* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./OperatorSubscriber */ './node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js',
        );

      function map(project, thisArg) {
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(
          function (source, subscriber) {
            var index = 0;
            source.subscribe(
              (0,
              _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(
                subscriber,
                function (value) {
                  subscriber.next(project.call(thisArg, value, index++));
                },
              ),
            );
          },
        );
      }
      //# sourceMappingURL=map.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js':
    /*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js ***!
  \********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ mergeAll: () => /* binding */ mergeAll,
        /* harmony export */
      });
      /* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./mergeMap */ './node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js',
        );
      /* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../util/identity */ './node_modules/rxjs/dist/esm5/internal/util/identity.js',
        );

      function mergeAll(concurrent) {
        if (concurrent === void 0) {
          concurrent = Infinity;
        }
        return (0, _mergeMap__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(
          _util_identity__WEBPACK_IMPORTED_MODULE_1__.identity,
          concurrent,
        );
      }
      //# sourceMappingURL=mergeAll.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js':
    /*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js ***!
  \**************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ mergeInternals: () => /* binding */ mergeInternals,
        /* harmony export */
      });
      /* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../observable/innerFrom */ './node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js',
        );
      /* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../util/executeSchedule */ './node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js',
        );
      /* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./OperatorSubscriber */ './node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js',
        );

      function mergeInternals(
        source,
        subscriber,
        project,
        concurrent,
        onBeforeNext,
        expand,
        innerSubScheduler,
        additionalFinalizer,
      ) {
        var buffer = [];
        var active = 0;
        var index = 0;
        var isComplete = false;
        var checkComplete = function () {
          if (isComplete && !buffer.length && !active) {
            subscriber.complete();
          }
        };
        var outerNext = function (value) {
          return active < concurrent ? doInnerSub(value) : buffer.push(value);
        };
        var doInnerSub = function (value) {
          expand && subscriber.next(value);
          active++;
          var innerComplete = false;
          (0, _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(
            project(value, index++),
          ).subscribe(
            (0,
            _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(
              subscriber,
              function (innerValue) {
                onBeforeNext === null || onBeforeNext === void 0
                  ? void 0
                  : onBeforeNext(innerValue);
                if (expand) {
                  outerNext(innerValue);
                } else {
                  subscriber.next(innerValue);
                }
              },
              function () {
                innerComplete = true;
              },
              undefined,
              function () {
                if (innerComplete) {
                  try {
                    active--;
                    var _loop_1 = function () {
                      var bufferedValue = buffer.shift();
                      if (innerSubScheduler) {
                        (0,
                        _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(
                          subscriber,
                          innerSubScheduler,
                          function () {
                            return doInnerSub(bufferedValue);
                          },
                        );
                      } else {
                        doInnerSub(bufferedValue);
                      }
                    };
                    while (buffer.length && active < concurrent) {
                      _loop_1();
                    }
                    checkComplete();
                  } catch (err) {
                    subscriber.error(err);
                  }
                }
              },
            ),
          );
        };
        source.subscribe(
          (0,
          _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(
            subscriber,
            outerNext,
            function () {
              isComplete = true;
              checkComplete();
            },
          ),
        );
        return function () {
          additionalFinalizer === null || additionalFinalizer === void 0
            ? void 0
            : additionalFinalizer();
        };
      }
      //# sourceMappingURL=mergeInternals.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js':
    /*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js ***!
  \********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ mergeMap: () => /* binding */ mergeMap,
        /* harmony export */
      });
      /* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./map */ './node_modules/rxjs/dist/esm5/internal/operators/map.js',
        );
      /* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../observable/innerFrom */ './node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js',
        );
      /* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ../util/lift */ './node_modules/rxjs/dist/esm5/internal/util/lift.js',
        );
      /* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ./mergeInternals */ './node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js',
        );
      /* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );

      function mergeMap(project, resultSelector, concurrent) {
        if (concurrent === void 0) {
          concurrent = Infinity;
        }
        if (
          (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
            resultSelector,
          )
        ) {
          return mergeMap(function (a, i) {
            return (0, _map__WEBPACK_IMPORTED_MODULE_1__.map)(function (b, ii) {
              return resultSelector(a, b, i, ii);
            })(
              (0, _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(
                project(a, i),
              ),
            );
          }, concurrent);
        } else if (typeof resultSelector === 'number') {
          concurrent = resultSelector;
        }
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)(
          function (source, subscriber) {
            return (0,
            _mergeInternals__WEBPACK_IMPORTED_MODULE_4__.mergeInternals)(
              source,
              subscriber,
              project,
              concurrent,
            );
          },
        );
      }
      //# sourceMappingURL=mergeMap.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/observeOn.js':
    /*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js ***!
  \*********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ observeOn: () => /* binding */ observeOn,
        /* harmony export */
      });
      /* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../util/executeSchedule */ './node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js',
        );
      /* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/lift */ './node_modules/rxjs/dist/esm5/internal/util/lift.js',
        );
      /* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./OperatorSubscriber */ './node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js',
        );

      function observeOn(scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(
          function (source, subscriber) {
            source.subscribe(
              (0,
              _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(
                subscriber,
                function (value) {
                  return (0,
                  _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(
                    subscriber,
                    scheduler,
                    function () {
                      return subscriber.next(value);
                    },
                    delay,
                  );
                },
                function () {
                  return (0,
                  _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(
                    subscriber,
                    scheduler,
                    function () {
                      return subscriber.complete();
                    },
                    delay,
                  );
                },
                function (err) {
                  return (0,
                  _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(
                    subscriber,
                    scheduler,
                    function () {
                      return subscriber.error(err);
                    },
                    delay,
                  );
                },
              ),
            );
          },
        );
      }
      //# sourceMappingURL=observeOn.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/pairwise.js':
    /*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/pairwise.js ***!
  \********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ pairwise: () => /* binding */ pairwise,
        /* harmony export */
      });
      /* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/lift */ './node_modules/rxjs/dist/esm5/internal/util/lift.js',
        );
      /* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./OperatorSubscriber */ './node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js',
        );

      function pairwise() {
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(
          function (source, subscriber) {
            var prev;
            var hasPrev = false;
            source.subscribe(
              (0,
              _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(
                subscriber,
                function (value) {
                  var p = prev;
                  prev = value;
                  hasPrev && subscriber.next([p, value]);
                  hasPrev = true;
                },
              ),
            );
          },
        );
      }
      //# sourceMappingURL=pairwise.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/scan.js':
    /*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/scan.js ***!
  \****************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ scan: () => /* binding */ scan,
        /* harmony export */
      });
      /* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/lift */ './node_modules/rxjs/dist/esm5/internal/util/lift.js',
        );
      /* harmony import */ var _scanInternals__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./scanInternals */ './node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js',
        );

      function scan(accumulator, seed) {
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(
          (0, _scanInternals__WEBPACK_IMPORTED_MODULE_1__.scanInternals)(
            accumulator,
            seed,
            arguments.length >= 2,
            true,
          ),
        );
      }
      //# sourceMappingURL=scan.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js':
    /*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js ***!
  \*************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ scanInternals: () => /* binding */ scanInternals,
        /* harmony export */
      });
      /* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./OperatorSubscriber */ './node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js',
        );

      function scanInternals(
        accumulator,
        seed,
        hasSeed,
        emitOnNext,
        emitBeforeComplete,
      ) {
        return function (source, subscriber) {
          var hasState = hasSeed;
          var state = seed;
          var index = 0;
          source.subscribe(
            (0,
            _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_0__.createOperatorSubscriber)(
              subscriber,
              function (value) {
                var i = index++;
                state = hasState
                  ? accumulator(state, value, i)
                  : ((hasState = true), value);
                emitOnNext && subscriber.next(state);
              },
              emitBeforeComplete &&
                function () {
                  hasState && subscriber.next(state);
                  subscriber.complete();
                },
            ),
          );
        };
      }
      //# sourceMappingURL=scanInternals.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js':
    /*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js ***!
  \***********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ subscribeOn: () => /* binding */ subscribeOn,
        /* harmony export */
      });
      /* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/lift */ './node_modules/rxjs/dist/esm5/internal/util/lift.js',
        );

      function subscribeOn(scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(
          function (source, subscriber) {
            subscriber.add(
              scheduler.schedule(function () {
                return source.subscribe(subscriber);
              }, delay),
            );
          },
        );
      }
      //# sourceMappingURL=subscribeOn.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/switchMap.js':
    /*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js ***!
  \*********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ switchMap: () => /* binding */ switchMap,
        /* harmony export */
      });
      /* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../observable/innerFrom */ './node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js',
        );
      /* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/lift */ './node_modules/rxjs/dist/esm5/internal/util/lift.js',
        );
      /* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./OperatorSubscriber */ './node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js',
        );

      function switchMap(project, resultSelector) {
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(
          function (source, subscriber) {
            var innerSubscriber = null;
            var index = 0;
            var isComplete = false;
            var checkComplete = function () {
              return isComplete && !innerSubscriber && subscriber.complete();
            };
            source.subscribe(
              (0,
              _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(
                subscriber,
                function (value) {
                  innerSubscriber === null || innerSubscriber === void 0
                    ? void 0
                    : innerSubscriber.unsubscribe();
                  var innerIndex = 0;
                  var outerIndex = index++;
                  (0,
                  _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(
                    project(value, outerIndex),
                  ).subscribe(
                    (innerSubscriber = (0,
                    _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(
                      subscriber,
                      function (innerValue) {
                        return subscriber.next(
                          resultSelector
                            ? resultSelector(
                                value,
                                innerValue,
                                outerIndex,
                                innerIndex++,
                              )
                            : innerValue,
                        );
                      },
                      function () {
                        innerSubscriber = null;
                        checkComplete();
                      },
                    )),
                  );
                },
                function () {
                  isComplete = true;
                  checkComplete();
                },
              ),
            );
          },
        );
      }
      //# sourceMappingURL=switchMap.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/take.js':
    /*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/take.js ***!
  \****************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ take: () => /* binding */ take,
        /* harmony export */
      });
      /* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../observable/empty */ './node_modules/rxjs/dist/esm5/internal/observable/empty.js',
        );
      /* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../util/lift */ './node_modules/rxjs/dist/esm5/internal/util/lift.js',
        );
      /* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./OperatorSubscriber */ './node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js',
        );

      function take(count) {
        return count <= 0
          ? function () {
              return _observable_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
            }
          : (0, _util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)(
              function (source, subscriber) {
                var seen = 0;
                source.subscribe(
                  (0,
                  _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(
                    subscriber,
                    function (value) {
                      if (++seen <= count) {
                        subscriber.next(value);
                        if (count <= seen) {
                          subscriber.complete();
                        }
                      }
                    },
                  ),
                );
              },
            );
      }
      //# sourceMappingURL=take.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js':
    /*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js ***!
  \*********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ takeUntil: () => /* binding */ takeUntil,
        /* harmony export */
      });
      /* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/lift */ './node_modules/rxjs/dist/esm5/internal/util/lift.js',
        );
      /* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./OperatorSubscriber */ './node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js',
        );
      /* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../observable/innerFrom */ './node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js',
        );
      /* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ../util/noop */ './node_modules/rxjs/dist/esm5/internal/util/noop.js',
        );

      function takeUntil(notifier) {
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(
          function (source, subscriber) {
            (0, _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(
              notifier,
            ).subscribe(
              (0,
              _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(
                subscriber,
                function () {
                  return subscriber.complete();
                },
                _util_noop__WEBPACK_IMPORTED_MODULE_3__.noop,
              ),
            );
            !subscriber.closed && source.subscribe(subscriber);
          },
        );
      }
      //# sourceMappingURL=takeUntil.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js':
    /*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js ***!
  \*************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ scheduleArray: () => /* binding */ scheduleArray,
        /* harmony export */
      });
      /* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../Observable */ './node_modules/rxjs/dist/esm5/internal/Observable.js',
        );

      function scheduleArray(input, scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(
          function (subscriber) {
            var i = 0;
            return scheduler.schedule(function () {
              if (i === input.length) {
                subscriber.complete();
              } else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                  this.schedule();
                }
              }
            });
          },
        );
      }
      //# sourceMappingURL=scheduleArray.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js':
    /*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js ***!
  \*********************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ scheduleAsyncIterable: () =>
          /* binding */ scheduleAsyncIterable,
        /* harmony export */
      });
      /* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../Observable */ './node_modules/rxjs/dist/esm5/internal/Observable.js',
        );
      /* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../util/executeSchedule */ './node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js',
        );

      function scheduleAsyncIterable(input, scheduler) {
        if (!input) {
          throw new Error('Iterable cannot be null');
        }
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(
          function (subscriber) {
            (0,
            _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(
              subscriber,
              scheduler,
              function () {
                var iterator = input[Symbol.asyncIterator]();
                (0,
                _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(
                  subscriber,
                  scheduler,
                  function () {
                    iterator.next().then(function (result) {
                      if (result.done) {
                        subscriber.complete();
                      } else {
                        subscriber.next(result.value);
                      }
                    });
                  },
                  0,
                  true,
                );
              },
            );
          },
        );
      }
      //# sourceMappingURL=scheduleAsyncIterable.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js':
    /*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js ***!
  \****************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ scheduleIterable: () =>
          /* binding */ scheduleIterable,
        /* harmony export */
      });
      /* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../Observable */ './node_modules/rxjs/dist/esm5/internal/Observable.js',
        );
      /* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../symbol/iterator */ './node_modules/rxjs/dist/esm5/internal/symbol/iterator.js',
        );
      /* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ../util/isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );
      /* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../util/executeSchedule */ './node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js',
        );

      function scheduleIterable(input, scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(
          function (subscriber) {
            var iterator;
            (0,
            _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(
              subscriber,
              scheduler,
              function () {
                iterator =
                  input[
                    _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__.iterator
                  ]();
                (0,
                _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(
                  subscriber,
                  scheduler,
                  function () {
                    var _a;
                    var value;
                    var done;
                    try {
                      (_a = iterator.next()),
                        (value = _a.value),
                        (done = _a.done);
                    } catch (err) {
                      subscriber.error(err);
                      return;
                    }
                    if (done) {
                      subscriber.complete();
                    } else {
                      subscriber.next(value);
                    }
                  },
                  0,
                  true,
                );
              },
            );
            return function () {
              return (
                (0, _util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(
                  iterator === null || iterator === void 0
                    ? void 0
                    : iterator.return,
                ) && iterator.return()
              );
            };
          },
        );
      }
      //# sourceMappingURL=scheduleIterable.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js':
    /*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js ***!
  \******************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ scheduleObservable: () =>
          /* binding */ scheduleObservable,
        /* harmony export */
      });
      /* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../observable/innerFrom */ './node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js',
        );
      /* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../operators/observeOn */ './node_modules/rxjs/dist/esm5/internal/operators/observeOn.js',
        );
      /* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../operators/subscribeOn */ './node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js',
        );

      function scheduleObservable(input, scheduler) {
        return (0,
        _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(
          input,
        ).pipe(
          (0, _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(
            scheduler,
          ),
          (0, _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(
            scheduler,
          ),
        );
      }
      //# sourceMappingURL=scheduleObservable.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js':
    /*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js ***!
  \***************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ schedulePromise: () =>
          /* binding */ schedulePromise,
        /* harmony export */
      });
      /* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../observable/innerFrom */ './node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js',
        );
      /* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../operators/observeOn */ './node_modules/rxjs/dist/esm5/internal/operators/observeOn.js',
        );
      /* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../operators/subscribeOn */ './node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js',
        );

      function schedulePromise(input, scheduler) {
        return (0,
        _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(
          input,
        ).pipe(
          (0, _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(
            scheduler,
          ),
          (0, _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(
            scheduler,
          ),
        );
      }
      //# sourceMappingURL=schedulePromise.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js':
    /*!**************************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js ***!
  \**************************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ scheduleReadableStreamLike: () =>
          /* binding */ scheduleReadableStreamLike,
        /* harmony export */
      });
      /* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./scheduleAsyncIterable */ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js',
        );
      /* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../util/isReadableStreamLike */ './node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js',
        );

      function scheduleReadableStreamLike(input, scheduler) {
        return (0,
        _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__.scheduleAsyncIterable)(
          (0,
          _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__.readableStreamLikeToAsyncGenerator)(
            input,
          ),
          scheduler,
        );
      }
      //# sourceMappingURL=scheduleReadableStreamLike.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js':
    /*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js ***!
  \*********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ scheduled: () => /* binding */ scheduled,
        /* harmony export */
      });
      /* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./scheduleObservable */ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js',
        );
      /* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! ./schedulePromise */ './node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js',
        );
      /* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ./scheduleArray */ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js',
        );
      /* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ =
        __webpack_require__(
          /*! ./scheduleIterable */ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js',
        );
      /* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(
          /*! ./scheduleAsyncIterable */ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js',
        );
      /* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../util/isInteropObservable */ './node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js',
        );
      /* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ../util/isPromise */ './node_modules/rxjs/dist/esm5/internal/util/isPromise.js',
        );
      /* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../util/isArrayLike */ './node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js',
        );
      /* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ =
        __webpack_require__(
          /*! ../util/isIterable */ './node_modules/rxjs/dist/esm5/internal/util/isIterable.js',
        );
      /* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! ../util/isAsyncIterable */ './node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js',
        );
      /* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ =
        __webpack_require__(
          /*! ../util/throwUnobservableError */ './node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js',
        );
      /* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ =
        __webpack_require__(
          /*! ../util/isReadableStreamLike */ './node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js',
        );
      /* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ =
        __webpack_require__(
          /*! ./scheduleReadableStreamLike */ './node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js',
        );

      function scheduled(input, scheduler) {
        if (input != null) {
          if (
            (0,
            _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__.isInteropObservable)(
              input,
            )
          ) {
            return (0,
            _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__.scheduleObservable)(
              input,
              scheduler,
            );
          }
          if (
            (0, _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(
              input,
            )
          ) {
            return (0,
            _scheduleArray__WEBPACK_IMPORTED_MODULE_3__.scheduleArray)(
              input,
              scheduler,
            );
          }
          if (
            (0, _util_isPromise__WEBPACK_IMPORTED_MODULE_4__.isPromise)(input)
          ) {
            return (0,
            _schedulePromise__WEBPACK_IMPORTED_MODULE_5__.schedulePromise)(
              input,
              scheduler,
            );
          }
          if (
            (0,
            _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__.isAsyncIterable)(
              input,
            )
          ) {
            return (0,
            _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__.scheduleAsyncIterable)(
              input,
              scheduler,
            );
          }
          if (
            (0, _util_isIterable__WEBPACK_IMPORTED_MODULE_8__.isIterable)(input)
          ) {
            return (0,
            _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__.scheduleIterable)(
              input,
              scheduler,
            );
          }
          if (
            (0,
            _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__.isReadableStreamLike)(
              input,
            )
          ) {
            return (0,
            _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__.scheduleReadableStreamLike)(
              input,
              scheduler,
            );
          }
        }
        throw (0,
        _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__.createInvalidObservableTypeError)(
          input,
        );
      }
      //# sourceMappingURL=scheduled.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduler/Action.js':
    /*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/Action.js ***!
  \******************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Action: () => /* binding */ Action,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');
      /* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../Subscription */ './node_modules/rxjs/dist/esm5/internal/Subscription.js',
        );

      var Action = (function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Action, _super);
        function Action(scheduler, work) {
          return _super.call(this) || this;
        }
        Action.prototype.schedule = function (state, delay) {
          if (delay === void 0) {
            delay = 0;
          }
          return this;
        };
        return Action;
      })(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription);

      //# sourceMappingURL=Action.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js':
    /*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js ***!
  \***********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ AsyncAction: () => /* binding */ AsyncAction,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');
      /* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ./Action */ './node_modules/rxjs/dist/esm5/internal/scheduler/Action.js',
        );
      /* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./intervalProvider */ './node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js',
        );
      /* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../util/arrRemove */ './node_modules/rxjs/dist/esm5/internal/util/arrRemove.js',
        );

      var AsyncAction = (function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AsyncAction, _super);
        function AsyncAction(scheduler, work) {
          var _this = _super.call(this, scheduler, work) || this;
          _this.scheduler = scheduler;
          _this.work = work;
          _this.pending = false;
          return _this;
        }
        AsyncAction.prototype.schedule = function (state, delay) {
          var _a;
          if (delay === void 0) {
            delay = 0;
          }
          if (this.closed) {
            return this;
          }
          this.state = state;
          var id = this.id;
          var scheduler = this.scheduler;
          if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
          }
          this.pending = true;
          this.delay = delay;
          this.id =
            (_a = this.id) !== null && _a !== void 0
              ? _a
              : this.requestAsyncId(scheduler, this.id, delay);
          return this;
        };
        AsyncAction.prototype.requestAsyncId = function (
          scheduler,
          _id,
          delay,
        ) {
          if (delay === void 0) {
            delay = 0;
          }
          return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(
            scheduler.flush.bind(scheduler, this),
            delay,
          );
        };
        AsyncAction.prototype.recycleAsyncId = function (
          _scheduler,
          id,
          delay,
        ) {
          if (delay === void 0) {
            delay = 0;
          }
          if (delay != null && this.delay === delay && this.pending === false) {
            return id;
          }
          if (id != null) {
            _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(
              id,
            );
          }
          return undefined;
        };
        AsyncAction.prototype.execute = function (state, delay) {
          if (this.closed) {
            return new Error('executing a cancelled action');
          }
          this.pending = false;
          var error = this._execute(state, delay);
          if (error) {
            return error;
          } else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
          }
        };
        AsyncAction.prototype._execute = function (state, _delay) {
          var errored = false;
          var errorValue;
          try {
            this.work(state);
          } catch (e) {
            errored = true;
            errorValue = e
              ? e
              : new Error('Scheduled action threw falsy error');
          }
          if (errored) {
            this.unsubscribe();
            return errorValue;
          }
        };
        AsyncAction.prototype.unsubscribe = function () {
          if (!this.closed) {
            var _a = this,
              id = _a.id,
              scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            (0, _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(
              actions,
              this,
            );
            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
          }
        };
        return AsyncAction;
      })(_Action__WEBPACK_IMPORTED_MODULE_3__.Action);

      //# sourceMappingURL=AsyncAction.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js':
    /*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js ***!
  \**************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ AsyncScheduler: () => /* binding */ AsyncScheduler,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');
      /* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../Scheduler */ './node_modules/rxjs/dist/esm5/internal/Scheduler.js',
        );

      var AsyncScheduler = (function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(
          AsyncScheduler,
          _super,
        );
        function AsyncScheduler(SchedulerAction, now) {
          if (now === void 0) {
            now = _Scheduler__WEBPACK_IMPORTED_MODULE_1__.Scheduler.now;
          }
          var _this = _super.call(this, SchedulerAction, now) || this;
          _this.actions = [];
          _this._active = false;
          return _this;
        }
        AsyncScheduler.prototype.flush = function (action) {
          var actions = this.actions;
          if (this._active) {
            actions.push(action);
            return;
          }
          var error;
          this._active = true;
          do {
            if ((error = action.execute(action.state, action.delay))) {
              break;
            }
          } while ((action = actions.shift()));
          this._active = false;
          if (error) {
            while ((action = actions.shift())) {
              action.unsubscribe();
            }
            throw error;
          }
        };
        return AsyncScheduler;
      })(_Scheduler__WEBPACK_IMPORTED_MODULE_1__.Scheduler);

      //# sourceMappingURL=AsyncScheduler.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduler/async.js':
    /*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js ***!
  \*****************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ async: () => /* binding */ async,
        /* harmony export */ asyncScheduler: () => /* binding */ asyncScheduler,
        /* harmony export */
      });
      /* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./AsyncAction */ './node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js',
        );
      /* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./AsyncScheduler */ './node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js',
        );

      var asyncScheduler =
        new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(
          _AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction,
        );
      var async = asyncScheduler;
      //# sourceMappingURL=async.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js':
    /*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js ***!
  \*********************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ dateTimestampProvider: () =>
          /* binding */ dateTimestampProvider,
        /* harmony export */
      });
      var dateTimestampProvider = {
        now: function () {
          return (dateTimestampProvider.delegate || Date).now();
        },
        delegate: undefined,
      };
      //# sourceMappingURL=dateTimestampProvider.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js':
    /*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js ***!
  \****************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ intervalProvider: () =>
          /* binding */ intervalProvider,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');

      var intervalProvider = {
        setInterval: function (handler, timeout) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
          }
          var delegate = intervalProvider.delegate;
          if (
            delegate === null || delegate === void 0
              ? void 0
              : delegate.setInterval
          ) {
            return delegate.setInterval.apply(
              delegate,
              (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)(
                [handler, timeout],
                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args),
              ),
            );
          }
          return setInterval.apply(
            void 0,
            (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)(
              [handler, timeout],
              (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args),
            ),
          );
        },
        clearInterval: function (handle) {
          var delegate = intervalProvider.delegate;
          return (
            (delegate === null || delegate === void 0
              ? void 0
              : delegate.clearInterval) || clearInterval
          )(handle);
        },
        delegate: undefined,
      };
      //# sourceMappingURL=intervalProvider.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js':
    /*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js ***!
  \***************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ timeoutProvider: () =>
          /* binding */ timeoutProvider,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');

      var timeoutProvider = {
        setTimeout: function (handler, timeout) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
          }
          var delegate = timeoutProvider.delegate;
          if (
            delegate === null || delegate === void 0
              ? void 0
              : delegate.setTimeout
          ) {
            return delegate.setTimeout.apply(
              delegate,
              (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)(
                [handler, timeout],
                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args),
              ),
            );
          }
          return setTimeout.apply(
            void 0,
            (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)(
              [handler, timeout],
              (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args),
            ),
          );
        },
        clearTimeout: function (handle) {
          var delegate = timeoutProvider.delegate;
          return (
            (delegate === null || delegate === void 0
              ? void 0
              : delegate.clearTimeout) || clearTimeout
          )(handle);
        },
        delegate: undefined,
      };
      //# sourceMappingURL=timeoutProvider.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/symbol/iterator.js':
    /*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js ***!
  \*****************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getSymbolIterator: () =>
          /* binding */ getSymbolIterator,
        /* harmony export */ iterator: () => /* binding */ iterator,
        /* harmony export */
      });
      function getSymbolIterator() {
        if (typeof Symbol !== 'function' || !Symbol.iterator) {
          return '@@iterator';
        }
        return Symbol.iterator;
      }
      var iterator = getSymbolIterator();
      //# sourceMappingURL=iterator.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/symbol/observable.js':
    /*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js ***!
  \*******************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ observable: () => /* binding */ observable,
        /* harmony export */
      });
      var observable = (function () {
        return (
          (typeof Symbol === 'function' && Symbol.observable) || '@@observable'
        );
      })();
      //# sourceMappingURL=observable.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js':
    /*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js ***!
  \******************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ ObjectUnsubscribedError: () =>
          /* binding */ ObjectUnsubscribedError,
        /* harmony export */
      });
      /* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./createErrorClass */ './node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js',
        );

      var ObjectUnsubscribedError = (0,
      _createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(
        function (_super) {
          return function ObjectUnsubscribedErrorImpl() {
            _super(this);
            this.name = 'ObjectUnsubscribedError';
            this.message = 'object unsubscribed';
          };
        },
      );
      //# sourceMappingURL=ObjectUnsubscribedError.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js':
    /*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js ***!
  \**************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ UnsubscriptionError: () =>
          /* binding */ UnsubscriptionError,
        /* harmony export */
      });
      /* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./createErrorClass */ './node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js',
        );

      var UnsubscriptionError = (0,
      _createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(
        function (_super) {
          return function UnsubscriptionErrorImpl(errors) {
            _super(this);
            this.message = errors
              ? errors.length +
                ' errors occurred during unsubscription:\n' +
                errors
                  .map(function (err, i) {
                    return i + 1 + ') ' + err.toString();
                  })
                  .join('\n  ')
              : '';
            this.name = 'UnsubscriptionError';
            this.errors = errors;
          };
        },
      );
      //# sourceMappingURL=UnsubscriptionError.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/args.js':
    /*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/args.js ***!
  \***********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ popNumber: () => /* binding */ popNumber,
        /* harmony export */ popResultSelector: () =>
          /* binding */ popResultSelector,
        /* harmony export */ popScheduler: () => /* binding */ popScheduler,
        /* harmony export */
      });
      /* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );
      /* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./isScheduler */ './node_modules/rxjs/dist/esm5/internal/util/isScheduler.js',
        );

      function last(arr) {
        return arr[arr.length - 1];
      }
      function popResultSelector(args) {
        return (0, _isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
          last(args),
        )
          ? args.pop()
          : undefined;
      }
      function popScheduler(args) {
        return (0, _isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(
          last(args),
        )
          ? args.pop()
          : undefined;
      }
      function popNumber(args, defaultValue) {
        return typeof last(args) === 'number' ? args.pop() : defaultValue;
      }
      //# sourceMappingURL=args.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/arrRemove.js':
    /*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js ***!
  \****************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ arrRemove: () => /* binding */ arrRemove,
        /* harmony export */
      });
      function arrRemove(arr, item) {
        if (arr) {
          var index = arr.indexOf(item);
          0 <= index && arr.splice(index, 1);
        }
      }
      //# sourceMappingURL=arrRemove.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js':
    /*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js ***!
  \***********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ createErrorClass: () =>
          /* binding */ createErrorClass,
        /* harmony export */
      });
      function createErrorClass(createImpl) {
        var _super = function (instance) {
          Error.call(instance);
          instance.stack = new Error().stack;
        };
        var ctorFunc = createImpl(_super);
        ctorFunc.prototype = Object.create(Error.prototype);
        ctorFunc.prototype.constructor = ctorFunc;
        return ctorFunc;
      }
      //# sourceMappingURL=createErrorClass.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/errorContext.js':
    /*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/errorContext.js ***!
  \*******************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ captureError: () => /* binding */ captureError,
        /* harmony export */ errorContext: () => /* binding */ errorContext,
        /* harmony export */
      });
      /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../config */ './node_modules/rxjs/dist/esm5/internal/config.js',
        );

      var context = null;
      function errorContext(cb) {
        if (
          _config__WEBPACK_IMPORTED_MODULE_0__.config
            .useDeprecatedSynchronousErrorHandling
        ) {
          var isRoot = !context;
          if (isRoot) {
            context = { errorThrown: false, error: null };
          }
          cb();
          if (isRoot) {
            var _a = context,
              errorThrown = _a.errorThrown,
              error = _a.error;
            context = null;
            if (errorThrown) {
              throw error;
            }
          }
        } else {
          cb();
        }
      }
      function captureError(err) {
        if (
          _config__WEBPACK_IMPORTED_MODULE_0__.config
            .useDeprecatedSynchronousErrorHandling &&
          context
        ) {
          context.errorThrown = true;
          context.error = err;
        }
      }
      //# sourceMappingURL=errorContext.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js':
    /*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js ***!
  \**********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ executeSchedule: () =>
          /* binding */ executeSchedule,
        /* harmony export */
      });
      function executeSchedule(
        parentSubscription,
        scheduler,
        work,
        delay,
        repeat,
      ) {
        if (delay === void 0) {
          delay = 0;
        }
        if (repeat === void 0) {
          repeat = false;
        }
        var scheduleSubscription = scheduler.schedule(function () {
          work();
          if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
          } else {
            this.unsubscribe();
          }
        }, delay);
        parentSubscription.add(scheduleSubscription);
        if (!repeat) {
          return scheduleSubscription;
        }
      }
      //# sourceMappingURL=executeSchedule.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/identity.js':
    /*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/identity.js ***!
  \***************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ identity: () => /* binding */ identity,
        /* harmony export */
      });
      function identity(x) {
        return x;
      }
      //# sourceMappingURL=identity.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js':
    /*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js ***!
  \******************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ isArrayLike: () => /* binding */ isArrayLike,
        /* harmony export */
      });
      var isArrayLike = function (x) {
        return x && typeof x.length === 'number' && typeof x !== 'function';
      };
      //# sourceMappingURL=isArrayLike.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js':
    /*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js ***!
  \**********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ isAsyncIterable: () =>
          /* binding */ isAsyncIterable,
        /* harmony export */
      });
      /* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );

      function isAsyncIterable(obj) {
        return (
          Symbol.asyncIterator &&
          (0, _isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
            obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator],
          )
        );
      }
      //# sourceMappingURL=isAsyncIterable.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js':
    /*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js ***!
  \*****************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ isFunction: () => /* binding */ isFunction,
        /* harmony export */
      });
      function isFunction(value) {
        return typeof value === 'function';
      }
      //# sourceMappingURL=isFunction.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js':
    /*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js ***!
  \**************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ isInteropObservable: () =>
          /* binding */ isInteropObservable,
        /* harmony export */
      });
      /* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../symbol/observable */ './node_modules/rxjs/dist/esm5/internal/symbol/observable.js',
        );
      /* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );

      function isInteropObservable(input) {
        return (0, _isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
          input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable],
        );
      }
      //# sourceMappingURL=isInteropObservable.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/isIterable.js':
    /*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isIterable.js ***!
  \*****************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ isIterable: () => /* binding */ isIterable,
        /* harmony export */
      });
      /* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../symbol/iterator */ './node_modules/rxjs/dist/esm5/internal/symbol/iterator.js',
        );
      /* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );

      function isIterable(input) {
        return (0, _isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
          input === null || input === void 0
            ? void 0
            : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator],
        );
      }
      //# sourceMappingURL=isIterable.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/isPromise.js':
    /*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isPromise.js ***!
  \****************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ isPromise: () => /* binding */ isPromise,
        /* harmony export */
      });
      /* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );

      function isPromise(value) {
        return (0, _isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
          value === null || value === void 0 ? void 0 : value.then,
        );
      }
      //# sourceMappingURL=isPromise.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js':
    /*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js ***!
  \***************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ isReadableStreamLike: () =>
          /* binding */ isReadableStreamLike,
        /* harmony export */ readableStreamLikeToAsyncGenerator: () =>
          /* binding */ readableStreamLikeToAsyncGenerator,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');
      /* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );

      function readableStreamLikeToAsyncGenerator(readableStream) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(
          this,
          arguments,
          function readableStreamLikeToAsyncGenerator_1() {
            var reader, _a, value, done;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(
              this,
              function (_b) {
                switch (_b.label) {
                  case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                  case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                  case 2:
                    if (false) {
                    }
                    return [
                      4,
                      (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(
                        reader.read(),
                      ),
                    ];
                  case 3:
                    (_a = _b.sent()), (value = _a.value), (done = _a.done);
                    if (!done) return [3, 5];
                    return [
                      4,
                      (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0),
                    ];
                  case 4:
                    return [2, _b.sent()];
                  case 5:
                    return [
                      4,
                      (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value),
                    ];
                  case 6:
                    return [4, _b.sent()];
                  case 7:
                    _b.sent();
                    return [3, 2];
                  case 8:
                    return [3, 10];
                  case 9:
                    reader.releaseLock();
                    return [7];
                  case 10:
                    return [2];
                }
              },
            );
          },
        );
      }
      function isReadableStreamLike(obj) {
        return (0, _isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(
          obj === null || obj === void 0 ? void 0 : obj.getReader,
        );
      }
      //# sourceMappingURL=isReadableStreamLike.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/isScheduler.js':
    /*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js ***!
  \******************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ isScheduler: () => /* binding */ isScheduler,
        /* harmony export */
      });
      /* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );

      function isScheduler(value) {
        return (
          value &&
          (0, _isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
            value.schedule,
          )
        );
      }
      //# sourceMappingURL=isScheduler.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/lift.js':
    /*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/lift.js ***!
  \***********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ hasLift: () => /* binding */ hasLift,
        /* harmony export */ operate: () => /* binding */ operate,
        /* harmony export */
      });
      /* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./isFunction */ './node_modules/rxjs/dist/esm5/internal/util/isFunction.js',
        );

      function hasLift(source) {
        return (0, _isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(
          source === null || source === void 0 ? void 0 : source.lift,
        );
      }
      function operate(init) {
        return function (source) {
          if (hasLift(source)) {
            return source.lift(function (liftedSource) {
              try {
                return init(liftedSource, this);
              } catch (err) {
                this.error(err);
              }
            });
          }
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
      //# sourceMappingURL=lift.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js':
    /*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js ***!
  \***********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ mapOneOrManyArgs: () =>
          /* binding */ mapOneOrManyArgs,
        /* harmony export */
      });
      /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.mjs');
      /* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../operators/map */ './node_modules/rxjs/dist/esm5/internal/operators/map.js',
        );

      var isArray = Array.isArray;
      function callOrApply(fn, args) {
        return isArray(args)
          ? fn.apply(
              void 0,
              (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)(
                [],
                (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args),
              ),
            )
          : fn(args);
      }
      function mapOneOrManyArgs(fn) {
        return (0, _operators_map__WEBPACK_IMPORTED_MODULE_1__.map)(
          function (args) {
            return callOrApply(fn, args);
          },
        );
      }
      //# sourceMappingURL=mapOneOrManyArgs.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/noop.js':
    /*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/noop.js ***!
  \***********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ noop: () => /* binding */ noop,
        /* harmony export */
      });
      function noop() {}
      //# sourceMappingURL=noop.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/pipe.js':
    /*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/pipe.js ***!
  \***********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ pipe: () => /* binding */ pipe,
        /* harmony export */ pipeFromArray: () => /* binding */ pipeFromArray,
        /* harmony export */
      });
      /* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./identity */ './node_modules/rxjs/dist/esm5/internal/util/identity.js',
        );

      function pipe() {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          fns[_i] = arguments[_i];
        }
        return pipeFromArray(fns);
      }
      function pipeFromArray(fns) {
        if (fns.length === 0) {
          return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
        }
        if (fns.length === 1) {
          return fns[0];
        }
        return function piped(input) {
          return fns.reduce(function (prev, fn) {
            return fn(prev);
          }, input);
        };
      }
      //# sourceMappingURL=pipe.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js':
    /*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js ***!
  \***************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ reportUnhandledError: () =>
          /* binding */ reportUnhandledError,
        /* harmony export */
      });
      /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../config */ './node_modules/rxjs/dist/esm5/internal/config.js',
        );
      /* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../scheduler/timeoutProvider */ './node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js',
        );

      function reportUnhandledError(err) {
        _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(
          function () {
            var onUnhandledError =
              _config__WEBPACK_IMPORTED_MODULE_1__.config.onUnhandledError;
            if (onUnhandledError) {
              onUnhandledError(err);
            } else {
              throw err;
            }
          },
        );
      }
      //# sourceMappingURL=reportUnhandledError.js.map

      /***/
    },

  /***/ './node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js':
    /*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js ***!
  \*****************************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ createInvalidObservableTypeError: () =>
          /* binding */ createInvalidObservableTypeError,
        /* harmony export */
      });
      function createInvalidObservableTypeError(input) {
        return new TypeError(
          'You provided ' +
            (input !== null && typeof input === 'object'
              ? 'an invalid object'
              : "'" + input + "'") +
            ' where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.',
        );
      }
      //# sourceMappingURL=throwUnobservableError.js.map

      /***/
    },

  /***/ './src/interface/anchor/anchor.scss':
    /*!******************************************!*\
  !*** ./src/interface/anchor/anchor.scss ***!
  \******************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_anchor_scss__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./anchor.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/anchor/anchor.scss',
        );

      var options = {};

      options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes =
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

      options.insert =
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
          null,
          'head',
        );

      options.domAPI =
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement =
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

      var update =
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_anchor_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ],
          options,
        );

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_anchor_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ] &&
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_anchor_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ].locals
          ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_anchor_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ].locals
          : undefined;

      /***/
    },

  /***/ './src/interface/carousel/carousel.scss':
    /*!**********************************************!*\
  !*** ./src/interface/carousel/carousel.scss ***!
  \**********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./carousel.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/carousel/carousel.scss',
        );

      var options = {};

      options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes =
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

      options.insert =
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
          null,
          'head',
        );

      options.domAPI =
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement =
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

      var update =
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ],
          options,
        );

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ] &&
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ].locals
          ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ].locals
          : undefined;

      /***/
    },

  /***/ './src/interface/parallax/parallax.scss':
    /*!**********************************************!*\
  !*** ./src/interface/parallax/parallax.scss ***!
  \**********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_parallax_scss__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./parallax.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/parallax/parallax.scss',
        );

      var options = {};

      options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes =
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

      options.insert =
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
          null,
          'head',
        );

      options.domAPI =
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement =
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

      var update =
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_parallax_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ],
          options,
        );

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_parallax_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ] &&
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_parallax_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ].locals
          ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_parallax_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ].locals
          : undefined;

      /***/
    },

  /***/ './src/interface/scrollable-sticky/scrollable-sticky.scss':
    /*!****************************************************************!*\
  !*** ./src/interface/scrollable-sticky/scrollable-sticky.scss ***!
  \****************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scrollable_sticky_scss__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./scrollable-sticky.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/scrollable-sticky/scrollable-sticky.scss',
        );

      var options = {};

      options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes =
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

      options.insert =
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
          null,
          'head',
        );

      options.domAPI =
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement =
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

      var update =
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scrollable_sticky_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ],
          options,
        );

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scrollable_sticky_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ] &&
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scrollable_sticky_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ].locals
          ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scrollable_sticky_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ].locals
          : undefined;

      /***/
    },

  /***/ './src/interface/scrollable-tabs/scrollable-tabs.scss':
    /*!************************************************************!*\
  !*** ./src/interface/scrollable-tabs/scrollable-tabs.scss ***!
  \************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scrollable_tabs_scss__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./scrollable-tabs.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/scrollable-tabs/scrollable-tabs.scss',
        );

      var options = {};

      options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes =
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

      options.insert =
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
          null,
          'head',
        );

      options.domAPI =
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement =
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

      var update =
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scrollable_tabs_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ],
          options,
        );

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scrollable_tabs_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ] &&
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scrollable_tabs_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ].locals
          ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scrollable_tabs_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ].locals
          : undefined;

      /***/
    },

  /***/ './src/interface/spin-images/spin-images.scss':
    /*!****************************************************!*\
  !*** ./src/interface/spin-images/spin-images.scss ***!
  \****************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_spin_images_scss__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./spin-images.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/spin-images/spin-images.scss',
        );

      var options = {};

      options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes =
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

      options.insert =
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
          null,
          'head',
        );

      options.domAPI =
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement =
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

      var update =
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_spin_images_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ],
          options,
        );

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_spin_images_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ] &&
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_spin_images_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ].locals
          ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_spin_images_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ].locals
          : undefined;

      /***/
    },

  /***/ './src/interface/sticky-header/sticky-header.scss':
    /*!********************************************************!*\
  !*** ./src/interface/sticky-header/sticky-header.scss ***!
  \********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sticky_header_scss__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./sticky-header.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/interface/sticky-header/sticky-header.scss',
        );

      var options = {};

      options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes =
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

      options.insert =
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
          null,
          'head',
        );

      options.domAPI =
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement =
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

      var update =
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sticky_header_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ],
          options,
        );

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sticky_header_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ] &&
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sticky_header_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ].locals
          ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sticky_header_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ].locals
          : undefined;

      /***/
    },

  /***/ './src/utilities/element/element.scss':
    /*!********************************************!*\
  !*** ./src/utilities/element/element.scss ***!
  \********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        );
      /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
        );
      /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_element_scss__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./element.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/utilities/element/element.scss',
        );

      var options = {};

      options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes =
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

      options.insert =
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
          null,
          'head',
        );

      options.domAPI =
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement =
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

      var update =
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_element_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ],
          options,
        );

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_element_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ] &&
        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_element_scss__WEBPACK_IMPORTED_MODULE_6__[
          'default'
        ].locals
          ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_element_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ].locals
          : undefined;

      /***/
    },

  /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
    /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
    /***/ (module) => {
      var stylesInDOM = [];
      function getIndexByIdentifier(identifier) {
        var result = -1;
        for (var i = 0; i < stylesInDOM.length; i++) {
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        }
        return result;
      }
      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];
        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = ''.concat(id, ' ').concat(count);
          idCountMap[id] = count + 1;
          var indexByIdentifier = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3],
            supports: item[4],
            layer: item[5],
          };
          if (indexByIdentifier !== -1) {
            stylesInDOM[indexByIdentifier].references++;
            stylesInDOM[indexByIdentifier].updater(obj);
          } else {
            var updater = addElementStyle(obj, options);
            options.byIndex = i;
            stylesInDOM.splice(i, 0, {
              identifier: identifier,
              updater: updater,
              references: 1,
            });
          }
          identifiers.push(identifier);
        }
        return identifiers;
      }
      function addElementStyle(obj, options) {
        var api = options.domAPI(options);
        api.update(obj);
        var updater = function updater(newObj) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap &&
              newObj.supports === obj.supports &&
              newObj.layer === obj.layer
            ) {
              return;
            }
            api.update((obj = newObj));
          } else {
            api.remove();
          }
        };
        return updater;
      }
      module.exports = function (list, options) {
        options = options || {};
        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];
          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDOM[index].references--;
          }
          var newLastIdentifiers = modulesToDom(newList, options);
          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];
            var _index = getIndexByIdentifier(_identifier);
            if (stylesInDOM[_index].references === 0) {
              stylesInDOM[_index].updater();
              stylesInDOM.splice(_index, 1);
            }
          }
          lastIdentifiers = newLastIdentifiers;
        };
      };

      /***/
    },

  /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
    /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
    /***/ (module) => {
      var memo = {};

      /* istanbul ignore next  */
      function getTarget(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target);

          // Special case to return head of iframe instead of iframe itself
          if (
            window.HTMLIFrameElement &&
            styleTarget instanceof window.HTMLIFrameElement
          ) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }
          memo[target] = styleTarget;
        }
        return memo[target];
      }

      /* istanbul ignore next  */
      function insertBySelector(insert, style) {
        var target = getTarget(insert);
        if (!target) {
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        }
        target.appendChild(style);
      }
      module.exports = insertBySelector;

      /***/
    },

  /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
    /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
    /***/ (module) => {
      /* istanbul ignore next  */
      function insertStyleElement(options) {
        var element = document.createElement('style');
        options.setAttributes(element, options.attributes);
        options.insert(element, options.options);
        return element;
      }
      module.exports = insertStyleElement;

      /***/
    },

  /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
    /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      /* istanbul ignore next  */
      function setAttributesWithoutAttributes(styleElement) {
        var nonce = true ? __webpack_require__.nc : 0;
        if (nonce) {
          styleElement.setAttribute('nonce', nonce);
        }
      }
      module.exports = setAttributesWithoutAttributes;

      /***/
    },

  /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
    /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
    /***/ (module) => {
      /* istanbul ignore next  */
      function apply(styleElement, options, obj) {
        var css = '';
        if (obj.supports) {
          css += '@supports ('.concat(obj.supports, ') {');
        }
        if (obj.media) {
          css += '@media '.concat(obj.media, ' {');
        }
        var needLayer = typeof obj.layer !== 'undefined';
        if (needLayer) {
          css += '@layer'.concat(
            obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
            ' {',
          );
        }
        css += obj.css;
        if (needLayer) {
          css += '}';
        }
        if (obj.media) {
          css += '}';
        }
        if (obj.supports) {
          css += '}';
        }
        var sourceMap = obj.sourceMap;
        if (sourceMap && typeof btoa !== 'undefined') {
          css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
            ' */',
          );
        }

        // For old IE
        /* istanbul ignore if  */
        options.styleTagTransform(css, styleElement, options.options);
      }
      function removeStyleElement(styleElement) {
        // istanbul ignore if
        if (styleElement.parentNode === null) {
          return false;
        }
        styleElement.parentNode.removeChild(styleElement);
      }

      /* istanbul ignore next  */
      function domAPI(options) {
        if (typeof document === 'undefined') {
          return {
            update: function update() {},
            remove: function remove() {},
          };
        }
        var styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            apply(styleElement, options, obj);
          },
          remove: function remove() {
            removeStyleElement(styleElement);
          },
        };
      }
      module.exports = domAPI;

      /***/
    },

  /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
    /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
    /***/ (module) => {
      /* istanbul ignore next  */
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }
          styleElement.appendChild(document.createTextNode(css));
        }
      }
      module.exports = styleTagTransform;

      /***/
    },

  /***/ './src/api/scroll/index.ts':
    /*!*********************************!*\
  !*** ./src/api/scroll/index.ts ***!
  \*********************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Scroll$: () =>
          /* reexport safe */ _scroll_observer_types__WEBPACK_IMPORTED_MODULE_1__.Scroll$,
        /* harmony export */ scroll: () =>
          /* reexport safe */ _scroll_observer__WEBPACK_IMPORTED_MODULE_0__.scroll,
        /* harmony export */
      });
      /* harmony import */ var _scroll_observer__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./scroll-observer */ './src/api/scroll/scroll-observer.ts',
        );
      /* harmony import */ var _scroll_observer_types__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./scroll-observer.types */ './src/api/scroll/scroll-observer.types.ts',
        );

      /***/
    },

  /***/ './src/api/scroll/scroll-observer.ts':
    /*!*******************************************!*\
  !*** ./src/api/scroll/scroll-observer.ts ***!
  \*******************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ scroll: () => /* binding */ scroll,
        /* harmony export */
      });
      /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/dist/esm5/internal/util/pipe.js',
        );
      /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/map.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/scan.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/filter.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js',
        );
      /* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! lodash/isNil */ './node_modules/lodash/isNil.js',
        );
      /* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          lodash_isNil__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../utilities/element */ './src/utilities/element/index.ts',
        );
      /* harmony import */ var _utilities_axis__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../../utilities/axis */ './src/utilities/axis/index.ts',
        );
      var __assign =
        (undefined && undefined.__assign) ||
        function () {
          __assign =
            Object.assign ||
            function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };

      function gapOperator(gap) {
        if (gap === void 0) {
          gap = _utilities_axis__WEBPACK_IMPORTED_MODULE_2__.AXES;
        }
        return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.pipe)(
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(
            function (scrollObserver) {
              return {
                current: scrollObserver,
                last: scrollObserver,
              };
            },
          ),
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.scan)(
            function (acc, curr) {
              var onGap = (0,
              _utilities_axis__WEBPACK_IMPORTED_MODULE_2__.isOnGap)({
                axes: acc.current.axes,
                gap: gap,
                lastAxes: acc.last.axes,
              });
              return {
                current: curr.current,
                last: onGap ? acc.last : curr.current,
              };
            },
          ),
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(
            function (_a) {
              var current = _a.current,
                last = _a.last;
              return !(0, _utilities_axis__WEBPACK_IMPORTED_MODULE_2__.isOnGap)(
                {
                  axes: current.axes,
                  gap: gap,
                  lastAxes: last.axes,
                },
              );
            },
          ),
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(
            function (scrollObserver) {
              return scrollObserver.current;
            },
          ),
        );
      }
      function scroll(_a) {
        var externalEl = _a.el,
          _b = _a.gap,
          gap =
            _b === void 0
              ? _utilities_axis__WEBPACK_IMPORTED_MODULE_2__.AXES
              : _b,
          _c = _a.debounce,
          debounce = _c === void 0 ? 0 : _c,
          _d = _a.limit,
          limit =
            _d === void 0
              ? _utilities_axis__WEBPACK_IMPORTED_MODULE_2__.POSITIONS
              : _d,
          _e = _a.maxRelative,
          maxRelative =
            _e === void 0
              ? {
                  bottom: undefined,
                  left: undefined,
                  right: undefined,
                  top: undefined,
                }
              : _e;
        var el = externalEl || document;
        var scrollingEl = (0,
        _utilities_element__WEBPACK_IMPORTED_MODULE_1__.getScrollingEl)(el);
        var scroll$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(
          el,
          'scroll',
        );
        var scrollAxes$ = scroll$.pipe(
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(
            function (event) {
              var axes = (0,
              _utilities_element__WEBPACK_IMPORTED_MODULE_1__.getScrollPosition)(
                { el: scrollingEl },
              );
              return {
                el: scrollingEl,
                event: event,
                axes: axes,
                relativeAxes: _utilities_axis__WEBPACK_IMPORTED_MODULE_2__.AXES,
              };
            },
          ),
        );
        var scrollDirection$ = scrollAxes$.pipe(
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(
            function (scrollAxesObserver) {
              return __assign(__assign({}, scrollAxesObserver), {
                direction: '',
              });
            },
          ),
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.scan)(
            function (acc, curr) {
              return __assign(__assign({}, curr), {
                direction: (0,
                _utilities_axis__WEBPACK_IMPORTED_MODULE_2__.getDirection)({
                  axes: curr.axes,
                  lastAxes: acc.axes,
                }),
              });
            },
          ),
        );
        if (gap.x || gap.y) {
          scrollDirection$ = scrollDirection$.pipe(gapOperator(gap));
        }
        if (debounce) {
          scrollDirection$ = scrollDirection$.pipe(
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(
              debounce,
            ),
          );
        }
        if (limit.bottom || limit.left || limit.right || limit.top) {
          scrollDirection$ = scrollDirection$.pipe(
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(
              function (scrollObserver) {
                return !(0,
                _utilities_element__WEBPACK_IMPORTED_MODULE_1__.isOutOfLimit)({
                  el: scrollObserver.el,
                  limit: limit,
                  axes: scrollObserver.axes,
                });
              },
            ),
          );
        }
        scrollDirection$ = scrollDirection$.pipe(
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.scan)(
            function (acc, curr) {
              var xRelative = acc.relativeAxes.x + curr.axes.x - acc.axes.x;
              var yRelative = acc.relativeAxes.y + curr.axes.y - acc.axes.y;
              var x =
                !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(
                  maxRelative.left,
                ) && xRelative < maxRelative.left
                  ? maxRelative.left
                  : xRelative;
              if (
                !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(
                  maxRelative.right,
                ) &&
                xRelative > maxRelative.right
              ) {
                x = maxRelative.right;
              }
              var y =
                !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(
                  maxRelative.top,
                ) && yRelative < maxRelative.top
                  ? maxRelative.top
                  : yRelative;
              if (
                !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(
                  maxRelative.bottom,
                ) &&
                yRelative > maxRelative.bottom
              ) {
                y = maxRelative.bottom;
              }
              return __assign(__assign({}, curr), {
                relativeAxes: {
                  x: x,
                  y: y,
                },
              });
            },
          ),
        );
        return scrollDirection$;
      }

      /***/
    },

  /***/ './src/api/scroll/scroll-observer.types.ts':
    /*!*************************************************!*\
  !*** ./src/api/scroll/scroll-observer.types.ts ***!
  \*************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);

      /***/
    },

  /***/ './src/api/touch/index.ts':
    /*!********************************!*\
  !*** ./src/api/touch/index.ts ***!
  \********************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ touch: () =>
          /* reexport safe */ _touch__WEBPACK_IMPORTED_MODULE_0__.touch,
        /* harmony export */
      });
      /* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! ./touch */ './src/api/touch/touch.ts');

      /***/
    },

  /***/ './src/api/touch/touch.ts':
    /*!********************************!*\
  !*** ./src/api/touch/touch.ts ***!
  \********************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ touch: () => /* binding */ touch,
        /* harmony export */
      });
      /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js',
        );
      /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/dist/esm5/internal/observable/merge.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/map.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/switchMap.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/filter.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/take.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/pairwise.js',
        );
      /* harmony import */ var _operators_axis__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../operators/axis */ './src/operators/axis/index.ts',
        );
      /* harmony import */ var _utilities_axis__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../utilities/axis */ './src/utilities/axis/index.ts',
        );
      /* harmony import */ var _utilities_axis_axis__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../../utilities/axis/axis */ './src/utilities/axis/axis.ts',
        );
      /* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ../../utilities/element */ './src/utilities/element/index.ts',
        );
      var __assign =
        (undefined && undefined.__assign) ||
        function () {
          __assign =
            Object.assign ||
            function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };
      var __rest =
        (undefined && undefined.__rest) ||
        function (s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
              var i = 0, p = Object.getOwnPropertySymbols(s);
              i < p.length;
              i++
            ) {
              if (
                e.indexOf(p[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(s, p[i])
              )
                t[p[i]] = s[p[i]];
            }
          return t;
        };

      function touch(_a) {
        var externalEl = _a.el,
          _b = _a.gap,
          gap =
            _b === void 0
              ? _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.AXES
              : _b,
          _c = _a.onlyDirections,
          onlyDirections = _c === void 0 ? [] : _c,
          takeLimit = _a.takeLimit,
          _d = _a.onlyOnChangeDirection,
          onlyOnChangeDirection = _d === void 0 ? false : _d,
          onlyAxis = _a.onlyAxis,
          stopGrowingAt = _a.stopGrowingAt;
        var el = externalEl || document;
        var mouseDown$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(
          el,
          'mousedown',
        );
        var mouseMove$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(
          document,
          'mousemove',
        );
        var mouseUp$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(
          document,
          'mouseup',
        );
        var touchStart$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(
          el,
          'touchstart',
        );
        var touchEnd$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(
          document,
          'touchend',
        );
        var touchMove$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(
          el,
          'touchmove',
        );
        el.setAttribute('draggable', 'false');
        function typeOperator(type) {
          return (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(
            function (event) {
              return {
                event: event,
                type: type,
              };
            },
          );
        }
        var mouseDownType$ = mouseDown$.pipe(typeOperator('START'));
        var touchStartType$ = touchStart$.pipe(typeOperator('START'));
        var mouseUpType$ = mouseUp$.pipe(typeOperator('END'));
        var touchEndType$ = touchEnd$.pipe(typeOperator('END'));
        var mouseMoveType$ = mouseMove$.pipe(typeOperator('MOVE'));
        var touchMoveType$ = touchMove$.pipe(typeOperator('MOVE'));
        var mouseDragType$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(
          mouseDownType$,
          mouseDownType$.pipe(
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(
              function () {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(
                  mouseUpType$,
                  mouseMoveType$.pipe(
                    (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(
                      mouseUpType$,
                    ),
                  ),
                );
              },
            ),
          ),
        );
        var touchDragType$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(
          touchStartType$,
          touchStartType$.pipe(
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(
              function () {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(
                  touchMoveType$,
                  touchMoveType$.pipe(
                    (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(
                      touchEndType$,
                    ),
                  ),
                );
              },
            ),
          ),
        );
        function mouseAxesOperator() {
          return (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(
            function (_a) {
              var event = _a.event,
                args = __rest(_a, ['event']);
              var top = (0,
              _utilities_element__WEBPACK_IMPORTED_MODULE_3__.getTop)(el);
              var left = (0,
              _utilities_element__WEBPACK_IMPORTED_MODULE_3__.getLeft)(el);
              var axes = {
                x: onlyAxis === 'y' ? 0 : event.clientX - left,
                y: onlyAxis === 'x' ? 0 : event.clientY - top,
              };
              return __assign(__assign({}, args), {
                axes: axes,
                direction: '',
                relatives: {
                  angle: 0,
                  axes: _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.AXES,
                  breakpointAxes:
                    _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.AXES,
                  startAxes: _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.AXES,
                },
                startAxes: axes,
              });
            },
          );
        }
        function touchAxesOperator() {
          return (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(
            function (_a) {
              var event = _a.event,
                args = __rest(_a, ['event']);
              var axes = {
                x: onlyAxis === 'y' ? 0 : event.changedTouches[0].screenX,
                y: onlyAxis === 'x' ? 0 : event.changedTouches[0].screenY,
              };
              return __assign(__assign({}, args), {
                axes: axes,
                relatives: {
                  angle: 0,
                  axes: _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.AXES,
                  breakpointAxes:
                    _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.AXES,
                  startAxes: _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.AXES,
                },
                direction: '',
                startAxes: axes,
              });
            },
          );
        }
        var mouseDownAxes$ = mouseDownType$.pipe(mouseAxesOperator());
        var touchStartAxes$ = touchStartType$.pipe(touchAxesOperator());
        var mouseUpAxes$ = mouseUpType$.pipe(mouseAxesOperator());
        var touchEndAxes$ = touchEndType$.pipe(touchAxesOperator());
        var mouseDragAxes$ = mouseDragType$.pipe(mouseAxesOperator());
        var touchMoveAxes$ = touchDragType$.pipe(touchAxesOperator());
        var grab$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(
          mouseDownAxes$,
          touchStartAxes$,
        );
        var drop$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(
          mouseUpAxes$,
          touchEndAxes$,
        );
        var drag$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(
          mouseDragAxes$,
          touchMoveAxes$,
        );
        if (gap.x || gap.y) {
          drag$ = drag$.pipe(
            (0,
            _operators_axis__WEBPACK_IMPORTED_MODULE_0__.filterByAttributeAndGapOperator)(
              {
                gap: gap,
              },
            ),
          );
        }
        drag$ = drag$.pipe(
          (0,
          _operators_axis__WEBPACK_IMPORTED_MODULE_0__.putRelativeAxesOperator)(
            {
              stopGrowingAt: stopGrowingAt,
            },
          ),
        );
        drag$ = drag$.pipe(
          (0,
          _operators_axis__WEBPACK_IMPORTED_MODULE_0__.putAxesBreakpointOperator)(
            {
              gap: gap,
            },
          ),
        );
        drag$ = drag$.pipe(
          (0,
          _operators_axis__WEBPACK_IMPORTED_MODULE_0__.putDirectionOperator)(
            'axes',
            'direction',
            {
              key: 'type',
              value: 'START',
            },
          ),
        );
        if (onlyDirections.length) {
          drag$ = drag$.pipe(
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(
              function (item) {
                var isTheSameDirection = onlyDirections.some(
                  function (direction) {
                    return direction === item.direction;
                  },
                );
                return isTheSameDirection;
              },
            ),
          );
        }
        if (takeLimit) {
          drag$ = drag$.pipe(
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(takeLimit),
          );
        }
        if (onlyOnChangeDirection) {
          drag$ = drag$.pipe(
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.pairwise)(),
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(
              function (_a) {
                var last = _a[0],
                  current = _a[1];
                return (0,
                _utilities_axis_axis__WEBPACK_IMPORTED_MODULE_2__.isOnTheSameDirection)(
                  {
                    direction: current.direction,
                    lastDirection: last.direction,
                  },
                );
              },
            ),
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (_a) {
              var current = _a[1];
              return current;
            }),
          );
        }
        return {
          grab$: grab$,
          drop$: drop$,
          drag$: drag$,
        };
      }

      /***/
    },

  /***/ './src/interface/anchor/anchor.htmx.ts':
    /*!*********************************************!*\
  !*** ./src/interface/anchor/anchor.htmx.ts ***!
  \*********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxAnchor: () => /* binding */ htmxAnchor,
        /* harmony export */
      });
      /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../utilities/document */ './src/utilities/document/index.ts',
        );
      /* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! ./anchor */ './src/interface/anchor/anchor.ts');

      function htmxAnchor() {
        if (_utilities_document__WEBPACK_IMPORTED_MODULE_0__.IS_NODE_JS) return;
        var flag = document.querySelector(
          '[data-ovo-anchor="to-anchor"][data-ovo-auto]',
        );
        if (!flag) return;
        (0, _anchor__WEBPACK_IMPORTED_MODULE_1__.anchor)({});
      }

      /***/
    },

  /***/ './src/interface/anchor/anchor.ts':
    /*!****************************************!*\
  !*** ./src/interface/anchor/anchor.ts ***!
  \****************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ anchor: () => /* binding */ anchor,
        /* harmony export */
      });
      /* harmony import */ var _anchor_scss__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./anchor.scss */ './src/interface/anchor/anchor.scss',
        );
      /* harmony import */ var _utilities_axis__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../utilities/axis */ './src/utilities/axis/index.ts',
        );
      /* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../../utilities/element */ './src/utilities/element/index.ts',
        );

      var anchor = function (_a) {
        var _b = _a.elFloating,
          elFloating =
            _b === void 0
              ? document.querySelector('[data-ovo-anchor="floating"]')
              : _b,
          _c = _a.elToAnchor,
          elToAnchor =
            _c === void 0
              ? document.querySelector('[data-ovo-anchor="to-anchor"]')
              : _c;
        if (!elFloating || !elToAnchor) return;
        var elScrolling = (0,
        _utilities_element__WEBPACK_IMPORTED_MODULE_2__.getScrollParent)(
          elToAnchor,
        );
        var lastOffset = '';
        var floating = true;
        var lastToAnchorPosition = '';
        if (!elFloating || !elToAnchor) return;
        function toFloat(position) {
          if (floating && position === lastToAnchorPosition) return;
          lastToAnchorPosition = position;
          if (!elFloating) return;
          elFloating.dataset.anFixed = 'true';
          floating = true;
          if (position === 'up') {
            elFloating.dataset.anPosition = 'top';
            return;
          }
          elFloating.dataset.anPosition = 'bottom';
        }
        function toAnchor() {
          if (!floating || !elFloating) return;
          elFloating.dataset.anFixed = 'false';
          floating = false;
        }
        var getOffset = function (_a) {
          var floatingMiddle = _a.floatingMiddle,
            toAnchorMiddle = _a.toAnchorMiddle;
          if (floatingMiddle.y < toAnchorMiddle.y) {
            return 'up';
          }
          return 'down';
        };
        var verifyAndToAnchor = function (offset) {
          if (lastOffset !== offset) {
            lastOffset = offset;
            toAnchor();
          }
        };
        function verifyAboveAndToFloat(toAnchorMiddle) {
          var aboveTheScreen = (0,
          _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.isAboveTheScreen)(
            toAnchorMiddle.y,
          );
          if (aboveTheScreen) {
            toFloat('up');
            return true;
          }
          return false;
        }
        function verifyBelowAndToFloat(toAnchorMiddle) {
          var belowTheScreen = (0,
          _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.isBelowTheScreen)(
            toAnchorMiddle.y,
          );
          if (belowTheScreen) {
            toFloat('down');
            return true;
          }
          return false;
        }
        function handleScroll() {
          if (!elFloating || !elToAnchor) return;
          var floatingMiddle = (0,
          _utilities_element__WEBPACK_IMPORTED_MODULE_2__.getMiddleRelativeScreen)(
            elFloating,
          );
          var toAnchorMiddle = (0,
          _utilities_element__WEBPACK_IMPORTED_MODULE_2__.getMiddleRelativeScreen)(
            elToAnchor,
          );
          var offset = getOffset({
            floatingMiddle: floatingMiddle,
            toAnchorMiddle: toAnchorMiddle,
          });
          if (verifyAboveAndToFloat(toAnchorMiddle)) return;
          if (verifyBelowAndToFloat(toAnchorMiddle)) return;
          verifyAndToAnchor(offset);
        }
        handleScroll();
        elScrolling.addEventListener('scroll', handleScroll);
      };

      /***/
    },

  /***/ './src/interface/anchor/anchor.types.ts':
    /*!**********************************************!*\
  !*** ./src/interface/anchor/anchor.types.ts ***!
  \**********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);

      /***/
    },

  /***/ './src/interface/anchor/index.ts':
    /*!***************************************!*\
  !*** ./src/interface/anchor/index.ts ***!
  \***************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ anchor: () =>
          /* reexport safe */ _anchor__WEBPACK_IMPORTED_MODULE_1__.anchor,
        /* harmony export */ htmxAnchor: () =>
          /* reexport safe */ _anchor_htmx__WEBPACK_IMPORTED_MODULE_2__.htmxAnchor,
        /* harmony export */
      });
      /* harmony import */ var _anchor_types__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./anchor.types */ './src/interface/anchor/anchor.types.ts',
        );
      /* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! ./anchor */ './src/interface/anchor/anchor.ts');
      /* harmony import */ var _anchor_htmx__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./anchor.htmx */ './src/interface/anchor/anchor.htmx.ts',
        );

      /***/
    },

  /***/ './src/interface/carousel/carousel.htmx.ts':
    /*!*************************************************!*\
  !*** ./src/interface/carousel/carousel.htmx.ts ***!
  \*************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxCarousel: () => /* binding */ htmxCarousel,
        /* harmony export */
      });
      /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../utilities/document */ './src/utilities/document/index.ts',
        );
      /* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./carousel */ './src/interface/carousel/carousel.ts',
        );

      function htmxCarousel() {
        if (_utilities_document__WEBPACK_IMPORTED_MODULE_0__.IS_NODE_JS) return;
        var flag = document.querySelector(
          '[data-carousel="carousel"][data-ovo-auto]',
        );
        if (!flag) return;
        (0, _carousel__WEBPACK_IMPORTED_MODULE_1__.carousel)({});
      }

      /***/
    },

  /***/ './src/interface/carousel/carousel.ts':
    /*!********************************************!*\
  !*** ./src/interface/carousel/carousel.ts ***!
  \********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ carousel: () => /* binding */ carousel,
        /* harmony export */
      });
      /* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./carousel.scss */ './src/interface/carousel/carousel.scss',
        );
      /* harmony import */ var _scrollspy_scrollspy__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../scrollspy/scrollspy */ './src/interface/scrollspy/scrollspy.ts',
        );
      var __spreadArray =
        (undefined && undefined.__spreadArray) ||
        function (to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };

      var createSlide = function (_a) {
        var elSlide = _a.elSlide,
          elDot = _a.elDot,
          onActivate = _a.onActivate;
        var scrollSpyItem = (0,
        _scrollspy_scrollspy__WEBPACK_IMPORTED_MODULE_1__.createScrollspyItem)({
          elMenu: elDot,
          elContent: elSlide,
        });
        function activate() {
          scrollSpyItem.activate();
          if (!onActivate) return;
          onActivate();
        }
        function deActivate() {
          scrollSpyItem.deActivate();
        }
        return {
          activate: activate,
          deActivate: deActivate,
          content: elSlide,
        };
      };
      var carousel = function (_a) {
        var _b = _a.el,
          el =
            _b === void 0
              ? document.querySelector('[data-carousel="carousel"]')
              : _b,
          _c = _a.autoplayTime,
          extAutoplayTime = _c === void 0 ? 0 : _c,
          _d = _a.currentSlide,
          extCurrentSlide = _d === void 0 ? 0 : _d;
        if (!el) return;
        function getAutoPlayTime() {
          var _a;
          if (!el) return 0;
          return (_a = Number(el.dataset.carouselAutoplay)) !== null &&
            _a !== void 0
            ? _a
            : extAutoplayTime;
        }
        var currentSlide = extCurrentSlide;
        var autoplayTime = getAutoPlayTime();
        var elSlider = el.querySelector('[data-carousel="slider"]');
        var elSlides = Array.from(
          el.querySelectorAll('[data-carousel="slide"]'),
        );
        var elDots = Array.from(el.querySelectorAll('[data-carousel="dot"]'));
        var elArrows = Array.from(
          el.querySelectorAll('[data-carousel="arrow"]'),
        );
        function detectType() {
          var firstSlideWidth = elSlides[0].offsetWidth;
          var halfSliderWidth = elSlider.offsetWidth / 2;
          var firstSlideSmallerThanHalfSlider =
            firstSlideWidth <= halfSliderWidth + 1;
          if (firstSlideSmallerThanHalfSlider) {
            return 'BOX';
          }
          return 'CENTER';
        }
        var type = detectType();
        var elArrowLeft = elArrows[0],
          elArrowRight = elArrows[1];
        var mouseOver = false;
        var intervalAutoplay = null;
        function removeNotUsedDotsFromHTML(toRemove) {
          var _a;
          if (toRemove === void 0) {
            toRemove = 0;
          }
          var lastPosition = elDots.length - 1;
          for (var i = 0; i < toRemove; i += 1) {
            (_a = elDots[lastPosition - i]) === null || _a === void 0
              ? void 0
              : _a.remove();
          }
        }
        function removeNotUsedSlides() {
          if (type !== 'BOX') return;
          var firstSlideWidth = elSlides[0].offsetWidth;
          var sliderWidth = elSlider.offsetWidth;
          var visibleSlides = sliderWidth / (firstSlideWidth - 1);
          var toRemove = Math.round(visibleSlides - 1);
          var totalSlides = elSlides.length;
          removeNotUsedDotsFromHTML(toRemove);
          elSlides.splice(totalSlides - toRemove, toRemove);
          elDots.splice(totalSlides - toRemove, toRemove);
        }
        var quantity = elSlides.length;
        function getIndexSlideAtRight(index) {
          if (index === void 0) {
            index = 0;
          }
          return (((index + 1) % quantity) + quantity) % quantity;
        }
        function changeArrowsLink(index) {
          if (index === void 0) {
            index = 0;
          }
          if (!elArrowLeft || !elArrowRight) return;
          var slideAtLeft =
            elSlides[(((index - 1) % quantity) + quantity) % quantity];
          var slideAtRight = elSlides[getIndexSlideAtRight(index)];
          if (slideAtLeft) {
            elArrowLeft.href = '#'.concat(slideAtLeft.id);
          } else {
            elArrowLeft.href = '#';
          }
          if (slideAtRight) {
            elArrowRight.href = '#'.concat(slideAtRight.id);
          } else {
            elArrowRight.href = '#';
          }
        }
        function handleActivateSlide(index) {
          if (index === void 0) {
            index = 0;
          }
          changeArrowsLink(index);
        }
        function createSlides() {
          return elSlides.map(function (elSlide, index) {
            return createSlide({
              elDot: elDots[index],
              elSlide: elSlide,
              onActivate: function () {
                return handleActivateSlide(index);
              },
            });
          });
        }
        function scrollTo(index) {
          if (index === void 0) {
            index = 0;
          }
          var elTarget = elSlides[index];
          if (!elTarget) return;
          var position = elTarget.offsetLeft;
          var scrollLeft = position;
          if (type === 'CENTER') {
            var slideWidth = elTarget.offsetWidth;
            var sliderWidth = elSlider.offsetWidth;
            scrollLeft = position - (sliderWidth / 2 - slideWidth / 2);
          }
          elSlider.scrollLeft = scrollLeft;
          currentSlide = index;
        }
        function autoplay() {
          if (!autoplayTime) return;
          if (intervalAutoplay) {
            clearInterval(intervalAutoplay);
          }
          if (mouseOver) return;
          intervalAutoplay = setInterval(function () {
            var nextSlide = getIndexSlideAtRight(currentSlide);
            scrollTo(nextSlide);
          }, autoplayTime);
        }
        function scrollToAndAutoplay(index) {
          if (index === void 0) {
            index = 0;
          }
          scrollTo(index);
          autoplay();
        }
        function handleClickAnchor(e) {
          var _a;
          e.preventDefault();
          var anchorTarget = e.target;
          if (
            !anchorTarget ||
            !anchorTarget.attributes ||
            !anchorTarget.attributes.getNamedItem
          )
            return;
          var target =
            (_a = anchorTarget.attributes.getNamedItem('href')) === null ||
            _a === void 0
              ? void 0
              : _a.value;
          if (!target || target === '#') return;
          var index = elSlides.findIndex(function (_a) {
            var id = _a.id;
            return '#'.concat(id) === target;
          });
          scrollToAndAutoplay(index);
        }
        function showArrows() {
          elArrows.forEach(function (elArrow) {
            return elArrow.classList.add('is-arrow--loaded');
          });
        }
        function handleChangeSlide() {
          var slides = createSlides();
          showArrows();
          (0, _scrollspy_scrollspy__WEBPACK_IMPORTED_MODULE_1__.scrollspy)({
            list: slides,
            elRelative: elSlider,
            axis: 'x',
            method: type === 'BOX' ? 'CURRENT' : 'CLOSEST',
          });
        }
        function handleMouseOver() {
          mouseOver = true;
          autoplay();
        }
        function handleMouseOut() {
          mouseOver = false;
          autoplay();
        }
        function bindEvents() {
          var elAnchors = __spreadArray(
            __spreadArray([], Array.from(elDots), true),
            Array.from(elArrows),
            true,
          );
          elAnchors.forEach(function (elAchor) {
            return elAchor.addEventListener('click', handleClickAnchor);
          });
          elSlider.addEventListener('mouseover', handleMouseOver);
          elSlider.addEventListener('mouseout', handleMouseOut);
        }
        function startOnCurrentSlide() {
          if (type === 'BOX') {
            elSlides.forEach(function (elSlide) {
              var style = elSlide.style;
              style.scrollSnapAlign = 'start';
            });
          } else {
            elSlides.forEach(function (elSlide) {
              var style = elSlide.style;
              style.scrollSnapAlign = 'center';
            });
          }
          scrollToAndAutoplay(currentSlide);
        }
        removeNotUsedSlides();
        bindEvents();
        handleChangeSlide();
        startOnCurrentSlide();
        elSlider.dispatchEvent(new Event('scroll'));
      };

      /***/
    },

  /***/ './src/interface/carousel/carousel.types.ts':
    /*!**************************************************!*\
  !*** ./src/interface/carousel/carousel.types.ts ***!
  \**************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);

      /***/
    },

  /***/ './src/interface/carousel/index.ts':
    /*!*****************************************!*\
  !*** ./src/interface/carousel/index.ts ***!
  \*****************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ carousel: () =>
          /* reexport safe */ _carousel__WEBPACK_IMPORTED_MODULE_1__.carousel,
        /* harmony export */ htmxCarousel: () =>
          /* reexport safe */ _carousel_htmx__WEBPACK_IMPORTED_MODULE_2__.htmxCarousel,
        /* harmony export */
      });
      /* harmony import */ var _carousel_types__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./carousel.types */ './src/interface/carousel/carousel.types.ts',
        );
      /* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./carousel */ './src/interface/carousel/carousel.ts',
        );
      /* harmony import */ var _carousel_htmx__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./carousel.htmx */ './src/interface/carousel/carousel.htmx.ts',
        );

      /***/
    },

  /***/ './src/interface/fit-on-screen/fit-on-screen.htmx.ts':
    /*!***********************************************************!*\
  !*** ./src/interface/fit-on-screen/fit-on-screen.htmx.ts ***!
  \***********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxFitOnScreen: () =>
          /* binding */ htmxFitOnScreen,
        /* harmony export */
      });
      /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../utilities/document */ './src/utilities/document/index.ts',
        );
      /* harmony import */ var _fit_on_screen__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./fit-on-screen */ './src/interface/fit-on-screen/fit-on-screen.ts',
        );

      function htmxFitOnScreen() {
        if (_utilities_document__WEBPACK_IMPORTED_MODULE_0__.IS_NODE_JS) return;
        var flag = document.querySelector('[data-ovo-fs][data-ovo-auto]');
        if (!flag) return;
        (0, _fit_on_screen__WEBPACK_IMPORTED_MODULE_1__.fitOnScreen)({});
      }

      /***/
    },

  /***/ './src/interface/fit-on-screen/fit-on-screen.ts':
    /*!******************************************************!*\
  !*** ./src/interface/fit-on-screen/fit-on-screen.ts ***!
  \******************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ fitOnScreen: () => /* binding */ fitOnScreen,
        /* harmony export */
      });
      /* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../utilities/element */ './src/utilities/element/index.ts',
        );
      /* harmony import */ var _api_scroll__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../api/scroll */ './src/api/scroll/index.ts',
        );
      /* harmony import */ var _utilities_scroll__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../../utilities/scroll */ './src/utilities/scroll/index.ts',
        );
      /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ../../utilities/document */ './src/utilities/document/index.ts',
        );
      /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/dist/esm5/internal/Subject.js',
        );
      /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js',
        );

      function getOffsetByAxis(_a) {
        var el = _a.el,
          axis = _a.axis;
        if (axis === 'y')
          return (0, _utilities_element__WEBPACK_IMPORTED_MODULE_0__.getTop)(
            el,
          );
        return (0, _utilities_element__WEBPACK_IMPORTED_MODULE_0__.getLeft)(el);
      }
      function getScrolledByAxis(_a) {
        var el = _a.el,
          axis = _a.axis;
        if (axis === 'y') return el.scrollTop;
        return el.scrollLeft;
      }
      function fitOnScreen(_a) {
        var _b = _a.elRelative,
          elRelative =
            _b === void 0
              ? !_utilities_document__WEBPACK_IMPORTED_MODULE_3__.IS_NODE_JS
                ? document.querySelector('[data-ovo-fs="el"]') || document
                : undefined
              : _b,
          externalElsToFit = _a.elsToFit,
          _c = _a.proximityToFit,
          proximityToFit = _c === void 0 ? 240 : _c,
          _d = _a.axis,
          axis = _d === void 0 ? 'y' : _d,
          _e = _a.debounce,
          debounce = _e === void 0 ? 1000 : _e,
          limit = _a.limit,
          _f = _a.doNotFitIfAbove,
          doNotFitIfAbove = _f === void 0 ? true : _f,
          _g = _a.doNotFitIfBellow,
          doNotFitIfBellow = _g === void 0 ? true : _g;
        var destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        function destroy() {
          destroy$.next(true);
          destroy$.complete();
        }
        if (!elRelative) {
          destroy;
        }
        var elsToFit =
          externalElsToFit ||
          Array.from(document.querySelectorAll('[data-ovo-fs="content"]'));
        var isNearOfElement = function (_a) {
          var elToFit = _a.elToFit,
            scrolledPosition = _a.scrolledPosition;
          var offsetElToFit = getOffsetByAxis({ axis: axis, el: elToFit });
          var highOffsetElToFit = offsetElToFit - proximityToFit;
          var lowOffsetElToFit = offsetElToFit + proximityToFit;
          var betweenLowHigh =
            scrolledPosition > highOffsetElToFit &&
            scrolledPosition < lowOffsetElToFit;
          return betweenLowHigh;
        };
        function getNearElement(_a) {
          var _b = _a.scrolledPosition,
            scrolledPosition = _b === void 0 ? 0 : _b;
          return elsToFit.find(function (elToFit) {
            return isNearOfElement({
              elToFit: elToFit,
              scrolledPosition: scrolledPosition,
            });
          });
        }
        function handleScroll(_a) {
          var el = _a.el;
          if (
            doNotFitIfAbove &&
            !(0,
            _utilities_element__WEBPACK_IMPORTED_MODULE_0__.isTopOfElementAboveOfViewport)(
              elsToFit[0],
            )
          ) {
            return;
          }
          if (
            doNotFitIfBellow &&
            (0,
            _utilities_element__WEBPACK_IMPORTED_MODULE_0__.isTopOfElementAboveOfViewport)(
              elsToFit[elsToFit.length - 1],
            )
          ) {
            return;
          }
          var nearElement = getNearElement({
            scrolledPosition: getScrolledByAxis({ el: el, axis: axis }),
          });
          if (!nearElement) return;
          (0, _utilities_scroll__WEBPACK_IMPORTED_MODULE_2__.scrollTo)({
            top: getOffsetByAxis({ axis: axis, el: nearElement }),
            left: getOffsetByAxis({ axis: axis, el: nearElement }),
            scrollingElement: el,
          });
        }
        function bindEvents() {
          var observable = (0, _api_scroll__WEBPACK_IMPORTED_MODULE_1__.scroll)(
            {
              el: elRelative,
              debounce: debounce,
              limit: limit,
            },
          ).pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(destroy$));
          observable.subscribe(handleScroll);
        }
        bindEvents();
        return {
          destroy: destroy,
        };
      }

      /***/
    },

  /***/ './src/interface/fit-on-screen/fit-on-screen.types.ts':
    /*!************************************************************!*\
  !*** ./src/interface/fit-on-screen/fit-on-screen.types.ts ***!
  \************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);

      /***/
    },

  /***/ './src/interface/fit-on-screen/index.ts':
    /*!**********************************************!*\
  !*** ./src/interface/fit-on-screen/index.ts ***!
  \**********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ fitOnScreen: () =>
          /* reexport safe */ _fit_on_screen__WEBPACK_IMPORTED_MODULE_0__.fitOnScreen,
        /* harmony export */ htmxFitOnScreen: () =>
          /* reexport safe */ _fit_on_screen_htmx__WEBPACK_IMPORTED_MODULE_2__.htmxFitOnScreen,
        /* harmony export */
      });
      /* harmony import */ var _fit_on_screen__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./fit-on-screen */ './src/interface/fit-on-screen/fit-on-screen.ts',
        );
      /* harmony import */ var _fit_on_screen_types__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./fit-on-screen.types */ './src/interface/fit-on-screen/fit-on-screen.types.ts',
        );
      /* harmony import */ var _fit_on_screen_htmx__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./fit-on-screen.htmx */ './src/interface/fit-on-screen/fit-on-screen.htmx.ts',
        );

      /***/
    },

  /***/ './src/interface/index.ts':
    /*!********************************!*\
  !*** ./src/interface/index.ts ***!
  \********************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ ScrollableTabs: () =>
          /* reexport safe */ _scrollable_tabs__WEBPACK_IMPORTED_MODULE_10__.ScrollableTabs,
        /* harmony export */ StickyHeader: () =>
          /* reexport safe */ _sticky_header__WEBPACK_IMPORTED_MODULE_9__.StickyHeader,
        /* harmony export */ anchor: () =>
          /* reexport safe */ _anchor__WEBPACK_IMPORTED_MODULE_0__.anchor,
        /* harmony export */ carousel: () =>
          /* reexport safe */ _carousel__WEBPACK_IMPORTED_MODULE_1__.carousel,
        /* harmony export */ createScrollSpyItem: () =>
          /* reexport safe */ _scrollspy__WEBPACK_IMPORTED_MODULE_6__.createScrollSpyItem,
        /* harmony export */ createScrollspyItem: () =>
          /* reexport safe */ _scrollspy__WEBPACK_IMPORTED_MODULE_6__.createScrollspyItem,
        /* harmony export */ fitOnScreen: () =>
          /* reexport safe */ _fit_on_screen__WEBPACK_IMPORTED_MODULE_2__.fitOnScreen,
        /* harmony export */ htmxAnchor: () =>
          /* reexport safe */ _anchor__WEBPACK_IMPORTED_MODULE_0__.htmxAnchor,
        /* harmony export */ htmxCarousel: () =>
          /* reexport safe */ _carousel__WEBPACK_IMPORTED_MODULE_1__.htmxCarousel,
        /* harmony export */ htmxFitOnScreen: () =>
          /* reexport safe */ _fit_on_screen__WEBPACK_IMPORTED_MODULE_2__.htmxFitOnScreen,
        /* harmony export */ htmxPageProgress: () =>
          /* reexport safe */ _page_progress__WEBPACK_IMPORTED_MODULE_4__.htmxPageProgress,
        /* harmony export */ htmxParallax: () =>
          /* reexport safe */ _parallax__WEBPACK_IMPORTED_MODULE_5__.htmxParallax,
        /* harmony export */ htmxScrollableSticky: () =>
          /* reexport safe */ _scrollable_sticky__WEBPACK_IMPORTED_MODULE_7__.htmxScrollableSticky,
        /* harmony export */ htmxScrollableTabs: () =>
          /* reexport safe */ _scrollable_tabs__WEBPACK_IMPORTED_MODULE_10__.htmxScrollableTabs,
        /* harmony export */ htmxScrollspy: () =>
          /* reexport safe */ _scrollspy__WEBPACK_IMPORTED_MODULE_6__.htmxScrollspy,
        /* harmony export */ htmxSpinImages: () =>
          /* reexport safe */ _spin_images__WEBPACK_IMPORTED_MODULE_8__.htmxSpinImages,
        /* harmony export */ htmxStickyHeader: () =>
          /* reexport safe */ _sticky_header__WEBPACK_IMPORTED_MODULE_9__.htmxStickyHeader,
        /* harmony export */ joyPad: () =>
          /* reexport safe */ _joypad__WEBPACK_IMPORTED_MODULE_3__.joyPad,
        /* harmony export */ pageProgress: () =>
          /* reexport safe */ _page_progress__WEBPACK_IMPORTED_MODULE_4__.pageProgress,
        /* harmony export */ parallax: () =>
          /* reexport safe */ _parallax__WEBPACK_IMPORTED_MODULE_5__.parallax,
        /* harmony export */ scrollSpy: () =>
          /* reexport safe */ _scrollspy__WEBPACK_IMPORTED_MODULE_6__.scrollSpy,
        /* harmony export */ scrollableSticky: () =>
          /* reexport safe */ _scrollable_sticky__WEBPACK_IMPORTED_MODULE_7__.scrollableSticky,
        /* harmony export */ scrollspy: () =>
          /* reexport safe */ _scrollspy__WEBPACK_IMPORTED_MODULE_6__.scrollspy,
        /* harmony export */ spinImages: () =>
          /* reexport safe */ _spin_images__WEBPACK_IMPORTED_MODULE_8__.spinImages,
        /* harmony export */
      });
      /* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! ./anchor */ './src/interface/anchor/index.ts');
      /* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./carousel */ './src/interface/carousel/index.ts',
        );
      /* harmony import */ var _fit_on_screen__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./fit-on-screen */ './src/interface/fit-on-screen/index.ts',
        );
      /* harmony import */ var _joypad__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(/*! ./joypad */ './src/interface/joypad/index.ts');
      /* harmony import */ var _page_progress__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ./page-progress */ './src/interface/page-progress/index.ts',
        );
      /* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! ./parallax */ './src/interface/parallax/index.ts',
        );
      /* harmony import */ var _scrollspy__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! ./scrollspy */ './src/interface/scrollspy/index.ts',
        );
      /* harmony import */ var _scrollable_sticky__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(
          /*! ./scrollable-sticky */ './src/interface/scrollable-sticky/index.ts',
        );
      /* harmony import */ var _spin_images__WEBPACK_IMPORTED_MODULE_8__ =
        __webpack_require__(
          /*! ./spin-images */ './src/interface/spin-images/index.ts',
        );
      /* harmony import */ var _sticky_header__WEBPACK_IMPORTED_MODULE_9__ =
        __webpack_require__(
          /*! ./sticky-header */ './src/interface/sticky-header/index.ts',
        );
      /* harmony import */ var _scrollable_tabs__WEBPACK_IMPORTED_MODULE_10__ =
        __webpack_require__(
          /*! ./scrollable-tabs */ './src/interface/scrollable-tabs/index.ts',
        );

      /***/
    },

  /***/ './src/interface/joypad/index.ts':
    /*!***************************************!*\
  !*** ./src/interface/joypad/index.ts ***!
  \***************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ joyPad: () =>
          /* reexport safe */ _joypad__WEBPACK_IMPORTED_MODULE_0__.joyPad,
        /* harmony export */
      });
      /* harmony import */ var _joypad__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! ./joypad */ './src/interface/joypad/joypad.ts');

      /***/
    },

  /***/ './src/interface/joypad/joypad.ts':
    /*!****************************************!*\
  !*** ./src/interface/joypad/joypad.ts ***!
  \****************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ joyPad: () => /* binding */ joyPad,
        /* harmony export */
      });
      var joyPad = function () {};

      /***/
    },

  /***/ './src/interface/page-progress/index.ts':
    /*!**********************************************!*\
  !*** ./src/interface/page-progress/index.ts ***!
  \**********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxPageProgress: () =>
          /* reexport safe */ _page_progress_htmx__WEBPACK_IMPORTED_MODULE_1__.htmxPageProgress,
        /* harmony export */ pageProgress: () =>
          /* reexport safe */ _page_progress__WEBPACK_IMPORTED_MODULE_0__.pageProgress,
        /* harmony export */
      });
      /* harmony import */ var _page_progress__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./page-progress */ './src/interface/page-progress/page-progress.ts',
        );
      /* harmony import */ var _page_progress_htmx__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./page-progress.htmx */ './src/interface/page-progress/page-progress.htmx.ts',
        );

      /***/
    },

  /***/ './src/interface/page-progress/page-progress.htmx.ts':
    /*!***********************************************************!*\
  !*** ./src/interface/page-progress/page-progress.htmx.ts ***!
  \***********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxPageProgress: () =>
          /* binding */ htmxPageProgress,
        /* harmony export */
      });
      /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../utilities/document */ './src/utilities/document/index.ts',
        );
      /* harmony import */ var _page_progress__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./page-progress */ './src/interface/page-progress/page-progress.ts',
        );

      function htmxPageProgress() {
        if (_utilities_document__WEBPACK_IMPORTED_MODULE_0__.IS_NODE_JS) return;
        var flag = document.querySelector('[data-ovo-pp="bar"][data-ovo-auto]');
        if (!flag) return;
        (0, _page_progress__WEBPACK_IMPORTED_MODULE_1__.pageProgress)({});
      }

      /***/
    },

  /***/ './src/interface/page-progress/page-progress.ts':
    /*!******************************************************!*\
  !*** ./src/interface/page-progress/page-progress.ts ***!
  \******************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ pageProgress: () => /* binding */ pageProgress,
        /* harmony export */
      });
      /* harmony import */ var _api_scroll__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../api/scroll */ './src/api/scroll/index.ts',
        );
      /* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../utilities/element */ './src/utilities/element/index.ts',
        );
      /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../../utilities/document */ './src/utilities/document/index.ts',
        );

      var pageProgress = function (_a) {
        var _b = _a.el,
          el =
            _b === void 0
              ? !_utilities_document__WEBPACK_IMPORTED_MODULE_2__.IS_NODE_JS
                ? document.querySelector('[data-ovo-pp="bar"]')
                : undefined
              : _b;
        var elRelative = (0,
        _utilities_element__WEBPACK_IMPORTED_MODULE_1__.getScrollingEl)(
          document,
        );
        if (!el) return;
        el.style.transformOrigin = 'left';
        function handleScroll(_a) {
          var y = _a.axes.y;
          var percent =
            y /
            (0,
            _utilities_element__WEBPACK_IMPORTED_MODULE_1__.getMaxVerticalScroll)(
              elRelative,
            );
          if (!el) return;
          el.style.transform = 'scaleX('.concat(percent, ')');
        }
        handleScroll({
          axes: {
            y: 0,
            x: 0,
          },
        });
        (0, _api_scroll__WEBPACK_IMPORTED_MODULE_0__.scroll)({}).subscribe(
          handleScroll,
        );
      };

      /***/
    },

  /***/ './src/interface/parallax/index.ts':
    /*!*****************************************!*\
  !*** ./src/interface/parallax/index.ts ***!
  \*****************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxParallax: () =>
          /* reexport safe */ _parallax_htmx__WEBPACK_IMPORTED_MODULE_2__.htmxParallax,
        /* harmony export */ parallax: () =>
          /* reexport safe */ _parallax__WEBPACK_IMPORTED_MODULE_0__.parallax,
        /* harmony export */
      });
      /* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./parallax */ './src/interface/parallax/parallax.ts',
        );
      /* harmony import */ var _parallax_types__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./parallax.types */ './src/interface/parallax/parallax.types.ts',
        );
      /* harmony import */ var _parallax_htmx__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./parallax.htmx */ './src/interface/parallax/parallax.htmx.ts',
        );

      /***/
    },

  /***/ './src/interface/parallax/parallax.htmx.ts':
    /*!*************************************************!*\
  !*** ./src/interface/parallax/parallax.htmx.ts ***!
  \*************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxParallax: () => /* binding */ htmxParallax,
        /* harmony export */
      });
      /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../utilities/document */ './src/utilities/document/index.ts',
        );
      /* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./parallax */ './src/interface/parallax/parallax.ts',
        );

      function htmxParallax() {
        if (_utilities_document__WEBPACK_IMPORTED_MODULE_0__.IS_NODE_JS) return;
        var flag = document.querySelector('[data-ovo-parallax][data-ovo-auto]');
        if (!flag) return;
        (0, _parallax__WEBPACK_IMPORTED_MODULE_1__.parallax)({});
      }

      /***/
    },

  /***/ './src/interface/parallax/parallax.ts':
    /*!********************************************!*\
  !*** ./src/interface/parallax/parallax.ts ***!
  \********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ parallax: () => /* binding */ parallax,
        /* harmony export */
      });
      /* harmony import */ var _parallax_scss__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./parallax.scss */ './src/interface/parallax/parallax.scss',
        );
      /* harmony import */ var _api_scroll__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../api/scroll */ './src/api/scroll/index.ts',
        );

      function parallax(_a) {
        var _b, _c, _d;
        var _e = _a.el,
          el =
            _e === void 0 ? document.querySelector('[data-ovo-parallax]') : _e,
          externalElContent = _a.elContent,
          callback = _a.callback,
          _f = _a.distance,
          externalDistance = _f === void 0 ? 0 : _f,
          externalElRelative = _a.elRelative,
          _g = _a.gap,
          externalGap = _g === void 0 ? 0 : _g,
          externalAxis = _a.axis;
        var axis = el.dataset.ovoParallaxAxis || externalAxis || 'y';
        var distance =
          externalDistance || Number(el.dataset.ovoParallaxDistance) || 1000;
        var gap = externalGap || Number(el.dataset.ovoParallaxGap) || 0;
        var elRelative =
          (_c =
            externalElRelative !== null && externalElRelative !== void 0
              ? externalElRelative
              : el.dataset.ovoParallaxElRelative &&
                document.querySelector(
                  (_b = el.dataset.ovoParallaxElRelative) !== null &&
                    _b !== void 0
                    ? _b
                    : '',
                )) !== null && _c !== void 0
            ? _c
            : document;
        var elContent =
          (_d =
            externalElContent !== null && externalElContent !== void 0
              ? externalElContent
              : el.querySelector('[data-ovo-parallax="content"]')) !== null &&
          _d !== void 0
            ? _d
            : el.firstElementChild;
        if (!elContent) return;
        elContent.style.willChange = 'transform';
        function doParallax(translate) {
          if (translate === void 0) {
            translate = 0;
          }
          if (!elContent) return;
          if (axis === 'y') {
            elContent.style.transform = 'translate3d(0, '.concat(
              translate,
              'px, 0)',
            );
          } else {
            elContent.style.transform = 'translate3d('.concat(
              translate,
              'px, 0, 0)',
            );
          }
          if (callback) callback(translate);
        }
        function handleScroll(_a) {
          var axes = _a.axes,
            elScrolled = _a.el;
          var position = axis === 'x' ? axes.x : axes.y;
          function calculateTranslate(currentPosition) {
            if (currentPosition === void 0) {
              currentPosition = 0;
            }
            var perspective = distance / 500 || 1;
            var start = currentPosition - gap > 0 ? currentPosition - gap : 0;
            return start / perspective;
          }
          function isElOnScreen(_a) {
            var _b = _a.translate,
              translate = _b === void 0 ? 0 : _b;
            var _c = elScrolled.getBoundingClientRect(),
              bottom = _c.bottom,
              top = _c.top;
            var visualBottom = bottom - translate;
            var topOnScreen = top >= 0;
            var bottomOnScreen = visualBottom >= 0;
            var onScreen = topOnScreen || bottomOnScreen;
            return onScreen;
          }
          function getTranslate() {
            if (position < gap) {
              return calculateTranslate(0);
            }
            return calculateTranslate(position);
          }
          var translate = getTranslate();
          if (!isElOnScreen({ translate: translate })) return;
          doParallax(translate);
        }
        function bindScroll() {
          var observable = (0, _api_scroll__WEBPACK_IMPORTED_MODULE_1__.scroll)(
            {
              el: elRelative,
            },
          );
          observable.subscribe(handleScroll);
        }
        bindScroll();
      }

      /***/
    },

  /***/ './src/interface/parallax/parallax.types.ts':
    /*!**************************************************!*\
  !*** ./src/interface/parallax/parallax.types.ts ***!
  \**************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);

      /***/
    },

  /***/ './src/interface/scrollable-sticky/index.ts':
    /*!**************************************************!*\
  !*** ./src/interface/scrollable-sticky/index.ts ***!
  \**************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxScrollableSticky: () =>
          /* reexport safe */ _scrollable_sticky_htmx__WEBPACK_IMPORTED_MODULE_1__.htmxScrollableSticky,
        /* harmony export */ scrollableSticky: () =>
          /* reexport safe */ _scrollable_sticky__WEBPACK_IMPORTED_MODULE_0__.scrollableSticky,
        /* harmony export */
      });
      /* harmony import */ var _scrollable_sticky__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./scrollable-sticky */ './src/interface/scrollable-sticky/scrollable-sticky.ts',
        );
      /* harmony import */ var _scrollable_sticky_htmx__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./scrollable-sticky.htmx */ './src/interface/scrollable-sticky/scrollable-sticky.htmx.ts',
        );
      /* harmony import */ var _scrollable_sticky_types__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./scrollable-sticky.types */ './src/interface/scrollable-sticky/scrollable-sticky.types.ts',
        );

      /***/
    },

  /***/ './src/interface/scrollable-sticky/scrollable-sticky.htmx.ts':
    /*!*******************************************************************!*\
  !*** ./src/interface/scrollable-sticky/scrollable-sticky.htmx.ts ***!
  \*******************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxScrollableSticky: () =>
          /* binding */ htmxScrollableSticky,
        /* harmony export */
      });
      /* harmony import */ var _scrollable_sticky__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./scrollable-sticky */ './src/interface/scrollable-sticky/scrollable-sticky.ts',
        );

      function htmxScrollableSticky() {
        if (typeof document === 'undefined') return;
        var elContainer = document.querySelector('[ovo-scrollable-sticky]');
        if (elContainer) {
          (0, _scrollable_sticky__WEBPACK_IMPORTED_MODULE_0__.scrollableSticky)(
            { elContainer: elContainer },
          );
        }
      }

      /***/
    },

  /***/ './src/interface/scrollable-sticky/scrollable-sticky.ts':
    /*!**************************************************************!*\
  !*** ./src/interface/scrollable-sticky/scrollable-sticky.ts ***!
  \**************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ scrollableSticky: () =>
          /* binding */ scrollableSticky,
        /* harmony export */
      });
      /* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! lodash/isFunction */ './node_modules/lodash/isFunction.js',
        );
      /* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var _scrollable_sticky_scss__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./scrollable-sticky.scss */ './src/interface/scrollable-sticky/scrollable-sticky.scss',
        );
      /* harmony import */ var _api_scroll__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../../api/scroll */ './src/api/scroll/index.ts',
        );
      /* harmony import */ var _utilities_view_view__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ../../utilities/view/view */ './src/utilities/view/view.ts',
        );
      /* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ../../utilities/element */ './src/utilities/element/index.ts',
        );

      function scrollableSticky(_a) {
        var _b = _a.el,
          el =
            _b === void 0
              ? document.querySelector('[ovo-scrollable-sticky_content]')
              : _b,
          _c = _a.elContainer,
          elContainer =
            _c === void 0
              ? document.querySelector('[ovo-scrollable-sticky]')
              : _c,
          onUnpin = _a.onUnpin,
          onPin = _a.onPin,
          onUnfix = _a.onUnfix,
          onFix = _a.onFix;
        var fixed = false;
        var pinnedOnBottom = false;
        function applyMinHeightToScrollableElement() {
          var parentEl = elContainer.parentNode;
          // parentEl.setAttribute('data-ovo_ss', 'wrapper');
          parentEl.style.minHeight = String(
            (0, _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getHeight)(
              elContainer,
            ),
          );
        }
        applyMinHeightToScrollableElement();
        function pinAndFix() {
          function pinOnBottom() {
            if (pinnedOnBottom) return;
            elContainer.dataset.ovo_scrollable_sticky_pinned = 'bottom';
            pinnedOnBottom = true;
            if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(onPin))
              onPin();
          }
          function unpinOnBottom() {
            if (!pinnedOnBottom) return;
            elContainer.dataset.ovo_scrollable_sticky_pinned = '';
            pinnedOnBottom = false;
            if (
              lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(onUnpin)
            )
              onUnpin();
          }
          function fix() {
            if (fixed) return;
            fixed = true;
            elContainer.dataset.ovo_scrollable_sticky_fixed = 'true';
            el.style.width = String(elContainer.offsetWidth);
            if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(onFix))
              onFix();
          }
          function unfix() {
            if (!fixed) return;
            fixed = false;
            elContainer.dataset.ovo_scrollable_sticky_fixed = 'false';
            el.style.transform = 'translateY(0)';
            if (
              lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(onUnfix)
            )
              onUnfix();
          }
          if (
            (0,
            _utilities_element__WEBPACK_IMPORTED_MODULE_4__.isAboveAndBelowScreen)(
              elContainer,
            )
          ) {
            fix();
            unpinOnBottom();
            return;
          }
          unfix();
          if (
            !(0,
            _utilities_element__WEBPACK_IMPORTED_MODULE_4__.isBottomOfElementBelowOfViewport)(
              elContainer,
            )
          ) {
            pinOnBottom();
            return;
          }
          unpinOnBottom();
        }
        var handleScroll = (function () {
          var toScroll = 0;
          var lastPositionScroll = 0;
          return function (_a) {
            var scrollPosition = _a.axes.y;
            pinAndFix();
            if (!fixed) return;
            var minToScroll = 0;
            var maxToScroll =
              el.offsetHeight -
              (0,
              _utilities_view_view__WEBPACK_IMPORTED_MODULE_3__.getViewportHeight)();
            var positionScroll = scrollPosition - elContainer.offsetTop;
            var difference = positionScroll - lastPositionScroll;
            lastPositionScroll = positionScroll;
            toScroll += difference;
            if (toScroll > maxToScroll) {
              toScroll = maxToScroll;
            }
            if (toScroll < minToScroll) {
              toScroll = minToScroll;
            }
            el.style.transform = 'translateY(-'.concat(toScroll, 'px)');
          };
        })();
        var observable = (0, _api_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)(
          {},
        );
        observable.subscribe(handleScroll);
      }

      /***/
    },

  /***/ './src/interface/scrollable-sticky/scrollable-sticky.types.ts':
    /*!********************************************************************!*\
  !*** ./src/interface/scrollable-sticky/scrollable-sticky.types.ts ***!
  \********************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);

      /***/
    },

  /***/ './src/interface/scrollable-tabs/index.ts':
    /*!************************************************!*\
  !*** ./src/interface/scrollable-tabs/index.ts ***!
  \************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ ScrollableTabs: () =>
          /* reexport safe */ _scrollable_tabs__WEBPACK_IMPORTED_MODULE_0__.ScrollableTabs,
        /* harmony export */ htmxScrollableTabs: () =>
          /* reexport safe */ _scrollable_tabs_htmx__WEBPACK_IMPORTED_MODULE_1__.htmxScrollableTabs,
        /* harmony export */
      });
      /* harmony import */ var _scrollable_tabs__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./scrollable-tabs */ './src/interface/scrollable-tabs/scrollable-tabs.ts',
        );
      /* harmony import */ var _scrollable_tabs_htmx__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./scrollable-tabs.htmx */ './src/interface/scrollable-tabs/scrollable-tabs.htmx.ts',
        );

      /***/
    },

  /***/ './src/interface/scrollable-tabs/scrollable-tabs.htmx.ts':
    /*!***************************************************************!*\
  !*** ./src/interface/scrollable-tabs/scrollable-tabs.htmx.ts ***!
  \***************************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxScrollableTabs: () =>
          /* binding */ htmxScrollableTabs,
        /* harmony export */
      });
      /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../utilities/document */ './src/utilities/document/index.ts',
        );
      /* harmony import */ var _scrollable_tabs__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./scrollable-tabs */ './src/interface/scrollable-tabs/scrollable-tabs.ts',
        );

      function htmxScrollableTabs() {
        if (_utilities_document__WEBPACK_IMPORTED_MODULE_0__.IS_NODE_JS) return;
        var el = document.querySelector(
          '[data-ovo-scrollable-tabs][data-ovo-auto]',
        );
        if (!el) return;
        (0, _scrollable_tabs__WEBPACK_IMPORTED_MODULE_1__.ScrollableTabs)({
          el: el,
        });
      }

      /***/
    },

  /***/ './src/interface/scrollable-tabs/scrollable-tabs.ts':
    /*!**********************************************************!*\
  !*** ./src/interface/scrollable-tabs/scrollable-tabs.ts ***!
  \**********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ ScrollableTabs: () => /* binding */ ScrollableTabs,
        /* harmony export */
      });
      /* harmony import */ var _scrollable_tabs_scss__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./scrollable-tabs.scss */ './src/interface/scrollable-tabs/scrollable-tabs.scss',
        );

      function ScrollableTabs(_a) {
        var _b = _a.el,
          el = _b === void 0 ? document : _b;
        var items = Array.from(el.children);
        items.forEach(function (item) {
          item.setAttribute('tabindex', '0');
          item.addEventListener('focus', function () {
            item.scrollIntoView({
              behavior: 'smooth',
              inline: 'nearest',
            });
          });
        });
      }

      /***/
    },

  /***/ './src/interface/scrollspy/index.ts':
    /*!******************************************!*\
  !*** ./src/interface/scrollspy/index.ts ***!
  \******************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ createScrollSpyItem: () =>
          /* reexport safe */ _scrollspy__WEBPACK_IMPORTED_MODULE_1__.createScrollSpyItem,
        /* harmony export */ createScrollspyItem: () =>
          /* reexport safe */ _scrollspy__WEBPACK_IMPORTED_MODULE_1__.createScrollspyItem,
        /* harmony export */ htmxScrollspy: () =>
          /* reexport safe */ _scrollspy_htmx__WEBPACK_IMPORTED_MODULE_2__.htmxScrollspy,
        /* harmony export */ scrollSpy: () =>
          /* reexport safe */ _scrollspy__WEBPACK_IMPORTED_MODULE_1__.scrollSpy,
        /* harmony export */ scrollspy: () =>
          /* reexport safe */ _scrollspy__WEBPACK_IMPORTED_MODULE_1__.scrollspy,
        /* harmony export */
      });
      /* harmony import */ var _scrollspy_types__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./scrollspy.types */ './src/interface/scrollspy/scrollspy.types.ts',
        );
      /* harmony import */ var _scrollspy__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./scrollspy */ './src/interface/scrollspy/scrollspy.ts',
        );
      /* harmony import */ var _scrollspy_htmx__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ./scrollspy.htmx */ './src/interface/scrollspy/scrollspy.htmx.ts',
        );

      /***/
    },

  /***/ './src/interface/scrollspy/scrollspy.htmx.ts':
    /*!***************************************************!*\
  !*** ./src/interface/scrollspy/scrollspy.htmx.ts ***!
  \***************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxScrollspy: () => /* binding */ htmxScrollspy,
        /* harmony export */
      });
      /* harmony import */ var _scrollspy__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./scrollspy */ './src/interface/scrollspy/scrollspy.ts',
        );

      function start(el) {
        var _a;
        var elMenus = Array.from(el.querySelectorAll('[ovo-scrollspy-menu]'));
        var elContents = Array.from(
          el.querySelectorAll('[ovo-scrollspy-content]'),
        );
        if (!elMenus) {
          console.warn('declare the scroll spy menus');
          return;
        }
        if (!elContents) {
          console.warn('declare the scroll spy contents');
          return;
        }
        var list = elContents.map(function (elContent, index) {
          return (0,
          _scrollspy__WEBPACK_IMPORTED_MODULE_0__.createScrollspyItem)({
            elContent: elContent,
            elMenu: elMenus[index],
          });
        });
        var debounce = Number(el.getAttribute('ovo-scrollspy-debounce')) || 0;
        var elRelative =
          (_a = el.hasAttribute('ovo-scrollspy-relative')
            ? el
            : el.querySelector('[ovo-scrollspy-relative]')) !== null &&
          _a !== void 0
            ? _a
            : undefined;
        var method = el.getAttribute('ovo-scrollspy_method') || undefined;
        (0, _scrollspy__WEBPACK_IMPORTED_MODULE_0__.scrollspy)({
          list: list,
          elRelative: elRelative,
          debounce: debounce,
          method: method,
        });
      }
      function htmxScrollspy() {
        var els = Array.from(document.querySelectorAll('[ovo-scrollspy]'));
        els.forEach(start);
      }

      /***/
    },

  /***/ './src/interface/scrollspy/scrollspy.ts':
    /*!**********************************************!*\
  !*** ./src/interface/scrollspy/scrollspy.ts ***!
  \**********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ createScrollSpyItem: () =>
          /* binding */ createScrollSpyItem,
        /* harmony export */ createScrollspyItem: () =>
          /* binding */ createScrollspyItem,
        /* harmony export */ scrollSpy: () => /* binding */ scrollSpy,
        /* harmony export */ scrollspy: () => /* binding */ scrollspy,
        /* harmony export */
      });
      /* harmony import */ var _api_scroll__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../api/scroll */ './src/api/scroll/index.ts',
        );
      /* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../utilities/element */ './src/utilities/element/index.ts',
        );
      /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../../utilities/document */ './src/utilities/document/index.ts',
        );

      var ACTIVE_CLASS = 'ovo-active';
      var createScrollspyItem = function (_a) {
        var elMenu = _a.elMenu,
          elContent = _a.elContent,
          callback = _a.callback;
        function activate() {
          if (!elMenu || !elContent) return;
          elMenu.classList.add(ACTIVE_CLASS);
          elContent.classList.add(ACTIVE_CLASS);
          if (callback) callback({ active: true });
        }
        function deActivate() {
          if (!elMenu || !elContent) return;
          elMenu.classList.remove(ACTIVE_CLASS);
          elContent.classList.remove(ACTIVE_CLASS);
          if (callback) callback({ active: false });
        }
        return {
          activate: activate,
          deActivate: deActivate,
          content: elContent,
        };
      };
      function scrollspy(_a) {
        var list = _a.list,
          _b = _a.elRelative,
          elRelative =
            _b === void 0
              ? !_utilities_document__WEBPACK_IMPORTED_MODULE_2__.IS_NODE_JS
                ? document
                : undefined
              : _b,
          _c = _a.method,
          method = _c === void 0 ? 'CURRENT' : _c,
          _d = _a.axis,
          axis = _d === void 0 ? 'y' : _d,
          _e = _a.debounce,
          debounce = _e === void 0 ? 0 : _e;
        if (!elRelative || !list.length) return;
        var scrollingElement = elRelative;
        if (elRelative instanceof Document && list[0].content) {
          scrollingElement =
            (0,
            _utilities_element__WEBPACK_IMPORTED_MODULE_1__.getScrollParent)(
              list[0].content,
            ) || document;
        }
        var currentActive;
        var getTheActive;
        function getTheCurrent(position) {
          return list.reduce(function (previousValue, currentValue) {
            var _a, _b, _c, _d;
            var currentStart =
              axis === 'y'
                ? (_b =
                    (_a =
                      currentValue === null || currentValue === void 0
                        ? void 0
                        : currentValue.content) === null || _a === void 0
                      ? void 0
                      : _a.offsetTop) !== null && _b !== void 0
                  ? _b
                  : 0
                : (_d =
                      (_c =
                        currentValue === null || currentValue === void 0
                          ? void 0
                          : currentValue.content) === null || _c === void 0
                        ? void 0
                        : _c.offsetLeft) !== null && _d !== void 0
                  ? _d
                  : 0;
            if (Math.round(position[axis]) >= Math.round(currentStart)) {
              return currentValue;
            }
            return previousValue;
          });
        }
        function getTheClosest(position, scrollingElement) {
          return list.reduce(function (previousValue, currentValue) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            var previousStart =
              axis === 'y'
                ? (_b =
                    (_a =
                      previousValue === null || previousValue === void 0
                        ? void 0
                        : previousValue.content) === null || _a === void 0
                      ? void 0
                      : _a.offsetTop) !== null && _b !== void 0
                  ? _b
                  : 0 - 1
                : (_d =
                      (_c =
                        previousValue === null || previousValue === void 0
                          ? void 0
                          : previousValue.content) === null || _c === void 0
                        ? void 0
                        : _c.offsetLeft) !== null && _d !== void 0
                  ? _d
                  : 0 - 1;
            var previousEnd =
              axis === 'y'
                ? (_f =
                    (_e =
                      previousValue === null || previousValue === void 0
                        ? void 0
                        : previousValue.content) === null || _e === void 0
                      ? void 0
                      : _e.offsetHeight) !== null && _f !== void 0
                  ? _f
                  : 0 + previousStart - 1
                : (_h =
                      (_g =
                        previousValue === null || previousValue === void 0
                          ? void 0
                          : previousValue.content) === null || _g === void 0
                        ? void 0
                        : _g.offsetWidth) !== null && _h !== void 0
                  ? _h
                  : 0 + previousStart - 1;
            var currentStart =
              axis === 'y'
                ? (_k =
                    (_j =
                      currentValue === null || currentValue === void 0
                        ? void 0
                        : currentValue.content) === null || _j === void 0
                      ? void 0
                      : _j.offsetTop) !== null && _k !== void 0
                  ? _k
                  : 0 + 1
                : (_m =
                      (_l =
                        currentValue === null || currentValue === void 0
                          ? void 0
                          : currentValue.content) === null || _l === void 0
                        ? void 0
                        : _l.offsetLeft) !== null && _m !== void 0
                  ? _m
                  : 0 + 1;
            var currentEnd =
              axis === 'y'
                ? (_p =
                    (_o =
                      currentValue === null || currentValue === void 0
                        ? void 0
                        : currentValue.content) === null || _o === void 0
                      ? void 0
                      : _o.offsetHeight) !== null && _p !== void 0
                  ? _p
                  : 0 + currentStart + 1
                : (_r =
                      (_q =
                        currentValue === null || currentValue === void 0
                          ? void 0
                          : currentValue.content) === null || _q === void 0
                        ? void 0
                        : _q.offsetWidth) !== null && _r !== void 0
                  ? _r
                  : 0 + currentStart + 1;
            var middleScrolled = Math.abs(
              position[axis] + scrollingElement.offsetWidth / 2,
            );
            var previousProximityStart = Math.abs(
              middleScrolled - previousStart,
            );
            var previousProximityEnd = Math.abs(middleScrolled - previousEnd);
            var currentProximityStart = Math.abs(middleScrolled - currentStart);
            var currentProximityEnd = Math.abs(middleScrolled - currentEnd);
            var previousStartNearThanCurrentStart =
              previousProximityStart < currentProximityStart;
            var previousStartNearThanCurrentEnd =
              previousProximityStart < currentProximityEnd;
            var previesStartNearThanCurrent =
              previousStartNearThanCurrentStart &&
              previousStartNearThanCurrentEnd;
            var previousEndNearThanCurrentStart =
              previousProximityEnd < currentProximityEnd;
            var previousEndNearThanCurrentEnd =
              previousProximityEnd < currentProximityStart;
            var previesEndNearThanCurrent =
              previousEndNearThanCurrentStart && previousEndNearThanCurrentEnd;
            if (previesStartNearThanCurrent || previesEndNearThanCurrent) {
              return previousValue;
            }
            return currentValue;
          });
        }
        getTheActive = getTheCurrent;
        if (method === 'CLOSEST') {
          getTheActive = getTheClosest;
        }
        if (method === 'EXACT') {
          getTheActive = function (position) {
            var oi = list.reduce(function (previousValue, currentValue) {
              var _a, _b, _c, _d;
              var currentStart =
                axis === 'y'
                  ? (_b =
                      (_a =
                        currentValue === null || currentValue === void 0
                          ? void 0
                          : currentValue.content) === null || _a === void 0
                        ? void 0
                        : _a.offsetTop) !== null && _b !== void 0
                    ? _b
                    : 0
                  : (_d =
                        (_c =
                          currentValue === null || currentValue === void 0
                            ? void 0
                            : currentValue.content) === null || _c === void 0
                          ? void 0
                          : _c.offsetLeft) !== null && _d !== void 0
                    ? _d
                    : 0;
              if (Math.round(position[axis]) === Math.round(currentStart)) {
                return currentValue;
              }
              return previousValue;
            }, currentActive);
            return oi;
          };
        }
        function handleScroll(_a) {
          var axes = _a.axes,
            scrollingElement = _a.el;
          var currentToActive = getTheActive(axes, scrollingElement);
          if (currentToActive !== currentActive) {
            if (currentToActive.activate) currentToActive.activate();
            if (currentActive && currentActive.deActivate)
              currentActive.deActivate();
          }
          currentActive = currentToActive;
        }
        var observable = (0, _api_scroll__WEBPACK_IMPORTED_MODULE_0__.scroll)({
          el: scrollingElement,
          debounce: debounce,
        });
        observable.subscribe(handleScroll);
        scrollingElement.dispatchEvent(new Event('scroll'));
      }
      /** @deprecated use createScrollspyItem instead. */
      var createScrollSpyItem = createScrollspyItem;
      /** @deprecated use scrollspy instead. */
      var scrollSpy = scrollspy;

      /***/
    },

  /***/ './src/interface/scrollspy/scrollspy.types.ts':
    /*!****************************************************!*\
  !*** ./src/interface/scrollspy/scrollspy.types.ts ***!
  \****************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);

      /***/
    },

  /***/ './src/interface/spin-images/index.ts':
    /*!********************************************!*\
  !*** ./src/interface/spin-images/index.ts ***!
  \********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxSpinImages: () =>
          /* reexport safe */ _spin_images_htmx__WEBPACK_IMPORTED_MODULE_1__.htmxSpinImages,
        /* harmony export */ spinImages: () =>
          /* reexport safe */ _spin_images__WEBPACK_IMPORTED_MODULE_0__.spinImages,
        /* harmony export */
      });
      /* harmony import */ var _spin_images__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./spin-images */ './src/interface/spin-images/spin-images.ts',
        );
      /* harmony import */ var _spin_images_htmx__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./spin-images.htmx */ './src/interface/spin-images/spin-images.htmx.ts',
        );

      /***/
    },

  /***/ './src/interface/spin-images/spin-images.htmx.ts':
    /*!*******************************************************!*\
  !*** ./src/interface/spin-images/spin-images.htmx.ts ***!
  \*******************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxSpinImages: () => /* binding */ htmxSpinImages,
        /* harmony export */
      });
      /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../utilities/document */ './src/utilities/document/index.ts',
        );
      /* harmony import */ var _spin_images__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./spin-images */ './src/interface/spin-images/spin-images.ts',
        );

      function htmxSpinImages() {
        if (_utilities_document__WEBPACK_IMPORTED_MODULE_0__.IS_NODE_JS) return;
        var el = document.querySelector(
          '[data-ovo-spin-images][data-ovo-auto]',
        );
        if (el) {
          (0, _spin_images__WEBPACK_IMPORTED_MODULE_1__.spinImages)({});
        }
      }

      /***/
    },

  /***/ './src/interface/spin-images/spin-images.ts':
    /*!**************************************************!*\
  !*** ./src/interface/spin-images/spin-images.ts ***!
  \**************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ spinImages: () => /* binding */ spinImages,
        /* harmony export */
      });
      /* harmony import */ var _spin_images_scss__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./spin-images.scss */ './src/interface/spin-images/spin-images.scss',
        );
      /* harmony import */ var _api_touch__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! ../../api/touch */ './src/api/touch/index.ts');

      function setSpriteSize(_a) {
        var elSprite = _a.elSprite,
          _b = _a.quantityFrames,
          quantityFrames = _b === void 0 ? 0 : _b;
        var htmlSprite = elSprite;
        htmlSprite.style.width = ''.concat(100 * quantityFrames, '%');
      }
      function getFramePersentSize(quantityFrames) {
        if (quantityFrames === void 0) {
          quantityFrames = 0;
        }
        return 100 / quantityFrames;
      }
      function activateSprite(el) {
        el.classList.add('is-loaded');
      }
      function rotate(_a) {
        var elSprite = _a.elSprite,
          _b = _a.rotated,
          rotated = _b === void 0 ? 0 : _b;
        elSprite.style.transform = 'translateX('.concat(
          (-100 + rotated) % 100,
          '%)',
        );
      }
      var spinImages = function (_a) {
        var _b = _a.quantityFrames,
          externalQuantityFrames = _b === void 0 ? 0 : _b,
          _c = _a.el,
          el =
            _c === void 0
              ? document.querySelector('[data-ovo-spin-images]')
              : _c,
          _d = _a.autoRotateTime,
          autoRotateTime = _d === void 0 ? 0 : _d,
          _e = _a.clockwise,
          clockwise = _e === void 0 ? true : _e,
          onGrab = _a.onGrab,
          onDrop = _a.onDrop,
          _f = _a.debounce,
          externalDebounce = _f === void 0 ? 0 : _f;
        if (!el) return;
        var elSprite = el.querySelector('[data-ovo-spin-images="sprite"]');
        if (!elSprite) return;
        var quantityFrames =
          externalQuantityFrames || Number(elSprite.childElementCount) || 1;
        var debounce = externalDebounce || Number(el.dataset.ovoDebounce) || 0;
        var frameSize = 0;
        var rotated = 0;
        if (!quantityFrames || !el) return;
        function onSpriteLoaded(cb) {
          cb();
        }
        function rotateCounterclockwise() {
          if (!elSprite) return;
          rotated = (rotated + frameSize) % 100;
          rotate({ elSprite: elSprite, rotated: rotated });
        }
        function rotateClockwise() {
          rotated = (rotated - frameSize) % 100;
          rotate({ elSprite: elSprite, rotated: rotated });
        }
        function autoRotate() {
          var rotateWise = clockwise ? rotateClockwise : rotateCounterclockwise;
          setInterval(function () {
            rotateWise();
          }, autoRotateTime);
        }
        function handleGrab() {
          if (!el) return;
          el.classList.add('ovo-active');
          if (onGrab) onGrab();
        }
        function handleDrop() {
          if (!el) return;
          el.classList.remove('ovo-active');
          if (onDrop) onDrop();
        }
        onSpriteLoaded(function () {
          activateSprite(el);
          if (autoRotateTime) {
            autoRotate();
          }
        });
        setSpriteSize({
          elSprite: elSprite,
          quantityFrames: quantityFrames,
        });
        frameSize = getFramePersentSize(quantityFrames);
        if (!el) return;
        var touch$ = (0, _api_touch__WEBPACK_IMPORTED_MODULE_1__.touch)({
          el: el,
          gap: {
            x: debounce,
            y: debounce,
          },
          onlyAxis: 'x',
        });
        touch$.grab$.subscribe(handleGrab);
        touch$.drop$.subscribe(handleDrop);
        touch$.drag$.subscribe(function (dragEvent) {
          if (
            dragEvent.direction === 'left' ||
            dragEvent.direction === 'down-left' ||
            dragEvent.direction === 'up-left'
          ) {
            rotateClockwise();
          }
          if (
            dragEvent.direction === 'right' ||
            dragEvent.direction === 'down-right' ||
            dragEvent.direction === 'up-right'
          ) {
            rotateCounterclockwise();
          }
        });
      };

      /***/
    },

  /***/ './src/interface/sticky-header/index.ts':
    /*!**********************************************!*\
  !*** ./src/interface/sticky-header/index.ts ***!
  \**********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ StickyHeader: () =>
          /* reexport safe */ _sticky_header__WEBPACK_IMPORTED_MODULE_0__.StickyHeader,
        /* harmony export */ htmxStickyHeader: () =>
          /* reexport safe */ _sticky_header_htmx__WEBPACK_IMPORTED_MODULE_1__.htmxStickyHeader,
        /* harmony export */
      });
      /* harmony import */ var _sticky_header__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./sticky-header */ './src/interface/sticky-header/sticky-header.ts',
        );
      /* harmony import */ var _sticky_header_htmx__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./sticky-header.htmx */ './src/interface/sticky-header/sticky-header.htmx.ts',
        );

      /***/
    },

  /***/ './src/interface/sticky-header/sticky-header.htmx.ts':
    /*!***********************************************************!*\
  !*** ./src/interface/sticky-header/sticky-header.htmx.ts ***!
  \***********************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ htmxStickyHeader: () =>
          /* binding */ htmxStickyHeader,
        /* harmony export */
      });
      /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../../utilities/document */ './src/utilities/document/index.ts',
        );
      /* harmony import */ var _sticky_header__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ./sticky-header */ './src/interface/sticky-header/sticky-header.ts',
        );

      function htmxStickyHeader() {
        if (_utilities_document__WEBPACK_IMPORTED_MODULE_0__.IS_NODE_JS) return;
        var flag = document.querySelector(
          '[data-ovo-sticky-header][data-ovo-auto]',
        );
        if (!flag) return;
        (0, _sticky_header__WEBPACK_IMPORTED_MODULE_1__.StickyHeader)({});
      }

      /***/
    },

  /***/ './src/interface/sticky-header/sticky-header.ts':
    /*!******************************************************!*\
  !*** ./src/interface/sticky-header/sticky-header.ts ***!
  \******************************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ StickyHeader: () => /* binding */ StickyHeader,
        /* harmony export */
      });
      /* harmony import */ var _sticky_header_scss__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./sticky-header.scss */ './src/interface/sticky-header/sticky-header.scss',
        );
      /* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../utilities/element */ './src/utilities/element/index.ts',
        );
      /* harmony import */ var _api_scroll__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../../api/scroll */ './src/api/scroll/index.ts',
        );

      function StickyHeader(_a) {
        var _b = _a.el,
          el =
            _b === void 0
              ? document.querySelector('[data-ovo-sticky-header]')
              : _b;
        if (!el) return;
        var htmlEl = el;
        function handleDocumentScroll(_a) {
          var _b = _a.relativeAxes.y,
            position = _b === void 0 ? 0 : _b;
          (0, _utilities_element__WEBPACK_IMPORTED_MODULE_1__.translate)({
            el: htmlEl,
            position: position,
          });
          if (
            (0, _utilities_element__WEBPACK_IMPORTED_MODULE_1__.getHeight)(
              htmlEl,
            ) === position
          ) {
            htmlEl.style.opacity = '0';
            return;
          }
          htmlEl.style.removeProperty('opacity');
        }
        function bindEvents() {
          if (!el) return;
          (0, _api_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)({
            el: (0,
            _utilities_element__WEBPACK_IMPORTED_MODULE_1__.getScrollParent)(
              htmlEl,
            ),
            maxRelative: {
              top: 0,
              bottom: (0,
              _utilities_element__WEBPACK_IMPORTED_MODULE_1__.getHeight)(
                htmlEl,
              ),
              left: 0,
              right: 0,
            },
          })
            .pipe()
            .subscribe(handleDocumentScroll);
        }
        bindEvents();
      }

      /***/
    },

  /***/ './src/operators/axis/axis.operators.ts':
    /*!**********************************************!*\
  !*** ./src/operators/axis/axis.operators.ts ***!
  \**********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ filterByAttributeAndGapOperator: () =>
          /* binding */ filterByAttributeAndGapOperator,
        /* harmony export */ putAxesBreakpointOperator: () =>
          /* binding */ putAxesBreakpointOperator,
        /* harmony export */ putDirectionOperator: () =>
          /* binding */ putDirectionOperator,
        /* harmony export */ putRelativeAxesOperator: () =>
          /* binding */ putRelativeAxesOperator,
        /* harmony export */
      });
      /* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! lodash/isNumber */ './node_modules/lodash/isNumber.js',
        );
      /* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/dist/esm5/internal/util/pipe.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/map.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/scan.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/filter.js',
        );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/dist/esm5/internal/operators/pairwise.js',
        );
      /* harmony import */ var _utilities_axis__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../../utilities/axis */ './src/utilities/axis/index.ts',
        );
      var __assign =
        (undefined && undefined.__assign) ||
        function () {
          __assign =
            Object.assign ||
            function (t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };

      function filterByAttributeAndGapOperator(_a) {
        var _b = _a.gap,
          gap =
            _b === void 0
              ? _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.AXES
              : _b;
        return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(
            function (scrollObserver) {
              return {
                current: scrollObserver,
                last: scrollObserver,
              };
            },
          ),
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.scan)(
            function (acc, curr) {
              var axes = acc.current.axes;
              var lastAxes = acc.last.axes;
              var onGap = (0,
              _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.isOnGap)({
                axes: axes,
                gap: gap,
                lastAxes: lastAxes,
              });
              return {
                current: curr.current,
                last: onGap ? acc.last : curr.current,
              };
            },
          ),
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(
            function (_a, index) {
              var current = _a.current,
                last = _a.last;
              var axes = current.axes;
              var lastAxes = last.axes;
              var firstEvent = !index;
              var isToIgnore = current.type === 'START';
              if (firstEvent || isToIgnore) return true;
              return !(0, _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.isOnGap)(
                {
                  axes: axes,
                  gap: gap,
                  lastAxes: lastAxes,
                },
              );
            },
          ),
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(
            function (scrollObserver) {
              return scrollObserver.current;
            },
          ),
        );
      }
      function putRelativeAxesOperator(_a) {
        var _b = _a.stopGrowingAt,
          stopGrowingAt = _b === void 0 ? 0 : _b;
        return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.scan)(
            function (acc, curr, index) {
              var firstRun = index === 1;
              var stopGrowingAtAsPositions = stopGrowingAt;
              var toRestart = curr.type === 'START';
              var startAxes = acc.startAxes;
              var relativeStartAxes = acc.relatives.startAxes;
              var currAxes = curr.axes;
              if (firstRun || toRestart) {
                startAxes = currAxes;
                relativeStartAxes = currAxes;
              }
              if (
                stopGrowingAtAsPositions.bottom ||
                stopGrowingAtAsPositions.left ||
                stopGrowingAtAsPositions.top ||
                stopGrowingAtAsPositions.right
              ) {
                if (
                  currAxes.x <
                  relativeStartAxes.x - stopGrowingAtAsPositions.left
                ) {
                  relativeStartAxes.x =
                    currAxes.x + stopGrowingAtAsPositions.left;
                }
                if (
                  currAxes.y <
                  relativeStartAxes.y - stopGrowingAtAsPositions.top
                ) {
                  relativeStartAxes.y =
                    currAxes.y + stopGrowingAtAsPositions.top;
                }
                if (
                  currAxes.x >
                  relativeStartAxes.x + stopGrowingAtAsPositions.right
                ) {
                  relativeStartAxes.x =
                    currAxes.x - stopGrowingAtAsPositions.right;
                }
                if (
                  currAxes.y >
                  relativeStartAxes.y + stopGrowingAtAsPositions.bottom
                ) {
                  relativeStartAxes.y =
                    currAxes.y - stopGrowingAtAsPositions.bottom;
                }
              }
              var relativeX = currAxes.x - relativeStartAxes.x;
              var relativeY = currAxes.y - relativeStartAxes.y;
              var hypotenuse = Math.hypot(relativeX, relativeY);
              if (
                stopGrowingAt &&
                lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(
                  stopGrowingAt,
                )
              ) {
                var isOutOfRadix = hypotenuse > stopGrowingAt;
                if (isOutOfRadix) {
                  var sin = relativeY / hypotenuse;
                  var cos = relativeX / hypotenuse;
                  relativeStartAxes.x =
                    cos * (hypotenuse - stopGrowingAt) + relativeStartAxes.x;
                  relativeStartAxes.y =
                    sin * (hypotenuse - stopGrowingAt) + relativeStartAxes.y;
                  relativeX = cos * stopGrowingAt;
                  relativeY = sin * stopGrowingAt;
                }
              }
              var angle =
                ((Math.atan2(-relativeY, relativeX) * 180) / Math.PI + 360) %
                360;
              return __assign(__assign({}, curr), {
                startAxes: startAxes,
                relatives: __assign(__assign({}, curr.relatives), {
                  axes: {
                    x: relativeX,
                    y: relativeY,
                  },
                  startAxes: relativeStartAxes,
                  angle: angle,
                }),
              });
            },
          ),
        );
      }
      function putAxesBreakpointOperator(_a) {
        var _b = _a.gap,
          gap =
            _b === void 0
              ? _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.AXES
              : _b;
        return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(
            function (value) {
              var axes = value.relatives.axes;
              var x = Math.floor(axes.x / gap.x || 1) - 1;
              var y = Math.floor(axes.y / gap.y || 1) - 1;
              return __assign(__assign({}, value), {
                relatives: __assign(__assign({}, value.relatives), {
                  breakpointAxes: {
                    x: x,
                    y: y,
                  },
                }),
              });
            },
          ),
        );
      }
      function putDirectionOperator(k, directionK, ignoreWhen) {
        return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pairwise)(),
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (_a) {
            var _b;
            var last = _a[0],
              curr = _a[1];
            var lastAxes = last[k];
            var currAxes = curr[k];
            var direction = last[directionK] || '';
            var isToIgnore = curr[ignoreWhen.key] === ignoreWhen.value;
            if (!isToIgnore) {
              direction = (0,
              _utilities_axis__WEBPACK_IMPORTED_MODULE_1__.getDirection)({
                axes: currAxes,
                lastAxes: lastAxes,
              });
            }
            return __assign(
              __assign({}, curr),
              ((_b = {}), (_b[directionK] = direction), _b),
            );
          }),
        );
      }

      /***/
    },

  /***/ './src/operators/axis/index.ts':
    /*!*************************************!*\
  !*** ./src/operators/axis/index.ts ***!
  \*************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ filterByAttributeAndGapOperator: () =>
          /* reexport safe */ _axis_operators__WEBPACK_IMPORTED_MODULE_0__.filterByAttributeAndGapOperator,
        /* harmony export */ putAxesBreakpointOperator: () =>
          /* reexport safe */ _axis_operators__WEBPACK_IMPORTED_MODULE_0__.putAxesBreakpointOperator,
        /* harmony export */ putDirectionOperator: () =>
          /* reexport safe */ _axis_operators__WEBPACK_IMPORTED_MODULE_0__.putDirectionOperator,
        /* harmony export */ putRelativeAxesOperator: () =>
          /* reexport safe */ _axis_operators__WEBPACK_IMPORTED_MODULE_0__.putRelativeAxesOperator,
        /* harmony export */
      });
      /* harmony import */ var _axis_operators__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./axis.operators */ './src/operators/axis/axis.operators.ts',
        );

      /***/
    },

  /***/ './src/utilities/axis/axis.ts':
    /*!************************************!*\
  !*** ./src/utilities/axis/axis.ts ***!
  \************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getDirection: () => /* binding */ getDirection,
        /* harmony export */ getRelativePosition: () =>
          /* binding */ getRelativePosition,
        /* harmony export */ isAboveTheScreen: () =>
          /* binding */ isAboveTheScreen,
        /* harmony export */ isBelowTheScreen: () =>
          /* binding */ isBelowTheScreen,
        /* harmony export */ isOnGap: () => /* binding */ isOnGap,
        /* harmony export */ isOnGapOfEl: () => /* binding */ isOnGapOfEl,
        /* harmony export */ isOnTheRegion: () => /* binding */ isOnTheRegion,
        /* harmony export */ isOnTheSameDirection: () =>
          /* binding */ isOnTheSameDirection,
        /* harmony export */ isOutOfLimit: () => /* binding */ isOutOfLimit,
        /* harmony export */ isSafe: () => /* binding */ isSafe,
        /* harmony export */
      });
      /* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! lodash/intersection */ './node_modules/lodash/intersection.js',
        );
      /* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          lodash_intersection__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! lodash/isNil */ './node_modules/lodash/isNil.js',
        );
      /* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          lodash_isNil__WEBPACK_IMPORTED_MODULE_1__,
        );
      /* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! lodash/isNumber */ './node_modules/lodash/isNumber.js',
        );
      /* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          lodash_isNumber__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(/*! ../view/view */ './src/utilities/view/view.ts');
      /* harmony import */ var _axis_types__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ./axis.types */ './src/utilities/axis/axis.types.ts',
        );
      /* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! ../element */ './src/utilities/element/index.ts',
        );

      function getDirection(_a) {
        var lastAxes = _a.lastAxes,
          axes = _a.axes;
        var onTheRight = lastAxes.x < axes.x;
        var onTheLeft = lastAxes.x > axes.x;
        var onDown = lastAxes.y < axes.y;
        var onUp = lastAxes.y > axes.y;
        if (onUp && onTheLeft) return 'up-left';
        if (onUp && onTheRight) return 'up-right';
        if (onUp) return 'up';
        if (onDown && onTheLeft) return 'down-left';
        if (onDown && onTheRight) return 'down-right';
        if (onDown) return 'down';
        if (onTheRight) return 'right';
        if (onTheLeft) return 'left';
        return '';
      }
      var isOnTheSameDirection = function (_a) {
        var direction = _a.direction,
          lastDirection = _a.lastDirection;
        var lastDirections = [lastDirection];
        if (lastDirection === 'down-left') {
          lastDirections = ['down', 'left'];
        }
        if (lastDirection === 'down-right') {
          lastDirections = ['down', 'right'];
        }
        if (lastDirection === 'up-left') {
          lastDirections = ['up', 'left'];
        }
        if (lastDirection === 'up-right') {
          lastDirections = ['up', 'right'];
        }
        var directions = [direction];
        if (direction === 'down-left') {
          directions = ['down', 'left'];
        }
        if (direction === 'down-right') {
          directions = ['down', 'right'];
        }
        if (direction === 'up-left') {
          directions = ['up', 'left'];
        }
        if (direction === 'up-right') {
          directions = ['up', 'right'];
        }
        return Boolean(
          lodash_intersection__WEBPACK_IMPORTED_MODULE_0___default()(
            lastDirections,
            directions,
          ).length,
        );
      };
      function isOnGap(_a) {
        var _b, _c;
        var axes = _a.axes,
          lastAxes = _a.lastAxes,
          gap = _a.gap;
        var beOnVerticalGap = gap.y
          ? Math.abs(axes.y - lastAxes.y) <
            ((_b = gap.y) !== null && _b !== void 0 ? _b : 0)
          : false;
        var beOnHorizontalGap = gap.x
          ? Math.abs(axes.x - lastAxes.x) <
            ((_c = gap.x) !== null && _c !== void 0 ? _c : 0)
          : false;
        if (beOnVerticalGap && beOnHorizontalGap) return true;
        return false;
      }
      function isAboveTheScreen(position) {
        return position < 0;
      }
      function isBelowTheScreen(position) {
        return (
          position >
          (0, _view_view__WEBPACK_IMPORTED_MODULE_3__.getViewportHeight)()
        );
      }
      var getRelativePosition = function (_a) {
        var position = _a.position,
          _b = _a.lastRelativePosition,
          lastRelativePosition = _b === void 0 ? { x: 0, y: 0 } : _b,
          _c = _a.lastPosition,
          lastPosition = _c === void 0 ? { x: 0, y: 0 } : _c,
          limit = _a.limit;
        var x = lastRelativePosition.x + position.x - lastPosition.x;
        var y = lastRelativePosition.y + position.y - lastPosition.y;
        if (limit) {
          if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_2___default()(limit.top))
            y = Math.max(y, limit.top);
          if (
            lodash_isNumber__WEBPACK_IMPORTED_MODULE_2___default()(limit.bottom)
          )
            y = Math.min(y, limit.bottom);
          if (
            lodash_isNumber__WEBPACK_IMPORTED_MODULE_2___default()(limit.left)
          )
            x = Math.max(x, limit.left);
          if (
            lodash_isNumber__WEBPACK_IMPORTED_MODULE_2___default()(limit.right)
          )
            x = Math.min(x, limit.right);
        }
        return {
          x: x,
          y: y,
        };
      };
      var isOnTheRegion = function (_a) {
        var region = _a.region,
          position = _a.position;
        var onBelowTheTop = position.y >= region.top;
        var onAboveTheBottom = position.y <= region.bottom;
        return onBelowTheTop && onAboveTheBottom;
      };
      var isOutOfLimit = function (_a) {
        var position = _a.position,
          _b = _a.limit,
          limit =
            _b === void 0
              ? _axis_types__WEBPACK_IMPORTED_MODULE_4__.POSITIONS
              : _b;
        if (limit.top) {
          var outOfTopLimit = position.y < limit.top;
          if (outOfTopLimit) return true;
        }
        if (limit.bottom) {
          var outOfBottomLimit = position.y > limit.bottom;
          if (outOfBottomLimit) return true;
        }
        if (limit.left) {
          var outOfLeftLimit = position.x < limit.left;
          if (outOfLeftLimit) return true;
        }
        if (limit.right) {
          var outOfRightLimit = position.x > limit.right;
          if (outOfRightLimit) return true;
        }
        return false;
      };
      var isSafe = function (_a) {
        var _b, _c;
        var position = _a.position,
          lastPosition = _a.lastPosition,
          debounce = _a.debounce;
        var beOnVerticalSafe =
          Math.abs(position.y - lastPosition.y) <
          ((_b = debounce.y) !== null && _b !== void 0 ? _b : 0);
        var beOnHorizontalSafe =
          Math.abs(position.x - lastPosition.x) <
          ((_c = debounce.x) !== null && _c !== void 0 ? _c : 0);
        if (beOnVerticalSafe && beOnHorizontalSafe) return true;
        return false;
      };
      var isOnGapOfEl = function (_a) {
        var _b, _c, _d, _e;
        var position = _a.position,
          gap = _a.gap,
          el = _a.el;
        var beOnTopGap =
          position.y < ((_b = gap.top) !== null && _b !== void 0 ? _b : 0);
        if (
          !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(gap.top) &&
          beOnTopGap
        )
          return true;
        var beOnBottomGap =
          position.y >
          (0, _element__WEBPACK_IMPORTED_MODULE_5__.getMaxVerticalScroll)(el) -
            ((_c = gap.bottom) !== null && _c !== void 0 ? _c : 0);
        if (
          !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(gap.bottom) &&
          beOnBottomGap
        )
          return true;
        var beOnLeftGap =
          position.x < ((_d = gap.left) !== null && _d !== void 0 ? _d : 0);
        if (
          !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(gap.left) &&
          beOnLeftGap
        )
          return true;
        var beOnRightGap =
          position.x >
          (0, _element__WEBPACK_IMPORTED_MODULE_5__.getMaxHorizontalScroll)(
            el,
          ) -
            ((_e = gap.right) !== null && _e !== void 0 ? _e : 0);
        if (
          !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(gap.right) &&
          beOnRightGap
        )
          return true;
        return false;
      };

      /***/
    },

  /***/ './src/utilities/axis/axis.types.ts':
    /*!******************************************!*\
  !*** ./src/utilities/axis/axis.types.ts ***!
  \******************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ AXES: () => /* binding */ AXES,
        /* harmony export */ POSITIONS: () => /* binding */ POSITIONS,
        /* harmony export */
      });
      var AXES = {
        x: 0,
        y: 0,
      };
      var POSITIONS = {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      };

      /***/
    },

  /***/ './src/utilities/axis/index.ts':
    /*!*************************************!*\
  !*** ./src/utilities/axis/index.ts ***!
  \*************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ AXES: () =>
          /* reexport safe */ _axis_types__WEBPACK_IMPORTED_MODULE_0__.AXES,
        /* harmony export */ Axes: () =>
          /* reexport safe */ _axis_types__WEBPACK_IMPORTED_MODULE_0__.Axes,
        /* harmony export */ Axis: () =>
          /* reexport safe */ _axis_types__WEBPACK_IMPORTED_MODULE_0__.Axis,
        /* harmony export */ Direction: () =>
          /* reexport safe */ _axis_types__WEBPACK_IMPORTED_MODULE_0__.Direction,
        /* harmony export */ POSITIONS: () =>
          /* reexport safe */ _axis_types__WEBPACK_IMPORTED_MODULE_0__.POSITIONS,
        /* harmony export */ Positions: () =>
          /* reexport safe */ _axis_types__WEBPACK_IMPORTED_MODULE_0__.Positions,
        /* harmony export */ getDirection: () =>
          /* reexport safe */ _axis__WEBPACK_IMPORTED_MODULE_1__.getDirection,
        /* harmony export */ isAboveTheScreen: () =>
          /* reexport safe */ _axis__WEBPACK_IMPORTED_MODULE_1__.isAboveTheScreen,
        /* harmony export */ isBelowTheScreen: () =>
          /* reexport safe */ _axis__WEBPACK_IMPORTED_MODULE_1__.isBelowTheScreen,
        /* harmony export */ isOnGap: () =>
          /* reexport safe */ _axis__WEBPACK_IMPORTED_MODULE_1__.isOnGap,
        /* harmony export */ isOnTheSameDirection: () =>
          /* reexport safe */ _axis__WEBPACK_IMPORTED_MODULE_1__.isOnTheSameDirection,
        /* harmony export */
      });
      /* harmony import */ var _axis_types__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./axis.types */ './src/utilities/axis/axis.types.ts',
        );
      /* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! ./axis */ './src/utilities/axis/axis.ts');

      /***/
    },

  /***/ './src/utilities/document/document.ts':
    /*!********************************************!*\
  !*** ./src/utilities/document/document.ts ***!
  \********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ IS_NODE_JS: () => /* binding */ IS_NODE_JS,
        /* harmony export */ ready: () => /* binding */ ready,
        /* harmony export */
      });
      var IS_NODE_JS = typeof window === 'undefined';
      var isReady = false;
      if (!IS_NODE_JS) {
        document.addEventListener('DOMContentLoaded', function () {
          isReady = true;
        });
      }
      /**
       * Execute a function now if DOMContentLoaded has fired, otherwise listen for it.
       *
       * This function uses isReady because there is no realiable way to ask the browswer whether
       * the DOMContentLoaded event has already been fired; there's a gap between DOMContentLoaded
       * firing and readystate=complete.
       *
       * @author htmx <https://github.com/bigskysoftware/htmx/blob/master/src/htmx.js>
       */
      function ready(fn) {
        // Checking readyState here is a failsafe in case the htmx script tag entered the DOM by
        // some means other than the initial page load.
        if (!IS_NODE_JS && (isReady || document.readyState === 'complete')) {
          fn();
        } else {
          if (!IS_NODE_JS) {
            document.addEventListener('DOMContentLoaded', function () {
              return fn();
            });
          }
        }
      }

      /***/
    },

  /***/ './src/utilities/document/index.ts':
    /*!*****************************************!*\
  !*** ./src/utilities/document/index.ts ***!
  \*****************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ IS_NODE_JS: () =>
          /* reexport safe */ _document__WEBPACK_IMPORTED_MODULE_0__.IS_NODE_JS,
        /* harmony export */ ready: () =>
          /* reexport safe */ _document__WEBPACK_IMPORTED_MODULE_0__.ready,
        /* harmony export */
      });
      /* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./document */ './src/utilities/document/document.ts',
        );

      /***/
    },

  /***/ './src/utilities/element/element.ts':
    /*!******************************************!*\
  !*** ./src/utilities/element/element.ts ***!
  \******************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getHeight: () => /* binding */ getHeight,
        /* harmony export */ getLeft: () => /* binding */ getLeft,
        /* harmony export */ getMaxHorizontalScroll: () =>
          /* binding */ getMaxHorizontalScroll,
        /* harmony export */ getMaxVerticalScroll: () =>
          /* binding */ getMaxVerticalScroll,
        /* harmony export */ getMiddleRelativeScreen: () =>
          /* binding */ getMiddleRelativeScreen,
        /* harmony export */ getPositionRelativeOfTheDocument: () =>
          /* binding */ getPositionRelativeOfTheDocument,
        /* harmony export */ getPositionRelativeScreen: () =>
          /* binding */ getPositionRelativeScreen,
        /* harmony export */ getScrollParent: () =>
          /* binding */ getScrollParent,
        /* harmony export */ getScrollPosition: () =>
          /* binding */ getScrollPosition,
        /* harmony export */ getScrollingEl: () => /* binding */ getScrollingEl,
        /* harmony export */ getTop: () => /* binding */ getTop,
        /* harmony export */ getWidth: () => /* binding */ getWidth,
        /* harmony export */ isAboveAndBelowScreen: () =>
          /* binding */ isAboveAndBelowScreen,
        /* harmony export */ isBottomOfElementBelowOfViewport: () =>
          /* binding */ isBottomOfElementBelowOfViewport,
        /* harmony export */ isOutOfLimit: () => /* binding */ isOutOfLimit,
        /* harmony export */ isTopOfElementAboveOfViewport: () =>
          /* binding */ isTopOfElementAboveOfViewport,
        /* harmony export */ scrollToEl: () => /* binding */ scrollToEl,
        /* harmony export */ toggleDocumentScroll: () =>
          /* binding */ toggleDocumentScroll,
        /* harmony export */ toggleScrollDisabled: () =>
          /* binding */ toggleScrollDisabled,
        /* harmony export */ translate: () => /* binding */ translate,
        /* harmony export */
      });
      /* harmony import */ var _element_scss__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./element.scss */ './src/utilities/element/element.scss',
        );
      /* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! ../axis */ './src/utilities/axis/index.ts');
      /* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! ../scroll */ './src/utilities/scroll/index.ts');
      /* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(/*! ../view/view */ './src/utilities/view/view.ts');

      function getScrollingEl(target) {
        var documentTarget = target;
        if (documentTarget.scrollingElement) {
          return documentTarget.scrollingElement;
        }
        return target;
      }
      function getScrollPosition(_a) {
        var el = _a.el,
          _b = _a.variation,
          variation = _b === void 0 ? { x: 0, y: 0 } : _b;
        var x = Math.max(0, el.scrollLeft - variation.x);
        var y = Math.max(0, el.scrollTop - variation.y);
        return {
          x: x,
          y: y,
        };
      }
      function getLeft(el) {
        return el.offsetLeft;
      }
      function getTop(el) {
        return el.offsetTop;
      }
      function getHeight(el) {
        return el.offsetHeight;
      }
      function getWidth(el) {
        return el.offsetWidth;
      }
      function getMaxHorizontalScroll(el) {
        return el.scrollWidth - el.clientWidth;
      }
      function getMaxVerticalScroll(el) {
        return el.scrollHeight - el.clientHeight;
      }
      function isOutOfLimit(_a) {
        var axes = _a.axes,
          limit = _a.limit,
          el = _a.el;
        if (limit.top) {
          var beOutOfTopLimit = axes.y < limit.top;
          if (beOutOfTopLimit) return true;
        }
        if (limit.bottom) {
          var beOutOfBottomLimit =
            axes.y > getMaxVerticalScroll(el) - limit.bottom;
          if (beOutOfBottomLimit) return true;
        }
        if (limit.right) {
          var beOutOfRightLimit =
            axes.y > getMaxHorizontalScroll(el) - limit.right;
          if (beOutOfRightLimit) return true;
        }
        if (limit.left) {
          var beOutOfLeftLimit = axes.x < limit.left;
          if (beOutOfLeftLimit) return true;
        }
        return false;
      }
      function getPositionRelativeScreen(el) {
        var _a = el.getBoundingClientRect(),
          bottom = _a.bottom,
          left = _a.left,
          top = _a.top,
          right = _a.right;
        return {
          bottom: bottom,
          left: left,
          top: top,
          right: right,
        };
      }
      function isTopOfElementAboveOfViewport(el) {
        return getPositionRelativeScreen(el).top < 0;
      }
      function isBottomOfElementBelowOfViewport(el) {
        return (
          getPositionRelativeScreen(el).bottom >
          (0, _view_view__WEBPACK_IMPORTED_MODULE_3__.getViewportHeight)()
        );
      }
      function isAboveAndBelowScreen(el) {
        return (
          isTopOfElementAboveOfViewport(el) &&
          isBottomOfElementBelowOfViewport(el)
        );
      }
      function getScrollParent(el) {
        if (el == null || el instanceof Document) {
          return document;
        }
        var elHTML = el;
        var _a = getComputedStyle(elHTML),
          overflow = _a.overflow,
          overflowX = _a.overflowX,
          overflowY = _a.overflowY;
        var isOverflowY =
          overflow === 'auto' ||
          overflow === 'scroll' ||
          overflowY === 'auto' ||
          overflowY === 'scroll';
        var isOverflowX =
          overflow === 'auto' ||
          overflow === 'scroll' ||
          overflowX === 'auto' ||
          overflowX === 'scroll';
        if (isOverflowY && elHTML.scrollHeight > elHTML.clientHeight) {
          if (elHTML.tagName === 'BODY' || elHTML.tagName === 'HTML') {
            return document;
          }
          return elHTML;
        }
        if (isOverflowX && elHTML.scrollWidth > elHTML.clientWidth) {
          if (elHTML.tagName === 'BODY' || elHTML.tagName === 'HTML') {
            return document;
          }
          return elHTML;
        }
        return getScrollParent(elHTML.parentNode);
      }
      function getMiddleRelativeScreen(el) {
        var _a = getPositionRelativeScreen(el),
          left = _a.left,
          top = _a.top;
        var height = getHeight(el);
        var width = getWidth(el);
        return {
          x: left + width / 2,
          y: top + height / 2,
        };
      }
      function translate(_a) {
        var el = _a.el,
          position = _a.position;
        el.style.transform = 'translate3d(0, -'.concat(position, 'px, 0)');
      }
      var toggleScrollDisabled = function (_a) {
        var _b;
        var _c = _a.el,
          el = _c === void 0 ? document.documentElement : _c,
          provisionalToggle = _a.toggle;
        var hasDataDisabled =
          ((_b = el.dataset) === null || _b === void 0
            ? void 0
            : _b.ovoNonScrollable) === 'true';
        var toggle =
          provisionalToggle !== null && provisionalToggle !== void 0
            ? provisionalToggle
            : !hasDataDisabled;
        function handlePreventScroll(event) {
          event.preventDefault();
        }
        if (toggle) {
          el.setAttribute('data-ovo-non-scrollable', 'true');
          el.addEventListener('touchmove', handlePreventScroll);
        } else {
          el.setAttribute('data-ovo-non-scrollable', 'false');
          el.removeEventListener('touchmove', handlePreventScroll);
        }
        return toggle;
      };
      var toggleDocumentScroll = function (_a) {
        var toggle = _a.toggle;
        toggleScrollDisabled({ el: document.documentElement, toggle: toggle });
        return toggleScrollDisabled({ el: document.body, toggle: toggle });
      };
      function getPositionRelativeOfTheDocument(el) {
        var top = getTop(el);
        var left = getLeft(el);
        var height = getHeight(el);
        var width = getWidth(el);
        return {
          top: top,
          left: left,
          bottom: top + height,
          right: left + width,
        };
      }
      function scrollToEl(_a) {
        var el = _a.el,
          _b = _a.difference,
          difference =
            _b === void 0 ? _axis__WEBPACK_IMPORTED_MODULE_1__.AXES : _b;
        var left = el.offsetLeft;
        var top = el.offsetTop;
        var scrollingElement = getScrollParent(el.parentNode);
        var elementToScroll = getScrollingEl(scrollingElement);
        elementToScroll.scrollIntoView(true);
        (0, _scroll__WEBPACK_IMPORTED_MODULE_2__.scrollTo)({
          left: left - difference.x,
          top: top - difference.y,
          scrollingElement: elementToScroll,
        });
      }

      /***/
    },

  /***/ './src/utilities/element/index.ts':
    /*!****************************************!*\
  !*** ./src/utilities/element/index.ts ***!
  \****************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getHeight: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.getHeight,
        /* harmony export */ getLeft: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.getLeft,
        /* harmony export */ getMaxHorizontalScroll: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.getMaxHorizontalScroll,
        /* harmony export */ getMaxVerticalScroll: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.getMaxVerticalScroll,
        /* harmony export */ getMiddleRelativeScreen: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.getMiddleRelativeScreen,
        /* harmony export */ getPositionRelativeScreen: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.getPositionRelativeScreen,
        /* harmony export */ getScrollParent: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.getScrollParent,
        /* harmony export */ getScrollPosition: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.getScrollPosition,
        /* harmony export */ getScrollingEl: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.getScrollingEl,
        /* harmony export */ getTop: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.getTop,
        /* harmony export */ getWidth: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.getWidth,
        /* harmony export */ isAboveAndBelowScreen: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.isAboveAndBelowScreen,
        /* harmony export */ isBottomOfElementBelowOfViewport: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.isBottomOfElementBelowOfViewport,
        /* harmony export */ isOutOfLimit: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.isOutOfLimit,
        /* harmony export */ isTopOfElementAboveOfViewport: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.isTopOfElementAboveOfViewport,
        /* harmony export */ scrollToEl: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.scrollToEl,
        /* harmony export */ translate: () =>
          /* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.translate,
        /* harmony export */
      });
      /* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./element */ './src/utilities/element/element.ts',
        );

      /***/
    },

  /***/ './src/utilities/scroll/index.ts':
    /*!***************************************!*\
  !*** ./src/utilities/scroll/index.ts ***!
  \***************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ ScrollableElement: () =>
          /* reexport safe */ _scroll_types__WEBPACK_IMPORTED_MODULE_0__.ScrollableElement,
        /* harmony export */ scrollTo: () =>
          /* reexport safe */ _scroll__WEBPACK_IMPORTED_MODULE_1__.scrollTo,
        /* harmony export */
      });
      /* harmony import */ var _scroll_types__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ./scroll.types */ './src/utilities/scroll/scroll.types.ts',
        );
      /* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! ./scroll */ './src/utilities/scroll/scroll.ts');

      /***/
    },

  /***/ './src/utilities/scroll/scroll.ts':
    /*!****************************************!*\
  !*** ./src/utilities/scroll/scroll.ts ***!
  \****************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ documentScrollToElement: () =>
          /* binding */ documentScrollToElement,
        /* harmony export */ scrollTo: () => /* binding */ scrollTo,
        /* harmony export */
      });
      /* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! ../element */ './src/utilities/element/index.ts',
        );

      function scrollTo(_a) {
        var _b = _a.scrollingElement,
          scrollingElement = _b === void 0 ? window : _b,
          _c = _a.top,
          top = _c === void 0 ? 0 : _c,
          _d = _a.left,
          left = _d === void 0 ? 0 : _d;
        var el =
          scrollingElement instanceof Document ? window : scrollingElement;
        el.scrollTo({
          left: left,
          top: top,
          behavior: 'smooth',
        });
      }
      function documentScrollToElement(element) {
        var valueToScroll = (0, _element__WEBPACK_IMPORTED_MODULE_0__.getTop)(
          element,
        );
        scrollTo({ top: valueToScroll });
      }

      /***/
    },

  /***/ './src/utilities/scroll/scroll.types.ts':
    /*!**********************************************!*\
  !*** ./src/utilities/scroll/scroll.types.ts ***!
  \**********************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);

      /***/
    },

  /***/ './src/utilities/view/index.ts':
    /*!*************************************!*\
  !*** ./src/utilities/view/index.ts ***!
  \*************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getTotalViewScrolled: () =>
          /* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_0__.getTotalViewScrolled,
        /* harmony export */ getViewportHeight: () =>
          /* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_0__.getViewportHeight,
        /* harmony export */ getViewportWidth: () =>
          /* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_0__.getViewportWidth,
        /* harmony export */
      });
      /* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! ./view */ './src/utilities/view/view.ts');

      /***/
    },

  /***/ './src/utilities/view/view.ts':
    /*!************************************!*\
  !*** ./src/utilities/view/view.ts ***!
  \************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getTotalViewScrolled: () =>
          /* binding */ getTotalViewScrolled,
        /* harmony export */ getViewportHeight: () =>
          /* binding */ getViewportHeight,
        /* harmony export */ getViewportWidth: () =>
          /* binding */ getViewportWidth,
        /* harmony export */
      });
      function getViewportHeight() {
        return window.innerHeight;
      }
      function getViewportWidth() {
        return window.innerWidth;
      }
      function getTotalViewScrolled(position) {
        return {
          x: position.x + getViewportWidth(),
          y: position.y + getViewportHeight(),
        };
      }

      /***/
    },

  /***/ './node_modules/tslib/tslib.es6.mjs':
    /*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
    /***/ (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ __addDisposableResource: () =>
          /* binding */ __addDisposableResource,
        /* harmony export */ __assign: () => /* binding */ __assign,
        /* harmony export */ __asyncDelegator: () =>
          /* binding */ __asyncDelegator,
        /* harmony export */ __asyncGenerator: () =>
          /* binding */ __asyncGenerator,
        /* harmony export */ __asyncValues: () => /* binding */ __asyncValues,
        /* harmony export */ __await: () => /* binding */ __await,
        /* harmony export */ __awaiter: () => /* binding */ __awaiter,
        /* harmony export */ __classPrivateFieldGet: () =>
          /* binding */ __classPrivateFieldGet,
        /* harmony export */ __classPrivateFieldIn: () =>
          /* binding */ __classPrivateFieldIn,
        /* harmony export */ __classPrivateFieldSet: () =>
          /* binding */ __classPrivateFieldSet,
        /* harmony export */ __createBinding: () =>
          /* binding */ __createBinding,
        /* harmony export */ __decorate: () => /* binding */ __decorate,
        /* harmony export */ __disposeResources: () =>
          /* binding */ __disposeResources,
        /* harmony export */ __esDecorate: () => /* binding */ __esDecorate,
        /* harmony export */ __exportStar: () => /* binding */ __exportStar,
        /* harmony export */ __extends: () => /* binding */ __extends,
        /* harmony export */ __generator: () => /* binding */ __generator,
        /* harmony export */ __importDefault: () =>
          /* binding */ __importDefault,
        /* harmony export */ __importStar: () => /* binding */ __importStar,
        /* harmony export */ __makeTemplateObject: () =>
          /* binding */ __makeTemplateObject,
        /* harmony export */ __metadata: () => /* binding */ __metadata,
        /* harmony export */ __param: () => /* binding */ __param,
        /* harmony export */ __propKey: () => /* binding */ __propKey,
        /* harmony export */ __read: () => /* binding */ __read,
        /* harmony export */ __rest: () => /* binding */ __rest,
        /* harmony export */ __runInitializers: () =>
          /* binding */ __runInitializers,
        /* harmony export */ __setFunctionName: () =>
          /* binding */ __setFunctionName,
        /* harmony export */ __spread: () => /* binding */ __spread,
        /* harmony export */ __spreadArray: () => /* binding */ __spreadArray,
        /* harmony export */ __spreadArrays: () => /* binding */ __spreadArrays,
        /* harmony export */ __values: () => /* binding */ __values,
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
      /* global Reflect, Promise, SuppressedError, Symbol */

      var extendStatics = function (d, b) {
        extendStatics =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (d, b) {
              d.__proto__ = b;
            }) ||
          function (d, b) {
            for (var p in b)
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          };
        return extendStatics(d, b);
      };

      function __extends(d, b) {
        if (typeof b !== 'function' && b !== null)
          throw new TypeError(
            'Class extends value ' +
              String(b) +
              ' is not a constructor or null',
          );
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype =
          b === null
            ? Object.create(b)
            : ((__.prototype = b.prototype), new __());
      }

      var __assign = function () {
        __assign =
          Object.assign ||
          function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
        return __assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
          for (
            var i = 0, p = Object.getOwnPropertySymbols(s);
            i < p.length;
            i++
          ) {
            if (
              e.indexOf(p[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(s, p[i])
            )
              t[p[i]] = s[p[i]];
          }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
          r =
            c < 3
              ? target
              : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
          d;
        if (
          typeof Reflect === 'object' &&
          typeof Reflect.decorate === 'function'
        )
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
              r =
                (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __esDecorate(
        ctor,
        descriptorIn,
        decorators,
        contextIn,
        initializers,
        extraInitializers,
      ) {
        function accept(f) {
          if (f !== void 0 && typeof f !== 'function')
            throw new TypeError('Function expected');
          return f;
        }
        var kind = contextIn.kind,
          key = kind === 'getter' ? 'get' : kind === 'setter' ? 'set' : 'value';
        var target =
          !descriptorIn && ctor
            ? contextIn['static']
              ? ctor
              : ctor.prototype
            : null;
        var descriptor =
          descriptorIn ||
          (target
            ? Object.getOwnPropertyDescriptor(target, contextIn.name)
            : {});
        var _,
          done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
          var context = {};
          for (var p in contextIn)
            context[p] = p === 'access' ? {} : contextIn[p];
          for (var p in contextIn.access)
            context.access[p] = contextIn.access[p];
          context.addInitializer = function (f) {
            if (done)
              throw new TypeError(
                'Cannot add initializers after decoration has completed',
              );
            extraInitializers.push(accept(f || null));
          };
          var result = (0, decorators[i])(
            kind === 'accessor'
              ? { get: descriptor.get, set: descriptor.set }
              : descriptor[key],
            context,
          );
          if (kind === 'accessor') {
            if (result === void 0) continue;
            if (result === null || typeof result !== 'object')
              throw new TypeError('Object expected');
            if ((_ = accept(result.get))) descriptor.get = _;
            if ((_ = accept(result.set))) descriptor.set = _;
            if ((_ = accept(result.init))) initializers.unshift(_);
          } else if ((_ = accept(result))) {
            if (kind === 'field') initializers.unshift(_);
            else descriptor[key] = _;
          }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
      }

      function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
          value = useValue
            ? initializers[i].call(thisArg, value)
            : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
      }

      function __propKey(x) {
        return typeof x === 'symbol' ? x : ''.concat(x);
      }

      function __setFunctionName(f, name, prefix) {
        if (typeof name === 'symbol')
          name = name.description ? '['.concat(name.description, ']') : '';
        return Object.defineProperty(f, 'name', {
          configurable: true,
          value: prefix ? ''.concat(prefix, ' ', name) : name,
        });
      }

      function __metadata(metadataKey, metadataValue) {
        if (
          typeof Reflect === 'object' &&
          typeof Reflect.metadata === 'function'
        )
          return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator['throw'](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function () {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: [],
          },
          f,
          y,
          t,
          g;
        return (
          (g = { next: verb(0), throw: verb(1), return: verb(2) }),
          typeof Symbol === 'function' &&
            (g[Symbol.iterator] = function () {
              return this;
            }),
          g
        );
        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError('Generator is already executing.');
          while ((g && ((g = 0), op[0] && (_ = 0)), _))
            try {
              if (
                ((f = 1),
                y &&
                  (t =
                    op[0] & 2
                      ? y['return']
                      : op[0]
                        ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                        : y.next) &&
                  !(t = t.call(y, op[1])).done)
              )
                return t;
              if (((y = 0), t)) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (
                    !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                    (op[0] === 6 || op[0] === 2)
                  ) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      }

      var __createBinding = Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (
              !desc ||
              ('get' in desc
                ? !m.__esModule
                : desc.writable || desc.configurable)
            ) {
              desc = {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              };
            }
            Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
          };

      function __exportStar(m, o) {
        for (var p in m)
          if (p !== 'default' && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding(o, m, p);
      }

      function __values(o) {
        var s = typeof Symbol === 'function' && Symbol.iterator,
          m = s && o[s],
          i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === 'number')
          return {
            next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
            },
          };
        throw new TypeError(
          s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
        );
      }

      function __read(o, n) {
        var m = typeof Symbol === 'function' && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
          r,
          ar = [],
          e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error: error };
        } finally {
          try {
            if (r && !r.done && (m = i['return'])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      }

      /** @deprecated */
      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      }

      /** @deprecated */
      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      }

      function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      }

      function __await(v) {
        return this instanceof __await ? ((this.v = v), this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
        return (
          (i = {}),
          verb('next'),
          verb('throw'),
          verb('return'),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function verb(n) {
          if (g[n])
            i[n] = function (v) {
              return new Promise(function (a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await
            ? Promise.resolve(r.value.v).then(fulfill, reject)
            : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume('next', value);
        }
        function reject(value) {
          resume('throw', value);
        }
        function settle(f, v) {
          if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return (
          (i = {}),
          verb('next'),
          verb('throw', function (e) {
            throw e;
          }),
          verb('return'),
          (i[Symbol.iterator] = function () {
            return this;
          }),
          i
        );
        function verb(n, f) {
          i[n] = o[n]
            ? function (v) {
                return (p = !p)
                  ? { value: __await(o[n](v)), done: false }
                  : f
                    ? f(v)
                    : v;
              }
            : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var m = o[Symbol.asyncIterator],
          i;
        return m
          ? m.call(o)
          : ((o =
              typeof __values === 'function'
                ? __values(o)
                : o[Symbol.iterator]()),
            (i = {}),
            verb('next'),
            verb('throw'),
            verb('return'),
            (i[Symbol.asyncIterator] = function () {
              return this;
            }),
            i);
        function verb(n) {
          i[n] =
            o[n] &&
            function (v) {
              return new Promise(function (resolve, reject) {
                (v = o[n](v)), settle(resolve, reject, v.done, v.value);
              });
            };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({ value: v, done: d });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, 'raw', { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      }

      var __setModuleDefault = Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v });
          }
        : function (o, v) {
            o['default'] = v;
          };

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      }

      function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === 'a' && !f)
          throw new TypeError('Private accessor was defined without a getter');
        if (
          typeof state === 'function'
            ? receiver !== state || !f
            : !state.has(receiver)
        )
          throw new TypeError(
            'Cannot read private member from an object whose class did not declare it',
          );
        return kind === 'm'
          ? f
          : kind === 'a'
            ? f.call(receiver)
            : f
              ? f.value
              : state.get(receiver);
      }

      function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === 'm') throw new TypeError('Private method is not writable');
        if (kind === 'a' && !f)
          throw new TypeError('Private accessor was defined without a setter');
        if (
          typeof state === 'function'
            ? receiver !== state || !f
            : !state.has(receiver)
        )
          throw new TypeError(
            'Cannot write private member to an object whose class did not declare it',
          );
        return (
          kind === 'a'
            ? f.call(receiver, value)
            : f
              ? (f.value = value)
              : state.set(receiver, value),
          value
        );
      }

      function __classPrivateFieldIn(state, receiver) {
        if (
          receiver === null ||
          (typeof receiver !== 'object' && typeof receiver !== 'function')
        )
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === 'function'
          ? receiver === state
          : state.has(receiver);
      }

      function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
          if (typeof value !== 'object' && typeof value !== 'function')
            throw new TypeError('Object expected.');
          var dispose;
          if (async) {
            if (!Symbol.asyncDispose)
              throw new TypeError('Symbol.asyncDispose is not defined.');
            dispose = value[Symbol.asyncDispose];
          }
          if (dispose === void 0) {
            if (!Symbol.dispose)
              throw new TypeError('Symbol.dispose is not defined.');
            dispose = value[Symbol.dispose];
          }
          if (typeof dispose !== 'function')
            throw new TypeError('Object not disposable.');
          env.stack.push({ value: value, dispose: dispose, async: async });
        } else if (async) {
          env.stack.push({ async: true });
        }
        return value;
      }

      var _SuppressedError =
        typeof SuppressedError === 'function'
          ? SuppressedError
          : function (error, suppressed, message) {
              var e = new Error(message);
              return (
                (e.name = 'SuppressedError'),
                (e.error = error),
                (e.suppressed = suppressed),
                e
              );
            };

      function __disposeResources(env) {
        function fail(e) {
          env.error = env.hasError
            ? new _SuppressedError(
                e,
                env.error,
                'An error was suppressed during disposal.',
              )
            : e;
          env.hasError = true;
        }
        function next() {
          while (env.stack.length) {
            var rec = env.stack.pop();
            try {
              var result = rec.dispose && rec.dispose.call(rec.value);
              if (rec.async)
                return Promise.resolve(result).then(next, function (e) {
                  fail(e);
                  return next();
                });
            } catch (e) {
              fail(e);
            }
          }
          if (env.hasError) throw env.error;
        }
        return next();
      }

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
        __extends,
        __assign,
        __rest,
        __decorate,
        __param,
        __metadata,
        __awaiter,
        __generator,
        __createBinding,
        __exportStar,
        __values,
        __read,
        __spread,
        __spreadArrays,
        __spreadArray,
        __await,
        __asyncGenerator,
        __asyncDelegator,
        __asyncValues,
        __makeTemplateObject,
        __importStar,
        __importDefault,
        __classPrivateFieldGet,
        __classPrivateFieldSet,
        __classPrivateFieldIn,
        __addDisposableResource,
        __disposeResources,
      };

      /***/
    },

  /******/
};
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
  /******/ // Check if module is in cache
  /******/ var cachedModule = __webpack_module_cache__[moduleId];
  /******/ if (cachedModule !== undefined) {
    /******/ return cachedModule.exports;
    /******/
  }
  /******/ // Create a new module (and put it into the cache)
  /******/ var module = (__webpack_module_cache__[moduleId] = {
    /******/ id: moduleId,
    /******/ // no module.loaded needed
    /******/ exports: {},
    /******/
  });
  /******/
  /******/ // Execute the module function
  /******/ __webpack_modules__[moduleId](
    module,
    module.exports,
    __webpack_require__,
  );
  /******/
  /******/ // Return the exports of the module
  /******/ return module.exports;
  /******/
}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = (module) => {
    /******/ var getter =
      module && module.__esModule
        ? /******/ () => module['default']
        : /******/ () => module;
    /******/ __webpack_require__.d(getter, { a: getter });
    /******/ return getter;
    /******/
  };
  /******/
})();
/******/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
  /******/ // define getter functions for harmony exports
  /******/ __webpack_require__.d = (exports, definition) => {
    /******/ for (var key in definition) {
      /******/ if (
        __webpack_require__.o(definition, key) &&
        !__webpack_require__.o(exports, key)
      ) {
        /******/ Object.defineProperty(exports, key, {
          enumerable: true,
          get: definition[key],
        });
        /******/
      }
      /******/
    }
    /******/
  };
  /******/
})();
/******/
/******/ /* webpack/runtime/global */
/******/ (() => {
  /******/ __webpack_require__.g = (function () {
    /******/ if (typeof globalThis === 'object') return globalThis;
    /******/ try {
      /******/ return this || new Function('return this')();
      /******/
    } catch (e) {
      /******/ if (typeof window === 'object') return window;
      /******/
    }
    /******/
  })();
  /******/
})();
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
  /******/ __webpack_require__.o = (obj, prop) =>
    Object.prototype.hasOwnProperty.call(obj, prop);
  /******/
})();
/******/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = (exports) => {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
})();
/******/
/******/ /* webpack/runtime/nonce */
/******/ (() => {
  /******/ __webpack_require__.nc = undefined;
  /******/
})();
/******/
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
  /*!*********************!*\
  !*** ./src/ovos.ts ***!
  \*********************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ AXES: () =>
      /* reexport safe */ _utilities_axis__WEBPACK_IMPORTED_MODULE_3__.AXES,
    /* harmony export */ Axes: () =>
      /* reexport safe */ _utilities_axis__WEBPACK_IMPORTED_MODULE_3__.Axes,
    /* harmony export */ Axis: () =>
      /* reexport safe */ _utilities_axis__WEBPACK_IMPORTED_MODULE_3__.Axis,
    /* harmony export */ Direction: () =>
      /* reexport safe */ _utilities_axis__WEBPACK_IMPORTED_MODULE_3__.Direction,
    /* harmony export */ IS_NODE_JS: () =>
      /* reexport safe */ _utilities_document__WEBPACK_IMPORTED_MODULE_7__.IS_NODE_JS,
    /* harmony export */ POSITIONS: () =>
      /* reexport safe */ _utilities_axis__WEBPACK_IMPORTED_MODULE_3__.POSITIONS,
    /* harmony export */ Positions: () =>
      /* reexport safe */ _utilities_axis__WEBPACK_IMPORTED_MODULE_3__.Positions,
    /* harmony export */ Scroll$: () =>
      /* reexport safe */ _api_scroll__WEBPACK_IMPORTED_MODULE_0__.Scroll$,
    /* harmony export */ ScrollableElement: () =>
      /* reexport safe */ _utilities_scroll__WEBPACK_IMPORTED_MODULE_5__.ScrollableElement,
    /* harmony export */ ScrollableTabs: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.ScrollableTabs,
    /* harmony export */ StickyHeader: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.StickyHeader,
    /* harmony export */ anchor: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.anchor,
    /* harmony export */ carousel: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.carousel,
    /* harmony export */ createScrollSpyItem: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.createScrollSpyItem,
    /* harmony export */ createScrollspyItem: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.createScrollspyItem,
    /* harmony export */ fitOnScreen: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.fitOnScreen,
    /* harmony export */ getDirection: () =>
      /* reexport safe */ _utilities_axis__WEBPACK_IMPORTED_MODULE_3__.getDirection,
    /* harmony export */ getHeight: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getHeight,
    /* harmony export */ getLeft: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getLeft,
    /* harmony export */ getMaxHorizontalScroll: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getMaxHorizontalScroll,
    /* harmony export */ getMaxVerticalScroll: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getMaxVerticalScroll,
    /* harmony export */ getMiddleRelativeScreen: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getMiddleRelativeScreen,
    /* harmony export */ getPositionRelativeScreen: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getPositionRelativeScreen,
    /* harmony export */ getScrollParent: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getScrollParent,
    /* harmony export */ getScrollPosition: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getScrollPosition,
    /* harmony export */ getScrollingEl: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getScrollingEl,
    /* harmony export */ getTop: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getTop,
    /* harmony export */ getTotalViewScrolled: () =>
      /* reexport safe */ _utilities_view__WEBPACK_IMPORTED_MODULE_6__.getTotalViewScrolled,
    /* harmony export */ getViewportHeight: () =>
      /* reexport safe */ _utilities_view__WEBPACK_IMPORTED_MODULE_6__.getViewportHeight,
    /* harmony export */ getViewportWidth: () =>
      /* reexport safe */ _utilities_view__WEBPACK_IMPORTED_MODULE_6__.getViewportWidth,
    /* harmony export */ getWidth: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.getWidth,
    /* harmony export */ htmxAnchor: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.htmxAnchor,
    /* harmony export */ htmxCarousel: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.htmxCarousel,
    /* harmony export */ htmxFitOnScreen: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.htmxFitOnScreen,
    /* harmony export */ htmxPageProgress: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.htmxPageProgress,
    /* harmony export */ htmxParallax: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.htmxParallax,
    /* harmony export */ htmxScrollableSticky: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.htmxScrollableSticky,
    /* harmony export */ htmxScrollableTabs: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.htmxScrollableTabs,
    /* harmony export */ htmxScrollspy: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.htmxScrollspy,
    /* harmony export */ htmxSpinImages: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.htmxSpinImages,
    /* harmony export */ htmxStickyHeader: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.htmxStickyHeader,
    /* harmony export */ isAboveAndBelowScreen: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.isAboveAndBelowScreen,
    /* harmony export */ isAboveTheScreen: () =>
      /* reexport safe */ _utilities_axis__WEBPACK_IMPORTED_MODULE_3__.isAboveTheScreen,
    /* harmony export */ isBelowTheScreen: () =>
      /* reexport safe */ _utilities_axis__WEBPACK_IMPORTED_MODULE_3__.isBelowTheScreen,
    /* harmony export */ isBottomOfElementBelowOfViewport: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.isBottomOfElementBelowOfViewport,
    /* harmony export */ isOnGap: () =>
      /* reexport safe */ _utilities_axis__WEBPACK_IMPORTED_MODULE_3__.isOnGap,
    /* harmony export */ isOnTheSameDirection: () =>
      /* reexport safe */ _utilities_axis__WEBPACK_IMPORTED_MODULE_3__.isOnTheSameDirection,
    /* harmony export */ isOutOfLimit: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.isOutOfLimit,
    /* harmony export */ isTopOfElementAboveOfViewport: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.isTopOfElementAboveOfViewport,
    /* harmony export */ joyPad: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.joyPad,
    /* harmony export */ pageProgress: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.pageProgress,
    /* harmony export */ parallax: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.parallax,
    /* harmony export */ ready: () =>
      /* reexport safe */ _utilities_document__WEBPACK_IMPORTED_MODULE_7__.ready,
    /* harmony export */ scroll: () =>
      /* reexport safe */ _api_scroll__WEBPACK_IMPORTED_MODULE_0__.scroll,
    /* harmony export */ scrollSpy: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.scrollSpy,
    /* harmony export */ scrollTo: () =>
      /* reexport safe */ _utilities_scroll__WEBPACK_IMPORTED_MODULE_5__.scrollTo,
    /* harmony export */ scrollToEl: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.scrollToEl,
    /* harmony export */ scrollableSticky: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.scrollableSticky,
    /* harmony export */ scrollspy: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.scrollspy,
    /* harmony export */ spinImages: () =>
      /* reexport safe */ _interface__WEBPACK_IMPORTED_MODULE_2__.spinImages,
    /* harmony export */ touch: () =>
      /* reexport safe */ _api_touch__WEBPACK_IMPORTED_MODULE_1__.touch,
    /* harmony export */ translate: () =>
      /* reexport safe */ _utilities_element__WEBPACK_IMPORTED_MODULE_4__.translate,
    /* harmony export */
  });
  /* harmony import */ var _api_scroll__WEBPACK_IMPORTED_MODULE_0__ =
    __webpack_require__(/*! ./api/scroll */ './src/api/scroll/index.ts');
  /* harmony import */ var _api_touch__WEBPACK_IMPORTED_MODULE_1__ =
    __webpack_require__(/*! ./api/touch */ './src/api/touch/index.ts');
  /* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ =
    __webpack_require__(/*! ./interface */ './src/interface/index.ts');
  /* harmony import */ var _utilities_axis__WEBPACK_IMPORTED_MODULE_3__ =
    __webpack_require__(
      /*! ./utilities/axis */ './src/utilities/axis/index.ts',
    );
  /* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_4__ =
    __webpack_require__(
      /*! ./utilities/element */ './src/utilities/element/index.ts',
    );
  /* harmony import */ var _utilities_scroll__WEBPACK_IMPORTED_MODULE_5__ =
    __webpack_require__(
      /*! ./utilities/scroll */ './src/utilities/scroll/index.ts',
    );
  /* harmony import */ var _utilities_view__WEBPACK_IMPORTED_MODULE_6__ =
    __webpack_require__(
      /*! ./utilities/view */ './src/utilities/view/index.ts',
    );
  /* harmony import */ var _utilities_document__WEBPACK_IMPORTED_MODULE_7__ =
    __webpack_require__(
      /*! ./utilities/document */ './src/utilities/document/index.ts',
    );
})();

var __webpack_exports__AXES = __webpack_exports__.AXES;
var __webpack_exports__Axes = __webpack_exports__.Axes;
var __webpack_exports__Axis = __webpack_exports__.Axis;
var __webpack_exports__Direction = __webpack_exports__.Direction;
var __webpack_exports__IS_NODE_JS = __webpack_exports__.IS_NODE_JS;
var __webpack_exports__POSITIONS = __webpack_exports__.POSITIONS;
var __webpack_exports__Positions = __webpack_exports__.Positions;
var __webpack_exports__Scroll$ = __webpack_exports__.Scroll$;
var __webpack_exports__ScrollableElement =
  __webpack_exports__.ScrollableElement;
var __webpack_exports__ScrollableTabs = __webpack_exports__.ScrollableTabs;
var __webpack_exports__StickyHeader = __webpack_exports__.StickyHeader;
var __webpack_exports__anchor = __webpack_exports__.anchor;
var __webpack_exports__carousel = __webpack_exports__.carousel;
var __webpack_exports__createScrollSpyItem =
  __webpack_exports__.createScrollSpyItem;
var __webpack_exports__createScrollspyItem =
  __webpack_exports__.createScrollspyItem;
var __webpack_exports__fitOnScreen = __webpack_exports__.fitOnScreen;
var __webpack_exports__getDirection = __webpack_exports__.getDirection;
var __webpack_exports__getHeight = __webpack_exports__.getHeight;
var __webpack_exports__getLeft = __webpack_exports__.getLeft;
var __webpack_exports__getMaxHorizontalScroll =
  __webpack_exports__.getMaxHorizontalScroll;
var __webpack_exports__getMaxVerticalScroll =
  __webpack_exports__.getMaxVerticalScroll;
var __webpack_exports__getMiddleRelativeScreen =
  __webpack_exports__.getMiddleRelativeScreen;
var __webpack_exports__getPositionRelativeScreen =
  __webpack_exports__.getPositionRelativeScreen;
var __webpack_exports__getScrollParent = __webpack_exports__.getScrollParent;
var __webpack_exports__getScrollPosition =
  __webpack_exports__.getScrollPosition;
var __webpack_exports__getScrollingEl = __webpack_exports__.getScrollingEl;
var __webpack_exports__getTop = __webpack_exports__.getTop;
var __webpack_exports__getTotalViewScrolled =
  __webpack_exports__.getTotalViewScrolled;
var __webpack_exports__getViewportHeight =
  __webpack_exports__.getViewportHeight;
var __webpack_exports__getViewportWidth = __webpack_exports__.getViewportWidth;
var __webpack_exports__getWidth = __webpack_exports__.getWidth;
var __webpack_exports__htmxAnchor = __webpack_exports__.htmxAnchor;
var __webpack_exports__htmxCarousel = __webpack_exports__.htmxCarousel;
var __webpack_exports__htmxFitOnScreen = __webpack_exports__.htmxFitOnScreen;
var __webpack_exports__htmxPageProgress = __webpack_exports__.htmxPageProgress;
var __webpack_exports__htmxParallax = __webpack_exports__.htmxParallax;
var __webpack_exports__htmxScrollableSticky =
  __webpack_exports__.htmxScrollableSticky;
var __webpack_exports__htmxScrollableTabs =
  __webpack_exports__.htmxScrollableTabs;
var __webpack_exports__htmxScrollspy = __webpack_exports__.htmxScrollspy;
var __webpack_exports__htmxSpinImages = __webpack_exports__.htmxSpinImages;
var __webpack_exports__htmxStickyHeader = __webpack_exports__.htmxStickyHeader;
var __webpack_exports__isAboveAndBelowScreen =
  __webpack_exports__.isAboveAndBelowScreen;
var __webpack_exports__isAboveTheScreen = __webpack_exports__.isAboveTheScreen;
var __webpack_exports__isBelowTheScreen = __webpack_exports__.isBelowTheScreen;
var __webpack_exports__isBottomOfElementBelowOfViewport =
  __webpack_exports__.isBottomOfElementBelowOfViewport;
var __webpack_exports__isOnGap = __webpack_exports__.isOnGap;
var __webpack_exports__isOnTheSameDirection =
  __webpack_exports__.isOnTheSameDirection;
var __webpack_exports__isOutOfLimit = __webpack_exports__.isOutOfLimit;
var __webpack_exports__isTopOfElementAboveOfViewport =
  __webpack_exports__.isTopOfElementAboveOfViewport;
var __webpack_exports__joyPad = __webpack_exports__.joyPad;
var __webpack_exports__pageProgress = __webpack_exports__.pageProgress;
var __webpack_exports__parallax = __webpack_exports__.parallax;
var __webpack_exports__ready = __webpack_exports__.ready;
var __webpack_exports__scroll = __webpack_exports__.scroll;
var __webpack_exports__scrollSpy = __webpack_exports__.scrollSpy;
var __webpack_exports__scrollTo = __webpack_exports__.scrollTo;
var __webpack_exports__scrollToEl = __webpack_exports__.scrollToEl;
var __webpack_exports__scrollableSticky = __webpack_exports__.scrollableSticky;
var __webpack_exports__scrollspy = __webpack_exports__.scrollspy;
var __webpack_exports__spinImages = __webpack_exports__.spinImages;
var __webpack_exports__touch = __webpack_exports__.touch;
var __webpack_exports__translate = __webpack_exports__.translate;
export {
  __webpack_exports__AXES as AXES,
  __webpack_exports__Axes as Axes,
  __webpack_exports__Axis as Axis,
  __webpack_exports__Direction as Direction,
  __webpack_exports__IS_NODE_JS as IS_NODE_JS,
  __webpack_exports__POSITIONS as POSITIONS,
  __webpack_exports__Positions as Positions,
  __webpack_exports__Scroll$ as Scroll$,
  __webpack_exports__ScrollableElement as ScrollableElement,
  __webpack_exports__ScrollableTabs as ScrollableTabs,
  __webpack_exports__StickyHeader as StickyHeader,
  __webpack_exports__anchor as anchor,
  __webpack_exports__carousel as carousel,
  __webpack_exports__createScrollSpyItem as createScrollSpyItem,
  __webpack_exports__createScrollspyItem as createScrollspyItem,
  __webpack_exports__fitOnScreen as fitOnScreen,
  __webpack_exports__getDirection as getDirection,
  __webpack_exports__getHeight as getHeight,
  __webpack_exports__getLeft as getLeft,
  __webpack_exports__getMaxHorizontalScroll as getMaxHorizontalScroll,
  __webpack_exports__getMaxVerticalScroll as getMaxVerticalScroll,
  __webpack_exports__getMiddleRelativeScreen as getMiddleRelativeScreen,
  __webpack_exports__getPositionRelativeScreen as getPositionRelativeScreen,
  __webpack_exports__getScrollParent as getScrollParent,
  __webpack_exports__getScrollPosition as getScrollPosition,
  __webpack_exports__getScrollingEl as getScrollingEl,
  __webpack_exports__getTop as getTop,
  __webpack_exports__getTotalViewScrolled as getTotalViewScrolled,
  __webpack_exports__getViewportHeight as getViewportHeight,
  __webpack_exports__getViewportWidth as getViewportWidth,
  __webpack_exports__getWidth as getWidth,
  __webpack_exports__htmxAnchor as htmxAnchor,
  __webpack_exports__htmxCarousel as htmxCarousel,
  __webpack_exports__htmxFitOnScreen as htmxFitOnScreen,
  __webpack_exports__htmxPageProgress as htmxPageProgress,
  __webpack_exports__htmxParallax as htmxParallax,
  __webpack_exports__htmxScrollableSticky as htmxScrollableSticky,
  __webpack_exports__htmxScrollableTabs as htmxScrollableTabs,
  __webpack_exports__htmxScrollspy as htmxScrollspy,
  __webpack_exports__htmxSpinImages as htmxSpinImages,
  __webpack_exports__htmxStickyHeader as htmxStickyHeader,
  __webpack_exports__isAboveAndBelowScreen as isAboveAndBelowScreen,
  __webpack_exports__isAboveTheScreen as isAboveTheScreen,
  __webpack_exports__isBelowTheScreen as isBelowTheScreen,
  __webpack_exports__isBottomOfElementBelowOfViewport as isBottomOfElementBelowOfViewport,
  __webpack_exports__isOnGap as isOnGap,
  __webpack_exports__isOnTheSameDirection as isOnTheSameDirection,
  __webpack_exports__isOutOfLimit as isOutOfLimit,
  __webpack_exports__isTopOfElementAboveOfViewport as isTopOfElementAboveOfViewport,
  __webpack_exports__joyPad as joyPad,
  __webpack_exports__pageProgress as pageProgress,
  __webpack_exports__parallax as parallax,
  __webpack_exports__ready as ready,
  __webpack_exports__scroll as scroll,
  __webpack_exports__scrollSpy as scrollSpy,
  __webpack_exports__scrollTo as scrollTo,
  __webpack_exports__scrollToEl as scrollToEl,
  __webpack_exports__scrollableSticky as scrollableSticky,
  __webpack_exports__scrollspy as scrollspy,
  __webpack_exports__spinImages as spinImages,
  __webpack_exports__touch as touch,
  __webpack_exports__translate as translate,
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsK0VBQStFLFNBQVMsZ0JBQWdCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7OztTQ2pYRjtTQUNBOztTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBOztTQUVBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBOzs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsaUNBQWlDLFdBQVc7VUFDNUM7VUFDQTs7Ozs7VUNQQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0E7VUFDQSxDQUFDOzs7OztVQ1BEOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7VUNOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDRDtBQUNBO0FBQ0s7QUFDRztBQUNEO0FBQ0Y7QUFDSSIsInNvdXJjZXMiOlsid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL2FuY2hvci9hbmNob3Iuc2NzcyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9jYXJvdXNlbC9jYXJvdXNlbC5zY3NzIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL3BhcmFsbGF4L3BhcmFsbGF4LnNjc3MiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2Uvc2Nyb2xsYWJsZS1zdGlja3kvc2Nyb2xsYWJsZS1zdGlja3kuc2NzcyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9zY3JvbGxhYmxlLXRhYnMvc2Nyb2xsYWJsZS10YWJzLnNjc3MiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2Uvc3Bpbi1pbWFnZXMvc3Bpbi1pbWFnZXMuc2NzcyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9zdGlja3ktaGVhZGVyL3N0aWNreS1oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL3V0aWxpdGllcy9lbGVtZW50L2VsZW1lbnQuc2NzcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJSZXN0LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zaG9ydE91dC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNOaWwuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvTm90aWZpY2F0aW9uRmFjdG9yaWVzLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1N1YmplY3QuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9TdWJzY3JpYmVyLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvY29uZmlnLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29ic2VydmFibGUvZnJvbS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29ic2VydmFibGUvZnJvbUV2ZW50LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9pbm5lckZyb20uanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL21lcmdlLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL09wZXJhdG9yU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9kZWJvdW5jZVRpbWUuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21hcC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9tZXJnZUFsbC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9tZXJnZUludGVybmFscy5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9tZXJnZU1hcC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9vYnNlcnZlT24uanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvcGFpcndpc2UuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvc2Nhbi5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9zY2FuSW50ZXJuYWxzLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL3N1YnNjcmliZU9uLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL3N3aXRjaE1hcC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy90YWtlLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL3Rha2VVbnRpbC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXN5bmNJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUl0ZXJhYmxlLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVkLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9Bc3luY1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9hc3luYy5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9kYXRlVGltZXN0YW1wUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvaW50ZXJ2YWxQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2FyZ3MuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2FyclJlbW92ZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvY3JlYXRlRXJyb3JDbGFzcy5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvZXJyb3JDb250ZXh0LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9leGVjdXRlU2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNBc3luY0l0ZXJhYmxlLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0l0ZXJhYmxlLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvbGlmdC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvbWFwT25lT3JNYW55QXJncy5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvbm9vcC5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvcGlwZS5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2UvYW5jaG9yL2FuY2hvci5zY3NzP2U3MmUiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2UvY2Fyb3VzZWwvY2Fyb3VzZWwuc2Nzcz80ZTYzIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL3BhcmFsbGF4L3BhcmFsbGF4LnNjc3M/YTk5NyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9zY3JvbGxhYmxlLXN0aWNreS9zY3JvbGxhYmxlLXN0aWNreS5zY3NzPzQzODgiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2Uvc2Nyb2xsYWJsZS10YWJzL3Njcm9sbGFibGUtdGFicy5zY3NzP2MyZDQiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2Uvc3Bpbi1pbWFnZXMvc3Bpbi1pbWFnZXMuc2Nzcz85ODhjIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL3N0aWNreS1oZWFkZXIvc3RpY2t5LWhlYWRlci5zY3NzP2FlMTciLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy91dGlsaXRpZXMvZWxlbWVudC9lbGVtZW50LnNjc3M/ZDVmMiIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL292b3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL292b3MvLi9zcmMvYXBpL3Njcm9sbC9pbmRleC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2FwaS9zY3JvbGwvc2Nyb2xsLW9ic2VydmVyLnRzIiwid2VicGFjazovL292b3MvLi9zcmMvYXBpL3Njcm9sbC9zY3JvbGwtb2JzZXJ2ZXIudHlwZXMudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9hcGkvdG91Y2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9hcGkvdG91Y2gvdG91Y2gudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2UvYW5jaG9yL2FuY2hvci5odG14LnRzIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL2FuY2hvci9hbmNob3IudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2UvYW5jaG9yL2FuY2hvci50eXBlcy50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9hbmNob3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2UvY2Fyb3VzZWwvY2Fyb3VzZWwuaHRteC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9jYXJvdXNlbC9jYXJvdXNlbC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9jYXJvdXNlbC9jYXJvdXNlbC50eXBlcy50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9jYXJvdXNlbC9pbmRleC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9maXQtb24tc2NyZWVuL2ZpdC1vbi1zY3JlZW4uaHRteC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9maXQtb24tc2NyZWVuL2ZpdC1vbi1zY3JlZW4udHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2UvZml0LW9uLXNjcmVlbi9maXQtb24tc2NyZWVuLnR5cGVzLnRzIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL2ZpdC1vbi1zY3JlZW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2Uvam95cGFkL2luZGV4LnRzIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL2pveXBhZC9qb3lwYWQudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2UvcGFnZS1wcm9ncmVzcy9pbmRleC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9wYWdlLXByb2dyZXNzL3BhZ2UtcHJvZ3Jlc3MuaHRteC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9wYWdlLXByb2dyZXNzL3BhZ2UtcHJvZ3Jlc3MudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2UvcGFyYWxsYXgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2UvcGFyYWxsYXgvcGFyYWxsYXguaHRteC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9wYXJhbGxheC9wYXJhbGxheC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9wYXJhbGxheC9wYXJhbGxheC50eXBlcy50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9zY3JvbGxhYmxlLXN0aWNreS9pbmRleC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9zY3JvbGxhYmxlLXN0aWNreS9zY3JvbGxhYmxlLXN0aWNreS5odG14LnRzIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL3Njcm9sbGFibGUtc3RpY2t5L3Njcm9sbGFibGUtc3RpY2t5LnRzIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL3Njcm9sbGFibGUtc3RpY2t5L3Njcm9sbGFibGUtc3RpY2t5LnR5cGVzLnRzIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL3Njcm9sbGFibGUtdGFicy9pbmRleC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9zY3JvbGxhYmxlLXRhYnMvc2Nyb2xsYWJsZS10YWJzLmh0bXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2Uvc2Nyb2xsYWJsZS10YWJzL3Njcm9sbGFibGUtdGFicy50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9zY3JvbGxzcHkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2Uvc2Nyb2xsc3B5L3Njcm9sbHNweS5odG14LnRzIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL3Njcm9sbHNweS9zY3JvbGxzcHkudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2Uvc2Nyb2xsc3B5L3Njcm9sbHNweS50eXBlcy50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9zcGluLWltYWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL2ludGVyZmFjZS9zcGluLWltYWdlcy9zcGluLWltYWdlcy5odG14LnRzIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL3NwaW4taW1hZ2VzL3NwaW4taW1hZ2VzLnRzIiwid2VicGFjazovL292b3MvLi9zcmMvaW50ZXJmYWNlL3N0aWNreS1oZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2Uvc3RpY2t5LWhlYWRlci9zdGlja3ktaGVhZGVyLmh0bXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9pbnRlcmZhY2Uvc3RpY2t5LWhlYWRlci9zdGlja3ktaGVhZGVyLnRzIiwid2VicGFjazovL292b3MvLi9zcmMvb3BlcmF0b3JzL2F4aXMvYXhpcy5vcGVyYXRvcnMudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy9vcGVyYXRvcnMvYXhpcy9pbmRleC50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL3V0aWxpdGllcy9heGlzL2F4aXMudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy91dGlsaXRpZXMvYXhpcy9heGlzLnR5cGVzLnRzIiwid2VicGFjazovL292b3MvLi9zcmMvdXRpbGl0aWVzL2F4aXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy91dGlsaXRpZXMvZG9jdW1lbnQvZG9jdW1lbnQudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy91dGlsaXRpZXMvZG9jdW1lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy91dGlsaXRpZXMvZWxlbWVudC9lbGVtZW50LnRzIiwid2VicGFjazovL292b3MvLi9zcmMvdXRpbGl0aWVzL2VsZW1lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy91dGlsaXRpZXMvc2Nyb2xsL2luZGV4LnRzIiwid2VicGFjazovL292b3MvLi9zcmMvdXRpbGl0aWVzL3Njcm9sbC9zY3JvbGwudHMiLCJ3ZWJwYWNrOi8vb3Zvcy8uL3NyYy91dGlsaXRpZXMvc2Nyb2xsL3Njcm9sbC50eXBlcy50cyIsIndlYnBhY2s6Ly9vdm9zLy4vc3JjL3V0aWxpdGllcy92aWV3L2luZGV4LnRzIiwid2VicGFjazovL292b3MvLi9zcmMvdXRpbGl0aWVzL3ZpZXcvdmlldy50cyIsIndlYnBhY2s6Ly9vdm9zLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5tanMiLCJ3ZWJwYWNrOi8vb3Zvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vdm9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL292b3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL292b3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vdm9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3Zvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL292b3Mvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL292b3MvLi9zcmMvb3Zvcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgW2RhdGEtYW4tZml4ZWQ9dHJ1ZV0ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbltkYXRhLWFuLXBvc2l0aW9uPXRvcF0ge1xuICB0b3A6IDA7XG59XG5cbltkYXRhLWFuLXBvc2l0aW9uPWJvdHRvbV0ge1xuICBib3R0b206IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW50ZXJmYWNlL2FuY2hvci9hbmNob3Iuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLE1BQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJbZGF0YS1hbi1maXhlZD1cXFwidHJ1ZVxcXCJdIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtYW4tcG9zaXRpb249XFxcInRvcFxcXCJdIHtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtYW4tcG9zaXRpb249XFxcImJvdHRvbVxcXCJdIHtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBbZGF0YS1jYXJvdXNlbD1zbGlkZXJdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bZGF0YS1jYXJvdXNlbD1zbGlkZXJdOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbltkYXRhLWNhcm91c2VsPXNsaWRlXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXNocmluazogMDtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbiAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xufVxuXG5bZGF0YS1jYXJvdXNlbD1hcnJvd10ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5bZGF0YS1jYXJvdXNlbD1hcnJvd10uaXMtYXJyb3ctLWxvYWRlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbltkYXRhLWNhcm91c2VsLXZpc2libGUtc2xpZGVzPVwiMlwiXSBbZGF0YS1jYXJvdXNlbD1zbGlkZV0ge1xuICB3aWR0aDogNTAlO1xufVxuXG5bZGF0YS1jYXJvdXNlbC12aXNpYmxlLXNsaWRlcz1cIjNcIl0gW2RhdGEtY2Fyb3VzZWw9c2xpZGVdIHtcbiAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xufVxuXG5bZGF0YS1jYXJvdXNlbC12aXNpYmxlLXNsaWRlcz1cIjRcIl0gW2RhdGEtY2Fyb3VzZWw9c2xpZGVdIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuW2RhdGEtY2Fyb3VzZWwtdmlzaWJsZS1zbGlkZXM9XCI1XCJdIFtkYXRhLWNhcm91c2VsPXNsaWRlXSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbltkYXRhLWNhcm91c2VsLXZpc2libGUtc2xpZGVzPVwiNlwiXSBbZGF0YS1jYXJvdXNlbD1zbGlkZV0ge1xuICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW50ZXJmYWNlL2Nhcm91c2VsL2Nhcm91c2VsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtBQUNKOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFFRTtFQUNFLG1CQUFBO0FBQUo7O0FBS0U7RUFDRSxVQUFBO0FBRko7O0FBT0U7RUFDRSxxQkFBQTtBQUpKOztBQVNFO0VBQ0UsVUFBQTtBQU5KOztBQVdFO0VBQ0UsVUFBQTtBQVJKOztBQWFFO0VBQ0UscUJBQUE7QUFWSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJbZGF0YS1jYXJvdXNlbD0nc2xpZGVyJ10ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbltkYXRhLWNhcm91c2VsPSdzbGlkZSddIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtY2Fyb3VzZWw9J2Fycm93J10ge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcclxcbiAgJi5pcy1hcnJvdy0tbG9hZGVkIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtY2Fyb3VzZWwtdmlzaWJsZS1zbGlkZXM9JzInXSB7XFxyXFxuICBbZGF0YS1jYXJvdXNlbD0nc2xpZGUnXSB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbltkYXRhLWNhcm91c2VsLXZpc2libGUtc2xpZGVzPSczJ10ge1xcclxcbiAgW2RhdGEtY2Fyb3VzZWw9J3NsaWRlJ10ge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbltkYXRhLWNhcm91c2VsLXZpc2libGUtc2xpZGVzPSc0J10ge1xcclxcbiAgW2RhdGEtY2Fyb3VzZWw9J3NsaWRlJ10ge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1jYXJvdXNlbC12aXNpYmxlLXNsaWRlcz0nNSddIHtcXHJcXG4gIFtkYXRhLWNhcm91c2VsPSdzbGlkZSddIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtY2Fyb3VzZWwtdmlzaWJsZS1zbGlkZXM9JzYnXSB7XFxyXFxuICBbZGF0YS1jYXJvdXNlbD0nc2xpZGUnXSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBbZGF0YS1vdm8tcGFyYWxsYXhdIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbnRlcmZhY2UvcGFyYWxsYXgvcGFyYWxsYXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiW2RhdGEtb3ZvLXBhcmFsbGF4XSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFtvdm8tc2Nyb2xsYWJsZS1zdGlja3ldIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbltvdm8tc2Nyb2xsYWJsZS1zdGlja3ldW2RhdGEtb3ZvX3Njcm9sbGFibGVfc3RpY2t5X3Bpbm5lZD1ib3R0b21dIFtvdm8tc2Nyb2xsYWJsZS1zdGlja3lfY29udGVudF0ge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbltvdm8tc2Nyb2xsYWJsZS1zdGlja3ldW2RhdGEtb3ZvX3Njcm9sbGFibGVfc3RpY2t5X2ZpeGVkPXRydWVdIFtvdm8tc2Nyb2xsYWJsZS1zdGlja3lfY29udGVudF0ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbnRlcmZhY2Uvc2Nyb2xsYWJsZS1zdGlja3kvc2Nyb2xsYWJsZS1zdGlja3kuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFSTtFQUNFLG9CQUFBO0FBQU47QUFLSTtFQUNFLGVBQUE7RUFDQSxNQUFBO0FBSE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiW292by1zY3JvbGxhYmxlLXN0aWNreV0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgJltkYXRhLW92b19zY3JvbGxhYmxlX3N0aWNreV9waW5uZWQ9J2JvdHRvbSddIHtcXHJcXG4gICAgW292by1zY3JvbGxhYmxlLXN0aWNreV9jb250ZW50XSB7XFxyXFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZbZGF0YS1vdm9fc2Nyb2xsYWJsZV9zdGlja3lfZml4ZWQ9J3RydWUnXSB7XFxyXFxuICAgIFtvdm8tc2Nyb2xsYWJsZS1zdGlja3lfY29udGVudF0ge1xcclxcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBbZGF0YS1vdm8tc2Nyb2xsYWJsZS10YWJzXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5bZGF0YS1vdm8tc2Nyb2xsYWJsZS10YWJzXSA+ICoge1xuICBmbGV4LXNocmluazogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbnRlcmZhY2Uvc2Nyb2xsYWJsZS10YWJzL3Njcm9sbGFibGUtdGFicy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIltkYXRhLW92by1zY3JvbGxhYmxlLXRhYnNdIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG5cXHJcXG4gID4gKiB7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFtkYXRhLW92by1zcGluLWltYWdlc10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogZ3JhYjtcbn1cbltkYXRhLW92by1zcGluLWltYWdlc10gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbltkYXRhLW92by1zcGluLWltYWdlc106OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiMzYwXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIG9wYWNpdHk6IDA7XG59XG5bZGF0YS1vdm8tc3Bpbi1pbWFnZXNdLmlzLWxvYWRlZDo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbn1cbltkYXRhLW92by1zcGluLWltYWdlc10uaXMtbG9hZGVkLm92by1hY3RpdmUge1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuW2RhdGEtb3ZvLXNwaW4taW1hZ2VzXS5pcy1sb2FkZWQub3ZvLWFjdGl2ZTo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuW2RhdGEtb3ZvLXNwaW4taW1hZ2VzPXNwcml0ZV0ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5bZGF0YS1vdm8tc3Bpbi1pbWFnZXM9c3ByaXRlXSA+ICoge1xuICBmbGV4OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ludGVyZmFjZS9zcGluLWltYWdlcy9zcGluLWltYWdlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUFBSjtBQUlJO0VBQ0UsVUFBQTtBQUZOO0FBS0k7RUFDRSxnQkFBQTtBQUhOO0FBS007RUFDRSxVQUFBO0FBSFI7O0FBU0E7RUFDRSx3QkFBQTtFQUNBLGFBQUE7QUFORjtBQVFFO0VBQ0UsT0FBQTtBQU5KXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIltkYXRhLW92by1zcGluLWltYWdlc10ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGN1cnNvcjogZ3JhYjtcXHJcXG5cXHJcXG4gIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnMzYwJztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjRzO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5pcy1sb2FkZWQge1xcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5vdm8tYWN0aXZlIHtcXHJcXG4gICAgICBjdXJzb3I6IGdyYWJiaW5nO1xcclxcblxcclxcbiAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1vdm8tc3Bpbi1pbWFnZXM9J3Nwcml0ZSddIHtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICA+ICoge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbltkYXRhLW92by1zdGlja3ktaGVhZGVyXSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbnRlcmZhY2Uvc3RpY2t5LWhlYWRlci9zdGlja3ktaGVhZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbltkYXRhLW92by1zdGlja3ktaGVhZGVyXSB7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFtkYXRhLW92by1ub24tc2Nyb2xsYWJsZT10cnVlXSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdXRpbGl0aWVzL2VsZW1lbnQvZWxlbWVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJbZGF0YS1vdm8tbm9uLXNjcm9sbGFibGU9XFxcInRydWVcXFwiXSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBib2R5LFxcclxcbi8vIGh0bWwge1xcclxcbi8vICAgJltkYXRhLW92by1ub24tc2Nyb2xsYWJsZT1cXFwidHJ1ZVxcXCJdIHtcXHJcXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuLy8gICAgIHdpZHRoOiAxMDAlO1xcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXNOYU4gPSByZXF1aXJlKCcuL19iYXNlSXNOYU4nKSxcbiAgICBzdHJpY3RJbmRleE9mID0gcmVxdWlyZSgnLi9fc3RyaWN0SW5kZXhPZicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlXG4gICAgPyBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KVxuICAgIDogYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUlzTmFOLCBmcm9tSW5kZXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgbWV0aG9kcyBsaWtlIGBfLmludGVyc2VjdGlvbmAsIHdpdGhvdXQgc3VwcG9ydFxuICogZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMsIHRoYXQgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgdG8gaW5zcGVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlzIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIHNoYXJlZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbnRlcnNlY3Rpb24oYXJyYXlzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5jbHVkZXMgPSBjb21wYXJhdG9yID8gYXJyYXlJbmNsdWRlc1dpdGggOiBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXlzWzBdLmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IGFycmF5cy5sZW5ndGgsXG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aCxcbiAgICAgIGNhY2hlcyA9IEFycmF5KG90aExlbmd0aCksXG4gICAgICBtYXhMZW5ndGggPSBJbmZpbml0eSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlIChvdGhJbmRleC0tKSB7XG4gICAgdmFyIGFycmF5ID0gYXJyYXlzW290aEluZGV4XTtcbiAgICBpZiAob3RoSW5kZXggJiYgaXRlcmF0ZWUpIHtcbiAgICAgIGFycmF5ID0gYXJyYXlNYXAoYXJyYXksIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICAgIH1cbiAgICBtYXhMZW5ndGggPSBuYXRpdmVNaW4oYXJyYXkubGVuZ3RoLCBtYXhMZW5ndGgpO1xuICAgIGNhY2hlc1tvdGhJbmRleF0gPSAhY29tcGFyYXRvciAmJiAoaXRlcmF0ZWUgfHwgKGxlbmd0aCA+PSAxMjAgJiYgYXJyYXkubGVuZ3RoID49IDEyMCkpXG4gICAgICA/IG5ldyBTZXRDYWNoZShvdGhJbmRleCAmJiBhcnJheSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG4gIGFycmF5ID0gYXJyYXlzWzBdO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgc2VlbiA9IGNhY2hlc1swXTtcblxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgcmVzdWx0Lmxlbmd0aCA8IG1heExlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKCEoc2VlblxuICAgICAgICAgID8gY2FjaGVIYXMoc2VlbiwgY29tcHV0ZWQpXG4gICAgICAgICAgOiBpbmNsdWRlcyhyZXN1bHQsIGNvbXB1dGVkLCBjb21wYXJhdG9yKVxuICAgICAgICApKSB7XG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aDtcbiAgICAgIHdoaWxlICgtLW90aEluZGV4KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IGNhY2hlc1tvdGhJbmRleF07XG4gICAgICAgIGlmICghKGNhY2hlXG4gICAgICAgICAgICAgID8gY2FjaGVIYXMoY2FjaGUsIGNvbXB1dGVkKVxuICAgICAgICAgICAgICA6IGluY2x1ZGVzKGFycmF5c1tvdGhJbmRleF0sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2Vlbikge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbnRlcnNlY3Rpb247XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hTjtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG4iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgb3ZlclJlc3QgPSByZXF1aXJlKCcuL19vdmVyUmVzdCcpLFxuICAgIHNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fc2V0VG9TdHJpbmcnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlc3Q7XG4iLCJ2YXIgY29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50JyksXG4gICAgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0VG9TdHJpbmc7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG4iLCJ2YXIgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhbiBlbXB0eSBhcnJheSBpZiBpdCdzIG5vdCBhbiBhcnJheSBsaWtlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgdGhlIGNhc3QgYXJyYXktbGlrZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNhc3RBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdEFycmF5TGlrZU9iamVjdDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcbiIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VSZXN0YCB3aGljaCB0cmFuc2Zvcm1zIHRoZSByZXN0IGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSByZXN0IGFycmF5IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyUmVzdChmdW5jLCBzdGFydCwgdHJhbnNmb3JtKSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHRyYW5zZm9ybShhcnJheSk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlclJlc3Q7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcbiIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG4iLCIvKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvcnRPdXQ7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZSgnLi9fYmFzZUludGVyc2VjdGlvbicpLFxuICAgIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBjYXN0QXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9fY2FzdEFycmF5TGlrZU9iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdW5pcXVlIHZhbHVlcyB0aGF0IGFyZSBpbmNsdWRlZCBpbiBhbGwgZ2l2ZW4gYXJyYXlzXG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLiBUaGUgb3JkZXIgYW5kIHJlZmVyZW5jZXMgb2YgcmVzdWx0IHZhbHVlcyBhcmVcbiAqIGRldGVybWluZWQgYnkgdGhlIGZpcnN0IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgaW50ZXJzZWN0aW5nIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pbnRlcnNlY3Rpb24oWzIsIDFdLCBbMiwgM10pO1xuICogLy8gPT4gWzJdXG4gKi9cbnZhciBpbnRlcnNlY3Rpb24gPSBiYXNlUmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgdmFyIG1hcHBlZCA9IGFycmF5TWFwKGFycmF5cywgY2FzdEFycmF5TGlrZU9iamVjdCk7XG4gIHJldHVybiAobWFwcGVkLmxlbmd0aCAmJiBtYXBwZWRbMF0gPT09IGFycmF5c1swXSlcbiAgICA/IGJhc2VJbnRlcnNlY3Rpb24obWFwcGVkKVxuICAgIDogW107XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcnNlY3Rpb247XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgbnVsbGlzaCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmlsKG51bGwpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOaWwodm9pZCAwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmlsKE5hTik7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05pbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc05pbDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE51bWJlcmAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiAqKk5vdGU6KiogVG8gZXhjbHVkZSBgSW5maW5pdHlgLCBgLUluZmluaXR5YCwgYW5kIGBOYU5gLCB3aGljaCBhcmVcbiAqIGNsYXNzaWZpZWQgYXMgbnVtYmVycywgdXNlIHRoZSBgXy5pc0Zpbml0ZWAgbWV0aG9kLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOdW1iZXIoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTnVtYmVyKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gbnVtYmVyVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc051bWJlcjtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwiZXhwb3J0IHZhciBDT01QTEVURV9OT1RJRklDQVRJT04gPSAoZnVuY3Rpb24gKCkgeyByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdDJywgdW5kZWZpbmVkLCB1bmRlZmluZWQpOyB9KSgpO1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yTm90aWZpY2F0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vdGlmaWNhdGlvbignRScsIHVuZGVmaW5lZCwgZXJyb3IpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5leHROb3RpZmljYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdOJywgdmFsdWUsIHVuZGVmaW5lZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKGtpbmQsIHZhbHVlLCBlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RpZmljYXRpb25GYWN0b3JpZXMuanMubWFwIiwiaW1wb3J0IHsgU2FmZVN1YnNjcmliZXIsIFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBwaXBlRnJvbUFycmF5IH0gZnJvbSAnLi91dGlsL3BpcGUnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGVycm9yQ29udGV4dCB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xudmFyIE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlKSB7XG4gICAgICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5saWZ0ID0gZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgICAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBpc1N1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQpID8gb2JzZXJ2ZXJPck5leHQgOiBuZXcgU2FmZVN1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIGVycm9yQ29udGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcywgb3BlcmF0b3IgPSBfYS5vcGVyYXRvciwgc291cmNlID0gX2Euc291cmNlO1xuICAgICAgICAgICAgc3Vic2NyaWJlci5hZGQob3BlcmF0b3JcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yLmNhbGwoc3Vic2NyaWJlciwgc291cmNlKVxuICAgICAgICAgICAgICAgIDogc291cmNlXG4gICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9zdWJzY3JpYmUoc3Vic2NyaWJlcilcbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc2luaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzaW5rLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAobmV4dCwgcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBuZXcgU2FmZVN1YnNjcmliZXIoe1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IHJlc29sdmUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5zb3VyY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtTeW1ib2xfb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGlwZUZyb21BcnJheShvcGVyYXRpb25zKSh0aGlzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnRvUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuICh2YWx1ZSA9IHgpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiByZWplY3QoZXJyKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlO1xufSgpKTtcbmV4cG9ydCB7IE9ic2VydmFibGUgfTtcbmZ1bmN0aW9uIGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBwcm9taXNlQ3RvciAhPT0gbnVsbCAmJiBwcm9taXNlQ3RvciAhPT0gdm9pZCAwID8gcHJvbWlzZUN0b3IgOiBjb25maWcuUHJvbWlzZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogUHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGlzT2JzZXJ2ZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5uZXh0KSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmVycm9yKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmNvbXBsZXRlKTtcbn1cbmZ1bmN0aW9uIGlzU3Vic2NyaWJlcih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB8fCAoaXNPYnNlcnZlcih2YWx1ZSkgJiYgaXNTdWJzY3JpcHRpb24odmFsdWUpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmFibGUuanMubWFwIiwiaW1wb3J0IHsgZGF0ZVRpbWVzdGFtcFByb3ZpZGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIvZGF0ZVRpbWVzdGFtcFByb3ZpZGVyJztcbnZhciBTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcihzY2hlZHVsZXJBY3Rpb25DdG9yLCBub3cpIHtcbiAgICAgICAgaWYgKG5vdyA9PT0gdm9pZCAwKSB7IG5vdyA9IFNjaGVkdWxlci5ub3c7IH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZXJBY3Rpb25DdG9yID0gc2NoZWR1bGVyQWN0aW9uQ3RvcjtcbiAgICAgICAgdGhpcy5ub3cgPSBub3c7XG4gICAgfVxuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAod29yaywgZGVsYXksIHN0YXRlKSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuc2NoZWR1bGVyQWN0aW9uQ3Rvcih0aGlzLCB3b3JrKS5zY2hlZHVsZShzdGF0ZSwgZGVsYXkpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLm5vdyA9IGRhdGVUaW1lc3RhbXBQcm92aWRlci5ub3c7XG4gICAgcmV0dXJuIFNjaGVkdWxlcjtcbn0oKSk7XG5leHBvcnQgeyBTY2hlZHVsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNjaGVkdWxlci5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMsIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgRU1QVFlfU1VCU0NSSVBUSU9OIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgfSBmcm9tICcuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcbnZhciBTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMudGhyb3duRXJyb3IgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YmplY3QucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIHN1YmplY3QgPSBuZXcgQW5vbnltb3VzU3ViamVjdCh0aGlzLCB0aGlzKTtcbiAgICAgICAgc3ViamVjdC5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gc3ViamVjdDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90aHJvd0lmQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGVycm9yQ29udGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuY3VycmVudE9ic2VydmVycykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gQXJyYXkuZnJvbShfdGhpcy5vYnNlcnZlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKF90aGlzLmN1cnJlbnRPYnNlcnZlcnMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZXJyb3JDb250ZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmhhc0Vycm9yID0gX3RoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHJvd25FcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gX3RoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlcnJvckNvbnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgICAgICAgIGlmICghX3RoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gX3RoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN1YmplY3QucHJvdG90eXBlLCBcIm9ic2VydmVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gKChfYSA9IHRoaXMub2JzZXJ2ZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA+IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlLmNhbGwodGhpcywgc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICB0aGlzLl9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5faW5uZXJTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5faW5uZXJTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBoYXNFcnJvciA9IF9hLmhhc0Vycm9yLCBpc1N0b3BwZWQgPSBfYS5pc1N0b3BwZWQsIG9ic2VydmVycyA9IF9hLm9ic2VydmVycztcbiAgICAgICAgaWYgKGhhc0Vycm9yIHx8IGlzU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIEVNUFRZX1NVQlNDUklQVElPTjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgICAgICBvYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICAgICAgICBhcnJSZW1vdmUob2JzZXJ2ZXJzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGhhc0Vycm9yID0gX2EuaGFzRXJyb3IsIHRocm93bkVycm9yID0gX2EudGhyb3duRXJyb3IsIGlzU3RvcHBlZCA9IF9hLmlzU3RvcHBlZDtcbiAgICAgICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKHRocm93bkVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuYXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBTdWJqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKTtcbiAgICB9O1xuICAgIHJldHVybiBTdWJqZWN0O1xufShPYnNlcnZhYmxlKSk7XG5leHBvcnQgeyBTdWJqZWN0IH07XG52YXIgQW5vbnltb3VzU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFub255bW91c1N1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIF90aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdmFsdWUpO1xuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGVycik7XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5kZXN0aW5hdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbXBsZXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuc291cmNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Vic2NyaWJlKHN1YnNjcmliZXIpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBFTVBUWV9TVUJTQ1JJUFRJT047XG4gICAgfTtcbiAgICByZXR1cm4gQW5vbnltb3VzU3ViamVjdDtcbn0oU3ViamVjdCkpO1xuZXhwb3J0IHsgQW5vbnltb3VzU3ViamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdC5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBpc1N1YnNjcmlwdGlvbiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgcmVwb3J0VW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3InO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbC9ub29wJztcbmltcG9ydCB7IG5leHROb3RpZmljYXRpb24sIGVycm9yTm90aWZpY2F0aW9uLCBDT01QTEVURV9OT1RJRklDQVRJT04gfSBmcm9tICcuL05vdGlmaWNhdGlvbkZhY3Rvcmllcyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXInO1xuaW1wb3J0IHsgY2FwdHVyZUVycm9yIH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG52YXIgU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3Vic2NyaWJlcihkZXN0aW5hdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgaWYgKGlzU3Vic2NyaXB0aW9uKGRlc3RpbmF0aW9uKSkge1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmFkZChfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IEVNUFRZX09CU0VSVkVSO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3Vic2NyaWJlci5jcmVhdGUgPSBmdW5jdGlvbiAobmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2FmZVN1YnNjcmliZXIobmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5leHROb3RpZmljYXRpb24odmFsdWUpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKGVycm9yTm90aWZpY2F0aW9uKGVyciksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihDT01QTEVURV9OT1RJRklDQVRJT04sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTdWJzY3JpYmVyO1xufShTdWJzY3JpcHRpb24pKTtcbmV4cG9ydCB7IFN1YnNjcmliZXIgfTtcbnZhciBfYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICAgIHJldHVybiBfYmluZC5jYWxsKGZuLCB0aGlzQXJnKTtcbn1cbnZhciBDb25zdW1lck9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25zdW1lck9ic2VydmVyKHBhcnRpYWxPYnNlcnZlcikge1xuICAgICAgICB0aGlzLnBhcnRpYWxPYnNlcnZlciA9IHBhcnRpYWxPYnNlcnZlcjtcbiAgICB9XG4gICAgQ29uc3VtZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyID0gdGhpcy5wYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbnN1bWVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyID0gdGhpcy5wYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25zdW1lck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxPYnNlcnZlciA9IHRoaXMucGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAocGFydGlhbE9ic2VydmVyLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29uc3VtZXJPYnNlcnZlcjtcbn0oKSk7XG52YXIgU2FmZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTYWZlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTYWZlU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIHZhciBwYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSB8fCAhb2JzZXJ2ZXJPck5leHQpIHtcbiAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiAob2JzZXJ2ZXJPck5leHQgIT09IG51bGwgJiYgb2JzZXJ2ZXJPck5leHQgIT09IHZvaWQgMCA/IG9ic2VydmVyT3JOZXh0IDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IgIT09IG51bGwgJiYgZXJyb3IgIT09IHZvaWQgMCA/IGVycm9yIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSAhPT0gbnVsbCAmJiBjb21wbGV0ZSAhPT0gdm9pZCAwID8gY29tcGxldGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNvbnRleHRfMTtcbiAgICAgICAgICAgIGlmIChfdGhpcyAmJiBjb25maWcudXNlRGVwcmVjYXRlZE5leHRDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF8xID0gT2JqZWN0LmNyZWF0ZShvYnNlcnZlck9yTmV4dCk7XG4gICAgICAgICAgICAgICAgY29udGV4dF8xLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudW5zdWJzY3JpYmUoKTsgfTtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IG9ic2VydmVyT3JOZXh0Lm5leHQgJiYgYmluZChvYnNlcnZlck9yTmV4dC5uZXh0LCBjb250ZXh0XzEpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXJPck5leHQuZXJyb3IgJiYgYmluZChvYnNlcnZlck9yTmV4dC5lcnJvciwgY29udGV4dF8xKSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuY29tcGxldGUsIGNvbnRleHRfMSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IENvbnN1bWVyT2JzZXJ2ZXIocGFydGlhbE9ic2VydmVyKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gU2FmZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IFNhZmVTdWJzY3JpYmVyIH07XG5mdW5jdGlvbiBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICBjYXB0dXJlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlZmF1bHRFcnJvckhhbmRsZXIoZXJyKSB7XG4gICAgdGhyb3cgZXJyO1xufVxuZnVuY3Rpb24gaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHN1YnNjcmliZXIpIHtcbiAgICB2YXIgb25TdG9wcGVkTm90aWZpY2F0aW9uID0gY29uZmlnLm9uU3RvcHBlZE5vdGlmaWNhdGlvbjtcbiAgICBvblN0b3BwZWROb3RpZmljYXRpb24gJiYgdGltZW91dFByb3ZpZGVyLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gb25TdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgc3Vic2NyaWJlcik7IH0pO1xufVxuZXhwb3J0IHZhciBFTVBUWV9PQlNFUlZFUiA9IHtcbiAgICBjbG9zZWQ6IHRydWUsXG4gICAgbmV4dDogbm9vcCxcbiAgICBlcnJvcjogZGVmYXVsdEVycm9ySGFuZGxlcixcbiAgICBjb21wbGV0ZTogbm9vcCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpYmVyLmpzLm1hcCIsImltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWRBcnJheSwgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBVbnN1YnNjcmlwdGlvbkVycm9yIH0gZnJvbSAnLi91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG52YXIgU3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdWJzY3JpcHRpb24oaW5pdGlhbFRlYXJkb3duKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRlYXJkb3duID0gaW5pdGlhbFRlYXJkb3duO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgICAgICB0aGlzLl9maW5hbGl6ZXJzID0gbnVsbDtcbiAgICB9XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVfMSwgX2EsIGVfMiwgX2I7XG4gICAgICAgIHZhciBlcnJvcnM7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfcGFyZW50YWdlID0gdGhpcy5fcGFyZW50YWdlO1xuICAgICAgICAgICAgaWYgKF9wYXJlbnRhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfcGFyZW50YWdlXzEgPSBfX3ZhbHVlcyhfcGFyZW50YWdlKSwgX3BhcmVudGFnZV8xXzEgPSBfcGFyZW50YWdlXzEubmV4dCgpOyAhX3BhcmVudGFnZV8xXzEuZG9uZTsgX3BhcmVudGFnZV8xXzEgPSBfcGFyZW50YWdlXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudF8xID0gX3BhcmVudGFnZV8xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50XzEucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3BhcmVudGFnZV8xXzEgJiYgIV9wYXJlbnRhZ2VfMV8xLmRvbmUgJiYgKF9hID0gX3BhcmVudGFnZV8xLnJldHVybikpIF9hLmNhbGwoX3BhcmVudGFnZV8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3BhcmVudGFnZS5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluaXRpYWxGaW5hbGl6ZXIgPSB0aGlzLmluaXRpYWxUZWFyZG93bjtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGluaXRpYWxGaW5hbGl6ZXIpKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEZpbmFsaXplcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvciA/IGUuZXJyb3JzIDogW2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfZmluYWxpemVycyA9IHRoaXMuX2ZpbmFsaXplcnM7XG4gICAgICAgICAgICBpZiAoX2ZpbmFsaXplcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5hbGl6ZXJzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfZmluYWxpemVyc18xID0gX192YWx1ZXMoX2ZpbmFsaXplcnMpLCBfZmluYWxpemVyc18xXzEgPSBfZmluYWxpemVyc18xLm5leHQoKTsgIV9maW5hbGl6ZXJzXzFfMS5kb25lOyBfZmluYWxpemVyc18xXzEgPSBfZmluYWxpemVyc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbmFsaXplciA9IF9maW5hbGl6ZXJzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY0ZpbmFsaXplcihmaW5hbGl6ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyAhPT0gbnVsbCAmJiBlcnJvcnMgIT09IHZvaWQgMCA/IGVycm9ycyA6IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGVycm9ycykpLCBfX3JlYWQoZXJyLmVycm9ycykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZmluYWxpemVyc18xXzEgJiYgIV9maW5hbGl6ZXJzXzFfMS5kb25lICYmIChfYiA9IF9maW5hbGl6ZXJzXzEucmV0dXJuKSkgX2IuY2FsbChfZmluYWxpemVyc18xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBVbnN1YnNjcmlwdGlvbkVycm9yKGVycm9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRlYXJkb3duKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRlYXJkb3duICYmIHRlYXJkb3duICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICBleGVjRmluYWxpemVyKHRlYXJkb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0ZWFyZG93biBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVhcmRvd24uY2xvc2VkIHx8IHRlYXJkb3duLl9oYXNQYXJlbnQodGhpcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZWFyZG93bi5fYWRkUGFyZW50KHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAodGhpcy5fZmluYWxpemVycyA9IChfYSA9IHRoaXMuX2ZpbmFsaXplcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdKS5wdXNoKHRlYXJkb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5faGFzUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgcmV0dXJuIF9wYXJlbnRhZ2UgPT09IHBhcmVudCB8fCAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSAmJiBfcGFyZW50YWdlLmluY2x1ZGVzKHBhcmVudCkpO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5fYWRkUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSA/IChfcGFyZW50YWdlLnB1c2gocGFyZW50KSwgX3BhcmVudGFnZSkgOiBfcGFyZW50YWdlID8gW19wYXJlbnRhZ2UsIHBhcmVudF0gOiBwYXJlbnQ7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLl9yZW1vdmVQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIHZhciBfcGFyZW50YWdlID0gdGhpcy5fcGFyZW50YWdlO1xuICAgICAgICBpZiAoX3BhcmVudGFnZSA9PT0gcGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkpIHtcbiAgICAgICAgICAgIGFyclJlbW92ZShfcGFyZW50YWdlLCBwYXJlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICh0ZWFyZG93bikge1xuICAgICAgICB2YXIgX2ZpbmFsaXplcnMgPSB0aGlzLl9maW5hbGl6ZXJzO1xuICAgICAgICBfZmluYWxpemVycyAmJiBhcnJSZW1vdmUoX2ZpbmFsaXplcnMsIHRlYXJkb3duKTtcbiAgICAgICAgaWYgKHRlYXJkb3duIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0ZWFyZG93bi5fcmVtb3ZlUGFyZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24uRU1QVFkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZW1wdHkgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9KSgpO1xuICAgIHJldHVybiBTdWJzY3JpcHRpb247XG59KCkpO1xuZXhwb3J0IHsgU3Vic2NyaXB0aW9uIH07XG5leHBvcnQgdmFyIEVNUFRZX1NVQlNDUklQVElPTiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbmV4cG9ydCBmdW5jdGlvbiBpc1N1YnNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24gfHxcbiAgICAgICAgKHZhbHVlICYmICdjbG9zZWQnIGluIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUucmVtb3ZlKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmFkZCkgJiYgaXNGdW5jdGlvbih2YWx1ZS51bnN1YnNjcmliZSkpKTtcbn1cbmZ1bmN0aW9uIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oZmluYWxpemVyKSkge1xuICAgICAgICBmaW5hbGl6ZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZpbmFsaXplci51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmlwdGlvbi5qcy5tYXAiLCJleHBvcnQgdmFyIGNvbmZpZyA9IHtcbiAgICBvblVuaGFuZGxlZEVycm9yOiBudWxsLFxuICAgIG9uU3RvcHBlZE5vdGlmaWNhdGlvbjogbnVsbCxcbiAgICBQcm9taXNlOiB1bmRlZmluZWQsXG4gICAgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZzogZmFsc2UsXG4gICAgdXNlRGVwcmVjYXRlZE5leHRDb250ZXh0OiBmYWxzZSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuZXhwb3J0IHZhciBFTVBUWSA9IG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0pO1xuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5KHNjaGVkdWxlcikge1xuICAgIHJldHVybiBzY2hlZHVsZXIgPyBlbXB0eVNjaGVkdWxlZChzY2hlZHVsZXIpIDogRU1QVFk7XG59XG5mdW5jdGlvbiBlbXB0eVNjaGVkdWxlZChzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0pOyB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtcHR5LmpzLm1hcCIsImltcG9ydCB7IHNjaGVkdWxlZCB9IGZyb20gJy4uL3NjaGVkdWxlZC9zY2hlZHVsZWQnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi9pbm5lckZyb20nO1xuZXhwb3J0IGZ1bmN0aW9uIGZyb20oaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBzY2hlZHVsZXIgPyBzY2hlZHVsZWQoaW5wdXQsIHNjaGVkdWxlcikgOiBpbm5lckZyb20oaW5wdXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbS5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAnLi4vb3BlcmF0b3JzL21lcmdlTWFwJztcbmltcG9ydCB7IGlzQXJyYXlMaWtlIH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5TGlrZSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IG1hcE9uZU9yTWFueUFyZ3MgfSBmcm9tICcuLi91dGlsL21hcE9uZU9yTWFueUFyZ3MnO1xudmFyIG5vZGVFdmVudEVtaXR0ZXJNZXRob2RzID0gWydhZGRMaXN0ZW5lcicsICdyZW1vdmVMaXN0ZW5lciddO1xudmFyIGV2ZW50VGFyZ2V0TWV0aG9kcyA9IFsnYWRkRXZlbnRMaXN0ZW5lcicsICdyZW1vdmVFdmVudExpc3RlbmVyJ107XG52YXIganF1ZXJ5TWV0aG9kcyA9IFsnb24nLCAnb2ZmJ107XG5leHBvcnQgZnVuY3Rpb24gZnJvbUV2ZW50KHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zLCByZXN1bHRTZWxlY3Rvcikge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIHJlc3VsdFNlbGVjdG9yID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBmcm9tRXZlbnQodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMpLnBpcGUobWFwT25lT3JNYW55QXJncyhyZXN1bHRTZWxlY3RvcikpO1xuICAgIH1cbiAgICB2YXIgX2EgPSBfX3JlYWQoaXNFdmVudFRhcmdldCh0YXJnZXQpXG4gICAgICAgID8gZXZlbnRUYXJnZXRNZXRob2RzLm1hcChmdW5jdGlvbiAobWV0aG9kTmFtZSkgeyByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHRhcmdldFttZXRob2ROYW1lXShldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpOyB9OyB9KVxuICAgICAgICA6XG4gICAgICAgICAgICBpc05vZGVTdHlsZUV2ZW50RW1pdHRlcih0YXJnZXQpXG4gICAgICAgICAgICAgICAgPyBub2RlRXZlbnRFbWl0dGVyTWV0aG9kcy5tYXAodG9Db21tb25IYW5kbGVyUmVnaXN0cnkodGFyZ2V0LCBldmVudE5hbWUpKVxuICAgICAgICAgICAgICAgIDogaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlcih0YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgID8ganF1ZXJ5TWV0aG9kcy5tYXAodG9Db21tb25IYW5kbGVyUmVnaXN0cnkodGFyZ2V0LCBldmVudE5hbWUpKVxuICAgICAgICAgICAgICAgICAgICA6IFtdLCAyKSwgYWRkID0gX2FbMF0sIHJlbW92ZSA9IF9hWzFdO1xuICAgIGlmICghYWRkKSB7XG4gICAgICAgIGlmIChpc0FycmF5TGlrZSh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VNYXAoZnVuY3Rpb24gKHN1YlRhcmdldCkgeyByZXR1cm4gZnJvbUV2ZW50KHN1YlRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zKTsgfSkoaW5uZXJGcm9tKHRhcmdldCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghYWRkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgZXZlbnQgdGFyZ2V0Jyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVyLm5leHQoMSA8IGFyZ3MubGVuZ3RoID8gYXJncyA6IGFyZ3NbMF0pO1xuICAgICAgICB9O1xuICAgICAgICBhZGQoaGFuZGxlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmUoaGFuZGxlcik7IH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiB0b0NvbW1vbkhhbmRsZXJSZWdpc3RyeSh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kTmFtZSkgeyByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHRhcmdldFttZXRob2ROYW1lXShldmVudE5hbWUsIGhhbmRsZXIpOyB9OyB9O1xufVxuZnVuY3Rpb24gaXNOb2RlU3R5bGVFdmVudEVtaXR0ZXIodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24odGFyZ2V0LmFkZExpc3RlbmVyKSAmJiBpc0Z1bmN0aW9uKHRhcmdldC5yZW1vdmVMaXN0ZW5lcik7XG59XG5mdW5jdGlvbiBpc0pRdWVyeVN0eWxlRXZlbnRFbWl0dGVyKHRhcmdldCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHRhcmdldC5vbikgJiYgaXNGdW5jdGlvbih0YXJnZXQub2ZmKTtcbn1cbmZ1bmN0aW9uIGlzRXZlbnRUYXJnZXQodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24odGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpICYmIGlzRnVuY3Rpb24odGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbUV2ZW50LmpzLm1hcCIsImltcG9ydCB7IF9fYXN5bmNWYWx1ZXMsIF9fYXdhaXRlciwgX19nZW5lcmF0b3IsIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FzeW5jSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvciB9IGZyb20gJy4uL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvcic7XG5pbXBvcnQgeyBpc0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzUmVhZGFibGVTdHJlYW1MaWtlLCByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi4vdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvcic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIGlubmVyRnJvbShpbnB1dCkge1xuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9taXNlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21Qcm9taXNlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBc3luY0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tSXRlcmFibGUoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUludGVyb3BPYnNlcnZhYmxlKG9iaikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgb2JzID0gb2JqW1N5bWJvbF9vYnNlcnZhYmxlXSgpO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvYnMuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9icy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvdmlkZWQgb2JqZWN0IGRvZXMgbm90IGNvcnJlY3RseSBpbXBsZW1lbnQgU3ltYm9sLm9ic2VydmFibGUnKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQXJyYXlMaWtlKGFycmF5KSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUHJvbWlzZShwcm9taXNlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pXG4gICAgICAgICAgICAudGhlbihudWxsLCByZXBvcnRVbmhhbmRsZWRFcnJvcik7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUl0ZXJhYmxlKGl0ZXJhYmxlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgaXRlcmFibGVfMSA9IF9fdmFsdWVzKGl0ZXJhYmxlKSwgaXRlcmFibGVfMV8xID0gaXRlcmFibGVfMS5uZXh0KCk7ICFpdGVyYWJsZV8xXzEuZG9uZTsgaXRlcmFibGVfMV8xID0gaXRlcmFibGVfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpdGVyYWJsZV8xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhYmxlXzFfMSAmJiAhaXRlcmFibGVfMV8xLmRvbmUgJiYgKF9hID0gaXRlcmFibGVfMS5yZXR1cm4pKSBfYS5jYWxsKGl0ZXJhYmxlXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQXN5bmNJdGVyYWJsZShhc3luY0l0ZXJhYmxlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHByb2Nlc3MoYXN5bmNJdGVyYWJsZSwgc3Vic2NyaWJlcikuY2F0Y2goZnVuY3Rpb24gKGVycikgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUmVhZGFibGVTdHJlYW1MaWtlKHJlYWRhYmxlU3RyZWFtKSB7XG4gICAgcmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IocmVhZGFibGVTdHJlYW0pKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3MoYXN5bmNJdGVyYWJsZSwgc3Vic2NyaWJlcikge1xuICAgIHZhciBhc3luY0l0ZXJhYmxlXzEsIGFzeW5jSXRlcmFibGVfMV8xO1xuICAgIHZhciBlXzIsIF9hO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlLCBlXzJfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCA1LCA2LCAxMV0pO1xuICAgICAgICAgICAgICAgICAgICBhc3luY0l0ZXJhYmxlXzEgPSBfX2FzeW5jVmFsdWVzKGFzeW5jSXRlcmFibGUpO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQsIGFzeW5jSXRlcmFibGVfMS5uZXh0KCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoYXN5bmNJdGVyYWJsZV8xXzEgPSBfYi5zZW50KCksICFhc3luY0l0ZXJhYmxlXzFfMS5kb25lKSkgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhc3luY0l0ZXJhYmxlXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMsIDExXTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIGVfMl8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBlXzIgPSB7IGVycm9yOiBlXzJfMSB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDExXTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbNiwgLCA5LCAxMF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShhc3luY0l0ZXJhYmxlXzFfMSAmJiAhYXN5bmNJdGVyYWJsZV8xXzEuZG9uZSAmJiAoX2EgPSBhc3luY0l0ZXJhYmxlXzEucmV0dXJuKSkpIHJldHVybiBbMywgOF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgX2EuY2FsbChhc3luY0l0ZXJhYmxlXzEpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA4O1xuICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFszLCAxMF07XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbN107XG4gICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFs3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5uZXJGcm9tLmpzLm1hcCIsImltcG9ydCB7IG1lcmdlQWxsIH0gZnJvbSAnLi4vb3BlcmF0b3JzL21lcmdlQWxsJztcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4vaW5uZXJGcm9tJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi9lbXB0eSc7XG5pbXBvcnQgeyBwb3BOdW1iZXIsIHBvcFNjaGVkdWxlciB9IGZyb20gJy4uL3V0aWwvYXJncyc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIHNjaGVkdWxlciA9IHBvcFNjaGVkdWxlcihhcmdzKTtcbiAgICB2YXIgY29uY3VycmVudCA9IHBvcE51bWJlcihhcmdzLCBJbmZpbml0eSk7XG4gICAgdmFyIHNvdXJjZXMgPSBhcmdzO1xuICAgIHJldHVybiAhc291cmNlcy5sZW5ndGhcbiAgICAgICAgP1xuICAgICAgICAgICAgRU1QVFlcbiAgICAgICAgOiBzb3VyY2VzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgIGlubmVyRnJvbShzb3VyY2VzWzBdKVxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIG1lcmdlQWxsKGNvbmN1cnJlbnQpKGZyb20oc291cmNlcywgc2NoZWR1bGVyKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXJnZS5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9uTmV4dCwgb25Db21wbGV0ZSwgb25FcnJvciwgb25GaW5hbGl6ZSkge1xuICAgIHJldHVybiBuZXcgT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUpO1xufVxudmFyIE9wZXJhdG9yU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9wZXJhdG9yU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPcGVyYXRvclN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9uTmV4dCwgb25Db21wbGV0ZSwgb25FcnJvciwgb25GaW5hbGl6ZSwgc2hvdWxkVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9uRmluYWxpemUgPSBvbkZpbmFsaXplO1xuICAgICAgICBfdGhpcy5zaG91bGRVbnN1YnNjcmliZSA9IHNob3VsZFVuc3Vic2NyaWJlO1xuICAgICAgICBfdGhpcy5fbmV4dCA9IG9uTmV4dFxuICAgICAgICAgICAgPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbk5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9uZXh0O1xuICAgICAgICBfdGhpcy5fZXJyb3IgPSBvbkVycm9yXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IF9zdXBlci5wcm90b3R5cGUuX2Vycm9yO1xuICAgICAgICBfdGhpcy5fY29tcGxldGUgPSBvbkNvbXBsZXRlXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9wZXJhdG9yU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZFVuc3Vic2NyaWJlIHx8IHRoaXMuc2hvdWxkVW5zdWJzY3JpYmUoKSkge1xuICAgICAgICAgICAgdmFyIGNsb3NlZF8xID0gdGhpcy5jbG9zZWQ7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAhY2xvc2VkXzEgJiYgKChfYSA9IHRoaXMub25GaW5hbGl6ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gT3BlcmF0b3JTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBPcGVyYXRvclN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9wZXJhdG9yU3Vic2NyaWJlci5qcy5tYXAiLCJpbXBvcnQgeyBhc3luY1NjaGVkdWxlciB9IGZyb20gJy4uL3NjaGVkdWxlci9hc3luYyc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZVRpbWUoZHVlVGltZSwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHNjaGVkdWxlciA9PT0gdm9pZCAwKSB7IHNjaGVkdWxlciA9IGFzeW5jU2NoZWR1bGVyOyB9XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgYWN0aXZlVGFzayA9IG51bGw7XG4gICAgICAgIHZhciBsYXN0VmFsdWUgPSBudWxsO1xuICAgICAgICB2YXIgbGFzdFRpbWUgPSBudWxsO1xuICAgICAgICB2YXIgZW1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVUYXNrKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFzay51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhc2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGxhc3RWYWx1ZTtcbiAgICAgICAgICAgICAgICBsYXN0VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIGVtaXRXaGVuSWRsZSgpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRUaW1lID0gbGFzdFRpbWUgKyBkdWVUaW1lO1xuICAgICAgICAgICAgdmFyIG5vdyA9IHNjaGVkdWxlci5ub3coKTtcbiAgICAgICAgICAgIGlmIChub3cgPCB0YXJnZXRUaW1lKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFzayA9IHRoaXMuc2NoZWR1bGUodW5kZWZpbmVkLCB0YXJnZXRUaW1lIC0gbm93KTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChhY3RpdmVUYXNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgc291cmNlLnN1YnNjcmliZShjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBsYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGxhc3RUaW1lID0gc2NoZWR1bGVyLm5vdygpO1xuICAgICAgICAgICAgaWYgKCFhY3RpdmVUYXNrKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFzayA9IHNjaGVkdWxlci5zY2hlZHVsZShlbWl0V2hlbklkbGUsIGR1ZVRpbWUpO1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuYWRkKGFjdGl2ZVRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbWl0KCk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGFzdFZhbHVlID0gYWN0aXZlVGFzayA9IG51bGw7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlYm91bmNlVGltZS5qcy5tYXAiLCJpbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICBzb3VyY2Uuc3Vic2NyaWJlKGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCsrKSAmJiBzdWJzY3JpYmVyLm5leHQodmFsdWUpOyB9KSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWx0ZXIuanMubWFwIiwiaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gbWFwKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gb3BlcmF0ZShmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHByb2plY3QuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgrKykpO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwIiwiaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICcuL21lcmdlTWFwJztcbmltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi4vdXRpbC9pZGVudGl0eSc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VBbGwoY29uY3VycmVudCkge1xuICAgIGlmIChjb25jdXJyZW50ID09PSB2b2lkIDApIHsgY29uY3VycmVudCA9IEluZmluaXR5OyB9XG4gICAgcmV0dXJuIG1lcmdlTWFwKGlkZW50aXR5LCBjb25jdXJyZW50KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlQWxsLmpzLm1hcCIsImltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUludGVybmFscyhzb3VyY2UsIHN1YnNjcmliZXIsIHByb2plY3QsIGNvbmN1cnJlbnQsIG9uQmVmb3JlTmV4dCwgZXhwYW5kLCBpbm5lclN1YlNjaGVkdWxlciwgYWRkaXRpb25hbEZpbmFsaXplcikge1xuICAgIHZhciBidWZmZXIgPSBbXTtcbiAgICB2YXIgYWN0aXZlID0gMDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdmFyIGNoZWNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc0NvbXBsZXRlICYmICFidWZmZXIubGVuZ3RoICYmICFhY3RpdmUpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG91dGVyTmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gKGFjdGl2ZSA8IGNvbmN1cnJlbnQgPyBkb0lubmVyU3ViKHZhbHVlKSA6IGJ1ZmZlci5wdXNoKHZhbHVlKSk7IH07XG4gICAgdmFyIGRvSW5uZXJTdWIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZXhwYW5kICYmIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgIGFjdGl2ZSsrO1xuICAgICAgICB2YXIgaW5uZXJDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBpbm5lckZyb20ocHJvamVjdCh2YWx1ZSwgaW5kZXgrKykpLnN1YnNjcmliZShjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgZnVuY3Rpb24gKGlubmVyVmFsdWUpIHtcbiAgICAgICAgICAgIG9uQmVmb3JlTmV4dCA9PT0gbnVsbCB8fCBvbkJlZm9yZU5leHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQmVmb3JlTmV4dChpbm5lclZhbHVlKTtcbiAgICAgICAgICAgIGlmIChleHBhbmQpIHtcbiAgICAgICAgICAgICAgICBvdXRlck5leHQoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlubmVyQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9LCB1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpbm5lckNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlLS07XG4gICAgICAgICAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlcmVkVmFsdWUgPSBidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbm5lclN1YlNjaGVkdWxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBpbm5lclN1YlNjaGVkdWxlciwgZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9Jbm5lclN1YihidWZmZXJlZFZhbHVlKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb0lubmVyU3ViKGJ1ZmZlcmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYnVmZmVyLmxlbmd0aCAmJiBhY3RpdmUgPCBjb25jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIG91dGVyTmV4dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgIH0pKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRpdGlvbmFsRmluYWxpemVyID09PSBudWxsIHx8IGFkZGl0aW9uYWxGaW5hbGl6ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZGl0aW9uYWxGaW5hbGl6ZXIoKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2VJbnRlcm5hbHMuanMubWFwIiwiaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9tYXAnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBtZXJnZUludGVybmFscyB9IGZyb20gJy4vbWVyZ2VJbnRlcm5hbHMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXAocHJvamVjdCwgcmVzdWx0U2VsZWN0b3IsIGNvbmN1cnJlbnQpIHtcbiAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7IGNvbmN1cnJlbnQgPSBJbmZpbml0eTsgfVxuICAgIGlmIChpc0Z1bmN0aW9uKHJlc3VsdFNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gbWVyZ2VNYXAoZnVuY3Rpb24gKGEsIGkpIHsgcmV0dXJuIG1hcChmdW5jdGlvbiAoYiwgaWkpIHsgcmV0dXJuIHJlc3VsdFNlbGVjdG9yKGEsIGIsIGksIGlpKTsgfSkoaW5uZXJGcm9tKHByb2plY3QoYSwgaSkpKTsgfSwgY29uY3VycmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiByZXN1bHRTZWxlY3RvciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uY3VycmVudCA9IHJlc3VsdFNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gb3BlcmF0ZShmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7IHJldHVybiBtZXJnZUludGVybmFscyhzb3VyY2UsIHN1YnNjcmliZXIsIHByb2plY3QsIGNvbmN1cnJlbnQpOyB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlTWFwLmpzLm1hcCIsImltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVPbihzY2hlZHVsZXIsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikge1xuICAgICAgICBzb3VyY2Uuc3Vic2NyaWJlKGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7IH0sIGRlbGF5KTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9LCBkZWxheSk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSwgZGVsYXkpOyB9KSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZlT24uanMubWFwIiwiaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gcGFpcndpc2UoKSB7XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgcHJldjtcbiAgICAgICAgdmFyIGhhc1ByZXYgPSBmYWxzZTtcbiAgICAgICAgc291cmNlLnN1YnNjcmliZShjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHByZXY7XG4gICAgICAgICAgICBwcmV2ID0gdmFsdWU7XG4gICAgICAgICAgICBoYXNQcmV2ICYmIHN1YnNjcmliZXIubmV4dChbcCwgdmFsdWVdKTtcbiAgICAgICAgICAgIGhhc1ByZXYgPSB0cnVlO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWlyd2lzZS5qcy5tYXAiLCJpbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IHNjYW5JbnRlcm5hbHMgfSBmcm9tICcuL3NjYW5JbnRlcm5hbHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHNjYW4oYWNjdW11bGF0b3IsIHNlZWQpIHtcbiAgICByZXR1cm4gb3BlcmF0ZShzY2FuSW50ZXJuYWxzKGFjY3VtdWxhdG9yLCBzZWVkLCBhcmd1bWVudHMubGVuZ3RoID49IDIsIHRydWUpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjYW4uanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHNjYW5JbnRlcm5hbHMoYWNjdW11bGF0b3IsIHNlZWQsIGhhc1NlZWQsIGVtaXRPbk5leHQsIGVtaXRCZWZvcmVDb21wbGV0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBoYXNTdGF0ZSA9IGhhc1NlZWQ7XG4gICAgICAgIHZhciBzdGF0ZSA9IHNlZWQ7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGkgPSBpbmRleCsrO1xuICAgICAgICAgICAgc3RhdGUgPSBoYXNTdGF0ZVxuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgYWNjdW11bGF0b3Ioc3RhdGUsIHZhbHVlLCBpKVxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgKChoYXNTdGF0ZSA9IHRydWUpLCB2YWx1ZSk7XG4gICAgICAgICAgICBlbWl0T25OZXh0ICYmIHN1YnNjcmliZXIubmV4dChzdGF0ZSk7XG4gICAgICAgIH0sIGVtaXRCZWZvcmVDb21wbGV0ZSAmJlxuICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBoYXNTdGF0ZSAmJiBzdWJzY3JpYmVyLm5leHQoc3RhdGUpO1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pKSk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjYW5JbnRlcm5hbHMuanMubWFwIiwiaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlT24oc2NoZWR1bGVyLCBkZWxheSkge1xuICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgIHJldHVybiBvcGVyYXRlKGZ1bmN0aW9uIChzb3VyY2UsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7IH0sIGRlbGF5KSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVPbi5qcy5tYXAiLCJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hNYXAocHJvamVjdCwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICByZXR1cm4gb3BlcmF0ZShmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpbm5lclN1YnNjcmliZXIgPSBudWxsO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB2YXIgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgY2hlY2tDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzQ29tcGxldGUgJiYgIWlubmVyU3Vic2NyaWJlciAmJiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH07XG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaW5uZXJTdWJzY3JpYmVyID09PSBudWxsIHx8IGlubmVyU3Vic2NyaWJlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5uZXJTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB2YXIgaW5uZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB2YXIgb3V0ZXJJbmRleCA9IGluZGV4Kys7XG4gICAgICAgICAgICBpbm5lckZyb20ocHJvamVjdCh2YWx1ZSwgb3V0ZXJJbmRleCkpLnN1YnNjcmliZSgoaW5uZXJTdWJzY3JpYmVyID0gY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uIChpbm5lclZhbHVlKSB7IHJldHVybiBzdWJzY3JpYmVyLm5leHQocmVzdWx0U2VsZWN0b3IgPyByZXN1bHRTZWxlY3Rvcih2YWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCsrKSA6IGlubmVyVmFsdWUpOyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5uZXJTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjaGVja0NvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoZWNrQ29tcGxldGUoKTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpdGNoTWFwLmpzLm1hcCIsImltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9lbXB0eSc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiB0YWtlKGNvdW50KSB7XG4gICAgcmV0dXJuIGNvdW50IDw9IDBcbiAgICAgICAgP1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gRU1QVFk7IH1cbiAgICAgICAgOiBvcGVyYXRlKGZ1bmN0aW9uIChzb3VyY2UsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHZhciBzZWVuID0gMDtcbiAgICAgICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICgrK3NlZW4gPD0gY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50IDw9IHNlZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YWtlLmpzLm1hcCIsImltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uL3V0aWwvbm9vcCc7XG5leHBvcnQgZnVuY3Rpb24gdGFrZVVudGlsKG5vdGlmaWVyKSB7XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikge1xuICAgICAgICBpbm5lckZyb20obm90aWZpZXIpLnN1YnNjcmliZShjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9LCBub29wKSk7XG4gICAgICAgICFzdWJzY3JpYmVyLmNsb3NlZCAmJiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFrZVVudGlsLmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpID09PSBpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5wdXRbaSsrXSk7XG4gICAgICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlQXJyYXkuanMubWFwIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlQXN5bmNJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0ZXJhYmxlIGNhbm5vdCBiZSBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpbnB1dFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgICAgICAgICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDAsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlQXN5bmNJdGVyYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpdGVyYXRvcjtcbiAgICAgICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXRlcmF0b3IgPSBpbnB1dFtTeW1ib2xfaXRlcmF0b3JdKCk7XG4gICAgICAgICAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZG9uZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSBpdGVyYXRvci5uZXh0KCksIHZhbHVlID0gX2EudmFsdWUsIGRvbmUgPSBfYS5kb25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBpc0Z1bmN0aW9uKGl0ZXJhdG9yID09PSBudWxsIHx8IGl0ZXJhdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpdGVyYXRvci5yZXR1cm4pICYmIGl0ZXJhdG9yLnJldHVybigpOyB9O1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVJdGVyYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBvYnNlcnZlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IHN1YnNjcmliZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL3N1YnNjcmliZU9uJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBpbm5lckZyb20oaW5wdXQpLnBpcGUoc3Vic2NyaWJlT24oc2NoZWR1bGVyKSwgb2JzZXJ2ZU9uKHNjaGVkdWxlcikpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVPYnNlcnZhYmxlLmpzLm1hcCIsImltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9ic2VydmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9vYnNlcnZlT24nO1xuaW1wb3J0IHsgc3Vic2NyaWJlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvc3Vic2NyaWJlT24nO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlUHJvbWlzZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIGlubmVyRnJvbShpbnB1dCkucGlwZShzdWJzY3JpYmVPbihzY2hlZHVsZXIpLCBvYnNlcnZlT24oc2NoZWR1bGVyKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZVByb21pc2UuanMubWFwIiwiaW1wb3J0IHsgc2NoZWR1bGVBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvciB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gc2NoZWR1bGVBc3luY0l0ZXJhYmxlKHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IoaW5wdXQpLCBzY2hlZHVsZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UuanMubWFwIiwiaW1wb3J0IHsgc2NoZWR1bGVPYnNlcnZhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZU9ic2VydmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVQcm9taXNlIH0gZnJvbSAnLi9zY2hlZHVsZVByb21pc2UnO1xuaW1wb3J0IHsgc2NoZWR1bGVBcnJheSB9IGZyb20gJy4vc2NoZWR1bGVBcnJheSc7XG5pbXBvcnQgeyBzY2hlZHVsZUl0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUl0ZXJhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgaXNBcnJheUxpa2UgfSBmcm9tICcuLi91dGlsL2lzQXJyYXlMaWtlJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0FzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IgfSBmcm9tICcuLi91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3InO1xuaW1wb3J0IHsgaXNSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcbmltcG9ydCB7IHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi9zY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXN5bmNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZUFzeW5jSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVkLmpzLm1hcCIsImltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbnZhciBBY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICB9XG4gICAgQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIEFjdGlvbjtcbn0oU3Vic2NyaXB0aW9uKSk7XG5leHBvcnQgeyBBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IGludGVydmFsUHJvdmlkZXIgfSBmcm9tICcuL2ludGVydmFsUHJvdmlkZXInO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi4vdXRpbC9hcnJSZW1vdmUnO1xudmFyIEFzeW5jQWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXN5bmNBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNjaGVkdWxlciwgd29yaykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy53b3JrID0gd29yaztcbiAgICAgICAgX3RoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHRoaXMuaWQgPSAoX2EgPSB0aGlzLmlkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aGlzLnJlcXVlc3RBc3luY0lkKHNjaGVkdWxlciwgdGhpcy5pZCwgZGVsYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIF9pZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIHJldHVybiBpbnRlcnZhbFByb3ZpZGVyLnNldEludGVydmFsKHNjaGVkdWxlci5mbHVzaC5iaW5kKHNjaGVkdWxlciwgdGhpcyksIGRlbGF5KTtcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZCA9IGZ1bmN0aW9uIChfc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmIChkZWxheSAhPSBudWxsICYmIHRoaXMuZGVsYXkgPT09IGRlbGF5ICYmIHRoaXMucGVuZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaW50ZXJ2YWxQcm92aWRlci5jbGVhckludGVydmFsKGlkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignZXhlY3V0aW5nIGEgY2FuY2VsbGVkIGFjdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLl9leGVjdXRlKHN0YXRlLCBkZWxheSk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZyA9PT0gZmFsc2UgJiYgdGhpcy5pZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZCh0aGlzLnNjaGVkdWxlciwgdGhpcy5pZCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5fZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgX2RlbGF5KSB7XG4gICAgICAgIHZhciBlcnJvcmVkID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvclZhbHVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy53b3JrKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICBlcnJvclZhbHVlID0gZSA/IGUgOiBuZXcgRXJyb3IoJ1NjaGVkdWxlZCBhY3Rpb24gdGhyZXcgZmFsc3kgZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JlZCkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yVmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgaWQgPSBfYS5pZCwgc2NoZWR1bGVyID0gX2Euc2NoZWR1bGVyO1xuICAgICAgICAgICAgdmFyIGFjdGlvbnMgPSBzY2hlZHVsZXIuYWN0aW9ucztcbiAgICAgICAgICAgIHRoaXMud29yayA9IHRoaXMuc3RhdGUgPSB0aGlzLnNjaGVkdWxlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGFyclJlbW92ZShhY3Rpb25zLCB0aGlzKTtcbiAgICAgICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRlbGF5ID0gbnVsbDtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFzeW5jQWN0aW9uO1xufShBY3Rpb24pKTtcbmV4cG9ydCB7IEFzeW5jQWN0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY0FjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFNjaGVkdWxlciB9IGZyb20gJy4uL1NjaGVkdWxlcic7XG52YXIgQXN5bmNTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBc3luY1NjaGVkdWxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBc3luY1NjaGVkdWxlcihTY2hlZHVsZXJBY3Rpb24sIG5vdykge1xuICAgICAgICBpZiAobm93ID09PSB2b2lkIDApIHsgbm93ID0gU2NoZWR1bGVyLm5vdzsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBTY2hlZHVsZXJBY3Rpb24sIG5vdykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aW9ucyA9IFtdO1xuICAgICAgICBfdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXN5bmNTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHdoaWxlICgoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBc3luY1NjaGVkdWxlcjtcbn0oU2NoZWR1bGVyKSk7XG5leHBvcnQgeyBBc3luY1NjaGVkdWxlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNTY2hlZHVsZXIuanMubWFwIiwiaW1wb3J0IHsgQXN5bmNBY3Rpb24gfSBmcm9tICcuL0FzeW5jQWN0aW9uJztcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG5leHBvcnQgdmFyIGFzeW5jU2NoZWR1bGVyID0gbmV3IEFzeW5jU2NoZWR1bGVyKEFzeW5jQWN0aW9uKTtcbmV4cG9ydCB2YXIgYXN5bmMgPSBhc3luY1NjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzeW5jLmpzLm1hcCIsImV4cG9ydCB2YXIgZGF0ZVRpbWVzdGFtcFByb3ZpZGVyID0ge1xuICAgIG5vdzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGRhdGVUaW1lc3RhbXBQcm92aWRlci5kZWxlZ2F0ZSB8fCBEYXRlKS5ub3coKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0ZVRpbWVzdGFtcFByb3ZpZGVyLmpzLm1hcCIsImltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWRBcnJheSB9IGZyb20gXCJ0c2xpYlwiO1xuZXhwb3J0IHZhciBpbnRlcnZhbFByb3ZpZGVyID0ge1xuICAgIHNldEludGVydmFsOiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVsZWdhdGUgPSBpbnRlcnZhbFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUgPT09IG51bGwgfHwgZGVsZWdhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlbGVnYXRlLnNldEludGVydmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuc2V0SW50ZXJ2YWwuYXBwbHkoZGVsZWdhdGUsIF9fc3ByZWFkQXJyYXkoW2hhbmRsZXIsIHRpbWVvdXRdLCBfX3JlYWQoYXJncykpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgfSxcbiAgICBjbGVhckludGVydmFsOiBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGludGVydmFsUHJvdmlkZXIuZGVsZWdhdGU7XG4gICAgICAgIHJldHVybiAoKGRlbGVnYXRlID09PSBudWxsIHx8IGRlbGVnYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWxlZ2F0ZS5jbGVhckludGVydmFsKSB8fCBjbGVhckludGVydmFsKShoYW5kbGUpO1xuICAgIH0sXG4gICAgZGVsZWdhdGU6IHVuZGVmaW5lZCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcnZhbFByb3ZpZGVyLmpzLm1hcCIsImltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWRBcnJheSB9IGZyb20gXCJ0c2xpYlwiO1xuZXhwb3J0IHZhciB0aW1lb3V0UHJvdmlkZXIgPSB7XG4gICAgc2V0VGltZW91dDogZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGltZW91dFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUgPT09IG51bGwgfHwgZGVsZWdhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlbGVnYXRlLnNldFRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5zZXRUaW1lb3V0LmFwcGx5KGRlbGVnYXRlLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgfSxcbiAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGltZW91dFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICByZXR1cm4gKChkZWxlZ2F0ZSA9PT0gbnVsbCB8fCBkZWxlZ2F0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVsZWdhdGUuY2xlYXJUaW1lb3V0KSB8fCBjbGVhclRpbWVvdXQpKGhhbmRsZSk7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbWVvdXRQcm92aWRlci5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sSXRlcmF0b3IoKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgIVN5bWJvbC5pdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gJ0BAaXRlcmF0b3InO1xuICAgIH1cbiAgICByZXR1cm4gU3ltYm9sLml0ZXJhdG9yO1xufVxuZXhwb3J0IHZhciBpdGVyYXRvciA9IGdldFN5bWJvbEl0ZXJhdG9yKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pdGVyYXRvci5qcy5tYXAiLCJleHBvcnQgdmFyIG9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLm9ic2VydmFibGUpIHx8ICdAQG9ic2VydmFibGUnOyB9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JzZXJ2YWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcbmV4cG9ydCB2YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgPSBjcmVhdGVFcnJvckNsYXNzKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsKCkge1xuICAgICAgICBfc3VwZXIodGhpcyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdPYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICB9O1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYmplY3RVbnN1YnNjcmliZWRFcnJvci5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcbmV4cG9ydCB2YXIgVW5zdWJzY3JpcHRpb25FcnJvciA9IGNyZWF0ZUVycm9yQ2xhc3MoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbChlcnJvcnMpIHtcbiAgICAgICAgX3N1cGVyKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvcnNcbiAgICAgICAgICAgID8gZXJyb3JzLmxlbmd0aCArIFwiIGVycm9ycyBvY2N1cnJlZCBkdXJpbmcgdW5zdWJzY3JpcHRpb246XFxuXCIgKyBlcnJvcnMubWFwKGZ1bmN0aW9uIChlcnIsIGkpIHsgcmV0dXJuIGkgKyAxICsgXCIpIFwiICsgZXJyLnRvU3RyaW5nKCk7IH0pLmpvaW4oJ1xcbiAgJylcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdVbnN1YnNjcmlwdGlvbkVycm9yJztcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VW5zdWJzY3JpcHRpb25FcnJvci5qcy5tYXAiLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi9pc1NjaGVkdWxlcic7XG5mdW5jdGlvbiBsYXN0KGFycikge1xuICAgIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvcFJlc3VsdFNlbGVjdG9yKGFyZ3MpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihsYXN0KGFyZ3MpKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9wU2NoZWR1bGVyKGFyZ3MpIHtcbiAgICByZXR1cm4gaXNTY2hlZHVsZXIobGFzdChhcmdzKSkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvcE51bWJlcihhcmdzLCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIGxhc3QoYXJncykgPT09ICdudW1iZXInID8gYXJncy5wb3AoKSA6IGRlZmF1bHRWYWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyZ3MuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGFyclJlbW92ZShhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAwIDw9IGluZGV4ICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyclJlbW92ZS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRXJyb3JDbGFzcyhjcmVhdGVJbXBsKSB7XG4gICAgdmFyIF9zdXBlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBFcnJvci5jYWxsKGluc3RhbmNlKTtcbiAgICAgICAgaW5zdGFuY2Uuc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICB9O1xuICAgIHZhciBjdG9yRnVuYyA9IGNyZWF0ZUltcGwoX3N1cGVyKTtcbiAgICBjdG9yRnVuYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgY3RvckZ1bmMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvckZ1bmM7XG4gICAgcmV0dXJuIGN0b3JGdW5jO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlRXJyb3JDbGFzcy5qcy5tYXAiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xudmFyIGNvbnRleHQgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yQ29udGV4dChjYikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICB2YXIgaXNSb290ID0gIWNvbnRleHQ7XG4gICAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7IGVycm9yVGhyb3duOiBmYWxzZSwgZXJyb3I6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICBjYigpO1xuICAgICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBjb250ZXh0LCBlcnJvclRocm93biA9IF9hLmVycm9yVGhyb3duLCBlcnJvciA9IF9hLmVycm9yO1xuICAgICAgICAgICAgY29udGV4dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2IoKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVycm9yKGVycikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiBjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICBjb250ZXh0LmVycm9yID0gZXJyO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yQ29udGV4dC5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVNjaGVkdWxlKHBhcmVudFN1YnNjcmlwdGlvbiwgc2NoZWR1bGVyLCB3b3JrLCBkZWxheSwgcmVwZWF0KSB7XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgaWYgKHJlcGVhdCA9PT0gdm9pZCAwKSB7IHJlcGVhdCA9IGZhbHNlOyB9XG4gICAgdmFyIHNjaGVkdWxlU3Vic2NyaXB0aW9uID0gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd29yaygpO1xuICAgICAgICBpZiAocmVwZWF0KSB7XG4gICAgICAgICAgICBwYXJlbnRTdWJzY3JpcHRpb24uYWRkKHRoaXMuc2NoZWR1bGUobnVsbCwgZGVsYXkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH0sIGRlbGF5KTtcbiAgICBwYXJlbnRTdWJzY3JpcHRpb24uYWRkKHNjaGVkdWxlU3Vic2NyaXB0aW9uKTtcbiAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVTdWJzY3JpcHRpb247XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhlY3V0ZVNjaGVkdWxlLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gICAgcmV0dXJuIHg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pZGVudGl0eS5qcy5tYXAiLCJleHBvcnQgdmFyIGlzQXJyYXlMaWtlID0gKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICYmIHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHggIT09ICdmdW5jdGlvbic7IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNBcnJheUxpa2UuanMubWFwIiwiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gaXNBc3luY0l0ZXJhYmxlKG9iaikge1xuICAgIHJldHVybiBTeW1ib2wuYXN5bmNJdGVyYXRvciAmJiBpc0Z1bmN0aW9uKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9ialtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNBc3luY0l0ZXJhYmxlLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihpbnB1dFtTeW1ib2xfb2JzZXJ2YWJsZV0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNJbnRlcm9wT2JzZXJ2YWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gaXNJdGVyYWJsZShpbnB1dCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dFtTeW1ib2xfaXRlcmF0b3JdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzSXRlcmFibGUuanMubWFwIiwiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gXCIuL2lzRnVuY3Rpb25cIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbih2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUudGhlbik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc1Byb21pc2UuanMubWFwIiwiaW1wb3J0IHsgX19hc3luY0dlbmVyYXRvciwgX19hd2FpdCwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IocmVhZGFibGVTdHJlYW0pIHtcbiAgICByZXR1cm4gX19hc3luY0dlbmVyYXRvcih0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3JfMSgpIHtcbiAgICAgICAgdmFyIHJlYWRlciwgX2EsIHZhbHVlLCBkb25lO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSByZWFkYWJsZVN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCAsIDksIDEwXSk7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJ1ZSkgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBfX2F3YWl0KHJlYWRlci5yZWFkKCkpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpLCB2YWx1ZSA9IF9hLnZhbHVlLCBkb25lID0gX2EuZG9uZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb25lKSByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIF9fYXdhaXQodm9pZCAwKV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIsIF9iLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzQsIF9fYXdhaXQodmFsdWUpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbNCwgX2Iuc2VudCgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMywgMTBdO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlbGVhc2VMb2NrKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbN107XG4gICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkYWJsZVN0cmVhbUxpa2Uob2JqKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb2JqLmdldFJlYWRlcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc1JlYWRhYmxlU3RyZWFtTGlrZS5qcy5tYXAiLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBpc1NjaGVkdWxlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnNjaGVkdWxlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzU2NoZWR1bGVyLmpzLm1hcCIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZnQoc291cmNlKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oc291cmNlID09PSBudWxsIHx8IHNvdXJjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc291cmNlLmxpZnQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdGUoaW5pdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmIChoYXNMaWZ0KHNvdXJjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UubGlmdChmdW5jdGlvbiAobGlmdGVkU291cmNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQobGlmdGVkU291cmNlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5hYmxlIHRvIGxpZnQgdW5rbm93biBPYnNlcnZhYmxlIHR5cGUnKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlmdC5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQsIF9fc3ByZWFkQXJyYXkgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCIuLi9vcGVyYXRvcnMvbWFwXCI7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBjYWxsT3JBcHBseShmbiwgYXJncykge1xuICAgIHJldHVybiBpc0FycmF5KGFyZ3MpID8gZm4uYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYXJncykpKSA6IGZuKGFyZ3MpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hcE9uZU9yTWFueUFyZ3MoZm4pIHtcbiAgICByZXR1cm4gbWFwKGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiBjYWxsT3JBcHBseShmbiwgYXJncyk7IH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwT25lT3JNYW55QXJncy5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9vcC5qcy5tYXAiLCJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgdmFyIGZucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBpcGVGcm9tQXJyYXkoZm5zKSB7XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5O1xuICAgIH1cbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGZuKSB7IHJldHVybiBmbihwcmV2KTsgfSwgaW5wdXQpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXBlLmpzLm1hcCIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnIpIHtcbiAgICB0aW1lb3V0UHJvdmlkZXIuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvblVuaGFuZGxlZEVycm9yID0gY29uZmlnLm9uVW5oYW5kbGVkRXJyb3I7XG4gICAgICAgIGlmIChvblVuaGFuZGxlZEVycm9yKSB7XG4gICAgICAgICAgICBvblVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcG9ydFVuaGFuZGxlZEVycm9yLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dCkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IHByb3ZpZGVkIFwiICsgKGlucHV0ICE9PSBudWxsICYmIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgPyAnYW4gaW52YWxpZCBvYmplY3QnIDogXCInXCIgKyBpbnB1dCArIFwiJ1wiKSArIFwiIHdoZXJlIGEgc3RyZWFtIHdhcyBleHBlY3RlZC4gWW91IGNhbiBwcm92aWRlIGFuIE9ic2VydmFibGUsIFByb21pc2UsIFJlYWRhYmxlU3RyZWFtLCBBcnJheSwgQXN5bmNJdGVyYWJsZSwgb3IgSXRlcmFibGUuXCIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3dVbm9ic2VydmFibGVFcnJvci5qcy5tYXAiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuY2hvci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5jaG9yLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nhcm91c2VsLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJvdXNlbC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYXJhbGxheC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFyYWxsYXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2Nyb2xsYWJsZS1zdGlja3kuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njcm9sbGFibGUtc3RpY2t5LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njcm9sbGFibGUtdGFicy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2Nyb2xsYWJsZS10YWJzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NwaW4taW1hZ2VzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGluLWltYWdlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGlja3ktaGVhZGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGlja3ktaGVhZGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VsZW1lbnQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VsZW1lbnQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgc2Nyb2xsIH0gZnJvbSAnLi9zY3JvbGwtb2JzZXJ2ZXInO1xuZXhwb3J0IHsgU2Nyb2xsJCB9IGZyb20gJy4vc2Nyb2xsLW9ic2VydmVyLnR5cGVzJztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBmcm9tRXZlbnQsIHBpcGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCBtYXAsIHNjYW4gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgaXNOaWwgZnJvbSAnbG9kYXNoL2lzTmlsJztcbmltcG9ydCB7IGdldFNjcm9sbGluZ0VsLCBnZXRTY3JvbGxQb3NpdGlvbiwgaXNPdXRPZkxpbWl0LCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9lbGVtZW50JztcbmltcG9ydCB7IGdldERpcmVjdGlvbiwgaXNPbkdhcCwgQVhFUywgUE9TSVRJT05TIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2F4aXMnO1xuZnVuY3Rpb24gZ2FwT3BlcmF0b3IoZ2FwKSB7XG4gICAgaWYgKGdhcCA9PT0gdm9pZCAwKSB7IGdhcCA9IEFYRVM7IH1cbiAgICByZXR1cm4gcGlwZShtYXAoZnVuY3Rpb24gKHNjcm9sbE9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiBzY3JvbGxPYnNlcnZlcixcbiAgICAgICAgICAgIGxhc3Q6IHNjcm9sbE9ic2VydmVyLFxuICAgICAgICB9O1xuICAgIH0pLCBzY2FuKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgICAgICAgdmFyIG9uR2FwID0gaXNPbkdhcCh7XG4gICAgICAgICAgICBheGVzOiBhY2MuY3VycmVudC5heGVzLFxuICAgICAgICAgICAgZ2FwOiBnYXAsXG4gICAgICAgICAgICBsYXN0QXhlczogYWNjLmxhc3QuYXhlcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiBjdXJyLmN1cnJlbnQsXG4gICAgICAgICAgICBsYXN0OiBvbkdhcCA/IGFjYy5sYXN0IDogY3Vyci5jdXJyZW50LFxuICAgICAgICB9O1xuICAgIH0pLCBmaWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gX2EuY3VycmVudCwgbGFzdCA9IF9hLmxhc3Q7XG4gICAgICAgIHJldHVybiAhaXNPbkdhcCh7XG4gICAgICAgICAgICBheGVzOiBjdXJyZW50LmF4ZXMsXG4gICAgICAgICAgICBnYXA6IGdhcCxcbiAgICAgICAgICAgIGxhc3RBeGVzOiBsYXN0LmF4ZXMsXG4gICAgICAgIH0pO1xuICAgIH0pLCBtYXAoZnVuY3Rpb24gKHNjcm9sbE9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxPYnNlcnZlci5jdXJyZW50O1xuICAgIH0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGwoX2EpIHtcbiAgICB2YXIgZXh0ZXJuYWxFbCA9IF9hLmVsLCBfYiA9IF9hLmdhcCwgZ2FwID0gX2IgPT09IHZvaWQgMCA/IEFYRVMgOiBfYiwgX2MgPSBfYS5kZWJvdW5jZSwgZGVib3VuY2UgPSBfYyA9PT0gdm9pZCAwID8gMCA6IF9jLCBfZCA9IF9hLmxpbWl0LCBsaW1pdCA9IF9kID09PSB2b2lkIDAgPyBQT1NJVElPTlMgOiBfZCwgX2UgPSBfYS5tYXhSZWxhdGl2ZSwgbWF4UmVsYXRpdmUgPSBfZSA9PT0gdm9pZCAwID8ge1xuICAgICAgICBib3R0b206IHVuZGVmaW5lZCxcbiAgICAgICAgbGVmdDogdW5kZWZpbmVkLFxuICAgICAgICByaWdodDogdW5kZWZpbmVkLFxuICAgICAgICB0b3A6IHVuZGVmaW5lZCxcbiAgICB9IDogX2U7XG4gICAgdmFyIGVsID0gZXh0ZXJuYWxFbCB8fCBkb2N1bWVudDtcbiAgICB2YXIgc2Nyb2xsaW5nRWwgPSBnZXRTY3JvbGxpbmdFbChlbCk7XG4gICAgdmFyIHNjcm9sbCQgPSBmcm9tRXZlbnQoZWwsICdzY3JvbGwnKTtcbiAgICB2YXIgc2Nyb2xsQXhlcyQgPSBzY3JvbGwkLnBpcGUobWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgYXhlcyA9IGdldFNjcm9sbFBvc2l0aW9uKHsgZWw6IHNjcm9sbGluZ0VsIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWw6IHNjcm9sbGluZ0VsLFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgYXhlczogYXhlcyxcbiAgICAgICAgICAgIHJlbGF0aXZlQXhlczogQVhFUyxcbiAgICAgICAgfTtcbiAgICB9KSk7XG4gICAgdmFyIHNjcm9sbERpcmVjdGlvbiQgPSBzY3JvbGxBeGVzJC5waXBlKG1hcChmdW5jdGlvbiAoc2Nyb2xsQXhlc09ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc2Nyb2xsQXhlc09ic2VydmVyKSwgeyBkaXJlY3Rpb246ICcnIH0pO1xuICAgIH0pLCBzY2FuKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdXJyKSwgeyBkaXJlY3Rpb246IGdldERpcmVjdGlvbih7XG4gICAgICAgICAgICAgICAgYXhlczogY3Vyci5heGVzLFxuICAgICAgICAgICAgICAgIGxhc3RBeGVzOiBhY2MuYXhlcyxcbiAgICAgICAgICAgIH0pIH0pO1xuICAgIH0pKTtcbiAgICBpZiAoZ2FwLnggfHwgZ2FwLnkpIHtcbiAgICAgICAgc2Nyb2xsRGlyZWN0aW9uJCA9IHNjcm9sbERpcmVjdGlvbiQucGlwZShnYXBPcGVyYXRvcihnYXApKTtcbiAgICB9XG4gICAgaWYgKGRlYm91bmNlKSB7XG4gICAgICAgIHNjcm9sbERpcmVjdGlvbiQgPSBzY3JvbGxEaXJlY3Rpb24kLnBpcGUoZGVib3VuY2VUaW1lKGRlYm91bmNlKSk7XG4gICAgfVxuICAgIGlmIChsaW1pdC5ib3R0b20gfHwgbGltaXQubGVmdCB8fCBsaW1pdC5yaWdodCB8fCBsaW1pdC50b3ApIHtcbiAgICAgICAgc2Nyb2xsRGlyZWN0aW9uJCA9IHNjcm9sbERpcmVjdGlvbiQucGlwZShmaWx0ZXIoZnVuY3Rpb24gKHNjcm9sbE9ic2VydmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gIWlzT3V0T2ZMaW1pdCh7XG4gICAgICAgICAgICAgICAgZWw6IHNjcm9sbE9ic2VydmVyLmVsLFxuICAgICAgICAgICAgICAgIGxpbWl0OiBsaW1pdCxcbiAgICAgICAgICAgICAgICBheGVzOiBzY3JvbGxPYnNlcnZlci5heGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgc2Nyb2xsRGlyZWN0aW9uJCA9IHNjcm9sbERpcmVjdGlvbiQucGlwZShzY2FuKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgICAgICAgdmFyIHhSZWxhdGl2ZSA9IGFjYy5yZWxhdGl2ZUF4ZXMueCArIGN1cnIuYXhlcy54IC0gYWNjLmF4ZXMueDtcbiAgICAgICAgdmFyIHlSZWxhdGl2ZSA9IGFjYy5yZWxhdGl2ZUF4ZXMueSArIGN1cnIuYXhlcy55IC0gYWNjLmF4ZXMueTtcbiAgICAgICAgdmFyIHggPSAhaXNOaWwobWF4UmVsYXRpdmUubGVmdCkgJiYgeFJlbGF0aXZlIDwgbWF4UmVsYXRpdmUubGVmdFxuICAgICAgICAgICAgPyBtYXhSZWxhdGl2ZS5sZWZ0XG4gICAgICAgICAgICA6IHhSZWxhdGl2ZTtcbiAgICAgICAgaWYgKCFpc05pbChtYXhSZWxhdGl2ZS5yaWdodCkgJiYgeFJlbGF0aXZlID4gbWF4UmVsYXRpdmUucmlnaHQpIHtcbiAgICAgICAgICAgIHggPSBtYXhSZWxhdGl2ZS5yaWdodDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeSA9ICFpc05pbChtYXhSZWxhdGl2ZS50b3ApICYmIHlSZWxhdGl2ZSA8IG1heFJlbGF0aXZlLnRvcFxuICAgICAgICAgICAgPyBtYXhSZWxhdGl2ZS50b3BcbiAgICAgICAgICAgIDogeVJlbGF0aXZlO1xuICAgICAgICBpZiAoIWlzTmlsKG1heFJlbGF0aXZlLmJvdHRvbSkgJiYgeVJlbGF0aXZlID4gbWF4UmVsYXRpdmUuYm90dG9tKSB7XG4gICAgICAgICAgICB5ID0gbWF4UmVsYXRpdmUuYm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY3VyciksIHsgcmVsYXRpdmVBeGVzOiB7XG4gICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgfSB9KTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIHNjcm9sbERpcmVjdGlvbiQ7XG59XG4iLCJleHBvcnQge307XG4iLCJleHBvcnQgKiBmcm9tICcuL3RvdWNoJztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgcGFpcndpc2UsIHN3aXRjaE1hcCwgdGFrZSwgdGFrZVVudGlsLCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGZpbHRlckJ5QXR0cmlidXRlQW5kR2FwT3BlcmF0b3IsIHB1dEF4ZXNCcmVha3BvaW50T3BlcmF0b3IsIHB1dERpcmVjdGlvbk9wZXJhdG9yLCBwdXRSZWxhdGl2ZUF4ZXNPcGVyYXRvciwgfSBmcm9tICcuLi8uLi9vcGVyYXRvcnMvYXhpcyc7XG5pbXBvcnQgeyBBWEVTIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2F4aXMnO1xuaW1wb3J0IHsgaXNPblRoZVNhbWVEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvYXhpcy9heGlzJztcbmltcG9ydCB7IGdldExlZnQsIGdldFRvcCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9lbGVtZW50JztcbmV4cG9ydCBmdW5jdGlvbiB0b3VjaChfYSkge1xuICAgIHZhciBleHRlcm5hbEVsID0gX2EuZWwsIF9iID0gX2EuZ2FwLCBnYXAgPSBfYiA9PT0gdm9pZCAwID8gQVhFUyA6IF9iLCBfYyA9IF9hLm9ubHlEaXJlY3Rpb25zLCBvbmx5RGlyZWN0aW9ucyA9IF9jID09PSB2b2lkIDAgPyBbXSA6IF9jLCB0YWtlTGltaXQgPSBfYS50YWtlTGltaXQsIF9kID0gX2Eub25seU9uQ2hhbmdlRGlyZWN0aW9uLCBvbmx5T25DaGFuZ2VEaXJlY3Rpb24gPSBfZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZCwgb25seUF4aXMgPSBfYS5vbmx5QXhpcywgc3RvcEdyb3dpbmdBdCA9IF9hLnN0b3BHcm93aW5nQXQ7XG4gICAgdmFyIGVsID0gZXh0ZXJuYWxFbCB8fCBkb2N1bWVudDtcbiAgICB2YXIgbW91c2VEb3duJCA9IGZyb21FdmVudChlbCwgJ21vdXNlZG93bicpO1xuICAgIHZhciBtb3VzZU1vdmUkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2Vtb3ZlJyk7XG4gICAgdmFyIG1vdXNlVXAkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcpO1xuICAgIHZhciB0b3VjaFN0YXJ0JCA9IGZyb21FdmVudChlbCwgJ3RvdWNoc3RhcnQnKTtcbiAgICB2YXIgdG91Y2hFbmQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAndG91Y2hlbmQnKTtcbiAgICB2YXIgdG91Y2hNb3ZlJCA9IGZyb21FdmVudChlbCwgJ3RvdWNobW92ZScpO1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ2ZhbHNlJyk7XG4gICAgZnVuY3Rpb24gdHlwZU9wZXJhdG9yKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG1hcChmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB9KTsgfSk7XG4gICAgfVxuICAgIHZhciBtb3VzZURvd25UeXBlJCA9IG1vdXNlRG93biQucGlwZSh0eXBlT3BlcmF0b3IoJ1NUQVJUJykpO1xuICAgIHZhciB0b3VjaFN0YXJ0VHlwZSQgPSB0b3VjaFN0YXJ0JC5waXBlKHR5cGVPcGVyYXRvcignU1RBUlQnKSk7XG4gICAgdmFyIG1vdXNlVXBUeXBlJCA9IG1vdXNlVXAkLnBpcGUodHlwZU9wZXJhdG9yKCdFTkQnKSk7XG4gICAgdmFyIHRvdWNoRW5kVHlwZSQgPSB0b3VjaEVuZCQucGlwZSh0eXBlT3BlcmF0b3IoJ0VORCcpKTtcbiAgICB2YXIgbW91c2VNb3ZlVHlwZSQgPSBtb3VzZU1vdmUkLnBpcGUodHlwZU9wZXJhdG9yKCdNT1ZFJykpO1xuICAgIHZhciB0b3VjaE1vdmVUeXBlJCA9IHRvdWNoTW92ZSQucGlwZSh0eXBlT3BlcmF0b3IoJ01PVkUnKSk7XG4gICAgdmFyIG1vdXNlRHJhZ1R5cGUkID0gbWVyZ2UobW91c2VEb3duVHlwZSQsIG1vdXNlRG93blR5cGUkLnBpcGUoc3dpdGNoTWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlKG1vdXNlVXBUeXBlJCwgbW91c2VNb3ZlVHlwZSQucGlwZSh0YWtlVW50aWwobW91c2VVcFR5cGUkKSkpO1xuICAgIH0pKSk7XG4gICAgdmFyIHRvdWNoRHJhZ1R5cGUkID0gbWVyZ2UodG91Y2hTdGFydFR5cGUkLCB0b3VjaFN0YXJ0VHlwZSQucGlwZShzd2l0Y2hNYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbWVyZ2UodG91Y2hNb3ZlVHlwZSQsIHRvdWNoTW92ZVR5cGUkLnBpcGUodGFrZVVudGlsKHRvdWNoRW5kVHlwZSQpKSk7XG4gICAgfSkpKTtcbiAgICBmdW5jdGlvbiBtb3VzZUF4ZXNPcGVyYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIG1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IF9hLmV2ZW50LCBhcmdzID0gX19yZXN0KF9hLCBbXCJldmVudFwiXSk7XG4gICAgICAgICAgICB2YXIgdG9wID0gZ2V0VG9wKGVsKTtcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gZ2V0TGVmdChlbCk7XG4gICAgICAgICAgICB2YXIgYXhlcyA9IHtcbiAgICAgICAgICAgICAgICB4OiBvbmx5QXhpcyA9PT0gJ3knID8gMCA6IGV2ZW50LmNsaWVudFggLSBsZWZ0LFxuICAgICAgICAgICAgICAgIHk6IG9ubHlBeGlzID09PSAneCcgPyAwIDogZXZlbnQuY2xpZW50WSAtIHRvcCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGFyZ3MpLCB7IGF4ZXM6IGF4ZXMsIGRpcmVjdGlvbjogJycsIHJlbGF0aXZlczoge1xuICAgICAgICAgICAgICAgICAgICBhbmdsZTogMCxcbiAgICAgICAgICAgICAgICAgICAgYXhlczogQVhFUyxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludEF4ZXM6IEFYRVMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QXhlczogQVhFUyxcbiAgICAgICAgICAgICAgICB9LCBzdGFydEF4ZXM6IGF4ZXMgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b3VjaEF4ZXNPcGVyYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIG1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IF9hLmV2ZW50LCBhcmdzID0gX19yZXN0KF9hLCBbXCJldmVudFwiXSk7XG4gICAgICAgICAgICB2YXIgYXhlcyA9IHtcbiAgICAgICAgICAgICAgICB4OiBvbmx5QXhpcyA9PT0gJ3knID8gMCA6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblgsXG4gICAgICAgICAgICAgICAgeTogb25seUF4aXMgPT09ICd4JyA/IDAgOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYXJncyksIHsgYXhlczogYXhlcywgcmVsYXRpdmVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICAgICAgICAgICAgICBheGVzOiBBWEVTLFxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50QXhlczogQVhFUyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBeGVzOiBBWEVTLFxuICAgICAgICAgICAgICAgIH0sIGRpcmVjdGlvbjogJycsIHN0YXJ0QXhlczogYXhlcyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBtb3VzZURvd25BeGVzJCA9IG1vdXNlRG93blR5cGUkLnBpcGUobW91c2VBeGVzT3BlcmF0b3IoKSk7XG4gICAgdmFyIHRvdWNoU3RhcnRBeGVzJCA9IHRvdWNoU3RhcnRUeXBlJC5waXBlKHRvdWNoQXhlc09wZXJhdG9yKCkpO1xuICAgIHZhciBtb3VzZVVwQXhlcyQgPSBtb3VzZVVwVHlwZSQucGlwZShtb3VzZUF4ZXNPcGVyYXRvcigpKTtcbiAgICB2YXIgdG91Y2hFbmRBeGVzJCA9IHRvdWNoRW5kVHlwZSQucGlwZSh0b3VjaEF4ZXNPcGVyYXRvcigpKTtcbiAgICB2YXIgbW91c2VEcmFnQXhlcyQgPSBtb3VzZURyYWdUeXBlJC5waXBlKG1vdXNlQXhlc09wZXJhdG9yKCkpO1xuICAgIHZhciB0b3VjaE1vdmVBeGVzJCA9IHRvdWNoRHJhZ1R5cGUkLnBpcGUodG91Y2hBeGVzT3BlcmF0b3IoKSk7XG4gICAgdmFyIGdyYWIkID0gbWVyZ2UobW91c2VEb3duQXhlcyQsIHRvdWNoU3RhcnRBeGVzJCk7XG4gICAgdmFyIGRyb3AkID0gbWVyZ2UobW91c2VVcEF4ZXMkLCB0b3VjaEVuZEF4ZXMkKTtcbiAgICB2YXIgZHJhZyQgPSBtZXJnZShtb3VzZURyYWdBeGVzJCwgdG91Y2hNb3ZlQXhlcyQpO1xuICAgIGlmIChnYXAueCB8fCBnYXAueSkge1xuICAgICAgICBkcmFnJCA9IGRyYWckLnBpcGUoZmlsdGVyQnlBdHRyaWJ1dGVBbmRHYXBPcGVyYXRvcih7XG4gICAgICAgICAgICBnYXA6IGdhcCxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBkcmFnJCA9IGRyYWckLnBpcGUocHV0UmVsYXRpdmVBeGVzT3BlcmF0b3Ioe1xuICAgICAgICBzdG9wR3Jvd2luZ0F0OiBzdG9wR3Jvd2luZ0F0LFxuICAgIH0pKTtcbiAgICBkcmFnJCA9IGRyYWckLnBpcGUocHV0QXhlc0JyZWFrcG9pbnRPcGVyYXRvcih7XG4gICAgICAgIGdhcDogZ2FwLFxuICAgIH0pKTtcbiAgICBkcmFnJCA9IGRyYWckLnBpcGUocHV0RGlyZWN0aW9uT3BlcmF0b3IoJ2F4ZXMnLCAnZGlyZWN0aW9uJywge1xuICAgICAgICBrZXk6ICd0eXBlJyxcbiAgICAgICAgdmFsdWU6ICdTVEFSVCcsXG4gICAgfSkpO1xuICAgIGlmIChvbmx5RGlyZWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgZHJhZyQgPSBkcmFnJC5waXBlKGZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIGlzVGhlU2FtZURpcmVjdGlvbiA9IG9ubHlEaXJlY3Rpb25zLnNvbWUoZnVuY3Rpb24gKGRpcmVjdGlvbikgeyByZXR1cm4gZGlyZWN0aW9uID09PSBpdGVtLmRpcmVjdGlvbjsgfSk7XG4gICAgICAgICAgICByZXR1cm4gaXNUaGVTYW1lRGlyZWN0aW9uO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGlmICh0YWtlTGltaXQpIHtcbiAgICAgICAgZHJhZyQgPSBkcmFnJC5waXBlKHRha2UodGFrZUxpbWl0KSk7XG4gICAgfVxuICAgIGlmIChvbmx5T25DaGFuZ2VEaXJlY3Rpb24pIHtcbiAgICAgICAgZHJhZyQgPSBkcmFnJC5waXBlKHBhaXJ3aXNlKCksIGZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gX2FbMF0sIGN1cnJlbnQgPSBfYVsxXTtcbiAgICAgICAgICAgIHJldHVybiBpc09uVGhlU2FtZURpcmVjdGlvbih7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBjdXJyZW50LmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBsYXN0RGlyZWN0aW9uOiBsYXN0LmRpcmVjdGlvbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSwgbWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBfYVsxXTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGdyYWIkOiBncmFiJCxcbiAgICAgICAgZHJvcCQ6IGRyb3AkLFxuICAgICAgICBkcmFnJDogZHJhZyQsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IElTX05PREVfSlMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZG9jdW1lbnQnO1xuaW1wb3J0IHsgYW5jaG9yIH0gZnJvbSAnLi9hbmNob3InO1xuZXhwb3J0IGZ1bmN0aW9uIGh0bXhBbmNob3IoKSB7XG4gICAgaWYgKElTX05PREVfSlMpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgZmxhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW92by1hbmNob3I9XCJ0by1hbmNob3JcIl1bZGF0YS1vdm8tYXV0b10nKTtcbiAgICBpZiAoIWZsYWcpXG4gICAgICAgIHJldHVybjtcbiAgICBhbmNob3Ioe30pO1xufVxuIiwiaW1wb3J0ICcuL2FuY2hvci5zY3NzJztcbmltcG9ydCB7IGlzQWJvdmVUaGVTY3JlZW4sIGlzQmVsb3dUaGVTY3JlZW4sIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2F4aXMnO1xuaW1wb3J0IHsgZ2V0TWlkZGxlUmVsYXRpdmVTY3JlZW4sIGdldFNjcm9sbFBhcmVudCwgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZWxlbWVudCc7XG5leHBvcnQgdmFyIGFuY2hvciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiA9IF9hLmVsRmxvYXRpbmcsIGVsRmxvYXRpbmcgPSBfYiA9PT0gdm9pZCAwID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtb3ZvLWFuY2hvcj1cImZsb2F0aW5nXCJdJykgOiBfYiwgX2MgPSBfYS5lbFRvQW5jaG9yLCBlbFRvQW5jaG9yID0gX2MgPT09IHZvaWQgMCA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW92by1hbmNob3I9XCJ0by1hbmNob3JcIl0nKSA6IF9jO1xuICAgIGlmICghZWxGbG9hdGluZyB8fCAhZWxUb0FuY2hvcilcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBlbFNjcm9sbGluZyA9IGdldFNjcm9sbFBhcmVudChlbFRvQW5jaG9yKTtcbiAgICB2YXIgbGFzdE9mZnNldCA9ICcnO1xuICAgIHZhciBmbG9hdGluZyA9IHRydWU7XG4gICAgdmFyIGxhc3RUb0FuY2hvclBvc2l0aW9uID0gJyc7XG4gICAgaWYgKCFlbEZsb2F0aW5nIHx8ICFlbFRvQW5jaG9yKVxuICAgICAgICByZXR1cm47XG4gICAgZnVuY3Rpb24gdG9GbG9hdChwb3NpdGlvbikge1xuICAgICAgICBpZiAoZmxvYXRpbmcgJiYgcG9zaXRpb24gPT09IGxhc3RUb0FuY2hvclBvc2l0aW9uKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsYXN0VG9BbmNob3JQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICBpZiAoIWVsRmxvYXRpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsRmxvYXRpbmcuZGF0YXNldC5hbkZpeGVkID0gJ3RydWUnO1xuICAgICAgICBmbG9hdGluZyA9IHRydWU7XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgICAgZWxGbG9hdGluZy5kYXRhc2V0LmFuUG9zaXRpb24gPSAndG9wJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbEZsb2F0aW5nLmRhdGFzZXQuYW5Qb3NpdGlvbiA9ICdib3R0b20nO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b0FuY2hvcigpIHtcbiAgICAgICAgaWYgKCFmbG9hdGluZyB8fCAhZWxGbG9hdGluZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZWxGbG9hdGluZy5kYXRhc2V0LmFuRml4ZWQgPSAnZmFsc2UnO1xuICAgICAgICBmbG9hdGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBmbG9hdGluZ01pZGRsZSA9IF9hLmZsb2F0aW5nTWlkZGxlLCB0b0FuY2hvck1pZGRsZSA9IF9hLnRvQW5jaG9yTWlkZGxlO1xuICAgICAgICBpZiAoZmxvYXRpbmdNaWRkbGUueSA8IHRvQW5jaG9yTWlkZGxlLnkpIHtcbiAgICAgICAgICAgIHJldHVybiAndXAnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnZG93bic7XG4gICAgfTtcbiAgICB2YXIgdmVyaWZ5QW5kVG9BbmNob3IgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgIGlmIChsYXN0T2Zmc2V0ICE9PSBvZmZzZXQpIHtcbiAgICAgICAgICAgIGxhc3RPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICB0b0FuY2hvcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiB2ZXJpZnlBYm92ZUFuZFRvRmxvYXQodG9BbmNob3JNaWRkbGUpIHtcbiAgICAgICAgdmFyIGFib3ZlVGhlU2NyZWVuID0gaXNBYm92ZVRoZVNjcmVlbih0b0FuY2hvck1pZGRsZS55KTtcbiAgICAgICAgaWYgKGFib3ZlVGhlU2NyZWVuKSB7XG4gICAgICAgICAgICB0b0Zsb2F0KCd1cCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiB2ZXJpZnlCZWxvd0FuZFRvRmxvYXQodG9BbmNob3JNaWRkbGUpIHtcbiAgICAgICAgdmFyIGJlbG93VGhlU2NyZWVuID0gaXNCZWxvd1RoZVNjcmVlbih0b0FuY2hvck1pZGRsZS55KTtcbiAgICAgICAgaWYgKGJlbG93VGhlU2NyZWVuKSB7XG4gICAgICAgICAgICB0b0Zsb2F0KCdkb3duJyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcbiAgICAgICAgaWYgKCFlbEZsb2F0aW5nIHx8ICFlbFRvQW5jaG9yKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZmxvYXRpbmdNaWRkbGUgPSBnZXRNaWRkbGVSZWxhdGl2ZVNjcmVlbihlbEZsb2F0aW5nKTtcbiAgICAgICAgdmFyIHRvQW5jaG9yTWlkZGxlID0gZ2V0TWlkZGxlUmVsYXRpdmVTY3JlZW4oZWxUb0FuY2hvcik7XG4gICAgICAgIHZhciBvZmZzZXQgPSBnZXRPZmZzZXQoeyBmbG9hdGluZ01pZGRsZTogZmxvYXRpbmdNaWRkbGUsIHRvQW5jaG9yTWlkZGxlOiB0b0FuY2hvck1pZGRsZSB9KTtcbiAgICAgICAgaWYgKHZlcmlmeUFib3ZlQW5kVG9GbG9hdCh0b0FuY2hvck1pZGRsZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh2ZXJpZnlCZWxvd0FuZFRvRmxvYXQodG9BbmNob3JNaWRkbGUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2ZXJpZnlBbmRUb0FuY2hvcihvZmZzZXQpO1xuICAgIH1cbiAgICBoYW5kbGVTY3JvbGwoKTtcbiAgICBlbFNjcm9sbGluZy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xufTtcbiIsImV4cG9ydCB7fTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYW5jaG9yLnR5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vYW5jaG9yJztcbmV4cG9ydCAqIGZyb20gJy4vYW5jaG9yLmh0bXgnO1xuIiwiaW1wb3J0IHsgSVNfTk9ERV9KUyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9kb2N1bWVudCc7XG5pbXBvcnQgeyBjYXJvdXNlbCB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuZXhwb3J0IGZ1bmN0aW9uIGh0bXhDYXJvdXNlbCgpIHtcbiAgICBpZiAoSVNfTk9ERV9KUylcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBmbGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2Fyb3VzZWw9XCJjYXJvdXNlbFwiXVtkYXRhLW92by1hdXRvXScpO1xuICAgIGlmICghZmxhZylcbiAgICAgICAgcmV0dXJuO1xuICAgIGNhcm91c2VsKHt9KTtcbn1cbiIsInZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCAnLi9jYXJvdXNlbC5zY3NzJztcbmltcG9ydCB7IGNyZWF0ZVNjcm9sbHNweUl0ZW0sIHNjcm9sbHNweSB9IGZyb20gJy4uL3Njcm9sbHNweS9zY3JvbGxzcHknO1xudmFyIGNyZWF0ZVNsaWRlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGVsU2xpZGUgPSBfYS5lbFNsaWRlLCBlbERvdCA9IF9hLmVsRG90LCBvbkFjdGl2YXRlID0gX2Eub25BY3RpdmF0ZTtcbiAgICB2YXIgc2Nyb2xsU3B5SXRlbSA9IGNyZWF0ZVNjcm9sbHNweUl0ZW0oe1xuICAgICAgICBlbE1lbnU6IGVsRG90LFxuICAgICAgICBlbENvbnRlbnQ6IGVsU2xpZGUsXG4gICAgfSk7XG4gICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgICAgIHNjcm9sbFNweUl0ZW0uYWN0aXZhdGUoKTtcbiAgICAgICAgaWYgKCFvbkFjdGl2YXRlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBvbkFjdGl2YXRlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlQWN0aXZhdGUoKSB7XG4gICAgICAgIHNjcm9sbFNweUl0ZW0uZGVBY3RpdmF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmF0ZTogYWN0aXZhdGUsXG4gICAgICAgIGRlQWN0aXZhdGU6IGRlQWN0aXZhdGUsXG4gICAgICAgIGNvbnRlbnQ6IGVsU2xpZGUsXG4gICAgfTtcbn07XG5leHBvcnQgdmFyIGNhcm91c2VsID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIF9iID0gX2EuZWwsIGVsID0gX2IgPT09IHZvaWQgMCA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNhcm91c2VsPVwiY2Fyb3VzZWxcIl0nKSA6IF9iLCBfYyA9IF9hLmF1dG9wbGF5VGltZSwgZXh0QXV0b3BsYXlUaW1lID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYywgX2QgPSBfYS5jdXJyZW50U2xpZGUsIGV4dEN1cnJlbnRTbGlkZSA9IF9kID09PSB2b2lkIDAgPyAwIDogX2Q7XG4gICAgaWYgKCFlbClcbiAgICAgICAgcmV0dXJuO1xuICAgIGZ1bmN0aW9uIGdldEF1dG9QbGF5VGltZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIWVsKVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIHJldHVybiAoX2EgPSBOdW1iZXIoZWwuZGF0YXNldC5jYXJvdXNlbEF1dG9wbGF5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZXh0QXV0b3BsYXlUaW1lO1xuICAgIH1cbiAgICB2YXIgY3VycmVudFNsaWRlID0gZXh0Q3VycmVudFNsaWRlO1xuICAgIHZhciBhdXRvcGxheVRpbWUgPSBnZXRBdXRvUGxheVRpbWUoKTtcbiAgICB2YXIgZWxTbGlkZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jYXJvdXNlbD1cInNsaWRlclwiXScpO1xuICAgIHZhciBlbFNsaWRlcyA9IEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2Fyb3VzZWw9XCJzbGlkZVwiXScpKTtcbiAgICB2YXIgZWxEb3RzID0gQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jYXJvdXNlbD1cImRvdFwiXScpKTtcbiAgICB2YXIgZWxBcnJvd3MgPSBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNhcm91c2VsPVwiYXJyb3dcIl0nKSk7XG4gICAgZnVuY3Rpb24gZGV0ZWN0VHlwZSgpIHtcbiAgICAgICAgdmFyIGZpcnN0U2xpZGVXaWR0aCA9IGVsU2xpZGVzWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgaGFsZlNsaWRlcldpZHRoID0gZWxTbGlkZXIub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICB2YXIgZmlyc3RTbGlkZVNtYWxsZXJUaGFuSGFsZlNsaWRlciA9IGZpcnN0U2xpZGVXaWR0aCA8PSBoYWxmU2xpZGVyV2lkdGggKyAxO1xuICAgICAgICBpZiAoZmlyc3RTbGlkZVNtYWxsZXJUaGFuSGFsZlNsaWRlcikge1xuICAgICAgICAgICAgcmV0dXJuICdCT1gnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnQ0VOVEVSJztcbiAgICB9XG4gICAgdmFyIHR5cGUgPSBkZXRlY3RUeXBlKCk7XG4gICAgdmFyIGVsQXJyb3dMZWZ0ID0gZWxBcnJvd3NbMF0sIGVsQXJyb3dSaWdodCA9IGVsQXJyb3dzWzFdO1xuICAgIHZhciBtb3VzZU92ZXIgPSBmYWxzZTtcbiAgICB2YXIgaW50ZXJ2YWxBdXRvcGxheSA9IG51bGw7XG4gICAgZnVuY3Rpb24gcmVtb3ZlTm90VXNlZERvdHNGcm9tSFRNTCh0b1JlbW92ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0b1JlbW92ZSA9PT0gdm9pZCAwKSB7IHRvUmVtb3ZlID0gMDsgfVxuICAgICAgICB2YXIgbGFzdFBvc2l0aW9uID0gZWxEb3RzLmxlbmd0aCAtIDE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9SZW1vdmU7IGkgKz0gMSkge1xuICAgICAgICAgICAgKF9hID0gZWxEb3RzW2xhc3RQb3NpdGlvbiAtIGldKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTm90VXNlZFNsaWRlcygpIHtcbiAgICAgICAgaWYgKHR5cGUgIT09ICdCT1gnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZmlyc3RTbGlkZVdpZHRoID0gZWxTbGlkZXNbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IGVsU2xpZGVyLm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgdmlzaWJsZVNsaWRlcyA9IHNsaWRlcldpZHRoIC8gKGZpcnN0U2xpZGVXaWR0aCAtIDEpO1xuICAgICAgICB2YXIgdG9SZW1vdmUgPSBNYXRoLnJvdW5kKHZpc2libGVTbGlkZXMgLSAxKTtcbiAgICAgICAgdmFyIHRvdGFsU2xpZGVzID0gZWxTbGlkZXMubGVuZ3RoO1xuICAgICAgICByZW1vdmVOb3RVc2VkRG90c0Zyb21IVE1MKHRvUmVtb3ZlKTtcbiAgICAgICAgZWxTbGlkZXMuc3BsaWNlKHRvdGFsU2xpZGVzIC0gdG9SZW1vdmUsIHRvUmVtb3ZlKTtcbiAgICAgICAgZWxEb3RzLnNwbGljZSh0b3RhbFNsaWRlcyAtIHRvUmVtb3ZlLCB0b1JlbW92ZSk7XG4gICAgfVxuICAgIHZhciBxdWFudGl0eSA9IGVsU2xpZGVzLmxlbmd0aDtcbiAgICBmdW5jdGlvbiBnZXRJbmRleFNsaWRlQXRSaWdodChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkgeyBpbmRleCA9IDA7IH1cbiAgICAgICAgcmV0dXJuICgoKGluZGV4ICsgMSkgJSBxdWFudGl0eSkgKyBxdWFudGl0eSkgJSBxdWFudGl0eTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hhbmdlQXJyb3dzTGluayhpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkgeyBpbmRleCA9IDA7IH1cbiAgICAgICAgaWYgKCFlbEFycm93TGVmdCB8fCAhZWxBcnJvd1JpZ2h0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgc2xpZGVBdExlZnQgPSBlbFNsaWRlc1soKChpbmRleCAtIDEpICUgcXVhbnRpdHkpICsgcXVhbnRpdHkpICUgcXVhbnRpdHldO1xuICAgICAgICB2YXIgc2xpZGVBdFJpZ2h0ID0gZWxTbGlkZXNbZ2V0SW5kZXhTbGlkZUF0UmlnaHQoaW5kZXgpXTtcbiAgICAgICAgaWYgKHNsaWRlQXRMZWZ0KSB7XG4gICAgICAgICAgICBlbEFycm93TGVmdC5ocmVmID0gXCIjXCIuY29uY2F0KHNsaWRlQXRMZWZ0LmlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsQXJyb3dMZWZ0LmhyZWYgPSAnIyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNsaWRlQXRSaWdodCkge1xuICAgICAgICAgICAgZWxBcnJvd1JpZ2h0LmhyZWYgPSBcIiNcIi5jb25jYXQoc2xpZGVBdFJpZ2h0LmlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsQXJyb3dSaWdodC5ocmVmID0gJyMnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUFjdGl2YXRlU2xpZGUoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHsgaW5kZXggPSAwOyB9XG4gICAgICAgIGNoYW5nZUFycm93c0xpbmsoaW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVTbGlkZXMoKSB7XG4gICAgICAgIHJldHVybiBlbFNsaWRlcy5tYXAoZnVuY3Rpb24gKGVsU2xpZGUsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGVsRG90OiBlbERvdHNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIGVsU2xpZGU6IGVsU2xpZGUsXG4gICAgICAgICAgICAgICAgb25BY3RpdmF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gaGFuZGxlQWN0aXZhdGVTbGlkZShpbmRleCk7IH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7IGluZGV4ID0gMDsgfVxuICAgICAgICB2YXIgZWxUYXJnZXQgPSBlbFNsaWRlc1tpbmRleF07XG4gICAgICAgIGlmICghZWxUYXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IGVsVGFyZ2V0Lm9mZnNldExlZnQ7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gcG9zaXRpb247XG4gICAgICAgIGlmICh0eXBlID09PSAnQ0VOVEVSJykge1xuICAgICAgICAgICAgdmFyIHNsaWRlV2lkdGggPSBlbFRhcmdldC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IGVsU2xpZGVyLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHBvc2l0aW9uIC0gKHNsaWRlcldpZHRoIC8gMiAtIHNsaWRlV2lkdGggLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBlbFNsaWRlci5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbiAgICAgICAgY3VycmVudFNsaWRlID0gaW5kZXg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF1dG9wbGF5KCkge1xuICAgICAgICBpZiAoIWF1dG9wbGF5VGltZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGludGVydmFsQXV0b3BsYXkpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxBdXRvcGxheSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vdXNlT3ZlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW50ZXJ2YWxBdXRvcGxheSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuZXh0U2xpZGUgPSBnZXRJbmRleFNsaWRlQXRSaWdodChjdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgc2Nyb2xsVG8obmV4dFNsaWRlKTtcbiAgICAgICAgfSwgYXV0b3BsYXlUaW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9BbmRBdXRvcGxheShpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkgeyBpbmRleCA9IDA7IH1cbiAgICAgICAgc2Nyb2xsVG8oaW5kZXgpO1xuICAgICAgICBhdXRvcGxheSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja0FuY2hvcihlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgYW5jaG9yVGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICghYW5jaG9yVGFyZ2V0IHx8XG4gICAgICAgICAgICAhYW5jaG9yVGFyZ2V0LmF0dHJpYnV0ZXMgfHxcbiAgICAgICAgICAgICFhbmNob3JUYXJnZXQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciB0YXJnZXQgPSAoX2EgPSBhbmNob3JUYXJnZXQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2hyZWYnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlO1xuICAgICAgICBpZiAoIXRhcmdldCB8fCB0YXJnZXQgPT09ICcjJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gZWxTbGlkZXMuZmluZEluZGV4KGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGlkID0gX2EuaWQ7XG4gICAgICAgICAgICByZXR1cm4gXCIjXCIuY29uY2F0KGlkKSA9PT0gdGFyZ2V0O1xuICAgICAgICB9KTtcbiAgICAgICAgc2Nyb2xsVG9BbmRBdXRvcGxheShpbmRleCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dBcnJvd3MoKSB7XG4gICAgICAgIGVsQXJyb3dzLmZvckVhY2goZnVuY3Rpb24gKGVsQXJyb3cpIHsgcmV0dXJuIGVsQXJyb3cuY2xhc3NMaXN0LmFkZCgnaXMtYXJyb3ctLWxvYWRlZCcpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlU2xpZGUoKSB7XG4gICAgICAgIHZhciBzbGlkZXMgPSBjcmVhdGVTbGlkZXMoKTtcbiAgICAgICAgc2hvd0Fycm93cygpO1xuICAgICAgICBzY3JvbGxzcHkoe1xuICAgICAgICAgICAgbGlzdDogc2xpZGVzLFxuICAgICAgICAgICAgZWxSZWxhdGl2ZTogZWxTbGlkZXIsXG4gICAgICAgICAgICBheGlzOiAneCcsXG4gICAgICAgICAgICBtZXRob2Q6IHR5cGUgPT09ICdCT1gnID8gJ0NVUlJFTlQnIDogJ0NMT1NFU1QnLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VPdmVyKCkge1xuICAgICAgICBtb3VzZU92ZXIgPSB0cnVlO1xuICAgICAgICBhdXRvcGxheSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZU91dCgpIHtcbiAgICAgICAgbW91c2VPdmVyID0gZmFsc2U7XG4gICAgICAgIGF1dG9wbGF5KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHZhciBlbEFuY2hvcnMgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIEFycmF5LmZyb20oZWxEb3RzKSwgdHJ1ZSksIEFycmF5LmZyb20oZWxBcnJvd3MpLCB0cnVlKTtcbiAgICAgICAgZWxBbmNob3JzLmZvckVhY2goZnVuY3Rpb24gKGVsQWNob3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlbEFjaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tBbmNob3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlTW91c2VPdmVyKTtcbiAgICAgICAgZWxTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVNb3VzZU91dCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0YXJ0T25DdXJyZW50U2xpZGUoKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnQk9YJykge1xuICAgICAgICAgICAgZWxTbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxTbGlkZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGVsU2xpZGUuc3R5bGU7XG4gICAgICAgICAgICAgICAgc3R5bGUuc2Nyb2xsU25hcEFsaWduID0gJ3N0YXJ0JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxTbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxTbGlkZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGVsU2xpZGUuc3R5bGU7XG4gICAgICAgICAgICAgICAgc3R5bGUuc2Nyb2xsU25hcEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzY3JvbGxUb0FuZEF1dG9wbGF5KGN1cnJlbnRTbGlkZSk7XG4gICAgfVxuICAgIHJlbW92ZU5vdFVzZWRTbGlkZXMoKTtcbiAgICBiaW5kRXZlbnRzKCk7XG4gICAgaGFuZGxlQ2hhbmdlU2xpZGUoKTtcbiAgICBzdGFydE9uQ3VycmVudFNsaWRlKCk7XG4gICAgZWxTbGlkZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Njcm9sbCcpKTtcbn07XG4iLCJleHBvcnQge307XG4iLCJleHBvcnQgKiBmcm9tICcuL2Nhcm91c2VsLnR5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vY2Fyb3VzZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9jYXJvdXNlbC5odG14JztcbiIsImltcG9ydCB7IElTX05PREVfSlMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZG9jdW1lbnQnO1xuaW1wb3J0IHsgZml0T25TY3JlZW4gfSBmcm9tICcuL2ZpdC1vbi1zY3JlZW4nO1xuZXhwb3J0IGZ1bmN0aW9uIGh0bXhGaXRPblNjcmVlbigpIHtcbiAgICBpZiAoSVNfTk9ERV9KUylcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBmbGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtb3ZvLWZzXVtkYXRhLW92by1hdXRvXScpO1xuICAgIGlmICghZmxhZylcbiAgICAgICAgcmV0dXJuO1xuICAgIGZpdE9uU2NyZWVuKHt9KTtcbn1cbiIsImltcG9ydCB7IGdldExlZnQsIGdldFRvcCwgaXNUb3BPZkVsZW1lbnRBYm92ZU9mVmlld3BvcnQsIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnQnO1xuaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSAnLi4vLi4vYXBpL3Njcm9sbCc7XG5pbXBvcnQgeyBzY3JvbGxUbyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9zY3JvbGwnO1xuaW1wb3J0IHsgSVNfTk9ERV9KUyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9kb2N1bWVudCc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcbmZ1bmN0aW9uIGdldE9mZnNldEJ5QXhpcyhfYSkge1xuICAgIHZhciBlbCA9IF9hLmVsLCBheGlzID0gX2EuYXhpcztcbiAgICBpZiAoYXhpcyA9PT0gJ3knKVxuICAgICAgICByZXR1cm4gZ2V0VG9wKGVsKTtcbiAgICByZXR1cm4gZ2V0TGVmdChlbCk7XG59XG5mdW5jdGlvbiBnZXRTY3JvbGxlZEJ5QXhpcyhfYSkge1xuICAgIHZhciBlbCA9IF9hLmVsLCBheGlzID0gX2EuYXhpcztcbiAgICBpZiAoYXhpcyA9PT0gJ3knKVxuICAgICAgICByZXR1cm4gZWwuc2Nyb2xsVG9wO1xuICAgIHJldHVybiBlbC5zY3JvbGxMZWZ0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpdE9uU2NyZWVuKF9hKSB7XG4gICAgdmFyIF9iID0gX2EuZWxSZWxhdGl2ZSwgZWxSZWxhdGl2ZSA9IF9iID09PSB2b2lkIDAgPyAhSVNfTk9ERV9KU1xuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW92by1mcz1cImVsXCJdJykgfHwgZG9jdW1lbnRcbiAgICAgICAgOiB1bmRlZmluZWQgOiBfYiwgZXh0ZXJuYWxFbHNUb0ZpdCA9IF9hLmVsc1RvRml0LCBfYyA9IF9hLnByb3hpbWl0eVRvRml0LCBwcm94aW1pdHlUb0ZpdCA9IF9jID09PSB2b2lkIDAgPyAyNDAgOiBfYywgX2QgPSBfYS5heGlzLCBheGlzID0gX2QgPT09IHZvaWQgMCA/ICd5JyA6IF9kLCBfZSA9IF9hLmRlYm91bmNlLCBkZWJvdW5jZSA9IF9lID09PSB2b2lkIDAgPyAxMDAwIDogX2UsIGxpbWl0ID0gX2EubGltaXQsIF9mID0gX2EuZG9Ob3RGaXRJZkFib3ZlLCBkb05vdEZpdElmQWJvdmUgPSBfZiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9mLCBfZyA9IF9hLmRvTm90Rml0SWZCZWxsb3csIGRvTm90Rml0SWZCZWxsb3cgPSBfZyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9nO1xuICAgIHZhciBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG4gICAgaWYgKCFlbFJlbGF0aXZlKSB7XG4gICAgICAgIGRlc3Ryb3k7XG4gICAgfVxuICAgIHZhciBlbHNUb0ZpdCA9IGV4dGVybmFsRWxzVG9GaXQgfHxcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vdm8tZnM9XCJjb250ZW50XCJdJykpO1xuICAgIHZhciBpc05lYXJPZkVsZW1lbnQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGVsVG9GaXQgPSBfYS5lbFRvRml0LCBzY3JvbGxlZFBvc2l0aW9uID0gX2Euc2Nyb2xsZWRQb3NpdGlvbjtcbiAgICAgICAgdmFyIG9mZnNldEVsVG9GaXQgPSBnZXRPZmZzZXRCeUF4aXMoeyBheGlzOiBheGlzLCBlbDogZWxUb0ZpdCB9KTtcbiAgICAgICAgdmFyIGhpZ2hPZmZzZXRFbFRvRml0ID0gb2Zmc2V0RWxUb0ZpdCAtIHByb3hpbWl0eVRvRml0O1xuICAgICAgICB2YXIgbG93T2Zmc2V0RWxUb0ZpdCA9IG9mZnNldEVsVG9GaXQgKyBwcm94aW1pdHlUb0ZpdDtcbiAgICAgICAgdmFyIGJldHdlZW5Mb3dIaWdoID0gc2Nyb2xsZWRQb3NpdGlvbiA+IGhpZ2hPZmZzZXRFbFRvRml0ICYmXG4gICAgICAgICAgICBzY3JvbGxlZFBvc2l0aW9uIDwgbG93T2Zmc2V0RWxUb0ZpdDtcbiAgICAgICAgcmV0dXJuIGJldHdlZW5Mb3dIaWdoO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0TmVhckVsZW1lbnQoX2EpIHtcbiAgICAgICAgdmFyIF9iID0gX2Euc2Nyb2xsZWRQb3NpdGlvbiwgc2Nyb2xsZWRQb3NpdGlvbiA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gICAgICAgIHJldHVybiBlbHNUb0ZpdC5maW5kKGZ1bmN0aW9uIChlbFRvRml0KSB7XG4gICAgICAgICAgICByZXR1cm4gaXNOZWFyT2ZFbGVtZW50KHsgZWxUb0ZpdDogZWxUb0ZpdCwgc2Nyb2xsZWRQb3NpdGlvbjogc2Nyb2xsZWRQb3NpdGlvbiB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbChfYSkge1xuICAgICAgICB2YXIgZWwgPSBfYS5lbDtcbiAgICAgICAgaWYgKGRvTm90Rml0SWZBYm92ZSAmJiAhaXNUb3BPZkVsZW1lbnRBYm92ZU9mVmlld3BvcnQoZWxzVG9GaXRbMF0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvTm90Rml0SWZCZWxsb3cgJiZcbiAgICAgICAgICAgIGlzVG9wT2ZFbGVtZW50QWJvdmVPZlZpZXdwb3J0KGVsc1RvRml0W2Vsc1RvRml0Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZWFyRWxlbWVudCA9IGdldE5lYXJFbGVtZW50KHtcbiAgICAgICAgICAgIHNjcm9sbGVkUG9zaXRpb246IGdldFNjcm9sbGVkQnlBeGlzKHsgZWw6IGVsLCBheGlzOiBheGlzIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFuZWFyRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiBnZXRPZmZzZXRCeUF4aXMoeyBheGlzOiBheGlzLCBlbDogbmVhckVsZW1lbnQgfSksXG4gICAgICAgICAgICBsZWZ0OiBnZXRPZmZzZXRCeUF4aXMoeyBheGlzOiBheGlzLCBlbDogbmVhckVsZW1lbnQgfSksXG4gICAgICAgICAgICBzY3JvbGxpbmdFbGVtZW50OiBlbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gc2Nyb2xsKHtcbiAgICAgICAgICAgIGVsOiBlbFJlbGF0aXZlLFxuICAgICAgICAgICAgZGVib3VuY2U6IGRlYm91bmNlLFxuICAgICAgICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgICB9KS5waXBlKHRha2VVbnRpbChkZXN0cm95JCkpO1xuICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZShoYW5kbGVTY3JvbGwpO1xuICAgIH1cbiAgICBiaW5kRXZlbnRzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICB9O1xufVxuIiwiZXhwb3J0IHt9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9maXQtb24tc2NyZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZml0LW9uLXNjcmVlbi50eXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZpdC1vbi1zY3JlZW4uaHRteCc7XG4iLCJleHBvcnQgKiBmcm9tICcuL2FuY2hvcic7XG5leHBvcnQgKiBmcm9tICcuL2Nhcm91c2VsJztcbmV4cG9ydCAqIGZyb20gJy4vZml0LW9uLXNjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2pveXBhZCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2UtcHJvZ3Jlc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJhbGxheCc7XG5leHBvcnQgKiBmcm9tICcuL3Njcm9sbHNweSc7XG5leHBvcnQgKiBmcm9tICcuL3Njcm9sbGFibGUtc3RpY2t5JztcbmV4cG9ydCAqIGZyb20gJy4vc3Bpbi1pbWFnZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9zdGlja3ktaGVhZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2Nyb2xsYWJsZS10YWJzJztcbiIsImV4cG9ydCAqIGZyb20gJy4vam95cGFkJztcbiIsImV4cG9ydCB2YXIgam95UGFkID0gZnVuY3Rpb24gKCkgeyB9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlLXByb2dyZXNzJztcbmV4cG9ydCAqIGZyb20gJy4vcGFnZS1wcm9ncmVzcy5odG14JztcbiIsImltcG9ydCB7IElTX05PREVfSlMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZG9jdW1lbnQnO1xuaW1wb3J0IHsgcGFnZVByb2dyZXNzIH0gZnJvbSAnLi9wYWdlLXByb2dyZXNzJztcbmV4cG9ydCBmdW5jdGlvbiBodG14UGFnZVByb2dyZXNzKCkge1xuICAgIGlmIChJU19OT0RFX0pTKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGZsYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1vdm8tcHA9XCJiYXJcIl1bZGF0YS1vdm8tYXV0b10nKTtcbiAgICBpZiAoIWZsYWcpXG4gICAgICAgIHJldHVybjtcbiAgICBwYWdlUHJvZ3Jlc3Moe30pO1xufVxuIiwiaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSAnLi4vLi4vYXBpL3Njcm9sbCc7XG5pbXBvcnQgeyBnZXRNYXhWZXJ0aWNhbFNjcm9sbCwgZ2V0U2Nyb2xsaW5nRWwgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZWxlbWVudCc7XG5pbXBvcnQgeyBJU19OT0RFX0pTIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2RvY3VtZW50JztcbmV4cG9ydCB2YXIgcGFnZVByb2dyZXNzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIF9iID0gX2EuZWwsIGVsID0gX2IgPT09IHZvaWQgMCA/ICFJU19OT0RFX0pTXG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtb3ZvLXBwPVwiYmFyXCJdJylcbiAgICAgICAgOiB1bmRlZmluZWQgOiBfYjtcbiAgICB2YXIgZWxSZWxhdGl2ZSA9IGdldFNjcm9sbGluZ0VsKGRvY3VtZW50KTtcbiAgICBpZiAoIWVsKVxuICAgICAgICByZXR1cm47XG4gICAgZWwuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ2xlZnQnO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbChfYSkge1xuICAgICAgICB2YXIgeSA9IF9hLmF4ZXMueTtcbiAgICAgICAgdmFyIHBlcmNlbnQgPSB5IC8gZ2V0TWF4VmVydGljYWxTY3JvbGwoZWxSZWxhdGl2ZSk7XG4gICAgICAgIGlmICghZWwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGVYKFwiLmNvbmNhdChwZXJjZW50LCBcIilcIik7XG4gICAgfVxuICAgIGhhbmRsZVNjcm9sbCh7XG4gICAgICAgIGF4ZXM6IHtcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHNjcm9sbCh7fSkuc3Vic2NyaWJlKGhhbmRsZVNjcm9sbCk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXJhbGxheCc7XG5leHBvcnQgKiBmcm9tICcuL3BhcmFsbGF4LnR5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vcGFyYWxsYXguaHRteCc7XG4iLCJpbXBvcnQgeyBJU19OT0RFX0pTIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2RvY3VtZW50JztcbmltcG9ydCB7IHBhcmFsbGF4IH0gZnJvbSAnLi9wYXJhbGxheCc7XG5leHBvcnQgZnVuY3Rpb24gaHRteFBhcmFsbGF4KCkge1xuICAgIGlmIChJU19OT0RFX0pTKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGZsYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1vdm8tcGFyYWxsYXhdW2RhdGEtb3ZvLWF1dG9dJyk7XG4gICAgaWYgKCFmbGFnKVxuICAgICAgICByZXR1cm47XG4gICAgcGFyYWxsYXgoe30pO1xufVxuIiwiaW1wb3J0ICcuL3BhcmFsbGF4LnNjc3MnO1xuaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSAnLi4vLi4vYXBpL3Njcm9sbCc7XG5leHBvcnQgZnVuY3Rpb24gcGFyYWxsYXgoX2EpIHtcbiAgICB2YXIgX2IsIF9jLCBfZDtcbiAgICB2YXIgX2UgPSBfYS5lbCwgZWwgPSBfZSA9PT0gdm9pZCAwID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtb3ZvLXBhcmFsbGF4XScpIDogX2UsIGV4dGVybmFsRWxDb250ZW50ID0gX2EuZWxDb250ZW50LCBjYWxsYmFjayA9IF9hLmNhbGxiYWNrLCBfZiA9IF9hLmRpc3RhbmNlLCBleHRlcm5hbERpc3RhbmNlID0gX2YgPT09IHZvaWQgMCA/IDAgOiBfZiwgZXh0ZXJuYWxFbFJlbGF0aXZlID0gX2EuZWxSZWxhdGl2ZSwgX2cgPSBfYS5nYXAsIGV4dGVybmFsR2FwID0gX2cgPT09IHZvaWQgMCA/IDAgOiBfZywgZXh0ZXJuYWxBeGlzID0gX2EuYXhpcztcbiAgICB2YXIgYXhpcyA9IGVsLmRhdGFzZXQub3ZvUGFyYWxsYXhBeGlzIHx8IGV4dGVybmFsQXhpcyB8fCAneSc7XG4gICAgdmFyIGRpc3RhbmNlID0gZXh0ZXJuYWxEaXN0YW5jZSB8fCBOdW1iZXIoZWwuZGF0YXNldC5vdm9QYXJhbGxheERpc3RhbmNlKSB8fCAxMDAwO1xuICAgIHZhciBnYXAgPSBleHRlcm5hbEdhcCB8fCBOdW1iZXIoZWwuZGF0YXNldC5vdm9QYXJhbGxheEdhcCkgfHwgMDtcbiAgICB2YXIgZWxSZWxhdGl2ZSA9IChfYyA9IGV4dGVybmFsRWxSZWxhdGl2ZSAhPT0gbnVsbCAmJiBleHRlcm5hbEVsUmVsYXRpdmUgIT09IHZvaWQgMCA/IGV4dGVybmFsRWxSZWxhdGl2ZSA6IChlbC5kYXRhc2V0Lm92b1BhcmFsbGF4RWxSZWxhdGl2ZSAmJlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKChfYiA9IGVsLmRhdGFzZXQub3ZvUGFyYWxsYXhFbFJlbGF0aXZlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJykpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBkb2N1bWVudDtcbiAgICB2YXIgZWxDb250ZW50ID0gKF9kID0gZXh0ZXJuYWxFbENvbnRlbnQgIT09IG51bGwgJiYgZXh0ZXJuYWxFbENvbnRlbnQgIT09IHZvaWQgMCA/IGV4dGVybmFsRWxDb250ZW50IDogZWwucXVlcnlTZWxlY3RvcignW2RhdGEtb3ZvLXBhcmFsbGF4PVwiY29udGVudFwiXScpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBlbC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBpZiAoIWVsQ29udGVudClcbiAgICAgICAgcmV0dXJuO1xuICAgIGVsQ29udGVudC5zdHlsZS53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSc7XG4gICAgZnVuY3Rpb24gZG9QYXJhbGxheCh0cmFuc2xhdGUpIHtcbiAgICAgICAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7IHRyYW5zbGF0ZSA9IDA7IH1cbiAgICAgICAgaWYgKCFlbENvbnRlbnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChheGlzID09PSAneScpIHtcbiAgICAgICAgICAgIGVsQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKDAsIFwiLmNvbmNhdCh0cmFuc2xhdGUsIFwicHgsIDApXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxDb250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHRyYW5zbGF0ZSwgXCJweCwgMCwgMClcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgY2FsbGJhY2sodHJhbnNsYXRlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKF9hKSB7XG4gICAgICAgIHZhciBheGVzID0gX2EuYXhlcywgZWxTY3JvbGxlZCA9IF9hLmVsO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBheGlzID09PSAneCcgPyBheGVzLnggOiBheGVzLnk7XG4gICAgICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRyYW5zbGF0ZShjdXJyZW50UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IHZvaWQgMCkgeyBjdXJyZW50UG9zaXRpb24gPSAwOyB9XG4gICAgICAgICAgICB2YXIgcGVyc3BlY3RpdmUgPSBkaXN0YW5jZSAvIDUwMCB8fCAxO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gY3VycmVudFBvc2l0aW9uIC0gZ2FwID4gMCA/IGN1cnJlbnRQb3NpdGlvbiAtIGdhcCA6IDA7XG4gICAgICAgICAgICByZXR1cm4gc3RhcnQgLyBwZXJzcGVjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0VsT25TY3JlZW4oX2EpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IF9hLnRyYW5zbGF0ZSwgdHJhbnNsYXRlID0gX2IgPT09IHZvaWQgMCA/IDAgOiBfYjtcbiAgICAgICAgICAgIHZhciBfYyA9IGVsU2Nyb2xsZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGJvdHRvbSA9IF9jLmJvdHRvbSwgdG9wID0gX2MudG9wO1xuICAgICAgICAgICAgdmFyIHZpc3VhbEJvdHRvbSA9IGJvdHRvbSAtIHRyYW5zbGF0ZTtcbiAgICAgICAgICAgIHZhciB0b3BPblNjcmVlbiA9IHRvcCA+PSAwO1xuICAgICAgICAgICAgdmFyIGJvdHRvbU9uU2NyZWVuID0gdmlzdWFsQm90dG9tID49IDA7XG4gICAgICAgICAgICB2YXIgb25TY3JlZW4gPSB0b3BPblNjcmVlbiB8fCBib3R0b21PblNjcmVlbjtcbiAgICAgICAgICAgIHJldHVybiBvblNjcmVlbjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRUcmFuc2xhdGUoKSB7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPCBnYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlVHJhbnNsYXRlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZVRyYW5zbGF0ZShwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZSgpO1xuICAgICAgICBpZiAoIWlzRWxPblNjcmVlbih7IHRyYW5zbGF0ZTogdHJhbnNsYXRlIH0pKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBkb1BhcmFsbGF4KHRyYW5zbGF0ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJpbmRTY3JvbGwoKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gc2Nyb2xsKHtcbiAgICAgICAgICAgIGVsOiBlbFJlbGF0aXZlLFxuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUoaGFuZGxlU2Nyb2xsKTtcbiAgICB9XG4gICAgYmluZFNjcm9sbCgpO1xufVxuIiwiZXhwb3J0IHt9O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zY3JvbGxhYmxlLXN0aWNreSc7XG5leHBvcnQgKiBmcm9tICcuL3Njcm9sbGFibGUtc3RpY2t5Lmh0bXgnO1xuZXhwb3J0ICogZnJvbSAnLi9zY3JvbGxhYmxlLXN0aWNreS50eXBlcyc7XG4iLCJpbXBvcnQgeyBzY3JvbGxhYmxlU3RpY2t5IH0gZnJvbSAnLi9zY3JvbGxhYmxlLXN0aWNreSc7XG5leHBvcnQgZnVuY3Rpb24gaHRteFNjcm9sbGFibGVTdGlja3koKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgZWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbb3ZvLXNjcm9sbGFibGUtc3RpY2t5XScpO1xuICAgIGlmIChlbENvbnRhaW5lcikge1xuICAgICAgICBzY3JvbGxhYmxlU3RpY2t5KHsgZWxDb250YWluZXI6IGVsQ29udGFpbmVyIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcbmltcG9ydCAnLi9zY3JvbGxhYmxlLXN0aWNreS5zY3NzJztcbmltcG9ydCB7IHNjcm9sbCB9IGZyb20gJy4uLy4uL2FwaS9zY3JvbGwnO1xuaW1wb3J0IHsgZ2V0Vmlld3BvcnRIZWlnaHQgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvdmlldy92aWV3JztcbmltcG9ydCB7IGlzQm90dG9tT2ZFbGVtZW50QmVsb3dPZlZpZXdwb3J0LCBpc0Fib3ZlQW5kQmVsb3dTY3JlZW4sIGdldEhlaWdodCwgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZWxlbWVudCc7XG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsYWJsZVN0aWNreShfYSkge1xuICAgIHZhciBfYiA9IF9hLmVsLCBlbCA9IF9iID09PSB2b2lkIDAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbb3ZvLXNjcm9sbGFibGUtc3RpY2t5X2NvbnRlbnRdJykgOiBfYiwgX2MgPSBfYS5lbENvbnRhaW5lciwgZWxDb250YWluZXIgPSBfYyA9PT0gdm9pZCAwID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW292by1zY3JvbGxhYmxlLXN0aWNreV0nKSA6IF9jLCBvblVucGluID0gX2Eub25VbnBpbiwgb25QaW4gPSBfYS5vblBpbiwgb25VbmZpeCA9IF9hLm9uVW5maXgsIG9uRml4ID0gX2Eub25GaXg7XG4gICAgdmFyIGZpeGVkID0gZmFsc2U7XG4gICAgdmFyIHBpbm5lZE9uQm90dG9tID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gYXBwbHlNaW5IZWlnaHRUb1Njcm9sbGFibGVFbGVtZW50KCkge1xuICAgICAgICB2YXIgcGFyZW50RWwgPSBlbENvbnRhaW5lci5wYXJlbnROb2RlO1xuICAgICAgICAvLyBwYXJlbnRFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3ZvX3NzJywgJ3dyYXBwZXInKTtcbiAgICAgICAgcGFyZW50RWwuc3R5bGUubWluSGVpZ2h0ID0gU3RyaW5nKGdldEhlaWdodChlbENvbnRhaW5lcikpO1xuICAgIH1cbiAgICBhcHBseU1pbkhlaWdodFRvU2Nyb2xsYWJsZUVsZW1lbnQoKTtcbiAgICBmdW5jdGlvbiBwaW5BbmRGaXgoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHBpbk9uQm90dG9tKCkge1xuICAgICAgICAgICAgaWYgKHBpbm5lZE9uQm90dG9tKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGVsQ29udGFpbmVyLmRhdGFzZXQub3ZvX3Njcm9sbGFibGVfc3RpY2t5X3Bpbm5lZCA9ICdib3R0b20nO1xuICAgICAgICAgICAgcGlubmVkT25Cb3R0b20gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ob25QaW4pKVxuICAgICAgICAgICAgICAgIG9uUGluKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdW5waW5PbkJvdHRvbSgpIHtcbiAgICAgICAgICAgIGlmICghcGlubmVkT25Cb3R0b20pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgZWxDb250YWluZXIuZGF0YXNldC5vdm9fc2Nyb2xsYWJsZV9zdGlja3lfcGlubmVkID0gJyc7XG4gICAgICAgICAgICBwaW5uZWRPbkJvdHRvbSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ob25VbnBpbikpXG4gICAgICAgICAgICAgICAgb25VbnBpbigpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGZpeCgpIHtcbiAgICAgICAgICAgIGlmIChmaXhlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBmaXhlZCA9IHRydWU7XG4gICAgICAgICAgICBlbENvbnRhaW5lci5kYXRhc2V0Lm92b19zY3JvbGxhYmxlX3N0aWNreV9maXhlZCA9ICd0cnVlJztcbiAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gU3RyaW5nKGVsQ29udGFpbmVyLm9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKG9uRml4KSlcbiAgICAgICAgICAgICAgICBvbkZpeCgpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVuZml4KCkge1xuICAgICAgICAgICAgaWYgKCFmaXhlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBmaXhlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxDb250YWluZXIuZGF0YXNldC5vdm9fc2Nyb2xsYWJsZV9zdGlja3lfZml4ZWQgPSAnZmFsc2UnO1xuICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMCknO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ob25VbmZpeCkpXG4gICAgICAgICAgICAgICAgb25VbmZpeCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Fib3ZlQW5kQmVsb3dTY3JlZW4oZWxDb250YWluZXIpKSB7XG4gICAgICAgICAgICBmaXgoKTtcbiAgICAgICAgICAgIHVucGluT25Cb3R0b20oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1bmZpeCgpO1xuICAgICAgICBpZiAoIWlzQm90dG9tT2ZFbGVtZW50QmVsb3dPZlZpZXdwb3J0KGVsQ29udGFpbmVyKSkge1xuICAgICAgICAgICAgcGluT25Cb3R0b20oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1bnBpbk9uQm90dG9tKCk7XG4gICAgfVxuICAgIHZhciBoYW5kbGVTY3JvbGwgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9TY3JvbGwgPSAwO1xuICAgICAgICB2YXIgbGFzdFBvc2l0aW9uU2Nyb2xsID0gMDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gX2EuYXhlcy55O1xuICAgICAgICAgICAgcGluQW5kRml4KCk7XG4gICAgICAgICAgICBpZiAoIWZpeGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBtaW5Ub1Njcm9sbCA9IDA7XG4gICAgICAgICAgICB2YXIgbWF4VG9TY3JvbGwgPSBlbC5vZmZzZXRIZWlnaHQgLSBnZXRWaWV3cG9ydEhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uU2Nyb2xsID0gc2Nyb2xsUG9zaXRpb24gLSBlbENvbnRhaW5lci5vZmZzZXRUb3A7XG4gICAgICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IHBvc2l0aW9uU2Nyb2xsIC0gbGFzdFBvc2l0aW9uU2Nyb2xsO1xuICAgICAgICAgICAgbGFzdFBvc2l0aW9uU2Nyb2xsID0gcG9zaXRpb25TY3JvbGw7XG4gICAgICAgICAgICB0b1Njcm9sbCArPSBkaWZmZXJlbmNlO1xuICAgICAgICAgICAgaWYgKHRvU2Nyb2xsID4gbWF4VG9TY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0b1Njcm9sbCA9IG1heFRvU2Nyb2xsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvU2Nyb2xsIDwgbWluVG9TY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0b1Njcm9sbCA9IG1pblRvU2Nyb2xsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC1cIi5jb25jYXQodG9TY3JvbGwsIFwicHgpXCIpO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG4gICAgdmFyIG9ic2VydmFibGUgPSBzY3JvbGwoe30pO1xuICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKGhhbmRsZVNjcm9sbCk7XG59XG4iLCJleHBvcnQge307XG4iLCJleHBvcnQgKiBmcm9tICcuL3Njcm9sbGFibGUtdGFicyc7XG5leHBvcnQgKiBmcm9tICcuL3Njcm9sbGFibGUtdGFicy5odG14JztcbiIsImltcG9ydCB7IElTX05PREVfSlMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZG9jdW1lbnQnO1xuaW1wb3J0IHsgU2Nyb2xsYWJsZVRhYnMgfSBmcm9tICcuL3Njcm9sbGFibGUtdGFicyc7XG5leHBvcnQgZnVuY3Rpb24gaHRteFNjcm9sbGFibGVUYWJzKCkge1xuICAgIGlmIChJU19OT0RFX0pTKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtb3ZvLXNjcm9sbGFibGUtdGFic11bZGF0YS1vdm8tYXV0b10nKTtcbiAgICBpZiAoIWVsKVxuICAgICAgICByZXR1cm47XG4gICAgU2Nyb2xsYWJsZVRhYnMoeyBlbDogZWwgfSk7XG59XG4iLCJpbXBvcnQgJy4vc2Nyb2xsYWJsZS10YWJzLnNjc3MnO1xuZXhwb3J0IGZ1bmN0aW9uIFNjcm9sbGFibGVUYWJzKF9hKSB7XG4gICAgdmFyIF9iID0gX2EuZWwsIGVsID0gX2IgPT09IHZvaWQgMCA/IGRvY3VtZW50IDogX2I7XG4gICAgdmFyIGl0ZW1zID0gQXJyYXkuZnJvbShlbC5jaGlsZHJlbik7XG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXRlbS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgIGlubGluZTogJ25lYXJlc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9zY3JvbGxzcHkudHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9zY3JvbGxzcHknO1xuZXhwb3J0ICogZnJvbSAnLi9zY3JvbGxzcHkuaHRteCc7XG4iLCJpbXBvcnQgeyBjcmVhdGVTY3JvbGxzcHlJdGVtLCBzY3JvbGxzcHkgfSBmcm9tICcuL3Njcm9sbHNweSc7XG5mdW5jdGlvbiBzdGFydChlbCkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgZWxNZW51cyA9IEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbCgnW292by1zY3JvbGxzcHktbWVudV0nKSk7XG4gICAgdmFyIGVsQ29udGVudHMgPSBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tvdm8tc2Nyb2xsc3B5LWNvbnRlbnRdJykpO1xuICAgIGlmICghZWxNZW51cykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2RlY2xhcmUgdGhlIHNjcm9sbCBzcHkgbWVudXMnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWVsQ29udGVudHMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdkZWNsYXJlIHRoZSBzY3JvbGwgc3B5IGNvbnRlbnRzJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGxpc3QgPSBlbENvbnRlbnRzLm1hcChmdW5jdGlvbiAoZWxDb250ZW50LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlU2Nyb2xsc3B5SXRlbSh7XG4gICAgICAgICAgICBlbENvbnRlbnQ6IGVsQ29udGVudCxcbiAgICAgICAgICAgIGVsTWVudTogZWxNZW51c1tpbmRleF0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBkZWJvdW5jZSA9IE51bWJlcihlbC5nZXRBdHRyaWJ1dGUoJ292by1zY3JvbGxzcHktZGVib3VuY2UnKSkgfHwgMDtcbiAgICB2YXIgZWxSZWxhdGl2ZSA9IChfYSA9IChlbC5oYXNBdHRyaWJ1dGUoJ292by1zY3JvbGxzcHktcmVsYXRpdmUnKVxuICAgICAgICA/IGVsXG4gICAgICAgIDogZWwucXVlcnlTZWxlY3RvcignW292by1zY3JvbGxzcHktcmVsYXRpdmVdJykpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1ldGhvZCA9IGVsLmdldEF0dHJpYnV0ZSgnb3ZvLXNjcm9sbHNweV9tZXRob2QnKSB8fCB1bmRlZmluZWQ7XG4gICAgc2Nyb2xsc3B5KHsgbGlzdDogbGlzdCwgZWxSZWxhdGl2ZTogZWxSZWxhdGl2ZSwgZGVib3VuY2U6IGRlYm91bmNlLCBtZXRob2Q6IG1ldGhvZCB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBodG14U2Nyb2xsc3B5KCkge1xuICAgIHZhciBlbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tvdm8tc2Nyb2xsc3B5XScpKTtcbiAgICBlbHMuZm9yRWFjaChzdGFydCk7XG59XG4iLCJpbXBvcnQgeyBzY3JvbGwgfSBmcm9tICcuLi8uLi9hcGkvc2Nyb2xsJztcbmltcG9ydCB7IGdldFNjcm9sbFBhcmVudCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9lbGVtZW50JztcbmltcG9ydCB7IElTX05PREVfSlMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZG9jdW1lbnQnO1xudmFyIEFDVElWRV9DTEFTUyA9ICdvdm8tYWN0aXZlJztcbmV4cG9ydCB2YXIgY3JlYXRlU2Nyb2xsc3B5SXRlbSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBlbE1lbnUgPSBfYS5lbE1lbnUsIGVsQ29udGVudCA9IF9hLmVsQ29udGVudCwgY2FsbGJhY2sgPSBfYS5jYWxsYmFjaztcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICAgICAgaWYgKCFlbE1lbnUgfHwgIWVsQ29udGVudClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZWxNZW51LmNsYXNzTGlzdC5hZGQoQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgZWxDb250ZW50LmNsYXNzTGlzdC5hZGQoQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgY2FsbGJhY2soeyBhY3RpdmU6IHRydWUgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlQWN0aXZhdGUoKSB7XG4gICAgICAgIGlmICghZWxNZW51IHx8ICFlbENvbnRlbnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsTWVudS5jbGFzc0xpc3QucmVtb3ZlKEFDVElWRV9DTEFTUyk7XG4gICAgICAgIGVsQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKEFDVElWRV9DTEFTUyk7XG4gICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgIGNhbGxiYWNrKHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZhdGU6IGFjdGl2YXRlLFxuICAgICAgICBkZUFjdGl2YXRlOiBkZUFjdGl2YXRlLFxuICAgICAgICBjb250ZW50OiBlbENvbnRlbnQsXG4gICAgfTtcbn07XG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsc3B5KF9hKSB7XG4gICAgdmFyIGxpc3QgPSBfYS5saXN0LCBfYiA9IF9hLmVsUmVsYXRpdmUsIGVsUmVsYXRpdmUgPSBfYiA9PT0gdm9pZCAwID8gIUlTX05PREVfSlMgPyBkb2N1bWVudCA6IHVuZGVmaW5lZCA6IF9iLCBfYyA9IF9hLm1ldGhvZCwgbWV0aG9kID0gX2MgPT09IHZvaWQgMCA/ICdDVVJSRU5UJyA6IF9jLCBfZCA9IF9hLmF4aXMsIGF4aXMgPSBfZCA9PT0gdm9pZCAwID8gJ3knIDogX2QsIF9lID0gX2EuZGVib3VuY2UsIGRlYm91bmNlID0gX2UgPT09IHZvaWQgMCA/IDAgOiBfZTtcbiAgICBpZiAoIWVsUmVsYXRpdmUgfHwgIWxpc3QubGVuZ3RoKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIHNjcm9sbGluZ0VsZW1lbnQgPSBlbFJlbGF0aXZlO1xuICAgIGlmIChlbFJlbGF0aXZlIGluc3RhbmNlb2YgRG9jdW1lbnQgJiYgbGlzdFswXS5jb250ZW50KSB7XG4gICAgICAgIHNjcm9sbGluZ0VsZW1lbnQgPSBnZXRTY3JvbGxQYXJlbnQobGlzdFswXS5jb250ZW50KSB8fCBkb2N1bWVudDtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRBY3RpdmU7XG4gICAgdmFyIGdldFRoZUFjdGl2ZTtcbiAgICBmdW5jdGlvbiBnZXRUaGVDdXJyZW50KHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBsaXN0LnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICB2YXIgY3VycmVudFN0YXJ0ID0gYXhpcyA9PT0gJ3knXG4gICAgICAgICAgICAgICAgPyAoX2IgPSAoX2EgPSBjdXJyZW50VmFsdWUgPT09IG51bGwgfHwgY3VycmVudFZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50VmFsdWUuY29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9mZnNldFRvcCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMFxuICAgICAgICAgICAgICAgIDogKF9kID0gKF9jID0gY3VycmVudFZhbHVlID09PSBudWxsIHx8IGN1cnJlbnRWYWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFZhbHVlLmNvbnRlbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5vZmZzZXRMZWZ0KSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAwO1xuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQocG9zaXRpb25bYXhpc10pID49IE1hdGgucm91bmQoY3VycmVudFN0YXJ0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFRoZUNsb3Nlc3QocG9zaXRpb24sIHNjcm9sbGluZ0VsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qLCBfaywgX2wsIF9tLCBfbywgX3AsIF9xLCBfcjtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1N0YXJ0ID0gYXhpcyA9PT0gJ3knXG4gICAgICAgICAgICAgICAgPyAoX2IgPSAoX2EgPSBwcmV2aW91c1ZhbHVlID09PSBudWxsIHx8IHByZXZpb3VzVmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByZXZpb3VzVmFsdWUuY29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9mZnNldFRvcCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMCAtIDFcbiAgICAgICAgICAgICAgICA6IChfZCA9IChfYyA9IHByZXZpb3VzVmFsdWUgPT09IG51bGwgfHwgcHJldmlvdXNWYWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJldmlvdXNWYWx1ZS5jb250ZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Mub2Zmc2V0TGVmdCkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogMCAtIDE7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNFbmQgPSBheGlzID09PSAneSdcbiAgICAgICAgICAgICAgICA/IChfZiA9IChfZSA9IHByZXZpb3VzVmFsdWUgPT09IG51bGwgfHwgcHJldmlvdXNWYWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJldmlvdXNWYWx1ZS5jb250ZW50KSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Uub2Zmc2V0SGVpZ2h0KSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiAwICsgcHJldmlvdXNTdGFydCAtIDFcbiAgICAgICAgICAgICAgICA6IChfaCA9IChfZyA9IHByZXZpb3VzVmFsdWUgPT09IG51bGwgfHwgcHJldmlvdXNWYWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJldmlvdXNWYWx1ZS5jb250ZW50KSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cub2Zmc2V0V2lkdGgpICE9PSBudWxsICYmIF9oICE9PSB2b2lkIDAgPyBfaCA6IDAgKyBwcmV2aW91c1N0YXJ0IC0gMTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50U3RhcnQgPSBheGlzID09PSAneSdcbiAgICAgICAgICAgICAgICA/IChfayA9IChfaiA9IGN1cnJlbnRWYWx1ZSA9PT0gbnVsbCB8fCBjdXJyZW50VmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRWYWx1ZS5jb250ZW50KSA9PT0gbnVsbCB8fCBfaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2oub2Zmc2V0VG9wKSAhPT0gbnVsbCAmJiBfayAhPT0gdm9pZCAwID8gX2sgOiAwICsgMVxuICAgICAgICAgICAgICAgIDogKF9tID0gKF9sID0gY3VycmVudFZhbHVlID09PSBudWxsIHx8IGN1cnJlbnRWYWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFZhbHVlLmNvbnRlbnQpID09PSBudWxsIHx8IF9sID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbC5vZmZzZXRMZWZ0KSAhPT0gbnVsbCAmJiBfbSAhPT0gdm9pZCAwID8gX20gOiAwICsgMTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RW5kID0gYXhpcyA9PT0gJ3knXG4gICAgICAgICAgICAgICAgPyAoX3AgPSAoX28gPSBjdXJyZW50VmFsdWUgPT09IG51bGwgfHwgY3VycmVudFZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50VmFsdWUuY29udGVudCkgPT09IG51bGwgfHwgX28gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vLm9mZnNldEhlaWdodCkgIT09IG51bGwgJiYgX3AgIT09IHZvaWQgMCA/IF9wIDogMCArIGN1cnJlbnRTdGFydCArIDFcbiAgICAgICAgICAgICAgICA6IChfciA9IChfcSA9IGN1cnJlbnRWYWx1ZSA9PT0gbnVsbCB8fCBjdXJyZW50VmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRWYWx1ZS5jb250ZW50KSA9PT0gbnVsbCB8fCBfcSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Eub2Zmc2V0V2lkdGgpICE9PSBudWxsICYmIF9yICE9PSB2b2lkIDAgPyBfciA6IDAgKyBjdXJyZW50U3RhcnQgKyAxO1xuICAgICAgICAgICAgdmFyIG1pZGRsZVNjcm9sbGVkID0gTWF0aC5hYnMocG9zaXRpb25bYXhpc10gKyBzY3JvbGxpbmdFbGVtZW50Lm9mZnNldFdpZHRoIC8gMik7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNQcm94aW1pdHlTdGFydCA9IE1hdGguYWJzKG1pZGRsZVNjcm9sbGVkIC0gcHJldmlvdXNTdGFydCk7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNQcm94aW1pdHlFbmQgPSBNYXRoLmFicyhtaWRkbGVTY3JvbGxlZCAtIHByZXZpb3VzRW5kKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50UHJveGltaXR5U3RhcnQgPSBNYXRoLmFicyhtaWRkbGVTY3JvbGxlZCAtIGN1cnJlbnRTdGFydCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudFByb3hpbWl0eUVuZCA9IE1hdGguYWJzKG1pZGRsZVNjcm9sbGVkIC0gY3VycmVudEVuZCk7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNTdGFydE5lYXJUaGFuQ3VycmVudFN0YXJ0ID0gcHJldmlvdXNQcm94aW1pdHlTdGFydCA8IGN1cnJlbnRQcm94aW1pdHlTdGFydDtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1N0YXJ0TmVhclRoYW5DdXJyZW50RW5kID0gcHJldmlvdXNQcm94aW1pdHlTdGFydCA8IGN1cnJlbnRQcm94aW1pdHlFbmQ7XG4gICAgICAgICAgICB2YXIgcHJldmllc1N0YXJ0TmVhclRoYW5DdXJyZW50ID0gcHJldmlvdXNTdGFydE5lYXJUaGFuQ3VycmVudFN0YXJ0ICYmIHByZXZpb3VzU3RhcnROZWFyVGhhbkN1cnJlbnRFbmQ7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNFbmROZWFyVGhhbkN1cnJlbnRTdGFydCA9IHByZXZpb3VzUHJveGltaXR5RW5kIDwgY3VycmVudFByb3hpbWl0eUVuZDtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c0VuZE5lYXJUaGFuQ3VycmVudEVuZCA9IHByZXZpb3VzUHJveGltaXR5RW5kIDwgY3VycmVudFByb3hpbWl0eVN0YXJ0O1xuICAgICAgICAgICAgdmFyIHByZXZpZXNFbmROZWFyVGhhbkN1cnJlbnQgPSBwcmV2aW91c0VuZE5lYXJUaGFuQ3VycmVudFN0YXJ0ICYmIHByZXZpb3VzRW5kTmVhclRoYW5DdXJyZW50RW5kO1xuICAgICAgICAgICAgaWYgKHByZXZpZXNTdGFydE5lYXJUaGFuQ3VycmVudCB8fCBwcmV2aWVzRW5kTmVhclRoYW5DdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0VGhlQWN0aXZlID0gZ2V0VGhlQ3VycmVudDtcbiAgICBpZiAobWV0aG9kID09PSAnQ0xPU0VTVCcpIHtcbiAgICAgICAgZ2V0VGhlQWN0aXZlID0gZ2V0VGhlQ2xvc2VzdDtcbiAgICB9XG4gICAgaWYgKG1ldGhvZCA9PT0gJ0VYQUNUJykge1xuICAgICAgICBnZXRUaGVBY3RpdmUgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBvaSA9IGxpc3QucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGFydCA9IGF4aXMgPT09ICd5J1xuICAgICAgICAgICAgICAgICAgICA/IChfYiA9IChfYSA9IGN1cnJlbnRWYWx1ZSA9PT0gbnVsbCB8fCBjdXJyZW50VmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRWYWx1ZS5jb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub2Zmc2V0VG9wKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAwXG4gICAgICAgICAgICAgICAgICAgIDogKF9kID0gKF9jID0gY3VycmVudFZhbHVlID09PSBudWxsIHx8IGN1cnJlbnRWYWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFZhbHVlLmNvbnRlbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5vZmZzZXRMZWZ0KSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAwO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKHBvc2l0aW9uW2F4aXNdKSA9PT0gTWF0aC5yb3VuZChjdXJyZW50U3RhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xuICAgICAgICAgICAgfSwgY3VycmVudEFjdGl2ZSk7XG4gICAgICAgICAgICByZXR1cm4gb2k7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbChfYSkge1xuICAgICAgICB2YXIgYXhlcyA9IF9hLmF4ZXMsIHNjcm9sbGluZ0VsZW1lbnQgPSBfYS5lbDtcbiAgICAgICAgdmFyIGN1cnJlbnRUb0FjdGl2ZSA9IGdldFRoZUFjdGl2ZShheGVzLCBzY3JvbGxpbmdFbGVtZW50KTtcbiAgICAgICAgaWYgKGN1cnJlbnRUb0FjdGl2ZSAhPT0gY3VycmVudEFjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUb0FjdGl2ZS5hY3RpdmF0ZSlcbiAgICAgICAgICAgICAgICBjdXJyZW50VG9BY3RpdmUuYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aXZlICYmIGN1cnJlbnRBY3RpdmUuZGVBY3RpdmF0ZSlcbiAgICAgICAgICAgICAgICBjdXJyZW50QWN0aXZlLmRlQWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50QWN0aXZlID0gY3VycmVudFRvQWN0aXZlO1xuICAgIH1cbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHNjcm9sbCh7XG4gICAgICAgIGVsOiBzY3JvbGxpbmdFbGVtZW50LFxuICAgICAgICBkZWJvdW5jZTogZGVib3VuY2UsXG4gICAgfSk7XG4gICAgb2JzZXJ2YWJsZS5zdWJzY3JpYmUoaGFuZGxlU2Nyb2xsKTtcbiAgICBzY3JvbGxpbmdFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzY3JvbGwnKSk7XG59XG4vKiogQGRlcHJlY2F0ZWQgdXNlIGNyZWF0ZVNjcm9sbHNweUl0ZW0gaW5zdGVhZC4gKi9cbmV4cG9ydCB2YXIgY3JlYXRlU2Nyb2xsU3B5SXRlbSA9IGNyZWF0ZVNjcm9sbHNweUl0ZW07XG4vKiogQGRlcHJlY2F0ZWQgdXNlIHNjcm9sbHNweSBpbnN0ZWFkLiAqL1xuZXhwb3J0IHZhciBzY3JvbGxTcHkgPSBzY3JvbGxzcHk7XG4iLCJleHBvcnQge307XG4iLCJleHBvcnQgKiBmcm9tICcuL3NwaW4taW1hZ2VzJztcbmV4cG9ydCAqIGZyb20gJy4vc3Bpbi1pbWFnZXMuaHRteCc7XG4iLCJpbXBvcnQgeyBJU19OT0RFX0pTIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2RvY3VtZW50JztcbmltcG9ydCB7IHNwaW5JbWFnZXMgfSBmcm9tICcuL3NwaW4taW1hZ2VzJztcbmV4cG9ydCBmdW5jdGlvbiBodG14U3BpbkltYWdlcygpIHtcbiAgICBpZiAoSVNfTk9ERV9KUylcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW92by1zcGluLWltYWdlc11bZGF0YS1vdm8tYXV0b10nKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgICAgc3BpbkltYWdlcyh7fSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL3NwaW4taW1hZ2VzLnNjc3MnO1xuaW1wb3J0IHsgdG91Y2ggfSBmcm9tICcuLi8uLi9hcGkvdG91Y2gnO1xuZnVuY3Rpb24gc2V0U3ByaXRlU2l6ZShfYSkge1xuICAgIHZhciBlbFNwcml0ZSA9IF9hLmVsU3ByaXRlLCBfYiA9IF9hLnF1YW50aXR5RnJhbWVzLCBxdWFudGl0eUZyYW1lcyA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gICAgdmFyIGh0bWxTcHJpdGUgPSBlbFNwcml0ZTtcbiAgICBodG1sU3ByaXRlLnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQoMTAwICogcXVhbnRpdHlGcmFtZXMsIFwiJVwiKTtcbn1cbmZ1bmN0aW9uIGdldEZyYW1lUGVyc2VudFNpemUocXVhbnRpdHlGcmFtZXMpIHtcbiAgICBpZiAocXVhbnRpdHlGcmFtZXMgPT09IHZvaWQgMCkgeyBxdWFudGl0eUZyYW1lcyA9IDA7IH1cbiAgICByZXR1cm4gMTAwIC8gcXVhbnRpdHlGcmFtZXM7XG59XG5mdW5jdGlvbiBhY3RpdmF0ZVNwcml0ZShlbCkge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRlZCcpO1xufVxuZnVuY3Rpb24gcm90YXRlKF9hKSB7XG4gICAgdmFyIGVsU3ByaXRlID0gX2EuZWxTcHJpdGUsIF9iID0gX2Eucm90YXRlZCwgcm90YXRlZCA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gICAgZWxTcHJpdGUuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdCgoLTEwMCArIHJvdGF0ZWQpICUgMTAwLCBcIiUpXCIpO1xufVxuZXhwb3J0IHZhciBzcGluSW1hZ2VzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIF9iID0gX2EucXVhbnRpdHlGcmFtZXMsIGV4dGVybmFsUXVhbnRpdHlGcmFtZXMgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLCBfYyA9IF9hLmVsLCBlbCA9IF9jID09PSB2b2lkIDAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1vdm8tc3Bpbi1pbWFnZXNdJykgOiBfYywgX2QgPSBfYS5hdXRvUm90YXRlVGltZSwgYXV0b1JvdGF0ZVRpbWUgPSBfZCA9PT0gdm9pZCAwID8gMCA6IF9kLCBfZSA9IF9hLmNsb2Nrd2lzZSwgY2xvY2t3aXNlID0gX2UgPT09IHZvaWQgMCA/IHRydWUgOiBfZSwgb25HcmFiID0gX2Eub25HcmFiLCBvbkRyb3AgPSBfYS5vbkRyb3AsIF9mID0gX2EuZGVib3VuY2UsIGV4dGVybmFsRGVib3VuY2UgPSBfZiA9PT0gdm9pZCAwID8gMCA6IF9mO1xuICAgIGlmICghZWwpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgZWxTcHJpdGUgPSBlbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1vdm8tc3Bpbi1pbWFnZXM9XCJzcHJpdGVcIl0nKTtcbiAgICBpZiAoIWVsU3ByaXRlKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIHF1YW50aXR5RnJhbWVzID0gZXh0ZXJuYWxRdWFudGl0eUZyYW1lcyB8fCBOdW1iZXIoZWxTcHJpdGUuY2hpbGRFbGVtZW50Q291bnQpIHx8IDE7XG4gICAgdmFyIGRlYm91bmNlID0gZXh0ZXJuYWxEZWJvdW5jZSB8fCBOdW1iZXIoZWwuZGF0YXNldC5vdm9EZWJvdW5jZSkgfHwgMDtcbiAgICB2YXIgZnJhbWVTaXplID0gMDtcbiAgICB2YXIgcm90YXRlZCA9IDA7XG4gICAgaWYgKCFxdWFudGl0eUZyYW1lcyB8fCAhZWwpXG4gICAgICAgIHJldHVybjtcbiAgICBmdW5jdGlvbiBvblNwcml0ZUxvYWRlZChjYikge1xuICAgICAgICBjYigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByb3RhdGVDb3VudGVyY2xvY2t3aXNlKCkge1xuICAgICAgICBpZiAoIWVsU3ByaXRlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByb3RhdGVkID0gKHJvdGF0ZWQgKyBmcmFtZVNpemUpICUgMTAwO1xuICAgICAgICByb3RhdGUoeyBlbFNwcml0ZTogZWxTcHJpdGUsIHJvdGF0ZWQ6IHJvdGF0ZWQgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJvdGF0ZUNsb2Nrd2lzZSgpIHtcbiAgICAgICAgcm90YXRlZCA9IChyb3RhdGVkIC0gZnJhbWVTaXplKSAlIDEwMDtcbiAgICAgICAgcm90YXRlKHsgZWxTcHJpdGU6IGVsU3ByaXRlLCByb3RhdGVkOiByb3RhdGVkIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdXRvUm90YXRlKCkge1xuICAgICAgICB2YXIgcm90YXRlV2lzZSA9IGNsb2Nrd2lzZSA/IHJvdGF0ZUNsb2Nrd2lzZSA6IHJvdGF0ZUNvdW50ZXJjbG9ja3dpc2U7XG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJvdGF0ZVdpc2UoKTtcbiAgICAgICAgfSwgYXV0b1JvdGF0ZVRpbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVHcmFiKCkge1xuICAgICAgICBpZiAoIWVsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdvdm8tYWN0aXZlJyk7XG4gICAgICAgIGlmIChvbkdyYWIpXG4gICAgICAgICAgICBvbkdyYWIoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlRHJvcCgpIHtcbiAgICAgICAgaWYgKCFlbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnb3ZvLWFjdGl2ZScpO1xuICAgICAgICBpZiAob25Ecm9wKVxuICAgICAgICAgICAgb25Ecm9wKCk7XG4gICAgfVxuICAgIG9uU3ByaXRlTG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWN0aXZhdGVTcHJpdGUoZWwpO1xuICAgICAgICBpZiAoYXV0b1JvdGF0ZVRpbWUpIHtcbiAgICAgICAgICAgIGF1dG9Sb3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNldFNwcml0ZVNpemUoe1xuICAgICAgICBlbFNwcml0ZTogZWxTcHJpdGUsXG4gICAgICAgIHF1YW50aXR5RnJhbWVzOiBxdWFudGl0eUZyYW1lcyxcbiAgICB9KTtcbiAgICBmcmFtZVNpemUgPSBnZXRGcmFtZVBlcnNlbnRTaXplKHF1YW50aXR5RnJhbWVzKTtcbiAgICBpZiAoIWVsKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIHRvdWNoJCA9IHRvdWNoKHtcbiAgICAgICAgZWw6IGVsLFxuICAgICAgICBnYXA6IHtcbiAgICAgICAgICAgIHg6IGRlYm91bmNlLFxuICAgICAgICAgICAgeTogZGVib3VuY2UsXG4gICAgICAgIH0sXG4gICAgICAgIG9ubHlBeGlzOiAneCcsXG4gICAgfSk7XG4gICAgdG91Y2gkLmdyYWIkLnN1YnNjcmliZShoYW5kbGVHcmFiKTtcbiAgICB0b3VjaCQuZHJvcCQuc3Vic2NyaWJlKGhhbmRsZURyb3ApO1xuICAgIHRvdWNoJC5kcmFnJC5zdWJzY3JpYmUoZnVuY3Rpb24gKGRyYWdFdmVudCkge1xuICAgICAgICBpZiAoZHJhZ0V2ZW50LmRpcmVjdGlvbiA9PT0gJ2xlZnQnIHx8XG4gICAgICAgICAgICBkcmFnRXZlbnQuZGlyZWN0aW9uID09PSAnZG93bi1sZWZ0JyB8fFxuICAgICAgICAgICAgZHJhZ0V2ZW50LmRpcmVjdGlvbiA9PT0gJ3VwLWxlZnQnKSB7XG4gICAgICAgICAgICByb3RhdGVDbG9ja3dpc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHJhZ0V2ZW50LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyB8fFxuICAgICAgICAgICAgZHJhZ0V2ZW50LmRpcmVjdGlvbiA9PT0gJ2Rvd24tcmlnaHQnIHx8XG4gICAgICAgICAgICBkcmFnRXZlbnQuZGlyZWN0aW9uID09PSAndXAtcmlnaHQnKSB7XG4gICAgICAgICAgICByb3RhdGVDb3VudGVyY2xvY2t3aXNlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3N0aWNreS1oZWFkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zdGlja3ktaGVhZGVyLmh0bXgnO1xuIiwiaW1wb3J0IHsgSVNfTk9ERV9KUyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9kb2N1bWVudCc7XG5pbXBvcnQgeyBTdGlja3lIZWFkZXIgfSBmcm9tICcuL3N0aWNreS1oZWFkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGh0bXhTdGlja3lIZWFkZXIoKSB7XG4gICAgaWYgKElTX05PREVfSlMpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgZmxhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW92by1zdGlja3ktaGVhZGVyXVtkYXRhLW92by1hdXRvXScpO1xuICAgIGlmICghZmxhZylcbiAgICAgICAgcmV0dXJuO1xuICAgIFN0aWNreUhlYWRlcih7fSk7XG59XG4iLCJpbXBvcnQgJy4vc3RpY2t5LWhlYWRlci5zY3NzJztcbmltcG9ydCB7IGdldEhlaWdodCwgZ2V0U2Nyb2xsUGFyZW50LCB0cmFuc2xhdGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZWxlbWVudCc7XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tICcuLi8uLi9hcGkvc2Nyb2xsJztcbmV4cG9ydCBmdW5jdGlvbiBTdGlja3lIZWFkZXIoX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5lbCwgZWwgPSBfYiA9PT0gdm9pZCAwID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtb3ZvLXN0aWNreS1oZWFkZXJdJykgOiBfYjtcbiAgICBpZiAoIWVsKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGh0bWxFbCA9IGVsO1xuICAgIGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50U2Nyb2xsKF9hKSB7XG4gICAgICAgIHZhciBfYiA9IF9hLnJlbGF0aXZlQXhlcy55LCBwb3NpdGlvbiA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gICAgICAgIHRyYW5zbGF0ZSh7IGVsOiBodG1sRWwsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcbiAgICAgICAgaWYgKGdldEhlaWdodChodG1sRWwpID09PSBwb3NpdGlvbikge1xuICAgICAgICAgICAgaHRtbEVsLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaHRtbEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvcGFjaXR5Jyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIGlmICghZWwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNjcm9sbCh7XG4gICAgICAgICAgICBlbDogZ2V0U2Nyb2xsUGFyZW50KGh0bWxFbCksXG4gICAgICAgICAgICBtYXhSZWxhdGl2ZToge1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBib3R0b206IGdldEhlaWdodChodG1sRWwpLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnBpcGUoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShoYW5kbGVEb2N1bWVudFNjcm9sbCk7XG4gICAgfVxuICAgIGJpbmRFdmVudHMoKTtcbn1cbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnbG9kYXNoL2lzTnVtYmVyJztcbmltcG9ydCB7IHBpcGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBwYWlyd2lzZSwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFYRVMsIGdldERpcmVjdGlvbiwgaXNPbkdhcCwgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvYXhpcyc7XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlBdHRyaWJ1dGVBbmRHYXBPcGVyYXRvcihfYSkge1xuICAgIHZhciBfYiA9IF9hLmdhcCwgZ2FwID0gX2IgPT09IHZvaWQgMCA/IEFYRVMgOiBfYjtcbiAgICByZXR1cm4gcGlwZShtYXAoZnVuY3Rpb24gKHNjcm9sbE9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiBzY3JvbGxPYnNlcnZlcixcbiAgICAgICAgICAgIGxhc3Q6IHNjcm9sbE9ic2VydmVyLFxuICAgICAgICB9O1xuICAgIH0pLCBzY2FuKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgICAgICAgdmFyIGF4ZXMgPSBhY2MuY3VycmVudC5heGVzO1xuICAgICAgICB2YXIgbGFzdEF4ZXMgPSBhY2MubGFzdC5heGVzO1xuICAgICAgICB2YXIgb25HYXAgPSBpc09uR2FwKHtcbiAgICAgICAgICAgIGF4ZXM6IGF4ZXMsXG4gICAgICAgICAgICBnYXA6IGdhcCxcbiAgICAgICAgICAgIGxhc3RBeGVzOiBsYXN0QXhlcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiBjdXJyLmN1cnJlbnQsXG4gICAgICAgICAgICBsYXN0OiBvbkdhcCA/IGFjYy5sYXN0IDogY3Vyci5jdXJyZW50LFxuICAgICAgICB9O1xuICAgIH0pLCBmaWx0ZXIoZnVuY3Rpb24gKF9hLCBpbmRleCkge1xuICAgICAgICB2YXIgY3VycmVudCA9IF9hLmN1cnJlbnQsIGxhc3QgPSBfYS5sYXN0O1xuICAgICAgICB2YXIgYXhlcyA9IGN1cnJlbnQuYXhlcztcbiAgICAgICAgdmFyIGxhc3RBeGVzID0gbGFzdC5heGVzO1xuICAgICAgICB2YXIgZmlyc3RFdmVudCA9ICFpbmRleDtcbiAgICAgICAgdmFyIGlzVG9JZ25vcmUgPSBjdXJyZW50LnR5cGUgPT09ICdTVEFSVCc7XG4gICAgICAgIGlmIChmaXJzdEV2ZW50IHx8IGlzVG9JZ25vcmUpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICFpc09uR2FwKHtcbiAgICAgICAgICAgIGF4ZXM6IGF4ZXMsXG4gICAgICAgICAgICBnYXA6IGdhcCxcbiAgICAgICAgICAgIGxhc3RBeGVzOiBsYXN0QXhlcyxcbiAgICAgICAgfSk7XG4gICAgfSksIG1hcChmdW5jdGlvbiAoc2Nyb2xsT2JzZXJ2ZXIpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbE9ic2VydmVyLmN1cnJlbnQ7XG4gICAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHB1dFJlbGF0aXZlQXhlc09wZXJhdG9yKF9hKSB7XG4gICAgdmFyIF9iID0gX2Euc3RvcEdyb3dpbmdBdCwgc3RvcEdyb3dpbmdBdCA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gICAgcmV0dXJuIHBpcGUoc2NhbihmdW5jdGlvbiAoYWNjLCBjdXJyLCBpbmRleCkge1xuICAgICAgICB2YXIgZmlyc3RSdW4gPSBpbmRleCA9PT0gMTtcbiAgICAgICAgdmFyIHN0b3BHcm93aW5nQXRBc1Bvc2l0aW9ucyA9IHN0b3BHcm93aW5nQXQ7XG4gICAgICAgIHZhciB0b1Jlc3RhcnQgPSBjdXJyLnR5cGUgPT09ICdTVEFSVCc7XG4gICAgICAgIHZhciBzdGFydEF4ZXMgPSBhY2Muc3RhcnRBeGVzO1xuICAgICAgICB2YXIgcmVsYXRpdmVTdGFydEF4ZXMgPSBhY2MucmVsYXRpdmVzLnN0YXJ0QXhlcztcbiAgICAgICAgdmFyIGN1cnJBeGVzID0gY3Vyci5heGVzO1xuICAgICAgICBpZiAoZmlyc3RSdW4gfHwgdG9SZXN0YXJ0KSB7XG4gICAgICAgICAgICBzdGFydEF4ZXMgPSBjdXJyQXhlcztcbiAgICAgICAgICAgIHJlbGF0aXZlU3RhcnRBeGVzID0gY3VyckF4ZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0b3BHcm93aW5nQXRBc1Bvc2l0aW9ucy5ib3R0b20gfHxcbiAgICAgICAgICAgIHN0b3BHcm93aW5nQXRBc1Bvc2l0aW9ucy5sZWZ0IHx8XG4gICAgICAgICAgICBzdG9wR3Jvd2luZ0F0QXNQb3NpdGlvbnMudG9wIHx8XG4gICAgICAgICAgICBzdG9wR3Jvd2luZ0F0QXNQb3NpdGlvbnMucmlnaHQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyQXhlcy54IDwgcmVsYXRpdmVTdGFydEF4ZXMueCAtIHN0b3BHcm93aW5nQXRBc1Bvc2l0aW9ucy5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVTdGFydEF4ZXMueCA9IGN1cnJBeGVzLnggKyBzdG9wR3Jvd2luZ0F0QXNQb3NpdGlvbnMubGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyQXhlcy55IDwgcmVsYXRpdmVTdGFydEF4ZXMueSAtIHN0b3BHcm93aW5nQXRBc1Bvc2l0aW9ucy50b3ApIHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVN0YXJ0QXhlcy55ID0gY3VyckF4ZXMueSArIHN0b3BHcm93aW5nQXRBc1Bvc2l0aW9ucy50b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VyckF4ZXMueCA+IHJlbGF0aXZlU3RhcnRBeGVzLnggKyBzdG9wR3Jvd2luZ0F0QXNQb3NpdGlvbnMucmlnaHQpIHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVN0YXJ0QXhlcy54ID0gY3VyckF4ZXMueCAtIHN0b3BHcm93aW5nQXRBc1Bvc2l0aW9ucy5yaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyQXhlcy55ID5cbiAgICAgICAgICAgICAgICByZWxhdGl2ZVN0YXJ0QXhlcy55ICsgc3RvcEdyb3dpbmdBdEFzUG9zaXRpb25zLmJvdHRvbSkge1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlU3RhcnRBeGVzLnkgPSBjdXJyQXhlcy55IC0gc3RvcEdyb3dpbmdBdEFzUG9zaXRpb25zLmJvdHRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVsYXRpdmVYID0gY3VyckF4ZXMueCAtIHJlbGF0aXZlU3RhcnRBeGVzLng7XG4gICAgICAgIHZhciByZWxhdGl2ZVkgPSBjdXJyQXhlcy55IC0gcmVsYXRpdmVTdGFydEF4ZXMueTtcbiAgICAgICAgdmFyIGh5cG90ZW51c2UgPSBNYXRoLmh5cG90KHJlbGF0aXZlWCwgcmVsYXRpdmVZKTtcbiAgICAgICAgaWYgKHN0b3BHcm93aW5nQXQgJiYgaXNOdW1iZXIoc3RvcEdyb3dpbmdBdCkpIHtcbiAgICAgICAgICAgIHZhciBpc091dE9mUmFkaXggPSBoeXBvdGVudXNlID4gc3RvcEdyb3dpbmdBdDtcbiAgICAgICAgICAgIGlmIChpc091dE9mUmFkaXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2luID0gcmVsYXRpdmVZIC8gaHlwb3RlbnVzZTtcbiAgICAgICAgICAgICAgICB2YXIgY29zID0gcmVsYXRpdmVYIC8gaHlwb3RlbnVzZTtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVN0YXJ0QXhlcy54ID1cbiAgICAgICAgICAgICAgICAgICAgY29zICogKGh5cG90ZW51c2UgLSBzdG9wR3Jvd2luZ0F0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZVN0YXJ0QXhlcy54O1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlU3RhcnRBeGVzLnkgPVxuICAgICAgICAgICAgICAgICAgICBzaW4gKiAoaHlwb3RlbnVzZSAtIHN0b3BHcm93aW5nQXQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlU3RhcnRBeGVzLnk7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVYID0gY29zICogc3RvcEdyb3dpbmdBdDtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVkgPSBzaW4gKiBzdG9wR3Jvd2luZ0F0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBhbmdsZSA9ICgoTWF0aC5hdGFuMigtcmVsYXRpdmVZLCByZWxhdGl2ZVgpICogMTgwKSAvIE1hdGguUEkgKyAzNjApICUgMzYwO1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGN1cnIpLCB7IHN0YXJ0QXhlczogc3RhcnRBeGVzLCByZWxhdGl2ZXM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdXJyLnJlbGF0aXZlcyksIHsgYXhlczoge1xuICAgICAgICAgICAgICAgICAgICB4OiByZWxhdGl2ZVgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHJlbGF0aXZlWSxcbiAgICAgICAgICAgICAgICB9LCBzdGFydEF4ZXM6IHJlbGF0aXZlU3RhcnRBeGVzLCBhbmdsZTogYW5nbGUgfSkgfSk7XG4gICAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHB1dEF4ZXNCcmVha3BvaW50T3BlcmF0b3IoX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5nYXAsIGdhcCA9IF9iID09PSB2b2lkIDAgPyBBWEVTIDogX2I7XG4gICAgcmV0dXJuIHBpcGUobWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYXhlcyA9IHZhbHVlLnJlbGF0aXZlcy5heGVzO1xuICAgICAgICB2YXIgeCA9IE1hdGguZmxvb3IoYXhlcy54IC8gZ2FwLnggfHwgMSkgLSAxO1xuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoYXhlcy55IC8gZ2FwLnkgfHwgMSkgLSAxO1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHZhbHVlKSwgeyByZWxhdGl2ZXM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCB2YWx1ZS5yZWxhdGl2ZXMpLCB7IGJyZWFrcG9pbnRBeGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHksXG4gICAgICAgICAgICAgICAgfSB9KSB9KTtcbiAgICB9KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHV0RGlyZWN0aW9uT3BlcmF0b3IoaywgZGlyZWN0aW9uSywgaWdub3JlV2hlbikge1xuICAgIHJldHVybiBwaXBlKHBhaXJ3aXNlKCksIG1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF9iO1xuICAgICAgICB2YXIgbGFzdCA9IF9hWzBdLCBjdXJyID0gX2FbMV07XG4gICAgICAgIHZhciBsYXN0QXhlcyA9IGxhc3Rba107XG4gICAgICAgIHZhciBjdXJyQXhlcyA9IGN1cnJba107XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBsYXN0W2RpcmVjdGlvbktdIHx8ICcnO1xuICAgICAgICB2YXIgaXNUb0lnbm9yZSA9IGN1cnJbaWdub3JlV2hlbi5rZXldID09PSBpZ25vcmVXaGVuLnZhbHVlO1xuICAgICAgICBpZiAoIWlzVG9JZ25vcmUpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGdldERpcmVjdGlvbih7XG4gICAgICAgICAgICAgICAgYXhlczogY3VyckF4ZXMsXG4gICAgICAgICAgICAgICAgbGFzdEF4ZXM6IGxhc3RBeGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdXJyKSwgKF9iID0ge30sIF9iW2RpcmVjdGlvbktdID0gZGlyZWN0aW9uLCBfYikpO1xuICAgIH0pKTtcbn1cbiIsImV4cG9ydCB7IGZpbHRlckJ5QXR0cmlidXRlQW5kR2FwT3BlcmF0b3IsIHB1dEF4ZXNCcmVha3BvaW50T3BlcmF0b3IsIHB1dERpcmVjdGlvbk9wZXJhdG9yLCBwdXRSZWxhdGl2ZUF4ZXNPcGVyYXRvciwgfSBmcm9tICcuL2F4aXMub3BlcmF0b3JzJztcbiIsImltcG9ydCBpbnRlcnNlY3Rpb24gZnJvbSAnbG9kYXNoL2ludGVyc2VjdGlvbic7XG5pbXBvcnQgaXNOaWwgZnJvbSAnbG9kYXNoL2lzTmlsJztcbmltcG9ydCBpc051bWJlciBmcm9tICdsb2Rhc2gvaXNOdW1iZXInO1xuaW1wb3J0IHsgZ2V0Vmlld3BvcnRIZWlnaHQgfSBmcm9tICcuLi92aWV3L3ZpZXcnO1xuaW1wb3J0IHsgUE9TSVRJT05TIH0gZnJvbSAnLi9heGlzLnR5cGVzJztcbmltcG9ydCB7IGdldE1heEhvcml6b250YWxTY3JvbGwsIGdldE1heFZlcnRpY2FsU2Nyb2xsIH0gZnJvbSAnLi4vZWxlbWVudCc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKF9hKSB7XG4gICAgdmFyIGxhc3RBeGVzID0gX2EubGFzdEF4ZXMsIGF4ZXMgPSBfYS5heGVzO1xuICAgIHZhciBvblRoZVJpZ2h0ID0gbGFzdEF4ZXMueCA8IGF4ZXMueDtcbiAgICB2YXIgb25UaGVMZWZ0ID0gbGFzdEF4ZXMueCA+IGF4ZXMueDtcbiAgICB2YXIgb25Eb3duID0gbGFzdEF4ZXMueSA8IGF4ZXMueTtcbiAgICB2YXIgb25VcCA9IGxhc3RBeGVzLnkgPiBheGVzLnk7XG4gICAgaWYgKG9uVXAgJiYgb25UaGVMZWZ0KVxuICAgICAgICByZXR1cm4gJ3VwLWxlZnQnO1xuICAgIGlmIChvblVwICYmIG9uVGhlUmlnaHQpXG4gICAgICAgIHJldHVybiAndXAtcmlnaHQnO1xuICAgIGlmIChvblVwKVxuICAgICAgICByZXR1cm4gJ3VwJztcbiAgICBpZiAob25Eb3duICYmIG9uVGhlTGVmdClcbiAgICAgICAgcmV0dXJuICdkb3duLWxlZnQnO1xuICAgIGlmIChvbkRvd24gJiYgb25UaGVSaWdodClcbiAgICAgICAgcmV0dXJuICdkb3duLXJpZ2h0JztcbiAgICBpZiAob25Eb3duKVxuICAgICAgICByZXR1cm4gJ2Rvd24nO1xuICAgIGlmIChvblRoZVJpZ2h0KVxuICAgICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICBpZiAob25UaGVMZWZ0KVxuICAgICAgICByZXR1cm4gJ2xlZnQnO1xuICAgIHJldHVybiAnJztcbn1cbmV4cG9ydCB2YXIgaXNPblRoZVNhbWVEaXJlY3Rpb24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gX2EuZGlyZWN0aW9uLCBsYXN0RGlyZWN0aW9uID0gX2EubGFzdERpcmVjdGlvbjtcbiAgICB2YXIgbGFzdERpcmVjdGlvbnMgPSBbbGFzdERpcmVjdGlvbl07XG4gICAgaWYgKGxhc3REaXJlY3Rpb24gPT09ICdkb3duLWxlZnQnKSB7XG4gICAgICAgIGxhc3REaXJlY3Rpb25zID0gWydkb3duJywgJ2xlZnQnXTtcbiAgICB9XG4gICAgaWYgKGxhc3REaXJlY3Rpb24gPT09ICdkb3duLXJpZ2h0Jykge1xuICAgICAgICBsYXN0RGlyZWN0aW9ucyA9IFsnZG93bicsICdyaWdodCddO1xuICAgIH1cbiAgICBpZiAobGFzdERpcmVjdGlvbiA9PT0gJ3VwLWxlZnQnKSB7XG4gICAgICAgIGxhc3REaXJlY3Rpb25zID0gWyd1cCcsICdsZWZ0J107XG4gICAgfVxuICAgIGlmIChsYXN0RGlyZWN0aW9uID09PSAndXAtcmlnaHQnKSB7XG4gICAgICAgIGxhc3REaXJlY3Rpb25zID0gWyd1cCcsICdyaWdodCddO1xuICAgIH1cbiAgICB2YXIgZGlyZWN0aW9ucyA9IFtkaXJlY3Rpb25dO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdkb3duLWxlZnQnKSB7XG4gICAgICAgIGRpcmVjdGlvbnMgPSBbJ2Rvd24nLCAnbGVmdCddO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bi1yaWdodCcpIHtcbiAgICAgICAgZGlyZWN0aW9ucyA9IFsnZG93bicsICdyaWdodCddO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndXAtbGVmdCcpIHtcbiAgICAgICAgZGlyZWN0aW9ucyA9IFsndXAnLCAnbGVmdCddO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndXAtcmlnaHQnKSB7XG4gICAgICAgIGRpcmVjdGlvbnMgPSBbJ3VwJywgJ3JpZ2h0J107XG4gICAgfVxuICAgIHJldHVybiBCb29sZWFuKGludGVyc2VjdGlvbihsYXN0RGlyZWN0aW9ucywgZGlyZWN0aW9ucykubGVuZ3RoKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gaXNPbkdhcChfYSkge1xuICAgIHZhciBfYiwgX2M7XG4gICAgdmFyIGF4ZXMgPSBfYS5heGVzLCBsYXN0QXhlcyA9IF9hLmxhc3RBeGVzLCBnYXAgPSBfYS5nYXA7XG4gICAgdmFyIGJlT25WZXJ0aWNhbEdhcCA9IGdhcC55XG4gICAgICAgID8gTWF0aC5hYnMoYXhlcy55IC0gbGFzdEF4ZXMueSkgPCAoKF9iID0gZ2FwLnkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IDApXG4gICAgICAgIDogZmFsc2U7XG4gICAgdmFyIGJlT25Ib3Jpem9udGFsR2FwID0gZ2FwLnhcbiAgICAgICAgPyBNYXRoLmFicyhheGVzLnggLSBsYXN0QXhlcy54KSA8ICgoX2MgPSBnYXAueCkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogMClcbiAgICAgICAgOiBmYWxzZTtcbiAgICBpZiAoYmVPblZlcnRpY2FsR2FwICYmIGJlT25Ib3Jpem9udGFsR2FwKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBYm92ZVRoZVNjcmVlbihwb3NpdGlvbikge1xuICAgIHJldHVybiBwb3NpdGlvbiA8IDA7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNCZWxvd1RoZVNjcmVlbihwb3NpdGlvbikge1xuICAgIHJldHVybiBwb3NpdGlvbiA+IGdldFZpZXdwb3J0SGVpZ2h0KCk7XG59XG5leHBvcnQgdmFyIGdldFJlbGF0aXZlUG9zaXRpb24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBfYS5wb3NpdGlvbiwgX2IgPSBfYS5sYXN0UmVsYXRpdmVQb3NpdGlvbiwgbGFzdFJlbGF0aXZlUG9zaXRpb24gPSBfYiA9PT0gdm9pZCAwID8geyB4OiAwLCB5OiAwIH0gOiBfYiwgX2MgPSBfYS5sYXN0UG9zaXRpb24sIGxhc3RQb3NpdGlvbiA9IF9jID09PSB2b2lkIDAgPyB7IHg6IDAsIHk6IDAgfSA6IF9jLCBsaW1pdCA9IF9hLmxpbWl0O1xuICAgIHZhciB4ID0gbGFzdFJlbGF0aXZlUG9zaXRpb24ueCArIHBvc2l0aW9uLnggLSBsYXN0UG9zaXRpb24ueDtcbiAgICB2YXIgeSA9IGxhc3RSZWxhdGl2ZVBvc2l0aW9uLnkgKyBwb3NpdGlvbi55IC0gbGFzdFBvc2l0aW9uLnk7XG4gICAgaWYgKGxpbWl0KSB7XG4gICAgICAgIGlmIChpc051bWJlcihsaW1pdC50b3ApKVxuICAgICAgICAgICAgeSA9IE1hdGgubWF4KHksIGxpbWl0LnRvcCk7XG4gICAgICAgIGlmIChpc051bWJlcihsaW1pdC5ib3R0b20pKVxuICAgICAgICAgICAgeSA9IE1hdGgubWluKHksIGxpbWl0LmJvdHRvbSk7XG4gICAgICAgIGlmIChpc051bWJlcihsaW1pdC5sZWZ0KSlcbiAgICAgICAgICAgIHggPSBNYXRoLm1heCh4LCBsaW1pdC5sZWZ0KTtcbiAgICAgICAgaWYgKGlzTnVtYmVyKGxpbWl0LnJpZ2h0KSlcbiAgICAgICAgICAgIHggPSBNYXRoLm1pbih4LCBsaW1pdC5yaWdodCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHksXG4gICAgfTtcbn07XG5leHBvcnQgdmFyIGlzT25UaGVSZWdpb24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgcmVnaW9uID0gX2EucmVnaW9uLCBwb3NpdGlvbiA9IF9hLnBvc2l0aW9uO1xuICAgIHZhciBvbkJlbG93VGhlVG9wID0gcG9zaXRpb24ueSA+PSByZWdpb24udG9wO1xuICAgIHZhciBvbkFib3ZlVGhlQm90dG9tID0gcG9zaXRpb24ueSA8PSByZWdpb24uYm90dG9tO1xuICAgIHJldHVybiBvbkJlbG93VGhlVG9wICYmIG9uQWJvdmVUaGVCb3R0b207XG59O1xuZXhwb3J0IHZhciBpc091dE9mTGltaXQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBfYS5wb3NpdGlvbiwgX2IgPSBfYS5saW1pdCwgbGltaXQgPSBfYiA9PT0gdm9pZCAwID8gUE9TSVRJT05TIDogX2I7XG4gICAgaWYgKGxpbWl0LnRvcCkge1xuICAgICAgICB2YXIgb3V0T2ZUb3BMaW1pdCA9IHBvc2l0aW9uLnkgPCBsaW1pdC50b3A7XG4gICAgICAgIGlmIChvdXRPZlRvcExpbWl0KVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChsaW1pdC5ib3R0b20pIHtcbiAgICAgICAgdmFyIG91dE9mQm90dG9tTGltaXQgPSBwb3NpdGlvbi55ID4gbGltaXQuYm90dG9tO1xuICAgICAgICBpZiAob3V0T2ZCb3R0b21MaW1pdClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAobGltaXQubGVmdCkge1xuICAgICAgICB2YXIgb3V0T2ZMZWZ0TGltaXQgPSBwb3NpdGlvbi54IDwgbGltaXQubGVmdDtcbiAgICAgICAgaWYgKG91dE9mTGVmdExpbWl0KVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChsaW1pdC5yaWdodCkge1xuICAgICAgICB2YXIgb3V0T2ZSaWdodExpbWl0ID0gcG9zaXRpb24ueCA+IGxpbWl0LnJpZ2h0O1xuICAgICAgICBpZiAob3V0T2ZSaWdodExpbWl0KVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgdmFyIGlzU2FmZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiwgX2M7XG4gICAgdmFyIHBvc2l0aW9uID0gX2EucG9zaXRpb24sIGxhc3RQb3NpdGlvbiA9IF9hLmxhc3RQb3NpdGlvbiwgZGVib3VuY2UgPSBfYS5kZWJvdW5jZTtcbiAgICB2YXIgYmVPblZlcnRpY2FsU2FmZSA9IE1hdGguYWJzKHBvc2l0aW9uLnkgLSBsYXN0UG9zaXRpb24ueSkgPCAoKF9iID0gZGVib3VuY2UueSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMCk7XG4gICAgdmFyIGJlT25Ib3Jpem9udGFsU2FmZSA9IE1hdGguYWJzKHBvc2l0aW9uLnggLSBsYXN0UG9zaXRpb24ueCkgPCAoKF9jID0gZGVib3VuY2UueCkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogMCk7XG4gICAgaWYgKGJlT25WZXJ0aWNhbFNhZmUgJiYgYmVPbkhvcml6b250YWxTYWZlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IHZhciBpc09uR2FwT2ZFbCA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiwgX2MsIF9kLCBfZTtcbiAgICB2YXIgcG9zaXRpb24gPSBfYS5wb3NpdGlvbiwgZ2FwID0gX2EuZ2FwLCBlbCA9IF9hLmVsO1xuICAgIHZhciBiZU9uVG9wR2FwID0gcG9zaXRpb24ueSA8ICgoX2IgPSBnYXAudG9wKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAwKTtcbiAgICBpZiAoIWlzTmlsKGdhcC50b3ApICYmIGJlT25Ub3BHYXApXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHZhciBiZU9uQm90dG9tR2FwID0gcG9zaXRpb24ueSA+IGdldE1heFZlcnRpY2FsU2Nyb2xsKGVsKSAtICgoX2MgPSBnYXAuYm90dG9tKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAwKTtcbiAgICBpZiAoIWlzTmlsKGdhcC5ib3R0b20pICYmIGJlT25Cb3R0b21HYXApXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHZhciBiZU9uTGVmdEdhcCA9IHBvc2l0aW9uLnggPCAoKF9kID0gZ2FwLmxlZnQpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IDApO1xuICAgIGlmICghaXNOaWwoZ2FwLmxlZnQpICYmIGJlT25MZWZ0R2FwKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgYmVPblJpZ2h0R2FwID0gcG9zaXRpb24ueCA+IGdldE1heEhvcml6b250YWxTY3JvbGwoZWwpIC0gKChfZSA9IGdhcC5yaWdodCkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogMCk7XG4gICAgaWYgKCFpc05pbChnYXAucmlnaHQpICYmIGJlT25SaWdodEdhcClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbiIsImV4cG9ydCB2YXIgQVhFUyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG59O1xuZXhwb3J0IHZhciBQT1NJVElPTlMgPSB7XG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgdG9wOiAwLFxufTtcbiIsImV4cG9ydCB7IEF4ZXMsIEF4aXMsIERpcmVjdGlvbiwgQVhFUywgUG9zaXRpb25zLCBQT1NJVElPTlMsIH0gZnJvbSAnLi9heGlzLnR5cGVzJztcbmV4cG9ydCB7IGdldERpcmVjdGlvbiwgaXNPbkdhcCwgaXNBYm92ZVRoZVNjcmVlbiwgaXNCZWxvd1RoZVNjcmVlbiwgaXNPblRoZVNhbWVEaXJlY3Rpb24sIH0gZnJvbSAnLi9heGlzJztcbiIsImV4cG9ydCB2YXIgSVNfTk9ERV9KUyA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xudmFyIGlzUmVhZHkgPSBmYWxzZTtcbmlmICghSVNfTk9ERV9KUykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlzUmVhZHkgPSB0cnVlO1xuICAgIH0pO1xufVxuLyoqXG4gKiBFeGVjdXRlIGEgZnVuY3Rpb24gbm93IGlmIERPTUNvbnRlbnRMb2FkZWQgaGFzIGZpcmVkLCBvdGhlcndpc2UgbGlzdGVuIGZvciBpdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHVzZXMgaXNSZWFkeSBiZWNhdXNlIHRoZXJlIGlzIG5vIHJlYWxpYWJsZSB3YXkgdG8gYXNrIHRoZSBicm93c3dlciB3aGV0aGVyXG4gKiB0aGUgRE9NQ29udGVudExvYWRlZCBldmVudCBoYXMgYWxyZWFkeSBiZWVuIGZpcmVkOyB0aGVyZSdzIGEgZ2FwIGJldHdlZW4gRE9NQ29udGVudExvYWRlZFxuICogZmlyaW5nIGFuZCByZWFkeXN0YXRlPWNvbXBsZXRlLlxuICpcbiAqIEBhdXRob3IgaHRteCA8aHR0cHM6Ly9naXRodWIuY29tL2JpZ3NreXNvZnR3YXJlL2h0bXgvYmxvYi9tYXN0ZXIvc3JjL2h0bXguanM+XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgZnVuY3Rpb24gcmVhZHkoZm4pIHtcbiAgICAvLyBDaGVja2luZyByZWFkeVN0YXRlIGhlcmUgaXMgYSBmYWlsc2FmZSBpbiBjYXNlIHRoZSBodG14IHNjcmlwdCB0YWcgZW50ZXJlZCB0aGUgRE9NIGJ5XG4gICAgLy8gc29tZSBtZWFucyBvdGhlciB0aGFuIHRoZSBpbml0aWFsIHBhZ2UgbG9hZC5cbiAgICBpZiAoIUlTX05PREVfSlMgJiYgKGlzUmVhZHkgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykpIHtcbiAgICAgICAgZm4oKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghSVNfTk9ERV9KUykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZuKCk7IH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9kb2N1bWVudCc7XG4iLCJpbXBvcnQgJy4vZWxlbWVudC5zY3NzJztcbmltcG9ydCB7IEFYRVMgfSBmcm9tICcuLi9heGlzJztcbmltcG9ydCB7IHNjcm9sbFRvIH0gZnJvbSAnLi4vc2Nyb2xsJztcbmltcG9ydCB7IGdldFZpZXdwb3J0SGVpZ2h0IH0gZnJvbSAnLi4vdmlldy92aWV3JztcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxpbmdFbCh0YXJnZXQpIHtcbiAgICB2YXIgZG9jdW1lbnRUYXJnZXQgPSB0YXJnZXQ7XG4gICAgaWYgKGRvY3VtZW50VGFyZ2V0LnNjcm9sbGluZ0VsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50VGFyZ2V0LnNjcm9sbGluZ0VsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24oX2EpIHtcbiAgICB2YXIgZWwgPSBfYS5lbCwgX2IgPSBfYS52YXJpYXRpb24sIHZhcmlhdGlvbiA9IF9iID09PSB2b2lkIDAgPyB7IHg6IDAsIHk6IDAgfSA6IF9iO1xuICAgIHZhciB4ID0gTWF0aC5tYXgoMCwgZWwuc2Nyb2xsTGVmdCAtIHZhcmlhdGlvbi54KTtcbiAgICB2YXIgeSA9IE1hdGgubWF4KDAsIGVsLnNjcm9sbFRvcCAtIHZhcmlhdGlvbi55KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5LFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TGVmdChlbCkge1xuICAgIHJldHVybiBlbC5vZmZzZXRMZWZ0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcChlbCkge1xuICAgIHJldHVybiBlbC5vZmZzZXRUb3A7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SGVpZ2h0KGVsKSB7XG4gICAgcmV0dXJuIGVsLm9mZnNldEhlaWdodDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaWR0aChlbCkge1xuICAgIHJldHVybiBlbC5vZmZzZXRXaWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhIb3Jpem9udGFsU2Nyb2xsKGVsKSB7XG4gICAgcmV0dXJuIGVsLnNjcm9sbFdpZHRoIC0gZWwuY2xpZW50V2lkdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4VmVydGljYWxTY3JvbGwoZWwpIHtcbiAgICByZXR1cm4gZWwuc2Nyb2xsSGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzT3V0T2ZMaW1pdChfYSkge1xuICAgIHZhciBheGVzID0gX2EuYXhlcywgbGltaXQgPSBfYS5saW1pdCwgZWwgPSBfYS5lbDtcbiAgICBpZiAobGltaXQudG9wKSB7XG4gICAgICAgIHZhciBiZU91dE9mVG9wTGltaXQgPSBheGVzLnkgPCBsaW1pdC50b3A7XG4gICAgICAgIGlmIChiZU91dE9mVG9wTGltaXQpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGxpbWl0LmJvdHRvbSkge1xuICAgICAgICB2YXIgYmVPdXRPZkJvdHRvbUxpbWl0ID0gYXhlcy55ID4gZ2V0TWF4VmVydGljYWxTY3JvbGwoZWwpIC0gbGltaXQuYm90dG9tO1xuICAgICAgICBpZiAoYmVPdXRPZkJvdHRvbUxpbWl0KVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChsaW1pdC5yaWdodCkge1xuICAgICAgICB2YXIgYmVPdXRPZlJpZ2h0TGltaXQgPSBheGVzLnkgPiBnZXRNYXhIb3Jpem9udGFsU2Nyb2xsKGVsKSAtIGxpbWl0LnJpZ2h0O1xuICAgICAgICBpZiAoYmVPdXRPZlJpZ2h0TGltaXQpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGxpbWl0LmxlZnQpIHtcbiAgICAgICAgdmFyIGJlT3V0T2ZMZWZ0TGltaXQgPSBheGVzLnggPCBsaW1pdC5sZWZ0O1xuICAgICAgICBpZiAoYmVPdXRPZkxlZnRMaW1pdClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb25SZWxhdGl2ZVNjcmVlbihlbCkge1xuICAgIHZhciBfYSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBib3R0b20gPSBfYS5ib3R0b20sIGxlZnQgPSBfYS5sZWZ0LCB0b3AgPSBfYS50b3AsIHJpZ2h0ID0gX2EucmlnaHQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1RvcE9mRWxlbWVudEFib3ZlT2ZWaWV3cG9ydChlbCkge1xuICAgIHJldHVybiBnZXRQb3NpdGlvblJlbGF0aXZlU2NyZWVuKGVsKS50b3AgPCAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQm90dG9tT2ZFbGVtZW50QmVsb3dPZlZpZXdwb3J0KGVsKSB7XG4gICAgcmV0dXJuIGdldFBvc2l0aW9uUmVsYXRpdmVTY3JlZW4oZWwpLmJvdHRvbSA+IGdldFZpZXdwb3J0SGVpZ2h0KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBYm92ZUFuZEJlbG93U2NyZWVuKGVsKSB7XG4gICAgcmV0dXJuIChpc1RvcE9mRWxlbWVudEFib3ZlT2ZWaWV3cG9ydChlbCkgJiYgaXNCb3R0b21PZkVsZW1lbnRCZWxvd09mVmlld3BvcnQoZWwpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWwpIHtcbiAgICBpZiAoZWwgPT0gbnVsbCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9XG4gICAgdmFyIGVsSFRNTCA9IGVsO1xuICAgIHZhciBfYSA9IGdldENvbXB1dGVkU3R5bGUoZWxIVE1MKSwgb3ZlcmZsb3cgPSBfYS5vdmVyZmxvdywgb3ZlcmZsb3dYID0gX2Eub3ZlcmZsb3dYLCBvdmVyZmxvd1kgPSBfYS5vdmVyZmxvd1k7XG4gICAgdmFyIGlzT3ZlcmZsb3dZID0gb3ZlcmZsb3cgPT09ICdhdXRvJyB8fFxuICAgICAgICBvdmVyZmxvdyA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAgb3ZlcmZsb3dZID09PSAnYXV0bycgfHxcbiAgICAgICAgb3ZlcmZsb3dZID09PSAnc2Nyb2xsJztcbiAgICB2YXIgaXNPdmVyZmxvd1ggPSBvdmVyZmxvdyA9PT0gJ2F1dG8nIHx8XG4gICAgICAgIG92ZXJmbG93ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBvdmVyZmxvd1ggPT09ICdhdXRvJyB8fFxuICAgICAgICBvdmVyZmxvd1ggPT09ICdzY3JvbGwnO1xuICAgIGlmIChpc092ZXJmbG93WSAmJiBlbEhUTUwuc2Nyb2xsSGVpZ2h0ID4gZWxIVE1MLmNsaWVudEhlaWdodCkge1xuICAgICAgICBpZiAoZWxIVE1MLnRhZ05hbWUgPT09ICdCT0RZJyB8fCBlbEhUTUwudGFnTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsSFRNTDtcbiAgICB9XG4gICAgaWYgKGlzT3ZlcmZsb3dYICYmIGVsSFRNTC5zY3JvbGxXaWR0aCA+IGVsSFRNTC5jbGllbnRXaWR0aCkge1xuICAgICAgICBpZiAoZWxIVE1MLnRhZ05hbWUgPT09ICdCT0RZJyB8fCBlbEhUTUwudGFnTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsSFRNTDtcbiAgICB9XG4gICAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChlbEhUTUwucGFyZW50Tm9kZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlkZGxlUmVsYXRpdmVTY3JlZW4oZWwpIHtcbiAgICB2YXIgX2EgPSBnZXRQb3NpdGlvblJlbGF0aXZlU2NyZWVuKGVsKSwgbGVmdCA9IF9hLmxlZnQsIHRvcCA9IF9hLnRvcDtcbiAgICB2YXIgaGVpZ2h0ID0gZ2V0SGVpZ2h0KGVsKTtcbiAgICB2YXIgd2lkdGggPSBnZXRXaWR0aChlbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogbGVmdCArIHdpZHRoIC8gMixcbiAgICAgICAgeTogdG9wICsgaGVpZ2h0IC8gMixcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShfYSkge1xuICAgIHZhciBlbCA9IF9hLmVsLCBwb3NpdGlvbiA9IF9hLnBvc2l0aW9uO1xuICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoMCwgLVwiLmNvbmNhdChwb3NpdGlvbiwgXCJweCwgMClcIik7XG59XG5leHBvcnQgdmFyIHRvZ2dsZVNjcm9sbERpc2FibGVkID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIF9iO1xuICAgIHZhciBfYyA9IF9hLmVsLCBlbCA9IF9jID09PSB2b2lkIDAgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBfYywgcHJvdmlzaW9uYWxUb2dnbGUgPSBfYS50b2dnbGU7XG4gICAgdmFyIGhhc0RhdGFEaXNhYmxlZCA9ICgoX2IgPSBlbC5kYXRhc2V0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iub3ZvTm9uU2Nyb2xsYWJsZSkgPT09ICd0cnVlJztcbiAgICB2YXIgdG9nZ2xlID0gcHJvdmlzaW9uYWxUb2dnbGUgIT09IG51bGwgJiYgcHJvdmlzaW9uYWxUb2dnbGUgIT09IHZvaWQgMCA/IHByb3Zpc2lvbmFsVG9nZ2xlIDogIWhhc0RhdGFEaXNhYmxlZDtcbiAgICBmdW5jdGlvbiBoYW5kbGVQcmV2ZW50U2Nyb2xsKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmICh0b2dnbGUpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLW92by1ub24tc2Nyb2xsYWJsZScsICd0cnVlJyk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVByZXZlbnRTY3JvbGwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLW92by1ub24tc2Nyb2xsYWJsZScsICdmYWxzZScpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVQcmV2ZW50U2Nyb2xsKTtcbiAgICB9XG4gICAgcmV0dXJuIHRvZ2dsZTtcbn07XG5leHBvcnQgdmFyIHRvZ2dsZURvY3VtZW50U2Nyb2xsID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRvZ2dsZSA9IF9hLnRvZ2dsZTtcbiAgICB0b2dnbGVTY3JvbGxEaXNhYmxlZCh7IGVsOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRvZ2dsZTogdG9nZ2xlIH0pO1xuICAgIHJldHVybiB0b2dnbGVTY3JvbGxEaXNhYmxlZCh7IGVsOiBkb2N1bWVudC5ib2R5LCB0b2dnbGU6IHRvZ2dsZSB9KTtcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb25SZWxhdGl2ZU9mVGhlRG9jdW1lbnQoZWwpIHtcbiAgICB2YXIgdG9wID0gZ2V0VG9wKGVsKTtcbiAgICB2YXIgbGVmdCA9IGdldExlZnQoZWwpO1xuICAgIHZhciBoZWlnaHQgPSBnZXRIZWlnaHQoZWwpO1xuICAgIHZhciB3aWR0aCA9IGdldFdpZHRoKGVsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgYm90dG9tOiB0b3AgKyBoZWlnaHQsXG4gICAgICAgIHJpZ2h0OiBsZWZ0ICsgd2lkdGgsXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxUb0VsKF9hKSB7XG4gICAgdmFyIGVsID0gX2EuZWwsIF9iID0gX2EuZGlmZmVyZW5jZSwgZGlmZmVyZW5jZSA9IF9iID09PSB2b2lkIDAgPyBBWEVTIDogX2I7XG4gICAgdmFyIGxlZnQgPSBlbC5vZmZzZXRMZWZ0O1xuICAgIHZhciB0b3AgPSBlbC5vZmZzZXRUb3A7XG4gICAgdmFyIHNjcm9sbGluZ0VsZW1lbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWwucGFyZW50Tm9kZSk7XG4gICAgdmFyIGVsZW1lbnRUb1Njcm9sbCA9IGdldFNjcm9sbGluZ0VsKHNjcm9sbGluZ0VsZW1lbnQpO1xuICAgIGVsZW1lbnRUb1Njcm9sbC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICBzY3JvbGxUbyh7XG4gICAgICAgIGxlZnQ6IGxlZnQgLSBkaWZmZXJlbmNlLngsXG4gICAgICAgIHRvcDogdG9wIC0gZGlmZmVyZW5jZS55LFxuICAgICAgICBzY3JvbGxpbmdFbGVtZW50OiBlbGVtZW50VG9TY3JvbGwsXG4gICAgfSk7XG59XG4iLCJleHBvcnQgeyBnZXRTY3JvbGxpbmdFbCwgZ2V0U2Nyb2xsUG9zaXRpb24sIGdldExlZnQsIGdldFRvcCwgaXNPdXRPZkxpbWl0LCBpc0Fib3ZlQW5kQmVsb3dTY3JlZW4sIGlzQm90dG9tT2ZFbGVtZW50QmVsb3dPZlZpZXdwb3J0LCBpc1RvcE9mRWxlbWVudEFib3ZlT2ZWaWV3cG9ydCwgZ2V0TWF4SG9yaXpvbnRhbFNjcm9sbCwgZ2V0TWF4VmVydGljYWxTY3JvbGwsIGdldFBvc2l0aW9uUmVsYXRpdmVTY3JlZW4sIGdldFNjcm9sbFBhcmVudCwgZ2V0SGVpZ2h0LCBnZXRNaWRkbGVSZWxhdGl2ZVNjcmVlbiwgZ2V0V2lkdGgsIHRyYW5zbGF0ZSwgc2Nyb2xsVG9FbCwgfSBmcm9tICcuL2VsZW1lbnQnO1xuIiwiZXhwb3J0IHsgU2Nyb2xsYWJsZUVsZW1lbnQgfSBmcm9tICcuL3Njcm9sbC50eXBlcyc7XG5leHBvcnQgeyBzY3JvbGxUbyB9IGZyb20gJy4vc2Nyb2xsJztcbiIsImltcG9ydCB7IGdldFRvcCB9IGZyb20gJy4uL2VsZW1lbnQnO1xuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvKF9hKSB7XG4gICAgdmFyIF9iID0gX2Euc2Nyb2xsaW5nRWxlbWVudCwgc2Nyb2xsaW5nRWxlbWVudCA9IF9iID09PSB2b2lkIDAgPyB3aW5kb3cgOiBfYiwgX2MgPSBfYS50b3AsIHRvcCA9IF9jID09PSB2b2lkIDAgPyAwIDogX2MsIF9kID0gX2EubGVmdCwgbGVmdCA9IF9kID09PSB2b2lkIDAgPyAwIDogX2Q7XG4gICAgdmFyIGVsID0gc2Nyb2xsaW5nRWxlbWVudCBpbnN0YW5jZW9mIERvY3VtZW50ID8gd2luZG93IDogc2Nyb2xsaW5nRWxlbWVudDtcbiAgICBlbC5zY3JvbGxUbyh7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZG9jdW1lbnRTY3JvbGxUb0VsZW1lbnQoZWxlbWVudCkge1xuICAgIHZhciB2YWx1ZVRvU2Nyb2xsID0gZ2V0VG9wKGVsZW1lbnQpO1xuICAgIHNjcm9sbFRvKHsgdG9wOiB2YWx1ZVRvU2Nyb2xsIH0pO1xufVxuIiwiZXhwb3J0IHt9O1xuIiwiZXhwb3J0IHsgZ2V0VG90YWxWaWV3U2Nyb2xsZWQsIGdldFZpZXdwb3J0SGVpZ2h0LCBnZXRWaWV3cG9ydFdpZHRoLCB9IGZyb20gJy4vdmlldyc7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9ydFdpZHRoKCkge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbFZpZXdTY3JvbGxlZChwb3NpdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHBvc2l0aW9uLnggKyBnZXRWaWV3cG9ydFdpZHRoKCksXG4gICAgICAgIHk6IHBvc2l0aW9uLnkgKyBnZXRWaWV3cG9ydEhlaWdodCgpLFxuICAgIH07XG59XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJleHBvcnQgKiBmcm9tICcuL2FwaS9zY3JvbGwnO1xuZXhwb3J0ICogZnJvbSAnLi9hcGkvdG91Y2gnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlsaXRpZXMvYXhpcyc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxpdGllcy9lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbGl0aWVzL3Njcm9sbCc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxpdGllcy92aWV3JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbGl0aWVzL2RvY3VtZW50JztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
