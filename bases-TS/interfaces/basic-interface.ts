/*
*Interfaces en TypeScript: Son similares a los Type, ya que 
*su funcionalidad es la misma, para manejar nuestros objetos.
*La diferencia es que las interfaces pueden expandirse.
*/
/*
*Declaracón de una interface:
*/
{
    interface Student{
        name : string,
        lastname : string,
        age? : number,
        id : number,
    };
    let student : Student = {
        name : "Ricardo",
        lastname : "Guevara",
        age : 21,
        id : 18204126
    };
}