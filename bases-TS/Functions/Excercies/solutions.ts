// Funciones Básicas
(() => {
  function sumar(a: number, b: number): number {
    return a + b;
  }
  console.log(sumar(4, 4));

  const contar = (heroes: string[]): number => {
    return heroes.length;
  };
  const superHeroes: string[] = [
    "Flash",
    "Arrow",
    "Superman",
    "Linterna Verde",
  ];
  console.log(contar(superHeroes));

  //Parametros por defecto
  const llamarBatman = (llamar: boolean = true): void => {
    if (llamar) {
      console.log("Batiseñal activada");
    }
  };

  llamarBatman();

  // Rest?
  const unirheroes = (...personas: string[]) : string => {
    return personas.join(", ");
  };

  // Tipo funcion
  const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean,
    arreglo: any[]
  ) => {};

  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco;
  noHaceNadaTampoco = noHaceNada;
})();
