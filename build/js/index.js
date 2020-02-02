/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ScrollEvents.js":
/*!*****************************!*\
  !*** ./src/ScrollEvents.js ***!
  \*****************************/
/*! exports provided: getScrollTopMax, getScrollLeftMax, getScrollingElement, getScrollPosition, getRelativeScrollPosition, getDirection, isSafe, isOnGap, isOutOfLimit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollTopMax", function() { return getScrollTopMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollLeftMax", function() { return getScrollLeftMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollingElement", function() { return getScrollingElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollPosition", function() { return getScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativeScrollPosition", function() { return getRelativeScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirection", function() { return getDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafe", function() { return isSafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnGap", function() { return isOnGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOutOfLimit", function() { return isOutOfLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollEvents; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'jo-validate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

function getScrollTopMax(scrollingElement) {
  return scrollingElement.scrollHeight - scrollingElement.clientHeight;
}
function getScrollLeftMax(scrollingElement) {
  return scrollingElement.scrollWidth - scrollingElement.clientWidth;
}
function getScrollingElement(target) {
  if (target.scrollingElement) return target.scrollingElement;
  return target;
}
function getScrollPosition({
  scrollingElement,
  relativeStart = {
    x: 0,
    y: 0
  }
}) {
  const x = scrollingElement.scrollLeft - relativeStart.x;
  const y = scrollingElement.scrollTop - relativeStart.y;
  return {
    x,
    y
  };
}
function getRelativeScrollPosition({
  lastRelativeScrollPosition,
  scrollPosition,
  lastScrollPosition,
  limit
}) {
  let x = lastRelativeScrollPosition.x + scrollPosition.x - lastScrollPosition.x;
  let y = lastRelativeScrollPosition.y + scrollPosition.y - lastScrollPosition.y;

  if (limit) {
    if (y < limit.top) y = limit.top;
    if (y > limit.bottom) y = limit.bottom;
    if (x < limit.left) x = limit.left;
    if (x > limit.right) x = limit.right;
  }

  return {
    x,
    y
  };
}
function getDirection({
  lastScrollPosition,
  scrollPosition
}) {
  if (lastScrollPosition.x < scrollPosition.x) {
    return 'right';
  }

  if (lastScrollPosition.x > scrollPosition.x) {
    return 'left';
  }

  if (lastScrollPosition.y < scrollPosition.y) {
    return 'down';
  }

  if (lastScrollPosition.y > scrollPosition.y) {
    return 'up';
  }

  return null;
}
function isSafe({
  scrollPosition,
  lastScrolledPosition,
  debounce
}) {
  const beOnVerticalSafe = Math.abs(scrollPosition.y - lastScrolledPosition.y) < debounce.y;
  const beOnHorizontalSafe = Math.abs(scrollPosition.x - lastScrolledPosition.x) < debounce.x;
  if (beOnVerticalSafe && beOnHorizontalSafe) return true;
  return false;
}
function isOnGap({
  scrollPosition,
  gap,
  scrollingElement
}) {
  const beOnTopGap = scrollPosition.y < gap.top;
  if (gap.top !== null && beOnTopGap) return true;
  const beOnBottomGap = scrollPosition.y > getScrollTopMax(scrollingElement) - gap.bottom;
  if (gap.bottom !== null && beOnBottomGap) return true;
  const beOnLeftGap = scrollPosition.x < gap.left;
  if (gap.left !== null && beOnLeftGap) return true;
  const beOnRightGap = scrollPosition.x > getScrollLeftMax(scrollingElement) - gap.right;
  if (gap.right !== null && beOnRightGap) return true;
  return false;
}
function isOutOfLimit({
  relativeScrollPosition,
  limit = {}
}) {
  // console.log(limit.top, isNumber(limit.top));
  if (!(function webpackMissingModule() { var e = new Error("Cannot find module 'jo-validate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(limit.top)) {
    const outOfTopLimit = relativeScrollPosition.y <= limit.top;
    if (outOfTopLimit) return true;
  }

  if (!(function webpackMissingModule() { var e = new Error("Cannot find module 'jo-validate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(limit.bottom)) {
    const outOfBottomLimit = relativeScrollPosition.y >= limit.bottom;
    if (outOfBottomLimit) return true;
  }

  if (limit.left) {
    const outOfLeftLimit = relativeScrollPosition.x <= limit.left;
    if (outOfLeftLimit) return true;
  }

  if (limit.right) {
    const outOfRightLimit = relativeScrollPosition.x >= limit.right;
    if (outOfRightLimit) return true;
  }

  return false;
}
function ScrollEvents({
  el = document,
  onScroll,
  onlyOnChangedDirection,
  onlyOnDirection,
  gap = {
    top: null,
    bottom: null,
    left: null,
    right: null
  },
  debounce = {
    x: 0,
    y: 0
  },
  limit = null,
  lazyTime = 0
} = {}) {
  const scrollingElement = getScrollingElement(el);
  let lastRelativeScrollPosition = {
    x: 0,
    y: 0
  };
  let lastScrolledPosition = getScrollPosition({
    scrollingElement
  });
  let lastScrollPosition = lastScrolledPosition;
  let lastTimeout = 0;
  let lastDirection = null;

  function handleScroll(event) {
    function isToScroll({
      changedDirection,
      scrollPosition,
      direction
    }) {
      if (onlyOnChangedDirection && !changedDirection) return false;
      if (isOnGap({
        scrollPosition,
        gap,
        scrollingElement
      })) return false;
      if (isSafe({
        scrollPosition,
        lastScrolledPosition,
        debounce
      })) return false;
      if (onlyOnDirection && onlyOnDirection !== direction) return false;
      if (limit && isOutOfLimit({
        relativeScrollPosition: lastRelativeScrollPosition,
        limit
      })) return false;
      return true;
    }

    const scrollPosition = getScrollPosition({
      scrollingElement
    });
    const relativeScrollPosition = getRelativeScrollPosition({
      lastRelativeScrollPosition,
      lastScrollPosition,
      scrollPosition,
      limit
    });
    const direction = getDirection({
      lastScrollPosition,
      scrollPosition
    });
    const changedDirection = lastDirection !== direction;
    const toScroll = isToScroll({
      changedDirection,
      scrollPosition,
      direction,
      relativeScrollPosition
    });
    const timeout = window.setTimeout(() => {
      if (onScroll && toScroll) {
        onScroll({
          event,
          scrollingElement,
          scrollPosition,
          direction,
          changedDirection,
          relativeScrollPosition
        });
      }
    }, lazyTime);
    lastDirection = direction;
    lastScrollPosition = scrollPosition;
    lastRelativeScrollPosition = relativeScrollPosition;

    if (toScroll) {
      clearTimeout(lastTimeout);
      lastTimeout = timeout;
      lastScrolledPosition = scrollPosition;
    }
  }

  function bindEvents() {
    el.addEventListener('scroll', handleScroll);
  }

  bindEvents();
  return {
    el,
    onScroll,
    onlyOnChangedDirection,
    onlyOnDirection,
    gap,
    debounce,
    lazyTime,
    lastScrolledPosition,
    scrollingElement
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollEvents */ "./src/ScrollEvents.js");

