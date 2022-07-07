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
}