/*Tipos personalizados para objetos en TypeScript.
  Con la palabra reservada "type" puedo definir tipos
  personalizados a mis objetos: 
*/

type User = {
    name : string,
    lastName : string,
    isPremium : boolean,
    getFullName : () => string,
}; //Así defino un tipo personalizado para objetos.

/*Ahora ya puedo usar el tipo User
  y crear nuevos objetos.
*/

let newUser : User = {
    name: "Juan",
    lastName : "Pérez",
    isPremium : false,
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
};