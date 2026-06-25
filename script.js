const container = document.querySelector(".container");
let colors = false;

function createGrid(squares = 16) {
  for (let i = 0; i < squares * squares; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    container.appendChild(cell);
  }

  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => {
    item.style.width = `calc(100% / ${squares})`;
    item.style.height = item.style.width;
    item.addEventListener(
      "mouseenter",
      () => (item.style.backgroundColor = colors ? randomizeColor() : "black"),
    );
  });
}
createGrid();

const button = document.querySelector(".button");

function changeGridSize(squares) {
  button.addEventListener("click", () => {
    const userInput = prompt("How many squares per side? (under 100)");
    if (userInput <= 100 && typeof +userInput === "number") {
      container.replaceChildren();
      createGrid(userInput);
    } else {
      alert("Please enter a NUMBER under 100!");
    }
  });
}
changeGridSize();

let colorButton = document.querySelector(".colors");
colorButton.addEventListener("click", () => {
  if (!colors) {
    colors = true;
  } else {
    colors = false;
  }
});

function randomizeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
