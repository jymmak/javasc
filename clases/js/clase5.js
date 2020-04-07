//Arrays

var Raul = {
    nombre: "Raul",
    apellido: "Ibarras",
    edad: 30,
    peso: 60,
    altura: 1.7
};
var Randy = {
    nombre: "Randy",
    apellido: "Ibarras",
    edad: 8,
    peso: 20,
    altura: 1.9
};

var Mayra = {
    nombre: "Mayra",
    apellido: "Ibarras",
    edad: 50,
    peso: 50,
    altura: 1.5
};

var Jordan = {
    nombre: "Jordan",
    apellido: "Ibarras",
    edad: 8,
    peso: 25,
    altura: 1.1
};

var personas = [Randy, Raul, Mayra, Jordan];
console.log(personas);
console.log(personas[3]);
console.log(personas[2].altura);
console.log(personas[1]['altura']);

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}mts`);
}

//Filter

const ALTURA = 1.8
//const esAlta = ({ altura }) => altura >= ALTURA
const esAlta = persona => persona.altura >= ALTURA
const esBaja = ({ altura }) => altura < ALTURA


var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas);
console.log(personasBajas);


//Map

// const pasarAltura = persona => {
//     persona.altura *= 100;
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }


//Otra manera de hacerlo
const pasarAltura = persona => ({
    //persona.altura *= 100;
    ...persona,
    altura: persona.altura * 100

})
var personasCm = personas.map(pasarAltura);
console.log(personasCm);



