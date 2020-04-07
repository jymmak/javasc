// const API_URL = 'https://swapi.co/api/'
// const PEOPLE_URL = 'people/:id'

// const peopleResponse = person => {
//     console.log(`${person.name} ${person.height}`)
// }
// const lukeUrl = `${API_URL} ${PEOPLE_URL.replace(':id', 1)}`
// const opts = { crossDomain: true }


// for (let i = 0; i <= 4; i++) {
//     $.get(lukeUrl, opts, peopleResponse)
// }
 //////////////////////////////////////////////////////////////////////

// const API_URL = 'https://swapi.co/api/'
// const PEOPLE_URL = 'people/:id/'
//     //este metodo permite realizar un request aceptando parametros
// const OPTIONS = { crossDomain: true }

// const onResponse = function(persona) {
//     console.log(`Hola yo soy ${persona.name}`)
// }

// function consulta() {
//     var id = prompt('¿Ingrese un Numero Del 1 al 10 y mira quien te responde?')
//     if (id > 0 && id < 11) {
//         const CONSULTA_URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

//         $.get(CONSULTA_URL, OPTIONS, onResponse)
//     } else {
//         console.log('Lo siento el numero ingresado esta fuera del rango')
//     }
// }
// console.log(consulta());
///////////////////////////////////////////////////////////////////////


// const API_URL='https://swapi.co/api/'
// const PEOPLE_URL='people/:id'
// const OPT= { crossDomain: true}

// function buscar_2(id, fn){
//   leturl=`${API_URL}${PEOPLE_URL.replace(':id',id)}`
//   $.get(url,OPT, function(obj){
//     console.log(obj.name)
//     if (fn){
//       fn()
//     }
//   })
// }

//la recursividad se define como una funcion que se llama a si misma
//Las llamadas se apilan (LIFO)
//Se puede trabajar de subida (codigo que se ejecuta antes de realizar a la llamada)
//O de bajada (codigo que se ejecuta despues de la llamada)

// function recursiva_2(num){
//   num=num+1
//   buscar_2(num, function(){
//     if (num<5){
//       recursiva_2(num)
//     }
//   })

// }

// recursiva_2(0)

//Se uso Jquery para hacer los request a una API de star wars
//Los callbacks son funciones que se pasan como parametros que se ejecutan luego de la function que los paso


const API_URL = "https://swapi.co/api/";
const characterPerson = "people/:id";
const http = new XMLHttpRequest();
let myperson = prompt(
  `por favor escribir un número para ver tu personaje`
);
let myFunctionPerson = idCharacter => {
  http.open("GET", `${API_URL}${characterPerson.replace(":id", idCharacter)}`);
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let printPerson = JSON.parse(this.responseText);
      document.write(`hola mi nombre es: ${printPerson.name}, mi color de ojos es: ${printPerson.eye_color}  y mi estatura es: ${printPerson.height}`);
      console.log(printPerson.name);
    }
  };
  http.send();
};
myFunctionPerson(myperson);


