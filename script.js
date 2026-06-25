let squaresPerSide = 16;
const container = document.querySelector(".container");

function createDefaultGrid() {
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-items");
    container.appendChild(cell);
  }

  const items = document.querySelectorAll(".grid-items");
  items.forEach((item) => {
    item.style.width = `calc(100% / ${squaresPerSide})`;
    item.style.height = item.style.width;
  });
}
createDefaultGrid();
