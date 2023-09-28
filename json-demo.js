const curso = require('./curso.json');

console.log(typeof curso)

//Objeto -> Cadena de caracteres
//Cadena de caracteres en formato JSON
let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45000,
    "numLikes": 21000,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "privacidad": "publico"
}

let infoCursoJSON = JSON.stringify(infoCurso);

//Cadena de caracteres (JSON) -> Objeto
let cadenaCaracteres = JSON.parse(infoCursoJSON);
console.log(typeof cadenaCaracteres);