//* Hemos visto cómo generar números aleatorios con y sin decimales y en diferentes intervalos. Vamos a producir ahora de forma aleatoria una palabra - piedra, papel o tijera - generando primero un número entero entre 0 y 2 y posteriormente haciendo corresponder una palabra a cada número.

function piedraPapelTijera() {
  const numeroAleatorio = Math.floor(Math.random() * 3) + 1;
  let respuesta = "";
  switch (numeroAleatorio) {
    case 1:
      respuesta = "piedra";
      break;
    case 2:
      respuesta = "papel";
      break;
    case 3:
      respuesta = "tijera";
      break;

    default:
      console.log("Error");
  }
  return respuesta;
}

let numeroAleatorio = piedraPapelTijera();
console.log(numeroAleatorio);

//En esta función, Math.random() genera un número decimal en el rango [0, 1), luego se multiplica por 3 para obtener un rango de [0, 3), y finalmente se utiliza Math.floor() para redondear hacia abajo y obtener un número entero en el rango [0, 2]. Sumando 1 al resultado, obtienes un número en el rango [1, 3].
