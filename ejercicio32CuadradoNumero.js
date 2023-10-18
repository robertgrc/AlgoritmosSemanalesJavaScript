//* Dado un array de numeros devolver el array con sus numero elevados al cuadrado
//* (numero multiplicado por si mismo)
//* el Array debe eliminar cualquier contenido que no sea numerico

//* Ejemplo  alCuadrado([5,6,7])

function devuelveCuadrado(arreglo) {
  let arregloCuadrado = [];
  for (let numero of arreglo) {
    console.log(numero);
    if (typeof numero === "number") {
      // arregloCuadrado.push(numero * numero);
      arregloCuadrado.push(Math.pow(numero, 2));
    }
  }
  return arregloCuadrado;
}
console.log(devuelveCuadrado([5, "perico", 6, 7]));
