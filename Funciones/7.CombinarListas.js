//* Escribe una función llamada combinarListas que tome dos listas como parámetros y devuelva una nueva lista que sea la combinación de ambas.

function combinarListas(lista1, lista2) {
  let listaCombinada = lista1;
  for (let i = 0; i < lista2.length; i++) {
    listaCombinada.push(lista2[i]);
  }
  return listaCombinada;
}

const miLista1 = [7, 35, 21, 14, 7, 28];
const miLista2 = [1, 2, 3, 4, 5];
const listaCombinada = combinarListas(miLista1, miLista2);
console.log(listaCombinada);

function combinaListas(lista1, lista2) {
  return [...lista1, ...lista2];
}

const miLista3 = [7, 35, 21, 14, 7, 28];
const miLista4 = [1, 2, 3, 4, 5];
const listaCombinada2 = combinaListas(miLista3, miLista4);
console.log(listaCombinada2);

//* En JavaScript, el operador de propagación (...) se utiliza para descomponer o desempaquetar elementos de una estructura iterable (como un array) y colocarlos en otro lugar. En este caso específico, se está utilizando para combinar dos arrays en uno solo.

//* ...lista1: Esto toma todos los elementos de lista1 y los coloca individualmente en la nueva //* lista.
//* ...lista2: Lo mismo se hace con todos los elementos de lista2.
//* Entonces, la línea de código return [...lista1, ...lista2]; es equivalente a decir "crea un nuevo array que contenga todos los elementos de lista1 seguidos por todos los elementos de lista2".
