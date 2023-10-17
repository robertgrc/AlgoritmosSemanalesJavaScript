//* Enunciado
//* Dado un numero mostrar los numeros de 1 hasta el numero.
// *Pero para multiplos de tres imprimir "buzz" en lugar del numero y para los multiplos de 5 imprimir"lightyear" para multiplos de 3 y 5 imprimir BuzzLightyear

function buzzLightyear(numero) {
  for (let num = 1; num <= numero; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("BuzzLigthyear");
    } else if (num % 3 === 0) {
      console.log("Buzz");
    } else if (num % 5 === 0) {
      console.log("Lightyear");
    } else {
      console.log(num);
    }
  }
}

console.log(buzzLightyear(100));
