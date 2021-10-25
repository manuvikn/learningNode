const { crearTablasl, imprimirTabla } = require('./js/multiplicacion');
const argv = require('./js/yargsConf');
const colors = require('colors');

/* crearTablas()
    .then(() => {
        console.log('Programa finalizado con exito.');
    })
    .catch((err) => {
        console.error(err);
    }); */

console.clear();

const base = argv['base'];
const listar = argv['listar']
const hasta = argv['hasta']

imprimirTabla(base, listar, hasta)
    .then(() => {
        console.log(colors.america('Programa finalizado con exito.'));
    })
    .catch(() => {
        console.log(colors.america('Programa finalizado con errores.'));
    });