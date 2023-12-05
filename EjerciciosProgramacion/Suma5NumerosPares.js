//*  Diseñar un programa que muestre el suma de los 7 primeros números pares.

function sumaPares(listaNumeros) {
  const listaPares = listaNumeros.filter((numero) => numero % 2 === 0);
  const lista7pares = listaPares.slice(0, 7);
  console.log(lista7pares);
  const sumatoria = lista7pares.reduce(
    (acumulador, numero) => acumulador + numero,
    0
  );
  return sumatoria;
}

let numeros = [5, 7, 4, 3, 2, 5, 4, 6, 7, 6, 8, 9, 10, 22, 28, 13, 17, 12, 14];
let suma = sumaPares(numeros);
console.log(suma);
