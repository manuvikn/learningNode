const argv = require('yargs')
                .option('B', {
                    alias: 'base',
                    type: 'number',
                    describe: 'Base de la tabla de multiplicar',
                    default: 5
                })
                .option('L', {
                    alias: 'listar',
                    type: 'boolean',
                    describe: 'Listar la tabla de multiplicar',
                    default: false
                })
                .option('H', {
                    alias: 'hasta',
                    type: 'number',
                    describe: 'Hasta que numero quierers multiplicar',
                    default: 10
                })
                .check((argv, options) => {
                    if (isNaN(argv['base'])) {
                        throw new Error('La base tiene que ser un número.');
                    } else if (isNaN(argv['hasta'])) {
                        throw new Error('La longitud de hasta tiene que ser un número.');
                    } else {
                        return true;
                    }
                })
                .argv;

module.exports = argv