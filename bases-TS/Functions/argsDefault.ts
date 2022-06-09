/*Parámetros por defecto en las funciones.
  En mis funciones puedo inicializar un parámetro
  por defecto, es decir asignarle un valor dependiendo
  el tipo de dato que le ponga.
*/

function greet(message : string, name : string = "Juan Pérez") : string {
    return `${message} ${name}`;
};

/*
 Le indico a mi función que el parámetro name tendrá un valor por defecto
 El cual es Juán Pérez y así al momento de ejecutar la función solo paso
 el primer argumento:
*/

console.log(greet("Hello"));