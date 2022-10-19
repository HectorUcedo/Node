const { stdin } = require('process');

require('colors');


// función -> Promesa
const mostrarMenu = () => {

    console.clear();
    console.log('==========================='.green);
    console.log('   Selecciones una opción'.green);
    console.log('===========================\n'.green);

    console.log(` ${ '1.'.green } Crear tarea`); // Template literal ``
    console.log(` ${ '2.'.green } Listar tareas`);
    console.log(` ${ '3.'.green } Listar tareas completadas`);
    console.log(` ${ '4.'.green } Listar tareas pendientes`);
    console.log(` ${ '5.'.green } Completar tareas`);
    console.log(` ${ '6.'.green } Borrar tarea`);
    console.log(` ${ '0.'.green } Salir \n`);

                    // Este paquete readline ya viene en Node
    const readline = require('readline').createInterface({

        input: process.stdin,
        output: process.stdout

    });

                                            // callback: funciones que se van a ejecutar cuando esto termine
    readline.question('Seleccione una opción: ', (opt) => {
        //console.log( { opt } );
        readline.close(); //* Cerramos el readline sino se a va a quedar esperando info del usuario
    })


}

const pausa = () => {

    const readline = require('readline').createInterface({

        input: process.stdin,
        output: process.stdout

    });

    readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, (opt) => {
        readline.close(); 
    })

};



module.exports = {
    mostrarMenu,
    pausa
}

