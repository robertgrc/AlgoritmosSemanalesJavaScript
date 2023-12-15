//* como en la mayoría de lenguajes de programación existen dos maneras de pasar parámetros: por valor y por referencia. Cuando se pasa un parámetro por valor, en realidad se pasa una copia de la variable, únicamente importa el valor. Cualquier modificación que se le haga a la variable que se pasa como parámetro dentro de la función no tendrá ningún efecto fuera de la misma. Veamos un ejemplo.

function main() {
  let n = 10;
  console.log(n);
  calcula(n);
  console.log(n);
}

function calcula(x) {
  x += 24;
  console.log(x);
}

main();
