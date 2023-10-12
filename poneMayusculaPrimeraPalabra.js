// * Enunciado: Crea una función que reciba un String de cualquier tipo y se encargue de
// * poner en mayúscula la primera letra de cada palabra.
// * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.

function capitalizarPrimerasLetras(cadena) {
  let palabras = cadena.split(" ");
  let resultado = [];

  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let primeraLetra = palabra.charAt(0).toUpperCase();
    let restoPalabra = palabra.slice(1).toLowerCase();
    let palabraFormateada = primeraLetra + restoPalabra;
    resultado.push(palabraFormateada);
  }

  return resultado.join(" ");
}

// Ejemplo de uso
let texto = "elohim";
let textoCapitalizado = capitalizarPrimerasLetras(texto);
console.log(textoCapitalizado);
