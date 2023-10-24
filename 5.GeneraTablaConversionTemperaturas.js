//* Ejercicio 2.3. Escribir una función que convierta un valor dado en grados Fahrenheit a grados Celsius. Recordar que la fórmula para la conversión es: 𝐹 = (9/5)𝐶 + 32

function convierteAFahrenheit(gradosCelcius) {
  let convertido = (9 / 5) * gradosCelcius + 32;
  return convertido;
}

//*Ejercicio 2.4. Escribir un programa que utilice la función anterior para generar una tabla de conversión de temperaturas, desde 0 °F hasta 120 °F, de 10 en 10

function generarTablaConversion() {
  let tabla = "Temperatura (°C) | Temperatura (°F)\n";
  tabla += "---------------------------------\n";
  for (let i = 0; i <= 120; i++) {
    let convertido = convierteAFahrenheit(i);
    tabla += `${i}°C \t\t|\t ${convertido.toFixed(2)}°F \n`;
  }
  return tabla;
}

console.log(generarTablaConversion());
