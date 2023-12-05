//*  Diseñar un programa que muestre el producto de los 5 primeros números impares.

function productoImpares(listaNumeros) {
  //Filtrar los primeros 10 impares
  const impares = listaNumeros.filter((numero) => numero % 2 !== 0).slice(0, 5);
  //Calcular el producto de los numeros utilizando reduce
  console.log(impares);
  let producto = impares.reduce((acumulador, numero) => acumulador * numero, 1);
  return producto;
}

let numeros = [5, 7, 4, 3, 2, 5, 7, 6, 8, 9, 11, 13, 17, 12, 15, 3, 7, 1];
let producto = productoImpares(numeros);
console.log(producto);
