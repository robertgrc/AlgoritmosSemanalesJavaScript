//* Dado un numero  indicar si es capicua o no
//* los numeros capicua se leen igual de izquierda a derecha o viceversa
//* Ejemplos capicua(2002) devuelve true
//* Ejemplos capicua(2023) devuelve false

function esCapicua(numero) {
  // Convierte el número en una cadena de caracteres
  const cadenaNumero = numero.toString();
  // Invierte la cadena de caracteres
  let cadenaInvertida = cadenaNumero.split("").reverse().join("");
  console.log(cadenaInvertida);
  // Compara la cadena original con la cadena invertida
  return cadenaNumero === cadenaInvertida;
}

console.log(esCapicua(7117));
console.log(esCapicua(7137));
