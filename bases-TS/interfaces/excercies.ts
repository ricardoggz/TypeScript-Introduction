{
  // Crear interfaces

  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelerar(): void;
  }
  const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  };

  const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
      console.log("...... gogogo!!!");
    },
  };

  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales
  interface Villano {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
  }

  const guason: Villano = {
    reir: true,
    comer: true,
    llorar: false,
  };

  const reir = (guason: Villano): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  };

  // Cree una interfaz para la siguiente funcion
  interface Ciudadanos {
    (ciudadanos: string[]): number;
  }

  const ciudadGotica: Ciudadanos = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  };

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
  interface Description {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    imprimirBio(): void;
  }
  class Persona implements Description {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    constructor(
      nombre: string,
      edad: number,
      sexo: string,
      estadoCivil: string
    ) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.estadoCivil = estadoCivil;
    }
    imprimirBio() {}
  }
}
