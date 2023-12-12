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
function SumatoriaDigitos(numero) {
  let CadenaNumero = numero
    .toString()
    .split("")
    .map((numero) => parseInt(numero));
  let SumatoriaDigitos = CadenaNumero.reduce((acumulador, numero) => {
    return acumulador + numero;
  }, 0);

  let promedio = SumatoriaDigitos / CadenaNumero.length;

  return {
    CadenaNumero,
    SumatoriaDigitos,
    promedio,
  };
}

// Ejemplo de uso
const numero = 609831;
const numero2 = 78201345;
const resultado = SumatoriaDigitos(numero);
const resultado2 = SumatoriaDigitos(numero2);

console.log(resultado.CadenaNumero); // Output: [6, 0, 9, 8, 3, 1]
console.log(resultado.SumatoriaDigitos); // Output: 27
console.log(resultado.promedio); // Output: 4.5
console.log(resultado2.CadenaNumero); // Output: [7, 8, 2, 0, 1, 3, 4, 5]
console.log(resultado2.SumatoriaDigitos); // Output: 30
console.log(resultado2.promedio); // Output: 3.75
