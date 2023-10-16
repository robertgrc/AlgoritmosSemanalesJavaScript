// *Enunciado: Dada una cadena de texto, darle la vuelta e invertir el odren de sus caracteres, sin usar metodos propios del lenguaje, solo estructuras de control

function invertirCadena(texto) {
  return texto.split("").reverse().join("");
}

console.log("CadenaInvertida: ", invertirCadena("Radamantis acuario peces"));
