import { fillPokemonCard, getPokemonByNameOrId } from './const.js';

let somePoke = JSON.parse(localStorage.getItem('poke'));
let pokeStore = [];

const btn = document.querySelector('#add');

if (somePoke) {
    somePoke.forEach(el => {
        fillPokemonCard(el)
    });
    pokeStore = pokeStore.concat(somePoke);
}

btn.addEventListener('click', async (event) => {
    const randomId = Math.floor(Math.random() * 100);
    try {
        const pokemon = await getPokemonByNameOrId(randomId);
        fillPokemonCard(pokemon);
        pokeStore.push(pokemon);
        localStorage.setItem('poke', JSON.stringify(pokeStore));
    } catch (error) {
        alert(error.message);
    }
});
