//* Escribe un programa que genere 20 números enteros aleatorios entre 0 y 100 y que los almacene en un array. El programa debe ser capaz de pasar todos los números pares a las primeras posiciones del array (del 0 en adelante) y todos los números impares a las celdas restantes. Utiliza arrays auxiliares si es necesario

function OrdenaNumeros(array) {
  let arrayPares = [];
  let arrayImpares = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0
      ? arrayPares.push(array[i])
      : arrayImpares.push(array[i]);
  }
  return [...arrayPares, ...arrayImpares];
}

let numeros = [
  15, 20, 33, 57, 70, 141, 210, 280, 355, 770, 22, 11, 44, 55, 19, 121, 220,
  721, 7,
];
console.log(OrdenaNumeros(numeros));
