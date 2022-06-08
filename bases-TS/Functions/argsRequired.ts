/*Parámetros obligatorios de las funciones
  En TypeScript puedo declara funciones con parámetros y su tipo de dato,
  de esta manera especifico que solo aceptará el tipo de dato que yo declaré.
*/

function getFullName (firstName : string, lastName : string) : string  {
    return ` Mi nombre es : ${firstName} ${lastName}`;
}; 

/*Le especifico a mi funcion los parámetros y sus tipos de datos.
  En este caso recibe 2 strings como parámetro.
*/

let myName : string = getFullName("Juan","Pérez");
console.log(myName);