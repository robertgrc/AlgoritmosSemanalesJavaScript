//*numeros es un array original que contiene los números del 1 al 5.
//*indiceAleatorio es un índice aleatorio generado entre 0 y la longitud del array numeros.
//*splice(indiceAleatorio, 1) elimina un elemento en la posición del índice aleatorio. splice devuelve un array que contiene los elementos eliminados, y en este caso, solo eliminamos un elemento.
//*[0] accede al primer (y único) elemento del array devuelto por splice, que es el número que hemos eliminado. Lo almacenamos en la variable numeroElegido.
//*Finalmente, imprimimos el número elegido y el array después de la eliminación.

function seleccionaNumerosAleatoriosSinRepetir() {
  const numeros = [1, 2, 3, 4, 5];

  // Obtener un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * numeros.length);
  console.log("indiceAleatorio", indiceAleatorio);

  // Eliminar un número aleatorio del array y almacenarlo en una variable
  const numeroElegido = numeros.splice(indiceAleatorio, 1)[0];
  return {
    numeroElegido,
    numeros,
  };
}

console.log(
  "Número elegido:",
  seleccionaNumerosAleatoriosSinRepetir().numeroElegido
);
console.log(
  "Array después de la eliminación:",
  seleccionaNumerosAleatoriosSinRepetir().numeros
);
