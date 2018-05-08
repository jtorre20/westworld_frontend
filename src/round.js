// create a function that produces a random box color sequence
// user will then repeat the sequence
//then another function will check that it was the correct sequence
// if it is, a new sequence will be created that is one additional box longer
document.addEventListener('DOMContentLoaded', () => {

let counter = 0

let box1 = document.getElementById("0-0")
let box2 = document.getElementById("0-1")
let box3 = document.getElementById("0-2")
let box4 = document.getElementById("0-3")
let box5 = document.getElementById("0-4")
let box6 = document.getElementById("1-0")
let box7 = document.getElementById("1-1")
let box8 = document.getElementById("1-2")
let box9 = document.getElementById("1-3")
let box10 = document.getElementById("1-4")
let box11 = document.getElementById("2-0")
let box12 = document.getElementById("2-1")
let box13 = document.getElementById("2-2")

boxArray = [box1,
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

function randomSequence(n) {
  let i = 0
  sqarray = []
  while (i < n) {
    var randomItem = boxArray[Math.floor(Math.random() * boxArray.length)];
    sqarray.push(randomItem)
    i++
  }
  return sqarray;
}

function changeColor() {
  let sequence = randomSequence(3)
  for (let i = 0; i < sequence.length; i++) {
    sequence[i].style.backgroundColor = "black";
    }
  }
})