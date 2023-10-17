//* enunciado Dada una cadena de texto, devolver cuantas vocales(a,e,i,o,u) tiene

//* ejemplo  vocales "victorroblesweb.es" Devuelve:6

function devuelveVocales(paragraph) {
  const regex = /[aeiou]/gi;
  let coincidencias = paragraph.match(regex);
  console.log(coincidencias);
  return coincidencias.length;
}

const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";

console.log(`Numero de vocales`, devuelveVocales(paragraph));
