/*void nos sirve para definir que una función
    no nos retorna nada, es decir que no utilizaremos 
    la palabra reservada return dentro de su cuerpo.
*/

function getData (a: any,b: any): void {
    console.log(a + b);
}

getData(1,2);