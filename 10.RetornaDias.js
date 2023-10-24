//* Dado un mes y un año, devolver la cantidad de días correspondientes.

function devuelveCantidadDias(mes, year) {
  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (esBisiesto(year)) {
    diasPorMes[1] = 29;
  }

  if (mes >= 1 && mes <= 12) {
    return diasPorMes[mes - 1];
  } else {
    return "Mes no valido";
  }
}
devuelveCantidadDias(3, 1996);

//Funcion para determinar si es un anio bisiesto

function esBisiesto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Ejemplos de uso
console.log(devuelveCantidadDias(2, 2020)); // 29, febrero en año bisiesto
console.log(devuelveCantidadDias(2, 2021)); // 28, febrero en año no bisiesto
console.log(devuelveCantidadDias(4, 2023)); // 30, abril
console.log(devuelveCantidadDias(13, 2023)); // Mes no válido
