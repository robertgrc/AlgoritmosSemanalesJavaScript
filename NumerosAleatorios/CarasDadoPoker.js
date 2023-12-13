//* Las caras de un dado de poker tienen las siguientes figuras: As, K, Q, J, 7 y 8. Escribe un programa que genere de forma aleatoria la tirada de cinco dados.

// Ejemplo 1:
// Q J 7 J As
// Ejemplo 2:
// K 8 J As

function CarasDadoPoker() {
  let figura = ["As", "K", "Q", "J", "7", "8"];

  let tirada = [];

  for (let i = 0; i < 5; i++) {
    let caraAleatoria = figura[Math.floor(Math.random() * figura.length)];
    tirada.push(caraAleatoria);
  }
  return tirada;
}

console.log(CarasDadoPoker());
