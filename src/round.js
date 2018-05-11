// create a function that produces a random box color sequence
// user will then repeat the sequence
//then another function will check that it was the correct sequence
// if it is, a new sequence will be created that is one additional box longer
document.addEventListener("DOMContentLoaded", () => {});
let userSelection = [];
let sqarray = [];
let level = 3
let status = "fail"

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

  status = "success"
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


function gameLoop(level) {
  randomSequence(level).then(resp => changeColor(resp));
  listenForUserSelection();
  userSelectionCompleted();
  if (status === "fail") {
    alert("You're a loser")
    level = 3
    sqarray = []
    userSelection = []
    return "string"
  } else {
      let score = 100
      level++
      alert("Good job, keepin it 100")
      sqarray = []
      userSelection = []
      return "broken"
      
      // setInterval(gameLoop(level), 4000)
  }
}

function levelOne() {
  document.getElementById("level-one").addEventListener("click", e => {
    console.log("clicked");
    gameLoop(level);
  });
}

function levelTwo() {
  document.getElementById("level-two").addEventListener("click", e => {
    console.log("clicked");
    gameLoop(level);
  });
}

function sendScore() {
  fetch('http://localhost:3000/api/v1/rounds', {
    method: "POST",
    body: JSON.stringify({
      score: 50
    }),
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    }
  })
}



function grabScores() {
  fetch('http://localhost:3000/api/v1/rounds').then(res => res.json()).then(json => {
    json.forEach(round => {
      // debugger
      let myTable = document.getElementById("myTable")
      let tableRow = document.createElement("tr")
      let newRow = myTable.appendChild(tableRow)
      // row = m.insertRow(2)
      let cell1 = newRow.insertCell(0)
      cell1.innerHTML = `${round.name}`

      let cell2 = newRow.insertCell(1)
      cell2.innerHTML = `${round.score}`

    });
  })
}
// ******************************************FIXME:*********************
// ******************************************TESTING*********************
// ******************************************TESTING*********************
// ******************************************TESTING*********************
// function continuousGame(x) {
//   while (x < 10) {
//     if (gameLoop(x) == true);
//     console.log("sdfsd");
//     x++;
//     // level(x);
//     // if (gameLoop(x) == true) {
//     //   x++;
//     //   continuousGame(x);
//     // }
//   }
//   return "done";
// }
//
// function level(n) {
//   document.getElementById("level-one").addEventListener("click", e => {
//     console.log("clicked");
//     continuousGame(n);
//   });
// }