//* Define un array de 12 números enteros con nombre num y asigna los valores según la tabla que se muestra a continuación. Muestra el contenido de todos los elementos del array. ¿Qué sucede con los valores de los elementos que no han sido inicializados?

// indice   0    1   2   3   4   5   6   7   8   9   10  11
// valor    39  -2           0       14      5  120

let num = [39, -2, , , 0, , 14, , 5, 120, , ,];
console.log("arreglo num", num);
console.log("longitud", num.length);
console.log(num[0]);
console.log(num[1]);
console.log(num[4]);
console.log(num[6]);
console.log(num[8]);
console.log(num[9]);
