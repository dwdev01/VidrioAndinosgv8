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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/tailwind.css":
/*!******************************!*\
  !*** ./src/css/tailwind.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/js/components/menu.js");
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/breadcrumb */ "./src/js/components/breadcrumb.js");


Object(_components_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();

if (document.getElementById('breadcrumbContainer') !== null) {
  Object(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/***/ }),

/***/ "./src/js/components/breadcrumb.js":
/*!*****************************************!*\
  !*** ./src/js/components/breadcrumb.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return breadCrumb; });
function breadCrumb() {
  var breadCrumbList = document.getElementById("breadcrumbList") != null ? document.getElementById("breadcrumbList") : null;

  if (breadCrumbList) {
    for (var i = 0; i < breadCrumbList.childElementCount; i++) {
      if (i == 0) {
        breadCrumbList.children[0].firstElementChild.innerHTML = "<i class=\"icon-home\"></i>";
      }

      if (i != breadCrumbList.childElementCount - 1) {
        breadCrumbList.children[i].innerHTML += "<i class=\"icon-right-big mr-1\"></i>";
      }
    }

    if (document.getElementById("breadcrumbContainer") != null) {
      setTimeout(function () {
        document.getElementById("breadcrumbContainer").classList.remove("opacity-0");
      }, 100);
    }
  }

  var breadcrumbContent = document.getElementById("breadcrumbContent") != null ? document.getElementById("breadcrumbContent") : null;
  var breadcrumbTitle = document.getElementById("breadcrumbTitle") != null ? document.getElementById("breadcrumbTitle").innerHTML : breadCrumbList.lastElementChild.textContent;
  var breadcrumbDescription = document.getElementById("breadcrumbDescription") != null ? document.getElementById("breadcrumbDescription") : null;

  if (breadcrumbContent) {
    if (breadcrumbTitle) {
      breadcrumbContent.firstElementChild.innerHTML = breadcrumbTitle;
    } else {
      breadcrumbContent.firstElementChild.classList.add("hidden");
    }

    if (breadcrumbDescription) {
      breadcrumbContent.lastElementChild.innerHTML = breadcrumbDescription.innerHTML;
      breadcrumbDescription.parentElement.classList.add("hidden");
    } else {
      breadcrumbContent.lastElementChild.classList.add("hidden");
    }
  } else {
    document.getElementById("breadcrumbContent").classList.add("hidden");
  }
}

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return navMenu; });
function navMenu() {
  var buttonHamburger = document.querySelector(".hamburger");
  var buttonsHamburger = document.querySelectorAll(".hamburger");
  var header = document.querySelector("header");
  var menuList = document.querySelector(".vd-menu__container");
  buttonsHamburger.forEach(function (item) {
    item.addEventListener("click", function () {
      buttonHamburger.classList.toggle("is-active");
      header.classList.toggle("overflow-y-auto");
      header.classList.toggle("h-full");
      menuList.classList.toggle("hidden");
    });
  });
}

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/js/app.js ./src/css/tailwind.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/altguerrero/Proyects/VidrioAndinosgv8/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /home/altguerrero/Proyects/VidrioAndinosgv8/src/css/tailwind.css */"./src/css/tailwind.css");


/***/ })

/******/ });