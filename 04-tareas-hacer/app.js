require('colors');

const { inquirerMenu } = require('./helpers/inquirer');
//const { mostrarMenu, pausa } = require('./helpers/mensajes'); // Dejamos de usar

console.clear();


const main = async() => {
    
    console.log('Hola Mundo');

    let opt = '';

    do {
        
        //opt = await mostrarMenu(); //* Esperate hasta que tengamos una resolución del menú.
        opt = await inquirerMenu(); 
        console.log( { opt } );
    
    } while ( opt !== '0');

}


main();


