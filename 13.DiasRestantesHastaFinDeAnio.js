//* Dada una fecha indicar los dias que faltan hasta fin de anio

//Dada una fecha (día, mes, año), indicar si es válida o no.
const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function esFechaValida(dia, mes, ano) {
  // Verificar si el año es válido (entre un rango razonable)
  if (ano < 1 || ano > 9999) {
    return false;
  }
  if (mes < 1 || mes > 12) {
    return false;
  }

  // Verificar si el año es bisiesto y ajustar febrero
  if (esBisiesto(ano)) {
    diasPorMes[1] = 29; // Si es bisiesto, febrero tiene 29 días
  }
  if (dia < 1 || dia > diasPorMes[mes - 1]) {
    return false;
  }
  return true;
}

// Función para determinar si un año es bisiesto
function esBisiesto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function diasRestantesDelMes(dia, mes, anio) {
  let diasRestantes = 0;
  if (esFechaValida(dia, mes, anio)) {
    // Verificar si el año es bisiesto y ajustar febrero
    if (esBisiesto(anio)) {
      diasPorMes[1] = 29; // Si es bisiesto, febrero tiene 29 días
    } else {
      diasRestantes = diasPorMes[mes + 1] - dia;
    }
  }
  return diasRestantes;
}

function diasRestantesParaFinDeAnio(dia, mes, anio) {
  let diasAcumulados = 0;
  let diasRestantesParaFinDeAnio = 0;
  let diasRestantesMes = 0;
  diasRestantesMes += diasRestantesDelMes(dia, mes, anio);
  for (let i = 0; i < mes; i++) {
    diasAcumulados += diasPorMes[i];
  }
  diasRestantesParaFinDeAnio = 365 - diasAcumulados + diasRestantesMes;
  return diasRestantesParaFinDeAnio;
}

console.log(
  "faltan para terminar el anio",
  diasRestantesParaFinDeAnio(24, 10, 2023) + " dias"
);
