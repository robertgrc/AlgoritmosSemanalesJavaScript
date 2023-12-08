//* Escribe un programa que muestre los n primeros términos de la serie de Fibonacci. El primer término de la serie de Fibonacci es 0, el segundo es 1 y el resto se calcula sumando los dos anteriores, por lo que tendríamos que los términos son 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144… El número n se debe introducir por teclado.

function SerieFibonacci(cantidad) {
  let primerNumero = 0;
  let segundoNumero = 1;
  let sumatoria = 0;
  let serieFib = [0, 1];
  for (let i = 2; i <= cantidad; i++) {
    sumatoria = primerNumero + segundoNumero;
    serieFib.push(sumatoria);
    primerNumero = segundoNumero;
    segundoNumero = sumatoria;
  }
  return serieFib;
}

console.log(SerieFibonacci(14));
