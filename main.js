/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: roboto;\n  margin: 0;\n  padding-bottom: 100px; }\n\n.title {\n  padding-top: 90px; }\n\nheader {\n  background-color: #47b691;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 2; }\n  header img {\n    width: 30px;\n    height: 30px;\n    margin-left: 20px;\n    padding-top: 4px;\n    cursor: pointer;\n    transition: transform 0.1s; }\n    header img:active {\n      transform: scale(1.1); }\n  header h1 {\n    margin: 0;\n    padding-left: 40px;\n    color: white; }\n\n.add {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  cursor: pointer; }\n  .add div {\n    font-size: 20px;\n    margin: 10px; }\n\n.form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\n  border-radius: 8px;\n  width: 300px;\n  height: 400px;\n  background-color: white;\n  position: fixed;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.1);\n  visibility: hidden;\n  transition: tranform 0.4s, top 0.4s ease;\n  z-index: 4; }\n  .form .close {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 30px;\n    height: 28px;\n    width: 28px;\n    font-weight: 700;\n    background-color: #ff4242;\n    border: none;\n    color: white;\n    top: -6px;\n    right: -6px;\n    transition: background-color 0.3s; }\n    .form .close:hover {\n      background-color: #ff2828; }\n  .form h2 {\n    margin: 0;\n    background-color: #47b691;\n    color: white;\n    height: 60px;\n    width: 100%;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .form .name::placeholder {\n    padding-left: 20px; }\n  .form input {\n    height: 30px;\n    width: 80%;\n    border-radius: 8px;\n    border: none;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .form select {\n    height: 30px;\n    width: 80%;\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .form div {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column; }\n\n.open-form {\n  visibility: visible;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(1); }\n\n.cover {\n  background-color: #dadada;\n  opacity: 0.6;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  visibility: hidden; }\n\n.open-cover {\n  visibility: visible; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\narticle {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 200px;\n  border-radius: 8px;\n  margin-top: 15px;\n  position: relative; }\n  article img {\n    width: 30px;\n    cursor: pointer;\n    position: absolute;\n    right: -44px;\n    top: 35px; }\n  article div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px; }\n  article button {\n    border: none;\n    background-color: #ff4242;\n    color: white;\n    width: 23px;\n    height: 23px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    right: -40px;\n    cursor: pointer;\n    transition: transform 0.3s; }\n    article button:hover {\n      transform: scale(1.1); }\n\n#Super-important {\n  border-color: #f07575;\n  background-color: #ffaeae;\n  border-width: 2px;\n  border-style: solid; }\n\n#Not-important {\n  border-color: #2eca2e;\n  background-color: #97ff97;\n  border-width: 2px;\n  border-style: solid; }\n\n#important {\n  border-color: #ffae34;\n  background-color: #ffcf86;\n  border-width: 2px;\n  border-style: solid; }\n\n.title {\n  text-align: center; }\n\n.nav {\n  background-color: #47b691;\n  width: 300px;\n  position: fixed;\n  left: -300px;\n  bottom: 0;\n  top: 70px;\n  transform: scale(1, 1);\n  color: white;\n  transition: left 0.5s ease;\n  border-top: 1px solid white; }\n  .nav .general {\n    width: 190px;\n    background-color: #60c5a3;\n    height: 35px;\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    padding-left: 10px;\n    border-radius: 5px;\n    margin: 5px 0px 5px 0px;\n    cursor: pointer; }\n    .nav .general:hover {\n      background-color: #5fd3ac; }\n  .nav div {\n    margin-left: 30px;\n    margin-top: 80px; }\n  .nav h2 {\n    border-bottom-color: white;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    width: 80%;\n    padding-bottom: 15px; }\n  .nav button {\n    padding: 5px 10px 5px 10px;\n    margin-bottom: 20px;\n    border-radius: 4px;\n    border-width: 1px;\n    border-style: solid;\n    background-color: white;\n    cursor: pointer;\n    transition: background-color 0.2s, color 0.2s; }\n    .nav button:hover {\n      background-color: #000000;\n      color: white; }\n\n.nav-on {\n  left: 0; }\n\n.project-form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\n  border-radius: 8px;\n  width: 300px;\n  height: 230px;\n  background-color: white;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.1);\n  visibility: hidden;\n  transition: transform 0.5s;\n  z-index: 4; }\n  .project-form h2 {\n    margin: 0;\n    background-color: #47b691;\n    color: white;\n    height: 60px;\n    width: 100%;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .project-form .project-input::placeholder {\n    padding-left: 20px; }\n  .project-form input {\n    height: 30px;\n    width: 80%;\n    border-radius: 8px;\n    border: none;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .project-form div {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column; }\n  .project-form .close-proj {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 30px;\n    height: 28px;\n    width: 28px;\n    font-weight: 700;\n    background-color: #ff4242;\n    border: none;\n    color: white;\n    top: -6px;\n    right: -6px;\n    transition: background-color 0.3s; }\n    .project-form .close-proj:hover {\n      background-color: #ff2828; }\n\n.open-project {\n  visibility: visible;\n  transform: translate(-50%, -50%) scale(1); }\n\n.all-projects {\n  margin: 0;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: left;\n  flex-wrap: wrap;\n  align-items: center; }\n  .all-projects img {\n    width: 25px;\n    height: 25px;\n    margin-left: 10px;\n    cursor: pointer; }\n  .all-projects p {\n    width: 190px;\n    background-color: #60c5a3;\n    height: 35px;\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    padding-left: 10px;\n    border-radius: 5px;\n    margin: 5px 0px 5px 0px;\n    cursor: pointer; }\n    .all-projects p:hover {\n      background-color: #5fd3ac; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n$color: rgb(71, 182, 145);\r\nbody {\r\n    font-family: roboto;\r\n    margin: 0;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n.title {\r\n    padding-top: 90px;\r\n}\r\n\r\nheader {\r\n    background-color: $color;\r\n    height: 70px;\r\n    display: flex;\r\n    align-items: center;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n    img {\r\n        width: 30px;\r\n        height: 30px;\r\n        margin-left: 20px;\r\n        padding-top: 4px;\r\n        cursor: pointer;\r\n        transition: transform 0.1s;\r\n        &:active {\r\n            transform: scale(1.1);\r\n        }\r\n    }\r\n    h1 {\r\n        margin: 0;\r\n        padding-left: 40px;\r\n        color: white;\r\n    }\r\n}\r\n\r\n.add {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    cursor: pointer;\r\n    div {\r\n        font-size: 20px;\r\n        margin: 10px;\r\n    }\r\n}\r\n\r\n\r\n.form {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    border-radius: 8px;\r\n    width: 300px;\r\n    height: 400px;\r\n    background-color: rgb(255, 255, 255);\r\n    position: fixed;\r\n    top: 0%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0.1);\r\n    visibility: hidden;\r\n    transition: tranform 0.4s, top 0.4s ease;\r\n    z-index: 4;\r\n    .close {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: absolute;\r\n        cursor: pointer;\r\n        margin: 0;\r\n        border-radius: 30px;\r\n        height: 28px;\r\n        width: 28px;\r\n        font-weight: 700;\r\n        background-color: rgb(255, 66, 66);\r\n        border: none;\r\n        color: white;\r\n        top: -6px;\r\n        right: -6px;\r\n        transition: background-color 0.3s;\r\n        &:hover{\r\n            background-color: rgb(255, 40, 40);\r\n        }\r\n      }\r\n\r\n    h2 {\r\n        margin: 0;\r\n        background-color: $color;\r\n        color: white;\r\n        height: 60px;\r\n        width: 100%;\r\n        border-radius: 8px 8px 0px 0px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    .name {\r\n        &::placeholder {\r\n            padding-left: 20px;\r\n        }\r\n    }\r\n    input {\r\n        height: 30px;\r\n        width: 80%;\r\n        border-radius: 8px;\r\n        border: none;\r\n        box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n        cursor: pointer;\r\n    }\r\n    select {\r\n        height: 30px;\r\n        width: 80%;\r\n        border: none;\r\n        border-radius: 8px;\r\n        box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n        cursor: pointer;\r\n    }\r\n    div {\r\n        height: 100%;\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        align-items: center;\r\n        flex-direction: column;\r\n    }\r\n}\r\n.open-form {\r\n    visibility: visible;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n}\r\n.cover {\r\n    background-color: #dadada;\r\n    opacity: 0.6;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    visibility: hidden;\r\n}\r\n.open-cover {\r\n    visibility: visible;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\narticle {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 200px;\r\n    border-radius: 8px;\r\n    margin-top: 15px;\r\n    position: relative;\r\n    img{\r\n        width: 30px;\r\n        cursor: pointer;\r\n        position: absolute;\r\n        right: -44px;\r\n        top: 35px;\r\n    }\r\n\r\n    div{\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        padding: 10px;\r\n    }\r\n    button {\r\n        border: none;\r\n        background-color: rgb(255, 66, 66);\r\n        color: white;\r\n        width: 23px;\r\n        height: 23px;\r\n        border-radius: 15px;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: absolute;\r\n        right: -40px;\r\n        cursor: pointer;\r\n        transition: transform 0.3s;\r\n        &:hover{\r\n            transform: scale(1.1);\r\n        }\r\n    }\r\n}\r\n#Super-important {\r\n    border-color: #f07575;\r\n    background-color: #ffaeae;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n#Not-important {\r\n    border-color: #2eca2e;\r\n    background-color: #97ff97;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n#important {\r\n    border-color: #ffae34;\r\n    background-color: #ffcf86;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n}\r\n\r\n.nav {\r\n    background-color: $color;\r\n    width: 300px;\r\n    position: fixed;\r\n    left: -300px;\r\n    bottom: 0;\r\n    top: 70px;\r\n    transform: scale(1, 1);\r\n    color: white;\r\n    transition: left 0.5s ease;\r\n    border-top: 1px solid white;\r\n\r\n    .general {\r\n        width: 190px;\r\n        background-color: rgb(96, 197, 163);\r\n        height: 35px;\r\n        display: flex;\r\n        flex-shrink: 0;\r\n        align-items: center;\r\n        padding-left: 10px;\r\n        border-radius: 5px;\r\n        margin: 5px 0px 5px 0px;\r\n        cursor: pointer;\r\n        &:hover {\r\n            background-color: rgb(95, 211, 172);\r\n        }\r\n    }\r\n    \r\n    div {\r\n        margin-left: 30px;\r\n        margin-top: 80px;\r\n    }\r\n    h2 {\r\n        border-bottom-color: rgb(255, 255, 255);\r\n        border-bottom-width: 1px;\r\n        border-bottom-style: solid;\r\n        width: 80%;\r\n        padding-bottom: 15px;\r\n    }\r\n    button {\r\n        padding: 5px 10px 5px 10px;\r\n        margin-bottom: 20px;\r\n        border-radius: 4px;\r\n        border-width: 1px;\r\n        border-style: solid;\r\n        background-color: white;\r\n        cursor: pointer;\r\n        transition: background-color 0.2s, color 0.2s;\r\n        &:hover {\r\n            background-color: #000000;\r\n            color: white;\r\n        }\r\n    }\r\n}\r\n.nav-on {\r\n    left: 0;\r\n}\r\n\r\n.project-form {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    border-radius: 8px;\r\n    width: 300px;\r\n    height: 230px;\r\n    background-color: rgb(255, 255, 255);\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0.1);\r\n    visibility: hidden;\r\n    transition: transform 0.5s;\r\n    z-index: 4;\r\n    h2 {\r\n        margin: 0;\r\n        background-color: $color;\r\n        color: white;\r\n        height: 60px;\r\n        width: 100%;\r\n        border-radius: 8px 8px 0px 0px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    .project-input {\r\n        &::placeholder {\r\n            padding-left: 20px;\r\n        }\r\n    }\r\n    input {\r\n        height: 30px;\r\n        width: 80%;\r\n        border-radius: 8px;\r\n        border: none;\r\n        box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n        cursor: pointer;\r\n    }\r\n    div {\r\n        height: 100%;\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        align-items: center;\r\n        flex-direction: column;\r\n    }\r\n    .close-proj {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: absolute;\r\n        cursor: pointer;\r\n        margin: 0;\r\n        border-radius: 30px;\r\n        height: 28px;\r\n        width: 28px;\r\n        font-weight: 700;\r\n        background-color: rgb(255, 66, 66);\r\n        border: none;\r\n        color: white;\r\n        top: -6px;\r\n        right: -6px;\r\n        transition: background-color 0.3s;\r\n        &:hover{\r\n            background-color: rgb(255, 40, 40);\r\n        }\r\n      }\r\n}\r\n.open-project {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%)  scale(1);\r\n}\r\n.all-projects {\r\n    margin: 0;\r\n    display: flex;\r\n    flex-shrink: 0;\r\n    justify-content: left;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    img{\r\n        width: 25px;\r\n        height: 25px;\r\n        margin-left: 10px;\r\n        cursor: pointer;\r\n    }\r\n    p {\r\n        width: 190px;\r\n        background-color: rgb(96, 197, 163);\r\n        height: 35px;\r\n        display: flex;\r\n        flex-shrink: 0;\r\n        align-items: center;\r\n        padding-left: 10px;\r\n        border-radius: 5px;\r\n        margin: 5px 0px 5px 0px;\r\n        cursor: pointer;\r\n        &:hover {\r\n            background-color: rgb(95, 211, 172);\r\n        }\r\n    }\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
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
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
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
        references: 1
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
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
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
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _trash2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trash2.png */ "./src/trash2.png");
/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.png */ "./src/edit.png");





