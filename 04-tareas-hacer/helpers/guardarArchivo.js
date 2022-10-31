const fs = require('fs');
const { json } = require('stream/consumers');

const guardarDB = ( data ) => {

    //const archivo = './db/data.txt';
    const archivo = './db/data.json';

    //fs.writeFileSync( archivo, data ); //! The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Array
    fs.writeFileSync( archivo, JSON.stringify( data ) ); //* convierte un objeto a su versión json válida a un String

}

module.exports = {
    guardarDB
}