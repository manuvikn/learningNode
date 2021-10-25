class Persona {

    nombre = '';
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar() {
        console.log('Hola que tal ' + this.nombre);
    }

    static sumarValores(num, numB) {
        return num + numB;
    }
}

exports.Persona = Persona;