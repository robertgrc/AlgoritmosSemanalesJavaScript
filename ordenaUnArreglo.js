// * Dada una matriz de números enteros, encuentre el subarreglo más largo donde la diferencia absoluta entre dos elementos cualesquiera sea menor o igual a 1
// * Ejemplo
// * a=[1,1,2,2,4,4,5,5,5]
// * Hay dos subarreglos que cumplen el criterio: [1,1,2,2] y [4,4,5,5,5] . El subarreglo de longitud máxima tiene elementos.
// * Función descriptiva
// * Complete la función de selección de Números en el editor siguiente.
// * picksNumbers tiene los siguientes parámetros:
// * int a[n]: una matriz de números enteros
// * Devoluciones
// * int: la longitud del subarreglo más largo que cumple el criterio
// * Formato de entrada
// * La primera línea contiene un único número entero n, el tamaño de la matriz a.
// * La segunda línea contiene n números enteros separados por espacios, cada uno de los cuales es a[i].

function pickingNumbers(a) {
  // Ordena el array en orden ascendente
  a.sort((x, y) => x - y);

  let maxLength = 0;
  let currentLength = 1;
  let currentNumber = a[0];

  for (let i = 1; i < a.length; i++) {
    if (Math.abs(a[i] - currentNumber) <= 1) {
      // El elemento actual cumple con la condición
      currentLength++;
    } else {
      // El elemento actual no cumple con la condición, comenzamos una nueva subsecuencia
      currentNumber = a[i];
      currentLength = 1;
    }

    // Actualiza la longitud máxima
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

// Ejemplo de uso:
const a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
const result = pickingNumbers(a);
console.log(result); // Esto imprimirá 5

// El algoritmo comienza ordenando el array a en orden ascendente. Esto es importante porque facilita la identificación de subsecuencias que cumplan con la condición de diferencia absoluta menor o igual a 1.

// Luego, se inicializan tres variables:

// maxLength: Se utiliza para rastrear la longitud máxima de la subsecuencia que cumple con la condición.
// currentLength: Se utiliza para rastrear la longitud actual de la subsecuencia en proceso.
// currentNumber: Se utiliza para rastrear el número actual en la subsecuencia.
// El algoritmo comienza a recorrer el array desde el segundo elemento (i = 1) hasta el último elemento.

// Para cada elemento en el bucle, se verifica si la diferencia absoluta entre el elemento actual y currentNumber es menor o igual a 1. Si es así, esto significa que el elemento actual puede formar parte de la subsecuencia actual, por lo que incrementamos currentLength en 1.

// Si la diferencia absoluta es mayor que 1, significa que estamos comenzando una nueva subsecuencia. En este caso, actualizamos currentNumber al elemento actual y restablecemos currentLength a 1.

// En cada iteración, se actualiza maxLength con el valor máximo entre su valor anterior y currentLength. Esto se hace para asegurarse de que maxLength siempre almacene la longitud de la subsecuencia más larga encontrada hasta el momento.

// Después de recorrer todo el array, maxLength contendrá la longitud de la subsecuencia más larga que cumple con la condición de diferencia absoluta menor o igual a 1.

// En el ejemplo que proporcionaste, el array [1, 1, 2, 2, 4, 4, 5, 5, 5] tiene dos subsecuencias que cumplen con la condición: [1, 1, 2, 2] y [4, 4, 5, 5, 5]. La subsecuencia más larga es [4, 4, 5, 5, 5], que tiene una longitud de 5, y eso es lo que la función pickingNumbers devuelve.
