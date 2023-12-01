//* Escribir funciones que dada una cadena y un caracter:
//*a) Inserte el caracter entre cada letra de la cadena. Ej: 'separar' y ',' debería devolver 's,e,p,a,r,a,r'
function InsertarCaracter(cadena, caracter) {
  let resultado = cadena[0];
  for (let i = 1; i < cadena.length; i++) {
    resultado += caracter + cadena[i];
  }
  return resultado;
}

let cadenaConComa = InsertarCaracter("separar", ",");
console.log(cadenaConComa);
//*b) Reemplace todos los espacios por el caracter. Ej: 'mi archivo de texto.txt' y '_' debería devolver 'mi_archivo_de_texto.txt'

function ReemplazaEspacios(cadena, caracter) {
  let resultado = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === " ") {
      resultado += caracter;
    } else {
      resultado += cadena[i];
    }
  }
  return resultado;
}
let reemplazaCaracter = ReemplazaEspacios("mi archivo de texto.txt", "_");
console.log(reemplazaCaracter);
//*c) Reemplace todos los dígitos en la cadena por el caracter. Ej: 'su clave es: 1540' y'X' debería devolver 'su clave es: XXXX'

function reemplazarDigitosConCaracter(inputString, caracter) {
  // Utilizar expresión regular para reemplazar todos los dígitos con el carácter
  var resultado = inputString.replace(/\d/g, caracter);

  // Imprimir el resultado
  console.log(resultado);
}

// Ejemplo de uso
reemplazarDigitosConCaracter("su clave es: 1540", "X");

function reemplazarDigitosConCaracterFor(inputString, caracter) {
  // Verificar que la cadena tenga al menos un caracter
  if (inputString.length < 1) {
    return "La cadena debe tener al menos un caracter.";
  }

  // Inicializar la cadena de salida
  var resultado = "";

  // Iterar sobre la cadena
  for (var i = 0; i < inputString.length; i++) {
    // Verificar si el carácter actual es un dígito
    if (/\d/.test(inputString[i])) {
      // Si es un dígito, agregar el carácter de reemplazo
      resultado += caracter;
    } else {
      // Si no es un dígito, mantener el carácter original
      resultado += inputString[i];
    }
  }

  // Imprimir el resultado
  console.log(resultado);
}

// Ejemplo de uso
reemplazarDigitosConCaracterFor("su clave es: 1540", "X");

//*d) Inserte el caracter cada 3 dígitos en la cadena. Ej. '2552552550' y '.' debería devolver'255.255.255.0'

function InsertaCadaTresDigitos(cadena, caracter) {
  let resultado = "";
  resultado = cadena.slice(0, 3);
  for (let i = 3; i < cadena.length; i += 3) {
    resultado += caracter + cadena.slice(i, i + 3);
  }
  console.log(resultado);
}

InsertaCadaTresDigitos("2552552550", ".");
