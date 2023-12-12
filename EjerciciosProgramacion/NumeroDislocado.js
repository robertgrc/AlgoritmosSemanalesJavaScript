//* Escribe un programa que pida un número por teclado y que luego lo “disloque” de tal forma que a cada dígito se le suma 1 si es par y se le resta 1 si es impar. Usa long en lugar de int donde sea necesario para admitir números largos.

// Ejemplo 1:
// Por favor, introduzca un número: 9402
// Dislocando el 9402 sale el 8513.
// Ejemplo 2:
// Por favor, introduzca un número: 870958422
// Dislocando el 870958422 sale el 961849533.
// Ejemplo 3:
// Por favor, introduzca un número: 137
// Dislocando el 137 sale el 26

function NumeroDislocado(numero) {
  let cadenaNumero = numero
    .toString()
    .split("")
    .map((digito) => {
      const num = parseInt(digito);
      return num % 2 === 0 ? num + 1 : num - 1;
    });

  let numDislocado = parseInt(cadenaNumero.join(""));
  return numDislocado;
}

console.log(NumeroDislocado(9402));
console.log(NumeroDislocado(870958422));
console.log(NumeroDislocado(137));
