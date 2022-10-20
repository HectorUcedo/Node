
const inquirer = require('inquirer'); //* Inquirer version = @7.3.3
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer',
        choices: ['1. Crear lista', 'opt2', 'opt3']
    }
];


const inquirerMenu = async() => {

    //console.clear();
    console.log('==========================='.green);
    console.log('   Selecciones una opción'.green);
    console.log('===========================\n'.green);

    const opt = await inquirer.prompt(preguntas);

    return opt;

}


module.exports = {
    inquirerMenu
}