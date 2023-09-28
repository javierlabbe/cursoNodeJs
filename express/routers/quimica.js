const express = require('express'); 

const {quimica} = require('../datos/cursos.js').infoCursos

const routerQuimica = express.Router();

//Middleware
routerQuimica.use(express.json()); //esto nos permite procesar el cuerpo de la solicitud

routerQuimica.get('/:nivel', (req, res) => { //equivalente a /api/cursos/quimica/:nivel
    const nivel = req.params.nivel;
    const resultados = quimica.filter(curso => curso.nivel === nivel);

    console.log(nivel)

    if (resultados.length === 0) {
        //return res.status(404).send(`No se encontraron cursos de nivel ${nivel}`)
        return res.status(404).end(); //end nos permite enviar una respuesta vacia
    }

    res.send(JSON.stringify(resultados));
})

routerQuimica.get('/', (req, res) => {
    res.send(JSON.stringify(quimica));
})

//OTROS METODOS DISTINTOS A GET
routerQuimica.post('/', (req, res) => {
    console.log("-----")
    console.log(req.body)
    quimica.push(req.body)
    res.send(JSON.stringify(quimica));
})

/**
 * Put exige pasar todo el detalle a actualizar
 * no se puede pasar solo una propiedad del curso
 */
routerQuimica.put('/:id', (req, res) => {
    const cursoActualizado = req.body; 
    const id = req.params.id;

    const indice = quimica.findIndex(curso => curso.id == id)

    if (indice >= 0) {
        programacion[indice] = cursoActualizado;
    }
    res.send(JSON.stringify(quimica))
})

/**
 * Patch permite actualizar solo pares de 
 * clave valor especificos
 */

module.exports = routerQuimica; //para exportar el router
// no se usa module.exports.routerQuimica para poder usar la variable directamente
//y no como una propiedad de exports