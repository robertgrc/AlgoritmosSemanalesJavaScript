//* Dado un numero realizar su tabla de multiplicar

function tablaMultiplicar(numero) {
  let tabla = "";
  for (let i = 1; i <= 10; i++) {
    tabla += `${i}*${numero}= ${1 * numero} \n`;
  }
  return tabla;
}

console.log(tablaMultiplicar(7));
