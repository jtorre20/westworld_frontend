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

function wait(seconds, callback) {
  return new Promise(resolve => setTimeout(() => resolve(callback()), seconds));
}

function changeColor(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    timedColorFlash(sequence[i], i);
  }
  wait(5000, resetAllWhite);
}

function timedColorFlash(box, sec) {
  setTimeout(() => (box.style.backgroundColor = "black"), sec * 1000);
}

function resetAllWhite() {
  let arraybox = boxArray();
  for (let i = 0; i < arraybox.length; i++) {
    arraybox[i].style.backgroundColor = "white";
  }
}

function compareArrays() {
  for (let i = 0; i < userSelection.length; i++) {
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
}

function userSelectionCompleted() {
  document.getElementById("user-done").addEventListener("click", e => {
    console.log("complete");
    console.log(compareArrays());
  });
}

function gameLoop(n) {
  randomSequence(n).then(resp => changeColor(resp));
  listenForUserSelection();
  userSelectionCompleted();
}

function levelOne() {
  document.getElementById("level-one").addEventListener("click", e => {
    console.log("clicked");
    gameLoop(3);
  });
}

function levelTwo() {
  document.getElementById("level-two").addEventListener("click", e => {
    console.log("clicked");
    gameLoop(3);
  });
}

// for (i = 1; i < 10; i++) {
//   gameLoop();
// }
