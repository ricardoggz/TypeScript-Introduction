/*
 *NameSpaces en TypeScript : Nos sirven para crear bloques de código
 *y generar ámbitos de bloque dentro de nuestro programa, también
 *podemos exportar lo que nuestro namespace tenga (functiones, variables,
 *clases, etc).
 */

namespace Validation {
  /*
   *Al utilizar la palabra reservada export
   *le indicio que la función será exportada
   */
  export function validateText(text: string): string {
    return text.length < 3
      ? `El texto debe tener una logitud mayor a 3 carácteres`
      : `Texto correcto`;
  }
}
let validateText = Validation.validateText("Hola");
console.log(validateText);
