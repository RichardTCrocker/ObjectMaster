// pair programmed with Christian, Anthony, Daisy, Kye, Josh

const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// 1 -
// short - hand : const pokeID3 = pokemon.filter(poke => poke.id % 3 === 0);
const pokeID3 = pokemon.filter((poke) => {
    return poke.id % 3 === 0;
})
console.log(pokeID3);

// 2 -
const pokeFire = pokemon.filter((poke) => {
    return poke.types[0] == 'fire' || poke.types[1] == 'fire';
})
console.log(pokeFire);

// 3 - 
const poke2Type = pokemon.filter((poke) => {
    return poke.types[1];
})
console.log(poke2Type);

// 4 - 
const pokeNames = pokemon.map((poke) => {
    return poke.name;
})
console.log(pokeNames);

// 5 - 
const pokeNamesIDOver99 = pokemon.filter(poke => poke.id > 99).map(poke => poke.name);
console.log(pokeNamesIDOver99);

// 6 - 
const pokeNamesPoison = pokemon.filter(poke => poke.types[0] == 'poison' && poke.types[1] == null).map(poke => poke.name);
console.log(pokeNamesPoison);

// 7 - 
const pokeFlyingFirstType = pokemon.filter(poke => poke.types[1] == 'flying').map(poke => poke.types[0]);
console.log(pokeFlyingFirstType);

// 8 - 
const pokeCountNormal = pokemon.filter(poke => poke.types[0] == 'normal').length;
console.log(pokeCountNormal);