// create a function that produces a random box color sequence
// user will then repeat the sequence
//then another function will check that it was the correct sequence
// if it is, a new sequence will be created that is one additional box longer
document.addEventListener("DOMContentLoaded", () => {
  let counter = 0;
});
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
  // clickCount = sqarray.length;

  document.getElementById("main").addEventListener("click", e => {
    eventArray.push(e.target);
    e.target.style.backgroundColor = "purple";
  });
  // if (eventArray === sqarray) {
  //   console.log("coorect");
  // }
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
