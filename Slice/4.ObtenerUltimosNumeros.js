//* Escribe una función llamada obtenerUltimos que tome una lista y un número n como parámetros, y devuelva una nueva lista que contenga los últimos n elementos de la lista original.

function obtenerUltimos(lista, numero) {
  const indiceInicio = lista.length - numero;
  const listaNumeros = lista.slice(indiceInicio);
  return listaNumeros;
}

const miLista1 = [7, 35, 21, 14, 7, 28, 13, 14, 15, 17, 18];
const ultimosNumeros = 7;
const sublista = obtenerUltimos(miLista1, ultimosNumeros);
console.log(sublista);
