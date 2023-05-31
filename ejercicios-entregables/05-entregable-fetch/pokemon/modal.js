const card = document.getElementsByClassName('card');

const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');

let currentPokemonIndex = 0;

function openModal(pokemon) {
    // Actualizar el contenido del modal con la información del Pokémon
    modalContent.innerHTML = `
      <h3>${pokemon.name}</h3>
      <img src="${pokemon.image}" alt="${pokemon.name}" />
      <p>${pokemon.types.join(', ')}</p>
      <!-- Agrega más información del Pokémon si lo deseas -->
  
      <!-- Botones para navegar entre los Pokémon -->
      <div>
        <button id="prevBtn">Anterior</button>
        <button id="nextBtn">Siguiente</button>
      </div>
    `;
  
    // Mostrar el modal
    modal.style.display = 'block';
  
    // Manejar el evento de clic en el botón de cerrar
    closeBtn.addEventListener('click', closeModal);
  
    // Manejar el evento de clic en el botón de siguiente
    document.getElementById('nextBtn').addEventListener('click', nextPokemon);
  
    // Manejar el evento de clic en el botón de anterior
    document.getElementById('prevBtn').addEventListener('click', prevPokemon);
  }
  