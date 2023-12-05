//* Dada una lista de palabras, utiliza map para reemplazar todas las vocales con el carácter "*" en cada palabra.

function ReemplazaPorCaracter(lista, caracter) {
  return lista.map((elemento) => elemento.replace(/[aeiouAEIOU]/g, caracter));
}

let Lista = ["agil", "lento", "veloz", "inteligente"];
let caracter = "*";
let conCaracter = ReemplazaPorCaracter(Lista, caracter);
console.log(conCaracter);
