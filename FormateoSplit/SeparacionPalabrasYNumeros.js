//* Dada una lista que contiene elementos de la forma "palabra123", utiliza map para dividir cada elemento en dos partes: la palabra y el número.

function dividirElementos(lista) {
  return lista.map((elemento) => {
    const match = elemento.match(/([a-zA-Z]+)(\d+)/);
    console.log({ palabra: match[1], numero: parseInt(match[2], 10) });
    return { palabra: match[1], numero: parseInt(match[2], 10) };
  });
}

// Ejemplo de uso
const elementos = ["hola123", "javascript456", "openai789"];
const elementosDivididos = dividirElementos(elementos);

console.log(elementosDivididos);
