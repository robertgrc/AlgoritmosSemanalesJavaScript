//* Escribe un programa que pida un número entero positivo por teclado y que muestre a continuación los 5 números consecutivos a partir del número introducido. Al lado de cada número se debe indicar si se trata de un primo o no.

function muestraNumerosConsecutivos(numero) {
  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    if (numero <= 3) {
      return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = numero; i <= numero + 5; i++) {
    if (esPrimo(i) === true) {
      console.log(`${i} Es primo`);
    } else {
      console.log(`${i} no es primo`);
    }
  }
}

muestraNumerosConsecutivos(7);
