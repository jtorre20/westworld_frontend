document.addEventListener('DOMContentLoaded', () => {
  alert('LOADED');
  const endPoint = 'http://localhost:3000/api/v1/characters';
  fetch(endPoint)
    .then(res => res.json())
    .then(json => json.forEach(character => {
      const markup =`
        <h3>${character.name}
          <button>edit</button>
        </h3>`;
      document.querySelector('#character-list').innerHTML += markup;
    })
  );
  

});