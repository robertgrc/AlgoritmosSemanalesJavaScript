//* Escribe un programa  a continuación el programa mostrará el array destacara máximo y el mínimo. Seguidamente se volverá a mostrar el array escribiendo el número destacado entre dobles asteriscos. el numero menor entre<<>>
// Ejemplo:
// 459 204 20 250 178 90 353 32 229 357 224 454 260 310 140 249 332 426 423 413 96

function DestacaMaximoMinimo(arreglo) {
  let arregloDestacandoMaximoYMinimo = [];
  let maximo = Math.max(...arreglo);
  let minimo = Math.min(...arreglo);

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === maximo) {
      arregloDestacandoMaximoYMinimo.push(`**${arreglo[i]}**`);
    } else if (arreglo[i] === minimo) {
      arregloDestacandoMaximoYMinimo.push(`<<${arreglo[i]}>>`);
    } else {
      arregloDestacandoMaximoYMinimo.push(arreglo[i]);
    }
  }
  return arregloDestacandoMaximoYMinimo;
}
let ArrayNumeros = [459, 204, 20, 250, 178, 90, 353, 32, 229, 357];
console.log(DestacaMaximoMinimo(ArrayNumeros));
