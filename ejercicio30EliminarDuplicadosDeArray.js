//* Dado un array de numero, devolver el array sin elementos duplicados, si hay un string eliminarlo del array
//* Ejemplos eliminarDuplicados([1,2,1,1,1,3,4]) ==> devuelve[1,2,3,4]

function EliminarDuplicados(arreglo) {
  let elementosNoDuplicados = [];
  for (let numero of arreglo) {
    if (typeof numero !== "string" && !elementosNoDuplicados.includes(numero)) {
      elementosNoDuplicados.push(numero);
    }
  }
  console.log(elementosNoDuplicados);
}

EliminarDuplicados([1, 2, 1, 1, 1, 3, 4, "Asdasd"]);
