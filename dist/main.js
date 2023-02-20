/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)\n/* harmony export */ });\nfunction createHomePage() {\n  // Create homepage\'s header\n  const homeHeader = document.createElement("div");\n  homeHeader.id = "header";\n\n  // Create header divs\n  headerDiv1 = document.createElement("div");\n  headerDiv2 = document.createElement("div");\n  headerDiv3 = document.createElement("div");\n\n  // Add header divs text\n  headerDiv1.textContent = "Home";\n  headerDiv2.textContent = "Menu";\n  headerDiv3.textContent = "Contact";\n\n  // Add to header\n  homeHeader.appendChild(headerDiv1);\n  homeHeader.appendChild(headerDiv2);\n  homeHeader.appendChild(headerDiv3);\n\n  // Add homepage to \'content\' div\n  contentContainer = document.querySelector("#content");\n\n  contentContainer.appendChild(homeHeader);\n\n  // Create homepage\'s footer\n  const homeFooter = document.createElement("div");\n  homeFooter.id = "footer";\n\n  // Create main div\n  const main = document.createElement("div");\n  main.id = "main";\n\n  // Add main to \'content\' div\n  contentContainer.appendChild(main);\n\n  // Create info div\n  const info = document.createElement("div");\n  info.id = "info";\n\n  // Add info to main div\n  main.appendChild(info);\n\n  // Create title inside info div\n  const infoTitle = document.createElement("div");\n  infoTitle.id = "infoTitle";\n\n  // Set infoTitle text\n  infoTitle.textContent = "Lorem ipsum dolor sit amet.";\n\n  // Add infoTitle to info div\n  info.appendChild(infoTitle);\n\n  // Create text inside info div\n  infoContent = document.createElement("div");\n  infoContent.id = "infoContent";\n\n  // Set text inside info\n  infoContent.textContent =\n    "Mauris quis est nibh. Nulla ut turpis cursus commodo non in sapien.";\n\n  // Add text to info\n  info.appendChild(infoContent);\n\n  // Set homepage\'s footer text\n  homeFooter.textContent = "Copyright &#169; The Odin Project";\n\n  // Add homepage\'s footer to \'content\' div\n  contentContainer.appendChild(homeFooter);\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The require scope
  /******/ var __webpack_require__ = {};
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/index.js"](
    0,
    __webpack_exports__,
    __webpack_require__
  );
  /******/
  /******/
})();

import {
  createHomePage,
  createContactPage,
  createMenu,
  loadHomepageOnClick,
  loadContactPageOnClick,
  loadMenuPageOnClick,
} from "./../src/index.js";

createHomePage();
createContactPage();
createMenu();
loadHomepageOnClick();
loadContactPageOnClick();
loadMenuPageOnClick();
