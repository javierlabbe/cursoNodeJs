//MODULO FS (file system)

/*contiene funcionalidad para trabajar con el sistema
de archivos 

Se puede: leer, modificar, copiar, eliminar, cambiar nombre a archivos

todos los métodos de este modulo son asincronos por defecto 

NOTA: se pueden escoger versiones síncronas de estos métodos
agregando Sync a sus nombres, por ejemplo:

fs.rename() sería fs.renameSync()*/

const fs = require('fs');
fs.readFile('./index.html', 'utf-8', (err, contenido)=> {
    if(err) {
        //console.log(err);
        throw err; //throw nos permite detener el programa con el error
    } 
    console.log(contenido);
});

/*
//Para cambiar nombre de archivo
fs.rename('./index.html', 'main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('nombre cambiado exitosamente')
})
*/ 

/*
//Agregar contenido al final del archivo
fs.appendFile('./index.html', '<p>hola</p>', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo actualizado')
})
*/

/*
//Reemplazar todo el contenido del archivo
fs.writeFile('index.html', 'Hola mundo', (err) => {
    if (err) {
        throw err;
    }
    console.log('Contenido reemplazado')
})
*/

/* Para eliminar un archivo */

fs.unlink('./index2.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo eliminado');
});