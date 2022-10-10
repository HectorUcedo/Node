
const deadpool = {
    nombre:   'Wade',
    apellido: 'Winston',
    poder:    'regereación',
    //edad: 50,

    // Método
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }

}

//console.log( deadpool.getNombre() );
// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    = deadpool.poder;

//console.log( nombre, apellido, poder );
//const  { nombre, apellido, poder, edad = 0 } = deadpool; //Desestructuración

//console.log( nombre, apellido, poder, edad );

// function imprimeHeroe( heroe ){
function imprimeHeroe({ nombre, apellido, poder, edad = 0 }){ // Desestructuración de un objeto porque está en una llave

    nombre = 'Hector';
    console.log( nombre, apellido, poder, edad );

}

// imprimeHeroe( deadpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

//const [ h1, h2, h3 ] = heroes; // Desestructuración de Arreglo
const [ , , h3 ] = heroes; // Desestructuración de Arreglo

//console.log(h1, h2, h3);
console.log( h3 );
