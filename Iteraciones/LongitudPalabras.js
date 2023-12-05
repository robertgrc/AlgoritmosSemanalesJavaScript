//* Dada una lista de palabras, utiliza map para crear una nueva lista que contenga la longitud de cada palabra

function CuentaLongitudPalabras(nombres) {
  return nombres.map((nombre) => nombre.length);
}

// Ejemplo de uso:
const listaNombres = ["Romeo", "Eyedol", "shevchenko", "caicedo", "Rodriguez"];
const longitudPalabras = CuentaLongitudPalabras(listaNombres);

console.log(
  `La longitud de las palabras: ${listaNombres} es: ${longitudPalabras}`
);
console.log(longitudPalabras);
