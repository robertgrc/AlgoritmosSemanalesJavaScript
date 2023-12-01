//*  Escribir una función que dada una cadena de caracteres, devuelva:
//* a) La primera letra de cada palabra. Por ejemplo, si recibe 'Universal Serial Bus' debe devolver 'USB'.

function DevuelvePrimerasLetrasCapitalizadas(inputString) {
  let PrimerasLetrasMayuscula = inputString[0].toUpperCase();
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === " ") {
      PrimerasLetrasMayuscula += inputString[i + 1];
    }
  }
  return PrimerasLetrasMayuscula;
}

console.log(DevuelvePrimerasLetrasCapitalizadas("Universal Serial Bus"));

//*Version2

function primeraLetraDeCadaPalabra(cadena) {
  const palabras = cadena.split(" ");
  console.log(palabras);
  const letras = palabras.map((palabra) => {
    return palabra.charAt(0).toUpperCase();
  });

  return letras.join("");
}

// Ejemplo de uso
const resultado = primeraLetraDeCadaPalabra("Universal serial bus");
console.log(resultado); // Devuelve 'USB'

//* cadena.split(' ') divide la cadena en un array de palabras utilizando el espacio como //separador.
//* palabras.map(palabra => palabra.charAt(0)) crea un nuevo array con las primeras letras de cada palabra.
//* letras.join('') une las letras en una cadena.
