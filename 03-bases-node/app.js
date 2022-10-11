//* Documentación: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback
 

const { fug_crearArchivo } = require('./helpers/multiplicar'); // Desestructuración

console.clear();

const base =5;

fug_crearArchivo( base )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );
