// *Enunciado Dado un numero devolver su tabla de multiplicar Completa

function tablaMultiplicar(numero) {
  let resultado = `# tabla del numero ${numero} # \n`;
  for (let i = 1; i <= 10; i++) {
    let producto = i * numero;
    console.log(`${i} * ${numero} = ${producto}`);
    resultado += `${i} * ${numero} = ${producto} \n`;
  }
  return resultado;
}

tablaMultiplicar(7);

let tabla = tablaMultiplicar(5);
console.log(tabla);
