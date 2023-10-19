//* Dado un texto devolver cuantas consonantes y cuantas vocales

//* Ejemplo cuentaLetras("Bereshit barak");
//* Devuelve: consonantes:8, vocales:5

function cuentaLetras(texto) {
  let consonantes = 0,
    vocales = 0,
    texto_limpio = "";

  texto_limpio = texto
    .split("")
    .filter((letra) => /[áéíóú\w]/gi.test(letra) && isNaN(letra))
    .join("");
  for (let letra of texto_limpio) {
    if (/[aeiouáéíóú]/gi.test(letra)) {
      vocales++;
    } else {
      consonantes++;
    }
  }
  return `consonantes:${consonantes}, vocales:${vocales}`;
}

console.log(cuentaLetras("AEBereshit ..*- barak1234123"));
