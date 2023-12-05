//* Escribe un programa que solicite al usuario un número entero positivo y luego sume todos los números pares desde 2 hasta ese número.

function SumaPares(numero) {
  let sumatoria = 0;
  for (let i = 2; i < numero; i++) {
    if (i % 2 === 0) {
      sumatoria += i;
    }
  }
  return sumatoria;
}

console.log(SumaPares(21));
//expected 110
