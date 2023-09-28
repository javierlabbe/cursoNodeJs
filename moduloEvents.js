//importando clase
const EventEmitter = require('events');

console.log(EventEmitter)

//Instanciando clase EventEmitter
const emisorProductos = new EventEmitter(); //este objeto nos permitira emitir eventos

//con .on asociamos una función a la ocurrencia de un evento
emisorProductos.on('compra', ()=> {
    console.log('Se realizó una compra')
})

//para emitir el evento configurado con .on se usa .emit
emisorProductos.emit('compra'); //el programa buscara en el emisor la funcion asociada a compra