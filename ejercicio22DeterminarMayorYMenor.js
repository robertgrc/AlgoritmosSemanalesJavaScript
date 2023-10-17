//* Enunciado
//* Dados dos numeros indicar cual es el mayor y cual es el menor
//* ejemplo  mayorMenor(8,6)
//* devuelve EL NUMERO MAYOR ES:8
//* devuelve EL NUMERO MENOR ES:6

function mayorMenor(numero1, numero2) {
  let resultado = "";
  if (numero1 > numero2) {
    resultado = "El numero mayor es: " + numero1 + "\n";
    resultado += "El numero menor es: " + numero2;
  } else if (numero2 > numero1) {
    resultado = "El numero mayor es: " + numero2 + "\n";
    resultado += "El numero menor es: " + numero1;
  } else {
    resultado = "LOS NUMEROS SON IGUALES";
  }
  return resultado;
}

console.log(mayorMenor(8, 6));
console.log(mayorMenor(7, 14));
console.log(mayorMenor(7, 7));

// return `EL NUMERO MAYOR ES: ${numeroMayor}/n``EL NUMERO MENOR ES: ${numeroMenor}`;
