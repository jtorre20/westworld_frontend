// create a function that produces a random box color sequence
// user will then repeat the sequence
//then another function will check that it was the correct sequence
// if it is, a new sequence will be created that is one additional box longer
document.addEventListener("DOMContentLoaded", () => {
  let counter = 0;
});
function boxArray() {
  let box1 = document.getElementById("0-0");
  let box2 = document.getElementById("0-1");
  let box3 = document.getElementById("0-2");
  let box4 = document.getElementById("0-3");
  let box5 = document.getElementById("0-4");
  let box6 = document.getElementById("1-0");
  let box7 = document.getElementById("1-1");
  let box8 = document.getElementById("1-2");
  let box9 = document.getElementById("1-3");
  let box10 = document.getElementById("1-4");
  let box11 = document.getElementById("2-0");
  let box12 = document.getElementById("2-1");
  let box13 = document.getElementById("2-2");

  return [
    box1,
    box2,
    box3,
    box4,
    box5,
    box6,
    box7,
    box8,
    box9,
    box10,
    box11,
    box12,
    box13
  ];
}
function getGrid() {
  return document.getElementById("identicon");
}

function randomSequence(n) {
  let i = 0;
  let sqarray = [];
  let arraybox = boxArray();
  // sqarray = []
  while (i < n) {
    var randomItem = arraybox[Math.floor(Math.random() * arraybox.length)];
    sqarray.push(randomItem);
    i++;
  }
  return sqarray;
}

function changeColor(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    sequence[i].style.backgroundColor = "black";
    // setTimeout(
    //   () => (currentBox.style.backgroundColor = "rgb(245, 245, 250)"),
    //   1000
    // );
  }
}

function resetAllWhite(boxarray) {
  for (let i = 0; i < boxarray.length; i++) {
    boxarray[i].style.backgroundColor = "white";
  }
}

// will listen for click event on square to check user response

function listenForSelection() {
  eventArray = [];
  clickCount = sqarray.length;

  document.getElementById("main").addEventListener("click", e => {
    eventArray.push(e.target);
    console.log("cool");
  });
  if (eventArray === sqarray) {
    console.log("coorect");
  }
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
