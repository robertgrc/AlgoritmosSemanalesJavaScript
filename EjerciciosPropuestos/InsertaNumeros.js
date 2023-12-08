//* Escribe un programa que sea capaz de insertar un dígito dentro de un número indicando la posición. El nuevo dígito se colocará en la posición indicada y el resto de dígitos se desplazará hacia la derecha. Las posiciones se cuentan deizquierda a derecha empezando por el 1. Suponemos que el usuario introduce correctamente los datos. Se recomienda usar long en lugar de int ya que elprimero admite números más largos.
//*Ejemplo:
//*Por favor, introduzca un número entero positivo: 406783
//*Introduzca la posición donde quiere insertar: 3
//*Introduzca el dígito que quiere insertar: 5
//*El número resultante es 4056783

function InsertaNumeroEnPosicion(numero, posicion, digitoAInsertar) {
  let divideNumero1 = numero.toString().split("").slice(0, posicion);
  let divideNumero2 = numero.toString().split("").slice(posicion);
  divideNumero1.push(digitoAInsertar);
  divideNumero1.push(...divideNumero2);
  return parseInt(divideNumero1.join(""));
}

let numero = 123381239;
let posicion = 5;
let insertar = 777;
console.log(InsertaNumeroEnPosicion(numero, posicion, insertar));
