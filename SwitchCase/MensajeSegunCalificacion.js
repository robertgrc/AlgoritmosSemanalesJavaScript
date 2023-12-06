//* Crea un programa que tome una calificación (A, B, C) e imprima un mensaje relacionado con la calificación.

function MandaMensaje(nota) {
  let mensaje = "";

  switch (true) {
    case nota < 51:
      mensaje = "Reprobado";
      break;
    case nota <= 100 && nota >= 80:
      mensaje = "Eres un alumno Excelente";
      break;
    case nota > 50:
      mensaje = "Aprobado";
      break;

    default:
      mensaje = "Valor fuera del rango";
  }
  return mensaje;
}

console.log(MandaMensaje(70));
console.log(MandaMensaje(44));
console.log(MandaMensaje(90));
