//* Dado un arreglo de números, encuentra la suma de los números que son mayores que un valor dado.

function SumaNumerosMayores(arreglo, numeroInicio) {
  const sumaNumeros = arreglo.reduce((acumulado, numero) => {
    if (numero > numeroInicio) {
      return acumulado + numero;
    } else {
      return acumulado;
    }
  }, 0);
  return sumaNumeros;
}

const arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroInicial = 7;
const resultado = SumaNumerosMayores(arregloNumeros, numeroInicial);
console.log(`La suma de los números pares es: ${resultado}`);
