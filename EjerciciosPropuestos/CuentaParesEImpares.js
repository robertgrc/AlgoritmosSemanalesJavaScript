//* Escribe un programa que diga cuántos dígitos pares y cuántos dígitos impares hay dentro de un número. Se recomienda usar long en lugar de int ya que el primero admite números más largos

function cuentaDigitosParesImpares(numero) {
  let digitosPares = 0;
  let digitosImpares = 0;
  let numeroString = numero.toString().split("");
  const numeros = numeroString.map((numero) => {
    parseInt(numero);
    numero % 2 === 0 ? digitosPares++ : digitosImpares++;
  });
  return `El numero tiene digitos Pares: ${digitosPares} y digitos Impares: ${digitosImpares}`;
}

console.log(cuentaDigitosParesImpares(238472384));
