//* Dado un numero mostrar a cuantos anios, meses y dias equivalen.
//* ejemplo calcularDias(920)
//* retorna ==> equivale a 2 anios, 6 meses, 10 dias

function calcularAniosMesesDias(dias) {
  let anios = Math.floor(dias / 365);
  let dias_restantes = dias % 365;
  let meses = Math.floor(dias_restantes / 30);
  let resto_dias = dias_restantes % 30;
  console.log(anios, meses, resto_dias);
  let respuesta = `equivale ${anios} años, ${meses} meses, ${resto_dias} dias`;
  return respuesta;
}

console.log(calcularAniosMesesDias(777));
