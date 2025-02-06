const fs = require('fs');

// Obtén la ruta del archivo desde los argumentos del programa
const filePath = process.argv[2];

// Lee el contenido del archivo de forma síncrona
const fileContent = fs.readFileSync(filePath, 'utf8');

// Cuenta los saltos de línea
const lineCount = fileContent.split('\n').length - 1;

// Imprime la cantidad de saltos de línea
console.log(lineCount);
