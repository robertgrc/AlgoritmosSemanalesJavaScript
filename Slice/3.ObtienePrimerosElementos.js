//* Escribe una función llamada obtenerPrimeros que tome una lista y un número n como parámetros, y devuelva una nueva lista que contenga los primeros n elementos de la lista original.

function obtenerPrimeros(lista, numero) {
  const listaNumeros = lista.slice(0, numero);
  return listaNumeros;
}

const miLista1 = [7, 35, 21, 14, 7, 28, 13, 14, 15, 17, 18];
const numeroItems = 7;
const sublista = obtenerPrimeros(miLista1, numeroItems);
console.log(sublista);
