// const celeste = document.getElementById("celeste");
// const violeta = document.getElementById("violeta");
// const naranja = document.getElementById("naranja");
// const verde = document.getElementById("verde");
// const btnEmpezar = document.getElementById("btnEmpezar");

// class Juego {
//   constructor(dificultad) { 
//     this.ULTIMO_NIVEL = dificultad;
//     this.inicializar = this.inicializar.bind(this);
//     this.inicializar();
//     this.generarSecuencia();
//     setTimeout(this.siguienteNivel, 600);
//   }

//   inicializar() {
//     this.elegirColor = this.elegirColor.bind(this);
//     this.siguienteNivel = this.siguienteNivel.bind(this);
//     this.toogleBtnInicializar();

//     this.nivel = 1
//     this.colores = {
//       celeste,
//       violeta,
//       naranja,
//       verde
//     }
//   }

//   toogleBtnInicializar(){
//     if(btnEmpezar.classList.contains("hide")){
//       btnEmpezar.classList.remove('hide');
//     }else{
//       btnEmpezar.classList.add('hide');
//     }
//   }

//   generarSecuencia(){
//     this.secuencia = new Array(this.ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
//   }

//   siguienteNivel(){
//     this.subNivel = 0;
//     this.iluminarSecuencia();
//     this.agregarEventosClic();
//   }

//   numeroAColor(numero){
//     switch(numero){
//       case 0:
//         return "celeste"
//       case 1:
//         return "violeta"
//       case 2:
//         return "naranja"
//       case 3:
//         return "verde"
//     }
//   }

//   colorANumero(color){
//     switch(color){
//       case "celeste":
//         return 0
//       case "violeta":
//         return 1
//       case "naranja":
//         return 2
//       case "verde":
//         return 3
//     }
//   }

//   agregarEventosClic(){
//     this.colores.celeste.addEventListener("click",this.elegirColor)
//     this.colores.verde.addEventListener("click",this.elegirColor)
//     this.colores.violeta.addEventListener("click",this.elegirColor)
//     this.colores.naranja.addEventListener("click",this.elegirColor)
//   }

//   eliminarEventosClick(){
//     this.colores.celeste.removeEventListener("click",this.elegirColor)
//     this.colores.verde.removeEventListener("click",this.elegirColor)
//     this.colores.violeta.removeEventListener("click",this.elegirColor)
//     this.colores.naranja.removeEventListener("click",this.elegirColor)
//   }

//   sonidoColor(color){
//     var audio_url = `resources/${color}.mp3`
//     var audio = new Audio(audio_url);
//     audio.play();
//   }

//   elegirColor(ev){
//     const nombreColor = ev.target.dataset.color;
//     const numeroColor = this.colorANumero(nombreColor);
//     this.iluminarColor(nombreColor);
//     this.sonidoColor(nombreColor);
//     if (numeroColor === this.secuencia[this.subNivel]){
//       this.subNivel++;
//       if (this.subNivel === this.nivel){
//         this.nivel++;
//         this.eliminarEventosClick()
//         if (this.nivel === (this.ULTIMO_NIVEL + 1)){
//           this.ganoJuego();
//         } else {
//           setTimeout(this.siguienteNivel,1400);
//         }
//       } 
//       } else {
//         this.perdioJuego();
//     }
//   }

//   iluminarColor(color){
//     this.colores[color].classList.add("light");
//     this.sonidoColor(color);
//     setTimeout(() => this.apagarColor(color), 400)
//   }

//   apagarColor(color){
//     this.colores[color].classList.remove("light");
//   }

//   iluminarSecuencia() {
//     for (let i = 0; i < this.nivel; i++){
//         const color = this.numeroAColor(this.secuencia[i]);
//         setTimeout(() => this.iluminarColor(color), 700 * i);
//     }
//   }

//   ganoJuego(){
//     swal("¡Buen trabajo!", "Ganaste el juego", "success")
//     .then(this.inicializar)
//   }

//   perdioJuego(){
//     swal("Perdiste", "inténtalo de nuevo", "info")
//     .then(() => {
//       this.eliminarEventosClick();
//       this.inicializar();
//     })
//   }
// }

// function empezarJuego() {
//   var dificultad;
//   swal("Selecciona un nivel", {
//     buttons: {
//       Principiante: {
//         text: "Principiante",
//         value:"Principiante"
//       },
//       Intermedio: {
//         text: "Intermedio",
//         value:"Intermedio"
//       },
//       Experto: {
//         text: "Experto",
//         value:"Experto"
//       }
//     }
//   }).then((value) =>{
//     switch(value){
//       case "Principiante":
//         dificultad = 5;
//         break;
//       case "Intermedio":
//         dificultad = 10;
//         break;
//       case "Experto":
//         dificultad = 15;
//         break;
//       default:
//         dificultad = 5;
//     }
//     window.juego = new Juego(dificultad)
//   })
// }



const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 1

class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generarSecuencia()
        setTimeout(() => {
            this.siguienteNivel()
        }, 500)
    }
    inicializar() {
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        this.toogleBtnInicializar()
        this.nivel = 1
        this.colores = {
            celeste, violeta, naranja, verde
        }
    }
    toogleBtnInicializar() {
        if (btnEmpezar.classList.contains("hide")) {
            btnEmpezar.classList.remove('hide');
        } else {
            btnEmpezar.classList.add('hide');
        }
    }

    generarSecuencia() {
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }
    siguienteNivel() {
        this.subnivel = 0
        this.nombreAtributo = 'valor'
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }
    transformarNumerosAColor(numero) {
        switch (numero) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    transformarColorANumero(color) {
        switch (color) {
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }



    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumerosAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }
    iluminarColor(color) {
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarcolor(color), 350)
    }
    apagarcolor(color) {
        this.colores[color].classList.remove('light')
    }
    agregarEventosClick() {
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
    }
    eliminarEventosClick() {
        this.colores.celeste.remove('click', this.elegirColor)
        this.colores.verde.remove('click', this.elegirColor)
        this.colores.violeta.remove('click', this.elegirColor)
        this.colores.naranja.remove('click', this.elegirColor)
    }

    elegirColor(event) {
        const nombreColor = event.target.dataset.color
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel++
            if (this.subnivel === this.nivel) {
                this.nivel++
                //this.eliminarEventosClick
                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                    this.ganoElJuego()
                } else {
                    setTimeout(this.siguienteNivel, 1500)
                }
            }
        } else {
            this.perdioElJuego()
        }
    }

    ganoElJuego() {
        swal("¡Buen trabajo!", "Ganaste el juego", "success")
            .then(this.inicializar)
    }

    perdioElJuego() {
        swal("Perdiste", "inténtalo de nuevo", "info")
            .then(() => {
                this.eliminarEventosClick();
                this.inicializar();
            })
    }
}


function empezarJuego() {
    window.juego = new Juego()
}