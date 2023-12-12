//* Escribe un programa que simule la tirada de dos dados. El programa deberá continuar tirando los dados una y otra vez hasta que en alguna tirada los dos dados tengan el mismo valor.

function lanzarDadosHastaIguales() {
  let dado1, dado2;
  let lanzamientos = 0;

  do {
    // Lanzamiento de los dados
    dado1 = Math.floor(Math.random() * 6) + 1; // Números entre 1 y 6
    dado2 = Math.floor(Math.random() * 6) + 1;

    // Imprimir el resultado del lanzamiento
    console.log(
      `Lanzamiento ${lanzamientos + 1}: Dado 1: ${dado1}, Dado 2: ${dado2}`
    );

    lanzamientos++;
  } while (dado1 !== dado2);

  return dado1;
}

// Ejemplo de uso
const resultadoFinal = lanzarDadosHastaIguales();
console.log(`¡Ambos dados mostraron ${resultadoFinal}!`);
