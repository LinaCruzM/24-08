'use strict';
//Bloque de código que realiza una tarea

/** Función clásica
 * function nombreFunction(Recibo de parámetros){
     Cuerpo de la función 
    return 0;
}
Invocación de la función
 nombreFunction();
*/

function suma(num1=0, num2=0){
    return num1 + num2;
}

let result = 0;
result =suma(3,5);
console.log(result);

//Función tipo flecha
const resta = (num1=1, num2=1) => {
    return num1 - num2;
} 
console.log(resta(12));