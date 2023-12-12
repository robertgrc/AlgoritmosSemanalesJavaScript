//* Muestra 50 números enteros aleatorios entre 100 y 199 (ambos incluidos) separados por espacios. Muestra también el máximo, el mínimo y la media de esos números

function muestraNumerosAleatorios(cantidad) {
  let numerosAleatoriosEntre100y199 = [];
  for (let i = 0; i < cantidad; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 100;
    numerosAleatoriosEntre100y199.push(numeroAleatorio);
  }
  return numerosAleatoriosEntre100y199;
}
let cantidadNumeros = 50;
console.log(muestraNumerosAleatorios(cantidadNumeros));
