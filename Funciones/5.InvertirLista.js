//* Escribe una función llamada invertirLista que tome una lista como parámetro y devuelva una nueva lista con los elementos en orden inverso.

function invertirLista(lista) {
  let listaInvertida = [];
  for (let i = lista.length - 1; i >= 0; i--) {
    listaInvertida.push(lista[i]);
  }
  console.log(listaInvertida);
  return listaInvertida;
}

// Ejemplo de uso:
const miLista = [1, 2, 3, 4, 2, 5, 2, 7, 2, 9, 2];
const cantidadDeVeces = invertirLista(miLista);

console.log(`La lista Invertida => ${cantidadDeVeces}`);

function ListaInvertida(lista) {
  const lista1 = lista.slice();
  console.log("lista1", lista1);
  const listaInvertida = lista.slice().reverse();
}

// Ejemplo de uso:
const miLista2 = [1, 2, 3, 4, 5];
const listaInvertida = ListaInvertida(miLista2);
console.log(listaInvertida); // Salida: [5, 4, 3, 2, 1]
