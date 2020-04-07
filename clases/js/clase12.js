function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)
    return Math.floor(diferencia / unDia)
}
const hoy = new Date()
const nacimiento = new Date(1987, 9, 30)

// funciones recursivas
function divisionEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0
    }
    return 1 + divisionEntera(dividendo - divisor, divisor)
}

// memoizacion

function factorial(n) {
    if (!this.cache) {
        this.cache = {}
    }
    debugger
    if (this.cache[n]) {
        this.cache[n]
    }
    if (n === 1) {
        return 1
    }
    this.cache[n] = n * factorial(n - 1)
    debugger
    return this.cache[n]
}


// closures

function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoColombiano = crearSaludo('parsero')

saludoArgentino('Sacha')
saludoColombiano('Sacha')


// Estructura de  datos inmutables
const karina = {
    nombre: 'karina',
    apellido: 'Cardoza',
    edad: 32
}
//const  cumple = persona => persona.edad++

const cumpleInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})


// cambiando el contexto al llamar una función

const jessica = {
    nombre: 'Jessica',
    apellido: 'Cortez',
    edad: 32
}
function saludar(saludo = 'Hola') {
    console.log(`${saludo} mi nombre es ${this.nombre}, ${this.edad}`)
}
const saludarKarina = saludar.bind(karina)
const saludarJessica = saludar.bind(jessica)


setTimeout(saludar.bind(karina), 1000)

//saludar.call(jessica, 'Hi')

saludar.apply(jessica, ['hola', 'Gallardo', 34])
