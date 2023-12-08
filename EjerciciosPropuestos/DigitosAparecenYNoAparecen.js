//* Realiza un programa que diga los dígitos que aparecen y los que no aparecen en un número entero introducido por teclado. El orden es el que se muestra en los ejemplos. Utiliza el tipo long para que el usuario pueda introducir números largos.
//* Ejemplo 1:
//* Introduzca un número entero: 67706
//* Dígitos que aparecen en el número: 0 6 7
//* Dígitos que no aparecen: 1 2 3 4 5 8 9

function DevuelveDigitosQueNoAparecen(numero) {
  let numerosAparecen = [];
  let numerosNoAparecen = [];
  let numeroCadena = numero.toString().split("");
  let arregloNumeros = numeroCadena.map((numero) => parseInt(numero));
  for (let i = 1; i <= 9; i++) {
    if (arregloNumeros.includes(arregloNumeros[i])) {
      numerosAparecen.push(i);
    } else {
      numerosNoAparecen.push(i);
    }
  }
  console.log(numerosAparecen);
  console.log(numerosNoAparecen);
}

let respuesta = DevuelveDigitosQueNoAparecen(67706);
console.log(respuesta);
