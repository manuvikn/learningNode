const fs = require('fs');

function tablaMultiplicar(num, hasta) {
    let cadena = '';
    cadena += `Tabla de multiplicar del ${num} \n`;

    for (let i = 1; i < hasta + 1; i++) {
        cadena += `${num} x ${i} = ${num*i} \n`;    
    }

    return cadena;
}

async function imprimirTabla( numero, listar, hasta ) {

    let cadena = tablaMultiplicar(numero, hasta);
    if (listar) console.log(cadena.rainbow);
    fs.writeFileSync((__dirname + `/tablasMultiplicar/tabla-del-${numero}.txt`), cadena);

}

async function crearTablas() {

    const promesa = new Promise((resolve, reject) => {
        
        for (let i = 1; i < 11; i++) {
            let numero = i;
            let cadena = tablaMultiplicar(numero);
        
            /* fs.writeFile(`${__dirname}/tablasMultiplicar/tabla-del-${numero}.txt`, cadena, (err) => {
                if (err) throw err;
            
                console.log('La tabla se guardó correctamente.');
            }); */
            
            fs.writeFileSync((__dirname + `/tablasMultiplicar/tabla-del-${numero}.txt`), cadena);
            console.log('Fichero creado correctamente.');
        }
        resolve();

    });

    return await promesa;

}

module.exports = {
    crearTablas,
    imprimirTabla
}