function display(){

        let clear = document.querySelector('main');
        while (clear.hasChildNodes()) {
            clear.removeChild(clear.firstChild);
        }
        
        for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.todos.length; i++){
            let obj = _index_js__WEBPACK_IMPORTED_MODULE_0__.todos[i];
            let art = document.createElement('article');
            let editimg = new Image;
            editimg.src = _edit_png__WEBPACK_IMPORTED_MODULE_2__;
            for (let j in obj){
                if ( obj[j] == 'important'){
                    art.setAttribute('id', 'important');
                }
                else if ( obj[j] == 'Super important'){
                    art.setAttribute('id', 'Super-important');
                }
                else if ( obj[j] == 'Not important'){
                    art.setAttribute('id', 'Not-important');
                }
                else {
                    let div = document.createElement('div');
                    div.innerHTML = obj[j];
                    art.appendChild(div);
                }
                
            }
            let ex = document.createElement('button');
            ex.innerHTML = 'X';
            ex.setAttribute('class', 'ex-but');
            ex.setAttribute('value', i);
            art.appendChild(ex);
            art.appendChild(editimg);
            let main = document.querySelector('main');
            main.appendChild(art);

            
        }
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.remove)();
};

function displayProjects(){

    let clear = document.querySelector('.all-projects');
        while (clear.hasChildNodes()) {
            clear.removeChild(clear.firstChild);
        }

    let projectsdom = document.querySelector('.all-projects');

    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++){
        let obj = _index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i];
        let p = document.createElement('p');
        for (let j in obj){
            p.innerHTML = obj[j];
            let img = new Image();
            img.src = _trash2_png__WEBPACK_IMPORTED_MODULE_1__;
            img.setAttribute('value', i);
            img.setAttribute('class', 'trash');
            projectsdom.appendChild(p);
            projectsdom.appendChild(img);
        }
    }
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.removeProject)();
}

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeform)
/* harmony export */ });
function makeform(){
    document.querySelector(".add").addEventListener("click", function () {
        let popup = document.querySelector(".form");
        popup.classList.add("open-form");
        let cover = document.querySelector(".cover");
        cover.classList.add("open-cover");
    });
    
    document.querySelector(".close").addEventListener("click", function () {
        let popup = document.querySelector(".form");
        popup.classList.remove("open-form");
        let cover = document.querySelector(".cover");
        cover.classList.remove("open-cover");
    });
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addObj": () => (/* binding */ addObj),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _newproject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newproject.js */ "./src/newproject.js");






// Check if local storage exists
if(!localStorage.getItem('todos')){
    // If it doesn't exist, initialize it as an empty array
    localStorage.setItem('todos', JSON.stringify([]));
}

let todos = [];
todos = JSON.parse(localStorage.getItem('todos'));

(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();


// Check if local storage exists for projects
if(!localStorage.getItem('projects')){
    // If it doesn't exist, initialize it as an empty array
    localStorage.setItem('projects', JSON.stringify([]));
}

let projects = [];
projects = JSON.parse(localStorage.getItem('projects'));

(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();


class addProject {
    constructor(name){
        this.name = name;
    }
};

class addObj {
    constructor(description, priority, date){
        this.description = description;
        this.priority = priority;
        this.date = date;
    };
};

document.querySelector(".form").onsubmit = () => {
    let description = document.querySelector('.name').value;
    let priority = document.querySelector('select').value;
    let date = document.querySelector('.date').value;
    
    todos.push(new addObj(description, priority, date));

    (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
    let popup = document.querySelector(".form");
    popup.classList.remove("open-form");
    // midenizi to value 
    let input = document.querySelector(".name");
    input.value = '';

    let cover = document.querySelector(".cover");
    cover.classList.remove("open-cover");
    localStorage.setItem('todos', JSON.stringify(todos));

    return false;
};



document.querySelector(".project-form").onsubmit = () => {

    projects.push(new addProject(document.querySelector('.project-input').value));
    console.log(projects);
    (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
    let popup = document.querySelector(".project-form");
    popup.classList.remove("open-project");
    // midenizi to value 
    let input = document.querySelector(".project-input");
    let cover = document.querySelector(".cover");
    cover.classList.remove("open-cover");
    input.value = '';
    
    // Update local storage with the new project list
    localStorage.setItem('projects', JSON.stringify(projects));
    return false;
}

;(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

function removeProject(){
    const removeBut = document.querySelectorAll('.trash');
    removeBut.forEach(function (img) {
        img.addEventListener("click", function () {
          projects.splice(img.getAttribute('value'), 1);
          (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
          // Update local storage with the updated project list
          localStorage.setItem('projects', JSON.stringify(projects));
        });
    });
}
    
function remove(){
    const removeBut = document.querySelectorAll('.ex-but');
    removeBut.forEach(function (button) {
        button.addEventListener("click", function () {
          todos.splice(button.value, 1);
          localStorage.setItem('todos', JSON.stringify(todos));
          (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
        });
    });
}

(0,_form_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_newproject_js__WEBPACK_IMPORTED_MODULE_4__["default"])();



/***/ }),

/***/ "./src/newproject.js":
/*!***************************!*\
  !*** ./src/newproject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newproj)
/* harmony export */ });
function newproj(){
    document.querySelector(".add-project").addEventListener("click", function () {
        let popup = document.querySelector(".project-form");
        popup.classList.add("open-project");
        let cover = document.querySelector(".cover");
        cover.classList.add("open-cover");
    });

    document.querySelector(".close-proj").addEventListener("click", function () {
        let popup = document.querySelector(".project-form");
        popup.classList.remove("open-project");
        let cover = document.querySelector(".cover");
        cover.classList.remove("open-cover");
    });
}

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebar)
/* harmony export */ });
function sidebar(){
    
    document.querySelector('#hum').addEventListener('click', () => { 
        let popup = document.querySelector(".nav");
        if (popup.classList.contains("nav-on")) {
            // close the nav bar
            popup.classList.remove("nav-on");
        } else {
            // open the nav bar
            popup.classList.add("nav-on");
        }
    });
}

/***/ }),

