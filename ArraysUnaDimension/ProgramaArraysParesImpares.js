//* Realiza un programa que pida 8 números enteros y que luego muestre esos números junto con la palabra “par” o “impar” según proceda.

function recibeNumerosVerificaPares(numeros) {
  let respuesta = [];
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] % 2 === 0
      ? respuesta.push(`${numeros[i]} es Par`)
      : respuesta.push(`${numeros[i]} es impar`);
  }
  return respuesta;
}

let numeros = [15, 20, 33, 57, 70, 141, 210, 280, 355, 770];

console.log(recibeNumerosVerificaPares(numeros));
