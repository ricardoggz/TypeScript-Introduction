/*Clases de ES6 en TypeScript*/

//1._Atributos privados y públicos:
class Person {
    private name : string; //atributo privado
    public height : number; //atributo público
    public lastname : string;
    constructor(name : string, lastname : string, height: number){
        this.name = name;
        this.lastname = lastname;
        this.height = height;
    }
}
const NEW_PERSON: Person = new Person("Ricardo", "Guevara", 1.72);
console.log(NEW_PERSON);