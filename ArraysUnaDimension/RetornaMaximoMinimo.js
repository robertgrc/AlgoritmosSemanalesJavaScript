//* Escribe un programa que pida 10 números por teclado y que luego muestre los números introducidos junto con las palabras “máximo” y “mínimo” al lado del máximo y del mínimo respectivamente.

function retornaMaximoMinimo(arr) {
  let numeroMaximo = Math.max(...arr);
  let numeroMinimo = Math.min(...arr);
  return {
    numeroMaximo,
    numeroMinimo,
  };
}

let arregloNumeros = [121, 34, 225, 3721, 77, 28, 92, 993, 312, 412];
console.log(retornaMaximoMinimo(arregloNumeros).numeroMaximo);
console.log(retornaMaximoMinimo(arregloNumeros).numeroMinimo);
