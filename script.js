const btn = document.createElement("button");
btn.textContent = "change tiles";
let size = 16;
btn.addEventListener("click", () => {
    container.remove()
    size = parseInt(window.prompt("What is the size you want?(nxn)"));
    if(size<=100&&size>=1){
     return createDiv(size);
    }
    
  })
document.body.appendChild(btn);
createDiv = (size)=>{
    const container = document.createElement("div");
    container.id = "container";
    for (let i = 0; i < size; i++) {
      const line = document.createElement("div");
      line.classList.add("line");
      for (let j = 0; j < size; j++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        line.appendChild(grid);
      }
      container.appendChild(line);
    }
    document.body.appendChild(container);
    let mouseDown = false;

container.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("grid")) {
    mouseDown = true;
    toggleColor(e.target);
    e.preventDefault();
  }
});

container.addEventListener("mouseup", (e) => {
  mouseDown = false;
});
container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("grid") && mouseDown) {
    toggleColor(e.target);
  }
});
const toggleColor = (e) => {
  if (!e.style.backgroundColor || e.style.backgroundColor == "black") {
    e.style.backgroundColor = "white";
  } else {
    e.style.backgroundColor = "black";
  }
};
}
createDiv(size);



