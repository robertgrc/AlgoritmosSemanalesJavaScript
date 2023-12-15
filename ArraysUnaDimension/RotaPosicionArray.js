//* Escribe un programa que lea 15 números por teclado y que los almacene en un array. Rota los elementos de ese array, es decir, el elemento de la posición 0 debe pasar a la posición 1, el de la 1 a la 2, etc. El número que se encuentra en la última posición debe pasar a la posición 0. Finalmente, muestra el contenido del array.

function rotaArray(array) {
  let cadenaSinUltimoElemento = array.slice(0, array.length - 1);
  let ultimoElemento = array.slice(array.length - 1);
  let cadenaModificada = [...ultimoElemento, ...cadenaSinUltimoElemento];
  return cadenaModificada;
}

let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(rotaArray(arregloNumeros));
