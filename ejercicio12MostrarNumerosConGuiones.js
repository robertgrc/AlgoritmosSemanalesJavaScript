//* Enunciado Dado un numero mostrar todos los numeros desde ese al 0, de 8 en 8 en una lista con guiones donde cada numero debe empezar por n.-
// ejemplo
//* n.-100
//* n.-92
//* n.-84
//* n.-76

function mostrarNumerosHastaCero(numero) {
  resultado = `---Del ${numero} al 0 --- \n`;
  while (numero > 0) {
    resultado += `- numero ${numero} \n`;
    numero -= 8;
  }
  resultado += "---FIN---";
  return resultado;
}

let numero = 100;

console.log(
  `mostrar los numeros desde ${numero} hasta 0`,
  mostrarNumerosHastaCero(numero)
);
