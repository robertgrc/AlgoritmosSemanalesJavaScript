//* Dada una lista de números, utiliza map para crear una nueva lista que contenga el doble de cada número.

function DobleListaNumeros(lista) {
  return lista.map((numero) => numero * 2);
}

// Ejemplo de uso:
const miLista = [4, 2, 5, 2, 7, 2, 9, 2];
const dobleLista = DobleListaNumeros(miLista);

console.log(`El doble de la lista ${miLista} es: ${dobleLista}`);
