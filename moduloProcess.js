//MODULO PROCESS
//console.log(process)

console.log(process.env); //muestra detalles del entorno

//para acceder a argumentos
console.log(process.argv)

//node app.js en consola se transforma en un array
// [node , app.js , 6 , 7]
//   0        1     2   3 
for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i])
}