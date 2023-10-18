//* Dado un string ponerlo por completo en mayusculas o minusculas dependiendo de si hay mas mayusculas o minusculas por defecto en el string
//* Si hay mas mayusculas ponerlo todo en mayusculas
//* Si hay mas minusculas ponerlo todo en minusculas
//* Ejemplos mayusMinus("JOAQuin") // devuelve JOAQUIN
//* Ejemplos mayusMinus("Camila") // devuelve camila

function cambiaMayusculasMinusculas(texto) {
  let contadorMayusculas = 0;
  let contadorMinusculas = 0;
  let textoConvertido = "";

  for (let letra of texto) {
    if (/[A-Z]/.test(letra)) {
      contadorMayusculas += 1;
    } else if (/[a-z]/.test(letra)) {
      contadorMinusculas += 1;
    }
  }
  console.log(contadorMayusculas, contadorMinusculas);
  contadorMayusculas > contadorMinusculas
    ? (textoConvertido = texto.toUpperCase())
    : (textoConvertido = texto.toLowerCase());
  return textoConvertido;
}

console.log(cambiaMayusculasMinusculas("Siri Lanka SALAMANCA"));
console.log(cambiaMayusculasMinusculas("Bolivia City"));
