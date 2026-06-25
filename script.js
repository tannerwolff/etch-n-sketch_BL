let squaresPerSide = 16;
const container = document.querySelector(".container");

function createDefaultGrid() {
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    container.appendChild(cell);
  }

  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => {
    item.style.width = `calc(100% / 16)`;
    item.style.height = item.style.width;
    item.addEventListener(
      "mouseenter",
      () => (item.style.backgroundColor = "black"),
    );
  });
}
createDefaultGrid();
