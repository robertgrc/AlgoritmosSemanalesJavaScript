//* Dada una lista de nombres en formato "nombre apellido", utiliza map para crear una nueva lista que contenga dos elementos en cada sublista: el nombre y el apellido por separado.

function FormateaNombres(nombresCompletos) {
  const [nombres, apellidos] = nombresCompletos.split(" ");
  return [nombres, apellidos];
}

let listaNombres = ["Robert Rodriguez", "Conor Callaguer", "Cesare Casadei"];

// Utilizar Map para aplicar la funcion a cada elemento de la lista
// const listaNombresCambiados = listaNombres.map(CambiarFormatoNombres);
// console.log(listaNombresCambiados);

const sublistasSeparadasNombresApellidos = listaNombres.map(FormateaNombres);
console.log(sublistasSeparadasNombresApellidos);

//* otra version
// Función para dividir nombres en nombre y apellido
function separarNombres(listaNombres) {
  return listaNombres.map((nombre) => {
    const [nombreParte, apellidoParte] = nombre.split(" ");
    return [nombreParte, apellidoParte];
  });
}

// Lista de nombres en formato "nombre apellido"
const listaNombres2 = ["Juan Perez", "Maria Rodriguez", "Carlos Gomez"];

// Utilizar la función para obtener la nueva lista
const listaSeparada = separarNombres(listaNombres2);

// Imprimir la nueva lista
console.log(listaSeparada);
