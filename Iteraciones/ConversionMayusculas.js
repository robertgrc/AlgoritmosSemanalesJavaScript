//* Dada una lista de strings, utiliza map para convertir todas las letras a mayúsculas.

function ConvertirMayusculas(nombres) {
  return nombres.map((nombre) => nombre.toUpperCase());
}

// Ejemplo de uso:
const listaNombres = ["Romeo", "Eyedol", "shevchenko", "caicedo", "Rodriguez"];
const convertidoMayusculas = ConvertirMayusculas(listaNombres);

console.log(`convertido a Mayusculas: ${convertidoMayusculas}`);
console.log(convertidoMayusculas);
