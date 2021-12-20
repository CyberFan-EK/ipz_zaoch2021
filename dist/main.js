/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/price */ \"./src/modules/price.js\");\n/* harmony import */ var _modules_hotsale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/hotsale */ \"./src/modules/hotsale.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_hotsale__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_price__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack://9cc54816ae90ba2abbc15f5124d70c74/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Инкапсулируем код создав функцию cart иначе если мы будем использоватьв других файлах названия переменных к примеру cartModal будет ошибка. Мы замкнули переменные в определенной области видимости\r\nconst cart = ()=> {\r\n    const cardButton = document.getElementById('cart')\r\nconst cartModal = document.querySelector('.cart')\r\nconst cartClose = cartModal.querySelector('.cart-close')\r\n\r\nconst openCart = ()=> {\r\n    cartModal.style.display=\"flex\"\r\n}\r\n\r\nconst closeCart = ()=> {\r\n    cartModal.style.display=\"none\"\r\n}\r\n\r\n\r\n\r\ncardButton.addEventListener('click', openCart)\r\ncartClose.addEventListener('click', closeCart)\r\n}\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n// такой подход называется инкапсуляция кода\n\n//# sourceURL=webpack://9cc54816ae90ba2abbc15f5124d70c74/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = ()=> {\r\nconst catalogButton = document.querySelector('.catalog-button > button')\r\nconst catalogModal = document.querySelector('.catalog')\r\nconst catalogModalItems = document.querySelectorAll('.catalog-list li')\r\n\r\nlet isOpen = false\r\ncatalogButton.addEventListener('click', ()=> {\r\n    isOpen=!isOpen\r\n    if(isOpen) {\r\n        catalogModal.style.display=\"flex\"\r\n    } else {\r\n        catalogModal.style.display=\"none\"\r\n    }\r\n    \r\n})\r\n\r\ncatalogModalItems.forEach(item=> {\r\nitem.addEventListener('click', (event)=> {\r\nconsole.log(item.textContent);\r\n\r\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(goodsItems => {\r\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.filterCatalog)(goodsItems, item.textContent) )\r\n\r\n})\r\n\r\n\r\n})\r\n})\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://9cc54816ae90ba2abbc15f5124d70c74/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterSearch\": () => (/* binding */ filterSearch),\n/* harmony export */   \"filterCatalog\": () => (/* binding */ filterCatalog),\n/* harmony export */   \"filterPrice\": () => (/* binding */ filterPrice),\n/* harmony export */   \"filterSale\": () => (/* binding */ filterSale)\n/* harmony export */ });\nconst filterSearch = (goods,value)=> {\r\nreturn goods.filter(item=> item.title.toLowerCase().includes(value.toLowerCase()))\r\n}\r\n\r\nconst filterCatalog = (goods,value)=> {\r\n    return goods.filter(item=> item.category===value)\r\n    }\r\n\r\n    const filterPrice = (goods,priceMax, priceMin)=> {\r\n    \r\n        return goods.filter((item)=> item.price>priceMin && item.price<priceMax)\r\n        }\r\n    \r\n\r\n        const filterSale = (goods, toogle)=> {\r\n    \r\n            return goods.filter((item)=> item.sale===toogle)\r\n            }\r\n        \r\n    \n\n//# sourceURL=webpack://9cc54816ae90ba2abbc15f5124d70c74/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData =()=> {\r\n       return  fetch('https://testozon-56a8e-default-rtdb.firebaseio.com/goods.json')\r\n    .then(response => response.json())\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://9cc54816ae90ba2abbc15f5124d70c74/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/hotsale.js":
/*!********************************!*\
  !*** ./src/modules/hotsale.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst hotsale = ()=> {\r\nconst filterCheckCheckbox = document.querySelector('.filter-check_checkbox')\r\nfilterCheckCheckbox.addEventListener('click', ()=>{\r\n    \r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(goodsItems => {\r\n        ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.filterSale)(goodsItems, filterCheckCheckbox.checked) ) \r\n       })\r\n    console.log(filterCheckCheckbox.checked);\r\n\r\n})\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hotsale);\n\n//# sourceURL=webpack://9cc54816ae90ba2abbc15f5124d70c74/./src/modules/hotsale.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n// Инкапсулируем код создав функцию cart иначе если мы будем использоватьв других файлах названия переменных к примеру cartModal будет ошибка. Мы замкнули переменные в определенной области видимости\r\n\r\n\r\n\r\nconst load = ()=> {\r\n  const cardButton = document.getElementById('cart')\r\n  \r\n  ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data))\r\n  cardButton.addEventListener('click',()=>{\r\n    // postData().then(data => console.log(data))\r\n  \r\n  })\r\n}\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n// такой подход называется инкапсуляция кода\n\n//# sourceURL=webpack://9cc54816ae90ba2abbc15f5124d70c74/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/price.js":
/*!******************************!*\
  !*** ./src/modules/price.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst price = ()=> {\r\n\r\nconst minPrice = document.getElementById('min')\r\nconst maxPrice = document.getElementById('max')\r\n\r\nmaxPrice.addEventListener('input', ()=> {\r\n    if(minPrice.value) {\r\n\r\n    } else {\r\n        minPrice.value =0\r\n    } \r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(goodsItems => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.filterPrice)(goodsItems, maxPrice.value, minPrice.value) ) \r\n       })\r\n     \r\n})\r\n\r\nminPrice.addEventListener('input', ()=> {\r\n    if(maxPrice.value) {\r\n\r\n    } else {\r\n        maxPrice.value =0\r\n    } \r\n   (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(goodsItems => {\r\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.filterPrice)(goodsItems, maxPrice.value, minPrice.value) ) \r\n   })\r\n     \r\n})\r\n\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (price);\n\n//# sourceURL=webpack://9cc54816ae90ba2abbc15f5124d70c74/./src/modules/price.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods)=> {\r\n    const goodsContainer = document.querySelector('.goods')\r\n    //т.к. insertAdjacentHTML при обновлении будет добавлять все время контент перед каждым рендером мы будем чистить контейнер\r\n    goodsContainer.innerHTML = \"\"\r\ngoods.forEach(goodsItem => {\r\n    goodsContainer.insertAdjacentHTML('beforeend', `\r\n                            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n                               ${goodsItem.sale?'<div class=\"card-sale\">🔥Hot Sale🔥</div>':''}\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"card-img-top\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-image: url('${goodsItem.img}')\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-price\">${goodsItem.price} ₴</div>\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n    \r\n    \r\n    `)\r\n   \r\n});\r\n\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://9cc54816ae90ba2abbc15f5124d70c74/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = ()=> {\r\nconst searchWrapperInput = document.querySelector('.search-wrapper_input')\r\nsearchWrapperInput.addEventListener('input', (event)=> {\r\n const value = event.target.value;\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(goodsItems => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.filterSearch)(goodsItems, value) )\r\n        \r\n    })\r\n\r\n})\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://9cc54816ae90ba2abbc15f5124d70c74/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;