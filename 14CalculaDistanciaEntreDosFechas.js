//* Calcular la distancia entre dos fechas

function esAnoBisiesto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

function calcularDiferenciaFechas(dia1, mes1, ano1, dia2, mes2, ano2) {
  const fecha1 = new Date(ano1, mes1 - 1, dia1);
  const fecha2 = new Date(ano2, mes2 - 1, dia2);

  const diferenciaEnMilisegundos = fecha2 - fecha1;
  const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

  let anosDiferencia = ano2 - ano1;
  let mesesDiferencia = mes2 - mes1;

  if (diferenciaEnDias < 0) {
    anosDiferencia--;
    mesesDiferencia += 12;
  }

  const diasDiferencia = dia2 - dia1;

  if (diasDiferencia < 0) {
    const ultimoDiaDelMesAnterior = new Date(ano2, mes2 - 1, 0).getDate();
    diasDiferencia += ultimoDiaDelMesAnterior;
    mesesDiferencia--;
  }

  if (mesesDiferencia < 0) {
    anosDiferencia--;
    mesesDiferencia += 12;
  }

  return {
    diferenciaEnDias,
    anosDiferencia,
    mesesDiferencia,
    diasDiferencia,
  };
}

// Ejemplo de uso:
const resultado = calcularDiferenciaFechas(11, 9, 2001, 24, 10, 2023);

console.log("Diferencia en días:", resultado.diferenciaEnDias);
console.log("Años:", resultado.anosDiferencia);
console.log("Meses:", resultado.mesesDiferencia);
console.log("Días:", resultado.diasDiferencia);
