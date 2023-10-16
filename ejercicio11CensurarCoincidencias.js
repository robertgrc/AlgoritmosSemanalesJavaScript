//* Dado un texto y una busqueda censurar todas las coincidencias de la busqueda en el texto con [-censurado-]
//* Si texto y la busqueda estan vacios mostrar el mensaje "No puedes Leer texto o la busqueda" en caso que ambos parametros no lleguen

function censurar(texto = false, busqueda = false) {
  let resultado = "";
  if (!texto && !busqueda) {
    resultado = "No puedes Leer texto y la busqueda";
  } else if (!texto && busqueda) {
    resultado = "No puedes Leer el texto";
  } else if (texto && !busqueda) {
    resultado = "No puedes leer la Busqueda";
  } else if (texto && busqueda) {
    resultado = texto.replace(new RegExp(busqueda, "gi"), "[-CENSURADO-]");
  }
  return resultado;
}

// censurar("En un principio creo Elohim los cielos y la tierra", "cielos");
console.log(censurar("hola hola hola", "hola"));
