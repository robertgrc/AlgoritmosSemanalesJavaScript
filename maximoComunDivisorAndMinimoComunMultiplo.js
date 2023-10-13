// * Enunciado: Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros.
// * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.

// Función para calcular el MCD (Máximo Común Divisor) de dos números enteros.
function calcularMCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Función para calcular el MCM (Mínimo Común Múltiplo) de dos números enteros.
function calcularMCM(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  return (a * b) / calcularMCD(a, b);
}

// Ejemplo de uso:
const num1 = 12;
const num2 = 18;

const mcd = calcularMCD(num1, num2);
console.log("MCD:", mcd);

const mcm = calcularMCM(num1, num2);
console.log("MCM:", mcm);
