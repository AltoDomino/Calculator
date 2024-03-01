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

/***/ "./calculator.ts":
/*!***********************!*\
  !*** ./calculator.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Childrens_1 = __webpack_require__(/*! ./src/Childrens */ \"./src/Childrens.ts\");\nconst generalDiv_1 = __webpack_require__(/*! ./src/generalDiv */ \"./src/generalDiv.ts\");\nconst buttons_1 = __webpack_require__(/*! ./src/buttons */ \"./src/buttons.ts\");\nconst classCalculator_1 = __webpack_require__(/*! ./src/classCalculator */ \"./src/classCalculator.ts\");\nconst divs_1 = __webpack_require__(/*! ./src/divs */ \"./src/divs.ts\");\nconst result = (0, divs_1.divElement)(\"result\", \"0\");\nconst sign = (0, divs_1.divElement)(\"sign\", \"+\");\nconst leftSide = (0, buttons_1.Button)(() => calc.setActive(\"left\"), \"0\", \"left\");\nconst rightSide = (0, buttons_1.Button)(() => calc.setActive(\"right\"), \"0\", \"right\");\nconst calculate = (0, buttons_1.Button)(() => calc.getResult(), \"CALCULATE\", \"calculate\");\nleftSide.style.borderWidth = \"3px\";\n(0, generalDiv_1.generalDiv)({ children: [result, calculate,\n        (0, Childrens_1.Childrens)(\"operation\", \"\", { children: [leftSide, sign, rightSide] }),\n        (0, Childrens_1.Childrens)(\"options\", \"\", { children: [\n                (0, buttons_1.Button)(() => calc.setSign(\"+\"), \"+\", \"add\"),\n                (0, buttons_1.Button)(() => calc.setSign(\"-\"), \"-\", \"minus\"),\n                (0, buttons_1.Button)(() => calc.setSign(\"*\"), \"*\", \"multi\"),\n                (0, buttons_1.Button)(() => calc.setSign(\"/\"), \"/\", \"division\")\n            ] }),\n        (0, Childrens_1.Childrens)(\"row\", \"\", { children: [\n                (0, buttons_1.Button)(() => calc.setNumber(\"1\"), \"1\", \"number_1\"),\n                (0, buttons_1.Button)(() => calc.setNumber(\"2\"), \"2\", \"two\"),\n                (0, buttons_1.Button)(() => calc.setNumber(\"3\"), \"3\", \"number_3\")\n            ] }),\n        (0, Childrens_1.Childrens)(\"row\", \"\", { children: [\n                (0, buttons_1.Button)(() => calc.setNumber(\"4\"), \"4\", \"four\"),\n                (0, buttons_1.Button)(() => calc.setNumber(\"5\"), \"5\", \"five\"),\n                (0, buttons_1.Button)(() => calc.setNumber(\"6\"), \"6\", \"six\")\n            ] }),\n        (0, Childrens_1.Childrens)(\"row\", \"\", { children: [\n                (0, buttons_1.Button)(() => calc.setNumber(\"7\"), \"7\", \"seven\"),\n                (0, buttons_1.Button)(() => calc.setNumber(\"8\"), \"8\", \"eight\"),\n                (0, buttons_1.Button)(() => calc.setNumber(\"9\"), \"9\", \"nine\")\n            ] }),\n        (0, Childrens_1.Childrens)(\"row\", \"\", { children: [\n                (0, buttons_1.Button)(() => calc.deleteNumber(), \"0\", \"Number_10\"),\n                (0, buttons_1.Button)(() => calc.fraction(), \".\", \"fraction\"),\n                (0, buttons_1.Button)(() => calc.setNumber(\"0\"), \"0\", \"Number_12\")\n            ] })\n    ] });\nconst calc = new classCalculator_1.Calculator(sign, result, leftSide, rightSide);\n\n\n//# sourceURL=webpack://calculator/./calculator.ts?");

/***/ }),

