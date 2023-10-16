//* Enunciado Dados dos arrays, devolver con solo los elementos comunes entre ambos

function devuelveElementosComunes(arr1, arr2) {
  const filtrado = arr1.filter((elemento) => arr2.includes(elemento));
  console.log(filtrado);
  return filtrado;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [5, 6, 7, 8, 9, 10];

let arr3 = ["carlos", "andres", "javier", "silvio"];
let arr4 = ["andres", "silvio", "amaru", "zacary"];

console.log(
  `elementos comunes en los dos arreglos:`,
  devuelveElementosComunes(arr1, arr2)
);
console.log(
  `elementos comunes en los dos arreglos:`,
  devuelveElementosComunes(arr3, arr4)
);
