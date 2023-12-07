//* Calcula la nota de un trimestre de la asignatura Programación. El programa pedirá las tres notas que ha sacado el alumno en los dos tres controles. Si la media de los dos controles da un número mayor a 50, el alumno está aprobado y se mostrará la media. En caso de que la media sea un número menor que 50, se muestra la media y un mesaje de alumno reprobado

function notasAlumno(notas) {
  let sumatoriaNotas = notas.reduce((acumulado, nota) => acumulado + nota, 0);
  let promedio = sumatoriaNotas / notas.length;
  return promedio;
}

let notas1 = [45, 83, 77];
let notas2 = [45, 33, 57];
console.log(notasAlumno(notas1));
console.log(notasAlumno(notas2));
