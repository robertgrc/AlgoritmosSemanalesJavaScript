//* Escribir una función que reciba una cadena que contiene un largo número entero y devuelva una cadena con el número y las separaciones de miles. Por ejemplo, si recibe '1234567890', debe devolver '1.234.567.890'.

function formatearNumeroConSeparadores(cadenaNumerica) {
  const partes = cadenaNumerica.split(".");
  const parteEntera = partes[0];
  let resultado = "";

  for (let i = parteEntera.length - 1, contador = 0; i >= 0; i--, contador++) {
    if (contador > 0 && contador % 3 === 0) {
      resultado = "." + resultado; // Agrega un punto cada tres dígitos
    }
    resultado = parteEntera[i] + resultado;
  }

  if (partes.length > 1) {
    resultado += "." + partes[1]; // Agrega la parte decimal si existe
  }

  return resultado;
}

// Ejemplo de uso
const formateado = formatearNumeroConSeparadores("1234567890777");
console.log(formateado); // Devuelve '1.234.567.890'

//*Forma Acortada de formatear los puntos de miles millones etc

function formatearNumeroConSeparadores(cadenaNumerica) {
  const numeroFormateado = Number(cadenaNumerica).toLocaleString("es-ES");
  return numeroFormateado;
}

// Ejemplo de uso
const numeroFormateado = formatearNumeroConSeparadores("1234567890");
console.log(numeroFormateado); // Devuelve '1.234.567.890'

//* Forma Acortada segunda version

function formatearNumero(cadenaNumerica) {
  const partes = cadenaNumerica.split(".");
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return partes.join(".");
}

// Ejemplo de uso
const numFormateado = formatearNumero("1234567890");
console.log(numFormateado);
