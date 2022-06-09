/*Parámetros opcionales de las funciones.
  Se puede declarar o especificar si un parámetro es opcional
  solo con ponerle un signo de interrogación le indico a TS que
  ese parámetro es opcional.
*/

function getUser (nickName : string, isActive ? : boolean ) : string  {
    return `Your Nickname: ${nickName}, your active status is: ${isActive}`;
};

/*Le indico a mi funcion que el parámetro isActive es opcional mediante el signo de interrogación*/

let user = getUser("@ricardo_guevarag", false);
console.log(user);