//* Escribe un programa que diga cuál es la última cifra de un número entero introducido por teclado.

function extraerUltimaCifra(listaNumeros) {
  // Utilizar el método map para aplicar la función a cada elemento de la lista
  const ultimasCifras = listaNumeros.map((numero) => {
    // Convertir el número a una cadena y extraer la última cifra
    const cadenaNumero = numero.toString();
    const ultimaCifra = parseInt(
      cadenaNumero.charAt(cadenaNumero.length - 1),
      10
    );
    return ultimaCifra;
  });

  return ultimasCifras;
}

let numeros = [1231, 73736, 8383787, 92847];
const ultimasCifras = extraerUltimaCifra(numeros);

console.log("Últimas cifras de cada número:", ultimasCifras);
