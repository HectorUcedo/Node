const fs = require('fs');
const { json } = require('stream/consumers');
const archivo = './db/data.json';

const guardarDB = ( data ) => {

    //const archivo = './db/data.txt';
    //const archivo = './db/data.json';

    //fs.writeFileSync( archivo, data ); //! The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Array
    fs.writeFileSync( archivo, JSON.stringify( data ) ); //* convierte un objeto a su versión json válida a un String

}

const leerDB = () => {
    if ( !fs.existsSync(archivo) ){
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse( info ); // Parsearlo -> Proceso opuesto a stringify

    //console.log(data);

    return data;
    

}

module.exports = {
    guardarDB,
    leerDB
}