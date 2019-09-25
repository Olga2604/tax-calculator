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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// let content = document.getElementById('quotes'), // element into which to insert the compiled information\n//     src = document.getElementById('quotes-template').innerHTML, // markup of the template\n//     template = Handlebars.compile(src), // compiles the template in use\n//     html = template(quotes); // compiles the data into the template\n//\n// content.innerHTML = html; // renders to the DOM\n\nvar netSalary, grossSalary, totalTaxes, personalIncomeTax, pension, socialInsurance, medicalInsurance, injuryFee, monthlyTaxes, yearTaxes;\ninit();\ndocument.querySelector('.btn-close').addEventListener('click', clearSalaryInput);\n\nfunction init() {\n  netSalary = document.getElementById('net-salary');\n  grossSalary = 0;\n  totalTaxes = 0;\n  personalIncomeTax = 0;\n  pension = 0;\n  socialInsurance = 0;\n  medicalInsurance = 0;\n  injuryFee = 0;\n  monthlyTaxes = 0;\n  yearTaxes = 0;\n  document.querySelector('.btn-close').style.display = 'none';\n}\n\nfunction roundNumber(value) {\n  return Number(value.toFixed());\n}\n\nfunction getPensionTax(value) {\n  var calculatedPension;\n\n  if (value <= 1150000) {\n    calculatedPension = value * 0.22 / 12;\n    return calculatedPension;\n  } else {\n    calculatedPension = (1150000 * 0.22 + (value - 1150000) * 0.1) / 12;\n    return calculatedPension;\n  }\n}\n\nfunction getSocialInsuranceTax(value) {\n  var calculatedSocialInsurance;\n\n  if (value <= 865000) {\n    calculatedSocialInsurance = value * .029 / 100 / 12;\n    return calculatedSocialInsurance;\n  } else {\n    calculatedSocialInsurance = 865000 * 0.29 / 100 / 12;\n    return calculatedSocialInsurance;\n  }\n}\n\ndocument.querySelector('#calculateTaxes').addEventListener('click', function calculateMonthlyTaxAmount() {\n  if (netSalary.value) {\n    var yearSalary = netSalary.value * 12;\n    grossSalary = roundNumber(yearSalary * 100 / 87);\n    personalIncomeTax = roundNumber(yearSalary * 13 / 87 / 12);\n    pension = roundNumber(getPensionTax(yearSalary));\n    socialInsurance = roundNumber(getSocialInsuranceTax(yearSalary));\n    medicalInsurance = roundNumber(grossSalary * 0.51 / 100 / 12);\n    injuryFee = roundNumber(grossSalary * 0.2 / 100 / 12);\n    monthlyTaxes = roundNumber(personalIncomeTax + pension + socialInsurance + medicalInsurance + injuryFee);\n    yearTaxes = monthlyTaxes * 12;\n    document.querySelector('#personal-income-tax').textContent = \"\".concat(personalIncomeTax, \" \\u0440\\u0443\\u0431.\");\n    document.querySelector('#pension').textContent = \"\".concat(pension, \" \\u0440\\u0443\\u0431.\");\n    document.querySelector('#social-insurance').textContent = \"\".concat(socialInsurance, \" \\u0440\\u0443\\u0431.\");\n    document.querySelector('#medical-insurance').textContent = \"\".concat(medicalInsurance, \" \\u0440\\u0443\\u0431.\");\n    document.querySelector('#injury-fee').textContent = \"\".concat(injuryFee, \" \\u0440\\u0443\\u0431.\");\n    document.querySelector('#monthly-taxes').textContent = \"\".concat(monthlyTaxes, \" \\u0440\\u0443\\u0431.\");\n    document.querySelector('#year-taxes').textContent = \"\".concat(yearTaxes, \" \\u0440\\u0443\\u0431.\");\n    document.querySelector('.btn-close').style.display = 'block';\n  }\n});\n\nfunction clearSalaryInput() {\n  document.getElementById('net-salary').value = null;\n\n  _toConsumableArray(document.querySelectorAll('.tax')).map(function (e) {\n    return e.textContent = '0 руб.';\n  });\n\n  document.querySelector('.btn-close').style.display = 'none';\n  init();\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });