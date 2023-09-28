const promesaCumplida = false; //con fines de explicar como funciona promise

//creación de promesa
const miPromesa = new Promise((resolve, reject)=>{ //los parametros resolve y reject son asignados automaticamente y son funciones
    setTimeout(()=>{
       if(promesaCumplida) {
        resolve('Promesa cumplida')
       } else {
        reject('promesa rechazada...')
       }
    },3000)
});

/*con then podemos ver el valor que toma la promesa */
const manejarPromesaCumplida = (valor) => {console.log(valor)}
const manejarPromesaRechazada = (razonRechazo) => {console.log(razonRechazo)}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

//OTRA SINTAXIS PARA HACER LO MISMO
miPromesa
    .then((valor) => {
        console.log(valor);
    })
    .then(null, (msjError) => {
        console.log(msjError);
    })

//UTILIZANDO CATCH
/*Catch es un método de promesa que se ejecuta solo
si es rechazada */

miPromesa
    .then((valor)=>{
        console.log(valor);
    })
    .catch((msjError)=>{
        console.log(msjError);
    })