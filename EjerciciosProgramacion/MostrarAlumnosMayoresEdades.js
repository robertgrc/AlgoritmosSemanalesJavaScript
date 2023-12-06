//*  Dadas las edades y alturas de 5 alumnos, mostrar la edad y la estatura media, la cantidad de alumnos mayores de 18 años, y la cantidad de alumnos que miden más de 1.75.

function devuelveEdadAltura(alumnos) {
  //Inicializar variables para almacenar la suma de edades y alturas
  // la cantidad de Mayoresde19 y con estaturamayor175
  let sumaEdades = 0;
  let sumaAlturas = 0;
  let cantidadMayores18 = 0;
  let cantidadAlturaMayor175 = 0;

  const alumnosFormateado = alumnos.map((alumno) => {
    let [nombre, edad, altura] = alumno.split(", ");
    edad = parseInt(edad);
    altura = parseFloat(altura);

    //Sumar edades y alturas
    sumaEdades += edad;
    sumaAlturas += altura;

    //Verificar si el alumno es mayor de 18 y tiene altura mayor a 1.75
    if (edad > 18) {
      cantidadMayores18++;
    }
    if (altura > 1.75) {
      cantidadAlturaMayor175++;
    }
    return [nombre, edad, altura];
  });

  //Calcular la media de edades y alturas

  const mediaEdades = sumaEdades / alumnos.length;
  const mediaAlturas = sumaAlturas / alumnos.length;

  //Devolver un objeto con la informacion solicitada
  return {
    mediaEdades,
    mediaAlturas,
    cantidadMayores18,
    cantidadAlturaMayor175,
  };
}

let alumnos = [
  "robert, 39, 1.77",
  "Carlos, 28, 1.80",
  "Julio, 22, 1.77",
  "huascar, 41, 1.70",
];

let resultado = devuelveEdadAltura(alumnos);
console.log("Media de Edades:", resultado.mediaEdades);
console.log("Media de Alturas:", resultado.mediaAlturas);
console.log(
  "Cantidad de alumnos mayores de 18 años:",
  resultado.cantidadMayores18
);
console.log(
  "Cantidad de alumnos con altura mayor a 1.75:",
  resultado.cantidadAlturaMayor175
);
