// Función que realiza la sumatoria de un arreglo de números
const sumarArreglo = (numeros) => {
  // Utilizando reduce para sumar los elementos del array
  const suma = numeros.reduce((acumulador, numero) => {
    console.log("acumulador y numero", acumulador, numero);
    return acumulador + numero;
  }, 0);

  return suma;
};

// Ejemplo de uso
const numerosEjemplo = [1, 2, 3, 4, 5];
const resultadoSuma = sumarArreglo(numerosEjemplo);

console.log(resultadoSuma); // Resultado: 15
