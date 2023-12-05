//* Dada una lista de nombres en formato "nombre, apellido", utiliza map para crear una nueva lista que contenga los nombres en formato "apellido, nombre".

function CambiarFormatoNombres(nombres) {
  const [nombreParte, apellidoParte] = nombres.split(", ");
  return `${apellidoParte}, ${nombreParte}`;
}

let listaNombres = ["Robert, Rodriguez", "Conor, Callaguer", "Cesare, Casadei"];

// Utilizar Map para aplicar la funcion a cada elemento de la lista
const listaNombresCambiados = listaNombres.map(CambiarFormatoNombres);
console.log(listaNombresCambiados);
