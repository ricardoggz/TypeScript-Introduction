"use strict";
/*Agregar todos los tipos de datos a las variables y a las funcioes:*/
(function () {
    // Tipos
    var batman = "Bruce";
    var superman = "Clark";
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ["Lex Lutor", 5, true];
    // Arreglos
    var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    var fuerzaHeroes;
    (function (fuerzaHeroes) {
        fuerzaHeroes[fuerzaHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        fuerzaHeroes[fuerzaHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
        fuerzaHeroes[fuerzaHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
        fuerzaHeroes[fuerzaHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(fuerzaHeroes || (fuerzaHeroes = {}));
    ;
    var fuerzaFlash = fuerzaHeroes.fuerzaFlash;
    var fuerzaSuperman = fuerzaHeroes.fuerzaSuperman;
    var fuerzaBatman = fuerzaHeroes.fuerzaBatman;
    var fuerzaAcuaman = fuerzaHeroes.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    var poder = "100";
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
