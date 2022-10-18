const fs = require('fs');

// Por defecto ya está regresando una promesa
// const crearArchivo = async ( base = 5 ) => {
const crearArchivo = async ( base = 5, listar = false ) => {

    try {
   
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }
    
        if ( listar ){
            console.log('===================');
            console.log('   Tabla del:', base);
            console.log('===================');
            console.log( salida );
        }

    
        fs.writeFileSync( `tabla-${ base }.txt`, salida);
    
        return(`tabla-${ base }.txt`);
        
    } catch (err) {
        throw err;
    }


}


module.exports = {
    fug_crearArchivo: crearArchivo
}


