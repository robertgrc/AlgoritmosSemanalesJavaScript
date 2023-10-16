//* Dada una palabra buscarla en una frase y devolver cuantas veces aparece en la frase y la palabra deben ser parametros de una funcion

//Como Hacerlo
// funcion con dos parametros "frase" y "busqueda"
// poner string en minusculas y limpiarlo
// Comprobar si la busqueda esta incluida en la frase
// Crear un array de palabras de la frase
// Mapear esas palabras y hacer un contador de cada una
// devolver el contador de la busqueda

function coincidencias(frase, busqueda) {
  let texto_limpio = frase.toLowerCase().replace(/[!#?,.-]/gi, " ");
  let resultado = 0;
  //   console.log(texto_limpio);
  if (texto_limpio.includes(busqueda)) {
    let palabras = texto_limpio.split(" ");
    let mapa = {};
    for (let palabra of palabras) {
      if (mapa[palabra]) {
        mapa[palabra]++;
      } else {
        mapa[palabra] = 1;
      }
    }
    resultado = mapa[busqueda];
  } else {
    resultado = 0;
  }
  return resultado;
}

console.log(
  "Numero de Coincidencias en la frase: ",
  coincidencias("Yeshua el rey justo,SANTO santo santo.", "yeshua")
);