/***/ "./src/edit.png":
/*!**********************!*\
  !*** ./src/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5925866ee98362e3823b.png";

/***/ }),

/***/ "./src/trash2.png":
/*!************************!*\
  !*** ./src/trash2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cdac1f9cbbe5c4df308.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGdCQUFnQixPQUFPLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsZUFBZSxNQUFNLFdBQVcsWUFBWSxhQUFhLGdCQUFnQixPQUFPLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLGlCQUFpQixPQUFPLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLGFBQWEsWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGdCQUFnQixPQUFPLGtCQUFrQixPQUFPLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGlCQUFpQixPQUFPLGFBQWEsaUJBQWlCLE1BQU0sZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGdCQUFnQixLQUFLLFdBQVcsYUFBYSxZQUFZLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLGlCQUFpQixPQUFPLG1CQUFtQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxZQUFZLGdCQUFnQixNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGdCQUFnQixPQUFPLDRHQUE0RyxtQkFBbUIsOEJBQThCLFVBQVUsNEJBQTRCLGtCQUFrQiw4QkFBOEIsS0FBSyxnQkFBZ0IsMEJBQTBCLEtBQUssZ0JBQWdCLGlDQUFpQyxxQkFBcUIsc0JBQXNCLDRCQUE0Qix3QkFBd0IsZUFBZSxpQkFBaUIsZ0JBQWdCLG1CQUFtQixhQUFhLHdCQUF3Qix5QkFBeUIsOEJBQThCLDZCQUE2Qiw0QkFBNEIsdUNBQXVDLHNCQUFzQixzQ0FBc0MsYUFBYSxTQUFTLFlBQVksc0JBQXNCLCtCQUErQix5QkFBeUIsU0FBUyxLQUFLLGNBQWMsc0JBQXNCLGdDQUFnQyx5QkFBeUIsd0JBQXdCLGFBQWEsNEJBQTRCLHlCQUF5QixTQUFTLEtBQUssbUJBQW1CLHNCQUFzQiw0QkFBNEIsK0JBQStCLDRDQUE0QywyQkFBMkIscUJBQXFCLHNCQUFzQiw2Q0FBNkMsd0JBQXdCLGdCQUFnQixrQkFBa0Isb0RBQW9ELDJCQUEyQixpREFBaUQsbUJBQW1CLGdCQUFnQiwwQkFBMEIsb0NBQW9DLGdDQUFnQywrQkFBK0IsNEJBQTRCLHNCQUFzQixnQ0FBZ0MseUJBQXlCLHdCQUF3Qiw2QkFBNkIsK0NBQStDLHlCQUF5Qix5QkFBeUIsc0JBQXNCLHdCQUF3Qiw4Q0FBOEMsb0JBQW9CLG1EQUFtRCxhQUFhLFdBQVcsZ0JBQWdCLHNCQUFzQixxQ0FBcUMseUJBQXlCLHlCQUF5Qix3QkFBd0IsMkNBQTJDLDBCQUEwQixnQ0FBZ0Msb0NBQW9DLFNBQVMsZUFBZSw0QkFBNEIsbUNBQW1DLGFBQWEsU0FBUyxlQUFlLHlCQUF5Qix1QkFBdUIsK0JBQStCLHlCQUF5QixnREFBZ0QsNEJBQTRCLFNBQVMsZ0JBQWdCLHlCQUF5Qix1QkFBdUIseUJBQXlCLCtCQUErQixnREFBZ0QsNEJBQTRCLFNBQVMsYUFBYSx5QkFBeUIsd0JBQXdCLDBCQUEwQiwwQ0FBMEMsZ0NBQWdDLG1DQUFtQyxTQUFTLEtBQUssZ0JBQWdCLDRCQUE0QixpQkFBaUIsa0RBQWtELEtBQUssWUFBWSxrQ0FBa0MscUJBQXFCLHdCQUF3QixlQUFlLGtCQUFrQixpQkFBaUIsZ0JBQWdCLG1CQUFtQiwyQkFBMkIsS0FBSyxpQkFBaUIsNEJBQTRCLEtBQUssY0FBYyxzQkFBc0IsK0JBQStCLDRCQUE0QixLQUFLLGlCQUFpQixzQkFBc0IsdUNBQXVDLCtCQUErQiw0QkFBNEIscUJBQXFCLDJCQUEyQix5QkFBeUIsMkJBQTJCLFlBQVksd0JBQXdCLDRCQUE0QiwrQkFBK0IseUJBQXlCLHNCQUFzQixTQUFTLGdCQUFnQiwwQkFBMEIsZ0NBQWdDLG9DQUFvQywwQkFBMEIsU0FBUyxnQkFBZ0IseUJBQXlCLCtDQUErQyx5QkFBeUIsd0JBQXdCLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLG9DQUFvQyxnQ0FBZ0MsK0JBQStCLHlCQUF5Qiw0QkFBNEIsdUNBQXVDLG9CQUFvQixzQ0FBc0MsYUFBYSxTQUFTLEtBQUssc0JBQXNCLDhCQUE4QixrQ0FBa0MsMEJBQTBCLDRCQUE0QixLQUFLLG9CQUFvQiw4QkFBOEIsa0NBQWtDLDBCQUEwQiw0QkFBNEIsS0FBSyxnQkFBZ0IsOEJBQThCLGtDQUFrQywwQkFBMEIsNEJBQTRCLEtBQUssZ0JBQWdCLDJCQUEyQixLQUFLLGNBQWMsaUNBQWlDLHFCQUFxQix3QkFBd0IscUJBQXFCLGtCQUFrQixrQkFBa0IsK0JBQStCLHFCQUFxQixtQ0FBbUMsb0NBQW9DLHNCQUFzQix5QkFBeUIsZ0RBQWdELHlCQUF5QiwwQkFBMEIsMkJBQTJCLGdDQUFnQywrQkFBK0IsK0JBQStCLG9DQUFvQyw0QkFBNEIscUJBQXFCLG9EQUFvRCxhQUFhLFNBQVMscUJBQXFCLDhCQUE4Qiw2QkFBNkIsU0FBUyxZQUFZLG9EQUFvRCxxQ0FBcUMsdUNBQXVDLHVCQUF1QixpQ0FBaUMsU0FBUyxnQkFBZ0IsdUNBQXVDLGdDQUFnQywrQkFBK0IsOEJBQThCLGdDQUFnQyxvQ0FBb0MsNEJBQTRCLDBEQUEwRCxxQkFBcUIsMENBQTBDLDZCQUE2QixhQUFhLFNBQVMsS0FBSyxhQUFhLGdCQUFnQixLQUFLLHVCQUF1QixzQkFBc0IsNEJBQTRCLCtCQUErQiw0Q0FBNEMsMkJBQTJCLHFCQUFxQixzQkFBc0IsNkNBQTZDLHdCQUF3QixpQkFBaUIsa0JBQWtCLG9EQUFvRCwyQkFBMkIsbUNBQW1DLG1CQUFtQixZQUFZLHNCQUFzQixxQ0FBcUMseUJBQXlCLHlCQUF5Qix3QkFBd0IsMkNBQTJDLDBCQUEwQixnQ0FBZ0Msb0NBQW9DLFNBQVMsd0JBQXdCLDRCQUE0QixtQ0FBbUMsYUFBYSxTQUFTLGVBQWUseUJBQXlCLHVCQUF1QiwrQkFBK0IseUJBQXlCLGdEQUFnRCw0QkFBNEIsU0FBUyxhQUFhLHlCQUF5Qix3QkFBd0IsMEJBQTBCLDBDQUEwQyxnQ0FBZ0MsbUNBQW1DLFNBQVMscUJBQXFCLDBCQUEwQixvQ0FBb0MsZ0NBQWdDLCtCQUErQiw0QkFBNEIsc0JBQXNCLGdDQUFnQyx5QkFBeUIsd0JBQXdCLDZCQUE2QiwrQ0FBK0MseUJBQXlCLHlCQUF5QixzQkFBc0Isd0JBQXdCLDhDQUE4QyxvQkFBb0IsbURBQW1ELGFBQWEsV0FBVyxLQUFLLG1CQUFtQiw0QkFBNEIsbURBQW1ELEtBQUssbUJBQW1CLGtCQUFrQixzQkFBc0IsdUJBQXVCLDhCQUE4Qix3QkFBd0IsNEJBQTRCLFlBQVksd0JBQXdCLHlCQUF5Qiw4QkFBOEIsNEJBQTRCLFNBQVMsV0FBVyx5QkFBeUIsZ0RBQWdELHlCQUF5QiwwQkFBMEIsMkJBQTJCLGdDQUFnQywrQkFBK0IsK0JBQStCLG9DQUFvQyw0QkFBNEIscUJBQXFCLG9EQUFvRCxhQUFhLFNBQVMsS0FBSywrQkFBK0I7QUFDdDFuQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBNEk7QUFDNUk7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUlzRjtBQUM5RyxPQUFPLGlFQUFlLDRIQUFPLElBQUksbUlBQWMsR0FBRyxtSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JrRTtBQUNoQztBQUNKO0FBQzlCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJLG1EQUFZLEVBQUU7QUFDMUMsc0JBQXNCLDRDQUFLO0FBQzNCO0FBQ0E7QUFDQSwwQkFBMEIsc0NBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFNO0FBQ2Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFJLHNEQUFlLEVBQUU7QUFDekMsa0JBQWtCLCtDQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdDQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWE7QUFDakI7Ozs7Ozs7Ozs7Ozs7O0FDdkVnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkaUM7QUFDQTtBQUNvQjtBQUNsQjtBQUNHO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Ysb0RBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQjtBQUNsQiw0REFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQU87QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDREQUFlO0FBQ3pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG9EQUFPO0FBQ2pCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9EQUFRO0FBQ1IsMERBQU87QUFDUDs7Ozs7Ozs7Ozs7Ozs7O0FDaEhlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbmV3cHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7IH1cXG5cXG4udGl0bGUge1xcbiAgcGFkZGluZy10b3A6IDkwcHg7IH1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YjY5MTtcXG4gIGhlaWdodDogNzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjsgfVxcbiAgaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzOyB9XFxuICAgIGhlYWRlciBpbWc6YWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cXG4gIGhlYWRlciBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5hZGQgZGl2IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7IH1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdHJhbmZvcm0gMC40cywgdG9wIDAuNHMgZWFzZTtcXG4gIHotaW5kZXg6IDQ7IH1cXG4gIC5mb3JtIC5jbG9zZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICByaWdodDogLTZweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzOyB9XFxuICAgIC5mb3JtIC5jbG9zZTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjgyODsgfVxcbiAgLmZvcm0gaDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2I2OTE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLmZvcm0gLm5hbWU6OnBsYWNlaG9sZGVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XFxuICAuZm9ybSBpbnB1dCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5mb3JtIHNlbGVjdCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5mb3JtIGRpdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLm9wZW4tZm9ybSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTsgfVxcblxcbi5jb3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi5vcGVuLWNvdmVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbmFydGljbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgYXJ0aWNsZSBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtNDRweDtcXG4gICAgdG9wOiAzNXB4OyB9XFxuICBhcnRpY2xlIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICBhcnRpY2xlIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDI0MjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMjNweDtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7IH1cXG4gICAgYXJ0aWNsZSBidXR0b246aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcblxcbiNTdXBlci1pbXBvcnRhbnQge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjA3NTc1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWVhZTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxcblxcbiNOb3QtaW1wb3J0YW50IHtcXG4gIGJvcmRlci1jb2xvcjogIzJlY2EyZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5N2ZmOTc7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IH1cXG5cXG4jaW1wb3J0YW50IHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYWUzNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNmODY7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IH1cXG5cXG4udGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogLTMwMHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgdG9wOiA3MHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlOyB9XFxuICAubmF2IC5nZW5lcmFsIHtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBjNWEzO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAubmF2IC5nZW5lcmFsOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZkM2FjOyB9XFxuICAubmF2IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4OyB9XFxuICAubmF2IGgyIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4OyB9XFxuICAubmF2IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnM7IH1cXG4gICAgLm5hdiBidXR0b246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLm5hdi1vbiB7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcbiAgei1pbmRleDogNDsgfVxcbiAgLnByb2plY3QtZm9ybSBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YjY5MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAucHJvamVjdC1mb3JtIC5wcm9qZWN0LWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxcbiAgLnByb2plY3QtZm9ybSBpbnB1dCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5wcm9qZWN0LWZvcm0gZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5wcm9qZWN0LWZvcm0gLmNsb3NlLXByb2oge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDI0MjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRvcDogLTZweDtcXG4gICAgcmlnaHQ6IC02cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zczsgfVxcbiAgICAucHJvamVjdC1mb3JtIC5jbG9zZS1wcm9qOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyODI4OyB9XFxuXFxuLm9wZW4tcHJvamVjdCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7IH1cXG5cXG4uYWxsLXByb2plY3RzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5hbGwtcHJvamVjdHMgaW1nIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmFsbC1wcm9qZWN0cyBwIHtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBjNWEzO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuYWxsLXByb2plY3RzIHA6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZmQzYWM7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kseUJBWnFCO0VBYXJCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVLEVBQUE7RUFUZDtJQVdRLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMEJBQTBCLEVBQUE7SUFoQmxDO01Ba0JZLHFCQUFxQixFQUFBO0VBbEJqQztJQXNCUSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7RUFKbkI7SUFNUSxlQUFlO0lB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QWlEUSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQWtDO0lBQ2xDLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFdBQVc7SUFDWCxpQ0FBaUMsRUFBQTtJQWhFekM7TUFrRVkseUJBQWtDLEVBQUE7O0FBSTlDO0VBQ0ksbUJBQW1CO0VBQ25CLHlDQUEwQyxFQUFBOztBQUU5QztFQUNJLFNBQVM7RUFDVCxhQUFhO0VBQ2IsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7RUFOdkI7SUFRUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUFYdkI7SUFjUSxZQUFZO0lBQ1oseUJBQW1DO0lBQ25DLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlLEVBQUE7SUF2QnZCO01BeUJZLHlCQUFtQyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuJGNvbG9yOiByZ2IoNzEsIDE4MiwgMTQ1KTtcXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA5MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcztcXHJcXG4gICAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5hZGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXYge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5mb3JtIDAuNHMsIHRvcCAwLjRzIGVhc2U7XFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIC5jbG9zZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDY2LCA2Nik7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB0b3A6IC02cHg7XFxyXFxuICAgICAgICByaWdodDogLTZweDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDAsIDQwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubmFtZSB7XFxyXFxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIGlucHV0IHtcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBzZWxlY3Qge1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5vcGVuLWZvcm0ge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcbi5jb3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuLm9wZW4tY292ZXIge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICByaWdodDogLTQ0cHg7XFxyXFxuICAgICAgICB0b3A6IDM1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGl2e1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDY2LCA2Nik7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB3aWR0aDogMjNweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjNweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IC00MHB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxyXFxuICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4jU3VwZXItaW1wb3J0YW50IHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjA3NTc1O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhZWFlO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuI05vdC1pbXBvcnRhbnQge1xcclxcbiAgICBib3JkZXItY29sb3I6ICMyZWNhMmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5N2ZmOTc7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG4jaW1wb3J0YW50IHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZhZTM0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZjg2O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogLTMwMHB4O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHRvcDogNzBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcclxcblxcclxcbiAgICAuZ2VuZXJhbCB7XFxyXFxuICAgICAgICB3aWR0aDogMTkwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDE5NywgMTYzKTtcXHJcXG4gICAgICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMjExLCAxNzIpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICBkaXYge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgY29sb3IgMC4ycztcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5uYXYtb24ge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXHJcXG4gICAgei1pbmRleDogNDtcXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5wcm9qZWN0LWlucHV0IHtcXHJcXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgaW5wdXQge1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICAgIGRpdiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICAgIC5jbG9zZS1wcm9qIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI4cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNjYsIDY2KTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIHRvcDogLTZweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAtNnB4O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0MCwgNDApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG59XFxyXFxuLm9wZW4tcHJvamVjdCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICBzY2FsZSgxKTtcXHJcXG59XFxyXFxuLmFsbC1wcm9qZWN0cyB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgd2lkdGg6IDE5MHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCAxOTcsIDE2Myk7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUsIDIxMSwgMTcyKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7dG9kb3MsIHJlbW92ZSwgcHJvamVjdHMsIHJlbW92ZVByb2plY3R9IGZyb20gJy4vaW5kZXguanMnO1xyXG5pbXBvcnQgdHJhc2gyIGZyb20gJy4vdHJhc2gyLnBuZyc7XHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdC5wbmcnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5KCl7XHJcblxyXG4gICAgICAgIGxldCBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgICAgICB3aGlsZSAoY2xlYXIuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGNsZWFyLnJlbW92ZUNoaWxkKGNsZWFyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHRvZG9zW2ldO1xyXG4gICAgICAgICAgICBsZXQgYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgICAgICBsZXQgZWRpdGltZyA9IG5ldyBJbWFnZTtcclxuICAgICAgICAgICAgZWRpdGltZy5zcmMgPSBlZGl0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqIGluIG9iail7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG9ialtqXSA9PSAnaW1wb3J0YW50Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaW1wb3J0YW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggb2JqW2pdID09ICdTdXBlciBpbXBvcnRhbnQnKXtcclxuICAgICAgICAgICAgICAgICAgICBhcnQuc2V0QXR0cmlidXRlKCdpZCcsICdTdXBlci1pbXBvcnRhbnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBvYmpbal0gPT0gJ05vdCBpbXBvcnRhbnQnKXtcclxuICAgICAgICAgICAgICAgICAgICBhcnQuc2V0QXR0cmlidXRlKCdpZCcsICdOb3QtaW1wb3J0YW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IG9ialtqXTtcclxuICAgICAgICAgICAgICAgICAgICBhcnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBleC5pbm5lckhUTUwgPSAnWCc7XHJcbiAgICAgICAgICAgIGV4LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZXgtYnV0Jyk7XHJcbiAgICAgICAgICAgIGV4LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpKTtcclxuICAgICAgICAgICAgYXJ0LmFwcGVuZENoaWxkKGV4KTtcclxuICAgICAgICAgICAgYXJ0LmFwcGVuZENoaWxkKGVkaXRpbWcpO1xyXG4gICAgICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChhcnQpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbW92ZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpe1xyXG5cclxuICAgIGxldCBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcclxuICAgICAgICB3aGlsZSAoY2xlYXIuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGNsZWFyLnJlbW92ZUNoaWxkKGNsZWFyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBsZXQgcHJvamVjdHNkb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IG9iaiA9IHByb2plY3RzW2ldO1xyXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGZvciAobGV0IGogaW4gb2JqKXtcclxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBvYmpbal07XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHRyYXNoMjtcclxuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpKTtcclxuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndHJhc2gnKTtcclxuICAgICAgICAgICAgcHJvamVjdHNkb20uYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgICAgIHByb2plY3RzZG9tLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlUHJvamVjdCgpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIG1ha2Vmb3JtKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwib3Blbi1mb3JtXCIpO1xyXG4gICAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgICAgICAgY292ZXIuY2xhc3NMaXN0LmFkZChcIm9wZW4tY292ZXJcIik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1mb3JtXCIpO1xyXG4gICAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgICAgICAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tY292ZXJcIik7XHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0IG1ha2Vmb3JtIGZyb20gJy4vZm9ybS5qcyc7XHJcbmltcG9ydCB7ZGlzcGxheSxkaXNwbGF5UHJvamVjdHN9IGZyb20gJy4vZGlzcGxheS5qcyc7XHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2lkZWJhci5qcyc7XHJcbmltcG9ydCBuZXdwcm9qIGZyb20gJy4vbmV3cHJvamVjdC5qcyc7XHJcblxyXG4vLyBDaGVjayBpZiBsb2NhbCBzdG9yYWdlIGV4aXN0c1xyXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpe1xyXG4gICAgLy8gSWYgaXQgZG9lc24ndCBleGlzdCwgaW5pdGlhbGl6ZSBpdCBhcyBhbiBlbXB0eSBhcnJheVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoW10pKTtcclxufVxyXG5cclxubGV0IHRvZG9zID0gW107XHJcbnRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XHJcbmV4cG9ydCB7dG9kb3N9O1xyXG5kaXNwbGF5KCk7XHJcblxyXG5cclxuLy8gQ2hlY2sgaWYgbG9jYWwgc3RvcmFnZSBleGlzdHMgZm9yIHByb2plY3RzXHJcbmlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSl7XHJcbiAgICAvLyBJZiBpdCBkb2Vzbid0IGV4aXN0LCBpbml0aWFsaXplIGl0IGFzIGFuIGVtcHR5IGFycmF5XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xyXG59XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuZXhwb3J0IHtwcm9qZWN0c307XHJcbmRpc3BsYXlQcm9qZWN0cygpO1xyXG5cclxuXHJcbmNsYXNzIGFkZFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBhZGRPYmoge1xyXG4gICAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKXtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpLm9uc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKS52YWx1ZTtcclxuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLnZhbHVlO1xyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpLnZhbHVlO1xyXG4gICAgXHJcbiAgICB0b2Rvcy5wdXNoKG5ldyBhZGRPYmooZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSk7XHJcblxyXG4gICAgZGlzcGxheSgpO1xyXG4gICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tZm9ybVwiKTtcclxuICAgIC8vIG1pZGVuaXppIHRvIHZhbHVlIFxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpO1xyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxuXHJcbiAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tY292ZXJcIik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIikub25zdWJtaXQgPSAoKSA9PiB7XHJcblxyXG4gICAgcHJvamVjdHMucHVzaChuZXcgYWRkUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbnB1dCcpLnZhbHVlKSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcclxuICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tcHJvamVjdFwiKTtcclxuICAgIC8vIG1pZGVuaXppIHRvIHZhbHVlIFxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWlucHV0XCIpO1xyXG4gICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICAgIGNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLWNvdmVyXCIpO1xyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIGxvY2FsIHN0b3JhZ2Ugd2l0aCB0aGUgbmV3IHByb2plY3QgbGlzdFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuc2lkZWJhcigpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoKXtcclxuICAgIGNvbnN0IHJlbW92ZUJ1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFzaCcpO1xyXG4gICAgcmVtb3ZlQnV0LmZvckVhY2goZnVuY3Rpb24gKGltZykge1xyXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGltZy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyksIDEpO1xyXG4gICAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XHJcbiAgICAgICAgICAvLyBVcGRhdGUgbG9jYWwgc3RvcmFnZSB3aXRoIHRoZSB1cGRhdGVkIHByb2plY3QgbGlzdFxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiAgICBcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZSgpe1xyXG4gICAgY29uc3QgcmVtb3ZlQnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4LWJ1dCcpO1xyXG4gICAgcmVtb3ZlQnV0LmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdG9kb3Muc3BsaWNlKGJ1dHRvbi52YWx1ZSwgMSk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xyXG4gICAgICAgICAgZGlzcGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbm1ha2Vmb3JtKCk7XHJcbm5ld3Byb2ooKTtcclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld3Byb2ooKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwib3Blbi1wcm9qZWN0XCIpO1xyXG4gICAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgICAgICAgY292ZXIuY2xhc3NMaXN0LmFkZChcIm9wZW4tY292ZXJcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLXByb2pcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1wcm9qZWN0XCIpO1xyXG4gICAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgICAgICAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tY292ZXJcIik7XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGViYXIoKXtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBcclxuICAgICAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuICAgICAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LW9uXCIpKSB7XHJcbiAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBuYXYgYmFyXHJcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtb25cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gb3BlbiB0aGUgbmF2IGJhclxyXG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwibmF2LW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
