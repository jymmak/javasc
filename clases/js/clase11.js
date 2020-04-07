// const API_URL='https://swapi.co/api/'
// const PEOPLE_URL='people/:id'
// const opts = {crossDomain:true}

// function obtenerPersonaje(id){

// 	return new Promise( (resolve,reject)=> {
// 		const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
// 		$
// 		.get(url,opts, (data)=>resolve(data) )
// 		.fail( ()=>reject(id) )	

// 	})
// }
// function onError(id){

// 	console.log(`Ocurrio un error al obtener el personaje ID: ${id}`)
// }

// var ids = [1,2,3,4,5,6,7]
/*esta es una forma, abajo se muestra la otra forma de esta porción de código
var promesas = ids.map(function(id){
     return obtenerPersonaje(id)
})*/

// var promesas = ids.map( id => obtenerPersonaje(id) )
// Promise
// 	.all(promesas)
// 	.then(personajes=>{
// 		for(var i=1;i<=personajes.length;i++){
// 			console.log(`El personaje ${i} se llama ${personajes[i-1].name}`)
//La promesa creada es un nuevo arreglo con 7 elementos, que van del 0-6
//por lo tanto al presentarlos tengo que poner ${personajes[i-1].name}`)
//el [i-1] es para que el primer dato del arreglo que está en 0, le sume 1
// 		}
// 	})
// 	.catch(onError)




/////////////////////////////////////////////////////////////////


// const API_URL = 'https://swapi.co/api/'
// const PEOPLE_URL = 'people/:id'
// const opts = { cossDomain: true }


// function obtenerPersonaje(id) {
//     return new Promise((resolve, reject) => {
//         consturl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
//         $.get(url, opts, function (data) {
//             resolve(data)
//         })
//             .fail(() => reject(id))
//     })
// }

// function onError(id) {
//     console.log(`ups un error!! El personaje correcto es ${id}`);
// }


// obtenerPersonaje(1)
//     .then(function (personaje) {
//         console.log(`El personaje 1 es ${personaje.name}`)
//     })
//     .catch(onError)
//////////////////////////////////////////////

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { cossDomain: true }

//alert('activo');
function obtenerPerson(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function (data) {
            resolve(data)
        })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`ups un error!! El personaje correcto es ${id}`);
}

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // var promesas = ids.map(function(id){
    //   return obtenerPersonaje(id)
    // })

    var promesas = ids.map(id => obtenerPerson(id))
    
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()