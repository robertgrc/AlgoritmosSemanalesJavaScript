//* Dado un string devolver todos los posibles subStrings
//* ejemplo  subStrings("hola")
//* ['h','o','l','a', 'ho','ol, 'la', 'hol, 'ola']

function subStrings(palabra) {
  let substrings = [];

  for (let letra in palabra) {
    let comienzo = parseInt(letra);
    for (let i = 0; i <= palabra.length - comienzo; i++) {
      let final = parseInt(i) + parseInt(comienzo);
      substrings.push(palabra.substring(comienzo, final));
    }
  }
  return substrings.filter((elemento) => elemento.length >= 1);
}
console.log(subStrings("hola"));

//*-------------------------------------
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
