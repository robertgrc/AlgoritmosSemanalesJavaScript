//*  Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros.

function MostrarNumeros(numeros) {
  positivos = 0;
  negativos = 0;
  neutros = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      positivos++;
    } else if (numeros[i] < 0) {
      negativos++;
    } else {
      neutros++;
    }
  }
  return { positivos, negativos, neutros };
}

let numeros = [1, 0, 2, -4, -7, 7, 0, 5, 3, 0];

let resultado = MostrarNumeros(numeros);
console.log(`la cantidad de numeros positivos es: ${resultado.positivos}`);
console.log(`la cantidad de numeros negativos es: ${resultado.negativos}`);
console.log(`la cantidad de numeros neutros o ceros es: ${resultado.neutros}`);
