//* a) Escribir una función que reciba una tupla con nombres, y para cada nombre imprima el mensaje Estimado <nombre>, vote por mí.

function MensajePublicidad(tupla) {
  const Mensaje = [];
  for (let i = 0; i < tupla.length; i++) {
    const nombre = tupla[i];
    console.log(`Estimado ${nombre}, vote por MI`);
  }
}

const tupla1 = ["gabriel", "alejandro", "manuel", "carlos"];

MensajePublicidad(tupla1);

//* con map
function imprimirMensajes(tuplaNombres) {
  tuplaNombres.map((nombre) => {
    console.log(`Estimado ${nombre}, vote por mi`);
  });
}
// Ejemplo de uso
const nombres = ["Juan", "María", "Carlos"];

imprimirMensajes(nombres);
