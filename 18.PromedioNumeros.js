//* Escribir un programa que permita al usuario ingresar un arreglo de numeros, imprimiendo el promedio correspondiente.

function promedioNumeros(arreglo) {
  let acumulado = 0;
  let contador = 0;
  for (let numero of arreglo) {
    acumulado += numero;
    contador++;
  }
  let respuesta = acumulado / contador;
  return respuesta;
}

let arr1 = [7, 4, 7, 4, 7, 4];

console.log(promedioNumeros(arr1));
