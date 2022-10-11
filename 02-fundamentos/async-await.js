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

    return promesa = new Promise( (resolve, reject) => {
        
        const empleado = empleados.find( e => e.id === id )?.nombre;

        // if ternario
        ( empleado ) 
            ? resolve( empleado )
            : reject( `No existe empleado con id ${ id }` );
        });


}

const getSalario = (id, callback) => {
    return promesa_salario = new Promise( (resolve, reject) => {

        const salario = salarios.find( e => e.id === id )?.salario;

        ( salario )
        ? resolve( salario )
        : reject( `No existe salario con id ${ id }` );

    })
}

//* Await, ok JS esperate aquí hasta que tengas la respuesta de la Promesa. 
//* Cuanto tengas la respuesta de la promesa se lo asignas donde yo los necesite.
//* El await debe estar dentro de una función o un método asincrono

const getInfoUsuario = async( id ) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${ empleado } es de ${ salario }`;

    } catch (error) {
        throw error;
        //return error;
    }
}

const id = 3
/**
 * El async tranforma mi función en una función asincrona, que en pocas palabras hace es retornar una promesa.
 */
getInfoUsuario( id )
    .then( msj => {
        console.log('TODO BIEN!')
        console.log(msj)
    })
    .catch( err => {
        console.log('TODO MAL!')
        console.log( err )
    });





