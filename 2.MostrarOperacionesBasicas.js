//* Escribir funciones que resuelvan los siguientes problemas:
//* a) Dados dos números, imprimir la suma, resta, división y multiplicación de ambos

function operacionesBasicas(num1, num2) {
  let respuesta = "";
  let suma = num1 + num2;
  let resta = num1 - num2;
  let multiplicacion = num1 * num2;
  let division = num1 / num2;
  respuesta = `
  ${num1} + ${num2} = ${suma}\n 
  ${num1} - ${num2} = ${resta}\n 
  ${num1} * ${num2} = ${multiplicacion}\n 
  ${num1} / ${num2} = ${division}\n`;
  return respuesta;
}

console.log(operacionesBasicas(14, 7));
