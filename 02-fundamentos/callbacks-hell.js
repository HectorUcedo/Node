
const empleados =[
    {
        id: 1,
        nombre: 'Héctor'
    },
    {
        id: 2,
        nombre: 'Eliseo'
    },
    {
        id: 3,
        nombre: 'Joy'
    }
];


const salarios =[
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


/** 
 * Vamos a pedirle a la persona que va a usar la función que me mandé el id del persona.
 * se agrega el callback para llamar a la función.
 */

const getEmpleado = (id, callback) => {

    const empleado = empleados.find( e => e.id === id )?.nombre;

    if ( empleado ){
        // Se agregar el nulo para casos que no haya error. Se acostumbra que si no hay error mandar "null"
        callback( null, empleado);
    } else {
        callback( `Empleado con id ${ id } no existe` );
    }

};

const getSalario = (id, callback) => {

                                                    //* ? = Nullcheck operator
    const salario = salarios.find( s => s.id === id )?.salario;

    if ( salario ){
        callback( null, salario);
    } else {
        callback( `No existe salario con id ${ id }` );
    }

}

const id = 2


getEmpleado( id, ( err, empleado ) => {

    if ( err ) {
        console.log('ERROR!');
        return console.log(err);
    }


    getSalario(id, ( err, salario) => {

        if( err ){
            return console.log( err );
        }
    
        console.log('Empleado:', empleado, 'tiene un salario de:', salario);
    
    })
    

});









