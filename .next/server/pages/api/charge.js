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
exports.id = "pages/api/charge";
exports.ids = ["pages/api/charge"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/charge.js":
/*!*****************************!*\
  !*** ./pages/api/charge.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const stripe = __webpack_require__(/*! stripe */ \"stripe\")('pk_test_51Kbz0hAK2uIKVwRUCQzQ8jC1uQiEcJIZF1FeSyCImYtTCj6iDVLSKJrfanbtMptqBq8m9eYuETiCbzbGrLR7E0sW00DKm1k2vj');\n    const charge = await stripe.charges.create({\n        amout: req.body.amout,\n        currency: 'brl',\n        source: req.body.token\n    });\n    res.status(200).json(charge);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhcmdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDN0MsS0FBSyxDQUFDQyxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsRUFBRSxDQUE2RztJQUU5SSxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQztRQUMxQ0MsS0FBSyxFQUFFUCxHQUFHLENBQUNRLElBQUksQ0FBQ0QsS0FBSztRQUNyQkUsUUFBUSxFQUFFLENBQUs7UUFDZkMsTUFBTSxFQUFFVixHQUFHLENBQUNRLElBQUksQ0FBQ0csS0FBSztJQUN4QixDQUFDO0lBRURWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDVCxNQUFNO0FBQzdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXltZW50LWdhdGV3YXJlLXN0dWR5Ly4vcGFnZXMvYXBpL2NoYXJnZS5qcz81ZjgzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCBzdHJpcGUgPSByZXF1aXJlKCdzdHJpcGUnKSgncGtfdGVzdF81MUtiejBoQUsydUlLVndSVUNRelE4akMxdVFpRWNKSVpGMUZlU3lDSW1ZdFRDajZpRFZMU0tKcmZhbmJ0TXB0cUJxOG05ZVl1RVRpQ2J6YkdyTFI3RTBzVzAwREttMWsydmonKVxuICBcbiAgICBjb25zdCBjaGFyZ2UgPSBhd2FpdCBzdHJpcGUuY2hhcmdlcy5jcmVhdGUoe1xuICAgICAgYW1vdXQ6IHJlcS5ib2R5LmFtb3V0LCAvLyBjZW50YXZvc1xuICAgICAgY3VycmVuY3k6ICdicmwnLFxuICAgICAgc291cmNlOiByZXEuYm9keS50b2tlbixcbiAgICB9KVxuICBcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihjaGFyZ2UpO1xuICB9XG4gICJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RyaXBlIiwicmVxdWlyZSIsImNoYXJnZSIsImNoYXJnZXMiLCJjcmVhdGUiLCJhbW91dCIsImJvZHkiLCJjdXJyZW5jeSIsInNvdXJjZSIsInRva2VuIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/charge.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/charge.js"));
module.exports = __webpack_exports__;

})();