const fs = require('fs');
const colors = require('colors');

// Por defecto ya está regresando una promesa
// const crearArchivo = async ( base = 5 ) => {
const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {
   
        let salida  = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }
    
        if ( listar ){
            console.log('=========================='.green);
            console.log('   Tabla del:'.green ,colors.blue( base ), 'Hasta:'.green, colors.blue( hasta ) );
            console.log('=========================='.green);

            console.log( consola );
        }

        //* En este punto se crea el Archivo .txt
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
    
        return(`tabla-${ base }.txt`);
        
    } catch (err) {
        throw err;
    }


}


module.exports = {
    fug_crearArchivo: crearArchivo
}


