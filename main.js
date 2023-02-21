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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "createContactPage": () => (/* binding */ createContactPage),\n/* harmony export */   "createHomePage": () => (/* binding */ createHomePage),\n/* harmony export */   "createMenu": () => (/* binding */ createMenu),\n/* harmony export */   "loadContactPageOnClick": () => (/* binding */ loadContactPageOnClick),\n/* harmony export */   "loadHomepageOnClick": () => (/* binding */ loadHomepageOnClick),\n/* harmony export */   "loadMenuPageOnClick": () => (/* binding */ loadMenuPageOnClick)\n/* harmony export */ });\n// Create container\nconst container = document.createElement("div");\ncontainer.id = "container";\n\nfunction createHomePage() {\n  // Create homepage\'s header\n  const homeHeader = document.createElement("div");\n  homeHeader.id = "header";\n\n  // Create header divs\n  const headerDiv1 = document.createElement("div");\n  const headerDiv2 = document.createElement("div");\n  const headerDiv3 = document.createElement("div");\n\n  // Add header divs text\n  headerDiv1.textContent = "Home";\n  headerDiv2.textContent = "Menu";\n  headerDiv3.textContent = "Contact";\n\n  // Add header divs ids\n  headerDiv1.id = "home";\n  headerDiv2.id = "menu";\n  headerDiv3.id = "contact";\n\n  // Add to header\n  homeHeader.appendChild(headerDiv1);\n  homeHeader.appendChild(headerDiv2);\n  homeHeader.appendChild(headerDiv3);\n\n  const contentContainer = document.querySelector("#content");\n\n  // Add homepage header to \'content\' div\n  contentContainer.appendChild(homeHeader);\n\n  // Create homepage\'s footer\n  const homeFooter = document.createElement("div");\n  homeFooter.id = "footer";\n\n  // Create main div\n  const main = document.createElement("div");\n  main.id = "main";\n\n  // Add main to \'content\' div\n  contentContainer.appendChild(main);\n\n  // Create info div\n  const info = document.createElement("div");\n  info.id = "info";\n\n  // Add info to main div\n  main.appendChild(info);\n\n  // Create title inside info div\n  const infoTitle = document.createElement("div");\n  infoTitle.id = "infoTitle";\n\n  // Set infoTitle text\n  infoTitle.textContent = "Lorem ipsum dolor sit amet.";\n\n  // Add infoTitle to info div\n  info.appendChild(infoTitle);\n\n  // Create text inside info div\n  const infoContent = document.createElement("div");\n  infoContent.id = "infoContent";\n\n  // Set text inside info\n  infoContent.textContent =\n    "Mauris quis est nibh. Nulla ut turpis cursus commodo non in sapien.";\n\n  // Add text to info\n  info.appendChild(infoContent);\n\n  // Set homepage\'s footer text\n  homeFooter.textContent = "Copyright © The Odin Project 2023";\n\n  // Add homepage container to \'content\' div\n  contentContainer.appendChild(container);\n\n  // Add home div\n  const home = document.createElement("div");\n  home.id = "homepage";\n  container.appendChild(home);\n  home.appendChild(main);\n\n  // Add homepage\'s footer to \'content\' div\n  contentContainer.appendChild(homeFooter);\n}\n\nfunction createContactPage() {\n  // Create contact page\n  const contactPage = document.createElement("div");\n  contactPage.style.display = "none";\n  contactPage.id = "contactPage";\n  container.appendChild(contactPage);\n\n  const contactInfo = document.createElement("div");\n  contactInfo.id = "contactInfo";\n  contactInfo.style.cssText = "color: #eee; font-size: 1.5vw; gap: 0.5vw";\n  contactPage.appendChild(contactInfo);\n\n  const telephoneInfo = document.createElement("div");\n  telephoneInfo.id = "telephoneInfo";\n  telephoneInfo.textContent = "📞 123 456 789";\n  telephoneInfo.style.height = "3vw";\n  contactInfo.appendChild(telephoneInfo);\n\n  const locationInfo = document.createElement("div");\n  locationInfo.id = "locationInfo";\n  locationInfo.textContent = "🏠 408 8th Ave, New York, NY 10001";\n  locationInfo.style.height = "3vw";\n  contactInfo.appendChild(locationInfo);\n\n  const contactLocation = document.createElement("div");\n  contactLocation.id = "contactLocation";\n  contactLocation.style.cssText = "flex: 1";\n  const map = document.createElement("iframe");\n  map.src =\n    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.55529396812!2d-73.99926866873832!3d40.7498099132077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259563f5e860d%3A0xb4553a42494e5807!2sKFC!5e0!3m2!1sen!2sbr!4v1676770572531!5m2!1sen!2sbr";\n  map.style.cssText = "height: 90%; width: 100%";\n  contactLocation.appendChild(map);\n  contactInfo.appendChild(contactLocation);\n}\n\nfunction createMenu() {\n  // Create page\n  const menuPage = document.createElement("div");\n  menuPage.id = "menuPage";\n  menuPage.style.display = "none";\n  container.appendChild(menuPage);\n\n  // Create grid\n  const menuGrid = document.createElement("div");\n  menuGrid.id = "menuGrid";\n  menuPage.appendChild(menuGrid);\n\n  // Menu item\n  const menuItem = document.createElement("div");\n  menuItem.className = "menuItem";\n  menuGrid.appendChild(menuItem);\n\n  // Create container for image\n  const imgContainer = document.createElement("div");\n  imgContainer.className = "img-container";\n  menuItem.appendChild(imgContainer);\n\n  // Create img\n  const img = document.createElement("img");\n  img.src = "./../imgs/ramen.png";\n  img.className = "img";\n  imgContainer.appendChild(img);\n\n  const text = document.createElement("div");\n  text.className = "menuText";\n  text.textContent = "the best ramen in the world";\n  menuItem.appendChild(text);\n\n  const images = ["donut", "fries", "burger", "ice-cream", "pizza", "ramen"];\n\n  // Clone Menu items\n  let clonedMenu = "";\n  for (let i = 0; i < 5; i++) {\n    clonedMenu = menuItem.cloneNode(true);\n    text.textContent = "The best " + images[i] + " in the world";\n    img.src = "./../imgs/" + images[i] + ".png";\n    menuGrid.appendChild(clonedMenu);\n  }\n}\n\nfunction loadHomepageOnClick() {\n  const homepage = document.querySelector("#homepage");\n  const contactPage = document.querySelector("#contactPage");\n  const menuPage = document.querySelector("#menuPage");\n\n  // Get button\n  const homeButton = document.querySelector("#home");\n\n  homeButton.addEventListener("click", () => {\n    contactPage.style.display = "none";\n    menuPage.style.display = "none";\n\n    homepage.style.display = "flex";\n  });\n}\n\nfunction loadContactPageOnClick() {\n  const homepage = document.querySelector("#homepage");\n  const contactPage = document.querySelector("#contactPage");\n  const menuPage = document.querySelector("#menuPage");\n\n  // Get button\n  const contactButton = document.querySelector("#contact");\n\n  contactButton.addEventListener("click", () => {\n    contactPage.style.display = "flex";\n\n    homepage.style.display = "none";\n    menuPage.style.display = "none";\n  });\n}\n\nfunction loadMenuPageOnClick() {\n  const homepage = document.querySelector("#homepage");\n  const contactPage = document.querySelector("#contactPage");\n  const menuPage = document.querySelector("#menuPage");\n\n  // Get button\n  const menuButton = document.querySelector("#menu");\n\n  menuButton.addEventListener("click", () => {\n    menuPage.style.display = "flex";\n\n    homepage.style.display = "none";\n    contactPage.style.display = "none";\n  });\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?'
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
