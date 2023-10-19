//* Dados dos numeros, sacar un numero aleatorio entre ellos
//* Ejemplos  aleatorio(1,100);
//* Devuelve   46

function generarNumeroAleatorio(min, max) {
  const numeroAleatorio = Math.random();
  const numeroEnRango = Math.floor(numeroAleatorio * (max - min + 1)) + min;
  return numeroEnRango;
}

// Ejemplo: Genera un número aleatorio entre 1 y 100
const numeroAleatorio = generarNumeroAleatorio(1, 100);
console.log(numeroAleatorio);
