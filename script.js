const changeBtn = document.createElement("button");
changeBtn.textContent = "change tiles";
let color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let size = 16;
let mode = 0;
const rainbowBtn = document.createElement("button");
rainbowBtn.textContent = "Rainbow";
const colorBtn = document.createElement("button");
colorBtn.textContent = "Colour";
const colorInput = document.createElement("input");
colorInput.type = "color";

colorBtn.addEventListener("click", () => {
  mode = 0;
});
rainbowBtn.addEventListener("click", () => {
  mode = 1;
});
const eraserBtn = document.createElement("button");
eraserBtn.textContent = "Eraser";
eraserBtn.addEventListener("click", () => {
  mode = 2;
});
const makeColor = () => {
  let code = "#";
  console.log(Math.floor(Math.random() * 16));
  for (let i = 0; i < 6; i++) {
    code += color[Math.floor(Math.random() * 16)];
  }
  console.log(code);
  return code;
};
const rgb= (input) =>{
    let r = Number(`0x${input[1]}`)*16 +Number(`0x${input[2]}`)*1
    let g = Number(`0x${input[3]}`)*16 +Number(`0x${input[4]}`)*1
    let b = Number(`0x${input[5]}`)*16 +Number(`0x${input[6]}`)*1
    return `rgb(${r}, ${g}, ${b})`
}
makeColor();
changeBtn.addEventListener("click", () => {
  let temp = size; //in case of misinput
  container.remove();
  size = Number(window.prompt("What is the size you want?(nxn)"));
  if (size <= 100 && size >= 1) {
    return createDiv(size);
  }
  alert("The maximum number of the grid is 100x100");
  size = temp; //reset size
  return createDiv(size);
});
const btn = document.createElement("div");
btn.appendChild(changeBtn);
btn.appendChild(rainbowBtn);
btn.appendChild(eraserBtn);
btn.appendChild(colorBtn);
btn.appendChild(colorInput);
document.body.appendChild(btn);

createDiv = (size) => {
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
    if (mode == 1) {
      //if (!e.style.backgroundColor || e.style.backgroundColor == "black") {
      e.style.backgroundColor = makeColor();
      //}
    }
    if (mode == 2) {
      e.style.backgroundColor = "black";
    }
    if (mode == 0) {
      input = rgb(colorInput.value);
      console.log(`input: ${input}`)
      const eStyles = window.getComputedStyle(e);
      console.log(`current color: ${eStyles.backgroundColor}`);
      console.log(eStyles.backgroundColor==input)
      if (e.style.backgroundColor == "black" || !e.style.backgroundColor ||eStyles.backgroundColor!=input) {
        e.style.backgroundColor = input;
        e.style.opacity = 1;
        return 1;
      } else {
        e.style.opacity -= 0.1;
        if (e.style.opacity <= 0) {
          e.style.backgroundColor = input;
          e.style.opacity = 0;
        }
      }
    }
  };
};
createDiv(size);
