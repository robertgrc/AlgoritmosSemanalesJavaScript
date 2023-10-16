//* Dados dos numeros devolver cuantos numeros impares hay entre ellos

function numerosImparesEnUnRango(limiteInferior, limiteSuperior) {
  let contadorNumerosImpares = 0;
  for (let i = limiteInferior; i <= limiteSuperior; i++) {
    if (i % 2 !== 0) {
      contadorNumerosImpares += 1;
    }
  }
  return contadorNumerosImpares;
}

let limiteInferior = 1;
let limiteSuperior = 100;

console.log(
  `Los numeros impares entre ${limiteInferior}, y ${limiteSuperior} son:`,
  numerosImparesEnUnRango(limiteInferior, limiteSuperior)
);
