//* Dado un numero mostrar listado de los cuadrados de todos los numero naturales hasta llegar al mismo

function mostrarCuadrados(numero) {
  let cuadrados = [];
  for (let i = 1; i <= numero; i++) {
    cuadrados.push(Math.pow(i, 2));
    //cuadrados.push(i*i);
  }
  console.log(cuadrados);
}

mostrarCuadrados(7);
