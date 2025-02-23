import os from 'os';

// Obtener la aquiterctura del sistema
console.log('Arquitectura:', os.arch())

// Obtener el tipo de sistema opertativo
console.log('Plataforma:', os.platform())

// Obtener la cantidad de memoria total
console.log('Memoria total:', os.totalmem())

// Obtener la cantidad de memoria libre
console.log('Memoria libre:', os.freemem())

// Obtener la informacion de la CPU
console.log('Informacion de la CPU:', os.cpus())
