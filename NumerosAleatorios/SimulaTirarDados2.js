//* Escribe un programa que simule la tirada de dos dados. El programa deberá continuar tirando los dados una y otra vez hasta que en alguna tirada los dos dados tengan el mismo valor.

function lanzarDadosHastaIguales() {
  let dado1, dado2;

  for (let lanzamientos = 1; ; lanzamientos++) {
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;

    console.log(
      `Lanzamiento ${lanzamientos}: Dado 1: ${dado1}, Dado 2: ${dado2}`
    );

    if (dado1 === dado2) {
      return dado1;
    }
  }
}

// Ejemplo de uso
const resultadoFinal = lanzarDadosHastaIguales();
console.log(`¡Ambos dados mostraron ${resultadoFinal}!`);
