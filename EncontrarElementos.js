// * Enunciado: Crea una función que reciba dos array, un booleano y retorne un array.
// * - Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
// * - Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
// * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.

function encontrarElementos(array1, array2, buscarComunes) {
  const resultado = [];

  if (buscarComunes) {
    for (const elemento of array1) {
      if (array2.includes(elemento)) {
        resultado.push(elemento);
      }
    }
  } else {
    for (const elemento of array1) {
      if (!array2.includes(elemento)) {
        resultado.push(elemento);
      }
    }
    for (const elemento of array2) {
      if (!array1.includes(elemento)) {
        resultado.push(elemento);
      }
    }
  }

  return resultado;
}

// Ejemplo de uso:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const buscarComunes = true;

const resultado = encontrarElementos(array1, array2, buscarComunes);
console.log("Elementos comunes:", resultado);

const buscarNoComunes = false;
const resultadoNoComunes = encontrarElementos(array1, array2, buscarNoComunes);
console.log("Elementos no comunes:", resultadoNoComunes);
