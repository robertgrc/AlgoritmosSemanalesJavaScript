//* Escribe un programa que, dado un número entero positivo, diga cuáles son y cuánto suman los dígitos pares. Los dígitos pares se deben mostrar en orden, de izquierda a derecha. Usa long en lugar de int donde sea necesario para admitir números largos.

function CuentaPares(numero) {
  let acumuladorPares = 0;
  let digitosPares = [];
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      acumuladorPares += i;
      digitosPares.push(i);
    }
  }
  console.log(digitosPares);
  return { acumuladorPares, digitosPares };
}

console.log(CuentaPares(10));
