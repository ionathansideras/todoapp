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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: roboto;\n  margin: 0;\n  padding-bottom: 100px; }\n\n.title {\n  padding-top: 90px; }\n\nheader {\n  background-color: #47b691;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 2; }\n  header img {\n    width: 30px;\n    height: 30px;\n    margin-left: 20px;\n    padding-top: 4px;\n    cursor: pointer;\n    transition: transform 0.1s; }\n    header img:active {\n      transform: scale(1.1); }\n  header h1 {\n    margin: 0;\n    padding-left: 40px;\n    color: white; }\n\n.add {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  cursor: pointer; }\n  .add div {\n    font-size: 20px;\n    margin: 10px; }\n\n.form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\n  border-radius: 8px;\n  width: 300px;\n  height: 400px;\n  background-color: white;\n  position: fixed;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.1);\n  visibility: hidden;\n  transition: tranform 0.4s, top 0.4s ease;\n  z-index: 4; }\n  .form .close {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 30px;\n    height: 28px;\n    width: 28px;\n    font-weight: 700;\n    background-color: #ff4242;\n    border: none;\n    color: white;\n    top: -6px;\n    right: -6px;\n    transition: background-color 0.3s; }\n    .form .close:hover {\n      background-color: #ff2828; }\n  .form h2 {\n    margin: 0;\n    background-color: #47b691;\n    color: white;\n    height: 60px;\n    width: 100%;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .form .name::placeholder {\n    padding-left: 20px; }\n  .form input {\n    height: 30px;\n    width: 80%;\n    border-radius: 8px;\n    border: none;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .form select {\n    height: 30px;\n    width: 80%;\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .form div {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column; }\n\n.open-form {\n  visibility: visible;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(1); }\n\n.cover {\n  background-color: #dadada;\n  opacity: 0.6;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  visibility: hidden; }\n\n.open-cover {\n  visibility: visible; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\narticle {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 200px;\n  border-radius: 8px;\n  margin-top: 15px;\n  position: relative; }\n  article img {\n    width: 29px;\n    cursor: pointer;\n    position: absolute;\n    right: -43px;\n    top: 35px; }\n  article div {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    padding: 10px; }\n  article button {\n    border: none;\n    background-color: #ff4242;\n    color: white;\n    width: 23px;\n    height: 23px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    right: -40px;\n    cursor: pointer;\n    transition: transform 0.3s; }\n    article button:hover {\n      transform: scale(1.1); }\n\n#Super-important {\n  border-color: #f07575;\n  background-color: #ffaeae;\n  border-width: 2px;\n  border-style: solid; }\n\n#Not-important {\n  border-color: #2eca2e;\n  background-color: #97ff97;\n  border-width: 2px;\n  border-style: solid; }\n\n#important {\n  border-color: #ffae34;\n  background-color: #ffcf86;\n  border-width: 2px;\n  border-style: solid; }\n\n.title {\n  text-align: center; }\n\n.nav {\n  background-color: #47b691;\n  width: 300px;\n  position: fixed;\n  left: -300px;\n  bottom: 0;\n  top: 70px;\n  transform: scale(1, 1);\n  color: white;\n  transition: left 0.5s ease;\n  border-top: 1px solid white; }\n  .nav #general {\n    width: 190px;\n    background-color: #60c5a3;\n    height: 35px;\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    padding-left: 10px;\n    border-radius: 5px;\n    margin: 5px 0px 5px 0px;\n    cursor: pointer; }\n    .nav #general:hover {\n      background-color: #5fd3ac; }\n  .nav div {\n    margin-left: 30px;\n    margin-top: 80px; }\n  .nav h2 {\n    border-bottom-color: white;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    width: 80%;\n    padding-bottom: 15px; }\n  .nav button {\n    padding: 5px 10px 5px 10px;\n    margin-bottom: 20px;\n    border-radius: 4px;\n    border-width: 1px;\n    border-style: solid;\n    background-color: white;\n    cursor: pointer;\n    border: white 1px solid;\n    transition: background-color 0.2s, color 0.2s; }\n    .nav button:hover {\n      background-color: #ff4b4b;\n      padding: 6px 11px 6px 11px;\n      border: none;\n      color: white; }\n\n.nav-on {\n  left: 0; }\n\n.project-form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\n  border-radius: 8px;\n  width: 300px;\n  height: 230px;\n  background-color: white;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.1);\n  visibility: hidden;\n  transition: transform 0.5s;\n  z-index: 4; }\n  .project-form h2 {\n    margin: 0;\n    background-color: #47b691;\n    color: white;\n    height: 60px;\n    width: 100%;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .project-form .project-input::placeholder {\n    padding-left: 20px; }\n  .project-form input {\n    height: 30px;\n    width: 80%;\n    border-radius: 8px;\n    border: none;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .project-form div {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column; }\n  .project-form .close-proj {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 30px;\n    height: 28px;\n    width: 28px;\n    font-weight: 700;\n    background-color: #ff4242;\n    border: none;\n    color: white;\n    top: -6px;\n    right: -6px;\n    transition: background-color 0.3s; }\n    .project-form .close-proj:hover {\n      background-color: #ff2828; }\n\n.open-project {\n  visibility: visible;\n  transform: translate(-50%, -50%) scale(1); }\n\n.all-projects {\n  margin: 0;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: left;\n  flex-wrap: wrap;\n  align-items: center; }\n  .all-projects img {\n    width: 25px;\n    height: 25px;\n    margin-left: 10px;\n    cursor: pointer; }\n  .all-projects p {\n    width: 190px;\n    background-color: #60c5a3;\n    height: 35px;\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    padding-left: 10px;\n    border-radius: 5px;\n    margin: 5px 0px 5px 0px;\n    cursor: pointer; }\n    .all-projects p:hover {\n      background-color: #5fd3ac; }\n\n.edit-form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\n  border-radius: 8px;\n  width: 300px;\n  height: 400px;\n  background-color: white;\n  position: fixed;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.1);\n  visibility: hidden;\n  transition: tranform 0.4s, top 0.4s ease;\n  z-index: 4; }\n  .edit-form .edit-close {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 30px;\n    height: 28px;\n    width: 28px;\n    font-weight: 700;\n    background-color: #ff4242;\n    border: none;\n    color: white;\n    top: -6px;\n    right: -6px;\n    transition: background-color 0.3s; }\n    .edit-form .edit-close:hover {\n      background-color: #ff2828; }\n  .edit-form h2 {\n    margin: 0;\n    background-color: #47b691;\n    color: white;\n    height: 60px;\n    width: 100%;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .edit-form .name::placeholder {\n    padding-left: 20px; }\n  .edit-form input {\n    height: 30px;\n    width: 80%;\n    border-radius: 8px;\n    border: none;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .edit-form select {\n    height: 30px;\n    width: 80%;\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .edit-form div {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column; }\n\n.edit-on {\n  visibility: visible;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(1); }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\r\n$color: rgb(71, 182, 145);\r\nbody {\r\n  font-family: roboto;\r\n  margin: 0;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.title {\r\n  padding-top: 90px;\r\n}\r\n\r\nheader {\r\n  background-color: $color;\r\n  height: 70px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  img {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-left: 20px;\r\n    padding-top: 4px;\r\n    cursor: pointer;\r\n    transition: transform 0.1s;\r\n    &:active {\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n  h1 {\r\n    margin: 0;\r\n    padding-left: 40px;\r\n    color: white;\r\n  }\r\n}\r\n\r\n.add {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n  div {\r\n    font-size: 20px;\r\n    margin: 10px;\r\n  }\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n  border-radius: 8px;\r\n  width: 300px;\r\n  height: 400px;\r\n  background-color: rgb(255, 255, 255);\r\n  position: fixed;\r\n  top: 0%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0.1);\r\n  visibility: hidden;\r\n  transition: tranform 0.4s, top 0.4s ease;\r\n  z-index: 4;\r\n  .close {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    border-radius: 30px;\r\n    height: 28px;\r\n    width: 28px;\r\n    font-weight: 700;\r\n    background-color: rgb(255, 66, 66);\r\n    border: none;\r\n    color: white;\r\n    top: -6px;\r\n    right: -6px;\r\n    transition: background-color 0.3s;\r\n    &:hover {\r\n      background-color: rgb(255, 40, 40);\r\n    }\r\n  }\r\n\r\n  h2 {\r\n    margin: 0;\r\n    background-color: $color;\r\n    color: white;\r\n    height: 60px;\r\n    width: 100%;\r\n    border-radius: 8px 8px 0px 0px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .name {\r\n    &::placeholder {\r\n      padding-left: 20px;\r\n    }\r\n  }\r\n  input {\r\n    height: 30px;\r\n    width: 80%;\r\n    border-radius: 8px;\r\n    border: none;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    cursor: pointer;\r\n  }\r\n  select {\r\n    height: 30px;\r\n    width: 80%;\r\n    border: none;\r\n    border-radius: 8px;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    cursor: pointer;\r\n  }\r\n  div {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n}\r\n.open-form {\r\n  visibility: visible;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n.cover {\r\n  background-color: #dadada;\r\n  opacity: 0.6;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  visibility: hidden;\r\n}\r\n.open-cover {\r\n  visibility: visible;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\narticle {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 200px;\r\n  border-radius: 8px;\r\n  margin-top: 15px;\r\n  position: relative;\r\n  img {\r\n    width: 29px;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: -43px;\r\n    top: 35px;\r\n  }\r\n\r\n  div {\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    justify-content: center;\r\n    padding: 10px;\r\n  }\r\n  button {\r\n    border: none;\r\n    background-color: rgb(255, 66, 66);\r\n    color: white;\r\n    width: 23px;\r\n    height: 23px;\r\n    border-radius: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    right: -40px;\r\n    cursor: pointer;\r\n    transition: transform 0.3s;\r\n    &:hover {\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n}\r\n#Super-important {\r\n  border-color: #f07575;\r\n  background-color: #ffaeae;\r\n  border-width: 2px;\r\n  border-style: solid;\r\n}\r\n#Not-important {\r\n  border-color: #2eca2e;\r\n  background-color: #97ff97;\r\n  border-width: 2px;\r\n  border-style: solid;\r\n}\r\n#important {\r\n  border-color: #ffae34;\r\n  background-color: #ffcf86;\r\n  border-width: 2px;\r\n  border-style: solid;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n}\r\n\r\n.nav {\r\n  background-color: $color;\r\n  width: 300px;\r\n  position: fixed;\r\n  left: -300px;\r\n  bottom: 0;\r\n  top: 70px;\r\n  transform: scale(1, 1);\r\n  color: white;\r\n  transition: left 0.5s ease;\r\n  border-top: 1px solid white;\r\n\r\n  #general {\r\n    width: 190px;\r\n    background-color: rgb(96, 197, 163);\r\n    height: 35px;\r\n    display: flex;\r\n    flex-shrink: 0;\r\n    align-items: center;\r\n    padding-left: 10px;\r\n    border-radius: 5px;\r\n    margin: 5px 0px 5px 0px;\r\n    cursor: pointer;\r\n    &:hover {\r\n      background-color: rgb(95, 211, 172);\r\n    }\r\n  }\r\n\r\n  div {\r\n    margin-left: 30px;\r\n    margin-top: 80px;\r\n  }\r\n  h2 {\r\n    border-bottom-color: rgb(255, 255, 255);\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: solid;\r\n    width: 80%;\r\n    padding-bottom: 15px;\r\n  }\r\n  button {\r\n    padding: 5px 10px 5px 10px;\r\n    margin-bottom: 20px;\r\n    border-radius: 4px;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    border: white 1px solid;\r\n    transition: background-color 0.2s, color 0.2s;\r\n    &:hover {\r\n      background-color: #ff4b4b;\r\n      padding: 6px 11px 6px 11px;\r\n      border: none;\r\n      color: white;\r\n    }\r\n  }\r\n}\r\n.nav-on {\r\n  left: 0;\r\n}\r\n\r\n.project-form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n  border-radius: 8px;\r\n  width: 300px;\r\n  height: 230px;\r\n  background-color: rgb(255, 255, 255);\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0.1);\r\n  visibility: hidden;\r\n  transition: transform 0.5s;\r\n  z-index: 4;\r\n  h2 {\r\n    margin: 0;\r\n    background-color: $color;\r\n    color: white;\r\n    height: 60px;\r\n    width: 100%;\r\n    border-radius: 8px 8px 0px 0px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .project-input {\r\n    &::placeholder {\r\n      padding-left: 20px;\r\n    }\r\n  }\r\n  input {\r\n    height: 30px;\r\n    width: 80%;\r\n    border-radius: 8px;\r\n    border: none;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    cursor: pointer;\r\n  }\r\n  div {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n  .close-proj {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    border-radius: 30px;\r\n    height: 28px;\r\n    width: 28px;\r\n    font-weight: 700;\r\n    background-color: rgb(255, 66, 66);\r\n    border: none;\r\n    color: white;\r\n    top: -6px;\r\n    right: -6px;\r\n    transition: background-color 0.3s;\r\n    &:hover {\r\n      background-color: rgb(255, 40, 40);\r\n    }\r\n  }\r\n}\r\n.open-project {\r\n  visibility: visible;\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n.all-projects {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-shrink: 0;\r\n  justify-content: left;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  img {\r\n    width: 25px;\r\n    height: 25px;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n  }\r\n  p {\r\n    width: 190px;\r\n    background-color: rgb(96, 197, 163);\r\n    height: 35px;\r\n    display: flex;\r\n    flex-shrink: 0;\r\n    align-items: center;\r\n    padding-left: 10px;\r\n    border-radius: 5px;\r\n    margin: 5px 0px 5px 0px;\r\n    cursor: pointer;\r\n    &:hover {\r\n      background-color: rgb(95, 211, 172);\r\n    }\r\n  }\r\n}\r\n\r\n.edit-form {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n  border-radius: 8px;\r\n  width: 300px;\r\n  height: 400px;\r\n  background-color: rgb(255, 255, 255);\r\n  position: fixed;\r\n  top: 0%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0.1);\r\n  visibility: hidden;\r\n  transition: tranform 0.4s, top 0.4s ease;\r\n  z-index: 4;\r\n  .edit-close {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    border-radius: 30px;\r\n    height: 28px;\r\n    width: 28px;\r\n    font-weight: 700;\r\n    background-color: rgb(255, 66, 66);\r\n    border: none;\r\n    color: white;\r\n    top: -6px;\r\n    right: -6px;\r\n    transition: background-color 0.3s;\r\n    &:hover {\r\n      background-color: rgb(255, 40, 40);\r\n    }\r\n  }\r\n\r\n  h2 {\r\n    margin: 0;\r\n    background-color: $color;\r\n    color: white;\r\n    height: 60px;\r\n    width: 100%;\r\n    border-radius: 8px 8px 0px 0px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .name {\r\n    &::placeholder {\r\n      padding-left: 20px;\r\n    }\r\n  }\r\n  input {\r\n    height: 30px;\r\n    width: 80%;\r\n    border-radius: 8px;\r\n    border: none;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    cursor: pointer;\r\n  }\r\n  select {\r\n    height: 30px;\r\n    width: 80%;\r\n    border: none;\r\n    border-radius: 8px;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    cursor: pointer;\r\n  }\r\n  div {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.edit-on {\r\n  visibility: visible;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n"],"sourceRoot":""}]);
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




//disoplayes the todo list
function display() {
  //cleans everything when we run it
  let clear = document.querySelector("main");
  while (clear.hasChildNodes()) {
    clear.removeChild(clear.firstChild);
  }

  try {
    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.todos1[_index_js__WEBPACK_IMPORTED_MODULE_0__.courentProject][_index_js__WEBPACK_IMPORTED_MODULE_0__.courentName].length; i++) {
      let obj = _index_js__WEBPACK_IMPORTED_MODULE_0__.todos1[_index_js__WEBPACK_IMPORTED_MODULE_0__.courentProject][_index_js__WEBPACK_IMPORTED_MODULE_0__.courentName][i];
      
      let art = document.createElement("article");
      let editimg = new Image();
      editimg.src = _edit_png__WEBPACK_IMPORTED_MODULE_2__;
      editimg.setAttribute("class", "edit");
      editimg.setAttribute("value", i);
      for (let j in obj) {
        if (obj[j] == "important") {
          art.setAttribute("id", "important");
        } else if (obj[j] == "Super important") {
          art.setAttribute("id", "Super-important");
        } else if (obj[j] == "Not important") {
          art.setAttribute("id", "Not-important");
        } else {
          let div = document.createElement("div");
          div.innerHTML = obj[j];
          art.appendChild(div);
        }
      }
      let ex = document.createElement("button");
      ex.innerHTML = "X";
      ex.setAttribute("class", "ex-but");
      ex.setAttribute("value", i);
      art.appendChild(ex);
      art.appendChild(editimg);
      let main = document.querySelector("main");
      main.appendChild(art);
    }

  }
  catch(err){
    
  }
  
  
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.remove)();
}

