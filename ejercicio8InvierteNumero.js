//* Dado un numero entero inviertelo y devuelve de nuevo el entero

function invierteNumero(numero) {
  numeroInvertido = numero.toString().split("").reverse().join("");
  numeroInvertidoTypeNumber = parseInt(numeroInvertido);
  console.log(typeof numeroInvertidoTypeNumber);
  return numeroInvertidoTypeNumber;
}

let numero = 735;
invierteNumero(numero);

console.log(
  `invierte el numero: ${numero} el inverso es:`,
  invierteNumero(numero)
);
