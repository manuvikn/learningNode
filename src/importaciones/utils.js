
async function nombrar() {
    let nombre = 'Manuel';
    
    const promesa = new Promise((resolve, reject) => {
        let correcto = true;
        if (correcto) {
            setTimeout(() =>{
                resolve(nombre);
            }, 3000);

        } else {
            reject( new Error('Fallo en el sistema'));
        }
    });
    
    await promesa.then(nombre => {
        console.log(nombre);
    }).catch(error => {
        console.log('Ha habido un error pero no te lo voy a mostrar');
        console.log('**********************************************');
        console.log(error);
    })
    
    nombre = 'Daniel';
    console.log(nombre);

}

/* exports.nombrar = nombrar; */
module.exports = {
    nombrar
}