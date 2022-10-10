
console.log('Inicio de programa'); // 1

/**
 * Los setTimeout no es bloqueante
 * Establece los callback en una pila de ejecución
 */

setTimeout(() => {

    console.log('Primer Timeout'); // 5

}, 3000 );

setTimeout(() => {

    console.log('Segundo Timeout'); // 2

}, 0 );

setTimeout(() => {

    console.log('Tercer Timeout'); // 3

}, 0 );

console.log('Fin de programa'); // 4 :: 2


