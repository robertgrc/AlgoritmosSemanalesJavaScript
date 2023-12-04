//* Dado un arreglo de numeros y un indice devolver desde ese indice los siguientes numeros

function obtenerPrimeros(lista, numero) {
  const listaNumeros = lista.slice(numero);
  return listaNumeros;
}

const miLista1 = [7, 35, 21, 14, 7, 28, 13, 14, 15, 17, 18];
const numeroItems = 6;
const sublista = obtenerPrimeros(miLista1, numeroItems);
console.log(sublista);
