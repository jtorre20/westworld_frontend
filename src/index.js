document.addEventListener("DOMContentLoaded", () => {
  // alert('LOADED');
  const endPoint = "http://localhost:3000/api/v1/characters";
  fetch(endPoint)
    .then(res => res.json())
    .then(json =>
      json.forEach(character => {
        const markup = `
        <h3>${character.name}
          <button>edit</button>
        </h3>`;
        document.querySelector("#character-list").innerHTML += markup;
      })
    );

  // box13.style.backgroundColor = 'black';

  // let box14 = document.getElementById("")
  // let box15 = document.getElementById("0-0")
  // let box16 = document.getElementById("0-0")
  // let box17 = document.getElementById("0-0")
  // let box18 = document.getElementById("0-0")
  // let box19 = document.getElementById("0-0")
  // let box20 = document.getElementById("0-0")
  // let box21 = document.getElementById("0-0")
  // let box22 = document.getElementById("0-0")
  // let box23 = document.getElementById("0-0")
  // let box24 = document.getElementById("0-0")
  // let box25 = document.getElementById("0-0")
});
