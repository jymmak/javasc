var karina = {
    nombre: 'Karina',
    apellido: 'Mogollón',
    edad: 32,
    peso: 55
}
console.log(`Al inicio del año ${karina.nombre} pesa ${karina.peso.toFixed(1)}kg`)

const INCREMENTO = 0.1
const aumentoDePeso = persona => persona.peso += INCREMENTO
const adelgaza = persona => persona.peso -= INCREMENTO

const comeMucho = persona => Math.random() < 0.3
const ejercicio = persona => Math.random() < 0.4

const META = karina.peso - 3
var dias = 0

// While
while (karina.peso > META) {
    if (comeMucho()) {
        aumentoDePeso(karina)
    }
    if (ejercicio) {
        adelgaza(karina)
    }

    dias += 1
}

console.log(`${karina.nombre} se demoro ${dias} dias en bajar 3 kg`);

//Do-while
var contador = 0;

const llueve = () => Math.random() < 0.8;
do {
    contador++
} while (!llueve());

console.log(`Fui a ver si llovia ${contador}`);

//Switch
var signo = prompt('Cúal es tu signo');

switch (signo) {
    case 'acuario':
        console.log('eres acuario');
        break
    case 'libra':
        console.log('eres libra');
        break
    case 'escorpio':
        console.log('eres escorpio');
        break
    case 'piscis':
        console.log('eres piscis');
        break

    default:
        console.log('No es un signo zodiacal válido');
        break
}
