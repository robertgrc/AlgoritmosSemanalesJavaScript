//* dado un string y un numero repetir el string tantas veces como el numero indique

function repetirString(cadena, numero_repeticiones) {
  cadenaRepetida = "";
  for (let i = 0; i < numero_repeticiones; i++) {
    cadenaRepetida += cadena + " ";
  }
  return cadenaRepetida;
}

let cadena = "olivo";
let numero_repeticiones = 7;

console.log(
  `Repite la cadena de texto ${cadena} ${numero_repeticiones} veces:`,
  repetirString(cadena, numero_repeticiones)
);
