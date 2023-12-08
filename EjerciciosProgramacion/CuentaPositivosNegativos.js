//* Escribe un programa que lea una lista de diez números y determine cuántos son positivos, y cuántos son negativos.

function ContadorPositivosNegativos(listaNumeros) {
  let ContadorPositivos = 0;
  let ContadorNegativos = 0;
  listaNumeros.map((numero) => {
    numero > 0 ? ContadorPositivos++ : ContadorNegativos++;
  });
  return `positivos:${ContadorPositivos}, negativos ${ContadorNegativos}`;
}

let listaNumeros = [20, 34, -78, 234, -3, 5, 7, -1, 12, 33];

console.log(ContadorPositivosNegativos(listaNumeros));
