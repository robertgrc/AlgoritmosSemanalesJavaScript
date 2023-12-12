//* Realiza un programa que sea capaz de desplazar todos los dígitos de un número de derecha a izquierda una posición. El dígito de más a la izquierda, pasaría a dar la vuelta y se colocaría a la derecha. Si el número tiene un solo dígito, se queda igual.

// Ejemplo 1:
// Introduzca un número: 609831
// El número resultado es 98316
// Ejemplo 2:
// Introduzca un número: 78201345
// El número resultado es 82013457
// Ejemplo 3:
// Introduzca un número: 24
// El número resultado es 42
// Ejemplo 4:
// Introduzca un número: 8
// El número resultado es 8

function desplazaNumero(numero) {
  let numeroStringCifraAMover = numero.toString().slice(0, 1);
  let numeroStringCuerpo = numero.toString().slice(1);
  let numeroModificado = parseInt(numeroStringCuerpo + numeroStringCifraAMover);
  return numeroModificado;
}

console.log(desplazaNumero(609831));
console.log(desplazaNumero(82013457));
console.log(desplazaNumero(42));
console.log(desplazaNumero(8));
