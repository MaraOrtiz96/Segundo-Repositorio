import fs from 'fs';

//Codigo propuesto de creacion de carpeta "data" y archivo "example.txt"

// Creacion de carpeta "data"
if (!fs.existsSync('./data')) {
   fs.mkdirSync('./data');
}

// Creacion de archivo "example.txt"
if (!fs.existsSync('./data/example.txt')) {
    fs.writeFileSync('./data/example.txt', 'Archivo de prueba.', 'utf8');
    console.log('Archivo example.txt creado.');
}

//Fin del codigo propuesto de creacion de carpeta "data" y archivo "example.txt"

// Leer un archivo de manera asincrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del texto', data);
});

// Escribir en un nuevo archivo
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito'); });

// Renombrar un archivo
fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
    if (err) {throw err};
    console.log('Archivo renombrado');
});


/* 
//Codigo propuesto de concatenacion de "fs.rename" con "fs.writeFile" confirmando la exitencia del archivo newfile.txt previo a la modificacion

// Escribir en un nuevo archivo 
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');

    // Renombrar un archivo recien creado ()
    fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
        if (err) throw err;
        console.log('Archivo renombrado');
    });
});
*/