const direction = document.querySelector('#direction');
const element = document.querySelector('#element');
const x = document.querySelector('#x');
const y = document.querySelector('#y');
const rx = document.querySelector('#r-x');
const ry = document.querySelector('#r-y');

function handleScroll(args) {
  direction.innerHTML = args.direction;
  x.innerHTML = args.scrollPosition.x;
  y.innerHTML = args.scrollPosition.y;
  element.innerHTML = args.scrollingElement.tagName;
}

Object(_ScrollEvents__WEBPACK_IMPORTED_MODULE_0__["default"])({
  onScroll: handleScroll,
  // onlyOnChangedDirection: true,
  // onlyOnDirection: 'up',
  gap: {
    top: 300,
    bottom: 300
  },
  debounce: {
    x: 30,
    y: 30
  } // lazyTime: 400,

});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Njcm9sbEV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0U2Nyb2xsVG9wTWF4Iiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImdldFNjcm9sbExlZnRNYXgiLCJzY3JvbGxXaWR0aCIsImNsaWVudFdpZHRoIiwiZ2V0U2Nyb2xsaW5nRWxlbWVudCIsInRhcmdldCIsImdldFNjcm9sbFBvc2l0aW9uIiwicmVsYXRpdmVTdGFydCIsIngiLCJ5Iiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImdldFJlbGF0aXZlU2Nyb2xsUG9zaXRpb24iLCJsYXN0UmVsYXRpdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFBvc2l0aW9uIiwibGFzdFNjcm9sbFBvc2l0aW9uIiwibGltaXQiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJnZXREaXJlY3Rpb24iLCJpc1NhZmUiLCJsYXN0U2Nyb2xsZWRQb3NpdGlvbiIsImRlYm91bmNlIiwiYmVPblZlcnRpY2FsU2FmZSIsIk1hdGgiLCJhYnMiLCJiZU9uSG9yaXpvbnRhbFNhZmUiLCJpc09uR2FwIiwiZ2FwIiwiYmVPblRvcEdhcCIsImJlT25Cb3R0b21HYXAiLCJiZU9uTGVmdEdhcCIsImJlT25SaWdodEdhcCIsImlzT3V0T2ZMaW1pdCIsInJlbGF0aXZlU2Nyb2xsUG9zaXRpb24iLCJpc051bWJlciIsIm91dE9mVG9wTGltaXQiLCJvdXRPZkJvdHRvbUxpbWl0Iiwib3V0T2ZMZWZ0TGltaXQiLCJvdXRPZlJpZ2h0TGltaXQiLCJTY3JvbGxFdmVudHMiLCJlbCIsImRvY3VtZW50Iiwib25TY3JvbGwiLCJvbmx5T25DaGFuZ2VkRGlyZWN0aW9uIiwib25seU9uRGlyZWN0aW9uIiwibGF6eVRpbWUiLCJsYXN0VGltZW91dCIsImxhc3REaXJlY3Rpb24iLCJoYW5kbGVTY3JvbGwiLCJldmVudCIsImlzVG9TY3JvbGwiLCJjaGFuZ2VkRGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwidG9TY3JvbGwiLCJ0aW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImJpbmRFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvciIsImVsZW1lbnQiLCJyeCIsInJ5IiwiYXJncyIsImlubmVySFRNTCIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTQSxlQUFULENBQXlCQyxnQkFBekIsRUFBMkM7QUFDaEQsU0FBT0EsZ0JBQWdCLENBQUNDLFlBQWpCLEdBQWdDRCxnQkFBZ0IsQ0FBQ0UsWUFBeEQ7QUFDRDtBQUVNLFNBQVNDLGdCQUFULENBQTBCSCxnQkFBMUIsRUFBNEM7QUFDakQsU0FBT0EsZ0JBQWdCLENBQUNJLFdBQWpCLEdBQStCSixnQkFBZ0IsQ0FBQ0ssV0FBdkQ7QUFDRDtBQUVNLFNBQVNDLG1CQUFULENBQTZCQyxNQUE3QixFQUFxQztBQUMxQyxNQUFJQSxNQUFNLENBQUNQLGdCQUFYLEVBQTZCLE9BQU9PLE1BQU0sQ0FBQ1AsZ0JBQWQ7QUFFN0IsU0FBT08sTUFBUDtBQUNEO0FBRU0sU0FBU0MsaUJBQVQsQ0FBMkI7QUFBRVIsa0JBQUY7QUFBb0JTLGVBQWEsR0FBRztBQUFFQyxLQUFDLEVBQUUsQ0FBTDtBQUFRQyxLQUFDLEVBQUU7QUFBWDtBQUFwQyxDQUEzQixFQUFpRjtBQUN0RixRQUFNRCxDQUFDLEdBQUdWLGdCQUFnQixDQUFDWSxVQUFqQixHQUE4QkgsYUFBYSxDQUFDQyxDQUF0RDtBQUNBLFFBQU1DLENBQUMsR0FBR1gsZ0JBQWdCLENBQUNhLFNBQWpCLEdBQTZCSixhQUFhLENBQUNFLENBQXJEO0FBRUEsU0FBTztBQUNMRCxLQURLO0FBRUxDO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBU0cseUJBQVQsQ0FBbUM7QUFBRUMsNEJBQUY7QUFBOEJDLGdCQUE5QjtBQUE4Q0Msb0JBQTlDO0FBQWtFQztBQUFsRSxDQUFuQyxFQUE4RztBQUNuSCxNQUFJUixDQUFDLEdBQUdLLDBCQUEwQixDQUFDTCxDQUEzQixHQUErQk0sY0FBYyxDQUFDTixDQUE5QyxHQUFrRE8sa0JBQWtCLENBQUNQLENBQTdFO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHSSwwQkFBMEIsQ0FBQ0osQ0FBM0IsR0FBK0JLLGNBQWMsQ0FBQ0wsQ0FBOUMsR0FBa0RNLGtCQUFrQixDQUFDTixDQUE3RTs7QUFFQSxNQUFJTyxLQUFKLEVBQVc7QUFDVCxRQUFJUCxDQUFDLEdBQUdPLEtBQUssQ0FBQ0MsR0FBZCxFQUFtQlIsQ0FBQyxHQUFHTyxLQUFLLENBQUNDLEdBQVY7QUFDbkIsUUFBSVIsQ0FBQyxHQUFHTyxLQUFLLENBQUNFLE1BQWQsRUFBc0JULENBQUMsR0FBR08sS0FBSyxDQUFDRSxNQUFWO0FBQ3RCLFFBQUlWLENBQUMsR0FBR1EsS0FBSyxDQUFDRyxJQUFkLEVBQW9CWCxDQUFDLEdBQUdRLEtBQUssQ0FBQ0csSUFBVjtBQUNwQixRQUFJWCxDQUFDLEdBQUdRLEtBQUssQ0FBQ0ksS0FBZCxFQUFxQlosQ0FBQyxHQUFHUSxLQUFLLENBQUNJLEtBQVY7QUFDdEI7O0FBRUQsU0FBTztBQUNMWixLQURLO0FBRUxDO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBU1ksWUFBVCxDQUFzQjtBQUFFTixvQkFBRjtBQUFzQkQ7QUFBdEIsQ0FBdEIsRUFBOEQ7QUFDbkUsTUFBSUMsa0JBQWtCLENBQUNQLENBQW5CLEdBQXVCTSxjQUFjLENBQUNOLENBQTFDLEVBQTZDO0FBQzNDLFdBQU8sT0FBUDtBQUNEOztBQUVELE1BQUlPLGtCQUFrQixDQUFDUCxDQUFuQixHQUF1Qk0sY0FBYyxDQUFDTixDQUExQyxFQUE2QztBQUMzQyxXQUFPLE1BQVA7QUFDRDs7QUFFRCxNQUFJTyxrQkFBa0IsQ0FBQ04sQ0FBbkIsR0FBdUJLLGNBQWMsQ0FBQ0wsQ0FBMUMsRUFBNkM7QUFDM0MsV0FBTyxNQUFQO0FBQ0Q7O0FBRUQsTUFBSU0sa0JBQWtCLENBQUNOLENBQW5CLEdBQXVCSyxjQUFjLENBQUNMLENBQTFDLEVBQTZDO0FBQzNDLFdBQU8sSUFBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNEO0FBRU0sU0FBU2EsTUFBVCxDQUFnQjtBQUFFUixnQkFBRjtBQUFrQlMsc0JBQWxCO0FBQXdDQztBQUF4QyxDQUFoQixFQUFvRTtBQUN6RSxRQUFNQyxnQkFBZ0IsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNiLGNBQWMsQ0FBQ0wsQ0FBZixHQUFtQmMsb0JBQW9CLENBQUNkLENBQWpELElBQXNEZSxRQUFRLENBQUNmLENBQXhGO0FBQ0EsUUFBTW1CLGtCQUFrQixHQUFHRixJQUFJLENBQUNDLEdBQUwsQ0FBU2IsY0FBYyxDQUFDTixDQUFmLEdBQW1CZSxvQkFBb0IsQ0FBQ2YsQ0FBakQsSUFBc0RnQixRQUFRLENBQUNoQixDQUExRjtBQUVBLE1BQUlpQixnQkFBZ0IsSUFBSUcsa0JBQXhCLEVBQTRDLE9BQU8sSUFBUDtBQUU1QyxTQUFPLEtBQVA7QUFDRDtBQUVNLFNBQVNDLE9BQVQsQ0FBaUI7QUFBRWYsZ0JBQUY7QUFBa0JnQixLQUFsQjtBQUF1QmhDO0FBQXZCLENBQWpCLEVBQTREO0FBQ2pFLFFBQU1pQyxVQUFVLEdBQUdqQixjQUFjLENBQUNMLENBQWYsR0FBbUJxQixHQUFHLENBQUNiLEdBQTFDO0FBQ0EsTUFBSWEsR0FBRyxDQUFDYixHQUFKLEtBQVksSUFBWixJQUFvQmMsVUFBeEIsRUFBb0MsT0FBTyxJQUFQO0FBRXBDLFFBQU1DLGFBQWEsR0FBR2xCLGNBQWMsQ0FBQ0wsQ0FBZixHQUFvQlosZUFBZSxDQUFDQyxnQkFBRCxDQUFmLEdBQW9DZ0MsR0FBRyxDQUFDWixNQUFsRjtBQUNBLE1BQUlZLEdBQUcsQ0FBQ1osTUFBSixLQUFlLElBQWYsSUFBdUJjLGFBQTNCLEVBQTBDLE9BQU8sSUFBUDtBQUUxQyxRQUFNQyxXQUFXLEdBQUduQixjQUFjLENBQUNOLENBQWYsR0FBbUJzQixHQUFHLENBQUNYLElBQTNDO0FBQ0EsTUFBSVcsR0FBRyxDQUFDWCxJQUFKLEtBQWEsSUFBYixJQUFxQmMsV0FBekIsRUFBc0MsT0FBTyxJQUFQO0FBRXRDLFFBQU1DLFlBQVksR0FBR3BCLGNBQWMsQ0FBQ04sQ0FBZixHQUFvQlAsZ0JBQWdCLENBQUNILGdCQUFELENBQWhCLEdBQXFDZ0MsR0FBRyxDQUFDVixLQUFsRjtBQUNBLE1BQUlVLEdBQUcsQ0FBQ1YsS0FBSixLQUFjLElBQWQsSUFBc0JjLFlBQTFCLEVBQXdDLE9BQU8sSUFBUDtBQUV4QyxTQUFPLEtBQVA7QUFDRDtBQUVNLFNBQVNDLFlBQVQsQ0FBc0I7QUFBRUMsd0JBQUY7QUFBMEJwQixPQUFLLEdBQUc7QUFBbEMsQ0FBdEIsRUFBOEQ7QUFDbkU7QUFFQSxNQUFJcUIscUlBQVEsQ0FBQ3JCLEtBQUssQ0FBQ0MsR0FBUCxDQUFaLEVBQXlCO0FBQ3ZCLFVBQU1xQixhQUFhLEdBQUdGLHNCQUFzQixDQUFDM0IsQ0FBdkIsSUFBNEJPLEtBQUssQ0FBQ0MsR0FBeEQ7QUFDQSxRQUFJcUIsYUFBSixFQUFtQixPQUFPLElBQVA7QUFDcEI7O0FBRUQsTUFBSUQscUlBQVEsQ0FBQ3JCLEtBQUssQ0FBQ0UsTUFBUCxDQUFaLEVBQTRCO0FBQzFCLFVBQU1xQixnQkFBZ0IsR0FBR0gsc0JBQXNCLENBQUMzQixDQUF2QixJQUE0Qk8sS0FBSyxDQUFDRSxNQUEzRDtBQUNBLFFBQUlxQixnQkFBSixFQUFzQixPQUFPLElBQVA7QUFDdkI7O0FBRUQsTUFBSXZCLEtBQUssQ0FBQ0csSUFBVixFQUFnQjtBQUNkLFVBQU1xQixjQUFjLEdBQUdKLHNCQUFzQixDQUFDNUIsQ0FBdkIsSUFBNEJRLEtBQUssQ0FBQ0csSUFBekQ7QUFDQSxRQUFJcUIsY0FBSixFQUFvQixPQUFPLElBQVA7QUFDckI7O0FBRUQsTUFBSXhCLEtBQUssQ0FBQ0ksS0FBVixFQUFpQjtBQUNmLFVBQU1xQixlQUFlLEdBQUdMLHNCQUFzQixDQUFDNUIsQ0FBdkIsSUFBNEJRLEtBQUssQ0FBQ0ksS0FBMUQ7QUFDQSxRQUFJcUIsZUFBSixFQUFxQixPQUFPLElBQVA7QUFDdEI7O0FBRUQsU0FBTyxLQUFQO0FBQ0Q7QUFFYyxTQUFTQyxZQUFULENBQXNCO0FBQ25DQyxJQUFFLEdBQUdDLFFBRDhCO0FBRW5DQyxVQUZtQztBQUduQ0Msd0JBSG1DO0FBSW5DQyxpQkFKbUM7QUFLbkNqQixLQUFHLEdBQUc7QUFDSmIsT0FBRyxFQUFFLElBREQ7QUFFSkMsVUFBTSxFQUFFLElBRko7QUFHSkMsUUFBSSxFQUFFLElBSEY7QUFJSkMsU0FBSyxFQUFFO0FBSkgsR0FMNkI7QUFXbkNJLFVBQVEsR0FBRztBQUNUaEIsS0FBQyxFQUFFLENBRE07QUFFVEMsS0FBQyxFQUFFO0FBRk0sR0FYd0I7QUFlbkNPLE9BQUssR0FBRyxJQWYyQjtBQWdCbkNnQyxVQUFRLEdBQUc7QUFoQndCLElBaUJqQyxFQWpCVyxFQWlCUDtBQUNOLFFBQU1sRCxnQkFBZ0IsR0FBR00sbUJBQW1CLENBQUN1QyxFQUFELENBQTVDO0FBQ0EsTUFBSTlCLDBCQUEwQixHQUFHO0FBQUVMLEtBQUMsRUFBRSxDQUFMO0FBQVFDLEtBQUMsRUFBRTtBQUFYLEdBQWpDO0FBQ0EsTUFBSWMsb0JBQW9CLEdBQUdqQixpQkFBaUIsQ0FBQztBQUFFUjtBQUFGLEdBQUQsQ0FBNUM7QUFDQSxNQUFJaUIsa0JBQWtCLEdBQUdRLG9CQUF6QjtBQUNBLE1BQUkwQixXQUFXLEdBQUcsQ0FBbEI7QUFDQSxNQUFJQyxhQUFhLEdBQUcsSUFBcEI7O0FBRUEsV0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0IsYUFBU0MsVUFBVCxDQUFvQjtBQUNsQkMsc0JBRGtCO0FBRWxCeEMsb0JBRmtCO0FBR2xCeUM7QUFIa0IsS0FBcEIsRUFJRztBQUNELFVBQUlULHNCQUFzQixJQUFJLENBQUNRLGdCQUEvQixFQUFpRCxPQUFPLEtBQVA7QUFDakQsVUFBSXpCLE9BQU8sQ0FBQztBQUFFZixzQkFBRjtBQUFrQmdCLFdBQWxCO0FBQXVCaEM7QUFBdkIsT0FBRCxDQUFYLEVBQXdELE9BQU8sS0FBUDtBQUN4RCxVQUFJd0IsTUFBTSxDQUFDO0FBQUVSLHNCQUFGO0FBQWtCUyw0QkFBbEI7QUFBd0NDO0FBQXhDLE9BQUQsQ0FBVixFQUFnRSxPQUFPLEtBQVA7QUFDaEUsVUFBSXVCLGVBQWUsSUFBSUEsZUFBZSxLQUFLUSxTQUEzQyxFQUFzRCxPQUFPLEtBQVA7QUFDdEQsVUFBSXZDLEtBQUssSUFBSW1CLFlBQVksQ0FBQztBQUFFQyw4QkFBc0IsRUFBRXZCLDBCQUExQjtBQUFzREc7QUFBdEQsT0FBRCxDQUF6QixFQUEwRixPQUFPLEtBQVA7QUFFMUYsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTUYsY0FBYyxHQUFHUixpQkFBaUIsQ0FBQztBQUFFUjtBQUFGLEtBQUQsQ0FBeEM7QUFDQSxVQUFNc0Msc0JBQXNCLEdBQUd4Qix5QkFBeUIsQ0FBQztBQUFFQyxnQ0FBRjtBQUE4QkUsd0JBQTlCO0FBQWtERCxvQkFBbEQ7QUFBa0VFO0FBQWxFLEtBQUQsQ0FBeEQ7QUFDQSxVQUFNdUMsU0FBUyxHQUFHbEMsWUFBWSxDQUFDO0FBQUVOLHdCQUFGO0FBQXNCRDtBQUF0QixLQUFELENBQTlCO0FBQ0EsVUFBTXdDLGdCQUFnQixHQUFHSixhQUFhLEtBQUtLLFNBQTNDO0FBQ0EsVUFBTUMsUUFBUSxHQUFHSCxVQUFVLENBQUM7QUFDMUJDLHNCQUQwQjtBQUUxQnhDLG9CQUYwQjtBQUcxQnlDLGVBSDBCO0FBSTFCbkI7QUFKMEIsS0FBRCxDQUEzQjtBQU9BLFVBQU1xQixPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixNQUFNO0FBQ3RDLFVBQUlkLFFBQVEsSUFBSVcsUUFBaEIsRUFBMEI7QUFDeEJYLGdCQUFRLENBQUM7QUFDUE8sZUFETztBQUVQdEQsMEJBRk87QUFHUGdCLHdCQUhPO0FBSVB5QyxtQkFKTztBQUtQRCwwQkFMTztBQU1QbEI7QUFOTyxTQUFELENBQVI7QUFRRDtBQUNGLEtBWGUsRUFXYlksUUFYYSxDQUFoQjtBQWFBRSxpQkFBYSxHQUFHSyxTQUFoQjtBQUNBeEMsc0JBQWtCLEdBQUdELGNBQXJCO0FBQ0FELDhCQUEwQixHQUFHdUIsc0JBQTdCOztBQUVBLFFBQUlvQixRQUFKLEVBQWM7QUFDWkksa0JBQVksQ0FBQ1gsV0FBRCxDQUFaO0FBQ0FBLGlCQUFXLEdBQUdRLE9BQWQ7QUFDQWxDLDBCQUFvQixHQUFHVCxjQUF2QjtBQUNEO0FBQ0Y7O0FBRUQsV0FBUytDLFVBQVQsR0FBc0I7QUFDcEJsQixNQUFFLENBQUNtQixnQkFBSCxDQUFvQixRQUFwQixFQUE4QlgsWUFBOUI7QUFDRDs7QUFFRFUsWUFBVTtBQUVWLFNBQU87QUFDTGxCLE1BREs7QUFFTEUsWUFGSztBQUdMQywwQkFISztBQUlMQyxtQkFKSztBQUtMakIsT0FMSztBQU1MTixZQU5LO0FBT0x3QixZQVBLO0FBUUx6Qix3QkFSSztBQVNMekI7QUFUSyxHQUFQO0FBV0QsQzs7Ozs7Ozs7Ozs7O0FDOU1EO0FBQUE7QUFBQTtBQUVBLE1BQU15RCxTQUFTLEdBQUdYLFFBQVEsQ0FBQ21CLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdwQixRQUFRLENBQUNtQixhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0EsTUFBTXZELENBQUMsR0FBR29DLFFBQVEsQ0FBQ21CLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVjtBQUNBLE1BQU10RCxDQUFDLEdBQUdtQyxRQUFRLENBQUNtQixhQUFULENBQXVCLElBQXZCLENBQVY7QUFDQSxNQUFNRSxFQUFFLEdBQUdyQixRQUFRLENBQUNtQixhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQSxNQUFNRyxFQUFFLEdBQUd0QixRQUFRLENBQUNtQixhQUFULENBQXVCLE1BQXZCLENBQVg7O0FBRUEsU0FBU1osWUFBVCxDQUFzQmdCLElBQXRCLEVBQTRCO0FBQzFCWixXQUFTLENBQUNhLFNBQVYsR0FBc0JELElBQUksQ0FBQ1osU0FBM0I7QUFDQS9DLEdBQUMsQ0FBQzRELFNBQUYsR0FBY0QsSUFBSSxDQUFDckQsY0FBTCxDQUFvQk4sQ0FBbEM7QUFDQUMsR0FBQyxDQUFDMkQsU0FBRixHQUFjRCxJQUFJLENBQUNyRCxjQUFMLENBQW9CTCxDQUFsQztBQUNBdUQsU0FBTyxDQUFDSSxTQUFSLEdBQW9CRCxJQUFJLENBQUNyRSxnQkFBTCxDQUFzQnVFLE9BQTFDO0FBQ0Q7O0FBRUQzQiw2REFBWSxDQUFDO0FBQ1hHLFVBQVEsRUFBRU0sWUFEQztBQUVYO0FBQ0E7QUFDQXJCLEtBQUcsRUFBRTtBQUNIYixPQUFHLEVBQUUsR0FERjtBQUVIQyxVQUFNLEVBQUU7QUFGTCxHQUpNO0FBUVhNLFVBQVEsRUFBRTtBQUNSaEIsS0FBQyxFQUFFLEVBREs7QUFFUkMsS0FBQyxFQUFFO0FBRkssR0FSQyxDQVlYOztBQVpXLENBQUQsQ0FBWixDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJ2pvLXZhbGlkYXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbFRvcE1heChzY3JvbGxpbmdFbGVtZW50KSB7XG4gIHJldHVybiBzY3JvbGxpbmdFbGVtZW50LnNjcm9sbEhlaWdodCAtIHNjcm9sbGluZ0VsZW1lbnQuY2xpZW50SGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdE1heChzY3JvbGxpbmdFbGVtZW50KSB7XG4gIHJldHVybiBzY3JvbGxpbmdFbGVtZW50LnNjcm9sbFdpZHRoIC0gc2Nyb2xsaW5nRWxlbWVudC5jbGllbnRXaWR0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbGluZ0VsZW1lbnQodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQuc2Nyb2xsaW5nRWxlbWVudCkgcmV0dXJuIHRhcmdldC5zY3JvbGxpbmdFbGVtZW50O1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbih7IHNjcm9sbGluZ0VsZW1lbnQsIHJlbGF0aXZlU3RhcnQgPSB7IHg6IDAsIHk6IDAgfSB9KSB7XG4gIGNvbnN0IHggPSBzY3JvbGxpbmdFbGVtZW50LnNjcm9sbExlZnQgLSByZWxhdGl2ZVN0YXJ0Lng7XG4gIGNvbnN0IHkgPSBzY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCAtIHJlbGF0aXZlU3RhcnQueTtcblxuICByZXR1cm4ge1xuICAgIHgsXG4gICAgeVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVsYXRpdmVTY3JvbGxQb3NpdGlvbih7IGxhc3RSZWxhdGl2ZVNjcm9sbFBvc2l0aW9uLCBzY3JvbGxQb3NpdGlvbiwgbGFzdFNjcm9sbFBvc2l0aW9uLCBsaW1pdCB9KSB7XG4gIGxldCB4ID0gbGFzdFJlbGF0aXZlU2Nyb2xsUG9zaXRpb24ueCArIHNjcm9sbFBvc2l0aW9uLnggLSBsYXN0U2Nyb2xsUG9zaXRpb24ueDtcbiAgbGV0IHkgPSBsYXN0UmVsYXRpdmVTY3JvbGxQb3NpdGlvbi55ICsgc2Nyb2xsUG9zaXRpb24ueSAtIGxhc3RTY3JvbGxQb3NpdGlvbi55O1xuXG4gIGlmIChsaW1pdCkge1xuICAgIGlmICh5IDwgbGltaXQudG9wKSB5ID0gbGltaXQudG9wO1xuICAgIGlmICh5ID4gbGltaXQuYm90dG9tKSB5ID0gbGltaXQuYm90dG9tO1xuICAgIGlmICh4IDwgbGltaXQubGVmdCkgeCA9IGxpbWl0LmxlZnQ7XG4gICAgaWYgKHggPiBsaW1pdC5yaWdodCkgeCA9IGxpbWl0LnJpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpcmVjdGlvbih7IGxhc3RTY3JvbGxQb3NpdGlvbiwgc2Nyb2xsUG9zaXRpb24gfSkge1xuICBpZiAobGFzdFNjcm9sbFBvc2l0aW9uLnggPCBzY3JvbGxQb3NpdGlvbi54KSB7XG4gICAgcmV0dXJuICdyaWdodCc7XG4gIH1cblxuICBpZiAobGFzdFNjcm9sbFBvc2l0aW9uLnggPiBzY3JvbGxQb3NpdGlvbi54KSB7XG4gICAgcmV0dXJuICdsZWZ0JztcbiAgfVxuXG4gIGlmIChsYXN0U2Nyb2xsUG9zaXRpb24ueSA8IHNjcm9sbFBvc2l0aW9uLnkpIHtcbiAgICByZXR1cm4gJ2Rvd24nO1xuICB9XG5cbiAgaWYgKGxhc3RTY3JvbGxQb3NpdGlvbi55ID4gc2Nyb2xsUG9zaXRpb24ueSkge1xuICAgIHJldHVybiAndXAnO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhZmUoeyBzY3JvbGxQb3NpdGlvbiwgbGFzdFNjcm9sbGVkUG9zaXRpb24sIGRlYm91bmNlIH0pIHtcbiAgY29uc3QgYmVPblZlcnRpY2FsU2FmZSA9IE1hdGguYWJzKHNjcm9sbFBvc2l0aW9uLnkgLSBsYXN0U2Nyb2xsZWRQb3NpdGlvbi55KSA8IGRlYm91bmNlLnk7XG4gIGNvbnN0IGJlT25Ib3Jpem9udGFsU2FmZSA9IE1hdGguYWJzKHNjcm9sbFBvc2l0aW9uLnggLSBsYXN0U2Nyb2xsZWRQb3NpdGlvbi54KSA8IGRlYm91bmNlLng7XG5cbiAgaWYgKGJlT25WZXJ0aWNhbFNhZmUgJiYgYmVPbkhvcml6b250YWxTYWZlKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09uR2FwKHsgc2Nyb2xsUG9zaXRpb24sIGdhcCwgc2Nyb2xsaW5nRWxlbWVudCB9KSB7XG4gIGNvbnN0IGJlT25Ub3BHYXAgPSBzY3JvbGxQb3NpdGlvbi55IDwgZ2FwLnRvcDtcbiAgaWYgKGdhcC50b3AgIT09IG51bGwgJiYgYmVPblRvcEdhcCkgcmV0dXJuIHRydWU7XG5cbiAgY29uc3QgYmVPbkJvdHRvbUdhcCA9IHNjcm9sbFBvc2l0aW9uLnkgPiAoZ2V0U2Nyb2xsVG9wTWF4KHNjcm9sbGluZ0VsZW1lbnQpIC0gZ2FwLmJvdHRvbSk7XG4gIGlmIChnYXAuYm90dG9tICE9PSBudWxsICYmIGJlT25Cb3R0b21HYXApIHJldHVybiB0cnVlO1xuXG4gIGNvbnN0IGJlT25MZWZ0R2FwID0gc2Nyb2xsUG9zaXRpb24ueCA8IGdhcC5sZWZ0O1xuICBpZiAoZ2FwLmxlZnQgIT09IG51bGwgJiYgYmVPbkxlZnRHYXApIHJldHVybiB0cnVlO1xuXG4gIGNvbnN0IGJlT25SaWdodEdhcCA9IHNjcm9sbFBvc2l0aW9uLnggPiAoZ2V0U2Nyb2xsTGVmdE1heChzY3JvbGxpbmdFbGVtZW50KSAtIGdhcC5yaWdodCk7XG4gIGlmIChnYXAucmlnaHQgIT09IG51bGwgJiYgYmVPblJpZ2h0R2FwKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc091dE9mTGltaXQoeyByZWxhdGl2ZVNjcm9sbFBvc2l0aW9uLCBsaW1pdCA9IHt9IH0pIHtcbiAgLy8gY29uc29sZS5sb2cobGltaXQudG9wLCBpc051bWJlcihsaW1pdC50b3ApKTtcblxuICBpZiAoaXNOdW1iZXIobGltaXQudG9wKSkge1xuICAgIGNvbnN0IG91dE9mVG9wTGltaXQgPSByZWxhdGl2ZVNjcm9sbFBvc2l0aW9uLnkgPD0gbGltaXQudG9wO1xuICAgIGlmIChvdXRPZlRvcExpbWl0KSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc051bWJlcihsaW1pdC5ib3R0b20pKSB7XG4gICAgY29uc3Qgb3V0T2ZCb3R0b21MaW1pdCA9IHJlbGF0aXZlU2Nyb2xsUG9zaXRpb24ueSA+PSBsaW1pdC5ib3R0b207XG4gICAgaWYgKG91dE9mQm90dG9tTGltaXQpIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGxpbWl0LmxlZnQpIHtcbiAgICBjb25zdCBvdXRPZkxlZnRMaW1pdCA9IHJlbGF0aXZlU2Nyb2xsUG9zaXRpb24ueCA8PSBsaW1pdC5sZWZ0O1xuICAgIGlmIChvdXRPZkxlZnRMaW1pdCkgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAobGltaXQucmlnaHQpIHtcbiAgICBjb25zdCBvdXRPZlJpZ2h0TGltaXQgPSByZWxhdGl2ZVNjcm9sbFBvc2l0aW9uLnggPj0gbGltaXQucmlnaHQ7XG4gICAgaWYgKG91dE9mUmlnaHRMaW1pdCkgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbEV2ZW50cyh7XG4gIGVsID0gZG9jdW1lbnQsXG4gIG9uU2Nyb2xsLFxuICBvbmx5T25DaGFuZ2VkRGlyZWN0aW9uLFxuICBvbmx5T25EaXJlY3Rpb24sXG4gIGdhcCA9IHtcbiAgICB0b3A6IG51bGwsXG4gICAgYm90dG9tOiBudWxsLFxuICAgIGxlZnQ6IG51bGwsXG4gICAgcmlnaHQ6IG51bGxcbiAgfSxcbiAgZGVib3VuY2UgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIGxpbWl0ID0gbnVsbCxcbiAgbGF6eVRpbWUgPSAwXG59ID0ge30pIHtcbiAgY29uc3Qgc2Nyb2xsaW5nRWxlbWVudCA9IGdldFNjcm9sbGluZ0VsZW1lbnQoZWwpO1xuICBsZXQgbGFzdFJlbGF0aXZlU2Nyb2xsUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgbGV0IGxhc3RTY3JvbGxlZFBvc2l0aW9uID0gZ2V0U2Nyb2xsUG9zaXRpb24oeyBzY3JvbGxpbmdFbGVtZW50IH0pO1xuICBsZXQgbGFzdFNjcm9sbFBvc2l0aW9uID0gbGFzdFNjcm9sbGVkUG9zaXRpb247XG4gIGxldCBsYXN0VGltZW91dCA9IDA7XG4gIGxldCBsYXN0RGlyZWN0aW9uID0gbnVsbDtcblxuICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoZXZlbnQpIHtcbiAgICBmdW5jdGlvbiBpc1RvU2Nyb2xsKHtcbiAgICAgIGNoYW5nZWREaXJlY3Rpb24sXG4gICAgICBzY3JvbGxQb3NpdGlvbixcbiAgICAgIGRpcmVjdGlvblxuICAgIH0pIHtcbiAgICAgIGlmIChvbmx5T25DaGFuZ2VkRGlyZWN0aW9uICYmICFjaGFuZ2VkRGlyZWN0aW9uKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoaXNPbkdhcCh7IHNjcm9sbFBvc2l0aW9uLCBnYXAsIHNjcm9sbGluZ0VsZW1lbnQgfSkpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChpc1NhZmUoeyBzY3JvbGxQb3NpdGlvbiwgbGFzdFNjcm9sbGVkUG9zaXRpb24sIGRlYm91bmNlIH0pKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAob25seU9uRGlyZWN0aW9uICYmIG9ubHlPbkRpcmVjdGlvbiAhPT0gZGlyZWN0aW9uKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobGltaXQgJiYgaXNPdXRPZkxpbWl0KHsgcmVsYXRpdmVTY3JvbGxQb3NpdGlvbjogbGFzdFJlbGF0aXZlU2Nyb2xsUG9zaXRpb24sIGxpbWl0IH0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gZ2V0U2Nyb2xsUG9zaXRpb24oeyBzY3JvbGxpbmdFbGVtZW50IH0pO1xuICAgIGNvbnN0IHJlbGF0aXZlU2Nyb2xsUG9zaXRpb24gPSBnZXRSZWxhdGl2ZVNjcm9sbFBvc2l0aW9uKHsgbGFzdFJlbGF0aXZlU2Nyb2xsUG9zaXRpb24sIGxhc3RTY3JvbGxQb3NpdGlvbiwgc2Nyb2xsUG9zaXRpb24sIGxpbWl0IH0pO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGdldERpcmVjdGlvbih7IGxhc3RTY3JvbGxQb3NpdGlvbiwgc2Nyb2xsUG9zaXRpb24gfSk7XG4gICAgY29uc3QgY2hhbmdlZERpcmVjdGlvbiA9IGxhc3REaXJlY3Rpb24gIT09IGRpcmVjdGlvbjtcbiAgICBjb25zdCB0b1Njcm9sbCA9IGlzVG9TY3JvbGwoe1xuICAgICAgY2hhbmdlZERpcmVjdGlvbixcbiAgICAgIHNjcm9sbFBvc2l0aW9uLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgcmVsYXRpdmVTY3JvbGxQb3NpdGlvblxuICAgIH0pO1xuXG4gICAgY29uc3QgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChvblNjcm9sbCAmJiB0b1Njcm9sbCkge1xuICAgICAgICBvblNjcm9sbCh7XG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgc2Nyb2xsaW5nRWxlbWVudCxcbiAgICAgICAgICBzY3JvbGxQb3NpdGlvbixcbiAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgY2hhbmdlZERpcmVjdGlvbixcbiAgICAgICAgICByZWxhdGl2ZVNjcm9sbFBvc2l0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIGxhenlUaW1lKTtcblxuICAgIGxhc3REaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgbGFzdFNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG4gICAgbGFzdFJlbGF0aXZlU2Nyb2xsUG9zaXRpb24gPSByZWxhdGl2ZVNjcm9sbFBvc2l0aW9uO1xuXG4gICAgaWYgKHRvU2Nyb2xsKSB7XG4gICAgICBjbGVhclRpbWVvdXQobGFzdFRpbWVvdXQpO1xuICAgICAgbGFzdFRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgbGFzdFNjcm9sbGVkUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbCxcbiAgICBvblNjcm9sbCxcbiAgICBvbmx5T25DaGFuZ2VkRGlyZWN0aW9uLFxuICAgIG9ubHlPbkRpcmVjdGlvbixcbiAgICBnYXAsXG4gICAgZGVib3VuY2UsXG4gICAgbGF6eVRpbWUsXG4gICAgbGFzdFNjcm9sbGVkUG9zaXRpb24sXG4gICAgc2Nyb2xsaW5nRWxlbWVudFxuICB9O1xufVxuIiwiaW1wb3J0IFNjcm9sbEV2ZW50cyBmcm9tICcuL1Njcm9sbEV2ZW50cyc7XG5cbmNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXJlY3Rpb24nKTtcbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWxlbWVudCcpO1xuY29uc3QgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN4Jyk7XG5jb25zdCB5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3knKTtcbmNvbnN0IHJ4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3IteCcpO1xuY29uc3QgcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjci15Jyk7XG5cbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbChhcmdzKSB7XG4gIGRpcmVjdGlvbi5pbm5lckhUTUwgPSBhcmdzLmRpcmVjdGlvbjtcbiAgeC5pbm5lckhUTUwgPSBhcmdzLnNjcm9sbFBvc2l0aW9uLng7XG4gIHkuaW5uZXJIVE1MID0gYXJncy5zY3JvbGxQb3NpdGlvbi55O1xuICBlbGVtZW50LmlubmVySFRNTCA9IGFyZ3Muc2Nyb2xsaW5nRWxlbWVudC50YWdOYW1lO1xufVxuXG5TY3JvbGxFdmVudHMoe1xuICBvblNjcm9sbDogaGFuZGxlU2Nyb2xsLFxuICAvLyBvbmx5T25DaGFuZ2VkRGlyZWN0aW9uOiB0cnVlLFxuICAvLyBvbmx5T25EaXJlY3Rpb246ICd1cCcsXG4gIGdhcDoge1xuICAgIHRvcDogMzAwLFxuICAgIGJvdHRvbTogMzAwXG4gIH0sXG4gIGRlYm91bmNlOiB7XG4gICAgeDogMzAsXG4gICAgeTogMzBcbiAgfSxcbiAgLy8gbGF6eVRpbWU6IDQwMCxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==