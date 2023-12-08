//* Escribe un programa que sea capaz de insertar un dígito dentro de un número indicando la posición. El nuevo dígito se colocará en la posición indicada y el resto de dígitos se desplazará hacia la derecha. Las posiciones se cuentan deizquierda a derecha empezando por el 1. Suponemos que el usuario introduce correctamente los datos. Se recomienda usar long en lugar de int ya que elprimero admite números más largos.
//*Ejemplo:
//*Por favor, introduzca un número entero positivo: 406783
//*Introduzca la posición donde quiere insertar: 3
//*Introduzca el dígito que quiere insertar: 5
//*El número resultante es 4056783

function insertarDigitoEnPosicion(numero, posicion, digitoAInsertar) {
  // Verificar que la posición sea válida
  if (posicion < 0 || posicion > String(numero).length) {
    console.log("La posición no es válida.");
    return numero;
  }

  // Convertir el número a una cadena para trabajar con sus dígitos
  const numeroComoCadena = String(numero);

  // Dividir el número en dos partes en la posición deseada
  const parteIzquierda = numeroComoCadena.slice(0, posicion);
  const parteDerecha = numeroComoCadena.slice(posicion);

  // Construir el nuevo número con el dígito insertado
  const nuevoNumero = parteIzquierda + digitoAInsertar + parteDerecha;

  return parseInt(nuevoNumero); // Convertir la cadena resultante a un número
}

// Ejemplo de uso
const numeroOriginal = 12345;
const posicionAInsertar = 2;
const digitoAInsertar = 8;

const nuevoNumero = insertarDigitoEnPosicion(
  numeroOriginal,
  posicionAInsertar,
  digitoAInsertar
);

console.log(`Número original: ${numeroOriginal}`);
console.log(`Nuevo número: ${nuevoNumero}`);
