let infoCursos = {
    'programacion': [
        {
            id: 1,
            titulo: 'Aprende Python',
            lenguaje: 'python',
            vistas: 15000,
            nivel: 'basico'
        },
        {
            id: 2,
            titulo: 'Python intermedio',
            lenguaje: 'python',
            vistas: 13553,
            nivel: 'intermedio'
        },
        {
            id: 3,
            titulo: 'Aprende JavaScript',
            lenguaje: 'javascript',
            vistas: 102225,
            nivel: 'basico'
        }
    ],
    'matematicas': [
        {
            id: 1,
            titulo: 'Aprende Calculo',
            vistas: 12427,
            nivel: 'basico'
        },
        {
            id: 2,
            titulo: 'Aprende Algebra',
            tema: 'algebra',
            vistas: 15772,
            nivel: 'intermedio'
        }
    ],
}

//para usarlo en otro archivo lo exportamos
module.exports.infoCursos = infoCursos;