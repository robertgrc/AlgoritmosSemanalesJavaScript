//* Realiza un programa que genere 10 números enteros aleatorios entre 0 y 200 ambos incluidos y que los almacene en un array. A continuación, el programa debe mostrar el contenido de ese array junto al índice (0 – 9). Seguidamente el programa debe colocar de forma alterna y en orden los menores o iguales de 100 y los mayores de 100: primero menor, luego mayor, luego menor, luego mayor… Cuando se acaben los menores o los mayores, se completará con los números que queden.

function intercalarArreglos(arreglo1, arreglo2) {
  let resultado = [];
  const longitudMaxima = Math.max(arreglo1.length, arreglo2.length);
  for (let i = 0; i < longitudMaxima; i++) {
    if (i < arreglo1.length) {
      resultado.push(arreglo1[i]);
    }

    if (i < arreglo2.length) {
      resultado.push(arreglo2[i]);
    }
  }

  return resultado;
}

function intercalaMenorMayor(cantidad) {
  let Arreglo = [];
  let Indices = [];
  let MenoresDeCien = [];
  let MayoresDeCien = [];
  for (let i = 0; i < cantidad; i++) {
    Indices.push(i);
    let numeroAleatorio = Math.floor(Math.random() * 201);
    numeroAleatorio <= 100
      ? MenoresDeCien.push(numeroAleatorio)
      : MayoresDeCien.push(numeroAleatorio);
  }

  Arreglo = intercalarArreglos(MenoresDeCien, MayoresDeCien);
  return { Indices, Arreglo };
}

let tamanioArreglo = 10;
console.log(intercalaMenorMayor(tamanioArreglo).Indices);
console.log(intercalaMenorMayor(tamanioArreglo).Arreglo);
