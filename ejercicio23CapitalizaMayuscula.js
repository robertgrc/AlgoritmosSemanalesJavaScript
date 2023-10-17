//*Enunciado
//*Dada una cadena de texto, poner en mayuscula la primera letra de cada palabra en la cadena y luego devolver la cadena
//* Ejemplos: enMayuscula('en un principio') ==> devuelve 'En un principio'

function enMayuscula(cadena) {
  // Dividir la cadena en palabras
  let palabras = cadena.split(" ");
  // Recorrer cada palabra y poner en mayúscula la primera letra
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  }
  //Unir las palabras nuevamente en una cadena
  let resultado = palabras.join(" ");
  return resultado;
}

console.log(enMayuscula("en un principio"));
