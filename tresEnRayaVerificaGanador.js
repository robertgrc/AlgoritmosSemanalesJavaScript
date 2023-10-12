function verificarGanador(matriz) {
  // Comprobar filas, columnas y diagonales para "X" y "O"
  for (let jugador of ["X", "O"]) {
    // Comprobar filas y columnas
    for (let i = 0; i < 3; i++) {
      if (
        (matriz[i][0] === jugador &&
          matriz[i][1] === jugador &&
          matriz[i][2] === jugador) ||
        (matriz[0][i] === jugador &&
          matriz[1][i] === jugador &&
          matriz[2][i] === jugador)
      ) {
        return jugador; // Jugador ha ganado
      }
    }

    // Comprobar diagonales
    if (
      (matriz[0][0] === jugador &&
        matriz[1][1] === jugador &&
        matriz[2][2] === jugador) ||
      (matriz[0][2] === jugador &&
        matriz[1][1] === jugador &&
        matriz[2][0] === jugador)
    ) {
      return jugador; // Jugador ha ganado
    }
  }

  // Comprobar empate
  let empate = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matriz[i][j] === "") {
        empate = false;
        break;
      }
    }
  }
  if (empate) {
    return "Empate"; // Ha habido un empate
  }

  // Comprobar nulo
  let conteoX = 0;
  let conteoO = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matriz[i][j] === "X") {
        conteoX++;
      } else if (matriz[i][j] === "O") {
        conteoO++;
      }
    }
  }

  if (conteoX === conteoO || Math.abs(conteoX - conteoO) > 1) {
    return "Nulo"; // Proporción incorrecta o ambos jugadores ganaron
  }

  return "Nulo"; // Si no se cumple ninguna condición, se considera nulo
}

// Ejemplo de uso
const matrizJuego = [
  ["O", "O", "X"],
  ["O", "X", "X"],
  ["X", "O", "O"],
];

const resultado = verificarGanador(matrizJuego);
console.log(resultado); // Salida: "X"
