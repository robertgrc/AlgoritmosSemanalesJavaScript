//* Dado un arreglo de números, encuentra la suma de los números pares.

function sumaNumerosPares(arreglo) {
  const suma = arreglo.reduce((acumulador, numero) => {
    if (numero % 2 === 0) {
      console.log("acumulador", acumulador);
      console.log("numero", numero);
      return acumulador + numero;
    }
    //Si no es par simplemente devolver el acumulador sin cambios
    console.log("acumuladorimpares", acumulador);
    return acumulador;
  }, 0);
  return suma;
}
// Ejemplo de uso
const arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = sumaNumerosPares(arregloNumeros);
console.log(`La suma de los números pares es: ${resultado}`);
