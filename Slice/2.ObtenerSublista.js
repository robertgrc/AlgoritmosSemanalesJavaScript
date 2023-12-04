//* Escribe una función llamada obtenerSublista que tome una lista y dos índices como parámetros, y devuelva una nueva lista que contenga los elementos desde el índice de inicio hasta el índice de fin (sin incluirlo).

function obtenerSublista(lista, indiceInicio, indiceFin) {
  return lista.slice(indiceInicio, indiceFin);
}

const miLista1 = [7, 35, 21, 14, 7, 28, 13, 14, 15, 17, 18];
const inicio = 7;
const fin = 10;
const sublista = obtenerSublista(miLista1, inicio, fin);
console.log(sublista);
