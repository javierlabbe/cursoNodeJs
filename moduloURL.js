//creando objeto URL
const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistar&nivel=1');

console.log(miURL.hostname); //www.ejemplo.org

console.log(miURL.pathname); // /cursos/programacion

console.log(miURL.searchParams) // muestra un objeto con los query params
console.log(miURL.searchParams.get('ordenar')); // muestra el valor de la clave ordenar