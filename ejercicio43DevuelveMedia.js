//* Dado un array de numeros sacar la media de todos ellos
//* ejemplos devuelveMedia([1,2,3]);  ==> sumatoria numeros/catidad numeros ==> 2

function devuelveMedia(arreglo) {
  let sumatoriaNumeros = 0;
  for (let numero of arreglo) {
    sumatoriaNumeros = numero + sumatoriaNumeros;
  }
  return sumatoriaNumeros / arreglo.length;
}

console.log(devuelveMedia([1, 2, 3]));
//*--------------------------------------------------
function mediaConReducer(arreglo) {
  let suma = arreglo.reduce((valorAcumulado, numeroActual) => {
    return valorAcumulado + numeroActual;
  });
  let media = suma / arreglo.length;
  return media;
}

console.log(mediaConReducer([1, 2, 3]));
