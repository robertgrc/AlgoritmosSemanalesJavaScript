//* Escribir funciones que dada una cadena de caracteres:

//*a) Devuelva solamente las letras consonantes. Por ejemplo, si recibe 'algoritmos' o'logaritmos' debe devolver 'lgrtms'.

function DevuelveLetrasConsonantes(inputString) {
  let consonantes = "";
  for (let i = 0; i < inputString.length; i++) {
    const caracterActual = inputString[i].toLowerCase();
    if ("bcdfghjklmnpqrstvwxyz".includes(caracterActual)) {
      consonantes += inputString[i];
    }
  }
  return consonantes;
}

console.log(DevuelveLetrasConsonantes("Logaritmos"));

//* forma Acortada con funcion .match

function obtenerConsonantes(cadena) {
  // Utilizar una expresión regular para obtener solo las consonantes
  const consonantes = cadena.match(/[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]+/g);

  // Unir las consonantes encontradas para formar la cadena resultante
  return consonantes ? consonantes.join("") : "";
}

// Ejemplo de uso
console.log(obtenerConsonantes("algoritmos")); // Devuelve "lgrtms"

//*b) Devuelva solamente las letras vocales. Por ejemplo, si recibe 'sin consonantes' debe devolver 'i ooae'.

function obtenerVocales(inputString) {
  let vocales = "";
  for (let i = 0; i < inputString.length; i++) {
    const caracterActual = inputString[i].toLowerCase();
    if ("aeiou".includes(caracterActual)) {
      vocales += caracterActual;
    }
  }
  return vocales;
}

console.log(obtenerVocales("Aramayo heucalipto murcielago"));
//* version acortada
function devuelveLetrasVocales(inputString) {
  return Array.from(inputString)
    .filter((char) => "aeiouAEIOU".includes(char))
    .join("");
}

console.log(devuelveLetrasVocales("sin consonantes"));
//Explicacion Array.from(inputString): Este método convierte la cadena inputString en un array de caracteres. Por ejemplo, Array.from("sin consonantes") crea un array que contiene los caracteres individuales de la cadena.

//filter(char => "aeiouAEIOU".includes(char)): El método filter se utiliza para retener solo los caracteres que están incluidos en la cadena de vocales ("aeiouAEIOU"). Se proporciona una función de filtro que verifica si cada caracter está presente en la cadena de vocales.

//join(''): Finalmente, el método join('') se utiliza para convertir el array resultante de caracteres de vuelta a una cadena, uniendo todos los elementos sin ningún separador.

//*c) Reemplace cada vocal por su siguiente vocal. Por ejemplo, si recibe 'vestuario' debe devolver 'vistaerou'.

function reemplazaVocalPorSiguiente(inputString) {
  const vocales = "aeiouAEIOU";
  let resultado = "";
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    switch (char) {
      case "a":
        resultado += "e";
        break;
      case "e":
        resultado += "i";
        break;
      case "i":
        resultado += "o";
        break;
      case "o":
        resultado += "u";
        break;
      case "u":
        resultado += "a";
        break;
      case "A":
        resultado += "E";
        break;
      case "E":
        resultado += "I";
        break;
      case "I":
        resultado += "O";
        break;
      case "O":
        resultado += "U";
        break;
      case "U":
        resultado += "A";
        break;

      default:
        resultado += char;
    }
  }
  return resultado;
}

console.log(reemplazaVocalPorSiguiente("vesTUArio"));

//*mismo ejercicio con For
function reemplazarVocalesPorSiguienteConFor(inputString) {
  const vocales = "aeiouAEIOU";
  let resultado = "";

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (vocales.includes(char)) {
      const indice = vocales.indexOf(char);
      const siguienteVocal = vocales[(indice + 1) % vocales.length];
      resultado += siguienteVocal;
    } else {
      resultado += char;
    }
  }

  return resultado;
}

console.log(reemplazarVocalesPorSiguienteConFor("vestUario"));

//*d) Indique si se trata de un palíndromo. Por ejemplo, 'anita lava la tina' es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).
function palindromo(inputString) {
  let cadenaSinEspacios = inputString.replace(/\s/g, "");
  let cadenaSinEspaciosMinuscula = "";
  let cadenaSinEspaciosMinusculaInvertido = "";
  let inverso = "";
  for (let i = 0; i < cadenaSinEspacios.length; i++) {
    let char = cadenaSinEspacios[i].toLowerCase();
    cadenaSinEspaciosMinuscula += char;
  }
  for (let i = cadenaSinEspacios.length - 1; i >= 0; i--) {
    let char = cadenaSinEspacios[i].toLowerCase();
    cadenaSinEspaciosMinusculaInvertido += char;
  }

  if (cadenaSinEspaciosMinuscula === cadenaSinEspaciosMinusculaInvertido) {
    return "Es Palindromo";
  } else {
    return "No es palindromo";
  }
}

console.log(palindromo("Anita lAvA la tIna"));
console.log(palindromo("anita cocina la tIna"));

//* mismo ejercico palindromo acortado con funciones
function esPalindromo(cadena) {
  // Eliminar espacios y convertir a minúsculas
  const cadenaSinEspacios = cadena.replace(/\s/g, "").toLowerCase();

  // Comparar con la cadena revertida
  const cadenaRevertida = cadenaSinEspacios.split("").reverse().join("");

  // Verificar si es un palíndromo
  return cadenaSinEspacios === cadenaRevertida;
}

// Ejemplo de uso
console.log(esPalindromo("anita lava la tina")); // Devuelve true
console.log(esPalindromo("Hola mundo")); // Devuelve false

//*split('').reverse().join('')
//* split(''): Convierte la cadena en un array de caracteres.
//* reverse(): Invierte el orden de los elementos en el array.
//* join(''): Convierte el array invertido de nuevo en una cadena.

//*cadenaSinEspacios: Utiliza replace(/\s/g, '').toLowerCase() para eliminar los espacios y
//*convertir la cadena a minúsculas.
//*cadenaRevertida: Utiliza split('').reverse().join('') para obtener la cadena revertida.
