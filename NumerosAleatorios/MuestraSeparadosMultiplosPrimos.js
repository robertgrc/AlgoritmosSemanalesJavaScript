//* Escribe un programa que muestre por pantalla 100 números enteros separados por un espacio. Los números deben estar generados de forma aleatoria en un rango entre 10 y 200 ambos incluidos. Los primos deben aparecer entre almohadillas (p. ej. #19#) y los múltiplos de 5 entre corchetes

function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function MuestraNumeros(numero) {
  let respuesta = [];
  for (let i = 1; i <= numero; i++) {
    let numeroAleatorio = Math.floor(Math.random() * (200 - 10 + 1));
    if (esPrimo(numeroAleatorio)) {
      // console.log('numeroAleatorioPrimo', numeroAleatorio)
      let numeroModificado = `#${numeroAleatorio}#`;
      respuesta.push(numeroModificado);
    } else if (numeroAleatorio % 5 === 0) {
      // console.log('numeroAleatorioMultiplo', numeroAleatorio)
      let numeroModificado = `<${numeroAleatorio}>`;
      respuesta.push(numeroModificado);
    } else {
      respuesta.push(numeroAleatorio);
    }
    // console.log('numeroAleatorioNormal')
  }
  return respuesta;
}

console.log(MuestraNumeros(100));
