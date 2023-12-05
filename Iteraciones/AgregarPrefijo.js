//* Dada una lista de palabras, utiliza map para añadir un prefijo a cada palabra. Por ejemplo, añadir "re-" a cada palabra.

function AgregarPrefijo(lista, prefijo) {
  return lista.map((elemento) => `${prefijo}${elemento}`);
}

let ListaSinPrefijo = ["agil", "lento", "veloz", "inteligente"];
let prefijo = "recontra-";
let conPrefijo = AgregarPrefijo(ListaSinPrefijo, prefijo);
console.log(conPrefijo);
