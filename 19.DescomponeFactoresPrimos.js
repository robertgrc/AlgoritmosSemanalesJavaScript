//*  Escribir una función que reciba un número entero 𝑘 e imprima su descomposición en factores primos

function descomponeNumeroFactoresPrimos(numero) {
  if (numero < 2) {
    console.log("El número debe ser mayor o igual a 2.");
    return;
  }
  let respuesta = "";
  let factor = 2;
  while (factor <= numero) {
    if (numero % factor === 0) {
      console.log(factor);
      respuesta += numero + "|" + factor + "\n";
      numero = numero / factor;
    } else {
      factor++;
    }
  }
  console.log(respuesta);
}

// Ejemplo de uso
descomponeNumeroFactoresPrimos(24);
