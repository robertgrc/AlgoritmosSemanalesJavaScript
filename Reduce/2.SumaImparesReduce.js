function SumaImparesReduce(arreglo) {
  const suma = arreglo.reduce((acumulador, numero) => {
    if (numero % 2 !== 0) {
      console.log("acumulador y numero", acumulador, numero);
      return acumulador + numero;
    } else {
      return acumulador;
    }
  }, 0);
  return suma;
}

const arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = SumaImparesReduce(arregloNumeros);
console.log(`La suma de los números impares es: ${resultado}`);
