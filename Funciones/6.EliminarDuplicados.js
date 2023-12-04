//* Escribe una función llamada eliminarDuplicados que tome una lista como parámetro y devuelva una nueva lista sin elementos duplicados.

function eliminarDuplicados(lista) {
  let listaSinDuplicados = [];
  for (let i = 0; i < lista.length; i++) {
    let verificador = listaSinDuplicados.includes(lista[i]);
    if (!verificador) {
      listaSinDuplicados.push(lista[i]);
    }
  }
  return listaSinDuplicados;
}

//lista.filter((item) => item === elemento).length;

// Ejemplo de uso:
const lista1 = [2, 3, 2, 3, 5, 7, 8, 7, 5, 9, 14];
const maximoEncontrado = eliminarDuplicados(lista1);
console.log("La lista sin numeros Duplicados:", maximoEncontrado);

//* mismo ejercicio eliminar duplicados con filter

function eliminarDuplicados(lista) {
  return lista.filter((elemento, indice, arr) => arr.indexOf(elemento));
}

const listaConDuplicados = [7, 2, 3, 2, 7, 5, 7, 2, 3, 5];
const listaSinDuplicados = eliminarDuplicados(listaConDuplicados);

console.log(listaSinDuplicados);

//* Aquí, lista es la lista original que se pasa como parámetro a la función eliminarDuplicados.

//* .filter((elemento, indice, arr) => ...): Este es un método de array que crea una nueva lista con todos los elementos que cumplen cierta condición. En este caso, se utiliza una función de devolución de llamada (callback) que toma tres parámetros:

//* elemento: El elemento actual del array.
//* indice: El índice del elemento actual en el array.
//* arr: El array original (lista en este caso).
//* arr.indexOf(elemento) === indice: Dentro de la función de devolución de llamada, se utiliza indexOf para determinar la primera posición en la que se encuentra el elemento actual en el array original (arr). La condición arr.indexOf(elemento) === indice se evalúa como verdadera solo si el índice actual (indice) es igual al índice de la primera aparición de ese elemento. Esto significa que el elemento actual es la primera ocurrencia en la lista original.

//*Entonces, la función filter crea una nueva lista que contiene solo las primeras apariciones de cada elemento en la lista original, eliminando así los duplicados. Al final, esa nueva lista sin duplicados se devuelve como resultado de la función eliminarDuplicados.
