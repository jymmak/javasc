function persona(nombre, apellido, altura, sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    this.sexo = sexo;
}

persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
    //console.log(`mi estatura es ${this.altura > 1.8 ? 'alta':'No'} de sexo  ${this.sexo}`)
}

var jymma = new persona('Jymma', 'Mogollón', 2, 'F');
jymma.saludar();
jymma.soyAlto();



