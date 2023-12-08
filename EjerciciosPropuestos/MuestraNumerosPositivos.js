//* Escribe un programa que muestre por pantalla todos los números enteros positivos menores a uno leído por teclado que no sean divisibles entre otro también leído de igual forma.

function muestraPositivos(menores, divisiblesEntre) {
  let divisibles = [];
  for (let i = 1; i <= 30; i++) {
    if (i % divisiblesEntre !== 0) {
      divisibles.push(i);
    }
  }
  return divisibles;
}

let Limite = 30;
let divisiblesEntre = 3;

console.log(muestraPositivos(Limite, divisiblesEntre));
