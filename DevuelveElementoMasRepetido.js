function elQueMasAparece(arregloOTexto) {
  if (Array.isArray(arregloOTexto)) {
    // Si el argumento es un arreglo, contamos las ocurrencias de cada elemento
    const conteo = {};
    let maximo = 0;
    let elementoMasFrecuente = null;

    arregloOTexto.forEach((elemento) => {
      if (conteo[elemento]) {
        conteo[elemento]++;
      } else {
        conteo[elemento] = 1;
      }

      if (conteo[elemento] > maximo) {
        maximo = conteo[elemento];
        elementoMasFrecuente = elemento;
      }
    });

    return elementoMasFrecuente;
  } else if (typeof arregloOTexto === "string") {
    // Si el argumento es una cadena de texto, contamos las palabras más frecuentes
    const palabras = arregloOTexto.split(" ");
    const conteo = {};
    let maximo = 0;
    let palabraMasFrecuente = null;

    palabras.forEach((palabra) => {
      if (conteo[palabra]) {
        conteo[palabra]++;
      } else {
        conteo[palabra] = 1;
      }

      if (conteo[palabra] > maximo) {
        maximo = conteo[palabra];
        palabraMasFrecuente = palabra;
      }
    });

    return palabraMasFrecuente;
  } else {
    // Manejar otros tipos de datos
    return null;
  }
}

console.log(elQueMasAparece([7, 2, 3, 4, 7, 8, 7])); // Devuelve 1
console.log(elQueMasAparece("Paola cami Paola maria")); // Devuelve "robert"
