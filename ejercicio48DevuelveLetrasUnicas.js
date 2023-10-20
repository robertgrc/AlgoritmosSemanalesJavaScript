//* Dado un string devolver cuales son las letras que aparecen solo una vez y cual es la primera

//* ejemplos soloUnaVez("frase frase HOY")
//* devuelveLetrasNoRepetidas: [["H","O","Y"], "H"]

function devuelveLetrasNoRepetidas(frase) {
  //definir variables
  let contadores = {};
  let resultado = [];
  let fraseSinEspacios = frase.replace(/ /g, "").split("");

  //Generar Contadores
  for (let letra of fraseSinEspacios) {
    if (!contadores[letra]) {
      contadores[letra] = 1;
    } else {
      contadores[letra]++;
    }
  }
  //   console.log(contadores);
  // Eliminar letras que se repiten
  for (let letra of fraseSinEspacios) {
    if (contadores[letra] === 1) {
      resultado.push(letra);
    }
  }
  return [resultado, resultado[0]];
}

console.log(devuelveLetrasNoRepetidas("frase frase HOY"));
