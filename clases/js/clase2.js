imprimir = (n, a, e) => {
    return `${n} ${a}, ${e} años`
}

console.log(imprimir('Pablo', 'Rodriguez', 46));


var nombre = 'Jymma';                    //variable alcance global definida en la ventana objeto global
console.log(nombre);

nombreMay = (m) => {                     // variable local
    m = m.toUpperCase();
    return m;
};
console.log(nombreMay('Karina'));

// Objetos
var pepe = {                             
    nombre: 'Pepe',
    apellidos: 'Palomino',
    edad: 32,
    profesion: 'contador',
    
};
console.log(pepe.apellidos);

transf = ({ edad, profesion }) => {
    console.log(edad + 5);
    console.log(profesion);
};

transf(pepe);

// Arrays
list = [                                 
    {
        nombre: 'Pepe',
        edad: 32,
        profesion: 'contador'
    },
    {
        nombre: 'Maria',
        edad: 12,
        profesion: 'estudiante'
    },
    {
        nombre: 'José',
        edad: 43,
        profesion: 'ingeniero'
    }
];

console.log(list[2].edad);


