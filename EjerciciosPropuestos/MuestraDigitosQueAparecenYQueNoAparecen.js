//* Realiza un programa que diga los dígitos que aparecen y los que no aparecen en un número entero introducido por teclado. El orden es el que se muestra en los ejemplos. Utiliza el tipo long para que el usuario pueda introducir números largos.
//* Ejemplo 1:
//* Introduzca un número entero: 67706
//* Dígitos que aparecen en el número: 0 6 7
//* Dígitos que no aparecen: 1 2 3 4 5 8 9

function obtenerDigitos(numero) {
  // Convertir el número a una cadena para facilitar el manejo de los dígitos
  const numeroStr = numero.toString();

  // Conjunto de todos los dígitos posibles (0-9)
  const todosLosDigitos = new Set([...Array(10).keys()].map(String));
  console.log(todosLosDigitos);

  // Conjunto de dígitos presentes en el número
  const digitosPresentes = new Set(numeroStr.split(""));
  console.log(digitosPresentes);

  // Conjunto de dígitos ausentes en el número
  const digitosAusentes = new Set(
    [...todosLosDigitos].filter((digito) => !digitosPresentes.has(digito))
  );

  // Convertir conjuntos a arrays y devolverlos
  return [Array.from(digitosPresentes), Array.from(digitosAusentes)];
}

// Ejemplo de uso
const numeroEjemplo = 67706;
const [digitosPresentes, digitosAusentes] = obtenerDigitos(numeroEjemplo);

console.log(`Dígitos presentes en ${numeroEjemplo}: ${digitosPresentes}`);
console.log(`Dígitos ausentes en ${numeroEjemplo}: ${digitosAusentes}`);
