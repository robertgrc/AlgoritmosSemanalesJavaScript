//* rcicio 2.8. Escribir un programa que tome una cantidad 𝑚 de valores ingresados por el usuario, a cada uno le calcule el factorial (utilizando la función escrita en el ejercicio 1.5) e imprima el resultado junto con el número de orden correspondiente

function factorial(num) {
  let numeroFactorial = 1;
  for (let i = 1; i <= num; i++) {
    numeroFactorial *= i;
  }
  return numeroFactorial;
}
factorial(7);

function devuelveFactoriales(arreglo) {
  let respuesta = [];
  for (let numero of arreglo) {
    let vectorFactoriales = factorial(numero);
    respuesta.push(vectorFactoriales);
  }
  return respuesta;
}

// let arreglo = [3, 4, 7];
// console.log(devuelveFactoriales(arreglo));

function devuelveFactorialesConIndice(arreglo) {
  let respuesta = "";
  for (let i = 1; i <= arreglo.length; i++) {
    // console.log(arreglo[i - 1]);
    let vectorFactoriales = factorial(arreglo[i - 1]);
    respuesta += `${i}.- ${vectorFactoriales} \n`;
  }
  return respuesta;
}

let arreglo2 = [3, 4, 7];
console.log(devuelveFactorialesConIndice(arreglo2));
