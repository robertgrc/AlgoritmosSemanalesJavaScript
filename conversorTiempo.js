//* Enunciado: Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.

function calcularMilisegundos(dias, horas, minutos, segundos) {
  const milisegundosPorSegundo = 1000;
  const milisegundosPorMinuto = milisegundosPorSegundo * 60;
  const milisegundosPorHora = milisegundosPorMinuto * 60;
  const milisegundosPorDia = milisegundosPorHora * 24;

  const totalMilisegundos =
    dias * milisegundosPorDia +
    horas * milisegundosPorHora +
    minutos * milisegundosPorMinuto +
    segundos * milisegundosPorSegundo;

  return totalMilisegundos;
}

const dias = 2;
const horas = 12;
const minutos = 30;
const segundos = 15;

const resultado = calcularMilisegundos(dias, horas, minutos, segundos);
console.log(resultado);
// Salida: 207015000 (milisegundos)
