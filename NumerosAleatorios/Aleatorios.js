//* Funcion para imprimir 10 numeros aleatorios entre 0-1

function imprimirNumerosAleatorios() {
  for (let i = 0; i < 10; i++) {
    const numeroAleatorio = Math.random();
    console.log(numeroAleatorio);
  }
}

// Llama a la función para imprimir los números aleatorios
imprimirNumerosAleatorios();
