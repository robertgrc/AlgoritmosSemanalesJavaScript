//* Dada una lista de direcciones en formato "calle, ciudad, país", utiliza map para crear una nueva lista que contenga tres elementos en cada sublista: la calle, la ciudad y el país.

function dividirDirecciones(direcciones) {
  let formatendoDirecciones = direcciones.map((direccion) =>
    direccion.split(",")
  );
  console.log(formatendoDirecciones);
  return formatendoDirecciones;
}

// Ejemplo de uso
const direccionesOriginales = [
  "123 Main St, Ciudad A, País X",
  "456 Oak Ave, Ciudad B, País Y",
  "789 Pine Rd, Ciudad C, País Z",
];

const direccionesDivididas = dividirDirecciones(direccionesOriginales);

console.log(direccionesDivididas);
