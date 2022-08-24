'use strict';
/**
 * Realizar un programa que pida al usuario 2 números 
 * y realize las 4 operaciones básicas.
 *  Imprimir los resultados.
 */

let num1;
let operador;
let num2;
let suma = 0;
num1 = (prompt("Introduzca un número: "));
operador = (prompt("Introduzca un operador (+ , - , * , /): "));
num2 = (prompt("Introduzca otro número: "));
suma = parseFloat(num1) + parseFloat(num2);

switch(operador){
    case '+':
        alert(console.log("El resultado es: " +suma));
        break; 

    case '-':

}
