//* Enunciado
//* Dadas dos cadenas de texto crear un algoritmo que compruebe si son anagramas entre si
//* una cadena es anagrama de otra si usa los mismos caracteres en la misma cantidad
//* ejemplos anagramas('Riesgo', 'Sergio') //devuelve true
//* ejemplos anagramas('paola', 'camila') //devuelve false

function limpiarTexto(texto) {
  return texto
    .replace(/[^\w}]/gi, "")
    .toLowerCase()
    .split("")
    .sort()
    .join();
}

function anagramas(texto1, texto2) {
  return limpiarTexto(texto1) === limpiarTexto(texto2);
}
string1 = "hola ";
string2 = "halo";

console.log(anagramas(string1, string2));
