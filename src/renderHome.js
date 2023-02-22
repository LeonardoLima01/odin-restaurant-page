export function renderHome() {
  const main = document.querySelector("#main");

  // if not null
  if (main.firstChild != null) {
    // Remove current div inside 'content'
    main.removeChild(main.firstChild);
  }

  const homepage = document.createElement("div");
  homepage.id = "homepage";
  main.appendChild(homepage);

  const homeTitle = document.createElement("div");
  homeTitle.id = "homeTitle";
  homeTitle.textContent = "The Best Restaurant";
  homepage.appendChild(homeTitle);

  const homeText = document.createElement("div");
  homeText.id = "homeText";
  homeText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis ex nec arcu pharetra, eu semper diam dictum. Mauris imperdiet lacus nec interdum imperdiet. Sed sit amet libero et leo pharetra convallis eu sit amet.";
  homepage.appendChild(homeText);
}
