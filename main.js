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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: roboto;\n  margin: 0;\n  padding-bottom: 100px; }\n\n.title {\n  padding-top: 90px; }\n\nheader {\n  background-color: #47b691;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 2; }\n  header img {\n    width: 30px;\n    height: 30px;\n    margin-left: 20px;\n    padding-top: 4px;\n    cursor: pointer;\n    transition: transform 0.1s; }\n    header img:active {\n      transform: scale(1.1); }\n  header h1 {\n    margin: 0;\n    padding-left: 40px;\n    color: white; }\n\n.add {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  cursor: pointer; }\n  .add div {\n    font-size: 20px;\n    margin: 10px; }\n\n.form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\n  border-radius: 8px;\n  width: 300px;\n  height: 400px;\n  background-color: white;\n  position: fixed;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.1);\n  visibility: hidden;\n  transition: tranform 0.4s, top 0.4s ease;\n  z-index: 4; }\n  .form .close {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 30px;\n    height: 28px;\n    width: 28px;\n    font-weight: 700;\n    background-color: #ff4242;\n    border: none;\n    color: white;\n    top: -6px;\n    right: -6px;\n    transition: background-color 0.3s; }\n    .form .close:hover {\n      background-color: #ff2828; }\n  .form h2 {\n    margin: 0;\n    background-color: #47b691;\n    color: white;\n    height: 60px;\n    width: 100%;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .form .name::placeholder {\n    padding-left: 20px; }\n  .form input {\n    height: 30px;\n    width: 80%;\n    border-radius: 8px;\n    border: none;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .form select {\n    height: 30px;\n    width: 80%;\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .form div {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column; }\n\n.open-form {\n  visibility: visible;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(1); }\n\n.cover {\n  background-color: #dadada;\n  opacity: 0.6;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  visibility: hidden; }\n\n.open-cover {\n  visibility: visible; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\narticle {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 200px;\n  border-radius: 8px;\n  margin-top: 15px;\n  position: relative; }\n  article img {\n    width: 29px;\n    cursor: pointer;\n    position: absolute;\n    right: -43px;\n    top: 35px; }\n  article div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px; }\n  article button {\n    border: none;\n    background-color: #ff4242;\n    color: white;\n    width: 23px;\n    height: 23px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    right: -40px;\n    cursor: pointer;\n    transition: transform 0.3s; }\n    article button:hover {\n      transform: scale(1.1); }\n\n#Super-important {\n  border-color: #f07575;\n  background-color: #ffaeae;\n  border-width: 2px;\n  border-style: solid; }\n\n#Not-important {\n  border-color: #2eca2e;\n  background-color: #97ff97;\n  border-width: 2px;\n  border-style: solid; }\n\n#important {\n  border-color: #ffae34;\n  background-color: #ffcf86;\n  border-width: 2px;\n  border-style: solid; }\n\n.title {\n  text-align: center; }\n\n.nav {\n  background-color: #47b691;\n  width: 300px;\n  position: fixed;\n  left: -300px;\n  bottom: 0;\n  top: 70px;\n  transform: scale(1, 1);\n  color: white;\n  transition: left 0.5s ease;\n  border-top: 1px solid white; }\n  .nav .general {\n    width: 190px;\n    background-color: #60c5a3;\n    height: 35px;\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    padding-left: 10px;\n    border-radius: 5px;\n    margin: 5px 0px 5px 0px;\n    cursor: pointer; }\n    .nav .general:hover {\n      background-color: #5fd3ac; }\n  .nav div {\n    margin-left: 30px;\n    margin-top: 80px; }\n  .nav h2 {\n    border-bottom-color: white;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    width: 80%;\n    padding-bottom: 15px; }\n  .nav button {\n    padding: 5px 10px 5px 10px;\n    margin-bottom: 20px;\n    border-radius: 4px;\n    border-width: 1px;\n    border-style: solid;\n    background-color: white;\n    cursor: pointer;\n    transition: background-color 0.2s, color 0.2s; }\n    .nav button:hover {\n      background-color: #000000;\n      color: white; }\n\n.nav-on {\n  left: 0; }\n\n.project-form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\n  border-radius: 8px;\n  width: 300px;\n  height: 230px;\n  background-color: white;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.1);\n  visibility: hidden;\n  transition: transform 0.5s;\n  z-index: 4; }\n  .project-form h2 {\n    margin: 0;\n    background-color: #47b691;\n    color: white;\n    height: 60px;\n    width: 100%;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .project-form .project-input::placeholder {\n    padding-left: 20px; }\n  .project-form input {\n    height: 30px;\n    width: 80%;\n    border-radius: 8px;\n    border: none;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .project-form div {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column; }\n  .project-form .close-proj {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 30px;\n    height: 28px;\n    width: 28px;\n    font-weight: 700;\n    background-color: #ff4242;\n    border: none;\n    color: white;\n    top: -6px;\n    right: -6px;\n    transition: background-color 0.3s; }\n    .project-form .close-proj:hover {\n      background-color: #ff2828; }\n\n.open-project {\n  visibility: visible;\n  transform: translate(-50%, -50%) scale(1); }\n\n.all-projects {\n  margin: 0;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: left;\n  flex-wrap: wrap;\n  align-items: center; }\n  .all-projects img {\n    width: 25px;\n    height: 25px;\n    margin-left: 10px;\n    cursor: pointer; }\n  .all-projects p {\n    width: 190px;\n    background-color: #60c5a3;\n    height: 35px;\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    padding-left: 10px;\n    border-radius: 5px;\n    margin: 5px 0px 5px 0px;\n    cursor: pointer; }\n    .all-projects p:hover {\n      background-color: #5fd3ac; }\n\n.edit-form {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0px 1px 7px 0px #bbbbbb;\n  border-radius: 8px;\n  width: 300px;\n  height: 400px;\n  background-color: white;\n  position: fixed;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.1);\n  visibility: hidden;\n  transition: tranform 0.4s, top 0.4s ease;\n  z-index: 4; }\n  .edit-form .edit-close {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 30px;\n    height: 28px;\n    width: 28px;\n    font-weight: 700;\n    background-color: #ff4242;\n    border: none;\n    color: white;\n    top: -6px;\n    right: -6px;\n    transition: background-color 0.3s; }\n    .edit-form .edit-close:hover {\n      background-color: #ff2828; }\n  .edit-form h2 {\n    margin: 0;\n    background-color: #47b691;\n    color: white;\n    height: 60px;\n    width: 100%;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .edit-form .name::placeholder {\n    padding-left: 20px; }\n  .edit-form input {\n    height: 30px;\n    width: 80%;\n    border-radius: 8px;\n    border: none;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .edit-form select {\n    height: 30px;\n    width: 80%;\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\n    cursor: pointer; }\n  .edit-form div {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column; }\n\n.edit-on {\n  visibility: visible;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(1); }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n$color: rgb(71, 182, 145);\r\nbody {\r\n    font-family: roboto;\r\n    margin: 0;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n.title {\r\n    padding-top: 90px;\r\n}\r\n\r\nheader {\r\n    background-color: $color;\r\n    height: 70px;\r\n    display: flex;\r\n    align-items: center;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n    img {\r\n        width: 30px;\r\n        height: 30px;\r\n        margin-left: 20px;\r\n        padding-top: 4px;\r\n        cursor: pointer;\r\n        transition: transform 0.1s;\r\n        &:active {\r\n            transform: scale(1.1);\r\n        }\r\n    }\r\n    h1 {\r\n        margin: 0;\r\n        padding-left: 40px;\r\n        color: white;\r\n    }\r\n}\r\n\r\n.add {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    cursor: pointer;\r\n    div {\r\n        font-size: 20px;\r\n        margin: 10px;\r\n    }\r\n}\r\n\r\n\r\n.form {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    border-radius: 8px;\r\n    width: 300px;\r\n    height: 400px;\r\n    background-color: rgb(255, 255, 255);\r\n    position: fixed;\r\n    top: 0%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0.1);\r\n    visibility: hidden;\r\n    transition: tranform 0.4s, top 0.4s ease;\r\n    z-index: 4;\r\n    .close {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: absolute;\r\n        cursor: pointer;\r\n        margin: 0;\r\n        border-radius: 30px;\r\n        height: 28px;\r\n        width: 28px;\r\n        font-weight: 700;\r\n        background-color: rgb(255, 66, 66);\r\n        border: none;\r\n        color: white;\r\n        top: -6px;\r\n        right: -6px;\r\n        transition: background-color 0.3s;\r\n        &:hover{\r\n            background-color: rgb(255, 40, 40);\r\n        }\r\n      }\r\n\r\n    h2 {\r\n        margin: 0;\r\n        background-color: $color;\r\n        color: white;\r\n        height: 60px;\r\n        width: 100%;\r\n        border-radius: 8px 8px 0px 0px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    .name {\r\n        &::placeholder {\r\n            padding-left: 20px;\r\n        }\r\n    }\r\n    input {\r\n        height: 30px;\r\n        width: 80%;\r\n        border-radius: 8px;\r\n        border: none;\r\n        box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n        cursor: pointer;\r\n    }\r\n    select {\r\n        height: 30px;\r\n        width: 80%;\r\n        border: none;\r\n        border-radius: 8px;\r\n        box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n        cursor: pointer;\r\n    }\r\n    div {\r\n        height: 100%;\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        align-items: center;\r\n        flex-direction: column;\r\n    }\r\n}\r\n.open-form {\r\n    visibility: visible;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n}\r\n.cover {\r\n    background-color: #dadada;\r\n    opacity: 0.6;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    visibility: hidden;\r\n}\r\n.open-cover {\r\n    visibility: visible;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\narticle {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 200px;\r\n    border-radius: 8px;\r\n    margin-top: 15px;\r\n    position: relative;\r\n    img{\r\n        width: 29px;\r\n        cursor: pointer;\r\n        position: absolute;\r\n        right: -43px;\r\n        top: 35px;\r\n    }\r\n\r\n    div{\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        padding: 10px;\r\n    }\r\n    button {\r\n        border: none;\r\n        background-color: rgb(255, 66, 66);\r\n        color: white;\r\n        width: 23px;\r\n        height: 23px;\r\n        border-radius: 15px;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: absolute;\r\n        right: -40px;\r\n        cursor: pointer;\r\n        transition: transform 0.3s;\r\n        &:hover{\r\n            transform: scale(1.1);\r\n        }\r\n    }\r\n}\r\n#Super-important {\r\n    border-color: #f07575;\r\n    background-color: #ffaeae;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n#Not-important {\r\n    border-color: #2eca2e;\r\n    background-color: #97ff97;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n#important {\r\n    border-color: #ffae34;\r\n    background-color: #ffcf86;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n}\r\n\r\n.nav {\r\n    background-color: $color;\r\n    width: 300px;\r\n    position: fixed;\r\n    left: -300px;\r\n    bottom: 0;\r\n    top: 70px;\r\n    transform: scale(1, 1);\r\n    color: white;\r\n    transition: left 0.5s ease;\r\n    border-top: 1px solid white;\r\n\r\n    .general {\r\n        width: 190px;\r\n        background-color: rgb(96, 197, 163);\r\n        height: 35px;\r\n        display: flex;\r\n        flex-shrink: 0;\r\n        align-items: center;\r\n        padding-left: 10px;\r\n        border-radius: 5px;\r\n        margin: 5px 0px 5px 0px;\r\n        cursor: pointer;\r\n        &:hover {\r\n            background-color: rgb(95, 211, 172);\r\n        }\r\n    }\r\n    \r\n    div {\r\n        margin-left: 30px;\r\n        margin-top: 80px;\r\n    }\r\n    h2 {\r\n        border-bottom-color: rgb(255, 255, 255);\r\n        border-bottom-width: 1px;\r\n        border-bottom-style: solid;\r\n        width: 80%;\r\n        padding-bottom: 15px;\r\n    }\r\n    button {\r\n        padding: 5px 10px 5px 10px;\r\n        margin-bottom: 20px;\r\n        border-radius: 4px;\r\n        border-width: 1px;\r\n        border-style: solid;\r\n        background-color: white;\r\n        cursor: pointer;\r\n        transition: background-color 0.2s, color 0.2s;\r\n        &:hover {\r\n            background-color: #000000;\r\n            color: white;\r\n        }\r\n    }\r\n}\r\n.nav-on {\r\n    left: 0;\r\n}\r\n\r\n.project-form {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    border-radius: 8px;\r\n    width: 300px;\r\n    height: 230px;\r\n    background-color: rgb(255, 255, 255);\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0.1);\r\n    visibility: hidden;\r\n    transition: transform 0.5s;\r\n    z-index: 4;\r\n    h2 {\r\n        margin: 0;\r\n        background-color: $color;\r\n        color: white;\r\n        height: 60px;\r\n        width: 100%;\r\n        border-radius: 8px 8px 0px 0px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    .project-input {\r\n        &::placeholder {\r\n            padding-left: 20px;\r\n        }\r\n    }\r\n    input {\r\n        height: 30px;\r\n        width: 80%;\r\n        border-radius: 8px;\r\n        border: none;\r\n        box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n        cursor: pointer;\r\n    }\r\n    div {\r\n        height: 100%;\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        align-items: center;\r\n        flex-direction: column;\r\n    }\r\n    .close-proj {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: absolute;\r\n        cursor: pointer;\r\n        margin: 0;\r\n        border-radius: 30px;\r\n        height: 28px;\r\n        width: 28px;\r\n        font-weight: 700;\r\n        background-color: rgb(255, 66, 66);\r\n        border: none;\r\n        color: white;\r\n        top: -6px;\r\n        right: -6px;\r\n        transition: background-color 0.3s;\r\n        &:hover{\r\n            background-color: rgb(255, 40, 40);\r\n        }\r\n      }\r\n}\r\n.open-project {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%)  scale(1);\r\n}\r\n.all-projects {\r\n    margin: 0;\r\n    display: flex;\r\n    flex-shrink: 0;\r\n    justify-content: left;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    img{\r\n        width: 25px;\r\n        height: 25px;\r\n        margin-left: 10px;\r\n        cursor: pointer;\r\n    }\r\n    p {\r\n        width: 190px;\r\n        background-color: rgb(96, 197, 163);\r\n        height: 35px;\r\n        display: flex;\r\n        flex-shrink: 0;\r\n        align-items: center;\r\n        padding-left: 10px;\r\n        border-radius: 5px;\r\n        margin: 5px 0px 5px 0px;\r\n        cursor: pointer;\r\n        &:hover {\r\n            background-color: rgb(95, 211, 172);\r\n        }\r\n    }\r\n}\r\n\r\n.edit-form {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n    border-radius: 8px;\r\n    width: 300px;\r\n    height: 400px;\r\n    background-color: rgb(255, 255, 255);\r\n    position: fixed;\r\n    top: 0%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0.1);\r\n    visibility: hidden;\r\n    transition: tranform 0.4s, top 0.4s ease;\r\n    z-index: 4;\r\n    .edit-close {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: absolute;\r\n        cursor: pointer;\r\n        margin: 0;\r\n        border-radius: 30px;\r\n        height: 28px;\r\n        width: 28px;\r\n        font-weight: 700;\r\n        background-color: rgb(255, 66, 66);\r\n        border: none;\r\n        color: white;\r\n        top: -6px;\r\n        right: -6px;\r\n        transition: background-color 0.3s;\r\n        &:hover{\r\n            background-color: rgb(255, 40, 40);\r\n        }\r\n      }\r\n\r\n    h2 {\r\n        margin: 0;\r\n        background-color: $color;\r\n        color: white;\r\n        height: 60px;\r\n        width: 100%;\r\n        border-radius: 8px 8px 0px 0px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    .name {\r\n        &::placeholder {\r\n            padding-left: 20px;\r\n        }\r\n    }\r\n    input {\r\n        height: 30px;\r\n        width: 80%;\r\n        border-radius: 8px;\r\n        border: none;\r\n        box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n        cursor: pointer;\r\n    }\r\n    select {\r\n        height: 30px;\r\n        width: 80%;\r\n        border: none;\r\n        border-radius: 8px;\r\n        box-shadow: 0px 1px 7px 0px #bbbbbb;\r\n        cursor: pointer;\r\n    }\r\n    div {\r\n        height: 100%;\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        align-items: center;\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n.edit-on {\r\n    visibility: visible;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
            editimg.setAttribute('class', 'edit');
            editimg.setAttribute('value', i);
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
    displayEdit();
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

let editpos = 0;
function displayEdit(){
    let editbutton = document.querySelectorAll(".edit");
    editbutton.forEach(function (button){
        button.addEventListener("click", function () {
            let popup = document.querySelector(".edit-form");
            popup.classList.add("edit-on");
            let cover = document.querySelector(".cover");
            cover.classList.add("open-cover");
            editpos = document.querySelector(".edit").getAttribute('value');
            editpos = button.getAttribute('value');
            let description = document.querySelector('.edit-name');
            description.value = todos[editpos].description;
            let priority = document.querySelector('.edit-select');
            priority.value = todos[editpos].priority;
            let date = document.querySelector('.edit-date');
            date.value = todos[editpos].date;

        });
    }) 
        
    document.querySelector(".edit-close").addEventListener("click", function () {
        let popup = document.querySelector(".edit-form");
        popup.classList.remove("edit-on");
        let cover = document.querySelector(".cover");
        cover.classList.remove("open-cover");
    });
}
displayEdit();
document.querySelector(".edit-form").onsubmit = () => {
    let description = document.querySelector('.edit-name').value;
    let priority = document.querySelector('.edit-select').value;
    let date = document.querySelector('.edit-date').value;
    
    todos.splice(editpos, 1, new addObj(description, priority, date));
    (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.display)();
    let popup = document.querySelector(".edit-form");
    popup.classList.remove("edit-on");
    // midenizi to value 
    let input = document.querySelector(".edit-name");
    input.value = '';

    let cover = document.querySelector(".cover");
    cover.classList.remove("open-cover");
    localStorage.setItem('todos', JSON.stringify(todos));
    displayEdit();
    return false;
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxpQkFBaUIsT0FBTyxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxhQUFhLFlBQVksVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxrQkFBa0IsT0FBTyxhQUFhLGtCQUFrQixPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsaUJBQWlCLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxhQUFhLGlCQUFpQixNQUFNLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxnQkFBZ0IsS0FBSyxXQUFXLGFBQWEsWUFBWSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGdCQUFnQixPQUFPLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxrQkFBa0IsT0FBTyxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxpQkFBaUIsT0FBTyxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxnQkFBZ0IsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxtQkFBbUIsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsZ0JBQWdCLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsaUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8sV0FBVyxhQUFhLFlBQVksVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxnQkFBZ0IsT0FBTyxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLG1CQUFtQixNQUFNLFlBQVksV0FBVywyR0FBMkcsbUJBQW1CLDhCQUE4QixVQUFVLDRCQUE0QixrQkFBa0IsOEJBQThCLEtBQUssZ0JBQWdCLDBCQUEwQixLQUFLLGdCQUFnQixpQ0FBaUMscUJBQXFCLHNCQUFzQiw0QkFBNEIsd0JBQXdCLGVBQWUsaUJBQWlCLGdCQUFnQixtQkFBbUIsYUFBYSx3QkFBd0IseUJBQXlCLDhCQUE4Qiw2QkFBNkIsNEJBQTRCLHVDQUF1QyxzQkFBc0Isc0NBQXNDLGFBQWEsU0FBUyxZQUFZLHNCQUFzQiwrQkFBK0IseUJBQXlCLFNBQVMsS0FBSyxjQUFjLHNCQUFzQixnQ0FBZ0MseUJBQXlCLHdCQUF3QixhQUFhLDRCQUE0Qix5QkFBeUIsU0FBUyxLQUFLLG1CQUFtQixzQkFBc0IsNEJBQTRCLCtCQUErQiw0Q0FBNEMsMkJBQTJCLHFCQUFxQixzQkFBc0IsNkNBQTZDLHdCQUF3QixnQkFBZ0Isa0JBQWtCLG9EQUFvRCwyQkFBMkIsaURBQWlELG1CQUFtQixnQkFBZ0IsMEJBQTBCLG9DQUFvQyxnQ0FBZ0MsK0JBQStCLDRCQUE0QixzQkFBc0IsZ0NBQWdDLHlCQUF5Qix3QkFBd0IsNkJBQTZCLCtDQUErQyx5QkFBeUIseUJBQXlCLHNCQUFzQix3QkFBd0IsOENBQThDLG9CQUFvQixtREFBbUQsYUFBYSxXQUFXLGdCQUFnQixzQkFBc0IscUNBQXFDLHlCQUF5Qix5QkFBeUIsd0JBQXdCLDJDQUEyQywwQkFBMEIsZ0NBQWdDLG9DQUFvQyxTQUFTLGVBQWUsNEJBQTRCLG1DQUFtQyxhQUFhLFNBQVMsZUFBZSx5QkFBeUIsdUJBQXVCLCtCQUErQix5QkFBeUIsZ0RBQWdELDRCQUE0QixTQUFTLGdCQUFnQix5QkFBeUIsdUJBQXVCLHlCQUF5QiwrQkFBK0IsZ0RBQWdELDRCQUE0QixTQUFTLGFBQWEseUJBQXlCLHdCQUF3QiwwQkFBMEIsMENBQTBDLGdDQUFnQyxtQ0FBbUMsU0FBUyxLQUFLLGdCQUFnQiw0QkFBNEIsaUJBQWlCLGtEQUFrRCxLQUFLLFlBQVksa0NBQWtDLHFCQUFxQix3QkFBd0IsZUFBZSxrQkFBa0IsaUJBQWlCLGdCQUFnQixtQkFBbUIsMkJBQTJCLEtBQUssaUJBQWlCLDRCQUE0QixLQUFLLGNBQWMsc0JBQXNCLCtCQUErQiw0QkFBNEIsS0FBSyxpQkFBaUIsc0JBQXNCLHVDQUF1QywrQkFBK0IsNEJBQTRCLHFCQUFxQiwyQkFBMkIseUJBQXlCLDJCQUEyQixZQUFZLHdCQUF3Qiw0QkFBNEIsK0JBQStCLHlCQUF5QixzQkFBc0IsU0FBUyxnQkFBZ0IsMEJBQTBCLGdDQUFnQyxvQ0FBb0MsMEJBQTBCLFNBQVMsZ0JBQWdCLHlCQUF5QiwrQ0FBK0MseUJBQXlCLHdCQUF3Qix5QkFBeUIsZ0NBQWdDLDBCQUEwQixvQ0FBb0MsZ0NBQWdDLCtCQUErQix5QkFBeUIsNEJBQTRCLHVDQUF1QyxvQkFBb0Isc0NBQXNDLGFBQWEsU0FBUyxLQUFLLHNCQUFzQiw4QkFBOEIsa0NBQWtDLDBCQUEwQiw0QkFBNEIsS0FBSyxvQkFBb0IsOEJBQThCLGtDQUFrQywwQkFBMEIsNEJBQTRCLEtBQUssZ0JBQWdCLDhCQUE4QixrQ0FBa0MsMEJBQTBCLDRCQUE0QixLQUFLLGdCQUFnQiwyQkFBMkIsS0FBSyxjQUFjLGlDQUFpQyxxQkFBcUIsd0JBQXdCLHFCQUFxQixrQkFBa0Isa0JBQWtCLCtCQUErQixxQkFBcUIsbUNBQW1DLG9DQUFvQyxzQkFBc0IseUJBQXlCLGdEQUFnRCx5QkFBeUIsMEJBQTBCLDJCQUEyQixnQ0FBZ0MsK0JBQStCLCtCQUErQixvQ0FBb0MsNEJBQTRCLHFCQUFxQixvREFBb0QsYUFBYSxTQUFTLHFCQUFxQiw4QkFBOEIsNkJBQTZCLFNBQVMsWUFBWSxvREFBb0QscUNBQXFDLHVDQUF1Qyx1QkFBdUIsaUNBQWlDLFNBQVMsZ0JBQWdCLHVDQUF1QyxnQ0FBZ0MsK0JBQStCLDhCQUE4QixnQ0FBZ0Msb0NBQW9DLDRCQUE0QiwwREFBMEQscUJBQXFCLDBDQUEwQyw2QkFBNkIsYUFBYSxTQUFTLEtBQUssYUFBYSxnQkFBZ0IsS0FBSyx1QkFBdUIsc0JBQXNCLDRCQUE0QiwrQkFBK0IsNENBQTRDLDJCQUEyQixxQkFBcUIsc0JBQXNCLDZDQUE2Qyx3QkFBd0IsaUJBQWlCLGtCQUFrQixvREFBb0QsMkJBQTJCLG1DQUFtQyxtQkFBbUIsWUFBWSxzQkFBc0IscUNBQXFDLHlCQUF5Qix5QkFBeUIsd0JBQXdCLDJDQUEyQywwQkFBMEIsZ0NBQWdDLG9DQUFvQyxTQUFTLHdCQUF3Qiw0QkFBNEIsbUNBQW1DLGFBQWEsU0FBUyxlQUFlLHlCQUF5Qix1QkFBdUIsK0JBQStCLHlCQUF5QixnREFBZ0QsNEJBQTRCLFNBQVMsYUFBYSx5QkFBeUIsd0JBQXdCLDBCQUEwQiwwQ0FBMEMsZ0NBQWdDLG1DQUFtQyxTQUFTLHFCQUFxQiwwQkFBMEIsb0NBQW9DLGdDQUFnQywrQkFBK0IsNEJBQTRCLHNCQUFzQixnQ0FBZ0MseUJBQXlCLHdCQUF3Qiw2QkFBNkIsK0NBQStDLHlCQUF5Qix5QkFBeUIsc0JBQXNCLHdCQUF3Qiw4Q0FBOEMsb0JBQW9CLG1EQUFtRCxhQUFhLFdBQVcsS0FBSyxtQkFBbUIsNEJBQTRCLG1EQUFtRCxLQUFLLG1CQUFtQixrQkFBa0Isc0JBQXNCLHVCQUF1Qiw4QkFBOEIsd0JBQXdCLDRCQUE0QixZQUFZLHdCQUF3Qix5QkFBeUIsOEJBQThCLDRCQUE0QixTQUFTLFdBQVcseUJBQXlCLGdEQUFnRCx5QkFBeUIsMEJBQTBCLDJCQUEyQixnQ0FBZ0MsK0JBQStCLCtCQUErQixvQ0FBb0MsNEJBQTRCLHFCQUFxQixvREFBb0QsYUFBYSxTQUFTLEtBQUssb0JBQW9CLHNCQUFzQiw0QkFBNEIsK0JBQStCLDRDQUE0QywyQkFBMkIscUJBQXFCLHNCQUFzQiw2Q0FBNkMsd0JBQXdCLGdCQUFnQixrQkFBa0Isb0RBQW9ELDJCQUEyQixpREFBaUQsbUJBQW1CLHFCQUFxQiwwQkFBMEIsb0NBQW9DLGdDQUFnQywrQkFBK0IsNEJBQTRCLHNCQUFzQixnQ0FBZ0MseUJBQXlCLHdCQUF3Qiw2QkFBNkIsK0NBQStDLHlCQUF5Qix5QkFBeUIsc0JBQXNCLHdCQUF3Qiw4Q0FBOEMsb0JBQW9CLG1EQUFtRCxhQUFhLFdBQVcsZ0JBQWdCLHNCQUFzQixxQ0FBcUMseUJBQXlCLHlCQUF5Qix3QkFBd0IsMkNBQTJDLDBCQUEwQixnQ0FBZ0Msb0NBQW9DLFNBQVMsZUFBZSw0QkFBNEIsbUNBQW1DLGFBQWEsU0FBUyxlQUFlLHlCQUF5Qix1QkFBdUIsK0JBQStCLHlCQUF5QixnREFBZ0QsNEJBQTRCLFNBQVMsZ0JBQWdCLHlCQUF5Qix1QkFBdUIseUJBQXlCLCtCQUErQixnREFBZ0QsNEJBQTRCLFNBQVMsYUFBYSx5QkFBeUIsd0JBQXdCLDBCQUEwQiwwQ0FBMEMsZ0NBQWdDLG1DQUFtQyxTQUFTLEtBQUssa0JBQWtCLDRCQUE0QixpQkFBaUIsa0RBQWtELEtBQUssMkJBQTJCO0FBQ2xneEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNia0U7QUFDaEM7QUFDSjtBQUM5QjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsSUFBSSxtREFBWSxFQUFFO0FBQzFDLHNCQUFzQiw0Q0FBSztBQUMzQjtBQUNBO0FBQ0EsMEJBQTBCLHNDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQU07QUFDZDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksc0RBQWUsRUFBRTtBQUN6QyxrQkFBa0IsK0NBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0NBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYTtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7O0FDekVnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkaUM7QUFDQTtBQUNvQjtBQUNsQjtBQUNHO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Ysb0RBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQjtBQUNsQiw0REFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNERBQWU7QUFDekI7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0RBQU87QUFDakIsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0RBQVE7QUFDUiwwREFBTztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7QUNuS2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9uZXdwcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDsgfVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nLXRvcDogOTBweDsgfVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAyOyB9XFxuICBoZWFkZXIgaW1nIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXM7IH1cXG4gICAgaGVhZGVyIGltZzphY3RpdmUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgaGVhZGVyIGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5hZGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmFkZCBkaXYge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMTBweDsgfVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuMSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB0cmFuZm9ybSAwLjRzLCB0b3AgMC40cyBlYXNlO1xcbiAgei1pbmRleDogNDsgfVxcbiAgLmZvcm0gLmNsb3NlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQyNDI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0b3A6IC02cHg7XFxuICAgIHJpZ2h0OiAtNnB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7IH1cXG4gICAgLmZvcm0gLmNsb3NlOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyODI4OyB9XFxuICAuZm9ybSBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YjY5MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAuZm9ybSAubmFtZTo6cGxhY2Vob2xkZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cXG4gIC5mb3JtIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmZvcm0gc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmZvcm0gZGl2IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4ub3Blbi1mb3JtIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpOyB9XFxuXFxuLmNvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLm9wZW4tY292ZXIge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuYXJ0aWNsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICBhcnRpY2xlIGltZyB7XFxuICAgIHdpZHRoOiAyOXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC00M3B4O1xcbiAgICB0b3A6IDM1cHg7IH1cXG4gIGFydGljbGUgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gIGFydGljbGUgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAyM3B4O1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zczsgfVxcbiAgICBhcnRpY2xlIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuXFxuI1N1cGVyLWltcG9ydGFudCB7XFxuICBib3JkZXItY29sb3I6ICNmMDc1NzU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhZWFlO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyB9XFxuXFxuI05vdC1pbXBvcnRhbnQge1xcbiAgYm9yZGVyLWNvbG9yOiAjMmVjYTJlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3ZmY5NztcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxcblxcbiNpbXBvcnRhbnQge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZhZTM0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2Y4NjtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxcblxcbi50aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0N2I2OTE7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAtMzAwcHg7XFxuICBib3R0b206IDA7XFxuICB0b3A6IDcwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2U7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7IH1cXG4gIC5uYXYgLmdlbmVyYWwge1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGM1YTM7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5uYXYgLmdlbmVyYWw6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZmQzYWM7IH1cXG4gIC5uYXYgZGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7IH1cXG4gIC5uYXYgaDIge1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7IH1cXG4gIC5uYXYgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgY29sb3IgMC4yczsgfVxcbiAgICAubmF2IGJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4ubmF2LW9uIHtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4ucHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxuICB6LWluZGV4OiA0OyB9XFxuICAucHJvamVjdC1mb3JtIGgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiNjkxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5wcm9qZWN0LWZvcm0gLnByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XFxuICAucHJvamVjdC1mb3JtIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLnByb2plY3QtZm9ybSBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLnByb2plY3QtZm9ybSAuY2xvc2UtcHJvaiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MjQyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICByaWdodDogLTZweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzOyB9XFxuICAgIC5wcm9qZWN0LWZvcm0gLmNsb3NlLXByb2o6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjI4Mjg7IH1cXG5cXG4ub3Blbi1wcm9qZWN0IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTsgfVxcblxcbi5hbGwtcHJvamVjdHMge1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmFsbC1wcm9qZWN0cyBpbWcge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYWxsLXByb2plY3RzIHAge1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGM1YTM7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5hbGwtcHJvamVjdHMgcDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVmZDNhYzsgfVxcblxcbi5lZGl0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5mb3JtIDAuNHMsIHRvcCAwLjRzIGVhc2U7XFxuICB6LWluZGV4OiA0OyB9XFxuICAuZWRpdC1mb3JtIC5lZGl0LWNsb3NlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQyNDI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0b3A6IC02cHg7XFxuICAgIHJpZ2h0OiAtNnB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7IH1cXG4gICAgLmVkaXQtZm9ybSAuZWRpdC1jbG9zZTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjgyODsgfVxcbiAgLmVkaXQtZm9ybSBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YjY5MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAuZWRpdC1mb3JtIC5uYW1lOjpwbGFjZWhvbGRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxcbiAgLmVkaXQtZm9ybSBpbnB1dCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5lZGl0LWZvcm0gc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmVkaXQtZm9ybSBkaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5lZGl0LW9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHlCQVpxQjtFQWFyQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVSxFQUFBO0VBVGQ7SUFXUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQixFQUFBO0lBaEJsQztNQWtCWSxxQkFBcUIsRUFBQTtFQWxCakM7SUFzQlEsU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7O0FBSXBCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBSm5CO0lBTVEsZUFBZTtJQUNmLFlBQVksRUFBQTs7QUFLcEI7RUFDSSxhQUFhO0VBQ2IsbUJB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SUF1Q1EsU0FBUztJQUNULHlCQXZhaUI7SUF3YWpCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBO0VBL0MvQjtJQW1EWSxrQkFBa0IsRUFBQTtFQW5EOUI7SUF1RFEsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxlQUFlLEVBQUE7RUE1RHZCO0lBK0RRLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsZUFBZSxFQUFBO0VBcEV2QjtJQXVFUSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQixFQUFBOztBQUk5QjtFQUNJLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IseUNBQXlDLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG4kY29sb3I6IHJnYig3MSwgMTgyLCAxNDUpO1xcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDkwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzO1xcclxcbiAgICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFkZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpdiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuMSk7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbmZvcm0gMC40cywgdG9wIDAuNHMgZWFzZTtcXHJcXG4gICAgei1pbmRleDogNDtcXHJcXG4gICAgLmNsb3NlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI4cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNjYsIDY2KTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIHRvcDogLTZweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAtNnB4O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0MCwgNDApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYW1lIHtcXHJcXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgaW5wdXQge1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggN3B4IDBweCAjYmJiYmJiO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICAgIHNlbGVjdCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2IHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLm9wZW4tZm9ybSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG59XFxyXFxuLmNvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcXHJcXG4gICAgb3BhY2l0eTogMC42O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG4ub3Blbi1jb3ZlciB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMjlweDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHJpZ2h0OiAtNDNweDtcXHJcXG4gICAgICAgIHRvcDogMzVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXZ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24ge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNjYsIDY2KTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAyM3B4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICByaWdodDogLTQwcHg7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXHJcXG4gICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbiNTdXBlci1pbXBvcnRhbnQge1xcclxcbiAgICBib3JkZXItY29sb3I6ICNmMDc1NzU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFlYWU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG4jTm90LWltcG9ydGFudCB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzJlY2EyZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3ZmY5NztcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcbiNpbXBvcnRhbnQge1xcclxcbiAgICBib3JkZXItY29sb3I6ICNmZmFlMzQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNmODY7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAtMzAwcHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgdG9wOiA3MHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxyXFxuXFxyXFxuICAgIC5nZW5lcmFsIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxOTBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NiwgMTk3LCAxNjMpO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAyMTEsIDE3Mik7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIGRpdiB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLm5hdi1vbiB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcclxcbiAgICB6LWluZGV4OiA0O1xcclxcbiAgICBoMiB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLnByb2plY3QtaW5wdXQge1xcclxcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBpbnB1dCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2IHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmNsb3NlLXByb2oge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgICAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2NiwgNjYpO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgdG9wOiAtNnB4O1xcclxcbiAgICAgICAgcmlnaHQ6IC02cHg7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxuICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQwLCA0MCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbn1cXHJcXG4ub3Blbi1wcm9qZWN0IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIHNjYWxlKDEpO1xcclxcbn1cXHJcXG4uYWxsLXByb2plY3RzIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICB3aWR0aDogMTkwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDE5NywgMTYzKTtcXHJcXG4gICAgICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMjExLCAxNzIpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuMSk7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbmZvcm0gMC40cywgdG9wIDAuNHMgZWFzZTtcXHJcXG4gICAgei1pbmRleDogNDtcXHJcXG4gICAgLmVkaXQtY2xvc2Uge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgICAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2NiwgNjYpO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgdG9wOiAtNnB4O1xcclxcbiAgICAgICAgcmlnaHQ6IC02cHg7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxuICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQwLCA0MCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICBoMiB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hbWUge1xcclxcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBpbnB1dCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA3cHggMHB4ICNiYmJiYmI7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgc2VsZWN0IHtcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDdweCAwcHggI2JiYmJiYjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1vbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge3RvZG9zLCByZW1vdmUsIHByb2plY3RzLCByZW1vdmVQcm9qZWN0fSBmcm9tICcuL2luZGV4LmpzJztcclxuaW1wb3J0IHRyYXNoMiBmcm9tICcuL3RyYXNoMi5wbmcnO1xyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQucG5nJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheSgpe1xyXG5cclxuICAgICAgICBsZXQgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICAgICAgd2hpbGUgKGNsZWFyLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBjbGVhci5yZW1vdmVDaGlsZChjbGVhci5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB0b2Rvc1tpXTtcclxuICAgICAgICAgICAgbGV0IGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICAgICAgbGV0IGVkaXRpbWcgPSBuZXcgSW1hZ2U7XHJcbiAgICAgICAgICAgIGVkaXRpbWcuc3JjID0gZWRpdDtcclxuICAgICAgICAgICAgZWRpdGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXQnKTtcclxuICAgICAgICAgICAgZWRpdGltZy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogaW4gb2JqKXtcclxuICAgICAgICAgICAgICAgIGlmICggb2JqW2pdID09ICdpbXBvcnRhbnQnKXtcclxuICAgICAgICAgICAgICAgICAgICBhcnQuc2V0QXR0cmlidXRlKCdpZCcsICdpbXBvcnRhbnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBvYmpbal0gPT0gJ1N1cGVyIGltcG9ydGFudCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFydC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1N1cGVyLWltcG9ydGFudCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIG9ialtqXSA9PSAnTm90IGltcG9ydGFudCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFydC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ05vdC1pbXBvcnRhbnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gb2JqW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFydC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGV4LmlubmVySFRNTCA9ICdYJztcclxuICAgICAgICAgICAgZXguc2V0QXR0cmlidXRlKCdjbGFzcycsICdleC1idXQnKTtcclxuICAgICAgICAgICAgZXguc2V0QXR0cmlidXRlKCd2YWx1ZScsIGkpO1xyXG4gICAgICAgICAgICBhcnQuYXBwZW5kQ2hpbGQoZXgpO1xyXG4gICAgICAgICAgICBhcnQuYXBwZW5kQ2hpbGQoZWRpdGltZyk7XHJcbiAgICAgICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGFydCk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVtb3ZlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCl7XHJcblxyXG4gICAgbGV0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xyXG4gICAgICAgIHdoaWxlIChjbGVhci5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgY2xlYXIucmVtb3ZlQ2hpbGQoY2xlYXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGxldCBwcm9qZWN0c2RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgb2JqID0gcHJvamVjdHNbaV07XHJcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaiBpbiBvYmope1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9IG9ialtqXTtcclxuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gdHJhc2gyO1xyXG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGkpO1xyXG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0cmFzaCcpO1xyXG4gICAgICAgICAgICBwcm9qZWN0c2RvbS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICAgICAgcHJvamVjdHNkb20uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVQcm9qZWN0KCk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIG1ha2Vmb3JtKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwib3Blbi1mb3JtXCIpO1xyXG4gICAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgICAgICAgY292ZXIuY2xhc3NMaXN0LmFkZChcIm9wZW4tY292ZXJcIik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1mb3JtXCIpO1xyXG4gICAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIik7XHJcbiAgICAgICAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tY292ZXJcIik7XHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0IG1ha2Vmb3JtIGZyb20gJy4vZm9ybS5qcyc7XHJcbmltcG9ydCB7ZGlzcGxheSxkaXNwbGF5UHJvamVjdHN9IGZyb20gJy4vZGlzcGxheS5qcyc7XHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2lkZWJhci5qcyc7XHJcbmltcG9ydCBuZXdwcm9qIGZyb20gJy4vbmV3cHJvamVjdC5qcyc7XHJcblxyXG4vLyBDaGVjayBpZiBsb2NhbCBzdG9yYWdlIGV4aXN0c1xyXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpe1xyXG4gICAgLy8gSWYgaXQgZG9lc24ndCBleGlzdCwgaW5pdGlhbGl6ZSBpdCBhcyBhbiBlbXB0eSBhcnJheVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoW10pKTtcclxufVxyXG5cclxubGV0IHRvZG9zID0gW107XHJcbnRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XHJcbmV4cG9ydCB7dG9kb3N9O1xyXG5kaXNwbGF5KCk7XHJcblxyXG5cclxuLy8gQ2hlY2sgaWYgbG9jYWwgc3RvcmFnZSBleGlzdHMgZm9yIHByb2plY3RzXHJcbmlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSl7XHJcbiAgICAvLyBJZiBpdCBkb2Vzbid0IGV4aXN0LCBpbml0aWFsaXplIGl0IGFzIGFuIGVtcHR5IGFycmF5XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xyXG59XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuZXhwb3J0IHtwcm9qZWN0c307XHJcbmRpc3BsYXlQcm9qZWN0cygpO1xyXG5cclxuXHJcbmNsYXNzIGFkZFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBhZGRPYmoge1xyXG4gICAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKXtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpLm9uc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKS52YWx1ZTtcclxuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLnZhbHVlO1xyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpLnZhbHVlO1xyXG4gICAgXHJcbiAgICB0b2Rvcy5wdXNoKG5ldyBhZGRPYmooZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSk7XHJcblxyXG4gICAgZGlzcGxheSgpO1xyXG4gICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tZm9ybVwiKTtcclxuICAgIC8vIG1pZGVuaXppIHRvIHZhbHVlIFxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpO1xyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxuXHJcbiAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgY292ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tY292ZXJcIik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xyXG4gICAgZGlzcGxheUVkaXQoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIikub25zdWJtaXQgPSAoKSA9PiB7XHJcblxyXG4gICAgcHJvamVjdHMucHVzaChuZXcgYWRkUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbnB1dCcpLnZhbHVlKSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcclxuICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tcHJvamVjdFwiKTtcclxuICAgIC8vIG1pZGVuaXppIHRvIHZhbHVlIFxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWlucHV0XCIpO1xyXG4gICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICAgIGNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLWNvdmVyXCIpO1xyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIGxvY2FsIHN0b3JhZ2Ugd2l0aCB0aGUgbmV3IHByb2plY3QgbGlzdFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuc2lkZWJhcigpO1xyXG5cclxubGV0IGVkaXRwb3MgPSAwO1xyXG5mdW5jdGlvbiBkaXNwbGF5RWRpdCgpe1xyXG4gICAgbGV0IGVkaXRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRcIik7XHJcbiAgICBlZGl0YnV0dG9uLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbil7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtXCIpO1xyXG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1vblwiKTtcclxuICAgICAgICAgICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICAgICAgICAgICAgY292ZXIuY2xhc3NMaXN0LmFkZChcIm9wZW4tY292ZXJcIik7XHJcbiAgICAgICAgICAgIGVkaXRwb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIikuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG4gICAgICAgICAgICBlZGl0cG9zID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbmFtZScpO1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG9zW2VkaXRwb3NdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1zZWxlY3QnKTtcclxuICAgICAgICAgICAgcHJpb3JpdHkudmFsdWUgPSB0b2Rvc1tlZGl0cG9zXS5wcmlvcml0eTtcclxuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1kYXRlJyk7XHJcbiAgICAgICAgICAgIGRhdGUudmFsdWUgPSB0b2Rvc1tlZGl0cG9zXS5kYXRlO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pIFxyXG4gICAgICAgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWZvcm1cIik7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImVkaXQtb25cIik7XHJcbiAgICAgICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICAgICAgICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1jb3ZlclwiKTtcclxuICAgIH0pO1xyXG59XHJcbmRpc3BsYXlFZGl0KCk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtXCIpLm9uc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbmFtZScpLnZhbHVlO1xyXG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtc2VsZWN0JykudmFsdWU7XHJcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRhdGUnKS52YWx1ZTtcclxuICAgIFxyXG4gICAgdG9kb3Muc3BsaWNlKGVkaXRwb3MsIDEsIG5ldyBhZGRPYmooZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSk7XHJcbiAgICBkaXNwbGF5KCk7XHJcbiAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybVwiKTtcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0LW9uXCIpO1xyXG4gICAgLy8gbWlkZW5pemkgdG8gdmFsdWUgXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbmFtZVwiKTtcclxuICAgIGlucHV0LnZhbHVlID0gJyc7XHJcblxyXG4gICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3ZlclwiKTtcclxuICAgIGNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLWNvdmVyXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcclxuICAgIGRpc3BsYXlFZGl0KCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KCl7XHJcbiAgICBjb25zdCByZW1vdmVCdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2gnKTtcclxuICAgIHJlbW92ZUJ1dC5mb3JFYWNoKGZ1bmN0aW9uIChpbWcpIHtcclxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHByb2plY3RzLnNwbGljZShpbWcuZ2V0QXR0cmlidXRlKCd2YWx1ZScpLCAxKTtcclxuICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xyXG4gICAgICAgICAgLy8gVXBkYXRlIGxvY2FsIHN0b3JhZ2Ugd2l0aCB0aGUgdXBkYXRlZCBwcm9qZWN0IGxpc3RcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4gICAgXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoKXtcclxuICAgIGNvbnN0IHJlbW92ZUJ1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leC1idXQnKTtcclxuICAgIHJlbW92ZUJ1dC5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHRvZG9zLnNwbGljZShidXR0b24udmFsdWUsIDEpO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcclxuICAgICAgICAgIGRpc3BsYXkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5tYWtlZm9ybSgpO1xyXG5uZXdwcm9qKCk7XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdwcm9qKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIm9wZW4tcHJvamVjdFwiKTtcclxuICAgICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgICAgIGNvdmVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuLWNvdmVyXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1wcm9qXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tcHJvamVjdFwiKTtcclxuICAgICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdmVyXCIpO1xyXG4gICAgICAgIGNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLWNvdmVyXCIpO1xyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlYmFyKCl7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXHJcbiAgICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XHJcbiAgICAgICAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1vblwiKSkge1xyXG4gICAgICAgICAgICAvLyBjbG9zZSB0aGUgbmF2IGJhclxyXG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9uXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIG9wZW4gdGhlIG5hdiBiYXJcclxuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIm5hdi1vblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
