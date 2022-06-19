/*
    Desestructuración de objetos en TypeScript y ES6
*/
 type USER = {
    nickname : string,
    isPremium : boolean,
    isActive : boolean,
 };

 let otherUser : USER = {
    nickname : "@ricardo_guevarag",
    isPremium : true,
    isActive : true,
 };

 //Object destructuring :
 let { nickname, isPremium, isActive } = otherUser;

 //Destructuring in functions:
 function getStatusUser ({ isActive } : USER) : string {
    return `Active : ${ isActive }`;
 };
 console.log(getStatusUser(otherUser));