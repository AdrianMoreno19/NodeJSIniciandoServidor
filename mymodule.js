const fs = require('fs');
const path = require('path');

module.exports = function (directoryPath, extension, callback) {
    // Leer el directorio de forma asíncrona
    fs.readdir(directoryPath, (error, fileList) => {
        if (error) {
            // Si ocurre un error, invocar el callback con el error
            return callback(error);
        }

        // Filtrar los archivos por la extensión especificada
        const filteredFiles = fileList.filter(file => path.extname(file) === `.${extension}`);

        // Llamar al callback con null como error y los archivos filtrados
        callback(null, filteredFiles);
    });
};
