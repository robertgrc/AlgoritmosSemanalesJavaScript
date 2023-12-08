//* Muestra los números múltiplos de 5 de 0 a 100 utilizando un bucle for.

function MultiplosCinco() {
  let multiplos = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
      multiplos.push(i);
    }
  }
  return multiplos;
}

MultiplosCinco();
console.log(MultiplosCinco());
