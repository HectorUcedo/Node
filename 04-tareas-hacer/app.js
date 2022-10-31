require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        pausa,
        leerInput 
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

//console.clear();
const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB =leerDB();

    if ( tareasDB ){
        // Establecer las tareas
    }

    await pausa();


    do {
        // Imprimir el menú
        opt = await inquirerMenu(); 
        //console.log( { opt } );

        switch (opt) {
            case '1':
                // crear opción
                const desc = await leerInput('Descripción:');
                //console.log( desc );         
                tareas.crearTarea( desc );       
            break;

            case '2':
                //console.log( tareas._listado );                
                console.log( tareas.listadoArr );                
            break;

        }


        //guardarDB( tareas.listadoArr );

        await pausa();
    
    } while ( opt !== '0');

}


main();


