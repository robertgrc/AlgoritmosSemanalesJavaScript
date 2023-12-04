//* a. Implementa una función llamada promedio que calcule el promedio de una lista de números.

function promedio(arreglo) {
  let sumatoria = arreglo.reduce((acumulado, numero) => {
    return acumulado + numero;
  });
  let promedio = sumatoria / arreglo.length;
  console.log(promedio);
}

let Arr1 = [2, 4, 6, 8];
promedio(Arr1);

//* b mismo ejercicio con reduce
function calcularPromedio(lista) {
  const sumaTotal = lista.reduce((a, b) => a + Number(b), 0);
  const promedio = sumaTotal / lista.length;
  return promedio;
}

//* Así, Number(elementoActual) convierte explícitamente cada elemento a un número antes de sumarlo al acumulador.

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
const resultado = calcularPromedio(numeros);
console.log(`El promedio de la lista [${numeros}] es: ${resultado}`);
