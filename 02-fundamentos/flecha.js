

// // function sumar ( a, b ){
function sumar1 ( a, b = 10){
    return a + b;
}

// ------------- Funciones de Flecha --------------

const sumar2 = (a, b) => { 
    return a + b 
};

const sumar3 = (a, b) => a + b;
const saludar = () => 'Hola Mundo';

// console.log( sumar(5, 10) );
console.log( sumar1( 5, 10 ) );
console.log( sumar2( 5, 20 ) );
console.log( sumar2( 5, 30 ) );
console.log( saludar() );