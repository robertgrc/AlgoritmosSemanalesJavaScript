//* Cuanto es el X porciento de un numero = num?
//* necesitamos dos parametros X= porcentaje  y el numero

function calculaPorcentaje(porcentaje, numero) {
  let porcentajeNumero = numero * (porcentaje / 100);
  return porcentajeNumero;
}

let porcentaje = 50;
let numero = 5000;

console.log(
  `El ${porcentaje}% de ${numero} es:`,
  calculaPorcentaje(porcentaje, numero)
);
