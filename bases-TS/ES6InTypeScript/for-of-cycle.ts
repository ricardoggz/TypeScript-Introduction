/*
    El ciclo for of en TypeScript y ES6
*/
let cars : string[] = ["Ferrari", "Mustang", "Camaro"];

//Recorrer el arreglo con un ciclo for tradicional:
for (let i = 0; i<cars.length; i++) {
    console.log(cars[i]);
};

//Recorrer el arreglo con un ciclo for of:
for (let car of cars) {
    console.log(car);
}