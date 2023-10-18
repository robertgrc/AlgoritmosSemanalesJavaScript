//* Dado un numero mostrar su serie de fibonacci
//*La serie de fibonacci es un orden de numeros donde cada numero es la suma de los dos anteriores
//* ejemplos fib(10)[0]
//* serie completa: 0,1,1,2,3,5,8,13,21,34,55
//* resultado de la serie: 55

function serieFibonacci(numero) {
  let numeroPrimero = 0;
  let numeroSegundo = 1;
  let numeroSumatoria = 0;
  let serie = [0, 1];

  for (let i = 2; i <= numero; i++) {
    numeroSumatoria = numeroPrimero + numeroSegundo;
    serie.push(numeroSumatoria);
    numeroPrimero = numeroSegundo;
    numeroSegundo = numeroSumatoria;
  }
  const serieCompleta = `serie completa: ${serie}`;
  const resultadoSerie = `resultado de la serie: ${numeroSumatoria}`;

  return serieCompleta + "\n" + resultadoSerie;
}

console.log(serieFibonacci(10));
