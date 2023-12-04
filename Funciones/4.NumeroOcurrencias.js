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
let elemento = "gato";
let cantidadDeRepeticiones = contarOcurrencias(listaAnimales, elemento);
console.log(`El elemento ${elemento} aparece ${cantidadDeRepeticiones}`);

//* mismo ejercicio usando funcion filter

function cuentaOcurrencias(lista, elemento) {
  return lista.filter((item) => item === elemento).length;
}

// Ejemplo de uso:
const miLista = [1, 2, 3, 4, 2, 5, 2, 7, 2, 9, 2];
const elementoBuscado = 2;
const cantidadDeVeces = cuentaOcurrencias(miLista, elementoBuscado);

console.log(`El elemento ${elementoBuscado} aparece ${cantidadDeVeces}`);
