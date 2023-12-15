//*Realiza un programa que pida 10 números por teclado y que los almacene en un array. A continuación se mostrará el contenido de ese array junto al índice (0 – 9) utilizando para ello una tabla. Seguidamente el programa pasará los primos a las primeras posiciones, desplazando el resto de números (los que no son primos) de tal forma que no se pierda ninguno. Al final se debe mostrar el array resultante.

function primo(numero) {
  // Caso especial: 0 y 1 no son primos
  if (numero <= 1) {
    return false;
  }
  // Iterar desde 2 hasta la raíz cuadrada de 'numero'
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Si 'numero' es divisible por algún número, no es primo
    if (numero % i === 0) {
      return false;
    }
  }
  // Si no se encontraron divisores, el número es primo
  return true;
}

function OrdenaPrimos(arr) {
  let primos = [];
  let NoPrimos = [];
  for (let i = 0; i < arr.length; i++) {
    primo(arr[i]) ? primos.push(arr[i]) : NoPrimos.push(arr[i]);
  }
  return [...primos, ...NoPrimos];
}

let ArregloNumeros = [20, 5, 7, 4, 32, 9, 2, 14, 11, 6];

console.log(OrdenaPrimos(ArregloNumeros));
