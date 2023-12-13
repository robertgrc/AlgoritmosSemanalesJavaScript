//* Realiza un programa que muestre la previsión del tiempo para mañana en Málaga. Las temperaturas máxima y mínima se deben generar de forma aleatoria entre los intervalos máximos y mínimos absolutos medidos en las últimas décadas para cada estación. La probabilidad de que esté soleado o nublado en cada estación se proporciona a continuación. Obviamente, la temperatura mínima deberá ser menor o igual que la temperatura máxima
// temperatura minima absoluta      |primavera 15| verano 25| otono 20 |invierno 0|
// temperatura maxima absoluta      |primavera 30| verano 45| otono 30 |invierno 25|
// probabilidad de soleado-nublado   60% -40%       80%-20%    40%-60%   20%-80%

// Ejemplo:
// 1. Primavera
// 2. Verano
// 3. Otoño
// 4. Invierno
// Seleccione la estación del año (1-4): 4
// Previsión del tiempo para mañana
// --------------------------------
// Temperatura mínima: 10ºC
// Temperatura máxima: 16ºC
// Nublado

// Definir temperaturas y probabilidades para cada estación
const temperaturasMinimas = {
  primavera: 15,
  verano: 25,
  otono: 20,
  invierno: 0,
};
const temperaturasMaximas = {
  primavera: 30,
  verano: 45,
  otono: 30,
  invierno: 25,
};
const probabilidadesSoleado = {
  primavera: 0.6,
  verano: 0.8,
  otono: 0.4,
  invierno: 0.2,
};

// Función para generar un número aleatorio en un rango
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para obtener la previsión del tiempo para mañana
function obtenerPrevisionTiempo() {
  // Seleccionar aleatoriamente una estación
  const estaciones = ["primavera", "verano", "otono", "invierno"];
  const estacionAleatoria = estaciones[generarNumeroAleatorio(0, 3)];

  // Generar temperaturas aleatorias dentro de los rangos establecidos
  const temperaturaMinima = generarNumeroAleatorio(
    temperaturasMinimas[estacionAleatoria],
    temperaturasMaximas[estacionAleatoria]
  );
  const temperaturaMaxima = generarNumeroAleatorio(
    temperaturaMinima,
    temperaturasMaximas[estacionAleatoria]
  );

  // Determinar si estará soleado o nublado según la probabilidad
  const probabilidadSoleado = probabilidadesSoleado[estacionAleatoria];
  const tiempo = Math.random() < probabilidadSoleado ? "Soleado" : "Nublado";

  // Devolver la previsión del tiempo para mañana
  return `Mañana en Málaga: ${tiempo}, Temperatura mínima: ${temperaturaMinima}°C, Temperatura máxima: ${temperaturaMaxima}°C`;
}

// Mostrar la previsión del tiempo
console.log(obtenerPrevisionTiempo());
