/*
*interfaces para las funciones:
*Este patrón es muy poco visto:
*/
{
    interface Add{
        (a : number, b : number) : number;
    };

    let add : Add;
    add=(a : number, b : number)=>{
        return a + b;
    };
    console.log(add(1,1));
}