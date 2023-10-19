//* Dado un array de strings devolver otro con los valores que esten formados por mas de dos palabras

//* ejemplo dosPalabras(["hola", "san francisco", "ciudad real", "victor"])
//* devuelve:  ["San Francisco", "ciudad real"]

function textoConMasDeDosPalabras(arreglo) {
  let arregloMasDeDosPalabras = [];

  for (palabra of arreglo) {
    if (palabra.split(" ").length >= 3) {
      arregloMasDeDosPalabras.push(palabra);
    }
  }
  return arregloMasDeDosPalabras;
}

console.log(
  textoConMasDeDosPalabras([
    "hola",
    "san francisco",
    "ciudad real vardrid",
    "victor",
  ])
);
