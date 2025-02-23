import { EventEmitter } from 'events';

// Creacion de instancia de EventEmitter
const emisor = new EventEmitter();

//Definir un evento
emisor.on('saludo', (nombre) => {
    console.log(`Hola, ${nombre}!`);
});

// Emitir el evento 'saludo'
emisor.emit('saludo', 'Mundo')