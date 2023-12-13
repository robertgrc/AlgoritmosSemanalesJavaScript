//* Sinestesio y Casilda van a pintar los tres dormitorios de su casa, quieren sustituir el color blanco por colores más alegres. Realiza un programa que genere de forma aleatoria una secuencia de tres colores aleatorios (uno para cada dormitorio) de tal forma que no se repita ninguno. Los colores entre los que debe elegir el programa son los siguientes: rojo, azul, verde, amarillo, violeta y naranja.

function generarColoresAleatorios() {
  const coloresDisponibles = [
    "rojo",
    "azul",
    "verde",
    "amarillo",
    "violeta",
    "naranja",
  ];
  const coloresElegidos = [];

  for (let i = 0; i < 3; i++) {
    // Si ya no hay más colores disponibles, salir del bucle
    if (coloresDisponibles.length === 0) {
      break;
    }

    // Obtener un índice aleatorio
    const indiceAleatorio = Math.floor(
      Math.random() * coloresDisponibles.length
    );

    // Elegir un color aleatorio y agregarlo a la lista de colores elegidos
    const colorElegido = coloresDisponibles.splice(indiceAleatorio, 1)[0];
    coloresElegidos.push(colorElegido);
  }

  return coloresElegidos;
}

// Ejemplo de uso
const coloresParaDormitorios = generarColoresAleatorios();
console.log("Colores para los dormitorios:", coloresParaDormitorios);
