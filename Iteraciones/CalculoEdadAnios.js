//* Dada una lista de años de nacimiento, utiliza map para calcular la edad actual en años para cada año de nacimiento, asumiendo el año actual como 2023.

function CalculaEdad(AnioNacimiento) {
  let edadesAnios = AnioNacimiento.map((anio) => 2023 - anio);
  return edadesAnios;
}

// Ejemplo de uso:
const anioNacimiento = [1994, 1882, 1948, 1982, 1897, 1984];
const edades = CalculaEdad(anioNacimiento);

console.log(`El edad correspondiente es de: ${edades}`);
