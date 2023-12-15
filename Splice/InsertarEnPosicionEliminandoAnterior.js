// Insertar el número 10 en la posición 2 eliminando el anterior

let arreglo = [1, 2, 3, 4, 5];
arreglo.splice(2, 1, 10);

// En este caso, splice(2, 1, 10) reemplaza el elemento en la posición 2 con el número 10.
//El segundo parametro en este ejemplo ponemos 1 ahi dice la cantidad de elementos que queremos eliminar
console.log(arreglo);
