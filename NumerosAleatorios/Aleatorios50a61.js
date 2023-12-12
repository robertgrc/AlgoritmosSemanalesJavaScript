//* Funcion para imprimir 20 numeros aleatorios entre 50-61
//Vamos a ponerlo un poco más difícil. Ahora vamos a generar números enteros entre
//50 y 60 ambos incluidos. Primero multiplicamos Math.random() por 11, con lo que
//obtenemos números decimales entre 0 y 10.9999… (sin llegar nunca hasta 11). Luego
//desplazamos ese intervalo sumando 50 por lo que obtenemos números decimales
//entre 50 y 60.9999… Por último, quitamos los decimales haciendo casting y voilà, ya
//tenemos números enteros aleatorios entre 50 y 60 ambos incluidos.

function imprimirNumerosAleatorios() {
  for (let i = 0; i < 20; i++) {
    const numeroAleatorio = Math.random() * 11 + 50;
    let dosCifras = numeroAleatorio.toFixed(2);
    console.log(dosCifras);
  }
}

// Llama a la función para imprimir los números aleatorios
imprimirNumerosAleatorios();
