//* Muestra numeros primos entre 1 y mil

function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function mostrarPrimos() {
  let respuesta = [];
  for (let i = 2; i <= 1000; i++) {
    if (esPrimo(i)) {
      respuesta.push(i);
    }
  }
  return respuesta;
}

console.log(mostrarPrimos());
