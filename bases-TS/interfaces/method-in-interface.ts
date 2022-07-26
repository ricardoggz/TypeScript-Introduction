/*
 *Métodos dentro de las interfaces: Se recomienda que no se implementen
 *métodos dentro de una interfaz, de necesitarlos es mejor opción crear
 *una clase para ello.
 */
{
  interface User {
    name: string;
    lastname: string;
    age: number;
    adress?: Adress;
    getFullAdress(id : number) : string;
  };
  interface Adress {
    id: number;
    zip: string;
    city: string;
  };
}
