//* Escribe un programa que calcule el factorial de un número entero leído por teclado.

function Factorial(numero) {
  let factorial = 1;
  for (let i = numero; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}
let numeroFactorial = Factorial(6);
console.log(`el Factorial de 6 es:${numeroFactorial}`);
