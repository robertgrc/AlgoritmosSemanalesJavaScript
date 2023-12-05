//* Dada una lista de precios en formato decimal, utiliza map para formatear cada precio a tres decimales y añadir el símbolo de la moneda, por ejemplo, "$" al inicio.

function FormatearPrecios(precios) {
  return precios.map((precio) => `$${precio.toFixed(3)}`);
}

// Ejemplo de uso
const listaDePrecios = [10.5, 25.75, 5.99];
const preciosFormateados = FormatearPrecios(listaDePrecios);

console.log(preciosFormateados);

// expected ['$10.500', '$25.750', '$5.990']
