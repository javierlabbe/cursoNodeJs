/*Sintaxis comun para escribir funciones
asincronas. Retornar una promesa que asegure
que el program espere a que esta se complete al
momento de llamar a la funcion*/
function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de Freecodecamp.`);
        setTimeout(() => {
            if (producto === 'taza') {
                resolve('Ordenando una taza con el logo de freeCodeCamp.');
            } else {
                reject('Este producto no esta disponible actualmente.');
            }
        },2000);
    });
}

function procesarPedido(respuesta) {
    return new Promise(resolve => {
        console.log('procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(()=>{ //Para simular que es un proceso asincrono
            resolve('Gracias por su compra.')
        }, 4000) 
    });
}

/*Tenemos dos procesos asincronos. Primero debemos 
ordenar en el sistema y luego procesar el pedido. Para garantizar
que se realizaran en el orden especifico se encadenan las promesas*/

// ordenarProducto('tazsa')
//     .then(respuesta => {
//         console.log('Respuesta recibida');
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada);
//     })
//     .catch(error => {
//         console.log(error);
//     })

/*Para hacer lo anterior de forma mas concisa 
se puede usar ASYNC AWAIT*/

async function realizarPedido(producto) { //todas las funciones con async retornan una promesa
    try { //try es para poner el codigo que podria generar error y manejarlo con catch en caso de que suceda
        const respuesta = await ordenarProducto(producto); //await hace que esperemos que el proceso asincrono ordenarProducto termine antes de continuar la ejecucion
        console.log('Respuesta recibida'); //await siempre va con async
        console.log(respuesta)
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('taza');