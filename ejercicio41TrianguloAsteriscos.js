//* Dado un numero mostar un triangulo de * con ese numero de filas
//* triangulo(4) Devuelve:
//*    *
//*   ***
//*  *****
//* *******

function mostrarTriangulo(alturaTriangulo) {
  let mitad = Math.floor(alturaTriangulo - 1);

  for (let fila = 0; fila < alturaTriangulo; fila++) {
    let nivel = "";
    //bucle para pintar asteriscos y espacios
    for (let columna = 0; columna < 2 * alturaTriangulo - 1; columna++) {
      //   console.log(mitad - fila, mitad + fila);
      if (mitad - fila <= columna && mitad + fila >= columna) {
        nivel += "*";
      } else {
        nivel += " ";
      }
    }
    console.log(nivel);
  }
}

mostrarTriangulo(4);
