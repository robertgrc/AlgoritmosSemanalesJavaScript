//* Realiza un programa que nos diga cuántos dígitos tiene un número entero que puede ser positivo o negativo.

function CuentaDigitos(numeros) {
  let digitos = numeros.map((numero) => {
    // const numeroString = numero.toString();
    const numeroString = Math.abs(numero).toString();
    return numeroString.length;
  });
  return digitos;
}

let listaNumeros = [213231, -3323, 797373739, 841, -14123123, 2144322222];

console.log(CuentaDigitos(listaNumeros));