// displays the projects in the nav bar 
function displayProjects() {
 
    //clears everything when we run it
  let clear = document.querySelector(".all-projects");
  while (clear.hasChildNodes()) {
    clear.removeChild(clear.firstChild);
  }
  
  let projectsdom = document.querySelector(".all-projects");

  // displays
  for (let i in _index_js__WEBPACK_IMPORTED_MODULE_0__.todos1) {
    let p = document.createElement("p");
    p.setAttribute("class", "pages");
    p.setAttribute("value", i);

    //
    p.innerHTML = Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_0__.todos1[i]);
    let img = new Image();
    img.src = _trash2_png__WEBPACK_IMPORTED_MODULE_1__;
    img.setAttribute("value", i);
    img.setAttribute("class", "trash");
    projectsdom.appendChild(p);
    if (i >=1){
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
function makeform() {
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
  }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "courentName": () => (/* binding */ courentName),
/* harmony export */   "courentProject": () => (/* binding */ courentProject),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "todos1": () => (/* binding */ todos1)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _newproject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newproject.js */ "./src/newproject.js");







if(!localStorage.getItem('todos1')){
  // If it doesn't exist, initialize it as an empty array
  localStorage.setItem('todos1', JSON.stringify([{General: [{description: `welcome this is your General list, but don't worry you can create different projects`, priority: 'Not important', date: 'Enjoy'}]}]));
}

let todos1 = [];

todos1 = JSON.parse(localStorage.getItem('todos1'));


//what ever this value is its going to add the to do there
let courentProject = 0;
let courentName = 'General';



function pages(){
  let pages = document.querySelectorAll('.pages');
  pages.forEach(function(button){
    button.addEventListener('click', function(){
      courentProject = +button.getAttribute('value');
      courentName = button.innerHTML;
      let title = document.querySelector('.title');
      title.innerHTML =  button.innerHTML;
      console.log('ok');
      document.querySelector('.add').style.display = 'flex';
      (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
      displayEdit();
    })
  });
}


(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
(0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
pages();

// we create projects
document.querySelector(".project-form").onsubmit = () => {
  let projname = document.querySelector(".project-input").value;
  // we add the value at the todos obj
  todos1.push({[projname]: []});

  let popup = document.querySelector(".project-form");
  popup.classList.remove("open-project");
  
  // midenizi to value
  let input = document.querySelector(".project-input");
  let cover = document.querySelector(".cover");
  cover.classList.remove("open-cover");
  input.value = "";
  console.log(todos1);
  localStorage.setItem('todos1', JSON.stringify(todos1));
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
  
  displayEdit();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
  pages();
  return false;
};

// when the form is submited
document.querySelector(".form").onsubmit = () => {
  let description = document.querySelector(".name").value;
  let priority = document.querySelector("select").value;
  let date = document.querySelector(".date").value;
  // we add the new todo
  todos1[courentProject][courentName].push({description, priority, date});
  let popup = document.querySelector(".form");
  popup.classList.remove("open-form");
  // we delete the values
  let input = document.querySelector(".name");
  input.value = "";
  
  let cover = document.querySelector(".cover");
  cover.classList.remove("open-cover");
  console.log(todos1);

  localStorage.setItem('todos1', JSON.stringify(todos1));

  //return false so the form will stay in our page
  pages();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
  displayEdit();
  
  return false;
};

(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

// in this function we edit the existent todos
let editpos = 0;
function displayEdit() {
  let editbutton = document.querySelectorAll(".edit");
  editbutton.forEach(function (button) {
    button.addEventListener("click", function () {
      let popup = document.querySelector(".edit-form");
      popup.classList.add("edit-on");
      let cover = document.querySelector(".cover");
      cover.classList.add("open-cover");
      editpos = document.querySelector(".edit").getAttribute("value");
      editpos = button.getAttribute("value");
      let description = document.querySelector(".edit-name");
      description.value = todos1[courentProject][courentName][editpos].description;
      let priority = document.querySelector(".edit-select");
      priority.value = todos1[courentProject][courentName][editpos].priority;
      let date = document.querySelector(".edit-date");
      date.value = todos1[courentProject][courentName][editpos].date;

    });
  });

  document.querySelector(".edit-close").addEventListener("click", function () {
    let popup = document.querySelector(".edit-form");
    popup.classList.remove("edit-on");
    let cover = document.querySelector(".cover");
    cover.classList.remove("open-cover");
  });
  
}
displayEdit();

// here on submit we use the form for edit
document.querySelector(".edit-form").onsubmit = () => {
  let description = document.querySelector(".edit-name").value;
  let priority = document.querySelector(".edit-select").value;
  let date = document.querySelector(".edit-date").value;
  // we replace the old todo with the new todo
  todos1[courentProject][courentName].splice([editpos],1, {description, priority, date});
  
  
  let popup = document.querySelector(".edit-form");
  popup.classList.remove("edit-on");
  // deletes the value
  let input = document.querySelector(".edit-name");
  input.value = "";

  let cover = document.querySelector(".cover");
  cover.classList.remove("open-cover");

  localStorage.setItem('todos1', JSON.stringify(todos1));

  pages();
  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
  displayEdit();
  return false;
};

// here we just delete the projet of our choice
function removeProject() {
  const removeBut = document.querySelectorAll(".trash");
  removeBut.forEach(function (img) {
    img.addEventListener("click", function () {
      todos1.splice(img.getAttribute('value'),1);
      
      let title = document.querySelector('.title');
      title.innerHTML =  'Deleted';
      document.querySelector('.add').style.display = 'none';
      courentName = 'General';

      localStorage.setItem('todos1', JSON.stringify(todos1));

      (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
      (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
      pages();
    });
  });
}

// here we just delete the todo of our choice
function remove() {
  const removeBut = document.querySelectorAll(".ex-but");
  removeBut.forEach(function (button) {
    button.addEventListener("click", function () {
      todos1[courentProject][courentName].splice(button.value, 1);

      localStorage.setItem('todos1', JSON.stringify(todos1));

      pages();
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
function newproj() {
    //creates the form for the projects
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
function sidebar() {
    document.querySelector('#hum').addEventListener('click', () => { 
        let popup = document.querySelector(".nav");
        // if the .nav contains the class nav-on 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxrQkFBa0I7QUFDakk7QUFDQSxnREFBZ0Qsd0JBQXdCLGNBQWMsNEJBQTRCLFlBQVksd0JBQXdCLFlBQVksOEJBQThCLGlCQUFpQixrQkFBa0Isd0JBQXdCLG9CQUFvQixXQUFXLGFBQWEsWUFBWSxpQkFBaUIsZ0JBQWdCLGtCQUFrQixtQkFBbUIsd0JBQXdCLHVCQUF1QixzQkFBc0IsbUNBQW1DLHlCQUF5QixnQ0FBZ0MsZUFBZSxnQkFBZ0IseUJBQXlCLHFCQUFxQixVQUFVLGtCQUFrQiw0QkFBNEIscUJBQXFCLHNCQUFzQixjQUFjLHNCQUFzQixxQkFBcUIsV0FBVyxrQkFBa0Isd0JBQXdCLDJCQUEyQix3Q0FBd0MsdUJBQXVCLGlCQUFpQixrQkFBa0IsNEJBQTRCLG9CQUFvQixZQUFZLGNBQWMsZ0RBQWdELHVCQUF1Qiw2Q0FBNkMsaUJBQWlCLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQix5QkFBeUIsc0JBQXNCLGdCQUFnQiwwQkFBMEIsbUJBQW1CLGtCQUFrQix1QkFBdUIsZ0NBQWdDLG1CQUFtQixtQkFBbUIsZ0JBQWdCLGtCQUFrQiwwQ0FBMEMsMEJBQTBCLG9DQUFvQyxjQUFjLGdCQUFnQixnQ0FBZ0MsbUJBQW1CLG1CQUFtQixrQkFBa0IscUNBQXFDLG9CQUFvQiwwQkFBMEIsZ0NBQWdDLDhCQUE4QiwyQkFBMkIsaUJBQWlCLG1CQUFtQixpQkFBaUIseUJBQXlCLG1CQUFtQiwwQ0FBMEMsd0JBQXdCLGtCQUFrQixtQkFBbUIsaUJBQWlCLG1CQUFtQix5QkFBeUIsMENBQTBDLHdCQUF3QixlQUFlLG1CQUFtQixrQkFBa0Isb0JBQW9CLG9DQUFvQywwQkFBMEIsK0JBQStCLGdCQUFnQix3QkFBd0IsYUFBYSxnREFBZ0QsWUFBWSw4QkFBOEIsaUJBQWlCLG9CQUFvQixXQUFXLGNBQWMsYUFBYSxZQUFZLGVBQWUseUJBQXlCLGlCQUFpQiwwQkFBMEIsVUFBVSxrQkFBa0IsMkJBQTJCLDBCQUEwQixhQUFhLGtCQUFrQixtQ0FBbUMsMkJBQTJCLHdCQUF3QixpQkFBaUIsdUJBQXVCLHFCQUFxQix5QkFBeUIsaUJBQWlCLGtCQUFrQixzQkFBc0IseUJBQXlCLG1CQUFtQixrQkFBa0IsaUJBQWlCLG9CQUFvQiwwQkFBMEIseUJBQXlCLDhCQUE4QixzQkFBc0Isb0JBQW9CLG1CQUFtQixnQ0FBZ0MsbUJBQW1CLGtCQUFrQixtQkFBbUIsMEJBQTBCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixtQkFBbUIsc0JBQXNCLG1DQUFtQyw0QkFBNEIsZ0NBQWdDLHNCQUFzQiwwQkFBMEIsOEJBQThCLHNCQUFzQiwwQkFBMEIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsc0JBQXNCLDBCQUEwQixnQkFBZ0IsMEJBQTBCLDhCQUE4QixzQkFBc0IsMEJBQTBCLFlBQVkseUJBQXlCLFVBQVUsOEJBQThCLGlCQUFpQixvQkFBb0IsaUJBQWlCLGNBQWMsY0FBYywyQkFBMkIsaUJBQWlCLCtCQUErQixrQ0FBa0MsbUJBQW1CLG1CQUFtQixnQ0FBZ0MsbUJBQW1CLG9CQUFvQixxQkFBcUIsMEJBQTBCLHlCQUF5Qix5QkFBeUIsOEJBQThCLHdCQUF3QiwyQkFBMkIsb0NBQW9DLGNBQWMsd0JBQXdCLHlCQUF5QixhQUFhLGlDQUFpQywrQkFBK0IsaUNBQWlDLGlCQUFpQiw2QkFBNkIsaUJBQWlCLGlDQUFpQywwQkFBMEIseUJBQXlCLHdCQUF3QiwwQkFBMEIsOEJBQThCLHNCQUFzQiw4QkFBOEIsc0RBQXNELHlCQUF5QixrQ0FBa0MsbUNBQW1DLHFCQUFxQix1QkFBdUIsYUFBYSxjQUFjLG1CQUFtQixrQkFBa0Isd0JBQXdCLDJCQUEyQix3Q0FBd0MsdUJBQXVCLGlCQUFpQixrQkFBa0IsNEJBQTRCLG9CQUFvQixhQUFhLGNBQWMsZ0RBQWdELHVCQUF1QiwrQkFBK0IsaUJBQWlCLHNCQUFzQixnQkFBZ0IsZ0NBQWdDLG1CQUFtQixtQkFBbUIsa0JBQWtCLHFDQUFxQyxvQkFBb0IsMEJBQTBCLGdDQUFnQywrQ0FBK0MsMkJBQTJCLHlCQUF5QixtQkFBbUIsaUJBQWlCLHlCQUF5QixtQkFBbUIsMENBQTBDLHdCQUF3Qix1QkFBdUIsbUJBQW1CLGtCQUFrQixvQkFBb0Isb0NBQW9DLDBCQUEwQiwrQkFBK0IsK0JBQStCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixzQkFBc0IsZ0JBQWdCLDBCQUEwQixtQkFBbUIsa0JBQWtCLHVCQUF1QixnQ0FBZ0MsbUJBQW1CLG1CQUFtQixnQkFBZ0Isa0JBQWtCLDBDQUEwQyx1Q0FBdUMsb0NBQW9DLG1CQUFtQix3QkFBd0IsZ0RBQWdELG1CQUFtQixjQUFjLGtCQUFrQixtQkFBbUIsMEJBQTBCLG9CQUFvQiwwQkFBMEIsdUJBQXVCLGtCQUFrQixtQkFBbUIsd0JBQXdCLHdCQUF3QixxQkFBcUIsbUJBQW1CLGdDQUFnQyxtQkFBbUIsb0JBQW9CLHFCQUFxQiwwQkFBMEIseUJBQXlCLHlCQUF5Qiw4QkFBOEIsd0JBQXdCLDZCQUE2QixvQ0FBb0MsZ0JBQWdCLGtCQUFrQix3QkFBd0IsMkJBQTJCLHdDQUF3Qyx1QkFBdUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsb0JBQW9CLFlBQVksY0FBYyxnREFBZ0QsdUJBQXVCLDZDQUE2QyxpQkFBaUIsNEJBQTRCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixzQkFBc0IsZ0JBQWdCLDBCQUEwQixtQkFBbUIsa0JBQWtCLHVCQUF1QixnQ0FBZ0MsbUJBQW1CLG1CQUFtQixnQkFBZ0Isa0JBQWtCLDBDQUEwQyxvQ0FBb0Msb0NBQW9DLG1CQUFtQixnQkFBZ0IsZ0NBQWdDLG1CQUFtQixtQkFBbUIsa0JBQWtCLHFDQUFxQyxvQkFBb0IsMEJBQTBCLGdDQUFnQyxtQ0FBbUMsMkJBQTJCLHNCQUFzQixtQkFBbUIsaUJBQWlCLHlCQUF5QixtQkFBbUIsMENBQTBDLHdCQUF3Qix1QkFBdUIsbUJBQW1CLGlCQUFpQixtQkFBbUIseUJBQXlCLDBDQUEwQyx3QkFBd0Isb0JBQW9CLG1CQUFtQixrQkFBa0Isb0JBQW9CLG9DQUFvQywwQkFBMEIsK0JBQStCLGNBQWMsd0JBQXdCLGFBQWEsZ0RBQWdELFNBQVMsaUZBQWlGLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsZUFBZSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxrQkFBa0IsT0FBTyxXQUFXLFlBQVksaUJBQWlCLE1BQU0sVUFBVSxZQUFZLGFBQWEsZ0JBQWdCLE1BQU0sVUFBVSxnQkFBZ0IsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsZ0JBQWdCLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsaUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8sV0FBVyxhQUFhLFlBQVksVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxnQkFBZ0IsT0FBTyxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLG1CQUFtQixNQUFNLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxlQUFlLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxhQUFhLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxrQkFBa0IsT0FBTyxhQUFhLGtCQUFrQixPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsaUJBQWlCLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGtCQUFrQixPQUFPLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixNQUFNLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxnQkFBZ0IsS0FBSyxXQUFXLGFBQWEsWUFBWSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGdCQUFnQixPQUFPLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxrQkFBa0IsT0FBTyxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxpQkFBaUIsT0FBTyxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxnQkFBZ0IsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxtQkFBbUIsTUFBTSxVQUFVLFlBQVks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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL25ld3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4OyB9XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctdG9wOiA5MHB4OyB9XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0N2I2OTE7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDI7IH1cXG4gIGhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xczsgfVxcbiAgICBoZWFkZXIgaW1nOmFjdGl2ZSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICBoZWFkZXIgaDEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLmFkZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYWRkIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luOiAxMHB4OyB9XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5mb3JtIDAuNHMsIHRvcCAwLjRzIGVhc2U7XFxuICB6LWluZGV4OiA0OyB9XFxuICAuZm9ybSAuY2xvc2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDI0MjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRvcDogLTZweDtcXG4gICAgcmlnaHQ6IC02cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zczsgfVxcbiAgICAuZm9ybSAuY2xvc2U6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjI4Mjg7IH1cXG4gIC5mb3JtIGgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5mb3JtIC5uYW1lOjpwbGFjZWhvbGRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxcbiAgLmZvcm0gaW5wdXQge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZm9ybSBzZWxlY3Qge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZm9ybSBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5vcGVuLWZvcm0ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7IH1cXG5cXG4uY292ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4ub3Blbi1jb3ZlciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG5hcnRpY2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIGFydGljbGUgaW1nIHtcXG4gICAgd2lkdGg6IDI5cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTQzcHg7XFxuICAgIHRvcDogMzVweDsgfVxcbiAgYXJ0aWNsZSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICBhcnRpY2xlIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDI0MjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMjNweDtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7IH1cXG4gICAgYXJ0aWNsZSBidXR0b246aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcblxcbiNTdXBlci1pbXBvcnRhbnQge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjA3NTc1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWVhZTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxcblxcbiNOb3QtaW1wb3J0YW50IHtcXG4gIGJvcmRlci1jb2xvcjogIzJlY2EyZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5N2ZmOTc7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IH1cXG5cXG4jaW1wb3J0YW50IHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYWUzNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNmODY7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IH1cXG5cXG4udGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogLTMwMHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgdG9wOiA3MHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlOyB9XFxuICAubmF2ICNnZW5lcmFsIHtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBjNWEzO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAubmF2ICNnZW5lcmFsOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZkM2FjOyB9XFxuICAubmF2IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4OyB9XFxuICAubmF2IGgyIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4OyB9XFxuICAubmF2IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IHdoaXRlIDFweCBzb2xpZDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzOyB9XFxuICAgIC5uYXYgYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjRiO1xcbiAgICAgIHBhZGRpbmc6IDZweCAxMXB4IDZweCAxMXB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4ubmF2LW9uIHtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxuICB6LWluZGV4OiA0OyB9XFxuICAucHJvamVjdC1mb3JtIGgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5wcm9qZWN0LWZvcm0gLnByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XFxuICAucHJvamVjdC1mb3JtIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLnByb2plY3QtZm9ybSBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLnByb2plY3QtZm9ybSAuY2xvc2UtcHJvaiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICByaWdodDogLTZweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzOyB9XFxuICAgIC5wcm9qZWN0LWZvcm0gLmNsb3NlLXByb2o6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjI4Mjg7IH1cXG5cXG4ub3Blbi1wcm9qZWN0IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTsgfVxcblxcbi5hbGwtcHJvamVjdHMge1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmFsbC1wcm9qZWN0cyBpbWcge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYWxsLXByb2plY3RzIHAge1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGM1YTM7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5hbGwtcHJvamVjdHMgcDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVmZDNhYzsgfVxcblxcbi5lZGl0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5mb3JtIDAuNHMsIHRvcCAwLjRzIGVhc2U7XFxuICB6LWluZGV4OiA0OyB9XFxuICAuZWRpdC1mb3JtIC5lZGl0LWNsb3NlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQyNDI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0b3A6IC02cHg7XFxuICAgIHJpZ2h0OiAtNnB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7IH1cXG4gICAgLmVkaXQtZm9ybSAuZWRpdC1jbG9zZTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjgyODsgfVxcbiAgLmVkaXQtZm9ybSBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YjY5MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAuZWRpdC1mb3JtIC5uYW1lOjpwbGFjZWhvbGRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxcbiAgLmVkaXQtZm9ybSBpbnB1dCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5lZGl0LWZvcm0gc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmVkaXQtZm9ybSBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5lZGl0LW9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQVp1QjtFQWF2QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVSxFQUFBO0VBVFo7SUFXSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQixFQUFBO0lBaEI5QjtNQWtCTSxxQkFBcUIsRUFBQTtFQWxCM0I7SUFzQkksU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7O0FBSWhCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBSmpCO0lBTUksZUFBZTtJQUNmLFlBQVksRUFBQTs7QUFJaEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQW9DO0VBQ3BDLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLFVBQVUsRUFBQTtFQWZaO0lBaUJJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5QkFBa0M7SUFDbEMsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVztJQUNYLGlDQUFpQyxFQUFBO0lBaENyQztNQWtDTSx5QkFBa0MsRUFBQTtFQWxDeEM7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QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQixFQUFBOztBQUkxQjtFQUNFLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IseUNBQXlDLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4kY29sb3I6IHJnYig3MSwgMTgyLCAxNDUpO1xcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIHBhZGRpbmctdG9wOiA5MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXM7XFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIGgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFkZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGl2IHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbmZvcm0gMC40cywgdG9wIDAuNHMgZWFzZTtcXHJcXG4gIHotaW5kZXg6IDQ7XFxyXFxuICAuY2xvc2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNjYsIDY2KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRvcDogLTZweDtcXHJcXG4gICAgcmlnaHQ6IC02cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDAsIDQwKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgaDIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLm5hbWUge1xcclxcbiAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBpbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBzZWxlY3Qge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgZGl2IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxufVxcclxcbi5vcGVuLWZvcm0ge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcbi5jb3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuLm9wZW4tY292ZXIge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGltZyB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IC00M3B4O1xcclxcbiAgICB0b3A6IDM1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2NiwgNjYpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAyM3B4O1xcclxcbiAgICBoZWlnaHQ6IDIzcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAtNDBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbiNTdXBlci1pbXBvcnRhbnQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZjA3NTc1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWVhZTtcXHJcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuI05vdC1pbXBvcnRhbnQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMmVjYTJlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3ZmY5NztcXHJcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuI2ltcG9ydGFudCB7XFxyXFxuICBib3JkZXItY29sb3I6ICNmZmFlMzQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZjg2O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IC0zMDBweDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRvcDogNzBweDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHJcXG4gICNnZW5lcmFsIHtcXHJcXG4gICAgd2lkdGg6IDE5MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDE5NywgMTYzKTtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMjExLCAxNzIpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXHJcXG4gIH1cXHJcXG4gIGgyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IHdoaXRlIDFweCBzb2xpZDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjRiO1xcclxcbiAgICAgIHBhZGRpbmc6IDZweCAxMXB4IDZweCAxMXB4O1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLm5hdi1vbiB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcclxcbiAgei1pbmRleDogNDtcXHJcXG4gIGgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5wcm9qZWN0LWlucHV0IHtcXHJcXG4gICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgZGl2IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICAuY2xvc2UtcHJvaiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2NiwgNjYpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdG9wOiAtNnB4O1xcclxcbiAgICByaWdodDogLTZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0MCwgNDApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5vcGVuLXByb2plY3Qge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbn1cXHJcXG4uYWxsLXByb2plY3RzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgcCB7XFxyXFxuICAgIHdpZHRoOiAxOTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCAxOTcsIDE2Myk7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUsIDIxMSwgMTcyKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbmZvcm0gMC40cywgdG9wIDAuNHMgZWFzZTtcXHJcXG4gIHotaW5kZXg6IDQ7XFxyXFxuICAuZWRpdC1jbG9zZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2NiwgNjYpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdG9wOiAtNnB4O1xcclxcbiAgICByaWdodDogLTZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0MCwgNDApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAubmFtZSB7XFxyXFxuICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIGlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIHNlbGVjdCB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBkaXYge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtb24ge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdG9kb3MxLCByZW1vdmUsIHJlbW92ZVByb2plY3QsIGNvdXJlbnRQcm9qZWN0LCBwYWdlcywgY291cmVudE5hbWUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgdHJhc2gyIGZyb20gXCIuL3RyYXNoMi5wbmdcIjtcclxuaW1wb3J0IGVkaXQgZnJvbSBcIi4vZWRpdC5wbmdcIjtcclxuXHJcbi8vZGlzb3BsYXllcyB0aGUgdG9kbyBsaXN0XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5KCkge1xyXG4gIC8vY2xlYW5zIGV2ZXJ5dGhpbmcgd2hlbiB3ZSBydW4gaXRcclxuICBsZXQgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICB3aGlsZSAoY2xlYXIuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICBjbGVhci5yZW1vdmVDaGlsZChjbGVhci5maXJzdENoaWxkKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zMVtjb3VyZW50UHJvamVjdF1bY291cmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBvYmogPSB0b2RvczFbY291cmVudFByb2plY3RdW2NvdXJlbnROYW1lXVtpXTtcclxuICAgICAgXHJcbiAgICAgIGxldCBhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgICAgbGV0IGVkaXRpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgZWRpdGltZy5zcmMgPSBlZGl0O1xyXG4gICAgICBlZGl0aW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdFwiKTtcclxuICAgICAgZWRpdGltZy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpKTtcclxuICAgICAgZm9yIChsZXQgaiBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqW2pdID09IFwiaW1wb3J0YW50XCIpIHtcclxuICAgICAgICAgIGFydC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltcG9ydGFudFwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9ialtqXSA9PSBcIlN1cGVyIGltcG9ydGFudFwiKSB7XHJcbiAgICAgICAgICBhcnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJTdXBlci1pbXBvcnRhbnRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvYmpbal0gPT0gXCJOb3QgaW1wb3J0YW50XCIpIHtcclxuICAgICAgICAgIGFydC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIk5vdC1pbXBvcnRhbnRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgZGl2LmlubmVySFRNTCA9IG9ialtqXTtcclxuICAgICAgICAgIGFydC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBleC5pbm5lckhUTUwgPSBcIlhcIjtcclxuICAgICAgZXguc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJleC1idXRcIik7XHJcbiAgICAgIGV4LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGkpO1xyXG4gICAgICBhcnQuYXBwZW5kQ2hpbGQoZXgpO1xyXG4gICAgICBhcnQuYXBwZW5kQ2hpbGQoZWRpdGltZyk7XHJcbiAgICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYXJ0KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIGNhdGNoKGVycil7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgcmVtb3ZlKCk7XHJcbn1cclxuXHJcbi8vIGRpc3BsYXlzIHRoZSBwcm9qZWN0cyBpbiB0aGUgbmF2IGJhciBcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcclxuIFxyXG4gICAgLy9jbGVhcnMgZXZlcnl0aGluZyB3aGVuIHdlIHJ1biBpdFxyXG4gIGxldCBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLXByb2plY3RzXCIpO1xyXG4gIHdoaWxlIChjbGVhci5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIGNsZWFyLnJlbW92ZUNoaWxkKGNsZWFyLmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxuICBcclxuICBsZXQgcHJvamVjdHNkb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC1wcm9qZWN0c1wiKTtcclxuXHJcbiAgLy8gZGlzcGxheXNcclxuICBmb3IgKGxldCBpIGluIHRvZG9zMSkge1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYWdlc1wiKTtcclxuICAgIHAuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaSk7XHJcblxyXG4gICAgLy9cclxuICAgIHAuaW5uZXJIVE1MID0gT2JqZWN0LmtleXModG9kb3MxW2ldKTtcclxuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSB0cmFzaDI7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaSk7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0cmFzaFwiKTtcclxuICAgIHByb2plY3RzZG9tLmFwcGVuZENoaWxkKHApO1xyXG4gICAgaWYgKGkgPj0xKXtcclxuICAgICAgcHJvamVjdHNkb20uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVByb2plY3QoKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlZm9ybSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIm9wZW4tZm9ybVwiKTtcclxuICAgICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICAgICAgY292ZXIuY2xhc3NMaXN0LmFkZChcIm9wZW4tY292ZXJcIik7XHJcbiAgICB9KTtcclxuICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG4gICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1mb3JtXCIpO1xyXG4gICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1jb3ZlclwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAiLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgbWFrZWZvcm0gZnJvbSBcIi4vZm9ybS5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5LCBkaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9kaXNwbGF5LmpzXCI7XHJcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcclxuaW1wb3J0IG5ld3Byb2ogZnJvbSBcIi4vbmV3cHJvamVjdC5qc1wiO1xyXG5cclxuXHJcbmlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MxJykpe1xyXG4gIC8vIElmIGl0IGRvZXNuJ3QgZXhpc3QsIGluaXRpYWxpemUgaXQgYXMgYW4gZW1wdHkgYXJyYXlcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MxJywgSlNPTi5zdHJpbmdpZnkoW3tHZW5lcmFsOiBbe2Rlc2NyaXB0aW9uOiBgd2VsY29tZSB0aGlzIGlzIHlvdXIgR2VuZXJhbCBsaXN0LCBidXQgZG9uJ3Qgd29ycnkgeW91IGNhbiBjcmVhdGUgZGlmZmVyZW50IHByb2plY3RzYCwgcHJpb3JpdHk6ICdOb3QgaW1wb3J0YW50JywgZGF0ZTogJ0Vuam95J31dfV0pKTtcclxufVxyXG5cclxubGV0IHRvZG9zMSA9IFtdO1xyXG5cclxudG9kb3MxID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MxJykpO1xyXG5leHBvcnQgeyB0b2RvczEgfTtcclxuXHJcbi8vd2hhdCBldmVyIHRoaXMgdmFsdWUgaXMgaXRzIGdvaW5nIHRvIGFkZCB0aGUgdG8gZG8gdGhlcmVcclxubGV0IGNvdXJlbnRQcm9qZWN0ID0gMDtcclxubGV0IGNvdXJlbnROYW1lID0gJ0dlbmVyYWwnO1xyXG5leHBvcnQgeyBjb3VyZW50UHJvamVjdCB9O1xyXG5leHBvcnQgeyBjb3VyZW50TmFtZSB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VzKCl7XHJcbiAgbGV0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2VzJyk7XHJcbiAgcGFnZXMuZm9yRWFjaChmdW5jdGlvbihidXR0b24pe1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgY291cmVudFByb2plY3QgPSArYnV0dG9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgICAgY291cmVudE5hbWUgPSBidXR0b24uaW5uZXJIVE1MO1xyXG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcclxuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gIGJ1dHRvbi5pbm5lckhUTUw7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgZGlzcGxheSgpO1xyXG4gICAgICBkaXNwbGF5RWRpdCgpO1xyXG4gICAgfSlcclxuICB9KTtcclxufVxyXG5cclxuXHJcbmRpc3BsYXkoKTtcclxuZGlzcGxheVByb2plY3RzKCk7XHJcbnBhZ2VzKCk7XHJcblxyXG4vLyB3ZSBjcmVhdGUgcHJvamVjdHNcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIikub25zdWJtaXQgPSAoKSA9PiB7XHJcbiAgbGV0IHByb2puYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWlucHV0XCIpLnZhbHVlO1xyXG4gIC8vIHdlIGFkZCB0aGUgdmFsdWUgYXQgdGhlIHRvZG9zIG9ialxyXG4gIHRvZG9zMS5wdXNoKHtbcHJvam5hbWVdOiBbXX0pO1xyXG5cclxuICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1wcm9qZWN0XCIpO1xyXG4gIFxyXG4gIC8vIG1pZGVuaXppIHRvIHZhbHVlXHJcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWlucHV0XCIpO1xyXG4gIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tY292ZXJcIik7XHJcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIGNvbnNvbGUubG9nKHRvZG9zMSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zMScsIEpTT04uc3RyaW5naWZ5KHRvZG9zMSkpO1xyXG4gIGRpc3BsYXkoKTtcclxuICBcclxuICBkaXNwbGF5RWRpdCgpO1xyXG4gIGRpc3BsYXlQcm9qZWN0cygpO1xyXG4gIHBhZ2VzKCk7XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLy8gd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXRlZFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIikub25zdWJtaXQgPSAoKSA9PiB7XHJcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpLnZhbHVlO1xyXG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWU7XHJcbiAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIikudmFsdWU7XHJcbiAgLy8gd2UgYWRkIHRoZSBuZXcgdG9kb1xyXG4gIHRvZG9zMVtjb3VyZW50UHJvamVjdF1bY291cmVudE5hbWVdLnB1c2goe2Rlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZX0pO1xyXG4gIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1mb3JtXCIpO1xyXG4gIC8vIHdlIGRlbGV0ZSB0aGUgdmFsdWVzXHJcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpO1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICBcclxuICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gIGNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLWNvdmVyXCIpO1xyXG4gIGNvbnNvbGUubG9nKHRvZG9zMSk7XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvczEnLCBKU09OLnN0cmluZ2lmeSh0b2RvczEpKTtcclxuXHJcbiAgLy9yZXR1cm4gZmFsc2Ugc28gdGhlIGZvcm0gd2lsbCBzdGF5IGluIG91ciBwYWdlXHJcbiAgcGFnZXMoKTtcclxuICBkaXNwbGF5KCk7XHJcbiAgZGlzcGxheUVkaXQoKTtcclxuICBcclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5zaWRlYmFyKCk7XHJcblxyXG4vLyBpbiB0aGlzIGZ1bmN0aW9uIHdlIGVkaXQgdGhlIGV4aXN0ZW50IHRvZG9zXHJcbmxldCBlZGl0cG9zID0gMDtcclxuZnVuY3Rpb24gZGlzcGxheUVkaXQoKSB7XHJcbiAgbGV0IGVkaXRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRcIik7XHJcbiAgZWRpdGJ1dHRvbi5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybVwiKTtcclxuICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImVkaXQtb25cIik7XHJcbiAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgICAgIGNvdmVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuLWNvdmVyXCIpO1xyXG4gICAgICBlZGl0cG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xyXG4gICAgICBlZGl0cG9zID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xyXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbmFtZVwiKTtcclxuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSB0b2RvczFbY291cmVudFByb2plY3RdW2NvdXJlbnROYW1lXVtlZGl0cG9zXS5kZXNjcmlwdGlvbjtcclxuICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXNlbGVjdFwiKTtcclxuICAgICAgcHJpb3JpdHkudmFsdWUgPSB0b2RvczFbY291cmVudFByb2plY3RdW2NvdXJlbnROYW1lXVtlZGl0cG9zXS5wcmlvcml0eTtcclxuICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZGF0ZVwiKTtcclxuICAgICAgZGF0ZS52YWx1ZSA9IHRvZG9zMVtjb3VyZW50UHJvamVjdF1bY291cmVudE5hbWVdW2VkaXRwb3NdLmRhdGU7XHJcblxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1jbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWZvcm1cIik7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiZWRpdC1vblwiKTtcclxuICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1jb3ZlclwiKTtcclxuICB9KTtcclxuICBcclxufVxyXG5kaXNwbGF5RWRpdCgpO1xyXG5cclxuLy8gaGVyZSBvbiBzdWJtaXQgd2UgdXNlIHRoZSBmb3JtIGZvciBlZGl0XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtXCIpLm9uc3VibWl0ID0gKCkgPT4ge1xyXG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1uYW1lXCIpLnZhbHVlO1xyXG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1zZWxlY3RcIikudmFsdWU7XHJcbiAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZGF0ZVwiKS52YWx1ZTtcclxuICAvLyB3ZSByZXBsYWNlIHRoZSBvbGQgdG9kbyB3aXRoIHRoZSBuZXcgdG9kb1xyXG4gIHRvZG9zMVtjb3VyZW50UHJvamVjdF1bY291cmVudE5hbWVdLnNwbGljZShbZWRpdHBvc10sMSwge2Rlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZX0pO1xyXG4gIFxyXG4gIFxyXG4gIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtXCIpO1xyXG4gIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0LW9uXCIpO1xyXG4gIC8vIGRlbGV0ZXMgdGhlIHZhbHVlXHJcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW5hbWVcIik7XHJcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gIGNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLWNvdmVyXCIpO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MxJywgSlNPTi5zdHJpbmdpZnkodG9kb3MxKSk7XHJcblxyXG4gIHBhZ2VzKCk7XHJcbiAgZGlzcGxheSgpO1xyXG4gIGRpc3BsYXlFZGl0KCk7XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLy8gaGVyZSB3ZSBqdXN0IGRlbGV0ZSB0aGUgcHJvamV0IG9mIG91ciBjaG9pY2VcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoKSB7XHJcbiAgY29uc3QgcmVtb3ZlQnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaFwiKTtcclxuICByZW1vdmVCdXQuZm9yRWFjaChmdW5jdGlvbiAoaW1nKSB7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdG9kb3MxLnNwbGljZShpbWcuZ2V0QXR0cmlidXRlKCd2YWx1ZScpLDEpO1xyXG4gICAgICBcclxuICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9ICAnRGVsZXRlZCc7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBjb3VyZW50TmFtZSA9ICdHZW5lcmFsJztcclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvczEnLCBKU09OLnN0cmluZ2lmeSh0b2RvczEpKTtcclxuXHJcbiAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xyXG4gICAgICBkaXNwbGF5KCk7XHJcbiAgICAgIHBhZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gaGVyZSB3ZSBqdXN0IGRlbGV0ZSB0aGUgdG9kbyBvZiBvdXIgY2hvaWNlXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgY29uc3QgcmVtb3ZlQnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leC1idXRcIik7XHJcbiAgcmVtb3ZlQnV0LmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRvZG9zMVtjb3VyZW50UHJvamVjdF1bY291cmVudE5hbWVdLnNwbGljZShidXR0b24udmFsdWUsIDEpO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zMScsIEpTT04uc3RyaW5naWZ5KHRvZG9zMSkpO1xyXG5cclxuICAgICAgcGFnZXMoKTtcclxuICAgICAgZGlzcGxheSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1ha2Vmb3JtKCk7XHJcbm5ld3Byb2ooKTtcclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld3Byb2ooKSB7XHJcbiAgICAvL2NyZWF0ZXMgdGhlIGZvcm0gZm9yIHRoZSBwcm9qZWN0c1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJvcGVuLXByb2plY3RcIik7XHJcbiAgICAgICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICAgICAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKFwib3Blbi1jb3ZlclwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtcHJvalwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXByb2plY3RcIik7XHJcbiAgICAgICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICAgICAgICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1jb3ZlclwiKTtcclxuICAgIH0pO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZWJhcigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXHJcbiAgICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XHJcbiAgICAgICAgLy8gaWYgdGhlIC5uYXYgY29udGFpbnMgdGhlIGNsYXNzIG5hdi1vbiBcclxuICAgICAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LW9uXCIpKSB7XHJcbiAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBuYXYgYmFyXHJcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtb25cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gb3BlbiB0aGUgbmF2IGJhclxyXG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwibmF2LW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
