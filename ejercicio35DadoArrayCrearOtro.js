//* Dado un array crear otro con el primer y el ultimo elemento original
//* ejemplos  primeroYUltimo([100,200,300,780]) // devuelve[100,780]
//*

function devuelvePrimeroYUltimo(arreglo) {
  if (arreglo.length < 2) {
    return [];
  }
  const resultado = [arreglo[0], arreglo[arreglo.length - 1]];
  return resultado;
}

console.log(devuelvePrimeroYUltimo([100, 200, 300, 780]));

//* otra forma con push

function devuelveArreglo(arreglo) {
  if (arreglo.length < 2) {
    return [];
  }
  let resultado = [];
  resultado.push(arreglo[0], arreglo[arreglo.length - 1]);
  return resultado;
}

console.log(devuelveArreglo([700, 1400, 2100, 2800]));
