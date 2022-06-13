/*Agregar métodos en TypeScript.
  Un método es una función la cual es una 
  propiedad de un objeto.

  Para indicarle a mi objeto que tendrá un método
  basta con agregárselo dentro de las llaves que
  indican el tipo de dato:
*/

let person: {
  name: string;
  lastName: string;
  age: number;
  getFullName: () => string;
};

person = {
  name: "Juan",
  lastName: "Pérez",
  age: 21,
  getFullName() {
    return `${this.name} ${this.lastName}`;
  },
};

console.log(person.getFullName());
