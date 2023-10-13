// * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
// * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
// * - La función recibe un listado que contiene pares, representando cada jugada.
// * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
// * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".

function calcularGanador(partidas) {
  const puntaje = { "Player 1": 0, "Player 2": 0 };

  for (const jugada of partidas) {
    const [jugador1, jugador2] = jugada;
    if (jugador1 === jugador2) {
      continue; // Empate, no suma puntos a ningún jugador
    } else if (
      (jugador1 === "R" && jugador2 === "S") ||
      (jugador1 === "S" && jugador2 === "P") ||
      (jugador1 === "P" && jugador2 === "R")
    ) {
      puntaje["Player 1"]++;
    } else {
      puntaje["Player 2"]++;
    }
  }

  if (puntaje["Player 1"] > puntaje["Player 2"]) {
    return "Player 1";
  } else if (puntaje["Player 2"] > puntaje["Player 1"]) {
    return "Player 2";
  } else {
    return "Tie";
  }
}

// Ejemplo de entrada
const partidas = [
  ["R", "R"],
  ["S", "S"],
  ["P", "P"],
];
const resultado = calcularGanador(partidas);
console.log("Resultado:", resultado);
