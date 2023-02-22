import { firstLoad } from "./firstLoad.js";
import { renderHome } from "./renderHome.js";
import { renderContact } from "./renderContact.js";
import { renderMenu } from "./renderMenu.js";

firstLoad();
renderHome();

// Home button listener
const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", function () {
  renderHome();
});

// Contact button listener
const contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", function () {
  renderContact();
});

// Menu button listener
const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", function () {
  renderMenu();
});
