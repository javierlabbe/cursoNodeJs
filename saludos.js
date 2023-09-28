//modulo con definiciones
function saludar(nombre) {
  return `Hola ${nombre}`;
}

function saludarHolaMundo() {
  return '¡Hola, Mundo!';
}

//EXPORTAR UN ELEMENTO
/*se le asigna al objeto module.exports 
la funcion saludar con el mismo nombre. */
//module.exports.saludar = saludar; 
//module.exports.saludarHolaMundo = saludarHolaMundo;

//Otra forma de exportar
module.exports = {saludar, saludarHolaMundo};


