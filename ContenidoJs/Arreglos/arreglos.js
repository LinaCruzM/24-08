'use strict';
let miArreglo = [2,4,5,45,true,'78',"Hola mundo"];
let miArreglo2 = new Array(1,2,3,4);
// miArreglo = [2,4,5,45,true,'78',"Hola mundo"];
miArreglo.push(56);
//console.log(miArreglo.length);
for(let i=0; i<miArreglo.length;i++){
    //console.log(miArreglo[i]);
}


//Variaciones del for

for(let j of miArreglo2){
    //console.log(j);
}

for(let j in miArreglo2){
    //console.log(miArreglo2[j]);
}

//Flecha anónima
miArreglo2.forEach((e)=>{
    //console.log(e);
});

//Clásica anónima
miArreglo2.forEach(function(e){
    console.log(e);
});