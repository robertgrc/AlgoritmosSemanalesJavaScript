// *Enunciado: Dada una cadena de texto, darle la vuelta e invertir el odren de sus caracteres, sin usar metodos propios del lenguaje, solo estructuras de control

function invertirCadena(texto) {
  let cadenaInvertida = "";

  for (let letra of texto) {
    cadenaInvertida = letra + cadenaInvertida;
  }

  return cadenaInvertida;
}

console.log("CadenaInvertida: ", invertirCadena("Radamantis"));
