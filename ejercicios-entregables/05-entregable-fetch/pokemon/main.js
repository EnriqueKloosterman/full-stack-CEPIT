
let pokemon = [];

const pokedex = [];
for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    pokedex.push(fetch(url).then((res) => res.json()));
}
Promise.all(pokedex).then((results) => {
    pokemon = results.map((data) => ({
        name: data.name,
        id: data.id,
        image: data.sprites.other['official-artwork'].front_default,
        types: data.types.map((type) => type.type.name),
        // stats: data.stats.map((stat) => stat.stat.name),
        stats: data.stats.map((stat) => stat.base_stat)
    })); 
    console.log(pokemon);
    showPokedex(pokemon);
});

const typeBtn = document.querySelectorAll('.type-btn');
typeBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedType = button.id;
        filterByType(selectedType);
    });
});

const filterByType = (type) => {
    filteredPokemon = pokemon.filter((data) => data.types.includes(type)); 
    showPokedex(filteredPokemon);
};

const showPokedex = (pokemon) => {
    const cardContainer = document.querySelector('.card-Container');
    cardContainer.innerHTML = '';
    pokemon.forEach((data, index) => {
        const card = document.createElement('div');
        card.classList = 'card';
        card.setAttribute('data-bs-toggle', 'modal');
        card.setAttribute('data-bs-target', `#pokemonModal`);
        card.setAttribute('data-pokemon-id', index);
        card.addEventListener('click', () => {
            const pokemonId = card.getAttribute('data-pokemon-id');
            openModal(pokemonId);
          });
        const imgContainer = document.createElement('div');
        imgContainer.classList = 'img-container';
        imgContainer.classList.add(data.types[0]);
        const img = document.createElement('img');
        img.src = data.image;
        imgContainer.appendChild(img);
        const infoContainer = document.createElement('div');
        infoContainer.classList = 'info';
        const name = document.createElement('h3');
        name.classList = 'name';
        name.textContent = data.name;
        infoContainer.appendChild(name);
        const typesContainer = document.createElement('div');
        typesContainer.classList = 'types';
        data.types.forEach((typeName) => {
            const type = document.createElement('p');
            type.classList = typeName;
            type.innerHTML = typeName;
            typesContainer.appendChild(type);
        });
        infoContainer.appendChild(typesContainer);
        card.appendChild(imgContainer);
        card.appendChild(infoContainer);
        cardContainer.appendChild(card);
    });
};
const btnId = document.getElementById('show-all')
btnId.addEventListener('click', () => {
    showPokedex(pokemon);
})
const card = document.querySelectorAll('.card');
card.forEach(card => {
    card.addEventListener('click', () => {      
    })
})
function openModal(pokemonId) {
    const modalContent = document.querySelector('.modal-content');
    const selectedPokemon = pokemon[pokemonId];
    modalContent.innerHTML = '';
    //* imagen pokemon
    const imgContainer = document.createElement('div');
    imgContainer.classList = 'img-container';
    const img = document.createElement('img');
    imgContainer.classList.add(selectedPokemon.types[0]);
    img.src = selectedPokemon.image;
    imgContainer.appendChild(img);
    const infoContainer = document.createElement('div');
    infoContainer.classList = 'info';
    //*nombre pokemon
    const name = document.createElement('h2');
    name.classList = 'name';
    name.textContent = selectedPokemon.name;
    infoContainer.appendChild(name);
    //*tipos pokemon
    const typesContainer = document.createElement('div');
    typesContainer.classList = 'types';
    selectedPokemon.types.forEach((typeName) => {
        const type = document.createElement('p');
        type.classList = typeName;
        type.innerHTML = typeName;
        typesContainer.appendChild(type);
    });
    infoContainer.appendChild(typesContainer);
    const statContainer = document.createElement('div');
    statContainer.classList = 'stats';
    const hp = document.createElement('p');
    hp.classList = 'hp';
    hp.innerHTML = `Hp 
    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: ${selectedPokemon.stats[0]/2}%"> ${selectedPokemon.stats[0]}</div>`
    statContainer.appendChild(hp)
    const attack = document.createElement('p')
    attack.classList = 'attack';
    attack.innerHTML = `Attack 
    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: ${selectedPokemon.stats[1]/2}%"> ${selectedPokemon.stats[1]}</div>`;
    statContainer.appendChild(attack);
    const defense = document.createElement('p')
    defense.classList = 'defense';
    defense.innerHTML = `Defense 
    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: ${selectedPokemon.stats[2]/2}%"> ${selectedPokemon.stats[2]}</div>`;
    statContainer.appendChild(defense);
    const spAttack = document.createElement('p')
    spAttack.classList = 'spAttack';
    spAttack.innerHTML = `Special Attack
    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: ${selectedPokemon.stats[3]/2}%"> ${selectedPokemon.stats[3]}</div>`;;
    statContainer.appendChild(spAttack);
    const spDefense = document.createElement('p')
    spDefense.classList = 'spDefense';
    spDefense.innerHTML = `Special Defense 
    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: ${selectedPokemon.stats[4]/2}%"> ${selectedPokemon.stats[4]}</div>`;;
    statContainer.appendChild(spDefense);
    const speed = document.createElement('p')
    speed.classList = 'speed';
    speed.innerHTML = `Speed 
    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: ${selectedPokemon.stats[5]/2}%"> ${selectedPokemon.stats[5]}</div>`;
    statContainer.appendChild(speed);
    infoContainer.appendChild(statContainer);
    modalContent.appendChild(imgContainer)
    modalContent.appendChild(infoContainer)


const prevButton = document.createElement('button');
prevButton.textContent = 'Anterior';
prevButton.classList = 'btn btn-success rounded';
prevButton.addEventListener('click', () => {
    navigatePokemon(pokemonId, 'prev');
});

const nextButton = document.createElement('button');
nextButton.textContent = 'Siguiente';
nextButton.classList = 'btn btn-success rounded';
nextButton.addEventListener('click', () => {
    navigatePokemon(pokemonId, 'next');
});

const buttonGroup = document.createElement('div');
buttonGroup.classList = 'btn-group';
buttonGroup.setAttribute('role', 'group');
buttonGroup.appendChild(prevButton);
buttonGroup.appendChild(nextButton);

modalContent.appendChild(buttonGroup);

}
function navigatePokemon(pokemonId, direction) {
    const modal = document.getElementById('pokemonModal');
    const currentPokemonId = parseInt(pokemonId);
    let newPokemonId;

    if (direction === 'prev') {
        newPokemonId = (currentPokemonId - 1 + pokemon.length) % pokemon.length;
    } else if (direction === 'next') {
        newPokemonId = (currentPokemonId + 1) % pokemon.length;
    }

    openModal(newPokemonId);
}


