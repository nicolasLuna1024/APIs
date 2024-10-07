const consultarPokemon = (id, number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        pintarPokemon(data, number);
    })
    .catch((error) => {
        console.log(error);
    });
}; 
const lista = document.getElementById("listarpokemon");
const pintarPokemon = (data, id) => {
    let item = lista.querySelector(`#pok-${id}`);
    // Asigna la imagen del Pokémon
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    // Asigna el nombre del Pokémon
    item.getElementsByTagName("p")[0].innerHTML = data.name;
    // Muestra las habilidades del Pokémon
    let habilidades = '';
    for (let i = 0; i < data.abilities.length; i++) {
    habilidades += `<li>${data.abilities[i].ability.name}</li>`;
    }
    item.getElementsByTagName('ol')[0].innerHTML = habilidades;
}; 
const btnSeleccionar = () => {
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon, 1);
    consultarPokemon(segundoPokemon, 2);
}; 
btnSeleccionar();