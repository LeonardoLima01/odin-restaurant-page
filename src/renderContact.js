export function renderContact() {
  const main = document.querySelector("#main");

  // Remove current div inside 'content'
  main.removeChild(main.firstChild);

  // Create container for contact
  const contactContainer = document.createElement("div");
  contactContainer.id = "contactContainer";
  main.appendChild(contactContainer);

  // Add telephone
  const telephone = document.createElement("div");
  telephone.id = "telephone";
  telephone.textContent = "📞 123 456 789";
  contactContainer.appendChild(telephone);

  // Add address
  const address = document.createElement("div");
  address.id = "address";
  address.textContent = "🏠 408 8th Ave, New York";
  contactContainer.appendChild(address);

  // Embed google maps map
  const mapContainer = document.createElement("div");
  mapContainer.id = "mapContainer";
  const map = document.createElement("iframe");
  map.id = "map";
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.555293968125!2d-73.99926866817553!3d40.74980991320774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259563f5e860d%3A0xb4553a42494e5807!2sKFC!5e0!3m2!1sen!2sbr!4v1677020884327!5m2!1sen!2sbr";
  mapContainer.appendChild(map);
  contactContainer.appendChild(mapContainer);
}
