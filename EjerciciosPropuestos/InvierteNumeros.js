//* Realiza un programa que pida un número por teclado y que luego muestre ese número al revés.

function MuestraNumeroInvertido(numero) {
  let inverso = parseInt(numero.toString().split("").reverse().join(""));
  return inverso;
}

console.log(MuestraNumeroInvertido(124237));

//* Recibe lista de numeros y los invierte

function MuestraNumerosInvertidos(listaNumeros) {
  let listaInvertida = listaNumeros.map((numero) => {
    return parseInt(numero.toString().split("").reverse().join(""));
  });
  return listaInvertida;
}

let listaNumeros = [12345, 4567, 23346, 74749];

console.log(MuestraNumerosInvertidos(listaNumeros));
