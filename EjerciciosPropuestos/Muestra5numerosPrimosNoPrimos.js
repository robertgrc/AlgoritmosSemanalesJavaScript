// Función para verificar si un número es primo
function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// Función para generar los siguientes 5 números y determinar si son primos
function generarYMostrarPrimos(numeroInicial) {
  for (let i = 0; i < 5; i++) {
    const numero = numeroInicial + i;
    const mensaje = esPrimo(numero) ? "es primo" : "no es primo";
    console.log(`${numero} ${mensaje}`);
  }
}

// Ejemplo de uso: generar y mostrar los siguientes 5 números después del 10
generarYMostrarPrimos(10);

//* if (numero <= 1) return false;: Si el número es menor o igual a 1, no es primo. Entonces, la función retorna false. Los números primos son mayores que 1 por definición.
//*for (let i = 2; i <= Math.sqrt(numero); i++) {: Aquí, utilizamos un bucle for que comienza con i = 2 y continúa hasta la raíz cuadrada del número. La elección de la raíz cuadrada es un optimización que reduce la cantidad de comprobaciones necesarias para determinar si un número es primo.
//*   if (numero % i === 0) { return false; }: Dentro del bucle, verificamos si el número es divisible por i. Si lo es, significa que el número tiene un divisor diferente de 1 y él mismo. Por lo tanto, no es primo y la función retorna false.
//*   Finalmente, si el bucle completo no encuentra ningún divisor, significa que el número no es divisible por ningún número entre 2 y la raíz cuadrada del número. En ese caso, la función retorna true, indicando que el número es primo.
//*   Este es un enfoque básico y eficiente para verificar si un número es primo. Hay algoritmos más avanzados para determinar la primalidad de números grandes, pero este enfoque sirve bien para números más pequeños.
