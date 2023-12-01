//* Modificar las funciones anteriores para que tengan en cuenta el género del destinatario, para ello, deberán recibir una tupla de tuplas, conteniendo el nombre y el género.

function imprimirMensajesDesdePosicionConGenero(
  tuplaNombresGenero,
  posicion,
  numero
) {
  for (let i = posicion - 1; i < numero; i++) {
    [nombre, generoCliente] = tuplaNombresGenero[i];
    const saludo = generoCliente === "masculino" ? "Estimado" : "Estimada";
    console.log(`${saludo} ${nombre}, vote por mi`);
  }
}

const nombresGenero = [
  ["Juan", "masculino"],
  ["María", "femenino"],
  ["Carlos", "masculino"],
  ["Luis", "masculino"],
  ["Ana", "femenino"],
  ["Lucia", "femenino"],
  ["Fernanda", "femenino"],
];

const posicionInicio = 3; // Posición de inicio
const cantidadNombres = 7; // Cantidad de nombres a imprimir

imprimirMensajesDesdePosicionConGenero(
  nombresGenero,
  posicionInicio,
  cantidadNombres
);
