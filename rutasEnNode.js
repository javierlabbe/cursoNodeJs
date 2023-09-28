//comenzamos desarrollando el servidor
const http = require('http');

//para simular DB usamos el archivo cursos.js
const cursos = require('./cursos.js')

//creando servidor
const servidor = http.createServer((req, res) => {
    const {method} = req; //sintaxis de destructuracion para extraer el method

    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req, res); //al usar return no se usa break
        case 'POST':
            return manejarSolicitudPOST(req, res); 
        default:
            console.log(`El metodo no puede ser manejado por el servidor: ${method}`);
    }
});

function manejarSolicitudGET(req, res) {
    const path = req.url;

    if (path === '/') {
        res.writeHeadead(200,{'Content-Type': 'application/json'})
        res.statusCode = 200; //no es necesario ya que el 200 se asigna por defecto
        res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    } else if (path === '/cursos') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos))
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion))
    } 
    
    res.statusCode = 501;
    res.end('El recurso solicitado no existe....')

}

function manejarSolicitudPOST(req, res) {
    const path = req.url;

    if(path === '/cursos/programacion') {
        //una solicitud post lleva body
        let cuerpo = '';

        req.on('data', contenido => {
            cuerpo += contenido.toString()
        });
        
        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            /* 
            Para transformar el Body en objeto de JS y 
            poder manipularlo
            */
            cuerpo = JSON.parse(cuerpo); 
            res.end('El servidor recibio una solicitud POST para /cursos/programacion')
        })
    }

}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})