//* Realiza un programa que sea capaz de insertar un número en una posición concreta de un array. En primer lugar, el programa generará un array de 12 números enteros aleatorios entre 0 y 200 ambos incluidos. A continuación se debe mostrar el contenido de ese array junto al índice (0 – 11). Seguidamente el programa preguntará por el número que se quiere insertar y por la posición donde será insertado. Los números del array se desplazan a la derecha para dejar sitio al nuevo. El último número (el que se encuentra en la posición 11) siempre se perderá.

function InsertaNumeroEnArray(numero, posicion) {
  let arregloNumeros = [];
  for (let i = 0; i < 12; i++) {
    let numAleatorio = Math.floor(Math.random() * 201);
    arregloNumeros.push(numAleatorio);
  }
  console.log(arregloNumeros);

  let modificado = [...arregloNumeros];
  console.log(modificado);
  modificado.splice(posicion, 0, numero);

  //*Recortar el arreglo para mantener 12 elementos
  //1ra forma usando splice
  //modificado.splice(modificado.length - 1, 1);
  //2da forma usando slice
  modificado = modificado.slice(0, 12);
  return modificado;
}
let numero = 7;
let posicion = 4;

console.log(InsertaNumeroEnArray(numero, posicion));
