// create a function that produces a random box color sequence
// user will then repeat the sequence
//then another function will check that it was the correct sequence
// if it is, a new sequence will be created that is one additional box longer
document.addEventListener("DOMContentLoaded", () => {});
let userSelection = [];
let sqarray = [];

function boxArray() {
  let boxes = [];
  for (let row = 0; row < 5; row++) {
    for (let column = 0; column < 5; column++) {
      let box = document.getElementById(`${row}-${column}`);
      boxes.push(box);
    }
  }
  return boxes;
}

function getGrid() {
  return document.getElementById("identicon");
}

function randomSequence(n) {
  let i = 0;
  let arraybox = boxArray();
  // sqarray = []
  while (i < n) {
    var randomItem = arraybox[Math.floor(Math.random() * arraybox.length)];
    sqarray.push(randomItem);
    i++;
  }
  return Promise.resolve(sqarray);
}

function changeColor(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    timedColorFlash(sequence[i], i);
  }
}

function timedColorFlash(box, sec) {
  setTimeout(() => (box.style.backgroundColor = "black"), sec * 1000);
}

function resetAllWhite(boxarray) {
  for (let i = 0; i < boxarray.length; i++) {
    boxarray[i].style.backgroundColor = "white";
  }
}

function compareArrays() {
  for (i = 0; i < userSelection.length; i++) {
    if (userSelection[i] != sqarray[i]) {
      return false;
    }
  }
  return true;
}

// will listen for click event on square to check user response

function listenForUserSelection() {
  // clickCount = sqarray.length;

  document.getElementById("main").addEventListener("click", e => {
    userSelection.push(e.target);
    e.target.style.backgroundColor = "purple";
  });
  // if (eventArray === sqarray) {
  //   console.log("coorect");
  // }
}

function wait(seconds, callback) {
  return new Promise(resolve => setTimeout(() => resolve(callback()), seconds));
}

// wait(2000, () => console.log("game"))
//   .then(res => wait(2000, () => console.log("winning")))
//   .then(res => console.log("end"));

function gameLoop(n) {
  randomSequence(n)
    .then(res => changeColor(res))
    .then(res => resetAllWhite(boxArray()))
    .then(res => listenForUserSelection())
    .then(res => compareArrays());

  // resetAllWhite(boxArray);
  // listenForUserSelection();
  // if (compareArrays() === true) {
  //   alert("success");
  // } else {
  //   alert("failed");
}
// }

function init() {
  document.getElementById("button").addEventListener("click", e => {
    console.log("clicked");
    gameLoop(3);
  });
}

// generate a new sequence
//flash the colors of sequence
//set setTimeout
//chnge colors back go white
//listen for clicks
// store loctaion of click
//compare it the original sequence
//-- correct sequence = each click matches sequence array order
//--incorrect -
