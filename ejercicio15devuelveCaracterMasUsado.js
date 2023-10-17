//* Enunciado Dada una cadena de texto devolver el caracter mas usado.

//* ejemplos
//* masUsado("roblesweb.es")   ==> devuelve lo que mas se repite es e

function masUsado(cadena) {
  let mapeo_letras = {};
  let maximo_repeticiones = 0;
  let letra_mas_repetida = "";
  for (letra of cadena) {
    if (!mapeo_letras[letra]) {
      mapeo_letras[letra] = 1;
    } else {
      mapeo_letras[letra]++;
    }
  }
  for (let letra in mapeo_letras) {
    if (mapeo_letras[letra] > maximo_repeticiones) {
      maximo_repeticiones = mapeo_letras[letra];
      letra_mas_repetida = letra;
    }
  }
  return letra_mas_repetida;
}

let cadena = "roblesweb.es pagina oficial de facebook en instagram";
console.log(`letra mas repetida en la cadena ${cadena} es:`, masUsado(cadena));
