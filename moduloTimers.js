//MODULO TIMERS
/* contienen funciones que se 
ejecutan luego de un tiempo */

/* setTimeout()
ejecuta un codigo luego de un numero especifico de ms

setTimeout(funcion, retraso, argumento1, ..., argumentoN)

funcion: la función que se ejecuta
retraso: el tiempo en ms
argumento: los valores a pasar a la función cumplido el retraso.
*/

function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 5000, 'Node.js');

/* SetImmediate()
Ejecuta código asincono en la próxima iteracion del ciclo de eventos
(lo más pronto posible)
Se ejecuta después del código síncrono

setImmediate(funcion, argumento1, ..., argumentoN) */

console.log('Antes de setImmediate()')
setImmediate(mostrarTema, 'Apigee');
console.log('Despues de setImmediate()')

/* setInterval()
se usa para ejecutar código un número infinito de veces con
un retraso específico de milisegundos

setInterval(funcion, intervalo, arg1, ...,argN) */

setInterval(mostrarTema, 2000, 'Back-end');

