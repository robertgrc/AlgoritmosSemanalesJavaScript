//* Muestra 20 números enteros aleatorios entre 0 y 10 (ambos incluidos) separados por espacios

function muestraNumerosSeparadosPorEspacios(cantidadNumeros) {
  let numerosSeparadosEspacios = [];

  for (let i = 0; i < cantidadNumeros; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 11);
    numerosSeparadosEspacios.push(numeroAleatorio);
  }
  return numerosSeparadosEspacios.join("  ");
}

const cantidad = 20;
console.log(muestraNumerosSeparadosPorEspacios(cantidad));
