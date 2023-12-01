//* Modificar las funciones anteriores para que tengan en cuenta el género del destinatario, para ello, deberán recibir una tupla de tuplas, conteniendo el nombre y el género.

// funciones anteriores a) Escribir una función que reciba una tupla con nombres, y para cada nombre imprima el mensaje Estimado <nombre>, vote por mí.
// b) Escribir una función que reciba una tupla con nombres, una posición de origen p y una cantidad n, e imprima el mensaje anterior para los n nombres que se encuentran a partir de la posición p.

function escribeMensaje(tuplaNombres, posicion, numero, genero) {
  for (let i = posicion - 1; i < numero; i++) {
    let nombre = tuplaNombres[i];
    let generoCliente = genero[i];
    console.log(`Estimado ${nombre} con genero ${generoCliente}, vota por mi`);
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

const tuplaGenero = [
  "hombre",
  "hombre",
  "hombre",
  "hombre",
  "mujer",
  "hombre",
  "mujer",
];

const posicionInicio = 3; // Posición de inicio
const cantidadNombres = 7; // Cantidad de nombres a imprimir

escribeMensaje(tuplaNombres, posicionInicio, cantidadNombres, tuplaGenero);
