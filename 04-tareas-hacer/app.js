require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

//console.clear();
const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB =leerDB();

    if ( tareasDB ){ // cargar tareas
        tareas.cargarTareasFormArray( tareasDB );
    }

    //await pausa();


    do {
        // Imprimir el menú
        opt = await inquirerMenu(); 
        //console.log( { opt } );

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción:');      
                tareas.crearTarea( desc );       
            break;

            case '2':               
                tareas.listadoCompleto();             
            break;

            case '3': //Listar completadas
                tareas.listarPendientesCompletadas(true);             
            break;
            
            case '4': // Listar pendientes
                tareas.listarPendientesCompletadas(false);             
            break;

            case '6': // Borrar
                const id = await listadoTareasBorrar( tareas.listadoArr );  
                // TODO: preguntar si está seguro   
                //console.log({ ok });  

                if( id !== '0'){
                    const ok = await confirmar('¿Está seguro?');  
                    if (ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                        
                    }
                }          
            break;

        }


        guardarDB( tareas.listadoArr );

        await pausa();
    
    } while ( opt !== '0');

}


main();


