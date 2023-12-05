//* Dado un numero mostrar su tabla de multiplicar

function muestraTablaMultiplicar(numero) {
  let tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(`${i} * ${numero} = ${i * numero}`);
  }
  return tabla;
}

console.log(muestraTablaMultiplicar(7));
console.log(muestraTablaMultiplicar(9));
