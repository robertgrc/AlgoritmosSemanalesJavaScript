//*Escribe un programa que muestre por pantalla un array de 10 números enteros generados al azar entre 0 y 100. A continuación, el programa debe pedir un número al usuario. Se debe comprobar que el número introducido por teclado se encuentra dentro del array, en caso contrario se mostrará un mensaje por pantalla y se volverá a pedir un número; así hasta que el usuario introduzca uno correctamente. A continuación, el programa rotará el array hacia la derecha las veces que haga falta hasta que el número introducido quede situado en la posición 0 del array. Por último, se mostrará el array rotado por pantalla.

function CompruebaNumeroEnArreglo(comprobar, cantidad) {
  let ArregloNumeros = [];
  let Respuesta = [];
  for (let i = 0; i < cantidad; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 101);
    ArregloNumeros.push(numeroAleatorio);
  }
  ArregloNumeros.includes(comprobar)
    ? Respuesta.push(`El numero ${comprobar} si esta en el Arreglo`)
    : Respuesta.push(`El numero ${comprobar} no existe en el Arreglo`);
  return {
    Respuesta,
    ArregloNumeros,
  };
}
let numeroComprobar = 7;
let cantidadNumeros = 10;

console.log(
  CompruebaNumeroEnArreglo(numeroComprobar, cantidadNumeros).ArregloNumeros
);
console.log(
  CompruebaNumeroEnArreglo(numeroComprobar, cantidadNumeros).Respuesta
);
