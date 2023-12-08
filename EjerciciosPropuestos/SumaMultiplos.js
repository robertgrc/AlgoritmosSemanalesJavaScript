//* Escribe un programa que muestre, cuente y sume los múltiplos de 3 que hay entre 1 y un número leído por teclado

function MuestraMultiplos(numero) {
  let acumulador = 0;
  for (let i = 1; i <= numero; i++) {
    i % 3 === 0 ? (acumulador += i) : acumulador;
  }
  return acumulador;
}

console.log(MuestraMultiplos(12));
//Expected = 30

//* mismo ejercicio version acortada
