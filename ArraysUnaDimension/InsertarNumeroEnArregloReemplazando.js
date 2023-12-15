//* Realiza un programa que sea capaz de insertar un número en una posición concreta de un array. En primer lugar, el programa generará un array de 12 números enteros aleatorios entre 0 y 200 ambos incluidos. A continuación se debe mostrar el contenido de ese array junto al índice (0 – 11). Seguidamente el programa preguntará por el número que se quiere insertar y por la posición donde será insertado. Los números del array se desplazan a la derecha para dejar sitio al nuevo. El último número (el que se encuentra en la posición 11) siempre se perderá.

function generarArreglo(numero, posicion) {
  // Generar un arreglo de 12 números aleatorios entre 0 y 200 (incluidos)
  let arreglo = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 201)
  );
  console.log(arreglo);
  // Colocar el número en la posición dada
  arreglo[posicion - 1] = numero;

  // Eliminar el último número del arreglo
  arreglo.pop();

  return arreglo;
}

// Ejemplo de uso
let numero = 7;
let posicion = 3;
let nuevoArreglo = generarArreglo(numero, posicion);
console.log(nuevoArreglo);

//* 1.{ length: 12 }: Esto crea un objeto con una propiedad length igual a 12. Este objeto actúa como un "array-like" objeto, lo que significa que tiene una propiedad length y se puede utilizar con Array.from() para crear un array de la longitud especificada.

//*2.() => Math.floor(Math.random() * 201): Esto es una función de mapeo que se ejecuta para cada elemento del array que se está creando. En este caso, la función genera un número aleatorio entre 0 y 200 (incluyendo ambos) y redondea hacia abajo con Math.floor.
