//* Escribe una función llamada dividirLista que tome una lista y un índice como parámetros, y devuelva un array de dos listas. La primera lista debe contener los elementos desde el principio hasta el índice (sin incluirlo), y la segunda lista debe contener los elementos desde el índice hasta el final.

function dividirLista(lista, numero) {
  let lista2 = lista.slice(numero - 1);
  let lista1 = lista.slice(0, numero - 1);
  return `lista1: ${lista1}, lista2: ${lista2}`;
}

const miLista1 = [7, 35, 21, 14, 7, 28, 13, 14, 15, 17, 18];
const indice = 5;
const sublista = dividirLista(miLista1, indice);
console.log(sublista);
