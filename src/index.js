// Create container
const container = document.createElement("div");
container.id = "container";

export function loadContactPageOnClick() {
  const contactButton = document.querySelector("#contact");

  contactButton.addEventListener("click", () => {
    const contactPage = document.querySelector("#contactPage");
    contactPage.style.display = "flex";

    const homepage = document.querySelector("#homepage");
    homepage.style.display = "none";
  });
}

export function loadHomepageOnClick() {
  const homeButton = document.querySelector("#home");

  homeButton.addEventListener("click", () => {
    const contactPage = document.querySelector("#contactPage");
    contactPage.style.display = "none";

    const homepage = document.querySelector("#homepage");
    homepage.style.display = "flex";
  });
}

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

  // Add header divs ids
  headerDiv1.id = "home";
  headerDiv2.id = "menu";
  headerDiv3.id = "contact";

  // Add to header
  homeHeader.appendChild(headerDiv1);
  homeHeader.appendChild(headerDiv2);
  homeHeader.appendChild(headerDiv3);

  const contentContainer = document.querySelector("#content");

  // Add homepage header to 'content' div
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

  // Add homepage container to 'content' div
  contentContainer.appendChild(container);

  // Add home div
  const home = document.createElement("div");
  home.id = "homepage";
  container.appendChild(home);
  home.appendChild(main);

  // Add homepage's footer to 'content' div
  contentContainer.appendChild(homeFooter);
}

export function createContactPage() {
  // Create contact page
  const contactPage = document.createElement("div");
  contactPage.style.display = "none";
  contactPage.id = "contactPage";
  container.appendChild(contactPage);

  const contactInfo = document.createElement("div");
  contactInfo.id = "contactInfo";
  contactInfo.style.cssText = "color: #eee; font-size: 1.5vw; gap: 0.5vw";
  contactPage.appendChild(contactInfo);

  const telephoneInfo = document.createElement("div");
  telephoneInfo.id = "telephoneInfo";
  telephoneInfo.textContent = "📞 123 456 789";
  telephoneInfo.style.height = "3vw";
  contactInfo.appendChild(telephoneInfo);

  const locationInfo = document.createElement("div");
  locationInfo.id = "locationInfo";
  locationInfo.textContent = "🏠 408 8th Ave, New York, NY 10001";
  locationInfo.style.height = "3vw";
  contactInfo.appendChild(locationInfo);

  const contactLocation = document.createElement("div");
  contactLocation.id = "contactLocation";
  contactLocation.style.cssText = "flex: 1";
  const map = document.createElement("iframe");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.55529396812!2d-73.99926866873832!3d40.7498099132077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259563f5e860d%3A0xb4553a42494e5807!2sKFC!5e0!3m2!1sen!2sbr!4v1676770572531!5m2!1sen!2sbr";
  map.style.cssText = "height: 90%; width: 100%";
  contactLocation.appendChild(map);
  contactInfo.appendChild(contactLocation);
}
