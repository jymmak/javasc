//herencia prototipal

function persona(nombre, apellido, altura, sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    this.sexo = sexo;
}

persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {
        fn.prototype = prototipoPadre.prototype
        prototipoHijo.prototype = new fn
        prototipoHijo.prototype.constructor = prototipoHijo
    }
}
function desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
heredaDe(desarrollador, persona)
desarrollador.prototype.presentacion = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador@`)
}



// var jymma = new persona('Jymma', 'Mogollón', 2, 'F');
// var karina = new desarrollador('Jymma', 'Mogollón', 2, 'F');
// jymma.saludar();
// karina.presentacion();

