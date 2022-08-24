'use strict';

let num1 = 0;
let num2 = 0;
let suma = 0;

num1 = prompt("Introduzca un número positivo: ");
num2 = prompt("Introduzca un número positivo: ");

if((num1>0) && (num2>0)){
    suma = num1+num2;
    console.log("El resultado de la suma es: "+suma);
    alert("La suma es: "+suma);
}