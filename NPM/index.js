
import superheroes from 'superheroes';
 
//superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
superheroes.random();

console.log(`My superheroe name is ${superheroes.random()}`);

//or

const name = superheroes.random();

console.log(`My superheroe name is... ${name}`);