//* Pedir 10 sueldos. Mostrar su suma y cuantos hay mayores de 1000€.

function SumaSueldos(sueldos) {
  let mayores = sueldos.filter((sueldo) => sueldo > 1000);
  console.log("mayores", mayores);
  let cantidadMayores = mayores.length;
  let sumatoria = mayores.reduce((acumulado, numero) => acumulado + numero, 0);
  return { sumatoria, cantidadMayores };
}

let salarios = [1500, 4500, 7000, 12000, 1000, 2000, 800, 700, 300, 4000];
let respuesta = SumaSueldos(salarios);
console.log(`La sumatoria de los salarios es: ${respuesta.sumatoria}`);
console.log(
  `cantidad de sueldos mayores a 1000 euros es de: ${respuesta.cantidadMayores}`
);
