//* Según cierta cultura oriental, los números de la suerte son el 3, el 7, el 8 y el 9. Los números de la mala suerte son el resto: el 0, el 1, el 2, el 4, el 5 y el 6. Un número es afortunado si contiene más números de la suerte que de la mala suerte. Realiza un programa que diga si un número introducido por el usuario es afortunado o no.

// Ejemplo 1:
// Introduzca un número: 772
// El 772 es un número afortunado.
// Ejemplo 2:
// Introduzca un número: 7720
// El 7720 no es un número afortunado.
// Ejemplo 3:
// Introduzca un número: 43081
// El 43081 no es un número afortunado.
// Ejemplo 4:
// Introduzca un número: 888
// El 888 es un número afortunado.
// Ejemplo 5:
// Introduzca un número: 1234
// El 1234 no es un número afortunado.
// Ejemplo 6:
// Introduzca un número: 6789
// El 6789 es un número afortunado.

function NumeroAfortunado(numero) {
  let cadenaNumero = numero
    .toString()
    .split("")
    .map((num) => parseInt(num));
  console.log(cadenaNumero);

  let contadorNumerosAfortunados = 0;
  let contadorNumerosNoAfortunados = 0;
  let afortunado = cadenaNumero.map((numero) => {
    if (numero === 3 || numero === 7 || numero === 8 || numero === 9) {
      contadorNumerosAfortunados++;
    } else if (
      numero === 0 ||
      numero === 1 ||
      numero === 2 ||
      numero === 4 ||
      numero === 5 ||
      numero === 6
    ) {
      contadorNumerosNoAfortunados++;
    }
  });
  console.log(contadorNumerosAfortunados);
  console.log(contadorNumerosNoAfortunados);
  if (contadorNumerosAfortunados > contadorNumerosNoAfortunados) {
    return `El numero ${numero} es Afortunado`;
  } else {
    return `El numero ${numero} no es un numero Afortunado`;
  }
}

console.log(NumeroAfortunado(772));
console.log(NumeroAfortunado(43081));
console.log(NumeroAfortunado(7720));
console.log(NumeroAfortunado(888));
