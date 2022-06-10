/*Las variables de tipo función son aquellas que solo se
  les puede asignar una función como valor:
*/

let myFunction : Function;
const increment = (a : number, b : number) : number => a + b;
const decrement = (a : number, b : number) : number => a - b;

myFunction = increment;
console.log(myFunction(4,4));

myFunction = decrement;
console.log(myFunction(5,2));