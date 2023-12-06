//* Escribe una función que tome un arreglo de objetos, donde cada objeto representa a una persona con su nombre y edad, y devuelva el promedio de edades.

function calcularPromedioEdades(personas) {
  const totalEdades = personas.reduce(
    (acumulador, persona) => acumulador + persona.edad,
    0
  );
  return totalEdades / personas.length;
}

// Ejemplo de uso
const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 22 },
];

const promedioEdades = calcularPromedioEdades(personas);
console.log(`Promedio de Edades: ${promedioEdades}`);
