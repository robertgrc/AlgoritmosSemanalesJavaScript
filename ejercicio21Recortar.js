//* Enunciado
//* Dada una cadena de texto y un numero, recortar el string mostando los x primeros caracteres
//* Ejemplos ==>   recortar('Cursos Desarrollo Web', 6) //devuelve:'Cursos'

// function recortar(cadena, numero) {
//   let cadenaCortada = cadena.slice(0, numero);
//   return cadenaCortada;
// }

// console.log(recortar("Cursos Desarrollo Web", 14));

function recortar(cadena, numero) {
  let resultado = "";
  for (let i = 0; i < numero && i < cadena.length; i++) {
    resultado += cadena[i];
  }
  return resultado;
}

console.log(recortar("Cursos Desarrollo Web", 14));
