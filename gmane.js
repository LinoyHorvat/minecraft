const material = {
  dirt: "dirt",
  cloud: "cloud",
  tree: "tree",
  sky: "sky",
  grass: "grass",
  stone: "stone",
};

const tools = {
  picaxe: "Picaxe",
  shovel: "Shovel",
  axe: "Axe",
};

let GAME_SIZE = 20;

const toolsBar = document.querySelector(".toolsBar");
const picaxe = document.querySelector(".tool Picaxe");
const shovel = document.querySelector(".tool Shovel");
const axe = document.querySelector(".tool Axe");
const container = document.querySelector(".container");
container.style.gridTemplateColumns = `repeat(${GAME_SIZE}, 1fr)`;
container.style.gridTemplateRows = `repeat(${GAME_SIZE}, 1fr)`;

const gameArr = Array(GAME_SIZE - 1)
  .fill(0)
  .map(() => Array(GAME_SIZE - 1).fill(0));
createBoard();

container.addEventListener("click", (event) => {
  play(event.target);
});

function createBoard() {
  for (let row = 0; row < GAME_SIZE; row++) {
    for (let col = 0; col < GAME_SIZE; col++) {
      const div = document.createElement("div");
      div.setAttribute("id", `(${row},${col})`);
      // div.innerHTML = `(${row},${col})`;
      div.className = material.stone;
      // create sky
      if (row < 15) {
        div.className = material.sky;
      }
      // create grass
      else if (row === 15) {
        div.className = material.grass;
      }
      // create dirt
      else {
        div.className = material.dirt;
      }
      container.appendChild(div);
    }
  }
  creatStone();
  createTree();
  createCloud();
}

function createTree() {
  // make tree base
  for (let i = 9; i <= 14; i++) {
    const div = document.getElementById(`(${i},16)`);
    div.className = material.tree;
  }
  // make leaves
  for (let i = 4; i <= 8; i++) {
    for (let j = 15; j < 18; j++) {
      const div = document.getElementById(`(${i},${j})`);
      div.className = material.tree;
    }
  }
  // make bushes
  const div = document.getElementById(`(13,3)`);
  div.className = material.tree;
  for (let i = 2; i < 5; i++) {
    const div = document.getElementById(`(14,${i})`);
    div.className = material.tree;
  }
}

function createCloud() {
  for (let i = 3; i <= 4; i++) {
    for (let j = 2; j < 9; j++) {
      const div = document.getElementById(`(${i},${j})`);
      div.className = material.cloud;
    }
  }
  const div = document.getElementById(`(2,5)`);
  div.className = material.cloud;
  const div2 = document.getElementById(`(3,2)`);
  div2.className = material.sky;
  const div3 = document.getElementById(`(3,7)`);
  div3.className = material.sky;
  const div4 = document.getElementById(`(5,7)`);
  div4.className = material.cloud;
  const div5 = document.getElementById(`(5,6)`);
  div5.className = material.cloud;
}

function creatStone() {
  const div = document.getElementById(`(14,19)`);
  div.className = material.stone;
  for (let i = 10; i <= 13; i++) {
    const div = document.getElementById(`(14,${i})`);
    div.className = material.stone;
  }
}

const toolsArr = document.querySelectorAll(".toolsBar button");
let currentTool;
for (elm of toolsArr) {
  elm.addEventListener("click", (event) => {
    selectATool(event.target);
  });
}
const lastElement = [];

function selectATool(tool) {
  currentTool = tool.id;
  for (elm of toolsArr) {
    elm.className = "tool";
  }
  console.log(tool);
  tool.className = "tool selectedTool";
}

function play(div) {
  // if((div.className !== "sky") && (div.className !== "cloud")){
  if (currentTool === "Shovel" && div.className === "dirt") {
    lastElement.push(div.className);
    
    // toolsArr[toolsArr.length - 1].className = lastElement[lastElement.length - 1];
    div.className = material.sky;
  } else if (currentTool === "Picaxe" && div.className === "stone") {
    lastElement.push(div.className);
    toolsArr[toolsArr.length - 1].className = lastElement[lastElement.length - 1];
    div.className = material.sky;
  } else if (currentTool === "Axe" && div.className === "tree") {
    lastElement.push(div.className);
    toolsArr[toolsArr.length - 1].className = lastElement[lastElement.length - 1];
    div.className = material.sky;
  } else if (currentTool === "lastElement") {
    if (lastElement.length > 0) {
      if (lastElement[lastElement.length - 1] === material.stone) {
        div.className = material.stone;
        lastElement.pop();
      }
      else if (lastElement[lastElement.length - 1] === material.dirt) {
        div.className = material.dirt;
        lastElement.pop();
      }
      else if (lastElement[lastElement.length - 1] === material.tree) {
        div.className = material.tree;
        lastElement.pop();
      }
      else if (lastElement[lastElement.length - 1] === material.grass) {
        div.className = material.grass;
        lastElement.pop();
      }
    }
  } else {
    alert("wrong tool");
    // currentTool.backgroundColor ="red";
  }
  // }
}
