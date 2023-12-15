//* Crear Arreglo aleatorio de 10 elementos entre 0 y 100

const arregloAleatorio = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 101)
);
console.log(arregloAleatorio);

//ejem [69, 31, 22, 21, 58, 62, 34, 30, 29, 11]
