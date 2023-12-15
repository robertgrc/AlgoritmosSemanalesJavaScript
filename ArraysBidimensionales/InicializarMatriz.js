// Inicializar una matriz vacía
const matrizBidimensional = [];

// Llenar la matriz con valores
for (let i = 0; i < 3; i++) {
  matrizBidimensional[i] = [];
  for (let j = 0; j < 3; j++) {
    matrizBidimensional[i][j] = i * 3 + j + 1;
  }
}

// Acceder a un elemento
console.log(matrizBidimensional[1][2]); // Salida: 6
