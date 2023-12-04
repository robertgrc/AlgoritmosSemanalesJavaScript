//* Dado un arreglo de palabras, encuentra la suma de las longitudes de todas las palabras.

function SumaLongitudesPalabras(inputString) {
  let SumatoriaPalabras = inputString.reduce((acumulado, palabra) => {
    return acumulado + palabra.length;
  }, 0);
  return SumatoriaPalabras;
}

const palabras = ["JavaScript", "es", "genial", "y", "poderoso"];
const resultado = SumaLongitudesPalabras(palabras);
console.log(`La suma de las longitudes de las palabras es: ${resultado}`);
