//* Realiza un programa que pinte una pirámide por pantalla. La altura se debepedir por teclado. El carácter con el que se pinta la pirámide también se debe pedir por teclado. La piramide tiene que ser hueca

function imprimirPiramideHueca(altura, caracter) {
  for (let i = 1; i <= altura; i++) {
    let espacios = " ".repeat(altura - i);
    let linea;

    // Si es la primera o la última fila, o si estamos en una columna de borde, imprime el carácter
    if (i === 1 || i === altura || i === 2 || i === altura - 1) {
      linea = caracter.repeat(2 * i - 1);
    } else {
      // Si no, imprime el carácter solo en las columnas de borde
      linea = caracter + " ".repeat(2 * (i - 1) - 1) + caracter;
    }

    console.log(espacios + linea);
  }
}

// Ejemplo de uso: imprimir una pirámide hueca de altura 7 con asteriscos
imprimirPiramideHueca(7, "*");
