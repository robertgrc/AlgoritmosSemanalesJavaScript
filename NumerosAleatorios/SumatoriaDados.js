//* Escribe un programa que muestre la tirada de tres dados. Se debe mostrar también la suma total (los puntos que suman entre los tres dados).

function lanzarDados(cantidadDados) {
  let sumatoria = 0;

  for (let i = 0; i < cantidadDados; i++) {
    // Genera un número aleatorio entre 1 y 6 (simulando un dado de 6 caras)
    const resultadoDado = Math.floor(Math.random() * 6) + 1;
    console.log(resultadoDado);
    // Suma el resultado al total
    sumatoria += resultadoDado;
  }

  return sumatoria;
}

// Ejemplo de uso con 3 dados
const cantidadDados = 3;
const resultadoLanzamiento = lanzarDados(cantidadDados);

console.log(
  `La sumatoria de los resultados de lanzar ${cantidadDados} es ${resultadoLanzamiento}`
);
