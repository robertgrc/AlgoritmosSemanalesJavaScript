//* En este caso, el número se pasa por valor, y cualquier modificación dentro de la función no afecta a la variable original fuera de la función.

function incrementar(numero) {
  numero++;
  console.log("Dentro de la función:", numero);
}

let miNumero = 5;
console.log("Antes de la función:", miNumero);

incrementar(miNumero);

console.log("Después de la función:", miNumero);

//*---
//*En este ejemplo, el array se pasa por valor, pero el valor es una referencia al objeto en memoria. Por lo tanto, cualquier modificación dentro de la función afectará al objeto original fuera de la función.
function agregarElemento(array) {
  array.push(4);
  console.log("Dentro de la función:", array);
}

let miArray = [1, 2, 3];
console.log("Antes de la función:", miArray);

agregarElemento(miArray);

console.log("Después de la función:", miArray);
