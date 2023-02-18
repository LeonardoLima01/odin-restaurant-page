export function createHomePage() {
  // Create homepage's header
  const homeHeader = document.createElement("div");
  homeHeader.id = "header";

  // Create header divs
  const headerDiv1 = document.createElement("div");
  const headerDiv2 = document.createElement("div");
  const headerDiv3 = document.createElement("div");

  // Add header divs text
  headerDiv1.textContent = "Home";
  headerDiv2.textContent = "Menu";
  headerDiv3.textContent = "Contact";

  // Add to header
  homeHeader.appendChild(headerDiv1);
  homeHeader.appendChild(headerDiv2);
  homeHeader.appendChild(headerDiv3);

  // Add homepage to 'content' div
  const contentContainer = document.querySelector("#content");

  contentContainer.appendChild(homeHeader);

  // Create homepage's footer
  const homeFooter = document.createElement("div");
  homeFooter.id = "footer";

  // Create main div
  const main = document.createElement("div");
  main.id = "main";

  // Add main to 'content' div
  contentContainer.appendChild(main);

  // Create info div
  const info = document.createElement("div");
  info.id = "info";

  // Add info to main div
  main.appendChild(info);

  // Create title inside info div
  const infoTitle = document.createElement("div");
  infoTitle.id = "infoTitle";

  // Set infoTitle text
  infoTitle.textContent = "Lorem ipsum dolor sit amet.";

  // Add infoTitle to info div
  info.appendChild(infoTitle);

  // Create text inside info div
  const infoContent = document.createElement("div");
  infoContent.id = "infoContent";

  // Set text inside info
  infoContent.textContent =
    "Mauris quis est nibh. Nulla ut turpis cursus commodo non in sapien.";

  // Add text to info
  info.appendChild(infoContent);

  // Set homepage's footer text
  homeFooter.textContent = "Copyright © The Odin Project 2023";

  // Add homepage's footer to 'content' div
  contentContainer.appendChild(homeFooter);

  // Add header,main and footer into 'homepage' div
  const homepageContainer = document.createElement("div");
  homepageContainer.id = "homepageContainer";
  homepageContainer.appendChild(homeHeader);
  homepageContainer.appendChild(main);
  homepageContainer.appendChild(homeFooter);

  // Add homepage container to 'content' div
  contentContainer.appendChild(homepageContainer);
}

export function createContactPage() {}
