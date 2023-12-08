//* Realiza un programa que pinte una pirámide por pantalla. La altura se debe pedir por teclado. El carácter con el que se pinta la pirámide también se debe pedir por teclado.

function Piramide(altura, caracter) {
  for (let i = 1; i <= altura; i++) {
    let espacios = " ".repeat(altura - i);
    let linea = caracter.repeat(2 * i - 1);
    console.log(espacios + linea);
  }
}

let altura = 8;
let caracter = "*";

Piramide(altura, caracter);
