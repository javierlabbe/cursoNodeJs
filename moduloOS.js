//MÓDULO OS (OPERATING SYSTEM)
//No esta disponible de forma global, se debe importar

const os = require('os');

console.log(os.type())
console.log(os.homedir());
console.log(os.uptime()); //muestra el tiempo en que se ha ejecutado el SO en ms
console.log(os.userInfo());