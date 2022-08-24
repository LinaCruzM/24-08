'use strict'; //Directiva que indica que estamos trabajando en modo escrito

/**
 * Comentarios de bloque
 */

//Declaración de Variables o contenedores

/* ¿Por qué no se usa var?
var variable1 = 10; //Carácter globar (Mala práctica)
let variable2 =23; // De ámbito local
const constante1 = 3.14; //Declarar constantes
console.log(variable2);
if(true){
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable2);
}
console.log(variable2); //Impresiones
*/

let num1 = 1;
let num2 = 1;
num1 = prompt("Introduzca un número.");
num2 = prompt("Introduzca otro número.");
let suma =0;
suma = parseFloat(num1) + parseFloat(num2); //Números decimales
console.log("El resultado de la suma es: "+suma);
alert("La suma es: "+suma);