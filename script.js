function scaleGrid(size) {
  const height = 512;
  const width = 512;

  const squareHeight = height / size;
  const squareWidth = width / size;
  return `height: ${squareHeight}px; width: ${squareWidth}px;`;
}

function createMenu(graphContainer) {
  const div = document.createElement("div");
  const button = document.createElement("button");
  const form = document.createElement("form");

  div.classList.add("menu");

  button.classList.add("erase");
  button.textContent = "ERASE";

  form.classList.add("form");
  const label = document.createElement("label");
  label.textContent = "Enter number here:";
  form.appendChild(label);
  const input = document.createElement("input");
  input.type = "number";
  input.id = "userNumber";
  form.appendChild(input);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Submit";
  submitButton.classList.add("submit");
  form.appendChild(submitButton);

  div.appendChild(button);
  div.appendChild(form);
  graphContainer.appendChild(div);
}

function createGraph(size) {
  const container = document.querySelector(".layout");

  const graphContainer = document.createElement("div");
  graphContainer.classList.add("graph-container");
  container.appendChild(graphContainer);

  createMenu(graphContainer);

  for (let i = 0; i < size; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      rowContainer.appendChild(square);
    }
    graphContainer.appendChild(rowContainer);
  }

  const square = document.querySelectorAll(".square");

  squareProperties = scaleGrid(size);

  square.forEach((box) => (box.style.cssText = squareProperties));
}

createGraph(10);

function handleHover(box) {
  box.style["background-color"] = "gray";
}

function handleErase() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => (square.style["background-color"] = "white"));
}

function handleNumber() {
  console.log("handle number called.");
  const input = document.querySelector("input");
  let size = input.value;
  createGraph(size);
}

function initializeEvents() {
  const form = document.querySelector(".form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("handle number called.");
    const input = document.querySelector("input");
    let size = input.value;

    const layout = document.querySelector(".layout");
    const graphContainer = document.querySelector(".graph-container");
    layout.removeChild(graphContainer);

    createGraph(size);
    initializeEvents();
  });

  const square = document.querySelectorAll(".square");

  square.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      handleHover(box);
    });
  });

  const erase = document.querySelector(".erase");
  erase.addEventListener('click', handleErase);
}

initializeEvents();
