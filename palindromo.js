// * Los palindromos son palabras que se leen igual aun estando invertidas
// * Por ejemplo: ana, bob, otto, allivessevilla
// no tener en cuenta espacios o simbolos raros
// *palindromo("otto") //devuelve: true
// *palindromo("victor") //devuelve: false

// como hacerlo:
// -funcion con parametro "texto"
// -Separar el texto en un array de letras
// -Darle vuelta
// -unir el array de letras en un string y comparar el parametro

function palindromo(str1) {
  let invertido = str1.split("").reverse().join("");
  if (str1 === invertido) {
    return true;
  } else {
    return false;
  }
}
let cadena = "Anna";
let cadena2 = "anna";
console.log(palindromo(cadena));
console.log("Es un palindromo? " + palindromo(cadena2));
