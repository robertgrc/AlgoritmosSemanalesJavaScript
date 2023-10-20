//* Dado un umero devolver cuantos bucles tiene.
//* un numero tiene bucle cuando tiene un circulo cerrado, cuando lo dibujas por lo que 6 tiene un bucle y 8 tiene dos bucles, 6 y 9 tienen a un bucle y cero es un bucle

//*ejemplos   bucles(28861)
//* devuelve: 5

function bucles(numero) {
  let contadorBucles = 0;
  let numeroCadena = numero.toString().split("");
  for (let num of numeroCadena) {
    num = parseInt(num);
    if (num === 6 || num === 9 || num === 0) {
      contadorBucles++;
    } else if (num === 8) {
      contadorBucles += 2;
    }
  }
  return contadorBucles;
}

console.log(bucles(48699077));
