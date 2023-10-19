//* Dado un Array de alumnos(nombre y nota) mostrar cuantos alumnos estan suspensos y cuantos estan aprobados
//*

function suspensos(alumnos) {
  alumnosAprobados = 0;
  alumnosSuspensos = 0;
  for (let estudiante of alumnos) {
    if (estudiante[1] > 5) {
      alumnosAprobados++;
    } else {
      alumnosSuspensos++;
    }
  }
  console.log(alumnosAprobados);
  console.log(alumnosSuspensos);
  return `alumnosAprobados:${alumnosAprobados}, alumnosSuspensos:${alumnosSuspensos}`;
}

console.log(
  suspensos([
    ["victor", 10],
    ["Jose", 7],
    ["pepe", 4],
    ["Marta", 7],
  ])
);
