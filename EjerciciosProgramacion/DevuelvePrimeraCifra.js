//* Escribe un programa que diga cuál es la primera cifra de un número entero introducido un arreglo de numeros

function extraerPrimeraCifra(listaNumeros) {
  // Utilizar el método map para aplicar la función a cada elemento de la lista
  const primerasCifras = listaNumeros.map((numero) => {
    // Convertir el número a una cadena y extraer la última cifra
    const cadenaNumero = numero.toString();
    const primeraCifra = parseInt(cadenaNumero.charAt(0));
    return primeraCifra;
  });

  return primerasCifras;
}

let numeros = [1231, 73736, 8383787, 92847];
const primerasCifras = extraerPrimeraCifra(numeros);

console.log("Primeras cifras de cada número:", primerasCifras);
