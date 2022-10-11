


// setTimeout( function(){

//     console.log('Hola Mundo');

// }, 1000);


// const getUsuarioById = ( id ) => {
const getUsuarioById = ( id, callback ) => {

    const user = { // Objeto
        id,
        nombre: 'Héctor'
    }

    setTimeout( () => {
        
        //console.log( usuario );
        callback( user );
        
    }, 1500); // Un segundo y medio

}


// getUsuarioById( 10, () => {
//     console.log('Hola Mundo');
// });


/**
 * Los callbacks no son mas que funciones que se manda como argumento
*/
getUsuarioById( 10, (user) => {
    console.log( user.id );
    console.log( user.nombre );
});
