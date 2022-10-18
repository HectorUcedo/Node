//* Documentación: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback
 

//const { number, argv, option } = require('yargs');
const { fug_crearArchivo } = require('./helpers/multiplicar'); // Desestructuración
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true

                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })   
                //* https://yargs.js.org/docs/#api-reference-checkfn-globaltrue
                .check( (argv, option) => {

                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un núnmero'
                    }
                    return true;
                })
                .argv;

console.clear();

console.log( argv );

fug_crearArchivo( argv.b, argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );
