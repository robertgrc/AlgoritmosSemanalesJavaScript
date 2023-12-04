//* Dado un arreglo de números, encuentra la suma de los cuadrados de cada número.
function SumaCuadradosReduce(numeros) {
  const sumaCuadrados = numeros.reduce((acumulador, numero) => {
    return acumulador + numero * numero;
  }, 0);
  return sumaCuadrados;
}

const arregloNumeros = [3, 4];
const resultado = SumaCuadradosReduce(arregloNumeros);
console.log(`La suma de los números impares es: ${resultado}`);

// Función para encontrar la suma de los cuadrados de los números en un arreglo
const sumaCuadradosV2 = (numeros) => {
  return numeros.reduce(
    (acumulador, numero) => acumulador + Math.pow(numero, 2),
    0
  );
};

// Ejemplo de uso
const numerosEjemplo = [2, 3, 5, 7];
const solucion = sumaCuadradosV2(numerosEjemplo);

console.log("La suma de los cuadrados es:", solucion);
