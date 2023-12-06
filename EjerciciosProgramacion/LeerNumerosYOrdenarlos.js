//* lee 7 numeros de forma desordenada y ordenalos en forma ascendente

function ordenaAscendentemente(listaNumeros) {
  let listaOrdenadaAscendente = listaNumeros.slice().sort((a, b) => a - b);
  let listaOrdenadaDescendente = listaNumeros.slice().sort((a, b) => b - a);
  return {
    listaOrdenadaAscendente,
    listaOrdenadaDescendente,
  };
}

let numeros = [7, 9, 14, 21, 144, 23, 3, 2, 28, 18];
let respuesta = ordenaAscendentemente(numeros);
console.log(
  `lista ordenada de forma ascendente: ${respuesta.listaOrdenadaAscendente}`
);
console.log(
  `lista ordenada de forma descendente: ${respuesta.listaOrdenadaDescendente}`
);
