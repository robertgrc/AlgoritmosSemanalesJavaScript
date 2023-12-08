//* Realiza un programa que calcule el máximo, el mínimo y la media de una serie de números enteros positivos introducidos por teclado. El programa terminará cuando el usuario introduzca un número primo. Este último número no se tendrá en cuenta en los cálculos. El programa debe indicar también cuántos números ha introducido el usuario (sin contar el primo que sirve para salir).
//* Ejemplo: Por favor, vaya introduciendo números enteros positivos. Para terminar, introduzca un número primo:
// 6
// 8
// 15
// 12
// 23
// Ha introducido 4 números no primos.
// Máximo: 15
// Mínimo: 6
// Media: 10.25

function esPrimo(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function CalculaMaximoMinimo(listaNumeros) {
  let maximo = 0;
  let minimo = 0;
  let sumatoria = 0;

  //Calcular el Max y Min
  maximo = Math.max(...listaNumeros);
  minimo = Math.min(...listaNumeros);

  for (let i = 0; i < listaNumeros.length; i++) {
    sumatoria += listaNumeros[i];
  }
  let promedio = sumatoria / listaNumeros.length;

  return { maximo, minimo, promedio };
}

let listaNumeros = [6, 8, 15, 12, 23, 7, 33, 13];

let respuesta = CalculaMaximoMinimo(listaNumeros);
console.log(respuesta);
