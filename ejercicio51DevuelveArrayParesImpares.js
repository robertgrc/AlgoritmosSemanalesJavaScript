//* Dado un array de numeros devolver un array nuevo con los numeros pares e impares separados

//* Ejemplos  pares([1,2,3,4])
//* pares: [2,4]
//* impares: [1,3]

function devuelvePar(numero) {
  if (numero % 2 === 0) {
    return true;
  }
}

function devuelveArrayParesImpares(arreglo) {
  let arregloPares = [];
  let arregloImpares = [];
  let respuesta = "";
  for (numero of arreglo) {
    if (devuelvePar(numero)) {
      arregloPares.push(numero);
    } else {
      arregloImpares.push(numero);
    }
  }

  console.log(arregloPares);
  console.log(arregloImpares);
  respuesta = `
  pares:[${arregloPares}]
  impares:[${arregloImpares}]
  `;
  return respuesta;
}

let arreglo = [1, 2, 3, 4];
console.log(devuelveArrayParesImpares(arreglo));
