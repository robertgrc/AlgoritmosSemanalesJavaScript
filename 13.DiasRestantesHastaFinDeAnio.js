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

//* Calcula dias restantes para fin de mes

function diasRestantesDelMes(dia, mes, anio) {
  let diasRestantes = 0;
  if (esFechaValida(dia, mes, anio)) {
    // Verificar si el año es bisiesto y ajustar febrero
    if (esBisiesto(anio)) {
      diasPorMes[1] = 29; // Si es bisiesto, febrero tiene 29 días
      diasRestantes = diasPorMes[mes + 1] - dia;
    } else {
      diasRestantes = diasPorMes[mes + 1] - dia;
    }
  } else {
    console.log("Fecha invalida");
  }
  return diasRestantes;
}

//* Calcula dias restantes para fin de anio

function diasRestantesParaFinDeAnio(dia, mes, anio) {
  let diasAcumulados = 0;
  let diasRestantesParaFinDeAnio = 0;
  let diasRestantesMes = 0;

  diasRestantesMes += diasRestantesDelMes(dia, mes, anio);
  //   console.log("diasRestantesMes", diasRestantesMes);
  for (let i = 0; i < mes; i++) {
    if (esBisiesto(anio)) {
      // Si es bisiesto, febrero tiene 29 días
      diasPorMes[1] = 29;
      diasAcumulados += diasPorMes[i];
      //   console.log("diasAcumuladosbisiesto", diasAcumulados);
    } else {
      diasAcumulados += diasPorMes[i];
      //   console.log("diasAcumulados anio normal", diasAcumulados);
    }
  }
  if (esBisiesto(anio)) {
    diasRestantesParaFinDeAnio = 366 - diasAcumulados + diasRestantesMes;
  } else {
    diasRestantesParaFinDeAnio = 365 - diasAcumulados + diasRestantesMes;
  }
  return diasRestantesParaFinDeAnio;
}

// console.log(
//   "faltan para terminar el año",
//   diasRestantesParaFinDeAnio(1, 1, 1984) + " dias"
// );

//*Calcular los dias trasncurridos hasta una fecha dada

function DiasTransCurridosDelAnio(dia, mes, anio) {
  let diasTranscurridos = 0;
  let diasRestantesMes = 0;

  if (esBisiesto(anio)) {
    diasPorMes[1] = 29;
  }

  diasRestantesMes += diasRestantesDelMes(dia, mes, anio);
  for (let i = 0; i < mes; i++) {
    diasTranscurridos += diasPorMes[i];
  }
  diasTranscurridos -= diasRestantesMes;
  return diasTranscurridos;
}

// console.log(
//   "transcurrieron la cantidad de:",
//   DiasTransCurridosDelAnio(24, 10, 2023) + " dias desde el principio de año"
// );

//* Dadas dos fechas (día1, mes1, año1, día2, mes2, año2), indicar el tiempo transcurrido entre ambas, en años, meses y días.

function calculaDistanciaDiasEntreFechas(dia1, mes1, anio1, dia2, mes2, anio2) {
  if (esFechaValida(dia1, mes1, anio1) && esFechaValida(dia2, mes2, anio2)) {
    let aniosCompletosEnDias = 0;
    let cantidadDias = 0;

    for (let i = 0; i < anio2 - anio1; i++) {
      let anioActual = anio1 + i;
      console.log(anioActual);
      if (esBisiesto(anioActual)) {
        aniosCompletosEnDias += 366;
        console.log(anioActual);
      } else {
        aniosCompletosEnDias += 365;
      }
    }
    console.log("aniosCompletosEnDias", aniosCompletosEnDias);
  } else {
    console.log("Error Fecha ingresada no valida");
  }
}

calculaDistanciaDiasEntreFechas(10, 11, 2017, 1, 10, 2019);
