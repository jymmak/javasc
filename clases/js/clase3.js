var karina = {
    nombre: 'Karina',
    apellido: 'Mogollon',
    edad: '32',
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false
}
edad = (persona) => {
    console.log(`${persona.nombre} es:`)
    if (persona.edad >= 18) {
        console.log('es mayor de edad')
    } else {
        console.log('es menor de edad')
    }
}

edad(karina);

//If
descrip = (persona) => {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('ingeniero')
    }
    if (persona.cocinero) {
        console.log('cocinero')
    }
    if (persona.cantante) {
        console.log('cantante')
    }
    if (persona.dj) {
        console.log('dj')
    }
    if (persona.guitarrista) {
        console.log('guitarrista')
    }
    if (persona.drone) {
        console.log('drone')
    }
}

descrip(karina);


//For
var karina = {
    nombre: 'Karina',
    apellido: 'Mogollón',
    edad: 32,
    peso: 55
}
const dias_total = 365;
const incremento = 0.2
const aumentar = persona => persona.peso += incremento;
const adelgazar = persona => persona.peso -= incremento;

for (var i = 1; i <= dias_total; i++) {
    var random = Math.random()
    if (random < 0.25) {
        aumentar(karina)
    } else if (random < 0.5) {
        adelgazar(karina)
    }
}
console.log(`Al final de año ${karina.nombre} pesa ${karina.peso}`)

