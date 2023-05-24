let pokemon = [];

//? obtiene la data de los pokemon 
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
    }));
    console.log(pokemon);
    showPokedex(pokemon);
});

//?
const typeBtn = document.querySelectorAll('.type-btn');

typeBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedType = button.id;
        filterByType(selectedType);
    });
});

//? Filtra los pokémon por tipo y los muestra en el contenedor
const filterByType = (type) => {
  //todo Filtra los pokémon por tipo
    const filteredPokemon = pokemon.filter((data) => data.types.includes(type));

  //todo Muestra los pokémon filtrados en el contenedor
    showPokedex(filteredPokemon);
};

//? Muestra los pokémon en el contenedor
const showPokedex = (pokemon) => {
    const cardContainer = document.querySelector('.card-Container');
    cardContainer.innerHTML = '';

    pokemon.forEach((data) => {
        const card = document.createElement('div');
        card.classList = 'card';

        const imgContainer = document.createElement('div');
        imgContainer.classList = 'img-container';
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

