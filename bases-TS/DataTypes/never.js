"use strict";
/*Never es un retorno de una función que no tiene un puntoalcanzable
  al termiar de ejecutarse, es decir algo que nunca ocurre.

  Este tipo de retorno nos puede ser de mucha ayuda a la hora de crear
  functiones que manden algún tipo de error y que el resto de nuestro
  código deje de ejecutarse.
*/
function newError(messageError) {
    throw new Error(messageError);
}
newError("Algo sucedió mal...");
