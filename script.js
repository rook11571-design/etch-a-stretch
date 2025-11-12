const btn = document.createElement("button");
btn.textContent = "change tiles";
let color = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let size = 16;
const makeColor = ()=>{
    let code = "#";
    console.log(Math.floor(Math.random()*16))
    for (let i = 0;i<6;i++){
        code += color[Math.floor(Math.random()*16)]
    }
    console.log(code);
    return code;
}
makeColor();
btn.addEventListener("click", () => {
    let temp =size;//in case of misinput
    container.remove()
    size = parseInt(window.prompt("What is the size you want?(nxn)"));
    if(size<=100&&size>=1){
     return createDiv(size);
    }
    alert("The maximum number of the grid is 100x100");
    size = temp//reset size
    return createDiv(size);
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
    e.style.backgroundColor = makeColor();
  } else {
    e.style.backgroundColor = "black";
  }
};
}
createDiv(size);