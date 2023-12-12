//* Realiza un programa que calcule la media de los dígitos que contiene un número entero introducido por teclado.

// Ejemplo 1:
// Introduzca un número: 609831
// La media de sus dígitos es 4.5
// Ejemplo 2:
// Introduzca un número: 78201345
// La media de sus dígitos es 3.75
// Ejemplo 3:
// Introduzca un número: 24
// La media de sus dígitos es 3.0
// Ejemplo 4:
// Introduzca un número: 8
// La media de sus dígitos es 8.0

function convertirANumeroCadenaYSumar(numero) {
  // Usa toString() para convertir el número en una cadena

  const cadenaDeNumeros = numero.toString();
  console.log(cadenaDeNumeros.length);
  // Convierte la cadena en un array de números
  const arrayDeNumeros = cadenaDeNumeros
    .split("")
    .map((caracter) => parseInt(caracter));

  // Usa reduce para sumar los números en el array
  const sumaDeNumeros = arrayDeNumeros.reduce(
    (acumulador, numero) => acumulador + numero,
    0
  );

  let promedio = sumaDeNumeros / cadenaDeNumeros.length;

  return {
    arrayDeNumeros,
    sumaDeNumeros,
    promedio,
  };
}

// Ejemplo de uso
const numero = 609831;
const numero2 = 78201345;
const resultado = convertirANumeroCadenaYSumar(numero);
const resultado2 = convertirANumeroCadenaYSumar(numero2);

console.log(resultado.arrayDeNumeros); // Output: [6, 0, 9, 8, 3, 1]
console.log(resultado.sumaDeNumeros); // Output: 27
console.log(resultado.promedio); // Output: 27
console.log(resultado2.arrayDeNumeros); // Output: [6, 0, 9, 8, 3, 1]
console.log(resultado2.sumaDeNumeros); // Output: 27
console.log(resultado2.promedio); // Output: 27
