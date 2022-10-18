//* Documentación: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback
 

const { fug_crearArchivo } = require('./helpers/multiplicar'); // Desestructuración
const argv = require('yargs').argv;

console.clear();

console.log( process.argv );
console.log( argv );
console.log( 'base: yargs', argv.base );


//console.log(process.argv);

// Destructuración de arreglos:
//* const [ , , arg3 = 'base=5' ] = process.argv;
//* const [ , base = 5 ] = arg3.split('=');
//console.log(arg3);
//console.log(base);



// const base =5;

// fug_crearArchivo( base )
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado') )
//     .catch( err => console.log(err) );
