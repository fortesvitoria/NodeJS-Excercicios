// import with commoJs 
//const generateName = require('sillyname');

//import with module -> package.json
import generateName from "sillyName";

let sillyName = generateName();

console.log(`My name is ${sillyName}`);