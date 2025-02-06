const fs = require('fs');
const path = require('path');

// Obtén el directorio y la extensión de archivo de los argumentos del programa
const directoryPath = process.argv[2];
const extension = `.${process.argv[3]}`; // Agrega el punto (.) al inicio de la extensión

// Lee el directorio de forma asíncrona
fs.readdir(directoryPath, (error, fileList) => {
    if (error) {
        // Manejo del error si ocurre
        console.error('Error al leer el directorio:', error.message);
        return;
    }

    // Filtra los archivos que tienen la extensión especificada
    const filteredFiles = fileList.filter(file => path.extname(file) === extension);

    // Imprime cada archivo en una línea
    filteredFiles.forEach(file => console.log(file));
});
