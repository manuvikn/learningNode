var { Persona } = require('./funciones');
var { nombrar } = require('./utils');

let persona = new Persona('pepe');

persona.saludar();
console.log(Persona.sumarValores(3, 6));

nombrar();


console.log('Nodemon esta activado');