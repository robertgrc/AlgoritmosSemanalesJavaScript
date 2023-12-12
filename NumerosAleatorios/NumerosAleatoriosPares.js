//* Programa genera 20 numeros aleatorios pares entre 0 y 100

function generarNumerosParesAleatorios(cantidadPares) {
  const numerosParesAleatorios = [];

  for (let i = 0; i < cantidadPares; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 51) * 2; // Números pares entre 0 y 100
    numerosParesAleatorios.push(numeroAleatorio);
  }

  return numerosParesAleatorios;
}

let cantidadPares = 20;

// Ejemplo de uso: Generar un array con 20 números aleatorios pares
const numerosGenerados = generarNumerosParesAleatorios(cantidadPares);

console.log(numerosGenerados);
