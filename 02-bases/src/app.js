
const getPokemonById = require('./js-foundation/06-promises');


getPokemonById(1, (pokemon) => {
    console.log({pokemon});
});

