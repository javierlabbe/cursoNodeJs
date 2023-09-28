//IMPORTAR
//const saludos = require('./saludos.js'); //a esta variable se asigna el objeto de exportaciones del modulo
//console.log(saludos) //muestra el objeto de exportaciones

//console.log(saludos.saludar('freeCodeCamp'))

//asignando a la variable saludar la función almacenada en saludo.saludar
//const saludar = saludos.saludar

//console.log(saludar('Javier'))
//console.log(saludos.saludarHolaMundo())

//Otra forma de importar solo un elemento 
//util para trabajar con elementos especificos
const { saludarHolaMundo } = require('./saludos.js')
console.log( saludarHolaMundo() )