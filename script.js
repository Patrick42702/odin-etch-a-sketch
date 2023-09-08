function calculateWH(size){
    const square = document.querySelector('.square');
    square.style['height'] = 0;
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
}


createGraph(4);