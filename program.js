const mymodule = require('./mymodule.js'); // Importa el módulo personalizado
const directoryPath = process.argv[2];
const extension = process.argv[3];

// Invoca el módulo con los argumentos necesarios
mymodule(directoryPath, extension, (error, files) => {
    if (error) {
        // Manejo del error: imprime el mensaje en la consola
        console.error('Error:', error.message);
        return;
    }

    // Imprime los archivos filtrados, uno por línea
    files.forEach(file => console.log(file));
});
