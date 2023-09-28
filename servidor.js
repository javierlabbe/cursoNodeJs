//primero se debe importar el módulo http
const http = require('http');

//definir constante para almacenar servidor.
//Con esto se crea el servidor
const servidor = http.createServer((req, res) => {
    res.end('Hola, mundo'); //metodo end permite terminar proceso y enviar respuesta al cliente
});

//Para que el servidor escuche
// 3000 seria el puerto
const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
});

