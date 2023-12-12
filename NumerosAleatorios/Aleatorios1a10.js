//* Funcion para imprimir 10 numeros aleatorios entre 1-10

function imprimirNumerosAleatorios() {
  for (let i = 0; i < 10; i++) {
    const numeroAleatorio = Math.random() * 10 + 1;
    let dosCifras = numeroAleatorio.toFixed(2);
    console.log(dosCifras);
  }
}

// Llama a la función para imprimir los números aleatorios
imprimirNumerosAleatorios();
