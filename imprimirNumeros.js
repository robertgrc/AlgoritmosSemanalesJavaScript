// * Enunciado: Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno). ¿De cuántas maneras eres capaz de hacerlo? Crea el código para cada una de ellas.

function imprimeNumeros(num) {
  for (let i = 1; i < num + 1; i++) {
    console.log(i);
  }
}
const numero = imprimeNumeros(10);

//* cuenta numeros desde el numero que le pasamos por parametro

function contarNumeros(numero) {
  if (numero <= 10) {
    console.log(numero);
    contarNumeros(numero + 1);
  }
}
contarNumeros(7);
