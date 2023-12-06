//*  Queremos desarrollar una aplicación que nos ayude a gestionar las notas de un centro educativo. Cada grupo (o clase) está compuesto por 5 alumnos. Se pide leer las notas del primer, segundo y tercer trimestre de un grupo. Debemos mostrar al final: la nota media del grupo en cada trimestre, y la media del alumno que se encuentra en la posición N (N se lee por teclado).

function calcularNotas(estudiantes, nombreBuscado) {
  //Funcion para calcular Promedio de un conjunto de numeros
  function calcularPromedio(notas) {
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return suma / notas.length;
  }

  const estudianteBuscado = estudiantes.find(
    (estudiante) => estudiante.nombreEstudiante === nombreBuscado
  );
  console.log("estudianteBuscado", estudianteBuscado);

  if (estudianteBuscado) {
    const notaFinal = calcularPromedio([
      estudianteBuscado.nota1,
      estudianteBuscado.nota2,
      estudianteBuscado.nota3,
    ]);

    const mediaPrimerTrimestre = estudianteBuscado.nota1;
    const mediaSegundoTrimestre = estudianteBuscado.nota2;
    const mediaTercerTrimestre = estudianteBuscado.nota3;

    console.log(`Nombre: ${estudianteBuscado.nombreEstudiante}`);
    console.log(`Nota Final: ${notaFinal.toFixed(2)}`);
    console.log(`Media Primer Trimestre: ${mediaPrimerTrimestre.toFixed(2)}`);
    console.log(`Media Segundo Trimestre: ${mediaSegundoTrimestre.toFixed(2)}`);
    console.log(`Media Tercer Trimestre: ${mediaTercerTrimestre.toFixed(2)}`);
  } else {
    console.log(`No se encontró un estudiante con el nombre ${nombreBuscado}`);
  }

  const PromedioClasePrimerTrimestre = calcularPromedio(
    estudiantes.map((estudiante) => estudiante.nota1)
  );
  const PromedioClaseSegundoTrimestre = calcularPromedio(
    estudiantes.map((estudiante) => estudiante.nota2)
  );
  const PromedioClaseTercerTrimestre = calcularPromedio(
    estudiantes.map((estudiante) => estudiante.nota3)
  );

  console.log(
    `Promedio Primer Trimestre de Todos los Alumnos: ${PromedioClasePrimerTrimestre.toFixed(
      2
    )}`
  );
  console.log(
    `Promedio Segundo Trimestre de Todos los Alumnos: ${PromedioClaseSegundoTrimestre.toFixed(
      2
    )}`
  );
  console.log(
    `Promedio Tercer Trimestre de Todos los Alumnos: ${PromedioClaseTercerTrimestre.toFixed(
      2
    )}`
  );

  // Calcular y mostrar notas finales de todos los alumnos
  console.log("Notas Finales de Todos los Alumnos:");
  estudiantes.forEach((estudiante) => {
    const notaFinal = calcularPromedio([
      estudiante.nota1,
      estudiante.nota2,
      estudiante.nota3,
    ]);
    console.log(`${estudiante.nombreEstudiante}: ${notaFinal.toFixed(2)}`);
  });
}

// Ejemplo de uso
const estudiantes = [
  { nombreEstudiante: "Juan Perez", nota1: 85, nota2: 90, nota3: 78 },
  { nombreEstudiante: "Maria Rodriguez", nota1: 92, nota2: 88, nota3: 95 },
  { nombreEstudiante: "Carlos Gomez", nota1: 78, nota2: 85, nota3: 80 },
  { nombreEstudiante: "Laura Torres", nota1: 90, nota2: 87, nota3: 92 },
  { nombreEstudiante: "Pedro Sanchez", nota1: 88, nota2: 94, nota3: 89 },
];

calcularNotas(estudiantes, "Maria Rodriguez");
