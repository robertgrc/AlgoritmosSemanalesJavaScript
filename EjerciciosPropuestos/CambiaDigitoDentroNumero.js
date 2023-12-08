//* Escribe un programa que cambie un dígito dentro de un número dando la posición y el valor nuevo. Las posiciones se cuentan de izquierda a derecha empezando por el 1. Se recomienda usar long en lugar de int ya que el primero admite números más largos. Suponemos que el usuario introduce correctamente los datos.
// Ejemplo:
// Por favor, introduzca un número entero positivo: 406783
// Introduzca la posición dentro del número: 3
// Introduzca el nuevo dígito: 1
// El número resultante es 401783

function CambiaDigito(numero, posicion, nuevoDigito) {
  let cadenaPrimeraParte = numero
    .toString()
    .slice(0, posicion - 1)
    .split("");
  let cadenaSegundaParte = numero.toString().slice(posicion).split("");
  cadenaPrimeraParte.push(nuevoDigito);
  cadenaPrimeraParte.push(...cadenaSegundaParte);
  return parseInt(cadenaPrimeraParte.join(""));
}

let numero = 406783;
let posicion = 3;
let insertar = 1;
let respuesta = CambiaDigito(numero, posicion, insertar);
console.log(`El numero Antes de convertir: ${numero}`);
console.log(`El numero Resultante es ${respuesta}`);
