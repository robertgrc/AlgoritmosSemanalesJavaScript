//* b. Crea una función llamada filtrar_pares que tome una lista de números y devuelva una lista solo con los números pares.

function filtraPares(lista) {
  let listaFiltrada = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      listaFiltrada.push(lista[i]);
    }
  }
  return listaFiltrada;
}

let listaNumeros = [2, 3, 7, 6, 12, 23, 5, 7, 8];
console.log(filtraPares(listaNumeros));

//* Mismo ejercicio usando Filter filtrando numeros impares

function filtrarImpares(lista) {
  const numerosImpares = lista.filter((numero) => Number(numero) % 2 !== 0);
  return numerosImpares;
}

let listaNumeros2 = [2, 3, 7, 6, 12, 23, 5, 7, 8];
console.log(filtrarImpares(listaNumeros2));
