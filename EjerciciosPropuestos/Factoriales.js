//* que muestre a continuación los números desde el 1 al número introducido junto con su factorial.

function Factorial(num) {
  let acumulador = 1;
  for (let i = 1; i <= num; i++) {
    acumulador *= i;
  }
  console.log(acumulador);
}

function factoriales(numero) {
  for (let i = 1; i <= numero; i++) {
    Factorial(i);
  }
}

let numerosFactoriales = factoriales(7);

//* Función para calcular el factorial de un número
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}

// Función para mostrar números y sus factoriales hasta un número dado
function mostrarFactorialesHasta(numero) {
  if (isNaN(numero) || numero < 1) {
    console.log("Por favor, ingrese un número entero positivo válido.");
    return;
  }

  // Muestra los números y sus factoriales
  console.log("Números y sus factoriales:");
  for (let i = 1; i <= numero; i++) {
    const factorial = calcularFactorial(i);
    console.log(`${i}! = ${factorial}`);
  }
}

// Puedes llamar a la función con un número específico, por ejemplo, 5
mostrarFactorialesHasta(7);
