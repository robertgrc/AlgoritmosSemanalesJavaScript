//* Dado un string devolver todos los posibles subStrings
//* ejemplo  subStrings("hola")
//* ['h','o','l','a', 'ho','ol, 'la', 'hol, 'ola']

function subStrings(inputString) {
  const substrings = []; // Creamos un arreglo para almacenar las subcadenas

  for (let i = 0; i < inputString.length; i++) {
    for (let j = i + 1; j <= inputString.length; j++) {
      // El primer bucle (i) controla el inicio de la subcadena
      // El segundo bucle (j) controla el final de la subcadena

      const substring = inputString.slice(i, j); // Usamos el método .slice() para extraer la subcadena
      substrings.push(substring); // Agregamos la subcadena al arreglo de subcadenas
    }
  }

  return substrings; // Devolvemos el arreglo con todas las subcadenas generadas
}

const input = "hola";
const result = subStrings(input);
console.log(result);

//*--------------------------------------------

function subStrings2(inputString) {
  const substrings = [];

  for (let char of inputString) {
    let substring = "";
    for (let char2 of inputString) {
      substring += char2;
      substrings.push(substring);
    }
  }

  return substrings;
}

const input2 = "love";
const result2 = subStrings2(input2);
console.log(result2);
