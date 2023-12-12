//* ¿Cómo podríamos generar un día de la semana de forma aleatoria? En efecto, primero generamos un número entre 1 y 7 ambos inclusive y luego hacemos corresponder un día de la semana a cada uno de los números
//* Genera 10 dias de la semana aleatorios

function generaDiaAleatorio() {
  let diaSemana = "";
  let respuesta = [];
  for (let i = 0; i < 10; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 7);
    switch (numeroAleatorio) {
      case 0:
        diaSemana = "Lunes";
        break;
      case 1:
        diaSemana = "Martes";
        break;
      case 2:
        diaSemana = "Miercoles";
        break;
      case 3:
        diaSemana = "Jueves";
        break;
      case 4:
        diaSemana = "Viernes";
        break;
      case 5:
        diaSemana = "Sabado";
        break;
      case 6:
        diaSemana = "Domingo";
        break;

      default:
        break;
    }
    respuesta.push(diaSemana);
  }

  return respuesta;
}

console.log(generaDiaAleatorio());
