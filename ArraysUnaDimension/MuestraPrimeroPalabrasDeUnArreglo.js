//* Escribe un programa que pida 8 palabras y las almacene en un array. A continuación, las palabras correspondientes a colores se deben almacenar al comienzo y las que no son colores a continuación. Puedes utilizar tantos arrays auxiliares como quieras. Los colores que conoce el programa deben estar en otro array y son los siguientes: verde, rojo, azul, amarillo, naranja, rosa, negro, blanco y morado

// original │casa │azul │verde │orden │morado │bombilla│bici │rosa

//expected  │azul │verde │morado │rosa │casa │orden │bombilla│bici

function ordenaPalabras(palabras, palabrasConocidas) {
  let palabrasReconocidas = [];
  let palabrasNoConocidas = [];
  for (let i = 0; i < palabras.length; i++) {
    palabrasConocidas.includes(palabras[i])
      ? palabrasReconocidas.push(palabras[i])
      : palabrasNoConocidas.push(palabras[i]);
  }
  return [...palabrasReconocidas, ...palabrasNoConocidas];
}

let palabrasConocidas = [
  "verde",
  "rojo",
  "azul",
  "amarillo",
  "naranja",
  "rosa",
  "negro",
  "blanco",
  "morado",
];

let palabras = [
  "casa ",
  "azul",
  "verde",
  "orden",
  "morado",
  "bombilla",
  "bici",
  "rosa",
];
console.log(ordenaPalabras(palabras, palabrasConocidas));
