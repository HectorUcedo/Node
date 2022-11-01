
const inquirer = require('inquirer'); //* Inquirer version = @7.3.3
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        // choices: ['1. Crear lista', 'opt2', 'opt3']
        choices: [ //* Se puede mandar un Objeto
        /**
         * https://code.visualstudio.com/docs/editor/codebasics -> Multi-cursor
         */
            {
                value: '1',
                name: `${ '1.'.green } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.green } Listar tarea`
            },         
            {
                value: '3',
                name: `${ '3.'.green } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.green } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.green } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green } Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.'.green } Salir`
            },

        ]
    }
];


const inquirerMenu = async() => {

    //console.clear();
    console.log('==========================='.green);
    console.log('   Selecciones una opción'.white);
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

const listadoTareasBorrar = async( tareas = [] ) => {

    const choices = tareas.map( ( tarea,i ) => {
        
        const idx = `${ i + 1 }.`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
        }
    });

    //* Para añadir al inicio del arreglo
    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;

    //console.log(choices);
    
    // {
    //     value: tarea.id,
    //     name: `${ '1.'.green } Crear tarea`
    // },

}

const confirmar = async ( message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar
}