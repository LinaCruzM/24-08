
/**
 *  Determinar la calificacion de un estudiante
 *  0 a 2.9 = Insuficiente
 *  3.0 a 3.5 = Regular
 *  3.6 a 4.0 = Bien
 *  4.1 a 4.5 = Muy Bien
 *  4.6 a 5.0 = Excelente
 */
let calificacion;
calificacion = 3.0;
let mensaje="";
switch (true){
    case calificacion >= 0 && calificacion <=2.9:
        //Template String
        mensaje=`Insuficiente. Su calificación fue: ${calificacion}`;
        break;
    case calificacion >= 3.0 && calificacion <=3.5:
        //Template String
        mensaje=`Regular. Su calificación fue: ${calificacion}`;
        break;
    case calificacion >= 3.6 && calificacion <=4.0:
        //Template String
        mensaje=`Bien. Su calificación fue: ${calificacion}`;
        break;
    case calificacion >= 4.1 && calificacion <=4.5:
        //Template String
        mensaje=`Muy Bien. Su calificación fue: ${calificacion}`;
        break;
    case calificacion >= 4.6 && calificacion <=5.0:
        //Template String
        mensaje=`Excelente. Su calificación fue: ${calificacion}`;
        break;
    default:
        mensaje=`La calificación no puede ser procesada.  ${calificacion}`;
        break;
}
console.log(mensaje);