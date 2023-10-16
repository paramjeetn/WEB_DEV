//var generateName = require("sillyname");

import superheroes from "superheroes";

//const superheroes = require('superheroes');
 
//superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
const name = superheroes.random();

console.log(`Some Superhero Name ${name}!.`);