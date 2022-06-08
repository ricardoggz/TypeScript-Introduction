/*Para declarar funciones en TS es de la misma manera  que en JS
  Utilizando la palabra reservada function o con funciones flecha.
  Pero con la diferencia que puedo poner el tipo de dato que retorna
  mi función.
*/

//Para esto declaro mi función y le indico el tipo de dato que retornará:

function getName () : string {
    return "MyName"
} 
/*  Le indico a la función que retornará un string en este caso
    Sin embargo puede ser otro tipo de dato, por ejemplo un booleano,
    un number, un arreglo, una tupla, void, etc...
*/