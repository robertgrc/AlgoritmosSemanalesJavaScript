//* Leer dos series de numeros, y ordenarlos luego fusionarlos en una sola lista

function fusionarListas(lista1, lista2) {
  let listaOrdenada = lista1;
  for (let i = 0; i < lista2.length; i++) {
    listaOrdenada.push(lista2[i]);
  }
  let ordenado = listaOrdenada.slice().sort((a, b) => a - b);
  return ordenado;
}

let listaNumerica1 = [7, 9, 14, 21, 144, 23, 3, 2, 28, 18];
let listaNumerica2 = [48, 35, 20, 4, 8, 11, 41, 37, 77, 99, 110];
let respuesta = fusionarListas(listaNumerica1, listaNumerica2);
console.log(respuesta);
