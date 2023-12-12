//* Realiza un programa que pinte por pantalla diez líneas formadas por caracteres. El carácter con el que se pinta cada línea se elige de forma aleatoria entre uno de los siguientes: *, -, =, ., |, @. Las líneas deben tener una longitud aleatoria entre 1 y 40 caracteres

function generarCaracterAleatorio() {
  const caracteres = ["*", "-", "=", ".", "|", "@"];
  const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
  return caracteres[indiceAleatorio];
}

function generarLineaAleatoria() {
  const longitud = Math.floor(Math.random() * 40) + 1;
  const caracter = generarCaracterAleatorio();
  return caracter.repeat(longitud);
}

function pintarDiezLineas() {
  for (let i = 0; i < 10; i++) {
    const linea = generarLineaAleatoria();
    console.log(linea);
  }
}

// Llama a la función para pintar las diez líneas
pintarDiezLineas();
