//* Ejercicio 2.3. Escribir una función que convierta un valor dado en grados Fahrenheit a grados Celsius. Recordar que la fórmula para la conversión es: 𝐹 = (9/5)𝐶 + 32

function convierteAFahrenheit(gradosCelcius) {
  let convertido = (9 / 5) * gradosCelcius + 32;
  return convertido;
}

console.log(convierteAFahrenheit(70));
