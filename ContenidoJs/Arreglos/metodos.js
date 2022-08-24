'use strict';

// 1.Cadena a arreglo
let cadenaDias = "Lunes_Martes_Miércoles_Jueves_Viernes_Sádado_Domingo";
let miArray = cadenaDias.split("_");
//console.log(miArray);

// 2.Buscar (Si no encuentra el valor devuelve "Undefined")
// Función anónima ()=>{}                Clásica function(){}
const result = miArray.find((e)=> e === "Viernes");
//console.log(result);

const index = miArray.findIndex((e)=> e === "Domingo");
//console.log(index);

// 3. Comprueba si existe un elemento dentro de un array true o false
//console.log(miArray.includes("Viernes9"));

// 4.Filtrar elementos 
let miArray2=[];
for(let i=0; i<25; i++){
    miArray2[i]=i + 3;
}
const response = miArray2.filter((e)=> e % 2 === 0);
console.log(response);

// Método map
let nombres = [];
let apellidos= [];
// some, every, reduce