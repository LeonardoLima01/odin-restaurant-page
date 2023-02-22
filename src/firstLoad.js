export function firstLoad() {
  // Get 'content' container
  const contentContainer = document.querySelector("#content");

  // Header
  const header = document.createElement("div");
  header.id = "header";
  contentContainer.appendChild(header);

  const homeHeader = document.createElement("div");
  homeHeader.id = "home";
  homeHeader.textContent = "Home";
  header.appendChild(homeHeader);

  const menuHeader = document.createElement("div");
  menuHeader.id = "menu";
  menuHeader.textContent = "Menu";
  header.appendChild(menuHeader);

  const contactHeader = document.createElement("div");
  contactHeader.id = "contact";
  contactHeader.textContent = "Contact";
  header.appendChild(contactHeader);

  // Page's main content
  const main = document.createElement("div");
  main.id = "main";
  contentContainer.appendChild(main);

  // Footer
  const footer = document.createElement("div");
  footer.id = "footer";
  footer.textContent = "Copyright © The Odin Project 2023";
  contentContainer.appendChild(footer);
}
