//* Dada una lista de nombres que contienen espacios extra, utiliza map para eliminar los espacios adicionales al principio y al final de cada nombre.

function EliminaEspacios(nombres) {
  return nombres.map((nombre) => nombre.trim());
}

let nombres = [" adrian", " roberto ", "    menelao", "moises  "];

let nombresSinEspacios = EliminaEspacios(nombres);
console.log(nombresSinEspacios);
