/*Parámetros Rest de las funciones.
  Las funciones me permiten tener como argumento
  el operador spread para devolver todos los parámetros
  que yo le pase a la hora de ejecutar mi función.
  Por defecto esto devolverá un arreglo.
*/

function getFullName (...args : string[]) : string {
    return `${args.join(" - ")}`;
}

let fullName = getFullName("Ricardo", "José", "Guevara");
console.log(fullName);