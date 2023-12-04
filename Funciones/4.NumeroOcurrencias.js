//* Escribe una función llamada contarOcurrencias que tome una lista y un elemento como parámetros, y devuelva el número de veces que el elemento aparece en la lista.

function contarOcurrencias(lista, elemento) {
  let contador = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      contador++;
    }
  }
  return contador;
}

let listaAnimales = [
  "loro",
  "perro",
  "gato",
  "tucan",
  "gato",
  "camaleon",
  "gato",
];

console.log(contarOcurrencias(listaAnimales, "gato"));
