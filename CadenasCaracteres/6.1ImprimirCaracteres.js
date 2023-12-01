//* Escribir funcion que dada una cadena de caracteres
//* a) Imprima los dos primeros caracteres.

function imprimeDosPrimerosCaracteres(cadena) {
  let primerosDosCaracteres = "";
  for (let i = 0; i <= 1; i++) {
    primerosDosCaracteres += cadena[i];
  }
  return "Los primeros dos caracteres son: " + primerosDosCaracteres;
}

let primerosCaracteres = imprimeDosPrimerosCaracteres("comida");
console.log(primerosCaracteres);

//* b) Imprima los tres ultimos caracteres

function imprimeTresUltimosCaracteres(cadena) {
  let ultimostresCaracteres = "";
  for (let i = cadena.length - 3; i < cadena.length; i++) {
    ultimostresCaracteres += cadena[i];
  }
  return "Los últimos tres caracteres son: " + ultimostresCaracteres;
}

let resultado = imprimeTresUltimosCaracteres("asterix");
console.log(resultado);

//* c) Imprima dicha cadena cada dos caracteres. Ej.: 'recta' debería imprimir 'rca'

function imprimeCadaDosCaracteres(cadena) {
  if (cadena.length < 3) {
    return "La cadena debe tener al menos tres caracteres";
  }
  let resultado = "";
  for (let i = 1; i < cadena.length; i += 2) {
    resultado += cadena[i];
  }
  return resultado;
}
let cadaDosImprime = imprimeCadaDosCaracteres("manchester");
console.log(cadaDosImprime);

//* d) Dicha cadena en sentido inverso. Ej.: 'hola mundo!' debe imprimir '!odnum aloh'

function imprimeSentidoInverso(cadena) {
  let cadenaInversa = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInversa += cadena[i];
  }
  return "La cadena inversa: " + cadenaInversa;
}
let inverso = imprimeSentidoInverso("hola mundo");
console.log(inverso);

//* e) Imprima la cadena en un sentido y en sentido inverso. Ej: 'reflejo' imprime
("reflejoojelfer");

function imprimeEnAmbosSentidos(cadena) {
  let resultado = "";
  for (let i = 0; i <= cadena.length - 1; i++) {
    resultado += cadena[i];
  }
  for (let j = cadena.length - 1; j >= 0; j--) {
    resultado += cadena[j];
  }
  return "La cadena en ambos sentidos: " + resultado;
}
let Imprime = imprimeEnAmbosSentidos("hola");
console.log(Imprime);
