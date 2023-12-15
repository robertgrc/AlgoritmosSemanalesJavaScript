//* Escribe un programa que lea 10 números por teclado y que luego los muestre en orden inverso, es decir, el primero que se introduce es el último en mostrarse y viceversa.

function leeNumerosInvierte(ArrNum) {
  let invertido = [];
  for (let i = 0; i < ArrNum.length; i++) {
    invertido.unshift(ArrNum[i]);
  }
  return invertido;
}

let numeros = [10, 20, 30, 50, 70, 140, 210, 280, 350];
console.log(leeNumerosInvierte(numeros));

//* ---------------------------------------------------------
// esta forma comentada modifica el arreglo original
// function invierteNumeros(arr) {
//   return arr.reverse();
// }
// console.log(invierteNumeros(numeros));

//*---------------
function invertirArreglo(arreglo) {
  let copiaArreglo = [...arreglo];
  console.log("copiaArreglo", copiaArreglo);
  let invertido = copiaArreglo.reverse();
  return invertido;
}
console.log(invertirArreglo(numeros));
