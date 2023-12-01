//* ) Escribir una función que reciba una tupla con nombres, una posición de origen p y una cantidad n, e imprima el mensaje anterior para los n nombres que se encuentran a partir de la posición p.

function escribeMensaje(tuplaNombres, posicion, numero) {
  for (let i = posicion - 1; i < numero; i++) {
    let nombre = tuplaNombres[i];
    console.log(`Estimado ${nombre}, vota por mi`);
  }
}

const tuplaNombres = [
  "gabriel",
  "alejandro",
  "manuel",
  "carlos",
  "miriam",
  "gabo",
  "cami",
];

const posicionInicio = 3; // Posición de inicio
const cantidadNombres = 7; // Cantidad de nombres a imprimir

escribeMensaje(tuplaNombres, posicionInicio, cantidadNombres);
