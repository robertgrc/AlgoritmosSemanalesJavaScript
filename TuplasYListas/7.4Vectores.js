//* Vectores
//* a) Escribir una función que reciba dos vectores y devuelva su producto escalar.
//* c) Escribir una función que reciba dos vectores y devuelva si son paralelos o no.
//* d) Escribir una función que reciba un vector y devuelva su norma.

function ProductoEscalar(vector1, vector2) {
  let producto = [];
  for (let i = 0; i < vector1.length; i++) {
    producto.push(vector1[i] * vector2[i]);
  }
  return producto;
}

let v1 = [3, 4, 5, 7];
let v2 = [3, 4, 5, 7];

console.log(ProductoEscalar(v1, v2));

//* b) Escribir una función que reciba dos vectores y devuelva si son o no ortogonales.

// function sonOrtogonales(v1, v2) {
//   // Verificar que los vectores tengan la misma longitud
//   if (v1.length !== v2.length) {
//     throw new Error("Los vectores deben tener la misma longitud");
//   }

//   // Calcular el producto escalar
//   const productoEscalar = v1.reduce((acumulador, valor, indice) => {
//     console.log("acumulador", acumulador);
//     console.log("valor", valor);
//     console.log("indice", indice);
//     return acumulador + valor * v2[indice];
//   }, 0);

//   // Los vectores son ortogonales si su producto escalar es cero
//   return productoEscalar === 0;
// }

// // Ejemplo de uso
// const vector1 = [1, 2, 0];
// const vector2 = [0, -1, 2];

// const resultado = sonOrtogonales(vector1, vector2);
// console.log(resultado);
