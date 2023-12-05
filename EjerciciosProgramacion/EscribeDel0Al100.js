//* Escribir todos los números del 100 al 0 de 7 en 7.

function EscribeNumeros(numero) {
  let numeroMultiploSiete = [];
  for (let i = 0; i <= 100; i += numero) {
    numeroMultiploSiete.push(i);
  }
  return numeroMultiploSiete;
}

console.log(EscribeNumeros(7));
//*------------------------------------------
function EscribeNumerosV2(numero) {
  let numeroMultiploSiete = [];
  for (let i = 100; i >= 0; i -= numero) {
    numeroMultiploSiete.push(i);
  }
  return numeroMultiploSiete;
}

console.log(EscribeNumerosV2(7));
