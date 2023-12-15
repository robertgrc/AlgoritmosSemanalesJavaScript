function cambiarPosicionUltimo(arr) {
  // Verificar que el arreglo tenga al menos dos elementos
  if (arr.length < 2) {
    console.log("El arreglo debe tener al menos un elemento.");
    return arr;
  }

  // Extraer el último elemento del arreglo
  const ultimoElemento = arr.pop();
  console.log(ultimoElemento);

  // Insertar el último elemento en la primera posición del arreglo
  arr.unshift(ultimoElemento);

  return arr;
}

// Ejemplo de uso
let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let nuevoArreglo = cambiarPosicionUltimo(arregloNumeros);

console.log(nuevoArreglo);
