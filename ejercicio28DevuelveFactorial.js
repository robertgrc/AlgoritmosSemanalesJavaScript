//* Dado un numero devolver su factorial
//* El factorial de un numero es la multiplicacion de todos los numeros hasta llegar a el
//* Ejemplos  factorial(3); ==> devuelve 1*2*3 = 6

function factorial(numero) {
  let numeroFactorial = 1;
  for (let i = numero; i > 0; i--) {
    numeroFactorial *= i;
  }
  return numeroFactorial;
}

console.log(factorial(7));
