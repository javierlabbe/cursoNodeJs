//importamos xpress 
const express = require('express'); //se necesita para manejar las rutas principales. Las que no estan manejadas por un router
const app = express(); //con esto tenemos una aplicación de express

//simulamos un DB con el archivo cursos.js
const {infoCursos} = require('./datos/cursos.js');

// Routing o Enrutamiento
//app.metodoHttp
app.get('/', (req, res) => {
    res.send('Mi primer servidor. Cursos.')
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion))
})

app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas))
})

//Parametros URL
/*
:lenguaje es un parametro de URL.
Se podra extraer del req.
los : indican que es un parametro de URL
Puede haber mas de uno por URL
*/ 
app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`);
    }

    //por defecto el codigo de estado es 200
    //por lo que no se debe asignar
    res.send(JSON.stringify(resultados))
})

//PARAMETROS QUERY
app.get('api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema)

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron temas de ${tema}`);
    }

    //Condicional que analiza el parametro query /tema?ordenar=vistas
    if (req.query.ordenar === 'vistas') {
        res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)))
    }

    res.send(JSON.stringify(resultados))
})

//ROUTERS
const routerFisica = express.Router(); //crea el router vacio
app.use('/api/cursos/fisica', routerFisica); //asociamos el path al router creado

//para usar el router:
//de este modo ahorramos repetir partes del path con este camino base
routerFisica.get('/:nivel', (req, res) => { //equivalente a /api/cursos/programacion/:nivel
    const nivel = req.params.nivel;
    const resultados = infoCursos.fisica.filter(curso => curso.nivel === nivel);

    console.log(nivel)

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de nivel ${nivel}`)
    }

    res.send(JSON.stringify(resultados));
})

//Se recomienda crear los routers en un archivo aparte. Ver carpeta Routers.
const routerQuimica = require('./routers/quimica.js')
app.use('/api/cursos/quimica', routerQuimica);

//process.env.PORT es usado raelmente cuando el servicio es real
// si el puerto esta definido como variable de ambiente
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});

//