import path from 'path';

// Defincion de ruta
const filePath = './data/example.txt'

// Obterner el directorio base
const dirName = path.dirname(filePath)
console.log('Directorio base:', dirName);

// Obtener nombre del archivo sin extension
const baseName = path.basename(filePath, '.txt')
console.log('Nombre del archivo:', baseName);

// Obtener extension del archivo
const extName = path.extname(filePath)
console.log('Extension del archivo:', extName);

// Creacion de ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt')
console.log('Nueva ruta:', newPath);

