//* Define tres arrays de 20 números enteros cada una, con nombres numero, cuadrado y cubo. Carga el array numero con valores aleatorios entre 0 y 100. En el array cuadrado se deben almacenar los cuadrados de los valores que hay en el array numero. En el array cubo se deben almacenar los cubos de los valores que hay en numero. A continuación, muestra el contenido de los tres arrays dispuesto en tres columnas.

function DevuelveArrays(num) {
  let arreglo = [];
  let arrCuadrado = [];
  let arrTriple = [];
  for (let i = 0; i < num; i++) {
    let numAleatorio = Math.floor(Math.random() * 101);
    arreglo.push(numAleatorio);
  }
  let arregloModificado = [...arreglo];
  arrCuadrado = ArregloCuadrado(arregloModificado);
  arrTriple = ArregloTriple(arregloModificado);
  function ArregloCuadrado(arreglo) {
    return arreglo.map((numero) => numero * numero);
  }
  function ArregloTriple(arreglo) {
    return arreglo.map((numero) => Math.pow(numero, 3));
  }
  return {
    arreglo,
    arrCuadrado,
    arrTriple,
  };
}

console.log(DevuelveArrays(7).arreglo);
console.log(DevuelveArrays(7).arrCuadrado);
console.log(DevuelveArrays(7).arrTriple);
