//* Dada una fecha (día, mes, año), indicar si es válida o no.
function esFechaValida(dia, mes, ano) {
  // Verificar si el año es válido (entre un rango razonable)
  if (ano < 1 || ano > 9999) {
    return false;
  }

  // Verificar si el mes es válido (entre 1 y 12)
  if (mes < 1 || mes > 12) {
    return false;
  }

  // Array con la cantidad de días en cada mes (sin contar si es bisiesto)
  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Verificar si el año es bisiesto y ajustar febrero
  if (esBisiesto(ano)) {
    diasPorMes[1] = 29; // Si es bisiesto, febrero tiene 29 días
  }

  // Verificar si el día es válido (dentro del rango de días para el mes)
  if (dia < 1 || dia > diasPorMes[mes - 1]) {
    return false;
  }

  return true; // Si pasa todas las verificaciones, la fecha es válida
}

// Función para determinar si un año es bisiesto (la misma función que mencionamos anteriormente)

function esBisiesto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Ejemplos de uso
console.log(esFechaValida(29, 2, 2020)); // true, fecha válida en año bisiesto
console.log(esFechaValida(29, 2, 2021)); // false, fecha no válida en año no bisiesto
console.log(esFechaValida(31, 4, 2023)); // false, abril solo tiene 30 días
console.log(esFechaValida(15, 13, 2023)); // false, mes no válido
console.log(esFechaValida(15, 6, 99999)); // false, año no válido
