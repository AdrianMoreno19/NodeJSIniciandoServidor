const fs = require('fs');

// Obtén la ruta del archivo desde los argumentos del programa
const filePath = process.argv[2];

// Lee el archivo de forma asíncrona
fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
        // Manejo del error si ocurre
        console.error('Error al leer el archivo:', error.message);
        return;
    }

    // Cuenta los saltos de línea en el contenido
    const lineCount = data.split('\n').length - 1;

    // Imprime el resultado
    console.log(lineCount);
});
