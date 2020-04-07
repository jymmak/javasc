var juan = {
    nombre: 'Juan',
    apellido: 'Hernandez',
    altura: 1.73,
    cantidadDeLibros: 91
}

var leonardo = {
    nombre: 'Leon',
    apellido: 'Sosa',
    altura: 1.70,
    cantidadDeLibros: 181
}

var marilyn = {
    nombre: 'Marelys',
    apellido: 'Hernandez',
    altura: 1.69,
    cantidadDeLibros: 175
}

var oswaldo = {
    nombre: 'Oswaldo',
    apellido: 'Lacruz',
    altura: 1.76,
    cantidadDeLibros: 111
}
var personas = [juan, leonardo, marilyn, oswaldo];
// var acum = 0;

// for (let i = 0; i < personas.length; i++) {
//     acum = acum + personas[i].cantidadDeLibros
// }
//console.log(`En total todos tienen ${acum} libros`)

//Otra manera de hacerlo con reduce
// const reducer = (acum, persona) => {
//     return acum + persona.cantidadDeLibros
// }
// var totalLibros = personas.reduce(reducer, 0);

// console.log(`En total todos tienen ${totalLibros} libros`);


//Otra manera de hacerlo
const reducer = (acum, {cantidadDeLibros}) =>  acum + cantidadDeLibros
var totalLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalLibros} libros`);