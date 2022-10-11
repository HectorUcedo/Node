const empleados =[
    {
        id: 1,
        nombre: 'Fernando'
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

const getEmpleado = (id, callback) => {
    
    //* la promesa internamente ejecuta un callback, el callback tiene 2 argumentos que se le envía
    //const promesa = new Promise( (resolve, reject) => {
    return promesa = new Promise( (resolve, reject) => {
        
        const empleado = empleados.find( e => e.id === id )?.nombre;

        // if ternario
        ( empleado ) 
            ? resolve( empleado )
            : reject( `No existe empleado con id ${ id }` );
        });

        /**
        if ( empleado ) {
            resolve( empleado );
        } else {
            reject( `No existe empleado con id ${ id }` );
        }
        

    });
    */
    //return promesa;
}

const getSalario = (id, callback) => {
    return promesa_salario = new Promise( (resolve, reject) => {

        const salario = salarios.find( e => e.id === id )?.salario;

        ( salario )
        ? resolve( salario )
        : reject( `No existe salario con id ${ id }` );

    })
}

const id = 3;
// Refactorización
// getEmpleado(id)
//     .then ( empleado => console.log( empleado ) )
//     .catch( err => console.log(err));

// getSalario(id)
//     .then ( salario => console.log( salario ) )
//     .catch( err => console.log(err));


getEmpleado(id)
    .then( empleado => {
        getSalario( id )
            .then( salario => {

                console.log('El empleado:', empleado, 'tiene un salario de:', salario);

            })
            .catch( err => console.log(err))
    })
    .catch( err => console.log(err))