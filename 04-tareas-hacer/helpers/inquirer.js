
const inquirer = require('inquirer'); //* Inquirer version = @7.3.3
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        // choices: ['1. Crear lista', 'opt2', 'opt3']
        choices: [ //* Se puede mandar un Objeto
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tarea'
            },         
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },

        ]
    }
];


const inquirerMenu = async() => {

    //console.clear();
    console.log('==========================='.green);
    console.log('   Selecciones una opción'.green);
    console.log('===========================\n'.green);

    // const opt = await inquirer.prompt(preguntas);
    const { opcion } = await inquirer.prompt(preguntas); //* Destructuración

    //return opt;
    return opcion;

}

const pausa = async() => {

    const question = [ //* Siempre es un Arreglo []
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ];

    console.log('\n')
    await inquirer.prompt(question);

}

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            //message: 'mensaje' //! Redundante
            message,
            validate ( value ) { //* Función dentro de un objeto
                if ( value.length === 0)  {
                    return 'Por favor ingrese un valor';
                } 
                return true;
            }
        }
    ];

    // Desestructurar la descripción
    const { desc } = await inquirer.prompt( question );
    return desc;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}