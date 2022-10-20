require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();


const main = async() => {
    
    console.log('Hola Mundo');

    let opt = '';

    do {
        // opt = await inquirerMenu(); 
        // console.log( { opt } );

        const tarea = new Tarea('Comprar comida');
        const tareas = new Tareas();

        //* El guión bajo significa que es Private
        tareas._listado[tarea.id] = tarea;

        console.log(tareas);

        await pausa();
    
    } while ( opt !== '0');

}


main();


