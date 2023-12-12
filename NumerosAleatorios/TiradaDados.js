//* Escribe un programa que muestre la tirada de tres dados. Se debe mostrar también la suma total (los puntos que suman entre los tres dados).

function TiradaDados(numero) {
  let aleatorio = 0;
  let sumatoria = 0;
  for (let i = 0; i < numero; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 6);
    switch (numeroAleatorio) {
      case 0:
        aleatorio = 1;
        break;
      case 1:
        aleatorio = 2;
        break;
      case 2:
        aleatorio = 3;
        break;
      case 3:
        aleatorio = 4;
        break;
      case 4:
        aleatorio = 5;
        break;
      case 5:
        aleatorio = 6;
        break;
      default:
        break;
    }
    console.log(aleatorio);
    sumatoria += aleatorio;
  }
  return sumatoria;
}

console.log(`La sumatoria de los 3 dados es ${TiradaDados(3)}`);
