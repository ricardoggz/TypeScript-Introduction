/*
    Desestructuración de arreglos en TypeScript y
    ES6.
*/

let products : string[] = [
    "Milk", //position 0
    "Shampoo", //position 1
    "soap", //position 2
    "table", //position 3
];

//simple destructuring:
const SOAP : string = products[2];
console.log(SOAP);

//better destructuring:
let [ milk, shampoo, soap, table ] = products;
console.log(milk, table);