/*
*Las interfaces pueden tener anidaciones con otras interfaces. Si nuestra
*interface se está volviendo un poco extensa, lo mejor es anidarle una interface
*externa. 
*/
{
    interface User{
        name : string,
        lastname : string,
        age : number,
        adress: Adress,
        /*
        *Aquí anido la interface Adress
        *y mi interface principal ya no
        *se vuelve extensa.
        */
    };
    /*
    *Definiendo la interface que se anidará:
    */
   interface Adress{
    id : number,
    zip : string,
    city : string,
   };

   /*
   *Extendiendo una interfaz como si fuera una clase:
   */
  {
    interface User{
        name : string,
        lastname : string,
        age : number,
    };

    /*
    *Utilizamos la palabra extends para heredar todas
    *las propiedades de la clase User
    */
   interface UserComplete extends User{
    id ?: number,
    zip ?: string,
    city ?: string,
   };

   const user : UserComplete ={
    name : "Ricardo José",
    lastname : "Guevara",
    age : 21,
    id : 54190,
    zip : "GuGR",
    city : "State of Mexico",
   };

   console.log(user);
  }
}