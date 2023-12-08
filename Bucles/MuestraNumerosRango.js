//* Muestra los números introduciendo el rango como parametro limiteinf y limiteSup por ejemplo 320 al 160 , contando de 20 en 20 hacia atrás utilizando un bucle for.

function muestraNumerosRango(limiteSuperior, limiteInferior) {
  for (let i = limiteSuperior; i >= limiteInferior; i -= 20) {
    console.log(i);
  }
}

let limiteSup = 320;
let limiteInf = 160;

muestraNumerosRango(limiteSup, limiteInf);
