//herencia prototipal
function responderSaludo(nombre, apellido, esEstudiante) {
    if (esEstudiante) {
        console.log(`Buen día estudiante ${nombre}${apellido}`);
    } else {
        console.log(`Buen día ${nombre}${apellido}`);
    }
}

class Persona{
    constructor(nombre, apellidos, sexo, email, direccion) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.sexo = sexo
        this.email = email
        this.direccion = direccion
    }
    saludar(fn) {

        console.log(`Hola... soy ${this.nombre}${this.apellidos}`);
        if (fn) {
            fn(this.nombre, this.apellidos, false);
        }
    }
}

class Estudiantes extends Persona{
    constructor(nombre, apellidos, sexo, email, direccion, ocupacion) {
        super(nombre, apellidos, sexo, email, direccion)
        this.ocupacion = ocupacion
    }
    saludar(fn) {
        console.log(`Hola... Me llamo ${this.nombre}${this.apellidos} y soy ${this.ocupacion}`);
        if (fn) {
            fn(this.nombre, this.apellidos, true);
        }
    }
}



const estudiante = new Estudiantes('Juan', 'Pérez', 'Masculino', 'juanpérez@gmail.com', 'Colombia', 'Estudiante');
const andres = new Persona('Andrés', 'Rodríguez', 'Masculino', 'andresrodriguez@gmail.com', 'Colombia');
const pepito = new Persona('Pepito', 'Jímenez', 'Masculino', 'pepitojimenez@gmail.com', 'Colombia');
const estudianteAna = new Estudiantes('Ana', 'López', 'Femenino', 'janalópez@gmail.com', 'Colombia', 'Estudiante');

andres.saludar(responderSaludo);
estudiante.saludar(responderSaludo);
pepito.saludar();
estudianteAna.saludar(responderSaludo);


//callback

// console.log('a');
// setTimeout(() => console.log('b'), 1000);
console.log('c');
setTimeout(() => console.log('d'), 2000);

for(var i = 0; i < 10000; i ++){

}
