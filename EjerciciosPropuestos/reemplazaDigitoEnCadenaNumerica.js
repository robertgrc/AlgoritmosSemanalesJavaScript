function insertarDigitoEnPosicion(numero, posicion, digitoAInsertar) {
  // Verificar que la posición sea válida
  if (posicion < 0 || posicion > String(numero).length) {
    console.log("La posición no es válida.");
    return numero;
  }

  // Convertir el número a una cadena para trabajar con sus dígitos
  const numeroComoCadena = String(numero);

  // Dividir el número en dos partes en la posición deseada
  const parteIzquierda = numeroComoCadena.slice(0, posicion - 1);
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
