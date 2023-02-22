export function renderMenu() {
  const main = document.querySelector("#main");

  // Remove current div inside 'content'
  main.removeChild(main.firstChild);

  // Create menu grid container
  const gridContainer = document.createElement("div");
  gridContainer.id = "gridContainer";
  main.appendChild(gridContainer);

  const icons = ["burger", "donut", "fries", "ice cream", "pizza", "ramen"];

  for (let i = 0; i < 6; i++) {
    // Create itemGrid div
    let div = document.createElement("div");
    div.id = "gridItem";

    // Add food icon
    let imgDiv = document.createElement("img");
    imgDiv.id = "foodIcon";
    imgDiv.src = "./imgs/icons/" + icons[i] + ".png";
    console.log(imgDiv.src);
    div.appendChild(imgDiv);

    // Add food description
    let textDiv = document.createElement("div");
    textDiv.id = "foodText";
    textDiv.textContent = "the best " + icons[i];
    div.appendChild(textDiv);

    // Add itemGrid
    gridContainer.appendChild(div);
  }
}
