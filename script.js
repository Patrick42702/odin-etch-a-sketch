function scaleGrid(size){
  const height = 512;
  const width = 512;

  const squareHeight = height / size;
  const squareWidth = width / size;
  return `height: ${squareHeight}px; width: ${squareWidth}px;`;
  
}

function createGraph(size) {

  const container = document.querySelector('.layout');

  const graphContainer = document.createElement("div");
  graphContainer.classList.add("graph-container");
  container.appendChild(graphContainer);

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

  const square = document.querySelectorAll('.square');

  squareProperties = scaleGrid(size);
  
  square.forEach(box => box.style.cssText = squareProperties);
}


createGraph(32);