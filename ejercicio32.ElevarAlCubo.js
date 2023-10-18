//* Dado un array de numeros devolver el array con sus numero elevados al cuvo
//* (numero multiplicado por si mismo)
//* el Array debe eliminar cualquier contenido que no sea numerico

//* Ejemplo  alCuadrado([5,6,7]) ==> devuelve [125, 216, 343]

function devuelveCuvo(numeros) {
  let numeros_cuvo = numeros
    .filter((numero) => typeof numero === "number")
    .map((numero) => Math.pow(numero, 3));
  return numeros_cuvo;
}

console.log(devuelveCuvo([5, "perico", 6, 7]));
