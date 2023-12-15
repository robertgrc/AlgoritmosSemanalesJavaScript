//* Eliminar elementos y anadir nuevos

let arreglo = [1, 2, 3, 4, 5];

// Eliminar 2 elementos desde la posición 2 y añadir 10, 11
arreglo.splice(2, 2, 10, 11);

console.log(arreglo); // Resultado: [1, 2, 10, 11, 4, 5]
