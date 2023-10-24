//* Ejercicio 1.7. Escribir un programa que le pida una palabra al usuario, para luego imprimirla 100 veces, en una única línea, con espacios intermedios.

function imprimePalabra(palabra) {
  let resultado = "";
  for (let i = 0; i < 100; i++) {
    resultado += `${i + 1}.- ${palabra}\n`;
  }
  return resultado;
}
console.log(imprimePalabra("creo Elohim"));
