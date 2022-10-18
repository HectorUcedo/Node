//* Documentación: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback
 

//const { number, argv, option } = require('yargs');
const { fug_crearArchivo } = require('./helpers/multiplicar'); // Desestructuración
const argv = require('./config/yargs');

require('colors');

console.clear();

fug_crearArchivo( argv.b, argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo.blue, 'creado') )
    .catch( err => console.log(err) );
