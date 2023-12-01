//*  Escribir una función que dada una cadena de caracteres, devuelva:
//* b) Dicha cadena con la primera letra de cada palabra en mayúsculas. Por ejemplo, si recibe 'república argentina' debe devolver 'República Argentina'.

function PoneEnMayusculas(inputString) {
  let palabras = inputString.split(" ");
  const palabrasCapitalizadas = palabras.map((palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  });
  const cadenaCapitalizada = palabrasCapitalizadas.join(" ");
  return cadenaCapitalizada;
}

console.log(PoneEnMayusculas("república argentina"));

//* En esta función, split(' ') se utiliza para dividir la cadena en palabras,==> ['republica','argentina']
//* palabra.charAt(0): Esto obtiene el carácter en la posición 0 de la cadena palabra, es decir, la primera letra de la palabra.

//* palabra.slice(1): Esto obtiene una subcadena de palabra que comienza desde el índice 1 en adelante. En otras palabras, esto toma el resto de la palabra después de la primera letra.

function PonerEnMayusculas(cadena) {
  let palabras = cadena.split(" ");
  let resultado = [];
  for (let i = 0; i < palabras.length; i++) {
    resultado.push(palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1));
  }
  let capitalizado = resultado.join(" ");
  return capitalizado;
}

console.log(PonerEnMayusculas("república de bolivia"));
