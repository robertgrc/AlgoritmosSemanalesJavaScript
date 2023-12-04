//* Suma de Números en Posiciones Pares:
//* Dado un arreglo de números, encuentra la suma de los números que se encuentran en posiciones pares del arreglo (considerando el índice).

function SumaPosicionesPares(arreglo) {
  const sumaNumeros = arreglo.reduce((acumulado, numero, indice) => {
    if (indice % 2 === 0) {
      return acumulado + numero;
    } else {
      return acumulado;
    }
  }, 0);
  return sumaNumeros;
}

const arregloNumeros = [7, 3, 5, 9, 15, 10, 9];
const resultado = SumaPosicionesPares(arregloNumeros);
console.log(`La suma de los números en posiciones pares es: ${resultado}`);
