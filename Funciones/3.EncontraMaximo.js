//* Escribe una función llamada encontrarMaximo que tome una lista de números como parámetro y devuelva el número más grande en la lista.

function encontrarMaximo(lista) {
  let numeroMaximo = [0];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > numeroMaximo) {
      numeroMaximo = lista[i];
    }
  }
  return numeroMaximo;
}

let listaNumeros = [2, 32, 25, 777, 32, 45, 100];
console.log(encontrarMaximo(listaNumeros));

//* Mismo ejercico usando funcion Math.max para encontrar el maximo

function encontrarMaximo(lista) {
  if (lista.length === 0) {
    return "La lista esta vacia";
  }
  return Math.max(...lista);
}

// Ejemplo de uso:
const numeros = [10, 5, 8, 20, 3];
const maximoEncontrado = encontrarMaximo(numeros);
console.log("El número máximo es:", maximoEncontrado);
