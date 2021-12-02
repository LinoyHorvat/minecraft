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
  axe: "Axe"
}

let GAME_SIZE = 20;

const toolsBar = document.querySelector(".toolsBar");
const container = document.querySelector(".container");
container.style.gridTemplateColumns = `repeat(${GAME_SIZE}, 1fr)`;
container.style.gridTemplateRows = `repeat(${GAME_SIZE}, 1fr)`;

createTools();

function createTools(){
  const tool = document.createElement("tool");
  tool.setAttribute("id", `${tools.shovel}`);
  tool.innerHTML = `tools.shovel`;
  tool.className = tools.shovel;
  toolsBar.appendChild(tool);
}


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
      div.innerHTML = `(${row},${col})`;
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
    for(let j = 15; j< 18; j++){
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
    for(let j = 2; j< 9; j++){
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

function play(div) {
  console.log(div);
  div.className = material.sky;

}