/***/ "./src/Childrens.ts":
/*!**************************!*\
  !*** ./src/Childrens.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Childrens = void 0;\nconst Childrens = (className, innerHTML, { children }) => {\n    const Childrens = document.createElement(\"div\");\n    Childrens.className = className;\n    Childrens.innerHTML = innerHTML;\n    children.forEach((child) => { Childrens.appendChild(child); });\n    return Childrens;\n};\nexports.Childrens = Childrens;\n\n\n//# sourceURL=webpack://calculator/./src/Childrens.ts?");

/***/ }),

/***/ "./src/buttons.ts":
/*!************************!*\
  !*** ./src/buttons.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Button = void 0;\nconst Button = (onClick, innerHtml, className) => {\n    const button = document.createElement(\"button\");\n    button.className = className;\n    button.innerHTML = innerHtml;\n    button.onclick = () => onClick();\n    return button;\n};\nexports.Button = Button;\n\n\n//# sourceURL=webpack://calculator/./src/buttons.ts?");

/***/ }),

/***/ "./src/classCalculator.ts":
/*!********************************!*\
  !*** ./src/classCalculator.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Calculator = void 0;\nclass Calculator {\n    constructor(sign, result, left, right) {\n        this.setSign = (newSign) => {\n            this.sign.innerHTML = newSign;\n        };\n        this.getResult = () => {\n            switch (this.sign.innerHTML) {\n                case \"+\":\n                    this.result.innerHTML = (+this.left.innerHTML + +this.right.innerHTML).toString();\n                    break;\n                case \"-\":\n                    this.result.innerHTML = (+this.left.innerHTML - +this.right.innerHTML).toString();\n                    break;\n                case \"/\":\n                    this.result.innerHTML = (+this.left.innerHTML / +this.right.innerHTML).toString();\n                    break;\n                case \"*\":\n                    this.result.innerHTML = (+this.left.innerHTML * +this.right.innerHTML).toString();\n                    break;\n                default:\n                    console.log(\"Wrong sign\");\n            }\n        };\n        this.setActive = (side) => {\n            this.activeSide = side === 'left' ? this.left : this.right;\n            this.left.style.borderWidth = this.left === this.activeSide ? '3px' : '1px';\n            this.right.style.borderWidth = this.right === this.activeSide ? '3px' : '1px';\n        };\n        this.setNumber = (number) => {\n            this.activeSide.innerHTML = this.activeSide.innerHTML === '0' ? number : this.activeSide.innerHTML + number;\n        };\n        this.deleteNumber = () => {\n            this.activeSide.innerHTML = this.activeSide.innerHTML.length === 1 ? '0' : this.activeSide.innerHTML.slice(0, -1);\n        };\n        this.fraction = () => {\n            this.activeSide.innerHTML = this.activeSide.innerHTML.includes('.') ? this.activeSide.innerHTML : this.activeSide.innerHTML + '.';\n        };\n        this.result = result;\n        this.left = left;\n        this.right = right;\n        this.activeSide = left;\n        this.sign = sign;\n    }\n}\nexports.Calculator = Calculator;\n\n\n//# sourceURL=webpack://calculator/./src/classCalculator.ts?");

/***/ }),

/***/ "./src/divs.ts":
/*!*********************!*\
  !*** ./src/divs.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.divElement = void 0;\nconst divElement = (className, innerHtml) => {\n    const div = document.createElement(\"div\");\n    div.className = className;\n    div.innerHTML = innerHtml;\n    return div;\n};\nexports.divElement = divElement;\n\n\n//# sourceURL=webpack://calculator/./src/divs.ts?");

/***/ }),

/***/ "./src/generalDiv.ts":
/*!***************************!*\
  !*** ./src/generalDiv.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.generalDiv = void 0;\nconst generalDiv = ({ children }) => {\n    const root = document.getElementById('calculator');\n    root.className = 'calculator';\n    children.forEach(child => {\n        root.appendChild(child);\n    });\n    return root;\n};\nexports.generalDiv = generalDiv;\n\n\n//# sourceURL=webpack://calculator/./src/generalDiv.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./calculator.ts");
/******/ 	
/******/ })()
;