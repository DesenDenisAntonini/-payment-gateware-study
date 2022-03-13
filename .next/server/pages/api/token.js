"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/token";
exports.ids = ["pages/api/token"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/token.js":
/*!****************************!*\
  !*** ./pages/api/token.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const stripe = __webpack_require__(/*! stripe */ \"stripe\")('pk_test_51Kbz0hAK2uIKVwRUCQzQ8jC1uQiEcJIZF1FeSyCImYtTCj6iDVLSKJrfanbtMptqBq8m9eYuETiCbzbGrLR7E0sW00DKm1k2vj');\n    const token = await stripe.tokens.create({\n        card: req.body.card\n    });\n    res.status(200).json(token);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9rZW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM3QyxLQUFLLENBQUNDLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxFQUFFLENBQTZHO0lBRTlJLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ0YsTUFBTSxDQUFDRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDQyxJQUFJLEVBQUVQLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDRCxJQUFJO0lBQ3ZCLENBQUM7SUFFRE4sR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNOLEtBQUs7QUFDNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BheW1lbnQtZ2F0ZXdhcmUtc3R1ZHkvLi9wYWdlcy9hcGkvdG9rZW4uanM/N2NlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykoJ3BrX3Rlc3RfNTFLYnowaEFLMnVJS1Z3UlVDUXpROGpDMXVRaUVjSklaRjFGZVN5Q0ltWXRUQ2o2aURWTFNLSnJmYW5idE1wdHFCcThtOWVZdUVUaUNiemJHckxSN0Uwc1cwMERLbTFrMnZqJylcbiAgXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUudG9rZW5zLmNyZWF0ZSh7XG4gICAgICAgIGNhcmQ6IHJlcS5ib2R5LmNhcmQsXG4gICAgfSlcbiAgXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24odG9rZW4pXG4gIH1cbiAgIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdHJpcGUiLCJyZXF1aXJlIiwidG9rZW4iLCJ0b2tlbnMiLCJjcmVhdGUiLCJjYXJkIiwiYm9keSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/token.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/token.js"));
module.exports = __webpack_exports__;

})();