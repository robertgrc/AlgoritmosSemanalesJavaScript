//* Dado un array de numeros, devolver el valor mas bajo y el mas alto
//*  ejemplos altoBajo([1,2,3,4,5])
//*  devuelve  bajo:1  alto:5

function devuelveAltoYBajo(numeros) {
  let ordenados = numeros.sort((a, b) => a - b);
  return `bajo:${ordenados[0]}, alto:${ordenados[ordenados.length - 1]}`;
}

console.log(devuelveAltoYBajo([74, 7, 21, 14, 35, 77, 70]));
